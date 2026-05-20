import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        kenju: {
          black:        'var(--kj-bg)',
          navy:         'var(--kj-surface)',
          indigo:       'var(--kj-card)',
          dark:         'var(--kj-card-deep)',
          gold:         'var(--kj-gold)',
          'gold-light': 'var(--kj-gold-light)',
          'gold-dark':  'var(--kj-gold-dark)',
          platinum:     'var(--kj-text-2)',
          cream:        'var(--kj-text)',
          muted:        'var(--kj-muted)',
          border:       'var(--kj-border)',
        },
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans:  ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C9A84C 0%, #E8C96A 50%, #A6873A 100%)',
        'dark-gradient': 'linear-gradient(180deg, #08080F 0%, #12122A 100%)',
        'hero-gradient': 'linear-gradient(135deg, #08080F 0%, #12122A 40%, #0d2020 100%)',
      },
      animation: {
        'fade-in':  'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.7s ease-out',
        'shimmer':  'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeIn:  { from: { opacity: '0' }, to: { opacity: '1' } },
        slideUp: { from: { opacity: '0', transform: 'translateY(20px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        shimmer: { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } },
      },
    },
  },
  plugins: [],
};

export default config;
