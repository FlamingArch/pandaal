/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primarydark: "#2F3560",
        primary: "#3F4882",
        primarylight: "#505BA5",
        primaryextralight: "#F3F8FE",
      },
    },
  },
  plugins: [],
};
