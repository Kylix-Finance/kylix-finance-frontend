import { Config } from "tailwindcss";
import { PluginAPI } from "tailwindcss/types/config";
const config: Config = {
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/wallet-modal/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#ddf8f0",
          200: "#bbf1e1",
          300: "#9aebd2",
          400: "#78e4c3",
          500: "#56ddb4",
          600: "#45b190",
          700: "#34856c",
          800: "#225848",
          900: "#112c24",
        },
        secondary: {
          100: "#cdcdcd",
          200: "#9a9b9b",
          300: "#686868",
          400: "#353636",
          500: "#030404",
          600: "#020303",
          700: "#020202",
          800: "#010202",
          900: "#010101",
        },
        primaryText: "#5C5E64",
        light: "#F4FAF9",
      },
      fontFamily: {
        body: ["var(--font-inter)"],
        heading: ["var(--font-migha)"],
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
