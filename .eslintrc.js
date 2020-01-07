const path = require("path");

module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: [
      path.resolve(__dirname, "./tsconfig.json"),
      path.resolve(__dirname, "./packages/core/tsconfig.json"),
      path.resolve(__dirname, "./packages/core/tests/tsconfig.json"),
      path.resolve(__dirname, "./packages/class-validator/tsconfig.json"),
      path.resolve(__dirname, "./packages/class-validator/tests/tsconfig.json"),
    ],
    ecmaVersion: 2018,
    sourceType: "module",
    createDefaultProgram: true,
  },
  plugins: ["@typescript-eslint", "eslint-plugin-jest"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:eslint-plugin-jest/recommended",
    "prettier",
    "prettier/@typescript-eslint",
  ],
  rules: {
    "no-console": ["error", { allow: ["warn", "error"] }],
    "no-empty-function": "off",
    "no-magic-numbers": "off",
    "object-shorthand": "error",
    "require-await": "off",
    "@typescript-eslint/array-type": ["error", { default: "array-simple" }],
    "@typescript-eslint/await-thenable": "error",
    "@typescript-eslint/consistent-type-assertions": [
      "error",
      {
        assertionStyle: "as",
        objectLiteralTypeAssertions: "allow",
      },
    ],
    "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
    "@typescript-eslint/explicit-member-accessibility": [
      "warn",
      { accessibility: "no-public" },
    ],
    "@typescript-eslint/explicit-function-return-type": [
      "warn",
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
      },
    ],
    "@typescript-eslint/generic-type-naming": ["error", "^T[A-Z][a-zA-Z]+$"],
    "@typescript-eslint/member-ordering": "warn",
    "@typescript-eslint/no-extraneous-class": "error",
    "@typescript-eslint/no-empty-function": [
      "error",
      { allow: ["protected-constructors", "private-constructors"] },
    ],
    "@typescript-eslint/no-floating-promises": "error",
    "@typescript-eslint/no-inferrable-types": [
      "error",
      { ignoreProperties: true },
    ],
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-magic-numbers": [
      "error",
      { ignoreNumericLiteralTypes: true, ignore: [-1, 0, 1] },
    ],
    "@typescript-eslint/no-misused-promises": "error",
    "@typescript-eslint/no-parameter-properties": "off",
    "@typescript-eslint/no-this-alias": ["error", { allowDestructuring: true }],
    "@typescript-eslint/no-type-alias": [
      "error",
      {
        allowAliases: "in-unions-and-intersections",
        allowCallbacks: "always",
        allowConditionalTypes: "always",
        allowLiterals: "never",
        allowMappedTypes: "always",
        allowConstructors: "always",
        allowTupleTypes: "always",
      },
    ],
    "@typescript-eslint/no-unnecessary-type-assertion": "warn",
    "@typescript-eslint/no-unnecessary-type-arguments": "warn",
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/no-useless-constructor": "error",
    "@typescript-eslint/prefer-for-of": "error",
    "@typescript-eslint/prefer-function-type": "error",
    "@typescript-eslint/prefer-includes": "error",
    "@typescript-eslint/prefer-nullish-coalescing": "error",
    "@typescript-eslint/prefer-optional-chain": "error",
    "@typescript-eslint/prefer-readonly": "error",
    "@typescript-eslint/prefer-string-starts-ends-with": "error",
    "@typescript-eslint/promise-function-async": "warn",
    "@typescript-eslint/restrict-plus-operands": "error",
    "@typescript-eslint/restrict-template-expressions": "warn",
    "@typescript-eslint/return-await": ["warn", "in-try-catch"],
    "@typescript-eslint/require-await": "warn",
    "@typescript-eslint/unbound-method": "error",
    "@typescript-eslint/unified-signatures": "error",
  },
  overrides: [
    {
      files: ["**/tests/**/*"],
      rules: {
        "jest/no-try-expect": "off",
        "@typescript-eslint/no-magic-numbers": "off",
        "@typescript-eslint/unbound-method": "off",
      },
    },
  ],
};
