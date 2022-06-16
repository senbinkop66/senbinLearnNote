------

## react

---

#### 3.1 react 虚拟dom

**参考答案：**

虚拟dom是什么？

虚拟 dom 相当于在 js 和真实 dom 中间加了一个缓存，利用 dom diff 算法避免了没有必要的 dom 操作，从而 提高性能。

实现过程

1. 用 JavaScript 对象结构表示 DOM 树的结构
2. 用这个树构建一个真正的 DOM 树，插到文档当中当状态变更的时候，重新构造一棵新的对象树。
3. 用新的树和旧的树进行比较，记录两棵树差异把 2 所记录的差异应用到步骤 1 所构建的真正的 DOM 树上，视图就更新了。

---

#### 3.2 虚拟dom和real dom区别 性能差异

**参考答案：**

减少DOM的操作：虚拟dom可以将多次操作合并为一次操作，减少DOM操作的次数

| **Real DOM**                   | **Virtual DOM**                |
| :----------------------------- | :----------------------------- |
| 1. 更新缓慢。                  | 1. 更新更快。                  |
| 2. 可以直接更新 HTML。         | 2. 无法直接更新 HTML。         |
| 3. 如果元素更新，则创建新DOM。 | 3. 如果元素更新，则更新 JSX 。 |
| 4. DOM操作代价很高。           | 4. DOM 操作非常简单。          |
| 5. 消耗的内存较多。            | 5. 很少的内存消耗。            |

---

#### 3.3 react组件间通信

**参考答案：**

以下6种方法是react组件间通信的方式：

- 父组件向子组件通讯: 父组件可以向子组件通过传 props 的方式，向子组件进行通讯
- 子组件向父组件通讯: props+回调的方式,父组件向子组件传递props进行通讯，此props为作用域为父组件自身的函数，子组件调用该函数，将子组件想要传递的信息，作为参数，传递到父组件的作用域中
- 兄弟组件通信: 找到这两个兄弟节点共同的父节点,结合上面两种方式由父节点转发信息进行通信
- 跨层级通信:Context设计目的是为了共享那些对于一个组件树而言是“全局”的数据，例如当前认证的用户、主题或首选语言,对于跨越多层的全局数据通过Context通信再适合不过
- 发布订阅模式: 发布者发布事件，订阅者监听事件并做出反应,我们可以通过引入event模块进行通信
- 全局状态管理工具: 借助Redux或者Mobx等全局状态管理工具进行通信,这种工具会维护一个全局状态中心Store,并根据不同的事件产生新的状态

----

#### 3.4 redux的原理

**参考答案：**

**Redux：**Redux 是当今最热门的前端开发库之一。它是 JavaScript 程序的可预测状态容器，用于整个应用的状态管理。使用 Redux 开发的应用易于测试，可以在不同环境中运行，并显示一致的行为。

**数据如何通过 Redux 流动？**

1. 首先，用户（通过View）发出Action，发出方式就用到了dispatch方法。
2. 然后，Store自动调用Reducer，并且传入两个参数：当前State和收到的Action，Reducer会返回新的State
3. State一旦有变化，Store就会调用监听函数，来更新View。

**Redux遵循的三个原则是什么？**

1. 单一事实来源：整个应用的状态存储在单个 store 中的对象/状态树里。单一状态树可以更容易地跟踪随时间的变化，并调试或检查应用程序。
2. 状态是只读的：改变状态的唯一方法是去触发一个动作。动作是描述变化的普通 JS 对象。就像 state 是数据的最小表示一样，该操作是对数据更改的最小表示。
3. 使用纯函数进行更改：为了指定状态树如何通过操作进行转换，你需要纯函数。纯函数是那些返回值仅取决于其参数值的函数。

**你对“单一事实来源”有什么理解？**

Redux 使用 “Store” 将程序的整个状态存储在同一个地方。因此所有组件的状态都存储在 Store 中，并且它们从 Store 本身接收更新。单一状态树可以更容易地跟踪随时间的变化，并调试或检查程序。

