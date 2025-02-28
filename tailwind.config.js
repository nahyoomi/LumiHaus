/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-white': 'var(--color-white)',
        'custom-gray': 'var(--color-blue-gray)',
        'custom-blue': 'var(--color-blue)',
        'custom-dark': 'var(--color-dark)',
      },
      fontFamily: {
        'custom-font': 'var(--font-primary)',
      },
    },
  },
  plugins: [],
};