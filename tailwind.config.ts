import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        kenju: {
          black:    '#08080F',
          navy:     '#0B0B1A',
          indigo:   '#12122A',
          dark:     '#1A1A35',
          gold:     '#C9A84C',
          'gold-light': '#E8C96A',
          'gold-dark':  '#A6873A',
          platinum: '#C8C8DC',
          cream:    '#F5F0E8',
          muted:    '#8888A8',
          border:   '#2A2A4A',
        },
      },
      fontFamily: {
        serif:  ['Cormorant Garamond', 'Georgia', 'serif'],
        sans:   ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient':     'linear-gradient(135deg, #C9A84C 0%, #E8C96A 50%, #A6873A 100%)',
        'dark-gradient':     'linear-gradient(180deg, #08080F 0%, #12122A 100%)',
        'hero-gradient':     'linear-gradient(135deg, #08080F 0%, #12122A 40%, #0d2020 100%)',
      },
      animation: {
        'fade-in':     'fadeIn 0.6s ease-out',
        'slide-up':    'slideUp 0.7s ease-out',
        'shimmer':     'shimmer 2s linear infinite',
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
