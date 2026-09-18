/** 画面のこの高さまで来た位置を線の先端とみなす */
const REACH = 0.8;
/** 節点は .entry-body の上端から 0.6em の位置にある（index.astro の ::before と揃える） */
const DOT_TOP_EM = 0.6;
/** JS が測り終えた印。CSS はこれが付くまで従来の border-left を出したままにする */
const ANIMATED_CLASS = 'is-animated';

interface Node {
  entry: HTMLElement;
  body: HTMLElement;
  /** 節点の、entry-body 上端からの距離（px） */
  dotOffset: number;
}

/** 縦線をスクロール進捗に合わせて伸ばし、線が届いた節点を弾ませる */
export function startTimeline(list: HTMLElement): () => void {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return () => {};

  const nodes: Node[] = [];
  for (const entry of list.querySelectorAll<HTMLElement>('[data-timeline-entry]')) {
    const body = entry.querySelector<HTMLElement>('[data-timeline-body]');
    if (body !== null) nodes.push({ entry, body, dotOffset: 0 });
  }

  const first = nodes[0];
  const last = nodes[nodes.length - 1];
  if (first === undefined || last === undefined) return () => {};

  let frame = 0;

  const measureDots = (): void => {
    for (const node of nodes) {
      const fontSize = Number.parseFloat(window.getComputedStyle(node.body).fontSize);
      node.dotOffset = fontSize * DOT_TOP_EM;
    }
  };

  // 各項目は reveal の translate で包含ブロックになるため、offsetTop ではなく矩形で測る
  const update = (): void => {
    frame = 0;
    const listRect = list.getBoundingClientRect();
    const firstRect = first.body.getBoundingClientRect();
    const lastRect = last.body.getBoundingClientRect();
    const dotTops = nodes.map((node) => node.body.getBoundingClientRect().top + node.dotOffset);

    const lineHeight = Math.max(1, lastRect.bottom - firstRect.top);
    const progress = Math.min(
      1,
      Math.max(0, (window.innerHeight * REACH - firstRect.top) / lineHeight)
    );

    list.style.setProperty('--line-left', `${firstRect.left - listRect.left}px`);
    list.style.setProperty('--line-top', `${firstRect.top - listRect.top}px`);
    list.style.setProperty('--line-height', `${lineHeight}px`);
    list.style.setProperty('--timeline-progress', String(progress));

    nodes.forEach((node, index) => {
      const ratio = ((dotTops[index] ?? firstRect.top) - firstRect.top) / lineHeight;
      node.entry.classList.toggle('is-on', progress >= ratio);
    });
  };

  const schedule = (): void => {
    if (frame !== 0) return;
    frame = window.requestAnimationFrame(update);
  };

  const onResize = (): void => {
    measureDots();
    schedule();
  };

  list.classList.add(ANIMATED_CLASS);
  measureDots();
  update();
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', onResize);

  return () => {
    if (frame !== 0) window.cancelAnimationFrame(frame);
    window.removeEventListener('scroll', schedule);
    window.removeEventListener('resize', onResize);
    list.classList.remove(ANIMATED_CLASS);
  };
}
