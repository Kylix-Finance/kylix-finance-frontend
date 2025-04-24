/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@repo/eslint-config/react-internal.cjs"],
  ignorePatterns: ["**/*"],
  parserOptions: {
    project: null,
  },
};
