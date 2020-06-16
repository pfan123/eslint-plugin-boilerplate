// in the file to lint:

var foo = 2;
//  ^ error: Avoid using variables named 'foo'

// In your tests:
var rule = require("../rules/no-avoid-name");
var RuleTester = require("eslint").RuleTester;

var ruleTester = new RuleTester();
ruleTester.run("my-rule", rule, {
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
