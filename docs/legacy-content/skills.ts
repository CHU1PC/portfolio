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
      'FastAPI',
      'SQLModel',
      'LangChain',
      'PyTorch',
      'scikit-learn',
      'OpenCV',
      'SvelteKit',
      'React',
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
      'Alembic',
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
