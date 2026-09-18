/** タグの位置に応じてポップアップを画面内に収まる向きへ振り分ける */
export function alignSkillTips(root: ParentNode = document): () => void {
  const tips = Array.from(root.querySelectorAll<HTMLElement>('.tag-tip'));
  if (tips.length === 0) return () => {};

  const update = (): void => {
    for (const tip of tips) {
      const tag = tip.parentElement;
      if (tag === null) continue;
      const rect = tag.getBoundingClientRect();
      const tipWidth = tip.offsetWidth;

      if (rect.left + rect.width / 2 - tipWidth / 2 < 0) {
        tip.dataset.align = 'start';
      } else if (rect.left + rect.width / 2 + tipWidth / 2 > window.innerWidth) {
        tip.dataset.align = 'end';
      } else {
        delete tip.dataset.align;
      }
    }
  };

  update();
  window.addEventListener('resize', update);
  return () => window.removeEventListener('resize', update);
}