**Redux 由以下组件组成：**

1. **Action** – 这是一个用来描述发生了什么事情的对象。
2. **Reducer** – 这是一个确定状态将如何变化的地方。
3. **Store** – 整个程序的状态/对象树保存在Store中。
4. **View** – 只显示 Store 提供的数据。

**如何在 Redux 中定义 Action？**

React 中的 Action 必须具有 type 属性，该属性指示正在执行的 ACTION 的类型。必须将它们定义为字符串常量，并且还可以向其添加更多的属性。在 Redux 中，action 被名为 Action Creators 的函数所创建。以下是 Action 和Action Creator 的示例：

```js
function addTodo(text) {
       return {
                type: ADD_TODO,    
                 text
    }
}
```

**解释 Reducer 的作用**

Reducers 是纯函数，它规定应用程序的状态怎样因响应 ACTION 而改变。Reducers 通过接受先前的状态和 action 来工作，然后它返回一个新的状态。它根据操作的类型确定需要执行哪种更新，然后返回新的值。如果不需要完成任务，它会返回原来的状态。

**Store 在 Redux 中的意义是什么？**

Store 是一个 JavaScript 对象，它可以保存程序的状态，并提供一些方法来访问状态、调度操作和注册侦听器。应用程序的整个状态/对象树保存在单一存储中。因此，Redux 非常简单且是可预测的。我们可以将中间件传递到 store 来处理数据，并记录改变存储状态的各种操作。所有操作都通过 reducer 返回一个新状态。

**Redux 有哪些优点？**

- 结果的可预测性 - 由于总是存在一个真实来源，即 store ，因此不存在如何将当前状态与动作和应用的其他部分同步的问题。
- 可维护性 - 代码变得更容易维护，具有可预测的结果和严格的结构。
- 服务器端渲染 - 你只需将服务器上创建的 store 传到客户端即可。这对初始渲染非常有用，并且可以优化应用性能，从而提供更好的用户体验。
- 开发人员工具 - 从操作到状态更改，开发人员可以实时跟踪应用中发生的所有事情。
- 社区和生态系统 - Redux 背后有一个巨大的社区，这使得它更加迷人。一个由才华横溢的人组成的大型社区为库的改进做出了贡献，并开发了各种应用。
- 易于测试 - Redux 的代码主要是小巧、纯粹和独立的功能。这使代码可测试且独立。
- 组织 - Redux 准确地说明了代码的组织方式，这使得代码在团队使用时更加一致和简单。

----

#### **3.5 React组件生命周期的阶段是什么？**

**参考答案：**

React 组件的生命周期有三个不同的阶段：

1. 初始渲染阶段：这是组件即将开始其生命之旅并进入 DOM 的阶段。
2. 更新阶段：一旦组件被添加到 DOM，它只有在 prop 或状态发生变化时才可能更新和重新渲染。这些只发生在这个阶段。
3. 卸载阶段：这是组件生命周期的最后阶段，组件被销毁并从 DOM 中删除。

---

#### 3.6 详细解释 React 组件的生命周期方法

**参考答案：**

目前React 16.8 +的生命周期分为三个阶段,分别是挂载阶段、更新阶段、卸载阶段

挂载阶段:

- constructor: 构造函数，最先被执行,我们通常在构造函数里初始化state对象或者给自定义方法绑定this
- getDerivedStateFromProps:static getDerivedStateFromProps(nextProps, prevState),这是个静态方法,当我们接收到新的属性想去修改我们state，可以使用getDerivedStateFromProps
- render: render函数是纯函数，只返回需要渲染的东西，不应该包含其它的业务逻辑,可以返回原生的DOM、React组件、Fragment、Portals、字符串和数字、Boolean和null等内容
- componentDidMount: 组件装载之后调用，此时我们可以获取到DOM节点并操作，比如对canvas，svg的操作，服务器请求，订阅都可以写在这个里面，但是记得在componentWillUnmount中取消订阅

更新阶段:

