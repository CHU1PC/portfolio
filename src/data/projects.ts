export interface Bilingual {
  ja: string;
  en: string;
}

export interface Project {
  slug: string;
  title: Bilingual;
  year: number;
  description: Bilingual;
  tech: readonly string[];
  github: string;
  role?: Bilingual;
}

export const projects: readonly Project[] = [
  {
    slug: 'kikitoru',
    title: { ja: 'Kikitoru', en: 'Kikitoru' },
    year: 2026,
    description: {
      ja: '会議音声から議事録を自動生成する Web アプリ。AWS Transcribe で文字起こしと話者分離、Gemini で構造化 Markdown に要約し、pgvector で過去の議事録を自然言語検索できる。Google OAuth、レート制限、Alembic マイグレーション、GitHub Actions の CI まで一人で構築。',
      en: 'A web app that turns meeting audio into minutes on its own. AWS Transcribe handles transcription and speaker separation, Gemini condenses the result into structured Markdown, and pgvector makes past minutes searchable in plain language. I built all of it solo, down to Google OAuth, rate limiting, Alembic migrations and CI on GitHub Actions.'
    },
    tech: [
      'FastAPI',
      'React 19',
      'PostgreSQL',
      'pgvector',
      'AWS Transcribe',
      'Gemini',
      'Docker'
    ],
    github: 'https://github.com/CHU1PC/Kikitoru/tree/develop',
    role: { ja: '個人開発', en: 'Solo project' }
  },
  {
    slug: 'pr-times-hackathon',
    title: { ja: 'PR TIMES Hackathon 2026', en: 'PR TIMES Hackathon 2026' },
    year: 2026,
    description: {
      ja: '「未来の PR ネタを作り出す AI」。休眠から復帰した企業がプレスリリースを継続できるよう、LLM との壁打ちとヒアリングでイベント内容を決める。提供 DB の分析から中核仮説を検証し、AWS 上へ OIDC 連携の CI/CD でデプロイ。',
      en: 'An AI that invents the PR stories a company has not had yet. For companies coming back from a dormant stretch, it settles on an event worth announcing through a back-and-forth with an LLM and a short interview. We tested the core hypothesis against the dataset we were given, then shipped it to AWS with an OIDC-based CI/CD pipeline.'
    },
    tech: ['FastAPI', 'React', 'TypeScript', 'AWS (ECS, RDS, WAF)', 'OpenAI API', 'kubb'],
    github: 'https://github.com/CHU1PC/PR-TIMES-HACKATHON',
    role: { ja: 'チーム開発 (Team1)', en: 'Team project (Team1)' }
  },
  {
    slug: 'daylog',
    title: { ja: 'DayLog', en: 'DayLog' },
    year: 2025,
    description: {
      ja: '社内向けの作業時間記録と日報自動生成ツール。Linear の Issue を Webhook で同期し、週間カレンダーで作業内訳を可視化。個人タスク作成やチーム選択などの機能を担当。',
      en: 'An in-house tool for tracking hours and writing the daily report for you. Linear issues sync in over webhooks, and a weekly calendar shows where the time actually went. I owned features such as personal task creation and team switching.'
    },
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Linear API', 'Google Sheets API'],
    github: 'https://github.com/2WINS-Inc/DayLog',
    role: { ja: 'チーム開発', en: 'Team project' }
  },
  {
    slug: 'pythonchu',
    title: {
      ja: 'ゼロから作る Deep Learning 再実装',
      en: '"Deep Learning from Scratch" reimplementation'
    },
    year: 2025,
    description: {
      ja: '「ゼロから作る Deep Learning」を自分なりに再実装。誤差逆伝播から CNN まで NumPy だけで組み上げた。',
      en: 'My own take on the book "Deep Learning from Scratch". Everything from backpropagation to CNNs, built with nothing but NumPy.'
    },
    tech: ['Python', 'NumPy'],
    github: 'https://github.com/CHU1PC/pythonchu',
    role: { ja: '個人開発', en: 'Solo project' }
  }
];
