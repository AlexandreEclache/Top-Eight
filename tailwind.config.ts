import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './sections/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0A1F44',
        accentBlue: '#1E90FF',
        accentGold: '#FFD700',
        bgLight: '#F7F9FC'
      },
      boxShadow: {
        premium: '0 20px 40px rgba(10, 31, 68, 0.12)'
      },
      borderRadius: {
        xl2: '1.25rem'
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(120deg, rgba(10,31,68,0.92), rgba(30,144,255,0.62))'
      }
    }
  },
  plugins: []
};

export default config;