- getDerivedStateFromProps: 此方法在更新和挂载阶段都可能会调用
- shouldComponentUpdate:shouldComponentUpdate(nextProps, nextState),有两个参数nextProps和nextState，表示新的属性和变化之后的state，返回一个布尔值，true表示会触发重新渲染，false表示不会触发重新渲染，默认返回true,我们通常利用此生命周期来优化React程序性能
- render: 更新阶段也会触发此生命周期
- getSnapshotBeforeUpdate:getSnapshotBeforeUpdate(prevProps, prevState),这个方法在render之后，componentDidUpdate之前调用，有两个参数prevProps和prevState，表示之前的属性和之前的state，这个函数有一个返回值，会作为第三个参数传给componentDidUpdate，如果你不想要返回值，可以返回null，此生命周期必须与componentDidUpdate搭配使用
- componentDidUpdate:componentDidUpdate(prevProps, prevState, snapshot),该方法在getSnapshotBeforeUpdate方法之后被调用，有三个参数prevProps，prevState，snapshot，表示之前的props，之前的state，和snapshot。第三个参数是getSnapshotBeforeUpdate返回的,如果触发某些回调函数时需要用到 DOM 元素的状态，则将对比或计算的过程迁移至 getSnapshotBeforeUpdate，然后在 componentDidUpdate 中统一触发回调或更新状态。

卸载阶段:

- componentWillUnmount: 当我们的组件被卸载或者销毁了就会调用，我们可以在这个函数里去清除一些定时器，取消网络请求，清理无效的DOM元素等垃圾清理工作

**扩展：**

React 16之后有三个生命周期被废弃(但并未删除)

- componentWillMount
- componentWillReceiveProps
- componentWillUpdate

官方计划在17版本完全删除这三个函数，只保留UNSAVE_前缀的三个函数，目的是为了向下兼容，但是对于开发者而言应该尽量避免使用他们，而是使用新增的生命周期函数替代它们

---

#### 3.7 react router

**参考答案：**

1. 什么是React 路由？

   React 路由是一个构建在 React 之上的强大的路由库，它有助于向应用程序添加新的屏幕和流。这使 URL 与网页上显示的数据保持同步。它负责维护标准化的结构和行为，并用于开发单页 Web 应用。 React 路由有一个简单的API。

   ```react
   <switch>
       <route exact="" path="’/’" component="{Home}/"></route>
       <route path="’/posts/:id’" component="{Newpost}/"></route>
       <route path="’/posts’" component="{Post}/"></route>
   </switch>
   ```

   

2. 为什么需要 React 中的路由？

   Router 用于定义多个路由，当用户定义特定的 URL 时，如果此 URL 与 Router 内定义的任何 “路由” 的路径匹配，则用户将重定向到该特定路由。所以基本上我们需要在自己的应用中添加一个 Router 库，允许创建多个路由，每个路由都会向我们提供一个独特的视图

3. 为什么React Router v4中使用 switch 关键字 ？

   虽然<div>用于封装 Router 中的多个路由，当你想要仅显示要在多个定义的路线中呈现的单个路线时，可以使用 “switch” 关键字。使用时，<switch>标记会按顺序将已定义的 URL 与已定义的路由进行匹配。找到第一个匹配项后，它将渲染指定的路径。从而绕过其它路线。

4. React Router 的优点

   4.1 就像 React 基于组件一样，在 React Router v4 中，API 是 'All About Components'。可以将 Router 可视化为单个根组件（），其中我们将特定的子路由（）包起来。

   4.2 无需手动设置历史值：在 React Router v4 中，我们要做的就是将路由包装在 组件中。

   4.3 包是分开的：共有三个包，分别用于 Web、Native 和 Core。这使我们应用更加紧凑。基于类似的编码风格很容易进行切换。

---

#### 3.8 hooks的优缺点

**参考答案**：

**优点**

**更容易复用代码**

这点应该是react hooks最大的优点，它通过自定义hooks来复用状态，从而解决了类组件有些时候难以复用逻辑的问题。类组件的逻辑复用方式是高阶组件和renderProps。hooks是怎么解决这个复用的问题呢，具体如下：

