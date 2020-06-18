/**
 * @fileoverview Avoid using variables named foo
 * @author pfan123
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------
// "no-avoid-name": [2, "never", { "exceptRange": true }]

module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Avoid using variables named '{{ name }}",
      url: "https://github.com/pfan123/eslint-plugin-boilerplate/blob/master/docs/no-avoid-name.md",
      suggestion: true,
      schema: [
        {
          "enum": ["always", "never"]
        },
        {
            "type": "object",
            "properties": {
                "exceptRange": {
                    "type": "boolean"
                }
            },
            "additionalProperties": false
        }
      ],
    },
    // Define messageId
    messages: {
      avoidName: "Avoid using variables named '{{ name }}'"
    }
  },
  create(context) {
    return {
      Identifier(node) {
        if (node.name === "foo") {
            context.report({
                node,
                messageId: "avoidName",
                data: {
                    name: "foo",
                }
            })
        }
      },
      ExportDefaultDeclaration(node){
        context.report({
          node,
          message: "dddddddddd测试",
        })
      },
      VElement(node){
        if(node.name === "template"){
          context.report({
            node,
            message: "template标签",
          })
        }
      }
    }
  }
}
