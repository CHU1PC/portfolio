import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const prerender = true;

export async function entries() {
  const modules = import.meta.glob('/src/content/blog/*.md');
  return Object.keys(modules).map((p) => ({ slug: p.split('/').pop()!.replace('.md', '') }));
}

export const load: PageLoad = async ({ params }) => {
  try {
    const post = await import(`../../../content/blog/${params.slug}.md`);
    return { Content: post.default, metadata: post.metadata };
  } catch {
    throw error(404, 'Post not found');
  }
};
