export type SkillGroup = {
  groupKey: 'languages' | 'frameworks' | 'tools';
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    groupKey: 'languages',
    items: ['Python', 'TypeScript', 'JavaScript', 'SQL', 'C']
  },
  {
    groupKey: 'frameworks',
    items: ['PyTorch', 'scikit-learn', 'OpenCV', 'FastAPI', 'React', 'SvelteKit']
  },
  {
    groupKey: 'tools',
    items: ['Git', 'GitHub', 'Docker', 'Linux', 'VS Code', 'Jupyter', 'Obsidian', 'Notion']
  }
];
