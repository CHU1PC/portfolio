import type { PageLoad } from './$types';

type PostMeta = {
  title_en: string;
  title_ja: string;
  date: string;
  summary_en: string;
  summary_ja: string;
  tags?: string[];
  draft?: boolean;
};

export const prerender = true;

export const load: PageLoad = () => {
  const modules = import.meta.glob('/src/content/blog/*.md', { eager: true });
  const posts = Object.entries(modules)
    .map(([path, mod]) => {
      const slug = path.split('/').pop()!.replace('.md', '');
      const metadata = (mod as { metadata: PostMeta }).metadata;
      return { slug, ...metadata };
    })
    .filter((p) => !p.draft)
    .sort((a, b) => b.date.localeCompare(a.date));
  return { posts };
};
