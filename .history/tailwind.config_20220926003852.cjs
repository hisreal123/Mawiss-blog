/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      extend: {
        bakgroundImage :{
          'hero': "url()"
        }
      }
    },
  },
  plugins: [],
}
