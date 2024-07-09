const { defineConfig } = require("eslint-define-config");

module.exports = defineConfig({
  root: true,
  ignorePatterns: ["apps/**", "packages/**"],
  extends: ["@repo/eslint-config/configs/base.js"],
});
