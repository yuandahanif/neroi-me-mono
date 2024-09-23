// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");
// const pluginQuery = require("@tanstack/eslint-plugin-query");

/** @type {import("eslint").Linter.Config} */
const config = {
  // ...pluginQuery.default.configs["flat/recommended"],
  overrides: [
    {
      extends: [
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
      ],
      files: ["*.ts", "*.tsx"],
      parserOptions: {
        project: path.join(__dirname, "tsconfig.json"),
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: path.join(__dirname, "tsconfig.json"),
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    '"plugin:@tanstack/eslint-plugin-query/recommended"',
  ],
  ignorePatterns: ["src/pages-old/*"],
  rules: {
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      {
        prefer: "type-imports",
        fixStyle: "inline-type-imports",
      },
    ],
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
  },
};

module.exports = config;
