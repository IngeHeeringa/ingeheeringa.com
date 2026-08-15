import eslintPluginAstro from "eslint-plugin-astro";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  { ignores: [".astro/**", "dist/**"] },
  ...eslintPluginAstro.configs.recommended,
  eslintConfigPrettier,
];
