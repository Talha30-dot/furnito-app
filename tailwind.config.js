/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('nativewind/preset')],
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        furnito: {
          brown: '#6b4f2f',
          cream: '#f7f4ee',
          soft: '#f2eee7',
          ink: '#171717',
        },
      },
    },
  },
  plugins: [],
};
