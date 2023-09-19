/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'hero-pattern': "url('/src/assets/images/hero-pattern.svg')",
      },
      colors: {
        'primary': '#1E3A8A',
      }
    },
  },
  plugins: [],
}

