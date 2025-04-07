const { defineConfig } = require("eslint-define-config");

module.exports = defineConfig({
  root: true,
  extends: ["@repo/eslint-config/nextjs.cjs"],
  rules: {
    "react/no-unknown-property": ["off"],
  },
});
