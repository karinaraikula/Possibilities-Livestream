/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {

    fontFamily: {
      "header": ['"Aboreto"'],
      "body": ['"Libre Franklin"']
    },
  
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },    
    extend: {
      colors: {
        "primary-dark": "#1F2122",
        "secondary-dark": "#364044",
        "primary-light": "#FFFFFF",
        "secondary-light": "rgb(232, 237, 240)",
        "primary-middle": '#A3B3BC',
        "metropolia-orange": "#D36AD",
        "kansi": "#edf2f5",
      },
      backgroundImage: {
        header: "url('src/inspiskuva.jpg)",
      },      
    },

  },

 //plugins: [require("@tailwindcss/aspect-ratio")],
};
