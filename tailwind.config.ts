import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        branding: {
          "50": "#F8F9FC",
          "100": "#D3D6E4",
          "200": "#AEB2CB",
          "300": "#898FB3",
          "400": "#646B9A",
          "500": "#3F4882",
          "600": "#343B6B",
          "700": "#292E54",
          "800": "#1D223C",
          "900": "#121525",
          "950": "#07080E",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
