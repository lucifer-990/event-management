import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules:{
      "react/no-unescaped-entities": "off", // Disable the rule that causes issues with unescaped characters
      "no-unused-vars": "warn", // Warn about unused variables instead of error
      "@next/next/no-img-element": "off", // Allow usage of <img> elements
    }
  }
];

export default eslintConfig;
