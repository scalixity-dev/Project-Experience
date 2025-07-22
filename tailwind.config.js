/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        beige: '#FFF7E6',
      },
      fontFamily: {
        lato: ['Lato', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
