module.exports = {
  extends: ['airbnb', 'prettier', 'plugin:react/recommended'],
  plugins: ['prettier', 'react'],
  rules: {
    'prettier/prettier': 'error',
    'no-unused-vars': 'warn',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
  },
};
