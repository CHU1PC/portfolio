/** これを超えたら html[data-scrolled] を立てる。ヒーローのスクロール誘導が消える */
const SCROLLED_Y = 80;

/** 進捗バーの幅を更新する。data-scrolled の付け外しも同じ rAF でまとめる */
export function startScrollProgress(bar: HTMLElement): () => void {
  let frame = 0;

  const update = (): void => {
    frame = 0;
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0;
    bar.style.transform = `scaleX(${ratio})`;
    document.documentElement.toggleAttribute('data-scrolled', window.scrollY > SCROLLED_Y);
  };

  const schedule = (): void => {
    if (frame !== 0) return;
    frame = window.requestAnimationFrame(update);
  };

  update();
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule);

  return () => {
    if (frame !== 0) window.cancelAnimationFrame(frame);
    window.removeEventListener('scroll', schedule);
    window.removeEventListener('resize', schedule);
  };
}
