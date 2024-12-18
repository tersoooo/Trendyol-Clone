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
      },
      backgroundImage : {
        'flash' : "url('https://cdn.dsmcdn.com/homepage/prod/2024-12-17/6e618057-66e9-4c7b-8fc4-317d34375a5b.png')"
      },
    },
  },
  plugins: [],
}