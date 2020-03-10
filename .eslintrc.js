module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb-typescript'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    project: './tsconfig.json',
  },
  plugins: ['react'],
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
  },
};
