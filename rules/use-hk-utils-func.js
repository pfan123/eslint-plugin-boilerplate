/**
 * @fileoverview 避免不使用未使用 hk-utils 方法
 * @author pfan123
 * @reference https://docs.antfin-inc.com/hk-utils-docs/
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------
// "use-hk-utils-func": 2 or "use-hk-utils-func": error

const funcNameList = [
  'chunk',
  'find',
  'some',
  'unique',
  'getLang',
  'loadScript',
  'filter',
  'forEach',
  'map',
  'reduce',
  'dateFormat',
  'compareVersion',
  'getEnv',
  'isAlipay',
  'isAlipayHK',
  'isAndroid',
  'isIOS',
  'isNebula',
  'isPC',
  'isTaoBao',
  'isWindvane',
  'walletVersion',
  'hasEmptyField',
  'pick',
  'capitalize',
  'maskNumber',
  'startsWith',
  'isArray',
  'isFunction',
  'isNumber',
  'isObject',
  'isPromise',
  'isRegExp',
  'isString',
  'isUndefined',
  'getAbsolutePath',
  'gotoApp',
  'mergeQueryString',
  'parseUrl',
  'queryParse',
  'serialize',
  'assert',
  'createIdempotentFunc',
  'exec',
  'formPostSubmit',
  'memorize',
  'nil',
  'serialTasks',
  'sleep',
  'timeoutable',
]

module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "hk-utils 工具库已存在 {{ name }} 方法，请使用 hk-utils 中 {{ name }} 方法",
      url: "http://gitlab.alipay-inc.com/hk-tools/eslint-plugin-alipayhk/blob/master/docs/use-hk-utils-func.md",
      suggestion: true,
      schema: [],
    },
    // Define messageId
    messages: {
      funcName: "hk-utils 工具库已存在 {{ name }} 方法，请使用 hk-utils 中 {{ name }} 方法"
    }
  },
  create(context) {
    return {
      ImportDeclaration(node = {}) {
        const specifiers = node.specifiers || []
        const source = node.source
        if (specifiers.length > 0) {
          specifiers.map(item => {
            if (funcNameList.includes(item.local.name) && !/^hk-utils/.test(source.value)) {
              context.report({
                node,
                messageId: "funcName",
                data: {
                  name: item.local.name,
                }
              })
            }
          })
        }
      },
    }
  }
}
