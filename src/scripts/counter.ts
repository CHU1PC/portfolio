const DURATION_MS = 600;
/** セクションがこの割合だけ見えたら数え始める */
const VISIBLE_THRESHOLD = 0.4;

function pad(value: number): string {
  return String(value).padStart(2, '0');
}

function easeOut(ratio: number): number {
  return 1 - (1 - ratio) ** 3;
}

/** data-count の値まで 00 から数え上げる。SSR の HTML には最終値が入っている */
export function startCounters(root: ParentNode = document): () => void {
  const targets = Array.from(root.querySelectorAll<HTMLElement>('[data-count]'));
  if (targets.length === 0) return () => {};
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return () => {};

  const run = (element: HTMLElement): void => {
    const goal = Number(element.dataset.count);
    if (!Number.isFinite(goal)) return;

    const startedAt = performance.now();
    element.textContent = pad(0);

    const step = (now: number): void => {
      const ratio = Math.min(1, (now - startedAt) / DURATION_MS);
      element.textContent = pad(Math.round(goal * easeOut(ratio)));
      if (ratio < 1) window.requestAnimationFrame(step);
    };

    window.requestAnimationFrame(step);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!(entry.isIntersecting && entry.target instanceof HTMLElement)) continue;
        observer.unobserve(entry.target);
        run(entry.target);
      }
    },
    { threshold: VISIBLE_THRESHOLD }
  );

  for (const target of targets) observer.observe(target);
  return () => observer.disconnect();
}
