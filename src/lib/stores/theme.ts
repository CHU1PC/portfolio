import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'theme';

function initialTheme(): Theme {
  if (!browser) return 'dark';
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === 'light' || stored === 'dark') return stored;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'dark';
}

export const theme = writable<Theme>(initialTheme());

if (browser) {
  theme.subscribe((v) => {
    localStorage.setItem(STORAGE_KEY, v);
    document.documentElement.classList.toggle('dark', v === 'dark');
  });
}

export function toggleTheme() {
  theme.update((v) => (v === 'dark' ? 'light' : 'dark'));
}
