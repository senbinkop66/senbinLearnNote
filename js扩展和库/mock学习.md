# 开始 & 安装

```
# 安装
npm install mockjs
```

# 语法规范

Mock.js 的语法规范包括两部分：

1. 数据模板定义规范（Data Template Definition，DTD）
2. 数据占位符定义规范（Data Placeholder Definition，DPD）

## 数据模板定义规范 DTD

**数据模板中的每个属性由 3 部分构成：属性名、生成规则、属性值：**

```
// 属性名   name
// 生成规则 rule
// 属性值   value
'name|rule': value
```

**注意：**

- *属性名* 和 *生成规则* 之间用竖线 `|` 分隔。

- *生成规则* 是可选的。

- 生成规则

   

  有 7 种格式：

  1. `'name|min-max': value`
  2. `'name|count': value`
  3. `'name|min-max.dmin-dmax': value`
  4. `'name|min-max.dcount': value`
  5. `'name|count.dmin-dmax': value`
  6. `'name|count.dcount': value`
  7. `'name|+step': value`

- ***生成规则\* 的 含义 需要依赖 \*属性值的类型\* 才能确定。**

- *属性值* 中可以含有 `@占位符`。

- *属性值* 还指定了最终值的初始值和类型。

**生成规则和示例：**

### 1. 属性值是字符串 **String**

1. `'name|min-max': string`

   通过重复 `string` 生成一个字符串，重复次数大于等于 `min`，小于等于 `max`。

2. `'name|count': string`

   通过重复 `string` 生成一个字符串，重复次数等于 `count`。

```js
const data = Mock.mock({
    'str1|1-5': 'oo', // 'oooooooo',
    'str2|10': '-' // '----------'
});
```



### 2. 属性值是数字 **Number**

1. `'name|+1': number`

   属性值自动加 1，初始值为 `number`。

2. `'name|min-max': number`

   生成一个大于等于 `min`、小于等于 `max` 的整数，属性值 `number` 只是用来确定类型。

3. `'name|min-max.dmin-dmax': number`

   生成一个浮点数，整数部分大于等于 `min`、小于等于 `max`，小数部分保留 `dmin` 到 `dmax` 位。

```js
Mock.mock({
    'number1|1-100.1-10': 1,
    'number2|123.1-10': 1,
    'number3|123.3': 1,
    'number4|123.10': 1.123
})
// =>
{
    "number1": 12.92,
    "number2": 123.51,
    "number3": 123.777,
    "number4": 123.1231091814
}
```