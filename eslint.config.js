import js from '@eslint/js'
import globals from 'globals'

export default [
  {
    ignores: ['dist'],
  },
  {
    extends: [js.configs.recommended, 'plugin:react-hooks/recommended', 'plugin:react-refresh/recommended'],
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: globals.browser,
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    },
  },
]
