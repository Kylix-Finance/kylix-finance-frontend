import { Config } from "tailwindcss";
import { PluginAPI } from "tailwindcss/types/config";
const config: Config = {
  darkMode: "class",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/wallet-modal/src/**/*.{js,ts,jsx,tsx}",
  ],
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
        black: {
          100: "#d0d0d0",
          200: "#a1a1a1",
          300: "#737373",
          400: "#444444",
          500: "#151515",
          600: "#111111",
          700: "#0d0d0d",
          800: "#080808",
          900: "#040404",
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
        notification: {
          information: "#50A0E1",
          success: "#45a996",
          error: "#F07979",
          warning: "#FAAA56",
        },

        primaryText: "#5C5E64",

        light: "#F4FAF9",
      },
      boxShadow: {
        box: "0px 5.5px 12px 0px rgba(0, 0, 0, 0.05)",
        "secondary-box": "0px 3.5px 5.5px 0px #00000005",
      },
      fontFamily: {
        body: ["var(--font-inter)"],
        number: ["var(--font-poppins)"],
      },
    },
  },
  plugins: [
    function ({ addUtilities }: PluginAPI) {
      const hideScrollbar = {
        ".hide-scrollbar": {
          "&::-webkit-scrollbar": {
            display: "none",
          },
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      };
      addUtilities(hideScrollbar);
    },
  ],
};

module.exports = config;
