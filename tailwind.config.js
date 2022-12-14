/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './sections/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        primary: '#8D448B',
        secondary: '#793677',
        text_secondary: '#02073E',
        heading_secondary: '#343D48',
        black: '#0F2137',
      },
    },
  },
  plugins: [],
};
