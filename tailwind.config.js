/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'white': '#FFFFFF',
      'red':'#FF000080',
      'gray':'#EEEEEE'
    },
    extend: {
      fontFamily: {
        'sans': ['Baloo Da 2', 'sans-serif'],
      },
      colors: {
        'primary': '#1E3A8A',
      }
    },
  },
  plugins: [],
}

