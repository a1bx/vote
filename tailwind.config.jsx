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
      backgroundImage:{
        'hero-pattern': "url('/src/assets/votechain.svg')",
      },
      colors: {
        'primary': '#1E3A8A',
      }
    },
  },
  plugins: [],
}

