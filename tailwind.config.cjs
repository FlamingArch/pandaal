/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#F3F8FE",
          200: "#C7DBF5",
          300: "#505BA5",
          400: "#3F4882",
          500: "#2F3560",
          600: "#292C44",
        },
        secondary: {
          100: "#F5C7CE",
          200: "#EA7D8A",
          300: "#E34F61",
        },
      },
    },
  },
  plugins: [],
};
