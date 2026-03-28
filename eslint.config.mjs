// @ts-check

import { defineConfig } from "eslint/config";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default defineConfig([
  // ✅ Ignore dist
  {
    ignores: ["dist/**"],
  },

  // ✅ Node.js files (like commitlint.config.js)
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: {
        module: "readonly",
        require: "readonly",
      },
    },
  },

  // ✅ Base rules
  eslint.configs.recommended,

  // ✅ TypeScript rules
  ...tseslint.configs.recommended,

  // ✅ TS-specific config
  {
    files: ["**/*.ts"],
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
      globals: {
        console: "readonly",
      },
    },
    rules: {
      "no-console": "error",
      quotes: ["error", "double", { allowTemplateLiterals: true }],
    },
  },
]);