1. 每调用useHook一次都会生成一份独立的状态，这个没有什么黑魔法，函数每次调用都会有一份独立的作用域。
2. 虽然状态(from useState)和副作用(useEffect)的存在依赖于组件，但它们可以在组件外部进行定义。这点是class component做不到的，你无法在外部声明state和副作用（如componentDidMount）。

**清爽的代码风格**

函数式编程风格，函数式组件、状态保存在运行环境、每个功能都包裹在函数中，整体风格更清爽，更优雅

**代码量更少**

1. 向props或状态取值更加方便，函数组件的取值都从父级作用域直接取，而类组件需要先访问实例引用this，再访问其属性state和props，多了一步
2. 更改状态也变得更加简单, this.setState({ count:xxx })变成 setCount(xxx)。

**更容易发现无用的状态和函数**

对比类组件，函数组件里面的unused状态和函数更容易被发现

**更容易拆分组件**

写函数组件的时候，你会更愿意去拆分组件，因为函数组件写起小组件比类组件要省事。

**缺点**

**部分代码从主动式变成响应式**

写函数组件时，你不得不改变一些写法习惯。你必须把深入理解useEffect和useCallback这些api的第二个参数的作用。其次，还有下面几点：

1. useEffect的依赖参数并不好写，你需要花时间去判断该把什么变量加入到依赖数组，幸运的是eslint-plugin-react-hooks很多场景可以帮你解决这点，但有时得靠你自己加以判断
2. useEffect很容易出错，它是响应式的，当某个依赖项变化时它才会被调用。有时，useEffect会发生比你预期更多的调用次数。你必须去理解它的调用时机、调用时的状态老旧问题，这不直观，也难以维护，这点在团队协作中很明显，你的队友有时会难以理解你useEffect的触发时机以及其作用。

**状态不同步**

不好用的useEffect，

这绝对可以成为摒弃react hooks的理由。函数的运行是独立的，每个函数都有一份独立的作用域。当我们处理复杂逻辑的时候，经常会碰到“引用不是最新”的问题。

---

#### 3.9 **为什么浏览器无法读取JSX？**

**参考答案**：

浏览器只能处理 JavaScript 对象，而不能读取常规 JavaScript 对象中的 JSX。所以为了使浏览器能够读取 JSX，首先，需要用像 Babel 这样的 JSX 转换器将 JSX 文件转换为 JavaScript 对象，然后再将其传给浏览器。

----

#### **3.10 你对 React 的 refs 有什么了解？**

**参考答案**：

Refs 是 React 中引用的简写。它是一个有助于存储对特定的 React 元素或组件的引用的属性，它将由组件渲染配置函数返回。用于对 render() 返回的特定元素或组件的引用。当需要进行 DOM 测量或向组件添加方法时，它们会派上用场。

```react
class ReferenceDemo extends React.Component{
     display() {
         const name = this.inputDemo.value;
         document.getElementById('disp').innerHTML = name;
     }
	render() {
    	return(        
          <div>
            Name: <input type="text" ref={input => this.inputDemo = input} />
            <button name="Click" onClick={this.display}>Click</button>            
            <h2>Hello <span id="disp"></span> !!!</h2>
          </div>
    );
   }
 }
```

---

#### **3.11 列出一些应该使用 Refs 的情况**

**参考答案**：

以下是应该使用 refs 的情况：

- 需要管理焦点、选择文本或媒体播放时
- 触发式动画
- 与第三方 DOM 库集成

---

#### 3.12 React 事件绑定原理

**参考答案**：

React并不是将click事件绑在该div的真实DOM上，而是在document处监听所有支持的事件，当事件发生并冒泡至document处时，React将事件内容封装并交由真正的处理函数运行。这样的方式不仅减少了内存消耗，还能在组件挂载销毁时统一订阅和移除事件。
另外冒泡到 document 上的事件也不是原生浏览器事件，而是 React 自己实现的合成事件（SyntheticEvent）。因此我们如果不想要事件冒泡的话，调用 event.stopPropagation 是无效的，而应该调用event.preventDefault。

