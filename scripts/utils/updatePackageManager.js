/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable no-console */
const { execSync } = require("child_process");
const { readFileSync, writeFileSync } = require("fs");

if (process.env.CI) process.exit(0);

// Ensure there is a manifest file
if (!readFileSync("package.json")) {
  console.error("error: no manifest file found");
  process.exit(1);
}

const PACKAGE_MANAGER_NAME = process.argv[2];

const packageManagersRepo = {
  npm: "npm/cli",
  yarn: "yarnpkg/berry",
  pnpm: "pnpm/pnpm",
};

const repo = packageManagersRepo[PACKAGE_MANAGER_NAME];

if (!repo) {
  console.error(`error: unknown package manager '${PACKAGE_MANAGER_NAME}'`);
  process.exit(1);
}

// Get the latest version from GitHub
const stdout = execSync(
  `curl -s https://api.github.com/repos/${repo}/releases/latest`,
  { encoding: "utf-8" }
);

const parsedStdout = JSON.parse(stdout);

if (!parsedStdout.name) {
  const errorMessage =
    parsedStdout.message ||
    "Something bad happened. The `name` property is not exist";

  console.error("error:", errorMessage);

  process.exit(1);
}

const version = parsedStdout.tag_name.replace("v", "");

// Set the packageManager key in the manifest
const packageData = readFileSync("package.json");

const packageJson = JSON.parse(packageData);
const key = `${PACKAGE_MANAGER_NAME}@${version}`;
packageJson.packageManager = key;
writeFileSync("package.json", JSON.stringify(packageJson, null, 2));
