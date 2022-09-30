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
        "primary-dark": "#000000",
        "primary-light": "#FFFFFF",
        "secondary-dark": "#160F2E",
        "secondary-light": "#f1f2f6",
        "primary-color-light": "#F3DFF6",
        "metropolia-orange": "#D36A0D",
      },
      backgroundImage: {
        header: "url('src/inspiskuva.jpg)",
      },
    },
  },

  plugins: [],
};
