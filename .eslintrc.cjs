module.exports = {
  extends: ['airbnb', 'prettier', 'plugin:react/recommended'],
  plugins: ['prettier', 'react'],
  rules: {
    'no-unused-vars': 'warn',
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/no-extraneous-dependencies': 'off',
  },
};
