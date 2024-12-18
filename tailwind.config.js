/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'Inter' : ['Inter', 'sans-serif'],
      'Source' : ['Source Sans 3', 'sans-serif'],
    },
    extend: {
      colors: {
        'primary-color' : '#f37919',
        'text-color' : '#333',
      }
    },
  },
  plugins: [],
}