import type { Dictionary } from './en';

const ja: Dictionary = {
  meta: {
    title: 'Tadashi (CHU) — ポートフォリオ',
    description:
      'Tadashi (CHU) のポートフォリオ。会津大学でコンピュータサイエンスを学ぶフルスタックエンジニア。',
    label: '日本語',
    short: 'JA'
  },
  nav: {
    open: 'Menu',
    close: 'Close',
    items: {
      hero: 'トップ',
      projects: 'プロジェクト',
      about: '自己紹介',
      experience: '経歴',
      skills: 'スキル',
      contact: 'お問い合わせ'
    }
  },
  hero: {
    name: 'Tadashi (CHU)',
    role: 'フルスタックエンジニア',
    tagline: '会津大学で CS を学びながら、2WINS で Web アプリと ML, DL を学んでいます。',
    ctaProjects: 'プロジェクト',
    ctaContact: 'お問い合わせ',
    scroll: 'Scroll',
    photoAlt: 'Tadashi (CHU) の写真'
  },
  sections: {
    projects: 'プロジェクト',
    about: '自己紹介',
    experience: '経歴',
    skills: 'スキル',
    contact: 'お問い合わせ'
  },
  projects: {
    viewOnGithub: 'GitHub で見る'
  },
  about: {
    body: [
      '会津大学でコンピュータサイエンスを学びながら、株式会社 2WINS でインターンをしています。大学へは飛び入学制度で 1 年早く入りました。インターンでは API やデータ層の実装、ML や LLM を実アプリへ組み込む作業、React のフロントの実装を担当しています。',
      '根っこにあるのは、学ぶこと自体が好きだという気持ちです。論文や本は読むだけで終わらせず、再実装して自分のものにします。仕事では、負荷をかけて初めて出るバグ、キャッシュ、非同期といった地味な部分を大事にしています。そこが持ちこたえるかどうかで、プロダクトの出来が決まるからです。'
    ],
    location: '日本・福島',
    school: '会津大学'
  },
  experience: {
    present: '現在',
    tbd: '期間未定',
    short: '短期'
  },
  skills: {
    capabilitiesTitle: 'できること',
    capabilities: [
      {
        title: 'フルスタックの機能開発。',
        body: 'インフラ, フロント, バックの機能を一気通貫で実装します。'
      },
      {
        title: 'バックエンド API 開発。',
        body: 'FastAPI + PostgreSQL を中心に、SQLModel、Alembic マイグレーション、認証、pytest / Playwright でのテスト、Docker / AWS へのデプロイまでを非同期で一通り構築します。'
      },
      {
        title: 'LLM を組み込んだ機能の実装。',
        body: 'LangChain や商用 LLM API を使い、プロンプト設計・構造化出力・パイプライン構築まで対応します。'
      },
      {
        title: 'ML / DL をゼロから実装。',
        body: 'Transformer・CNN・古典手法まで、論文を読み解いて PyTorch / NumPy で組み上げます。ライブラリのラッパーに頼らない実装力。'
      }
    ],
    stackTitle: '使用している技術',
    groups: {
      languages: '言語',
      frontend: 'フロントエンド',
      backend: 'バックエンド',
      ml: 'ML / DL',
      infra: 'インフラ・ツール'
    }
  },
  contact: {
    body: 'インターン・研究共同・フリーランスなど、お気軽にご連絡ください。',
    email: 'メール',
    github: 'GitHub',
    x: 'X'
  },
  footer: {
    builtWith: '',
    source: 'ソース'
  },
  notFound: {
    title: 'ページが見つかりません',
    body: 'お探しのページは存在しません。',
    back: 'トップへ戻る'
  },
  theme: {
    toLight: 'ライトテーマに切り替える',
    toDark: 'ダークテーマに切り替える',
    labelLight: 'Light',
    labelDark: 'Dark'
  }
};

export default ja;
