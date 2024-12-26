/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: '-20px -20px 20px rgb(48, 47, 47)',
      },
    },
  },
  plugins: [],
}
