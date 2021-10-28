module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'react-app',
    'react-app/jest',
    'xo-space',
    'plugin:relay/recommended',
    'plugin:flowtype/recommended',
  ],
  plugins: [
    'react',
    'relay',
    'flowtype',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'no-unused-vars': 'warn',
    'capitalized-comments': 'off',
  },
  settings: {
    react: {
      version: 'detect',
      flowVersion: '0.162',
    },
  },
};
