/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        "primary-dark": "##210916ff",
        "primary-light": "#E5C7B4ff",
        "primary-color": "#E27A6Fff",
        "secondary-dark": "#DF8F79ff",
      },
      backgroundImage: {
        header: "url('src/inspiskuva.jpg)",
      },
    },
  },

  plugins: [],
};
