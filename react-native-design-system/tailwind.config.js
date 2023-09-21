/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./App.tsx"],
  theme: {
    extend: {
      colors: {
        purple: "#633CFF",
        "purple-hover": "#BEADFF",
        "purple-light": "#EFEBFF",
        "dark-gray": "#333333",
        grey: "#737373",
        border: "#D9D9D9",
        "border-light": "#FAFAFA",
        red: "#FF3939",
      },
    },
  },
  plugins: [],
};
