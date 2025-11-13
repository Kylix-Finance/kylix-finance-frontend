/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@repo/eslint-config/react-internal.cjs"],
  ignorePatterns: ["src/types/chain/**/*.ts"],
};
