/** ポインタ位置を CSS 変数へ渡す。描画は [data-spotlight] 側の radial-gradient が担う */
export function startSpotlight(root: ParentNode = document): () => void {
  if (
    window.matchMedia('(hover: none)').matches ||
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ) {
    return () => {};
  }

  const cleanups = Array.from(root.querySelectorAll<HTMLElement>('[data-spotlight]')).map(
    (card) => {
      const onMove = (event: PointerEvent): void => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--mx', `${event.clientX - rect.left}px`);
        card.style.setProperty('--my', `${event.clientY - rect.top}px`);
      };

      card.addEventListener('pointermove', onMove, { passive: true });
      return () => card.removeEventListener('pointermove', onMove);
    }
  );

  return () => {
    for (const cleanup of cleanups) cleanup();
  };
}
