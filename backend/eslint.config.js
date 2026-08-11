import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import importPlugin from "eslint-plugin-import";
import prettier from "eslint-config-prettier";

export default [
  {
    ignores: [
      "dist/**",
      "node_modules/**",
      "coverage/**",
      "uploads/**"
    ]
  },

  js.configs.recommended,

  ...tseslint.configs.recommended,

  {
    files: ["src/**/*.ts"],

    languageOptions: {
      parser: tseslint.parser,

      parserOptions: {
        project: "./tsconfig.json"
      },

      globals: {
        ...globals.node
      }
    },

    plugins: {
      import: importPlugin
    },

    rules: {
      "no-console": "warn",

      "no-var": "error",

      "prefer-const": "error",

      "eqeqeq": ["error", "always"],

      "curly": ["error", "all"],

      "object-shorthand": ["error", "always"],

      "import/order": [
        "error",
        {
          "newlines-between": "always",
          "alphabetize": {
            "order": "asc"
          }
        }
      ]
    }
  },

  prettier
];