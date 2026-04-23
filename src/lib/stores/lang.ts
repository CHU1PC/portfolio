import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export type Lang = 'en' | 'ja';

const STORAGE_KEY = 'lang';

function initialLang(): Lang {
  if (!browser) return 'en';
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === 'en' || stored === 'ja') return stored;
  return navigator.language.toLowerCase().startsWith('ja') ? 'ja' : 'en';
}

export const lang = writable<Lang>(initialLang());

if (browser) {
  lang.subscribe((v) => {
    localStorage.setItem(STORAGE_KEY, v);
    document.documentElement.setAttribute('lang', v);
  });
}

export function toggleLang() {
  lang.update((v) => (v === 'en' ? 'ja' : 'en'));
}
