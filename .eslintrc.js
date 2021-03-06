module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'node': true
  },
  'extends':[
    'eslint:recommended',
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 12,
    'sourceType': 'module'
  },
  'plugins': [
    'react',
    '@typescript-eslint'
  ],
  'ignorePatterns': ['build/*', 'public/*', '*.test.*'],
  'rules': {
    'semi': ['error', 'always'],
    'quotes': ['error', 'single'],
    'no-undef': 0,
    'no-unused-vars': 0,
  }
};

