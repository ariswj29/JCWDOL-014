/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'hsl(0, 0%, 41%)',
        'secondary': 'hsl(0, 0%, 8%)',
      },
      margin: {
        '0-auto' : '0 auto',
      },
    },
  },
  plugins: [],
}

