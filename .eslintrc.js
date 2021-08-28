module.exports = {
  env: {
    "browser": true,
    "es2021": true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      "jsx": true
    },
    ecmaVersion: 12,
    sourceType: "module"
  },
  plugins: ["simple-import-sort", "@emotion", "react", "@typescript-eslint"],
  rules: {
    "react/prop-types": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
    "@emotion/jsx-import": "error",
    "@emotion/pkg-renaming": "error",
    "prettier/prettier": ["error", {}, { "usePrettierrc": true }],
    "linebreak-style": ["error", "unix"],
    semi: ["error", "always"],
    "@typescript-eslint/no-non-null-assertion": "off",
    "react-hooks/exhaustive-deps": "off",
    "@emotion/no-vanilla": "error",
    "@emotion/import-from-emotion": "error",
    "@emotion/styled-import": "error",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error"
  }
}
