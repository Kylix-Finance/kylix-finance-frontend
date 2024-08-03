const { defineConfig } = require("eslint-define-config");
const restrictedGlobals = require("eslint-restricted-globals");
require("@rushstack/eslint-patch/modern-module-resolution");

const baseConfig = defineConfig({
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@cspell/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:json/recommended",
    "plugin:promise/recommended",
    "plugin:promise/recommended",
  ],
  globals: {
    JSX: true,
    NodeJS: true,
    React: true,
  },
  ignorePatterns: [
    ".*.js",
    "!.vscode",
    "./*-lock.*",
    ".git",
    ".github",
    ".husky",
    ".idea",
    ".next",
    "*.d.ts",
    "*.env",
    "*.md",
    "*.sh",
    "*.svg",
    "*.txt",
    "build",
    "dist",
    "lib",
    "node_modules",
    "public",
    "temp",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    requireConfigFile: false,
    sourceType: "module",
  },
  plugins: [
    "@cspell",
    "@typescript-eslint",
    "import",
    "promise",
    "react",
    "unused-imports",
  ],
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": 0,
    "@typescript-eslint/no-var-requires": [0],
    "linebreak-style": ["error", "unix"],
    "no-unused-vars": "off",
    "no-var": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        args: "after-used",
        argsIgnorePattern: "^_",
        ignoreRestSiblings: true,
        vars: "all",
        varsIgnorePattern: "^_",
      },
    ],
    "prefer-const": ["off"],
  },
});

module.exports = baseConfig;
