/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        Softblue: "hsl(215, 51%, 70%)",
        Cyan: "hsl(178, 100%, 50%)",
        mainBg: "hsl(217, 54%, 11%)",
        cardBg: "hsl(216, 50%, 16%)",
        line: "hsl(215, 32%, 27%)",

      },
      fontFamily:{
        Outfit: ["Outfit", 'sans-serif']
      },
      boxShadow: {
        'custom': '0.6px 7.9px 2.7px rgba(0, 0, 0, 0.028), 1.2px 15.2px 6.4px rgba(0, 0, 0, 0.04), 1.7px 22.3px 12px rgba(0, 0, 0, 0.05), 2.3px 29.5px 21.4px rgba(0, 0, 0, 0.06), 2.9px 38.2px 40.1px rgba(0, 0, 0, 0.072), 4px 52px 96px rgba(0, 0, 0, 0.1);'
      },
      fontWeight: {
        'light': 300,
        'medium': 500,
        'bold': 700
      }
    },
  },
  plugins: [],
}

