import { derived } from 'svelte/store';
import { lang, type Lang } from '$lib/stores/lang';
import en from './en.json';
import ja from './ja.json';

type Dict = typeof en;
const dicts: Record<Lang, Dict> = { en, ja: ja as Dict };

function lookup(dict: Dict, path: string): string {
  const parts = path.split('.');
  let node: unknown = dict;
  for (const p of parts) {
    if (node && typeof node === 'object' && p in (node as Record<string, unknown>)) {
      node = (node as Record<string, unknown>)[p];
    } else {
      return path;
    }
  }
  return typeof node === 'string' ? node : path;
}

export const t = derived(lang, ($lang) => (key: string) => lookup(dicts[$lang], key));

export type { Lang };
