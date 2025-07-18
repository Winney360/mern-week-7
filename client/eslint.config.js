// client/eslint.config.js
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    files: ["**/*.jsx", "**/*.js"],
    ignores: ["dist/**", "build/**"], // Ignore dist and build folders
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        process: "readonly", // For process.env
        setImmediate: "readonly", // For setImmediate
        __REACT_DEVTOOLS_GLOBAL_HOOK__: "readonly", // For React DevTools
      },
    },
    plugins: {
      react: pluginReact,
    },
    rules: {
      ...pluginReact.configs.recommended.rules,
      "react/react-in-jsx-scope": "off", // Disable React import requirement (Vite/React 17+)
      "react/prop-types": "off", // Disable PropTypes (not used in your project)
      "react/no-unescaped-entities": "error", // Correct rule name
      "no-undef": "error",
      "no-unused-vars": "warn", // Warn instead of error to avoid build failure
      "no-cond-assign": "error",
      "no-fallthrough": "error",
      "no-prototype-builtins": "warn", // Warn instead of error for hasOwnProperty
      "no-empty": "warn", // Warn for empty blocks
    },
    settings: {
      react: {
        version: "detect", // Auto-detect React version
      },
    },
  },
];