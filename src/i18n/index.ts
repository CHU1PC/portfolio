import en, { type Dictionary } from './en';
import ja from './ja';

export const locales = ['ja', 'en'] as const;

export type Lang = (typeof locales)[number];

export const defaultLang: Lang = 'en';

const dictionaries: Record<Lang, Dictionary> = { ja, en };

export function isLang(value: string | undefined): value is Lang {
  return value === 'ja' || value === 'en';
}

/** 未知の値は defaultLang に丸める。動的ルートの params を直接渡してよい */
export function resolveLang(value: string | undefined): Lang {
  return isLang(value) ? value : defaultLang;
}

export function otherLang(lang: Lang): Lang {
  return lang === 'ja' ? 'en' : 'ja';
}

export function useTranslations(lang: Lang): Dictionary {
  return dictionaries[lang];
}

export type { Dictionary };
