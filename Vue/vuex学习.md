# Vuex 是什么？

Vuex 是一个专为 Vue.js 应用程序开发的**状态管理模式 + 库**。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。

# 安装

## 直接下载 / CDN 引用

```
https://unpkg.com/vuex@4
```

[Unpkg.com](https://unpkg.com/) 提供了基于 npm 的 CDN 链接。以上的链接会一直指向 npm 上发布的最新版本。您也可以通过 `https://unpkg.com/vuex@4.0.0/dist/vuex.global.js` 这样的方式指定特定的版本。

在 Vue 之后引入 `vuex` 会进行自动安装：

```html
<script src="/path/to/vue.js"></script>
<script src="/path/to/vuex.js"></script>
```

## npm

```bash
npm install vuex@next --save
```

## Yarn

```bash
yarn add vuex@next --save
```

## 自己构建

如果需要使用 dev 分支下的最新版本，您可以直接从 GitHub 上克隆代码并自己构建。

```bash
git clone https://github.com/vuejs/vuex.git node_modules/vuex
cd node_modules/vuex
yarn
yarn build
```

----



