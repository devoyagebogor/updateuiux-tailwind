/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: "#243c5a",
        dark: "#343c5a"
      },
      screens: {
        '2xl': '1320px'
      },
    },
  },
  plugins: [],
}
