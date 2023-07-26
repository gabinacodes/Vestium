/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens:{
      sm:'320px',
      md:'768px',
      lg:'980px',
      xl:'1440px'
    },
    extend: {
      colors:{
        babyBlue:'rgb(137,207,240)',
        royalBlue: '	rgb(65,105,225)',
        teal:'rgb(0,128,128)',
        turquoise:'rgb(64,224,208)',
        macaroon:'RGB(179,139,113)',
        fire:' RGB(143,63,42)',
        sand:'rgb(194, 178, 128)',
        buttermilk:'rg(255, 246, 186)'
      }
    },

  },
  plugins: [],
}