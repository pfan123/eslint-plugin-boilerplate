# 使用 hk-utils 方法 （use-hk-utils-func）

配置文件中启用了此规则方式：

```js
  "extends": "plugin:alipayhk/base"

  // or

  plugins: [
    'alipayhk',
  ],
  rules: {
    "alipayhk/use-hk-utils-func": ["error"]
  }
```   

> 注意，规则匹配为 hk-utils 中导出的方法，若 hk-utils 更新，需更新对应方法列表

## Rule Details

该规则禁止单独引用 [hk-utils](https://docs.antfin-inc.com/hk-utils-docs/) 中已经存在的方法，需使用 [hk-utils](https://docs.antfin-inc.com/hk-utils-docs/) 中对应的方法。

**错误** 代码示例：

```js
import { queryParse } from '~utils/index'

```

**正确** 代码示例：

```js
import { queryParse } from '@alipay/hk-utils'

```

## When Not To Use It

如果你打算保留你的写法，那么你可以禁用此规则。
