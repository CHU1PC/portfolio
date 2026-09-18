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
  }
];
