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

