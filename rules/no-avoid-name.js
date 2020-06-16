module.exports = {
  meta: {
    messages: {
        avoidName: "Avoid using variables named '{{ name }}'"
    }
  },
  create(context) {
    return {
      Identifier(node) {
         console.error('node.name', node.name)
          if (node.name === "foo") {
              context.report({
                  node,
                  messageId: "avoidName",
                  data: {
                      name: "foo",
                  }
              })
          }
      }
    }
  }
}
