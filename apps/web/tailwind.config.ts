import { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#daeeea",
          200: "#b5ddd5",
          300: "#8fcbc0",
          400: "#6abaab",
          500: "#45a996",
          600: "#378778",
          700: "#29655a",
          800: "#1c443c",
          900: "#0e221e",
        },
        secondary: {
          100: "#ede5ea",
          200: "#dbcad5",
          300: "#cab0c1",
          400: "#b895ac",
          500: "#a67b97",
          600: "#856279",
          700: "#644a5b",
          800: "#42313c",
          900: "#21191e",
        },
      },
    },
  },
  plugins: [],
};

module.exports = config;