#### ![img](https://uploadfiles.nowcoder.com/images/20220301/4107856_1646128907903/D62735FD976AA4856ADE26E5438E8BD4)

---

#### 3.15 redux-saga 和 mobx 的比较

**参考答案**：

1. 状态管理

- redux-sage 是 redux 的一个异步处理的中间件。
- mobx 是数据管理库，和 redux 一样。

1. 设计思想

- redux-sage 属于 flux 体系， 函数式编程思想。
- mobx 不属于 flux 体系，面向对象编程和响应式编程。

1. 主要特点

- redux-sage 因为是中间件，更关注异步处理的，通过 Generator 函数来将异步变为同步，使代码可读性高，结构清晰。action 也不是 action creator 而是 pure action，
- 在 Generator 函数中通过 call 或者 put 方法直接声明式调用，并自带一些方法，如 takeEvery，takeLast，race等，控制多个异步操作，让多个异步更简单。
- mobx 是更简单更方便更灵活的处理数据。 Store 是包含了 state 和 action。state 包装成一个可被观察的对象， action 可以直接修改 state，之后通过 Computed values 将依赖 state 的计算属性更新 ，之后触发 Reactions 响应依赖 state 的变更，输出相应的副作用 ，但不生成新的 state。

1. 数据可变性

- redux-sage 强调 state 不可变，不能直接操作 state，通过 action 和 reducer 在原来的 state 的基础上返回一个新的 state 达到改变 state 的目的。
- mobx 直接在方法中更改 state，同时所有使用的 state 都发生变化，不生成新的 state。

1. 写法难易度

- redux-sage 比 redux 在 action 和 reducer 上要简单一些。需要用 dispatch 触发 state 的改变，需要 mapStateToProps 订阅 state。
- mobx 在非严格模式下不用 action 和 reducer，在严格模式下需要在 action 中修改 state，并且自动触发相关依赖的更新。

1. 使用场景

- redux-sage 很好的解决了 redux 关于异步处理时的复杂度和代码冗余的问题，数据流向比较好追踪。但是 redux 的学习成本比 较高，代码比较冗余，不是特别需要状态管理，最好用别的方式代替。
- mobx 学习成本低，能快速上手，代码比较简洁。但是可能因为代码编写的原因和数据更新时相对黑盒，导致数据流向不利于追踪。

---

#### 3.16 简述一下 React 的源码实现

**参考答案**：

1. React 的实现主要分为Component和Element；
2. Component属于 React 实例，在创建实例的过程中会在实例中注册state和props属性，还会依次调用内置的生命周期函数；
3. Component中有一个render函数，render函数要求返回一个Element对象（或null）；
4. Element对象分为原生Element对象和组件式对象，原生Element+ 组件式对象会被一起解析成虚拟 DOM 树，并且内部使用的state和props也以 AST 的形式注入到这棵虚拟 DOM 树之中；
5. 在渲染虚拟 DOM 树的前后，会触发 React Component 的一些生命周期钩子函数，比如componentWillMount和componentDidMount，在虚拟 DOM 树解析完成后将被渲染成真实 DOM 树；
6. 调用setState时，会调用更新函数更新Component的state，并且触发内部的一个updater，调用render生成新的虚拟 DOM 树，利用 diff 算法与旧的虚拟 DOM 树进行比对，比对以后利用最优的方案进行 DOM 节点的更新，这也是 React 单向数据流的原理（与 Vue 的 MVVM 不同之处）。

---

#### 3.17 setState到底是异步还是同步?

**参考答案**：

有时表现出异步,有时表现出同步

