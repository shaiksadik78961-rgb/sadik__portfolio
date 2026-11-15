/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#09090b',
        'nle-bg': '#09090b',
        'nle-panel': '#18181b',
        'nle-panel-light': '#27272a',
        'nle-border': 'rgba(255, 255, 255, 0.08)',
        'pitch-black': '#050505',
        'deep-charcoal': '#0D0D0D',
        crimson: {
          DEFAULT: '#ef4444',
          glow: '#991b1b',
          hover: '#dc2626',
          bright: '#f87171',
          dark: '#7f1d1d',
          deep: '#450a0a',
        },
      },
      fontFamily: {
        bebas: ['"Bebas Neue"', 'sans-serif'],
        anton: ['"Anton"', 'sans-serif'],
        syne: ['"Syne"', 'sans-serif'],
        script: ['"Playfair Display"', '"Caveat"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};