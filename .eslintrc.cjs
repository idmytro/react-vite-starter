/* .eslintrc.cjs */

module.exports = {
  root: true,
  extends: [
    'airbnb',
    'airbnb/hooks',
  ],
  env: {
    browser: true,
  },
  rules: {
    'space-before-function-paren': [
      2,
      {
        anonymous: 'always',
        named: 'always',
        asyncArrow: 'always',
      },
    ],
    'max-len': 0,
    'object-curly-newline': [1, { consistent: true }],
    'react/react-in-jsx-scope': 0,
    'jsx-a11y/label-has-associated-control': [2, {
      labelAttributes: ['label'],
      depth: 3,
    }],
  },
  overrides: [
    {
      files: ['vite.config.js'],
      rules: {
        'import/no-extraneous-dependencies': 0,
      },
    },
  ],
};
