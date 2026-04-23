import type { Bilingual } from './projects';

export type Experience = {
  role: Bilingual;
  org: Bilingual;
  url?: string;
  start: string;
  end: string | null;
  blurb: Bilingual;
};

export const experience: Experience[] = [
  {
    role: { en: 'Machine Learning Intern', ja: '機械学習インターン' },
    org: { en: '2WINS, Inc.', ja: '株式会社 2WINS' },
    url: 'https://www.2wins.ai',
    start: '2025-04',
    end: null,
    blurb: {
      en: 'Working on ML/AI product development — prototyping and shipping models into real applications.',
      ja: 'ML/AIプロダクト開発。モデルのプロトタイピングから実アプリへの統合まで担当。'
    }
  },
  {
    role: { en: 'B.Sc. Computer Science & Engineering', ja: 'コンピュータ理工学部 在学' },
    org: { en: 'University of Aizu', ja: '会津大学' },
    url: 'https://u-aizu.ac.jp',
    start: '2024-04',
    end: null,
    blurb: {
      en: 'Studying CS with a focus on machine learning, deep learning, and data science.',
      ja: '機械学習・深層学習・データサイエンスを中心に学習中。'
    }
  }
];
