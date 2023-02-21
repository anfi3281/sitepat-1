/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "16px"
    },
    extend: {
      colors: {
        "cello": "#1d3557",
        "wedgewood": "#457b9d",
        "aquaisland": "#a8dadc",
        "peppermint": "#f1faee",
        "cinnabar": "#e63946",
        "aqua": "#00C9ED",
        "azure": "#006EE7",
        "purple2": "#A400AB"
      },
      screens: {
        "2xl": "1320px"
      },
      height: {
        "76px" : "76px"
      }
    },
  },
  plugins: [],
}
