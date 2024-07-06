const { defineConfig } = require("eslint-define-config");

const baseConfig = require("./base.js");

const nextConfig = defineConfig({
  ...baseConfig,
  extends: [
    ...baseConfig.extends,
    "turbo",
    "next",
    "next/core-web-vitals",
    "plugin:react/jsx-runtime",
    "plugin:react/recommended",
    require.resolve("@vercel/style-guide/eslint/next"),
  ],
  globals: {
    ...baseConfig.globals,
    JSX: true,
    React: true,
  },
  parserOptions: {
    ...baseConfig.parserOptions,
    ecmaFeatures: {
      ...baseConfig.parserOptions.ecmaFeatures,
      jsx: true,
    },
  },
  plugins: [...baseConfig.plugins, "react"],
  rules: {
    ...baseConfig.rules,
  },
  settings: {
    ...baseConfig.settings,
    react: {
      version: "detect",
    },
  },
});

module.exports = nextConfig;
