/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./fragments/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        "auto-1fr": "auto 1fr",
        fluid: "repeat(auto-fit, minmax(15rem, 1fr))",
      },
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
