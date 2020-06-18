// in the file to lint:

// const foo = 2;
//  ^ error: Avoid using variables named 'foo'

// In your tests:
const rule = require("../rules/no-avoid-name")
const RuleTester = require("eslint").RuleTester

const ruleTester = new RuleTester()
ruleTester.run("no-avoid-name", rule, {
  valid: ["bar", "baz"],
  invalid: [
    {
      code: "foo",
      errors: [
          {
            messageId: "avoidName"
          }
      ]
    }
  ]
})
