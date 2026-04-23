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
    role: { en: 'Backend & ML Engineering Intern', ja: 'バックエンド・機械学習エンジニアインターン' },
    org: { en: '2WINS, Inc.', ja: '株式会社 2WINS' },
    url: 'https://www.2wins.ai',
    start: '2025-04',
    end: null,
    blurb: {
      en: 'Backend engineering on an AI product — designing APIs and data layers, and wiring ML models and LLM pipelines into real applications.',
      ja: 'AIプロダクトのバックエンド開発を担当。API・データ層の設計から、MLモデル・LLMパイプラインを実アプリへ組み込むところまで。'
    }
  },
  {
    role: { en: 'B.Sc. Computer Science & Engineering', ja: 'コンピュータ理工学部 在学' },
    org: { en: 'University of Aizu', ja: '会津大学' },
    url: 'https://u-aizu.ac.jp',
    start: '2024-04',
    end: null,
    blurb: {
      en: 'Studying CS with a focus on machine learning, deep learning, and data science. Admitted a year early through the early-entrance program (飛び入学).',
      ja: '機械学習・深層学習・データサイエンスを中心に学習中。飛び入学制度で1年早く入学。'
    }
  }
];
