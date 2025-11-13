const { resolve } = require("node:path");
const merge = require("lodash/merge");
const project = resolve(process.cwd(), "tsconfig.json");
const base = require("./base.cjs");
/** @type {import("eslint").Linter.Config} */

const configs = {
  extends: ["eslint:recommended", "prettier", "turbo"],
  plugins: ["only-warn"],
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    browser: true,
  },
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: [
    // Ignore dotfiles
    ".*.js",
    "node_modules/",
    "dist/",
  ],
  overrides: [
    // Force ESLint to detect .tsx files
    { files: ["*.js?(x)", "*.ts?(x)"] },
  ],
};

module.exports = merge(configs, base);
