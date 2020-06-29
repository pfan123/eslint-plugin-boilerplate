// in the file to lint:

// const foo = 2;
//  ^ error: Avoid using variables named 'foo'

// In your tests:
const rule = require("../rules/use-hk-utils-func")
const RuleTester = require("eslint").RuleTester

const ruleTester = new RuleTester()
ruleTester.run("use-hk-utils-func", rule, {
  valid: [
    {
      code: "import { queryParse } from 'hk-utils'",
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
      },
      options: []
    }
  ],

  invalid: [
    {
      code: "import { queryParse } from '~utils/index'",
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
      },
      errors: [
        { message: "hk-utils 工具库已存在 queryParse 方法，请使用 hk-utils 中 queryParse 方法" }
      ]
    },
  ]
})
