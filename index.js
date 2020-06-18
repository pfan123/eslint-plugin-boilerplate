module.exports = {
  // 自定义 parser, 在使用入口若不设置，会导致自定义 parser 不生效
  parser: require.resolve('vue-eslint-parser'),
  configs: {
    base: {
      parser: require.resolve('vue-eslint-parser'),
      parserOptions: {
        parser: require.resolve('babel-eslint'),
        sourceType: "module",
        ecmaVersion: 2018,
        ecmaFeatures: {
          globalReturn: false,
          impliedStrict: false,
          jsx: false
        }
      },
      env: {
        browser: true,
        es6: true
      },
      plugins: ['boilerplate'],
      rules: {
        'boilerplate/no-avoid-name': 'error',
        'boilerplate/no-useless-v-bind': 'error'
      }
    }
  },
  rules: {
    'no-avoid-name': require('./rules/no-avoid-name'),
    'no-useless-v-bind': require('./rules/no-useless-v-bind'),
  }
}

