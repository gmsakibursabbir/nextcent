import { info } from "autoprefixer";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#4CAF4F",
        secondary: "#263238",
        info: "#2194f3",
        white: "#FFFFFF",
        black: "#263238",
        "bg-light": "#F5F7FA",
        "green-medium": "#4CAF4F",
        "gray-medium": "#717171",
        "gray-light": "#89939E",
        "gray-dark": "#4D4D4D",
      },
    },
  },
  plugins: [],
};
