/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3F4882",
        "primary-light": "#505BA5",
        "primary-dark": "#2F3560",
      },
    },
  },
  plugins: [],
};
