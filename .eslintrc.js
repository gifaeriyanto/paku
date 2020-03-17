module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb-typescript', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    project: './tsconfig.eslint.json',
  },
  plugins: ['react'],
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-console': 'off',
    '@typescript-eslint/indent': 'off',
    'object-curly-newline': 'off',
  },
};
