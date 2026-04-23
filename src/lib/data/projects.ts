export type Bilingual = { en: string; ja: string };

export type Project = {
  slug: string;
  title: Bilingual;
  description: Bilingual;
  tech: string[];
  github: string;
  demo?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: 'mini-gpt',
    title: { en: 'MINI-GPT', ja: 'MINI-GPT' },
    description: {
      en: 'A compact GPT-style transformer trained from scratch — tokenizer, attention, training loop, the works.',
      ja: 'トークナイザから学習ループまで、GPT風トランスフォーマをゼロから実装したコンパクトな実装。'
    },
    tech: ['Python', 'PyTorch', 'Transformers'],
    github: 'https://github.com/CHU1PC/MINI-GPT',
    featured: true
  },
  {
    slug: 'document-classifier',
    title: { en: 'Document Classifier', ja: 'ドキュメント分類器' },
    description: {
      en: 'Classical + deep-learning pipelines for classifying documents, benchmarked side by side.',
      ja: '古典手法と深層学習の両パイプラインで文書分類を実装し、性能を比較。'
    },
    tech: ['Python', 'scikit-learn', 'PyTorch', 'Jupyter'],
    github: 'https://github.com/CHU1PC/document_classifier',
    featured: true
  },
  {
    slug: 'pythonchu',
    title: { en: '"Deep Learning from Scratch" reimpl', ja: 'ゼロから作るDeep Learning 再実装' },
    description: {
      en: 'My own implementation of the exercises from the book ゼロから作るDeep Learning — backprop, CNNs, and beyond, in pure Python/NumPy.',
      ja: '「ゼロから作るDeep Learning」のコードを自分なりに再実装。誤差逆伝播からCNNまでNumPyで構築。'
    },
    tech: ['Python', 'NumPy'],
    github: 'https://github.com/CHU1PC/pythonchu',
    featured: true
  },
  {
    slug: 'receipt-toku',
    title: { en: 'receipt-toku', ja: 'receipt-toku' },
    description: {
      en: 'Receipt-tracking web app — OCR-assisted expense capture with a TypeScript frontend.',
      ja: 'TypeScriptフロント＋OCRで領収書を取り込んで家計管理するWebアプリ。'
    },
    tech: ['TypeScript', 'React', 'OCR'],
    github: 'https://github.com/CHU1PC/receipt-toku',
    featured: true
  },
  {
    slug: 'taskmanager',
    title: { en: 'Taskmanager', ja: 'タスク管理ツール' },
    description: {
      en: 'A small Python task manager — my first project to earn a GitHub star in the wild.',
      ja: 'Pythonで書いた小さなタスク管理ツール。初めてGitHubスターが付いたプロジェクト。'
    },
    tech: ['Python'],
    github: 'https://github.com/CHU1PC/Taskmanager',
    featured: false
  },
  {
    slug: 'kaggle-comp',
    title: { en: 'Kaggle Competitions', ja: 'Kaggleコンペ' },
    description: {
      en: 'Notebooks and solutions from Kaggle competitions I\'ve entered — feature engineering, CV tricks, and ensembling.',
      ja: '参加したKaggleコンペのノートブックと解法。特徴量エンジニアリング、CV、アンサンブルなど。'
    },
    tech: ['Python', 'pandas', 'Jupyter'],
    github: 'https://github.com/CHU1PC/kaggle_comp',
    featured: false
  },
  {
    slug: 'data-analytics-100',
    title: { en: 'Data Analytics 100 Knocks', ja: 'データ分析100本ノック' },
    description: {
      en: 'Working through the classic 100-exercise data-analytics drill book in Jupyter.',
      ja: '「データ分析100本ノック」をJupyterで一問ずつ解いた記録。'
    },
    tech: ['Python', 'pandas', 'Jupyter'],
    github: 'https://github.com/CHU1PC/data_analytics_100knock',
    featured: false
  },
  {
    slug: 'caching-asyncing',
    title: { en: 'Caching & Async patterns', ja: 'キャッシュ / 非同期パターン' },
    description: {
      en: 'A study of Python caching and async patterns — decorators, asyncio gather, and lru_cache under load.',
      ja: 'Pythonのキャッシュ・非同期パターンの勉強記録。デコレータ、asyncio.gather、lru_cacheなど。'
    },
    tech: ['Python', 'asyncio'],
    github: 'https://github.com/CHU1PC/Caching-Asyncing',
    featured: false
  }
];
