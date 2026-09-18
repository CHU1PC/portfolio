/** 子要素をずらしてフェードインさせる間隔（ms） */
const STAGGER_MS = 60;
/** セクションがこの割合だけ見えたら表示を始める */
const VISIBLE_THRESHOLD = 0.1;

export function startReveal(): () => void {
  const groups = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal-group]'));
  if (groups.length === 0) return () => {};

  const show = (group: HTMLElement): void => group.classList.add('is-visible');

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    groups.forEach(show);
    return () => {};
  }

  for (const group of groups) {
    group.querySelectorAll<HTMLElement>('[data-reveal]').forEach((child, index) => {
      child.style.transitionDelay = `${index * STAGGER_MS}ms`;
    });
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        show(entry.target as HTMLElement);
        observer.unobserve(entry.target);
      }
    },
    { threshold: VISIBLE_THRESHOLD }
  );

  for (const group of groups) observer.observe(group);
  return () => observer.disconnect();
}
