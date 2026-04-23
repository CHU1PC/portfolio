import type { Action } from 'svelte/action';

export const inView: Action<HTMLElement, { once?: boolean } | undefined> = (node, params) => {
  const once = params?.once ?? true;
  node.classList.add('in-view-fade');
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          node.classList.add('visible');
          if (once) observer.unobserve(node);
        } else if (!once) {
          node.classList.remove('visible');
        }
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  observer.observe(node);
  return {
    destroy() {
      observer.disconnect();
    }
  };
};
