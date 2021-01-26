module.exports = {
  extends: ['airbnb', 'prettier', "plugin:react/recommended"],
  plugins: ['prettier'],
  rules: {
    'arrow-body-style': ['error', 'as-needed'],
    'class-methods-use-this': [1, { 'exceptMethods': ['render'] }],
    'import/prefer-default-export': 'off',

    'no-param-reassign': 'off',
    'no-case-declarations': 'off',
    'no-console': ['error', { allow: ['error'] }],
    'no-underscore-dangle': 'off',
    'no-console': 'off',
    'prettier/prettier': 'error',

    'react/forbid-prop-types': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-fragments': 0,
    'react/jsx-props-no-spreading': 0,
    'react/prefer-stateless-function': 0,
    'react/static-property-placement': 0,
  },
  env: {
    es6: true,
    jest: true,
    browser: true,
  },
  parser: "babel-eslint",
};