1. setState只在合成事件和钩子函数中是“异步”的，在原生事件和setTimeout中都是同步的。
2. setState的“异步”并不是说内部由异步代码实现，**其实本身执行的过程和代码都是同步的**，只是合成事件和钩子函数的调用顺序在更新之前，导致在合成事件和钩子函数中没法立马拿到更新后的值，形成了所谓的“异步”，当然可以通过第二个参数setState(partialState, callback)中的callback拿到更新后的结果。
3. setState的批量更新优化也是建立在“异步”（合成事件、钩子函数）之上的，在原生事件和setTimeout 中不会批量更新，在“异步”中如果对同一个值进行多次setState，setState的批量更新策略会对其进行覆盖，取最后一次的执行，如果是同时setState多个不同的值，在更新时会对其进行合并批量更新。

----

#### 3.18 redux异步中间件之间的优劣?

**参考答案**：

**redux-thunk优点:**

- 体积小: redux-thunk的实现方式很简单,只有不到20行代码
- 使用简单: redux-thunk没有引入像redux-saga或者redux-observable额外的范式,上手简单

**redux-thunk缺陷:**

- 样板代码过多: 与redux本身一样,通常一个请求需要大量的代码,而且很多都是重复性质的
- 耦合严重: 异步操作与redux的action偶合在一起,不方便管理
- 功能孱弱: 有一些实际开发中常用的功能需要自己进行封装

**redux-saga优点:**

- 异步解耦: 异步操作被被转移到单独 saga.js 中，不再是掺杂在 action.js 或 component.js 中
- action摆脱thunk function: dispatch 的参数依然是一个纯粹的 action (FSA)，而不是充满 “黑魔法” thunk function
- 异常处理: 受益于 generator function 的 saga 实现，代码异常/请求失败 都可以直接通过 try/catch 语法直接捕获处理
- 功能强大: redux-saga提供了大量的Saga 辅助函数和Effect 创建器供开发者使用,开发者无须封装或者简单封装即可使用
- 灵活: redux-saga可以将多个Saga可以串行/并行组合起来,形成一个非常实用的异步flow
- 易测试，提供了各种case的测试方案，包括mock task，分支覆盖等等

**redux-saga缺陷:**

- 额外的学习成本: redux-saga不仅在使用难以理解的 generator function,而且有数十个API,学习成本远超redux-thunk,最重要的是你的额外学习成本是只服务于这个库的,与redux-observable不同,redux-observable虽然也有额外学习成本但是背后是rxjs和一整套思想
- 体积庞大: 体积略大,代码近2000行，min版25KB左右
- 功能过剩: 实际上并发控制等功能很难用到,但是我们依然需要引入这些代码
- ts支持不友好: yield无法返回TS类型

**redux-observable优点:**

- 功能最强: 由于背靠rxjs这个强大的响应式编程的库,借助rxjs的操作符,你可以几乎做任何你能想到的异步处理
- 背靠rxjs: 由于有rxjs的加持,如果你已经学习了rxjs,redux-observable的学习成本并不高,而且随着rxjs的升级redux-observable也会变得更强大

**redux-observable缺陷:**

- 学习成本奇高: 如果你不会rxjs,则需要额外学习两个复杂的库
- 社区一般: redux-observable的下载量只有redux-saga的1/5,社区也不够活跃,在复杂异步流中间件这个层面redux-saga仍处于领导地位

----

#### 3.19 state 和 props 区别是啥？

**参考答案**：

props和state是普通的 JS 对象。虽然它们都包含影响渲染输出的信息，但是它们在组件方面的功能是不同的。即

- state 是组件自己管理数据，控制自己的状态，可变；
- props 是外部传入的数据参数，不可变；
- 没有state的叫做无状态组件，有state的叫做有状态组件；
- **多用 props，少用 state**，也就是多写无状态组件。

----

#### 3.20 当调用setState时，React render 是如何工作的？

**参考答案**：

虚拟 DOM 渲染:当render方法被调用时，它返回一个新的组件的虚拟 DOM 结构。当调用setState()时，render会被再次调用，因为默认情况下shouldComponentUpdate总是返回true，所以默认情况下 React 是没有优化的。
原生 DOM 渲染:React 只会在虚拟DOM中修改真实DOM节点，而且修改的次数非常少——这是很棒的React特性，它优化了真实DOM的变化，使React变得更快。

----

