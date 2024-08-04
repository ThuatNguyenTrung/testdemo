/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        handwriting: ["Merienda", "cursive"],
      },
      colors: {
        primary: "#8ca3a7",
        secondary: "#0e3e5b",
        third: "#bfc4b9",
        fourth: "#f8f4e3",
      },

      boxShadow: {
        "custom-inset":
          "3px 3px 4px rgba(0, 0, 0, 0.25) ,inset 2px 5px 6px rgba(255, 255, 255, 0.37),inset 0px -5px 6px rgba(0, 0, 0, 0.37)",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
        },
      },
    },
  },
  plugins: [],
};
