import type { Lang } from '../i18n';
import type { Bilingual } from './projects';

export type SkillGroupKey = 'languages' | 'frontend' | 'backend' | 'ml' | 'infra';

export interface SkillItem {
  /** 表記が言語で変わらないものは素の文字列で書く */
  name: string | Bilingual;
  url: string;
  note: Bilingual;
}

export interface SkillGroup {
  key: SkillGroupKey;
  items: readonly SkillItem[];
}

export function skillLabel(item: SkillItem, lang: Lang): string {
  return typeof item.name === 'string' ? item.name : item.name[lang];
}

/** ポップアップに出すドメイン名。www. は落とす */
export function skillHost(url: string): string {
  return new URL(url).hostname.replace(/^www\./, '');
}

export const skills: readonly SkillGroup[] = [
  {
    key: 'languages',
    items: [
      {
        name: 'Python',
        url: 'https://www.python.org/',
        note: {
          ja: '汎用プログラミング言語。バックエンドと ML で使用。',
          en: 'General-purpose language used for backend and ML.'
        }
      },
      {
        name: 'TypeScript',
        url: 'https://www.typescriptlang.org/',
        note: {
          ja: '型付きの JavaScript。フロント全般で使用。',
          en: 'Typed superset of JavaScript used across the frontend.'
        }
      },
      {
        name: 'JavaScript',
        url: 'https://developer.mozilla.org/docs/Web/JavaScript',
        note: {
          ja: 'Web の標準スクリプト言語。',
          en: 'The standard scripting language of the web.'
        }
      },
      {
        name: 'SQL',
        url: 'https://www.iso.org/standard/76583.html',
        note: {
          ja: 'リレーショナル DB を操作するクエリ言語。',
          en: 'Query language for relational databases.'
        }
      }
    ]
  },
  {
    key: 'frontend',
    items: [
      {
        name: 'React',
        url: 'https://react.dev/',
        note: { ja: 'UI を構築する JavaScript ライブラリ。', en: 'JavaScript library for building UIs.' }
      },
      {
        name: 'Svelte',
        url: 'https://svelte.dev/',
        note: { ja: 'コンパイル方式の UI フレームワーク。', en: 'Compiler-based UI framework.' }
      },
      {
        name: 'Astro',
        url: 'https://astro.build/',
        note: {
          ja: 'コンテンツ重視の Web フレームワーク。本サイトの基盤。',
          en: 'Content-focused web framework powering this site.'
        }
      },
      {
        name: 'Tailwind CSS',
        url: 'https://tailwindcss.com/',
        note: { ja: 'ユーティリティファーストの CSS フレームワーク。', en: 'Utility-first CSS framework.' }
      },
      {
        name: 'Vite',
        url: 'https://vite.dev/',
        note: { ja: 'フロントエンド向けの高速ビルドツール。', en: 'Fast frontend build tool.' }
      },
      {
        name: 'Zod',
        url: 'https://zod.dev/',
        note: {
          ja: 'TypeScript 向けのスキーマ検証ライブラリ。',
          en: 'TypeScript-first schema validation library.'
        }
      },
      {
        name: 'kubb',
        url: 'https://kubb.dev/',
        note: {
          ja: 'OpenAPI から Zod スキーマやクライアントを生成するツール。',
          en: 'Generates Zod schemas and clients from OpenAPI.'
        }
      }
    ]
  },
  {
    key: 'backend',
    items: [
      {
        name: 'FastAPI',
        url: 'https://fastapi.tiangolo.com/',
        note: { ja: '非同期対応の Python Web API フレームワーク。', en: 'Async-first Python web API framework.' }
      },
      {
        name: 'SQLModel',
        url: 'https://sqlmodel.tiangolo.com/',
        note: {
          ja: 'SQLAlchemy と Pydantic を統合した ORM。',
          en: 'ORM combining SQLAlchemy and Pydantic.'
        }
      },
      {
        name: 'SQLAlchemy',
        url: 'https://www.sqlalchemy.org/',
        note: { ja: 'Python の SQL ツールキット兼 ORM。', en: 'Python SQL toolkit and ORM.' }
      },
      {
        name: 'Alembic',
        url: 'https://alembic.sqlalchemy.org/',
        note: {
          ja: 'SQLAlchemy 向けのマイグレーションツール。',
          en: 'Database migration tool for SQLAlchemy.'
        }
      },
      {
        name: 'PostgreSQL',
        url: 'https://www.postgresql.org/',
        note: { ja: 'オープンソースのリレーショナル DB。', en: 'Open-source relational database.' }
      },
      {
        name: 'pgvector',
        url: 'https://github.com/pgvector/pgvector',
        note: {
          ja: 'PostgreSQL 向けのベクトル検索拡張。',
          en: 'Vector similarity extension for PostgreSQL.'
        }
      },
      {
        name: 'LangChain',
        url: 'https://www.langchain.com/',
        note: { ja: 'LLM アプリを構築するフレームワーク。', en: 'Framework for building LLM applications.' }
      },
      {
        name: 'OpenAI API',
        url: 'https://platform.openai.com/',
        note: { ja: 'OpenAI のモデルを利用する API。', en: 'API for using OpenAI models.' }
      },
      {
        name: 'Gemini API',
        url: 'https://ai.google.dev/',
        note: { ja: 'Google の Gemini モデルを利用する API。', en: 'API for using Google Gemini models.' }
      },
      {
        name: 'boto3',
        url: 'https://boto3.amazonaws.com/v1/documentation/api/latest/index.html',
        note: { ja: 'AWS を操作する Python SDK。', en: 'Python SDK for AWS.' }
      }
    ]
  },
  {
    key: 'ml',
    items: [
      {
        name: 'PyTorch',
        url: 'https://pytorch.org/',
        note: { ja: '深層学習フレームワーク。', en: 'Deep learning framework.' }
      },
      {
        name: 'NumPy',
        url: 'https://numpy.org/',
        note: { ja: 'Python の数値計算ライブラリ。', en: 'Numerical computing library for Python.' }
      },
      {
        name: 'scikit-learn',
        url: 'https://scikit-learn.org/',
        note: { ja: '古典的な機械学習ライブラリ。', en: 'Classical machine learning library.' }
      },
      {
        name: 'OpenCV',
        url: 'https://opencv.org/',
        note: { ja: '画像・映像処理ライブラリ。', en: 'Computer vision library.' }
      },
      {
        name: 'transformers',
        url: 'https://huggingface.co/docs/transformers',
        note: {
          ja: 'Hugging Face の事前学習モデルライブラリ。',
          en: 'Hugging Face library for pretrained models.'
        }
      },
      {
        name: 'unsloth',
        url: 'https://unsloth.ai/',
        note: { ja: 'LLM の高速なファインチューニングライブラリ。', en: 'Library for fast LLM fine-tuning.' }
      },
      {
        name: { ja: '強化学習', en: 'Reinforcement Learning' },
        url: 'https://spinningup.openai.com/',
        note: { ja: 'OpenAI による強化学習の教材。', en: "OpenAI's educational resource on RL." }
      }
    ]
  },
  {
    key: 'infra',
    items: [
      {
        name: 'Docker',
        url: 'https://www.docker.com/',
        note: { ja: 'コンテナ化プラットフォーム。', en: 'Containerization platform.' }
      },
      {
        name: 'AWS',
        url: 'https://aws.amazon.com/',
        note: { ja: 'Amazon のクラウドプラットフォーム。', en: "Amazon's cloud platform." }
      },
      {
        name: 'GitHub Actions',
        url: 'https://github.com/features/actions',
        note: { ja: 'GitHub 上の CI/CD。', en: 'CI/CD built into GitHub.' }
      },
      {
        name: 'Linux',
        url: 'https://www.kernel.org/',
        note: { ja: 'オープンソースの OS カーネル。', en: 'Open-source OS kernel.' }
      },
      {
        name: 'uv',
        url: 'https://docs.astral.sh/uv/',
        note: { ja: 'Python 向けの高速パッケージマネージャ。', en: 'Fast Python package manager.' }
      },
      {
        name: 'Bun',
        url: 'https://bun.sh/',
        note: {
          ja: '高速な JavaScript ランタイム兼ツールチェーン。',
          en: 'Fast JavaScript runtime and toolchain.'
        }
      },
      {
        name: 'pytest',
        url: 'https://docs.pytest.org/',
        note: { ja: 'Python のテストフレームワーク。', en: 'Python testing framework.' }
      },
      {
        name: 'Playwright',
        url: 'https://playwright.dev/',
        note: { ja: 'ブラウザの自動テストツール。', en: 'Browser automation and testing tool.' }
      },
      {
        name: 'Git',
        url: 'https://git-scm.com/',
        note: { ja: '分散バージョン管理システム。', en: 'Distributed version control system.' }
      }
    ]
  }
];
