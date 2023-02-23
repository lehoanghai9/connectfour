/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      "black": '#000000',
      "darkerpurple": '#5C2DD5',
      'purple': '#7945FF',
      "red" : "#FD6687",
      "yellow" : "#FFCE67",
      "white" : "#FFFFFF",
      "grey" : "#262829",
      "p" : "#575757",
    },
    extend: {
      boxShadow: {
        shadd: '0 9px 0px 0px #000000',
      }
    },
  },
  plugins: [],
}
