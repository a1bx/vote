/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        red:'#FF0000'
      },
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

