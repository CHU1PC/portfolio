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
    items: [
      'PyTorch',
      'scikit-learn',
      'OpenCV',
      'FastAPI',
      'LangChain',
      'React',
      'SvelteKit',
      'Tailwind CSS'
    ]
  },
  {
    groupKey: 'tools',
    items: [
      'Git',
      'GitHub',
      'Docker',
      'AWS',
      'PostgreSQL',
      'Linux',
      'uv',
      'Bun',
      'Vite',
      'pytest',
      'Playwright',
      'VS Code',
      'Jupyter',
      'Obsidian',
      'Notion'
    ]
  }
];
