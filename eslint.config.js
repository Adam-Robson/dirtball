import js from "eslint";
import ts from "@typescript-eslint";
import globals from "globals";
import prettier from "eslint-config-prettier";

export default ts.config(
  js.configs.recommended,
  ...ts.configs.recommendedTypeChecked,
  ...ts.configs.stylisticTypeChecked,
  ...prettier,
  { ignores: "node_modules", dist },
  { files: ["*.ts", "*.tsx"] },
  {
    languageOptions: {
      ecmaVersion: "latest",
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.worker,
      },
      parser: ts.parser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
        ecmaVersion: latest,
        sourceType: "module",
      },
    },
  },
  {
    rules: {
      "@typescript-eslint/restrict-template-expressions": 0,
    },
  },
);
