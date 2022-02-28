# **基础**

## 安装

### 兼容性

Vue **不支持** IE8 及以下版本，因为 Vue 使用了 IE8 无法模拟的 ECMAScript 5 特性。但它支持所有[兼容 ECMAScript 5 的浏览器](https://caniuse.com/#feat=es5)。

### 安装方式

Vue.js 设计的初衷就包括可以被渐进式地采用。这意味着它可以根据需求以多种方式集成到一个项目中。

将 Vue.js 添加到项目中主要有四种方式：

1. 在页面上以 [CDN 包](https://v3.cn.vuejs.org/guide/installation.html#cdn)的形式导入。
2. 下载 JavaScript 文件并[自行托管](https://v3.cn.vuejs.org/guide/installation.html#下载并自托管)。
3. 使用 [npm](https://v3.cn.vuejs.org/guide/installation.html#npm) 安装它。
4. 使用官方的 [CLI](https://v3.cn.vuejs.org/guide/installation.html#命令行工具-cli) 来构建一个项目，它为现代前端工作流程提供了功能齐备的构建设置 (例如，热重载、保存时的提示等等)。

#### CDN

对于制作原型或学习，你可以这样使用最新版本：

```html
<script src="https://unpkg.com/vue@next"></script>
```

对于生产环境，我们推荐链接到一个明确的版本号和构建文件，以避免新版本造成的不可预期的破坏。

```html
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.14"></script>
```

#### 下载并自托管

如果你想避免使用构建工具，但又无法在生产环境使用 CDN，那么你可以下载相关 `.js` 文件并自行托管在你的服务器上。然后你可以通过 `<script>` 标签引入，与使用 CDN 的方法类似。

这些文件可以在 [unpkg](https://unpkg.com/browse/vue@next/dist/) 或者 [jsDelivr](https://cdn.jsdelivr.net/npm/vue@next/dist/) 这些 CDN 上浏览和下载。各种不同文件将在[以后解释](https://v3.cn.vuejs.org/guide/installation.html#对不同构建版本的解释)，但你通常需要同时下载开发环境构建版本以及生产环境构建版本。

#### npm

在用 Vue 构建大型应用时推荐使用 npm 安装[[1\]](https://v3.cn.vuejs.org/guide/installation.html#footnote-1) 。npm 能很好地和诸如 [webpack](https://webpack.js.org/) 或 [Rollup](https://rollupjs.org/) 模块打包器配合使用。

```sh
# 最新稳定版
npm install vue@next
```

Vue 还提供了编写[单文件组件](https://v3.cn.vuejs.org/guide/single-file-component.html)的配套工具。如果你想使用单文件组件，那么你还需要安装 `@vue/compiler-sfc`：

```sh
npm install -D @vue/compiler-sfc
```

如果你是从 Vue 2 过渡而来的，请注意 `@vue/compiler-sfc` 替换掉了 `vue-template-compiler`

除了 `@vue/compiler-sfc` 之外，你还需要为已选择的打包工具选择一个配套的单文件组件 loader 或 plugin。更多信息请查阅[单文件组件文档](https://v3.cn.vuejs.org/guide/single-file-component.html)。

大多数情况下，我们更倾向于使用 Vue CLI 来创建一个配置最小化的 webpack 构建版本。

#### 命令行工具 (CLI)

Vue 提供了一个[官方的 CLI](https://cli.vuejs.org/zh/)，为单页面应用 (SPA) 快速搭建繁杂的脚手架。它为现代前端工作流提供了功能齐备的构建设置。只需要几分钟的时间就可以运行起来并带有热重载、保存时 lint 校验，以及生产环境可用的构建版本。更多详情可查阅 [Vue CLI 的文档](https://cli.vuejs.org/zh/)。

CLI 工具假定用户对 Node.js 和相关构建工具有一定程度的了解。如果你是新手，我们强烈建议先在不用构建工具的情况下通读[指南](https://v3.cn.vuejs.org/guide/introduction.html)，在熟悉 Vue 本身之后再使用 CLI。

对于 Vue 3，你应该使用 `npm` 上可用的 Vue CLI v4.5 作为 `@vue/cli`。要升级，你应该需要全局重新安装最新版本的 `@vue/cli`：

```sh
yarn global add @vue/cli
# 或
npm install -g @vue/cli
```

然后在 Vue 项目中运行：

```
vue upgrade --next
```

###  Vite

[Vite](https://cn.vitejs.dev/) 是一个 web 开发构建工具，由于其原生 ES 模块导入方式，可以实现闪电般的冷服务器启动。

通过在终端中运行以下命令，可以使用 Vite 快速构建 Vue 项目。

使用 npm：

```sh
# npm 6.x
$ npm init vite@latest <project-name> --template vue

# npm 7+，需要加上额外的双短横线
$ npm init vite@latest <project-name> -- --template vue

$ cd <project-name>
$ npm install
$ npm run dev
```

或者 yarn：

```sh
$ yarn create vite <project-name> --template vue
$ cd <project-name>
$ yarn
$ yarn dev
```

或者 pnpm:

```sh
$ pnpm create vite <project-name> -- --template vue
$ cd <project-name>
$ pnpm install
$ pnpm dev
```

### 对不同构建版本的解释

在 [npm 包的 dist/ 目录](https://cdn.jsdelivr.net/npm/vue@3.0.2/dist/)你将会找到很多不同的 Vue.js 构建版本。下面是一个概述，根据不同的使用情况，应该使用哪个 `dist` 文件：

#### 使用 CDN 或没有构建工具

#### `vue(.runtime).global(.prod).js`：

- 若要通过浏览器中的 `<script src="...">` 直接使用，则暴露 Vue 全局。
- 浏览器内模板编译：
  - `vue.global.js` 是包含编译器和运行时的“完整”构建版本，因此它支持动态编译模板。
  - `vue.runtime.global.js` 只包含运行时，并且需要在构建步骤期间预编译模板。
- 内联所有 Vue 核心内部包——即：它是一个单独的文件，不依赖于其他文件。这意味着你必须导入此文件和此文件中的所有内容，以确保获得相同的代码实例。
- 包含硬编码的 prod/dev 分支，并且 prod 构建版本是预先压缩过的。将 `*.prod.js` 文件用于生产环境。

全局打包不是 [UMD](https://github.com/umdjs/umd) 构建的，它们被打包成 [IIFEs](https://developer.mozilla.org/en-US/docs/Glossary/IIFE)，并且仅用于通过 `<script src="...">` 直接使用。

#### `vue(.runtime).esm-browser(.prod).js`：

- 用于通过原生 ES 模块导入使用 (在浏览器中通过 `<script type="module">` 来使用)。
- 与全局构建版本共享相同的运行时编译、依赖内联和硬编码的 prod/dev 行为。

#### 使用构建工具

#### `vue(.runtime).esm-bundler.js`：

- 用于 `webpack`，`rollup` 和 `parcel` 等构建工具。

- 留下 prod/dev 分支的 `process.env.NODE_ENV` 守卫语句 (必须由构建工具替换)。

- 不提供压缩版本 (打包后与其余代码一起压缩)。

- import 依赖 (例如：

  ```
  @vue/runtime-core
  ```

  ，

  ```
  @vue/runtime-compiler
  ```

  )

  - 导入的依赖项也是 esm bundler 构建版本，并将依次导入其依赖项 (例如：@vue/runtime-core imports @vue/reactivity)。
  - 这意味着你**可以**单独安装/导入这些依赖，而不会导致这些依赖项的不同实例，但你必须确保它们都为同一版本。

- 浏览器内模板编译：

  - `vue.runtime.esm-bundler.js` **(默认)** 仅运行时，并要求所有模板都要预先编译。这是构建工具的默认入口 (通过 `package.json` 中的 module 字段)，因为在使用构建工具时，模板通常是预先编译的 (例如：在 `*.vue` 文件中)。
  - `vue.esm-bundler.js` 包含运行时编译器。如果你使用了一个构建工具，但仍然想要运行时的模板编译 (例如，DOM 内 模板或通过内联 JavaScript 字符串的模板)，请使用这个文件。你需要配置你的构建工具，将 vue 设置为这个文件。

#### 对于服务端渲染

#### vue.cjs(.prod).js`：

- 通过 `require()` 在 Node.js 服务器端渲染使用。
- 如果你将应用程序与带有 `target: 'node'` 的 webpack 打包在一起，并正确地将 `vue` 外部化，则将加载此文件。
- dev/prod 文件是预构建的，但是会根据 `process.env.NODE_ENV` 自动加载相应的文件。

### 运行时 + 编译器 vs. 仅运行时

如果需要在客户端上编译模板 (即：将字符串传递给 template 选项，或者使用元素的 DOM 内 HTML 作为模板挂载到元素)，你将需要编译器，因此需要完整的构建版本：

```js
// 需要编译器
Vue.createApp({
  template: '<div>{{ hi }}</div>'
})

// 不需要
Vue.createApp({
  render() {
    return Vue.h('div', {}, this.hi)
  }
})
```

当使用 `vue-loader` 时，`*.vue` 文件中的模板会在构建时预编译为 JavaScript，在最终的捆绑包中并不需要编译器，因此可以只使用运行时构建版本。

# 介绍

Vue (读音 /vjuː/，类似于 **view**) 是一套用于构建用户界面的**渐进式框架**。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与[现代化的工具链](https://v3.cn.vuejs.org/guide/single-file-component.html)以及各种[支持类库](https://github.com/vuejs/awesome-vue#components--libraries)结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。

## 声明式渲染

Vue.js 的核心是一个允许采用简洁的模板语法来声明式地将数据渲染进 DOM 的系统：

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset=utf-8>
        <script src="https://unpkg.com/vue@3.2.31"></script>
    </head>
    <body>
        <div id="counter">
            Counter: {{counter}}
        </div>

<script type="text/javascript">
    const Counter={
        data(){
            return {
                counter:0
            }
        }
    }
    Vue.createApp(Counter).mount('#counter');
</script>

    </body>
</html>
```

我们已经成功创建了第一个 Vue 应用！看起来这跟渲染一个字符串模板非常类似，但是 Vue 在背后做了大量工作。现在数据和 DOM 已经被建立了关联，所有东西都是**响应式的**。我们要怎么确认呢？请看下面的示例，其中 `counter` property 每秒递增，你将看到渲染的 DOM 是如何变化的：

```js
    const Counter={
        data(){
            return {
                counter:0
            }
        },
        mounted(){
            setInterval(()=>{
                this.counter++;
            },1000);
        }
    }
    Vue.createApp(Counter).mount('#counter');
```

除了文本插值，我们还可以像这样绑定元素的 attribute：

```html
        <div id="bind-attribute">
            <span v-bind:title="message">
                鼠标悬停几秒钟查看此处动态绑定的提示信息！
            </span>
        </div>
<script type="text/javascript">
    const AttributeBinding={
        data(){
            return {
                message:`You loaded this page on ${new Date().toLocale}`
            }
        },
        mounted(){
            setInterval(()=>{
                this.counter++;
            },1000);
        }
    }
    Vue.createApp(AttributeBinding).mount('#bind-attribute');

</script>
```

这里我们遇到了一点新东西。你看到的 `v-bind` attribute 被称为**指令**。指令带有前缀 `v-`，以表示它们是 Vue 提供的特殊 attribute。可能你已经猜到了，它们会在渲染的 DOM 上应用特殊的响应式行为。在这里，该指令的意思是：“*将这个元素节点的 `title` attribute 和当前活跃实例的 `message` property 保持一致*”。

## 处理用户输入

为了让用户和应用进行交互，我们可以用 `v-on` 指令添加一个事件监听器，通过它调用在实例中定义的方法：

```html
    <div id="event-handing">
        <p>{{message}}</p>
        <button v-on:click="reverseMessage">反转 Message</button>
    </div>
<script type="text/javascript">
    const EventHanding={
        data(){
            return {
                message:`Hello Vue.js`
            }
        },
        methods:{
            reverseMessage(){
                this.message=this.message.split("").reverse().join("");
            }
        },
        
    }
    Vue.createApp(EventHanding).mount('#event-handing');

</script>
```

注意在这个方法中，我们更新了应用的状态，但没有触碰 DOM——所有的 DOM 操作都由 Vue 来处理，你编写的代码只需要关注逻辑层面即可。

Vue 还提供了 `v-model` 指令，它能轻松实现表单输入和应用状态之间的双向绑定。

```html
<div id="two-way-binding">
  <p>{{ message }}</p>
  <input v-model="message" />
</div>
<script type="text/javascript">
const TwoWayBinding = {
  data() {
    return {
      message: 'Hello Vue!'
    }
  }
}

Vue.createApp(TwoWayBinding).mount('#two-way-binding')
</script>
```

## 条件与循环

控制切换一个元素是否显示也相当简单：

```html
<div id="conditional-rendering">
  <span v-if="seen">现在你看到我了</span>
</div>
```

```js
const ConditionalRendering = {
  data() {
    return {
      seen: true
    }
  }
}

Vue.createApp(ConditionalRendering).mount('#conditional-rendering')
```

这个例子演示了我们不仅可以把数据绑定到 DOM 文本或 attribute，还可以绑定到 DOM 的**结构**。此外，Vue 也提供一个强大的过渡效果系统，可以在 Vue 插入/更新/移除元素时自动应用[过渡效果](https://v3.cn.vuejs.org/guide/transitions-enterleave.html)。

还有其它很多指令，每个都有特殊的功能。例如，`v-for` 指令可以绑定数组的数据来渲染一个项目列表：

```html
<div id="list-rendering">
  <ol>
    <li v-for="todo in todos">
      {{ todo.text }}
    </li>
  </ol>
</div>
```

```js
const ListRendering = {
  data() {
    return {
      todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' }
      ]
    }
  }
}

Vue.createApp(ListRendering).mount('#list-rendering')
```

## 组件化应用构建

组件系统是 Vue 的另一个重要概念，因为它是一种抽象，允许我们使用小型、独立和通常可复用的组件构建大型应用。仔细想想，几乎任意类型的应用界面都可以抽象为一个组件树：

在 Vue 中，组件本质上是一个具有预定义选项的实例。在 Vue 中注册组件很简单：如对 `app` 对象所做的那样创建一个组件对象，并将其定义在父级组件的 `components` 选项中：

```html
<script type="text/javascript">
    const TodoItem={
        template:`<li>This is a todo</li>`,
    }
    // 创建 Vue 应用
    const app=Vue.createApp({
        components:{
            TodoItem,
        },
        //组件的其它 property
    });
    app.mount("#app1");
</script>
```

现在，你可以将其放到另一个组件的模板中：

```html
<ol>
  <!-- 创建一个 todo-item 组件实例 -->
  <todo-item></todo-item>
</ol>
```

但是这样会为每个待办项渲染同样的文本，这看起来并不炫酷。我们应该能将数据从父组件传入子组件才对。让我们来修改一下组件的定义，使之能够接受一个 [prop](https://v3.cn.vuejs.org/guide/component-basics.html#通过-prop-向子组件传递数据)：

```js
const TodoItem = {
  props: ['todo'],
  template: `<li>{{ todo.text }}</li>`
}
```

现在，我们可以使用 `v-bind` 指令将待办项传到循环输出的每个组件中：

```html
    <div id="todo-list-app">
        <ol>
            <todo-item 
            v-for="item in groceryList" 
            v-bind:todo="item" 
            v-bind:key="item.id"></todo-item>
        </ol>
    </div>
<script type="text/javascript">
    const TodoItem={
        props:['todo'],
        template:`<li>{{ todo.text }}</li>`
    }
    // 创建 Vue 应用
    const TodoList={
        components:{
            TodoItem
        },
        data() {
            return {
              groceryList: [
                { id: 0, text: 'Vegetables' },
                { id: 1, text: 'Cheese' },
                { id: 2, text: 'Whatever else humans are supposed to eat' }
              ]
            }
        },
        //组件的其它 property
    };
    const app=Vue.createApp(TodoList);
    app.mount("#todo-list-app");
</script>
```

尽管这只是一个刻意设计的例子，但是我们已经设法将应用分割成了两个更小的单元。子单元通过 prop 接口与父单元进行了良好的解耦。我们现在可以进一步改进 `<todo-item>` 组件，提供一个更为复杂的模板和逻辑，而不会影响到父应用。

在一个大型应用中，有必要将整个应用程序划分为多个组件，以使开发更易管理。在[后续教程](https://v3.cn.vuejs.org/guide/component-basics.html)中我们将详述组件，不过这里有一个 (假想的) 例子，以展示使用了组件的应用模板是什么样的：

```html
<div id="app">
  <app-nav></app-nav>
  <app-view>
    <app-sidebar></app-sidebar>
    <app-content></app-content>
  </app-view>
</div>
```

### 与自定义元素的关系

你可能已经注意到 Vue 组件与**自定义元素**非常类似——它是 [Web Components 规范](https://www.w3.org/wiki/WebComponents/)的一部分。确实，Vue 的组件设计 (如插槽 API) 在浏览器原生支持该规范前就部分受到了它的影响。

它们之间主要的不同在于，**Vue 组件的数据模型是作为框架的一部分而设计的，而该框架为构建复杂应用提供了很多必要的附加功能。**例如响应式模板和状态管理——这两者都没有被该规范所覆盖。

Vue 也为创建和使用自定义元素提供了很好的支持。关于其更多细节，请浏览 [Vue 和 Web Components](https://v3.cn.vuejs.org/guide/web-components.html) 章节。

# 应用 & 组件实例

## 创建一个应用实例

每个 Vue 应用都是通过用 `createApp` 函数创建一个新的**应用实例**开始的：

```js
const app = Vue.createApp({
  /* 选项 */
})
```

该应用实例是用来在应用中注册“全局”组件的。我们会在后面的指南中详细讨论，简单的例子：

```js
const app = Vue.createApp({})
app.component('SearchInput', SearchInputComponent)
app.directive('focus', FocusDirective)
app.use(LocalePlugin)
```

应用实例暴露的大多数方法都会返回该同一实例，允许链式：

```js
Vue.createApp({})
  .component('SearchInput', SearchInputComponent)
  .directive('focus', FocusDirective)
  .use(LocalePlugin)
```

## 根组件

传递给 `createApp` 的选项用于配置**根组件**。当我们**挂载**应用时，该组件被用作渲染的起点。

一个应用需要被挂载到一个 DOM 元素中。例如，如果你想把一个 Vue 应用挂载到 `<div id="app"></div>`，应该传入 `#app`：

```js
const RootComponent = { 
  /* 选项 */ 
}
const app = Vue.createApp(RootComponent)
const vm = app.mount('#app')
```

与大多数应用方法不同的是，`mount` 不返回应用本身。相反，它返回的是根组件实例。

虽然没有完全遵循 [MVVM 模型](https://en.wikipedia.org/wiki/Model_View_ViewModel)，但是 Vue 的设计也受到了它的启发。因此在文档中经常会使用 `vm` (ViewModel 的缩写) 这个变量名表示组件实例。

尽管本页面上的所有示例都只需要一个单一的组件就可以，但是大多数的真实应用都是被组织成一个嵌套的、可重用的组件树。举个例子，一个 todo 应用组件树可能是这样的：

```text
Root Component
└─ TodoList
   ├─ TodoItem
   │  ├─ DeleteTodoButton
   │  └─ EditTodoButton
   └─ TodoListFooter
      ├─ ClearTodosButton
      └─ TodoListStatistics
```

每个组件将有自己的组件实例 `vm`。对于一些组件，如 `TodoItem`，在任何时候都可能有多个实例渲染。这个应用中的所有组件实例将共享同一个应用实例。

## 组件实例 property

在前面的指南中，我们认识了 `data` property。在 `data` 中定义的 property 是通过组件实例暴露的：

```js
const app = Vue.createApp({
  data() {
    return { count: 4 }
  }
})

const vm = app.mount('#app')

console.log(vm.count) // => 4
```

还有各种其他的组件选项，可以将用户定义的 property 添加到组件实例中，例如 `methods`，`props`，`computed`，`inject` 和 `setup`。我们将在后面的指南中深入讨论它们。组件实例的所有 property，无论如何定义，都可以在组件的模板中访问。

Vue 还通过组件实例暴露了一些内置 property，如 `$attrs` 和 `$emit`。这些 property 都有一个 `$` 前缀，以避免与用户定义的 property 名冲突。

## 生命周期钩子

每个组件在被创建时都要经过一系列的初始化过程——例如，需要设置数据监听、编译模板、将实例挂载到 DOM 并在数据变化时更新 DOM 等。同时在这个过程中也会运行一些叫做**生命周期钩子**的函数，这给了用户在不同阶段添加自己的代码的机会。

比如 [created](https://v3.cn.vuejs.org/api/options-lifecycle-hooks.html#created) 钩子可以用来在一个实例被创建之后执行代码：

```js
Vue.createApp({
  data() {
    return { count: 1}
  },
  created() {
    // `this` 指向 vm 实例
    console.log('count is: ' + this.count) // => "count is: 1"
  }
})
```

也有一些其它的钩子，在实例生命周期的不同阶段被调用，如 [mounted](https://v3.cn.vuejs.org/api/options-lifecycle-hooks.html#mounted)、[updated](https://v3.cn.vuejs.org/api/options-lifecycle-hooks.html#updated) 和 [unmounted](https://v3.cn.vuejs.org/api/options-lifecycle-hooks.html#unmounted)。生命周期钩子的 `this` 上下文指向调用它的当前活动实例。

不要在选项 property 或回调上使用[箭头函数](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions)，比如 `created: () => console.log(this.a)` 或 `vm.$watch('a', newValue => this.myMethod())`。因为箭头函数并没有 `this`，`this` 会作为变量一直向上级词法作用域查找，直至找到为止，经常导致 `Uncaught TypeError: Cannot read property of undefined` 或 `Uncaught TypeError: this.myMethod is not a function` 之类的错误。

## 生命周期图示

![lifecycle](E:\pogject\学习笔记\image\vue\lifecycle.svg)

# 模板语法

Vue.js 使用了基于 HTML 的模板语法，允许开发者声明式地将 DOM 绑定至底层组件实例的数据。所有 Vue.js 的模板都是合法的 HTML，所以能被遵循规范的浏览器和 HTML 解析器解析。

在底层的实现上，Vue 将模板编译成虚拟 DOM 渲染函数。结合响应性系统，Vue 能够智能地计算出最少需要重新渲染多少组件，并把 DOM 操作次数减到最少。

如果你熟悉虚拟 DOM 并且偏爱 JavaScript 的原始力量，你也可以不用模板，[直接写渲染 (render) 函数](https://v3.cn.vuejs.org/guide/render-function.html)，使用可选的 JSX 语法。

## 插值

### 文本

数据绑定最常见的形式就是使用“Mustache” (双大括号) 语法的文本插值：

```html
<span>Message: {{ msg }}</span>
```

Mustache 标签将会被替代为对应组件实例中 `msg` property 的值。无论何时，绑定的组件实例上 `msg` property 发生了改变，插值处的内容都会更新。

通过使用 [v-once 指令](https://v3.cn.vuejs.org/api/directives.html#v-once)，你也能执行一次性地插值，当数据改变时，插值处的内容不会更新。但请留心这会影响到该节点上的其它数据绑定：

```html
<span v-once>这个将不会改变: {{ msg }}</span>
```

### 原始 HTML

双大括号会将数据解释为普通文本，而非 HTML 代码。为了输出真正的 HTML，你需要使用[`v-html` 指令](https://v3.cn.vuejs.org/api/directives.html#v-html)：

```html
<p>Using mustaches: {{ rawHtml }}</p>
<p>Using v-html directive: <span v-html="rawHtml"></span></p>
```

这个 `span` 的内容将会被替换成为 `rawHtml` property 的值，直接作为 HTML——会忽略解析 property 值中的数据绑定。注意，**你不能使用 `v-html` 来复合局部模板**，因为 Vue 不是基于字符串的模板引擎。反之，对于用户界面 (UI)，组件更适合作为可重用和可组合的基本单位。

在你的站点上动态渲染任意的 HTML 是非常危险的，因为它很容易导致 [XSS 攻击](https://en.wikipedia.org/wiki/Cross-site_scripting)。请只对可信内容使用 HTML 插值，**绝不要**将用户提供的内容作为插值。

### Attribute

Mustache 语法不能在 HTML attribute 中使用，然而，可以使用 [`v-bind` 指令](https://v3.cn.vuejs.org/api/directives.html#v-bind)：

```html
<div v-bind:id="dynamicId"></div>
```

如果绑定的值是 `null` 或 `undefined`，那么该 attribute 将不会被包含在渲染的元素上。

对于布尔 attribute (它们只要存在就意味着值为 `true`)，`v-bind` 工作起来略有不同，在这个例子中：

```html
<button v-bind:disabled="isButtonDisabled">按钮</button>
```

如果 `isButtonDisabled` 的值是 truthy[[1\]](https://v3.cn.vuejs.org/guide/template-syntax.html#footnote-1)，那么 `disabled` attribute 将被包含在内。如果该值是一个空字符串，它也会被包括在内，与 `<button disabled="">` 保持一致。对于其他 falsy[[2\]](https://v3.cn.vuejs.org/guide/template-syntax.html#footnote-2) 的值，该 attribute 将被省略。

### 使用 JavaScript 表达式

迄今为止，在我们的模板中，我们一直都只绑定简单的 property 键值。但实际上，对于所有的数据绑定，Vue.js 都提供了完全的 JavaScript 表达式支持。

```html
{{ number + 1 }}

{{ ok ? 'YES' : 'NO' }}

{{ message.split('').reverse().join('') }}

<div v-bind:id="'list-' + id"></div>
```

这些表达式会在当前活动实例的数据作用域下作为 JavaScript 被解析。有个限制就是，每个绑定都只能包含**单个表达式**，所以下面的例子都**不会**生效。

```html
<!--  这是语句，不是表达式：-->
{{ var a = 1 }}

<!-- 流程控制也不会生效，请使用三元表达式 -->
{{ if (ok) { return message } }}
```

## 指令

指令 (Directives) 是带有 `v-` 前缀的特殊 attribute。指令 attribute 的值预期是**单个 JavaScript 表达式** (`v-for` 和 `v-on` 是例外情况，稍后我们再讨论)。**指令的职责是，当表达式的值改变时，将其产生的连带影响，响应式地作用于 DOM。**回顾我们在介绍中看到的例子：

```html
<p v-if="seen">现在你看到我了</p>
```

这里，`v-if` 指令将根据表达式 `seen` 的值的真假来插入/移除 `<p>` 元素。

### 参数

一些指令能够接收一个“参数”，在指令名称之后以冒号表示。例如，`v-bind` 指令可以用于响应式地更新 HTML attribute：

```html
<a v-bind:href="url"> ... </a>
```

在这里 `href` 是参数，告知 `v-bind` 指令将该元素的 `href` attribute 与表达式 `url` 的值绑定。

另一个例子是 `v-on` 指令，它用于监听 DOM 事件：

```html
<a v-on:click="doSomething"> ... </a>
```

在这里参数是监听的事件名。

### 动态参数

也可以在指令参数中使用 JavaScript 表达式，方法是用方括号括起来：

```html
<!--
注意，参数表达式的写法存在一些约束，如之后的“对动态参数表达式的约束”章节所述。
-->
<a v-bind:[attributeName]="url"> ... </a>
```

这里的 `attributeName` 会被作为一个 JavaScript 表达式进行动态求值，求得的值将会作为最终的参数来使用。例如，如果你的组件实例有一个 data property `attributeName`，其值为 `"href"`，那么这个绑定将等价于 `v-bind:href`。

同样地，你可以使用动态参数为一个动态的事件名绑定处理函数：

```html
<a v-on:[eventName]="doSomething"> ... </a>
```

在这个示例中，当 `eventName` 的值为 `"focus"` 时，`v-on:[eventName]` 将等价于 `v-on:focus`

### 修饰符

修饰符 (modifier) 是以半角句号 `.` 指明的特殊后缀，用于指出一个指令应该以特殊方式绑定。例如，`.prevent` 修饰符告诉 `v-on` 指令对于触发的事件调用 `event.preventDefault()`：

```html
<form v-on:submit.prevent="onSubmit">...</form>
```

在接下来对 [`v-on`](https://v3.cn.vuejs.org/guide/events.html#事件修饰符) 和 [`v-for`](https://v3.cn.vuejs.org/guide/forms.html#修饰符) 等功能的探索中，你会看到修饰符的其它例子。

## 缩写

`v-` 前缀作为一种视觉提示，用来识别模板中 Vue 特定的 attribute。当你在使用 Vue.js 为现有标签添加动态行为 (dynamic behavior) 时，v- 前缀很有帮助，然而，对于一些频繁用到的指令来说，就会感到使用繁琐。同时，在构建由 Vue 管理所有模板的单页面应用程序 [(SPA - single page application)](https://en.wikipedia.org/wiki/Single-page_application) 时，`v-` 前缀也变得没那么重要了。因此，Vue 为 `v-bind` 和 `v-on` 这两个最常用的指令，提供了特定简写：

### `v-bind` 缩写

```html
<!-- 完整语法 -->
<a v-bind:href="url"> ... </a>

<!-- 缩写 -->
<a :href="url"> ... </a>

<!-- 动态参数的缩写 -->
<a :[key]="url"> ... </a>
```

### `v-on` 缩写

```html
<!-- 完整语法 -->
<a v-on:click="doSomething"> ... </a>

<!-- 缩写 -->
<a @click="doSomething"> ... </a>

<!-- 动态参数的缩写 -->
<a @[event]="doSomething"> ... </a>
```

它们看起来可能与普通的 HTML 略有不同，但 `:` 与 `@` 对于 attribute 名来说都是合法字符，在所有支持 Vue 的浏览器都能被正确地解析。而且，它们不会出现在最终渲染的标记中。缩写语法是完全可选的，但随着你更深入地了解它们的作用，你会庆幸拥有它们。

### 注意事项

#### 对动态参数值约定

**动态参数预期会求出一个字符串**，`null` 例外。这个特殊的 `null` 值可以用于显式地移除绑定。任何其它非字符串类型的值都将会触发一个警告。

#### 对动态参数表达式约定

动态参数表达式有一些语法约束，因为某些字符，如空格和引号，放在 HTML attribute 名里是无效的。例如：

```html
<!-- 这会触发一个编译警告 -->
<a v-bind:['foo' + bar]="value"> ... </a>
```

变通的办法是使用没有空格或引号的表达式，或用[计算属性](https://v3.cn.vuejs.org/guide/computed.html)替代这种复杂表达式。

在 DOM 中使用模板时 (直接在一个 HTML 文件里撰写模板)，还**需要避免使用大写字符来命名键名**，因为浏览器会把 attribute 名全部强制转为小写：

```html
<!--
在 DOM 中使用模板时这段代码会被转换为 `v-bind:[someattr]`。
除非在实例中有一个名为“someattr”的 property，否则代码不会工作。
-->
<a v-bind:[someAttr]="value"> ... </a>
```

#### JavaScript 表达式

模板表达式都被放在沙盒中，只能访问一个[受限的全局变量列表](https://github.com/vuejs/vue-next/blob/master/packages/shared/src/globalsWhitelist.ts#L3)，如 `Math` 和 `Date`。你不应该在模板表达式中试图访问用户定义的全局变量。



## Data Property

组件的 `data` 选项是一个函数。Vue 会在创建新组件实例的过程中调用此函数。它应该返回一个对象，然后 Vue 会通过响应性系统将其包裹起来，并以 `$data` 的形式存储在组件实例中。为方便起见，该对象的任何顶级 property 也会直接通过组件实例暴露出来：

```js
const app = Vue.createApp({
  data() {
    return { count: 4 }
  }
})

const vm = app.mount('#app')

console.log(vm.$data.count) // => 4
console.log(vm.count)       // => 4

// 修改 vm.count 的值也会更新 $data.count
vm.count = 5
console.log(vm.$data.count) // => 5

// 反之亦然
vm.$data.count = 6
console.log(vm.count) // => 6
```

这些实例 property 仅在实例首次创建时被添加，所以你需要确保它们都在 `data` 函数返回的对象中。必要时，要对尚未提供所需值的 property 使用 `null`、`undefined` 或其他占位的值。

直接将不包含在 `data` 中的新 property 添加到组件实例是可行的。但由于该 property 不在背后的响应式 `$data` 对象内，所以 [Vue 的响应性系统](https://v3.cn.vuejs.org/guide/reactivity.html)不会自动跟踪它。

Vue 使用 `$` 前缀通过组件实例暴露自己的内置 API。它还为内部 property 保留 `_` 前缀。你应该避免使用这两个字符开头的顶级 `data` property 名称。

## 方法

我们用 `methods` 选项向组件实例添加方法，它应该是一个包含所需方法的对象：

```js
const app = Vue.createApp({
  data() {
    return { count: 4 }
  },
  methods: {
    increment() {
      // `this` 指向该组件实例
      this.count++
    }
  }
})

const vm = app.mount('#app')

console.log(vm.count) // => 4

vm.increment()

console.log(vm.count) // => 5
```

Vue 自动为 `methods` 绑定 `this`，以便于它始终指向组件实例。这将确保方法在用作事件监听或回调时保持正确的 `this` 指向。在定义 `methods` 时应避免使用箭头函数，因为这会阻止 Vue 绑定恰当的 `this` 指向。

这些 `methods` 和组件实例的其它所有 property 一样可以在组件的模板中被访问。在模板中，它们通常被当做事件监听使用：

```html
<button @click="increment">Up vote</button>
```

在上面的例子中，点击 `<button>` 时，会调用 `increment` 方法。

也可以直接从模板中调用方法。就像下一章节即将看到的，通常换做[计算属性](https://v3.cn.vuejs.org/guide/computed.html)会更好。但是，在计算属性不可行的情况下，使用方法可能会很有用。你可以在模板支持 JavaScript 表达式的任何地方调用方法：

```html
<span :title="toTitleDate(date)">
  {{ formatDate(date) }}
</span>
```

如果 `toTitleDate` 或 `formatDate` 访问了任何响应式数据，则将其作为渲染依赖项进行跟踪，就像直接在模板中使用过一样。

从模板调用的方法不应该有任何副作用，比如更改数据或触发异步进程。如果你想这么做，应该使用[生命周期钩子](https://v3.cn.vuejs.org/guide/instance.html#生命周期钩子)来替换。

### 防抖和节流

Vue 没有内置支持防抖和节流，但可以使用 [Lodash](https://lodash.com/) 等库来实现。

如果某个组件仅使用一次，可以在 `methods` 中直接应用防抖：

```html
<script src="https://unpkg.com/lodash@4.17.20/lodash.min.js"></script>
<script>
  Vue.createApp({
    methods: {
      // 用 Lodash 的防抖函数
      click: _.debounce(function() {
        // ... 响应点击 ...
      }, 500)
    }
  }).mount('#app')
</script>
```

但是，这种方法对于可复用组件有潜在的问题，因为它们都共享相同的防抖函数。为了使组件实例彼此独立，可以在生命周期钩子的 `created` 里添加该防抖函数:

```js
app.component('save-button', {
  created() {
    // 使用 Lodash 实现防抖
    this.debouncedClick = _.debounce(this.click, 500)
  },
  unmounted() {
    // 移除组件时，取消定时器
    this.debouncedClick.cancel()
  },
  methods: {
    click() {
      // ... 响应点击 ...
    }
  },
  template: `
    <button @click="debouncedClick">
      Save
    </button>
  `
})
```



## 计算属性

