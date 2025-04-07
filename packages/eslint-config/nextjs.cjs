const { defineConfig } = require("eslint-define-config");

const baseConfig = require("./base.cjs");

const nextConfig = defineConfig({
  ...baseConfig,
  extends: [
    ...baseConfig.extends,
    "eslint-config-turbo",
    "next",
    "next/core-web-vitals",
    "plugin:react/jsx-runtime",
    "plugin:react/recommended",
    require.resolve("@vercel/style-guide/eslint/next"),
  ],
  globals: {
    ...baseConfig.globals,
    Atomics: "readonly",
    GeolocationPosition: true,
    GeolocationPositionError: true,
    JSX: true,
    React: true,
    SharedArrayBuffer: "readonly",
  },
  ignorePatterns: [...baseConfig.ignorePatterns, ".*.js", "node_modules/"],
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
    "@next/next/no-img-element": 0,
    "react/jsx-curly-brace-presence": [1, "never"],
    "react/jsx-sort-props": [
      "off",
      {
        callbacksLast: true,
        ignoreCase: true,
        locale: "en",
        noSortAlphabetically: false,
        reservedFirst: ["key"],
        shorthandFirst: true,
      },
    ],
    "react/no-unescaped-entities": 0,
    "react/prop-types": 0,
    "react/react-in-jsx-scope": "off",
  },
  settings: {
    ...baseConfig.settings,
    react: {
      version: "detect",
    },
  },
});

module.exports = nextConfig;
