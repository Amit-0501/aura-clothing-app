/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        aura: {
          bg: '#0a0a0a',
          card: '#141414',
          border: '#232323',
          accent: '#d4c5a9',
          text: '#f5f5f5',
          muted: '#888888',
        },
      },
      transitionTimingFunction: {
        drawer: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}
