import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{html,js,svelte,ts,md}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace']
      },
      colors: {
        accent: {
          DEFAULT: '#6366f1',
          hover: '#818cf8'
        }
      },
      typography: ({ theme }: { theme: (path: string) => string }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-links': theme('colors.accent.DEFAULT'),
            '--tw-prose-invert-links': theme('colors.accent.hover')
          }
        }
      })
    }
  },
  plugins: [typography]
} satisfies Config;
