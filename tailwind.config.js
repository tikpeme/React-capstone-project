/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        8: "0.5rem", // 16px rounded corners
      },
      colors: {
        primary: "rgb(var(--Primary-color-rgb))",
        highlight: "rgb(var(--Highlight-color-rgb))",
        dark: "rgb(var(--Dark-color-rgb))",
        secondary: "rgb(var(--Secondary-color-rgb))",
      },
      fontFamily: {
        karla: ["Karla", "sans-serif"], // Add Karla to the font family
        Markazi: ['"Markazi Text"', "serif"],
      },
      fontSize: {
        "18pt": "1.5rem", // 18 points in rem
        "16pt": "1.333rem", // 16 points in rem
        "64pt": "5.33rem", // 64 points in rem
        "40pt": "3.33rem", // 40 points in rem
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".header-nav-title": {
          fontSize: "1.5rem", // 18 points in Figma
          fontWeight: "bold",
          fontFamily: "Markazi Text, serif",
        },
        ".footer-nav-title": {
          fontSize: "1.333rem", // 16 points in Figma
          color: "black",
        },
        ".display-title": {
          fontFamily: "Markazi Text, serif",
          fontStyle: "normal",
          fontWeight: 500,
        },
        ".categories": {
          fontWeight: 1000,
          fontSize: "16pt",
          fontFamily: "karla",
        },
      });
    },
  ],
};
