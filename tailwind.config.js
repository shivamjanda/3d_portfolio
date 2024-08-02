/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816", // background plain clolor
        secondary: "#aaa6c3", // paragraph text color
        tertiary: "#151030", // overview card color 
        "black-100": "#100d25", // contact card color
        "black-200": "#090325",
        "white-100": "#f3f3f3", // text color of work experience
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35", // overview card shadows
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};