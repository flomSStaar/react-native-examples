// https://docs.expo.dev/guides/using-eslint/
import { defineConfig } from 'eslint/config'
import expoConfig from 'eslint-config-expo/flat.js'
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended'
import eslintConfigPrettier from 'eslint-config-prettier/flat'

export default defineConfig([
  expoConfig,
  eslintConfigPrettier,
  eslintPluginPrettier,
  {
    ignores: ['dist/*'],
  },
])
