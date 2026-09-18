import type { Bilingual } from './projects';

export type ExperienceKind = 'work' | 'education' | 'short';

export interface Experience {
  role: Bilingual;
  org: Bilingual;
  url?: string;
  /** 'YYYY-MM'。期間が未確定のものは 'TODO' が入る */
  start: string;
  /** null は現在も継続中 */
  end: string | null;
  blurb: Bilingual;
  highlights?: readonly { label: Bilingual; body: Bilingual }[];
  kind: ExperienceKind;
}

export const experience: readonly Experience[] = [
  {
    role: {
      ja: 'バックエンド・機械学習エンジニアインターン',
      en: 'Backend & ML Engineering Intern'
    },
    org: { ja: '株式会社 2WINS', en: '2WINS, Inc.' },
    url: 'https://www.2wins.ai',
    start: '2025-04',
    end: null,
    blurb: {
      ja: 'AI プロダクトのバックエンドを実装しています。型の堅牢さを保ちながら LLM や DL モデルをアプリへ組み込み、本番環境で動かすところまで担当しています。',
      en: 'Backend development for an AI product. I integrate LLMs and DL models into the application with strict typing, and run it in production.'
    },
    highlights: [
      {
        label: { ja: 'バックエンド', en: 'Backend' },
        body: {
          ja: 'Python × FastAPI × Pydantic で型を崩さずに API を組み、LLM と DL モデルを組み込む',
          en: 'APIs in Python with FastAPI and Pydantic, with LLMs and DL models integrated under strict typing'
        }
      },
      {
        label: { ja: 'データベース', en: 'Database' },
        body: {
          ja: 'PostgreSQL の設計とマイグレーション（SQLModel / Alembic）',
          en: 'PostgreSQL schema design and migrations with SQLModel and Alembic'
        }
      },
      {
        label: { ja: 'インフラ', en: 'Infra' },
        body: {
          ja: 'AWS へのデプロイと運用（Docker、ECS / RDS / S3）',
          en: 'Deployment and operation on AWS with Docker, ECS, RDS, and S3'
        }
      },
      {
        label: { ja: 'フロントエンド', en: 'Frontend' },
        body: {
          ja: 'React と Svelte で画面を実装し、自分の API と繋ぐ',
          en: 'Screens in React and Svelte, connected to the backend APIs'
        }
      },
      {
        label: { ja: '品質', en: 'Quality' },
        body: {
          ja: '非同期処理とキャッシュで応答を速くし、pytest と Playwright でテストを回す',
          en: 'Faster responses with async processing and caching, tested with pytest and Playwright'
        }
      }
    ],
    kind: 'work'
  },
  {
    role: { ja: '短期インターン（5 日間）', en: 'Short-term Internship (5 days)' },
    org: { ja: 'Progate', en: 'Progate' },
    // TODO: fill in
    start: '2026-09',
    end: '2026-09',
    blurb: { ja: '', en: '' },
    kind: 'short'
  },
  {
    role: { ja: '短期インターン（2 日間）', en: 'Short-term Internship (2 days)' },
    org: { ja: 'M3', en: 'M3' },
    // TODO: fill in
    start: '2026-09',
    end: '2026-09',
    blurb: { ja: '', en: '' },
    kind: 'short'
  },
  {
    role: { ja: 'PR TIMES ハッカソン 2026 Summer', en: 'PR TIMES Hackathon 2026 Summer' },
    org: { ja: 'PR TIMES', en: 'PR TIMES' },
    url: 'https://prtimes.co.jp',
    start: '2026-08',
    end: '2026-08',
    blurb: {
      ja: 'LLM 活用の PR 企画支援 AI を開発。要件定義から AWS へのデプロイまで担当した。',
      en: 'Built an LLM-powered AI that helps plan PR campaigns. I worked on it from requirements through to the AWS deployment.'
    },
    kind: 'short'
  },
  {
    role: { ja: '短期インターン（5 日間）', en: 'Short-term Internship (5 days)' },
    org: { ja: 'AVILEN', en: 'AVILEN' },
    // TODO: fill in
    start: '2025-10',
    end: '2025-10',
    blurb: { ja: '', en: '' },
    kind: 'short'
  },
  {
    role: { ja: 'コンピュータ理工学部 在学', en: 'B.Sc. Computer Science & Engineering' },
    org: { ja: '会津大学', en: 'University of Aizu' },
    url: 'https://u-aizu.ac.jp',
    start: '2024-04',
    end: null,
    blurb: {
      ja: '機械学習・深層学習・データサイエンスを中心に学習中。飛び入学制度で 1 年早く入学。',
      en: 'Studying CS with a focus on machine learning, deep learning and data science. Admitted a year early through the early-entrance program (飛び入学).'
    },
    kind: 'education'
  }
];
