/** @type {import('tailwindcss').Config} */
module.exports = {
  rippleui: {
    removeThemes: ["dark", "light", "whateverTheme"],
  },
  content: ["./index.html"],
  theme: {
    extend: {},
    screens: {
      sm: "400px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
  },
  plugins: [require("rippleui")],
};
