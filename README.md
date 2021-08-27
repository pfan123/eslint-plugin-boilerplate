# eslint-plugin-boilerplate

`eslint-plugin-boilerplate` —— 快速开发 eslint plugins 模版样例。

## 使用

- 安装

```
yarn install
```

- 链接包文件夹中运行

```
yarn link
```

- 链接到 `eslint-plugin-boilerplate`

```
yarn link "eslint-plugin-boilerplate"
```

- 引入

```js
module.exports = {
  "parser": 'vue-eslint-parser',
  "rules": {
     // "boilerplate/no-avoid-name": ["error", "always"]
    "boilerplate/no-avoid-name": 2
  },
  "plugins": ["boilerplate"]
}
```

## Other Resources

[自定义 Eslint 开发](https://github.com/pfan123/Articles/issues/70)

[Eslint Rules](https://eslint.org/docs/rules/)

[RuleTester](https://cn.eslint.org/docs/developer-guide/nodejs-api#ruletester)

[eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue)

[【AST篇】手把手教你写Eslint插件](https://juejin.cn/post/6844903961804161031)

