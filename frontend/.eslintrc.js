module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'xo-space',
    'plugin:react/jsx-runtime',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'relay',
  ],
  settings: {
    react: {
      version: 'detect',
      // X flowVersion: "0.53" // Flow version

    },
  },
  rules: {
    'no-unused-vars': 'warn',
    'capitalized-comments': 'off',
  },
};
