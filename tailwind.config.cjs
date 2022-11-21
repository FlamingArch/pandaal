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
      },
    },
  },
  plugins: [],
};
