/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    // Ensure these match with .storybook/preview.js
    screens: {},
    fontFamily: {
      sans: ['Arial', 'sans-serif'],
      serif: ['Garamond', 'serif'],
    },
    extend: {
      colors: {
        blue: {
          500: '#1a73e8',
        },
      },
      spacing: {
        128: '32rem',
      },
    },
  },
  // plugins: [require('daisyui')],
};

module.exports = config;
