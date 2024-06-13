/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".header-nav-title": {
          // Define your custom styles here
          fontSize: "1.5rem", //18 points in Figma
          fontWeight: "bold",
          color: "black",
          fontFamily: "",
        },
        ".footer-nav-title": {
          fontSize: "1.333rem", //18 points in Figma
          color: "black",
        },
      });
    },
  ],
};
