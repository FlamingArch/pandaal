/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#F4F8FD",
          100: "#D0D5E4",
          200: "#ACB2CC",
          300: "#878EB3",
          400: "#636B9B",
          500: "#3F4882",
          600: "#323A6C",
          700: "#262C56",
          800: "#191E40",
          900: "#0C102A",
        },
        secondary: {
          // Generate Color Pallete for values 50, 100, 200, 300, 500, 600, 700, 800, 900
          50: "#FDF5F6",
          100: "#F8D8DB",
          200: "#F3BBC0",
          300: "#EE9EA5",
          400: "#E4718A",
          500: "#DE6178",
          600: "#C65C74",
          700: "#A5475E",
          800: "#833348",
          900: "#611F32",

        },
      },
    },
  },
  plugins: [],
};
