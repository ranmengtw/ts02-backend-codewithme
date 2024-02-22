module.exports = {
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  root: true,
  overrides: [
    {
      files: ["**/__tests__/**/*.ts", "**/*-route.ts"],
      rules: {
        "@typescript-eslint/no-unused-vars": ["off"],
      },
    },
  ],
};
