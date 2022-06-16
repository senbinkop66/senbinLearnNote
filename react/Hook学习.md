# Hook 简介

*Hook* 是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。

```jsx
import React, { useState } from 'react';

export default function Counter() {
	// 声明一个新的叫做 “count” 的 state 变量
	const [count, setCount] = useState(0);
	return (
		<div>
			<p>You Clicked {count} times</p>
			<button onClick={() => setCount(count + 1)}>Increment</button>
		</div>
	)
}
```

> 注意
>
> React 16.8.0 是第一个支持 Hook 的版本。升级时，请注意更新所有的 package，包括 React DOM。 React Native 从 [0.59 版本](https://reactnative.dev/blog/2019/03/12/releasing-react-native-059)开始支持 Hook。

在我们继续之前，请记住 Hook 是：

- **完全可选的。** 你无需重写任何已有代码就可以在一些组件中尝试 Hook。但是如果你不想，你不必现在就去学习或使用 Hook。
- **100% 向后兼容的。** Hook 不包含任何破坏性改动。
- **现在可用。** Hook 已发布于 v16.8.0。

**没有计划从 React 中移除 class。** 你可以在本页[底部的章节](https://zh-hans.reactjs.org/docs/hooks-intro.html#gradual-adoption-strategy)读到更多关于 Hook 的渐进策略。

**Hook 不会影响你对 React 概念的理解。** 恰恰相反，Hook 为已知的 React 概念提供了更直接的 API：props， state，context，refs 以及生命周期。稍后我们将看到，Hook 还提供了一种更强大的方式来组合他们。

## 动机

Hook 解决了我们五年来编写和维护成千上万的组件时遇到的各种各样看起来不相关的问题。无论你正在学习 React，或每天使用，或者更愿尝试另一个和 React 有相似组件模型的框架，你都可能对这些问题似曾相识。

### 在组件之间复用状态逻辑很难

React 没有提供将可复用性行为“附加”到组件的途径（例如，把组件连接到 store）。如果你使用过 React 一段时间，你也许会熟悉一些解决此类问题的方案，比如 [render props](https://zh-hans.reactjs.org/docs/render-props.html) 和 [高阶组件](https://zh-hans.reactjs.org/docs/higher-order-components.html)。但是这类方案需要重新组织你的组件结构，这可能会很麻烦，使你的代码难以理解。如果你在 React DevTools 中观察过 React 应用，你会发现由 providers，consumers，高阶组件，render props 等其他抽象层组成的组件会形成“嵌套地狱”。尽管我们可以[在 DevTools 过滤掉它们](https://github.com/facebook/react-devtools/pull/503)，但这说明了一个更深层次的问题：React 需要为共享状态逻辑提供更好的原生途径。

你可以使用 Hook 从组件中提取状态逻辑，使得这些逻辑可以单独测试并复用。**Hook 使你在无需修改组件结构的情况下复用状态逻辑。** 这使得在组件间或社区内共享 Hook 变得更便捷。

具体将在[自定义 Hook](https://zh-hans.reactjs.org/docs/hooks-custom.html) 中对此展开更多讨论。

### 复杂组件变得难以理解

我们经常维护一些组件，组件起初很简单，但是逐渐会被状态逻辑和副作用充斥。每个生命周期常常包含一些不相关的逻辑。例如，组件常常在 `componentDidMount` 和 `componentDidUpdate` 中获取数据。但是，同一个 `componentDidMount` 中可能也包含很多其它的逻辑，如设置事件监听，而之后需在 `componentWillUnmount` 中清除。相互关联且需要对照修改的代码被进行了拆分，而完全不相关的代码却在同一个方法中组合在一起。如此很容易产生 bug，并且导致逻辑不一致。

在多数情况下，不可能将组件拆分为更小的粒度，因为状态逻辑无处不在。这也给测试带来了一定挑战。同时，这也是很多人将 React 与状态管理库结合使用的原因之一。但是，这往往会引入了很多抽象概念，需要你在不同的文件之间来回切换，使得复用变得更加困难。

为了解决这个问题，**Hook 将组件中相互关联的部分拆分成更小的函数（比如设置订阅或请求数据）**，而并非强制按照生命周期划分。你还可以使用 reducer 来管理组件的内部状态，使其更加可预测。

我们将在[使用 Effect Hook](https://zh-hans.reactjs.org/docs/hooks-effect.html#tip-use-multiple-effects-to-separate-concerns) 中对此展开更多讨论。

### 难以理解的 class

除了代码复用和代码管理会遇到困难外，我们还发现 class 是学习 React 的一大屏障。你必须去理解 JavaScript 中 `this` 的工作方式，这与其他语言存在巨大差异。还不能忘记绑定事件处理器。没有稳定的[语法提案](https://babeljs.io/docs/en/babel-plugin-transform-class-properties/)，这些代码非常冗余。大家可以很好地理解 props，state 和自顶向下的数据流，但对 class 却一筹莫展。即便在有经验的 React 开发者之间，对于函数组件与 class 组件的差异也存在分歧，甚至还要区分两种组件的使用场景。

另外，React 已经发布五年了，我们希望它能在下一个五年也与时俱进。就像 [Svelte](https://svelte.dev/)，[Angular](https://angular.io/)，[Glimmer](https://glimmerjs.com/)等其它的库展示的那样，组件[预编译](https://en.wikipedia.org/wiki/Ahead-of-time_compilation)会带来巨大的潜力。尤其是在它不局限于模板的时候。最近，我们一直在使用 [Prepack](https://prepack.io/) 来试验 [component folding](https://github.com/facebook/react/issues/7323)，也取得了初步成效。但是我们发现使用 class 组件会无意中鼓励开发者使用一些让优化措施无效的方案。class 也给目前的工具带来了一些问题。例如，class 不能很好的压缩，并且会使热重载出现不稳定的情况。因此，我们想提供一个使代码更易于优化的 API。

为了解决这些问题，**Hook 使你在非 class 的情况下可以使用更多的 React 特性。** 从概念上讲，React 组件一直更像是函数。而 Hook 则拥抱了函数，同时也没有牺牲 React 的精神原则。Hook 提供了问题的解决方案，无需学习复杂的函数式或响应式编程技术。

## 渐进策略

> **总结：没有计划从 React 中移除 class。**

大部分 React 开发者会专注于开发产品，而没时间关注每一个新 API 的发布。Hook 还很新，也许等到有更多示例和教程后，再考虑学习或使用它们也不迟。

我们也明白向 React 添加新的原生概念的门槛非常高。我们为好奇的读者准备了[详细的征求意见文档](https://github.com/reactjs/rfcs/pull/68)，在文档中用更多细节深入讨论了我们推进这件事的动机，也在具体设计决策和相关先进技术上提供了额外的视角。

**最重要的是，Hook 和现有代码可以同时工作，你可以渐进式地使用他们。** 不用急着迁移到 Hook。我们建议避免任何“大规模重写”，尤其是对于现有的、复杂的 class 组件。开始“用 Hook 的方式思考”前，需要做一些思维上的转变。按照我们的经验，最好先在新的不复杂的组件中尝试使用 Hook，并确保团队中的每一位成员都能适应。在你尝试使用 Hook 后，欢迎给我们提供[反馈](https://github.com/facebook/react/issues/new)，无论好坏。

我们准备让 Hook 覆盖所有 class 组件的使用场景，但是**我们将继续为 class 组件提供支持。**在 Facebook，我们有成千上万的组件用 class 书写，我们完全没有重写它们的计划。相反，我们开始在新的代码中同时使用 Hook 和 class。

----

# Hook 概览

## State Hook

这个例子用来显示一个计数器。当你点击按钮，计数器的值就会增加：

```jsx
import React, { useState } from 'react';

export default function Counter() {
	// 声明一个新的叫做 “count” 的 state 变量
	const [count, setCount] = useState(0);
	return (
		<div>
			<p>You Clicked {count} times</p>
			<button onClick={() => setCount(count + 1)}>Increment</button>
		</div>
	)
}
```

在这里，`useState` 就是一个 *Hook* （等下我们会讲到这是什么意思）。通过在函数组件里调用它来给组件添加一些内部 state。React 会在重复渲染时保留这个 state。

`useState` 会返回一对值：**当前状态**和一**个让你更新它的函数**，你可以在事件处理函数中或其他一些地方调用这个函数。它类似 class 组件的 `this.setState`，**但是它不会把新的 state 和旧的 state 进行合并**。（我们会在[使用 State Hook](https://zh-hans.reactjs.org/docs/hooks-state.html) 里展示一个对比 `useState` 和 `this.state` 的例子）。

`useState` 唯一的参数就是初始 state。在上面的例子中，我们的计数器是从零开始的，所以初始 state 就是 `0`。值得注意的是，不同于 `this.state`，这里的 state 不一定要是一个对象 —— 如果你有需要，它也可以是。**这个初始 state 参数只有在第一次渲染时会被用到**。

#### 声明多个 state 变量

你可以在一个组件中多次使用 State Hook:

```js
import React, { useState } from 'react';

export default function Counter() {
	// 声明一个新的叫做 “count” 的 state 变量
	const [count, setCount] = useState(0);
	// 声明多个 state 变量！
	const [age, setAge] = useState(18);
	const [name, setName] = useState("react");
	return (
		<div>
			<p>You Clicked {count} times</p>
			<button onClick={() => setCount(count + 1)}>Increment</button>
			<br/>

			<p><span>{name}</span>&nbsp;<span>{age}</span></p><br/>
			name: <input type="text" onBlur={(e) => setName(e.target.value)} /><br/>
			age: <input type="number" onChange={(e) => setAge(e.target.value)} min="18" max="60" />
		</div>
	)
}
```

[数组解构](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Array_destructuring)的语法让我们在调用 `useState` 时可以给 state 变量取不同的名字。当然，这些名字并不是 `useState` API 的一部分。React 假设当你多次调用 `useState` 的时候，你能保证每次渲染时它们的调用顺序是不变的。后面我们会再次解释它是如何工作的以及在什么场景下使用。

#### 那么，什么是 Hook?

**Hook 是一些可以让你在函数组件里“钩入” React state 及生命周期等特性的函数**。Hook 不能在 class 组件中使用 —— 这使得你不使用 class 也能使用 React。（我们[不推荐](https://zh-hans.reactjs.org/docs/hooks-intro.html#gradual-adoption-strategy)把你已有的组件全部重写，但是你可以在新组件里开始使用 Hook。）

React 内置了一些像 `useState` 这样的 Hook。你也可以创建你自己的 Hook 来复用不同组件之间的状态逻辑。我们会先介绍这些内置的 Hook。

## Effect Hook

你之前可能已经在 React 组件中执行过数据获取、订阅或者手动修改过 DOM。我们统一把这些操作称为“**副作用**”，或者简称为“**作用**”。

`useEffect` 就是一个 Effect Hook，给函数组件增加了操作副作用的能力。它跟 class 组件中的 `componentDidMount`、`componentDidUpdate` 和 `componentWillUnmount` 具有相同的用途，只不过被合并成了一个 API。（我们会在[使用 Effect Hook](https://zh-hans.reactjs.org/docs/hooks-effect.html) 里展示对比 `useEffect` 和这些方法的例子。）

例如，下面这个组件在 React 更新 DOM 后会设置一个页面标题：

```jsx
import React, { useState, useEffect } from 'react';

export default function Counter() {
	// 声明一个新的叫做 “count” 的 state 变量
	const [count, setCount] = useState(0);

	// 相当于 componentDidMount 和 componentDidUpdate:
	useEffect(() => {
		// 使用浏览器的 API 更新页面标题
		document.title = `You clicked ${count} times`;
	});
	return (
		<div>
			<p>You clicked {count} times</p>
			<button onClick={() => setCount(count + 1)}>Increment</button>
		</div>
	)
}
```

当你调用 `useEffect` 时，就是在告诉 React 在完成对 DOM 的更改后运行你的“副作用”函数。**由于副作用函数是在组件内声明的，所以它们可以访问到组件的 props 和 state。**默认情况下，React 会在每次渲染后调用副作用函数 —— **包括**第一次渲染的时候。（我们会在[使用 Effect Hook](https://zh-hans.reactjs.org/docs/hooks-effect.html) 中跟 class 组件的生命周期方法做更详细的对比。）

副作用函数还可以通过返回一个函数来指定如何“清除”副作用。例如，在下面的组件中使用副作用函数来订阅好友的在线状态，并通过取消订阅来进行清除操作：

```js
import React, { useState, useEffect } from 'react';

function FriendStatus(props) {
  const [isOnline, setIsOnline] = useState(null);

  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }

  useEffect(() => {
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
}
```

在这个示例中，React 会在组件销毁时取消对 `ChatAPI` 的订阅，然后在后续渲染时重新执行副作用函数。（如果传给 `ChatAPI` 的 `props.friend.id` 没有变化，你也可以[告诉 React 跳过重新订阅](https://zh-hans.reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects)。）

跟 `useState` 一样，你可以在组件中多次使用 `useEffect` ：

```js
function FriendStatusWithCounter(props) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  const [isOnline, setIsOnline] = useState(null);
  useEffect(() => {
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }
  // ...
```

通过使用 Hook，你可以把组件内相关的副作用组织在一起（例如创建订阅及取消订阅），而不要把它们拆分到不同的生命周期函数里。

## Hook 使用规则

Hook 就是 JavaScript 函数，但是使用它们会有两个额外的规则：

- 只能在**函数最外层**调用 Hook。不要在循环、条件判断或者子函数中调用。
- 只能在 **React 的函数组件**中调用 Hook。不要在其他 JavaScript 函数中调用。（还有一个地方可以调用 Hook —— 就是自定义的 Hook 中，我们稍后会学习到。）

同时，我们提供了 [linter 插件](https://www.npmjs.com/package/eslint-plugin-react-hooks)来自动执行这些规则。这些规则乍看起来会有一些限制和令人困惑，但是要让 Hook 正常工作，它们至关重要。

## 自定义 Hook

有时候我们会想要在组件之间重用一些状态逻辑。目前为止，有两种主流方案来解决这个问题：[高阶组件](https://zh-hans.reactjs.org/docs/higher-order-components.html)和 [render props](https://zh-hans.reactjs.org/docs/render-props.html)。自定义 Hook 可以让你在不增加组件的情况下达到同样的目的。

前面，我们介绍了一个叫 `FriendStatus` 的组件，它通过调用 `useState` 和 `useEffect` 的 Hook 来订阅一个好友的在线状态。假设我们想在另一个组件里重用这个订阅逻辑。

首先，我们把这个逻辑抽取到一个叫做 `useFriendStatus` 的自定义 Hook 里：

```jsx
import React, { useState, useEffect } from 'react';

function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }

  useEffect(() => {
    ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
    };
  });

  return isOnline;
}
```

它将 `friendID` 作为参数，并返回该好友是否在线：

现在我们可以在两个组件中使用它：

```js
function FriendStatus(props) {
  const isOnline = useFriendStatus(props.friend.id);

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
}
```

```jsx
function FriendListItem(props) {
  const isOnline = useFriendStatus(props.friend.id);

  return (
    <li style={{ color: isOnline ? 'green' : 'black' }}>
      {props.friend.name}
    </li>
  );
}
```

**每个组件间的 state 是完全独立的**。Hook 是一种复用*状态逻辑*的方式，它不复用 state 本身。**事实上 Hook 的每次*调用*都有一个完全独立的 state** —— 因此你可以在单个组件中多次调用同一个自定义 Hook。

自定义 Hook 更像是一种约定而不是功能。**如果函数的名字以 “`use`” 开头并调用其他 Hook，我们就说这是一个自定义 Hook。** `useSomething` 的命名约定可以让我们的 linter 插件在使用 Hook 的代码中找到 bug。

你可以创建涵盖各种场景的自定义 Hook，如表单处理、动画、订阅声明、计时器，甚至可能还有更多我们没想到的场景。我们很期待看到 React 社区会出现什么样的自定义 Hook。

## 其他 Hook

除此之外，还有一些使用频率较低的但是很有用的 Hook。比如，[`useContext`](https://zh-hans.reactjs.org/docs/hooks-reference.html#usecontext) 让你不使用组件嵌套就可以订阅 React 的 Context。

```js
function Example() {
  const locale = useContext(LocaleContext);
  const theme = useContext(ThemeContext);
  // ...
}
```

另外 [`useReducer`](https://zh-hans.reactjs.org/docs/hooks-reference.html#usereducer) 可以让你通过 reducer 来管理组件本地的复杂 state。

```js
function Todos() {
  const [todos, dispatch] = useReducer(todosReducer);
  // ...
```

----

# 使用 State Hook

使用下面的例子介绍了 Hook

```jsx
import React, { useState } from 'react';

function Example() {
  // 声明一个叫 "count" 的 state 变量
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```



## 等价的 class 示例

如果你之前在 React 中使用过 class，这段代码看起来应该很熟悉：

```jsx
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}
```

state 初始值为 `{ count: 0 }` ，当用户点击按钮后，我们通过调用 `this.setState()` 来增加 `state.count`。整个章节中都将使用该 class 的代码片段做示例。

## Hook 和函数组件

 React 的函数组件是这样的：

```jsx
const Example = (props) => {
  // 你可以在这使用 Hook
  return <div />;
}
```

或是这样：

```jsx
function Example(props) {
  // 你可以在这使用 Hook
  return <div />;
}
```

你之前可能把它们叫做“无状态组件”。但现在我们为它们引入了使用 React state 的能力，所以我们更喜欢叫它”函数组件”。

Hook 在 class 内部是**不**起作用的。但你可以使用它们来取代 class 。

## Hook 是什么？

在新示例中，首先引入 React 中 `useState` 的 Hook

```js
import React, { useState } from 'react';

function Example() {
  // ...
}
```

**Hook 是什么？** Hook 是一个特殊的函数，它可以让你“钩入” React 的特性。例如，`useState` 是允许你在 React 函数组件中添加 state 的 Hook。稍后我们将学习其他 Hook。

**什么时候我会用 Hook？** 如果你在编写函数组件并意识到需要向其添加一些 state，以前的做法是必须将其转化为 class。现在你可以在现有的函数组件中使用 Hook。

> 注意：在组件中有些特殊的规则，规定什么地方能使用 Hook，什么地方不能使用。我们将在 [Hook 规则](https://zh-hans.reactjs.org/docs/hooks-rules.html)中学习它们。

## 声明 State 变量

在 class 中，我们通过在构造函数中设置 `this.state` 为 `{ count: 0 }` 来初始化 `count` state 为 `0`：

```jsx
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
```

在函数组件中，我们没有 `this`，所以我们不能分配或读取 `this.state`。我们直接在组件中调用 `useState` Hook：

```js
import React, { useState } from 'react';

function Example() {
  // 声明一个叫 “count” 的 state 变量
  const [count, setCount] = useState(0);
```

**`调用 useState` 方法的时候做了什么?** 它定义一个 “state 变量”。我们的变量叫 `count`， 但是我们可以叫他任何名字，比如 `banana`。这是一种在函数调用时保存变量的方式 —— **`useState` 是一种新方法，它与 class 里面的 `this.state` 提供的功能完全相同**。一般来说，在函数退出后变量就会”消失”，而 state 中的变量会被 React 保留。

**`useState` 需要哪些参数？** `useState()` 方法里面唯一的参数就是初始 state。**不同于 class 的是，我们可以按照需要使用数字或字符串对其进行赋值，而不一定是对象**。在示例中，只需使用数字来记录用户点击次数，所以我们传了 `0` 作为变量的初始 state。（如果我们想要在 state 中存储两个不同的变量，只需调用 `useState()` 两次即可。）

**`useState` 方法的返回值是什么？** 返回值为：**当前 state 以及更新 state 的函数**。这就是我们写 `const [count, setCount] = useState()` 的原因。**这与 class 里面 `this.state.count` 和 `this.setState` 类似**，唯一区别就是你需要成对的获取它们。如果你不熟悉我们使用的语法，我们会在[本章节的底部](https://zh-hans.reactjs.org/docs/hooks-state.html#tip-what-do-square-brackets-mean)介绍它。

既然我们知道了 `useState` 的作用，我们的示例应该更容易理解了：

```js
import React, { useState } from 'react';

function Example() {
  // 声明一个叫 "count" 的 state 变量
  const [count, setCount] = useState(0);
```

我们声明了一个叫 `count` 的 state 变量，然后把它设为 `0`。React 会在重复渲染时记住它当前的值，并且提供最新的值给我们的函数。我们可以通过调用 `setCount` 来更新当前的 `count`。

>你可能想知道：为什么叫 `useState` 而不叫 `createState`?
>
>“Create” 可能不是很准确，因为 state 只在组件首次渲染的时候被创建。在下一次重新渲染时，`useState` 返回给我们当前的 state。否则它就不是 “state”了！这也是 Hook 的名字*总是*以 `use` 开头的一个原因。我们将在后面的 [Hook 规则](https://zh-hans.reactjs.org/docs/hooks-rules.html)中了解原因。

## 读取 State

当我们想在 class 中显示当前的 count，我们读取 `this.state.count`：

```jsx
 <p>You clicked {this.state.count} times</p>
```

在函数中，我们可以直接用 `count`:

```jsx
  <p>You clicked {count} times</p>
```

## 更新 State

在 class 中，我们需要调用 `this.setState()` 来更新 `count` 值：

```jsx
  <button onClick={() => this.setState({ count: this.state.count + 1 })}>
    Click me
  </button>
```

在函数中，我们已经有了 `setCount` 和 `count` 变量，所以我们不需要 `this`:

```jsx
 <button onClick={() => setCount(count + 1)}>
    Click me
  </button>
```

## 总结

现在让我们来**仔细回顾一下学到的知识**，看下我们是否真正理解了。

```jsx
 1:  import React, { useState } from 'react';
 2:
 3:  function Example() {
 4:    const [count, setCount] = useState(0);
 5:
 6:    return (
 7:      <div>
 8:        <p>You clicked {count} times</p>
 9:        <button onClick={() => setCount(count + 1)}>
10:         Click me
11:        </button>
12:      </div>
13:    );
14:  }
```

- **第一行:** 引入 React 中的 `useState` Hook。它让我们在函数组件中存储内部 state。
- **第四行:** 在 `Example` 组件内部，我们通过调用 `useState` Hook 声明了一个新的 state 变量。它返回一对值给到我们命名的变量上。我们把变量命名为 `count`，因为它存储的是点击次数。我们通过传 `0` 作为 `useState` 唯一的参数来将其初始化为 `0`。第二个返回的值本身就是一个函数。它让我们可以更新 `count` 的值，所以我们叫它 `setCount`。
- **第九行:** 当用户点击按钮后，我们传递一个新的值给 `setCount`。React 会重新渲染 `Example` 组件，并把最新的 `count` 传给它。

乍一看这似乎有点太多了。不要急于求成！如果你有不理解的地方，请再次查看以上代码并从头到尾阅读。我们保证一旦你试着”忘记” class 里面 state 是如何工作的，并用新的眼光看这段代码，就容易理解了。

### 提示：方括号有什么用？

你可能注意到我们用方括号定义了一个 state 变量

```jsx
  const [count, setCount] = useState(0);
```

等号左边名字并不是 React API 的部分，你可以自己取名字：

```js
  const [fruit, setFruit] = useState('banana');
```

这种 JavaScript 语法叫[数组解构](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Array_destructuring)。它意味着我们同时创建了 `fruit` 和 `setFruit` 两个变量，`fruit` 的值为 `useState` 返回的第一个值，`setFruit` 是返回的第二个值。它等价于下面的代码：

```js
  var fruitStateVariable = useState('banana'); // 返回一个有两个元素的数组
  var fruit = fruitStateVariable[0]; // 数组里的第一个值
  var setFruit = fruitStateVariable[1]; // 数组里的第二个值
```

当我们使用 `useState` 定义 state 变量时候，它返回一个有两个值的数组。第一个值是当前的 state，第二个值是更新 state 的函数。使用 `[0]` 和 `[1]` 来访问有点令人困惑，因为它们有特定的含义。这就是我们使用数组解构的原因。

> 注意
>
> 你可能会好奇 React 怎么知道 `useState` 对应的是哪个组件，因为我们并没有传递 `this` 给 React。我们将在 FAQ 部分回答[这个问题](https://zh-hans.reactjs.org/docs/hooks-faq.html#how-does-react-associate-hook-calls-with-components)以及许多其他问题。

### 提示：使用多个 state 变量

将 state 变量声明为一对 `[something, setSomething]` 也很方便，因为如果我们想使用多个 state 变量，它允许我们给不同的 state 变量取不同的名称：

```js
function ExampleWithManyStates() {
  // 声明多个 state 变量
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState('banana');
  const [todos, setTodos] = useState([{ text: '学习 Hook' }]);
```

在以上组件中，我们有局部变量 `age`，`fruit` 和 `todos`，并且我们可以单独更新它们：

```js
  function handleOrangeClick() {
    // 和 this.setState({ fruit: 'orange' }) 类似
    setFruit('orange');
  }
```

你**不必**使用多个 state 变量。State 变量可以很好地存储对象和数组，因此，你仍然可以将相关数据分为一组。然而，不像 class 中的 `this.setState`，**更新 state 变量总是*替换***它而不是合并它。

从上述内容中，我们了解了 React 提供的 `useState` Hook，有时候我们也叫它 “State Hook”。它让我们在 React 函数组件上添加内部 state —— 这是我们首次尝试。

我们还学到了一些知识比如什么是 Hook。Hook 是能让你在函数组件中“钩入” React 特性的函数。它们名字通常都以 `use` 开始，还有更多 Hook 等着我们去探索。

---

# 使用 Effect Hook

*Effect Hook* 可以让你在函数组件中执行副作用操作

```jsx
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

我们为计数器增加了一个小功能：将 document 的 title 设置为包含了点击次数的消息。

**数据获取，设置订阅以及手动更改 React 组件中的 DOM** 都属于**副作用**。不管你知不知道这些操作，或是“副作用”这个名字，应该都在组件中使用过它们。

>提示
>
>如果你熟悉 React class 的生命周期函数，你可以把 `useEffect` Hook 看做 `componentDidMount`，`componentDidUpdate` 和 `componentWillUnmount` 这三个函数的组合。

在 React 组件中有两种常见副作用操作：**需要清除的**和**不需要清除的**。我们来更仔细地看一下他们之间的区别。

## 无需清除的 effect

有时候，我们只想**在 React 更新 DOM 之后运行一些额外的代码。**比如发送网络请求，手动变更 DOM，记录日志，这些都是常见的无需清除的操作。因为我们在执行完这些操作之后，就可以忽略他们了。让我们对比一下使用 class 和 Hook 都是怎么实现这些副作用的。

### 使用 class 的示例

在 React 的 **class 组件中，`render` 函数是不应该有任何副作用的**。一般来说，在这里执行操作太早了，**我们基本上都希望在 React 更新 DOM 之后才执行我们的操作。**

这就是为什么在 React class 中，**我们把副作用操作放到 `componentDidMount` 和 `componentDidUpdate` 函数中**。回到示例中，这是一个 React 计数器的 class 组件。它在 React 对 DOM 进行操作之后，立即更新了 document 的 title 属性

```jsx
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    document.title = `You clicked ${this.state.count} times`;
  }
  componentDidUpdate() {
    document.title = `You clicked ${this.state.count} times`;
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}
```

注意，**在这个 class 中，我们需要在两个生命周期函数中编写重复的代码。**

这是因为很多情况下，我们希望在组件加载和更新时执行同样的操作。**从概念上说，我们希望它在每次渲染之后执行 —— 但 React 的 class 组件没有提供这样的方法。**即使我们提取出一个方法，我们还是要在两个地方调用它。

现在让我们来看看如何使用 `useEffect` 执行相同的操作。

### 使用 Hook 的示例

我们在本章节开始时已经看到了这个示例，但让我们再仔细观察它：

```jsx
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

**`useEffect` 做了什么？** 通过使用这个 Hook，你可以告诉 React 组件需要在渲染后执行某些操作。React 会保存你传递的函数（我们将它称之为 “**effect**”），并且在执行 DOM 更新之后调用它。在这个 effect 中，我们设置了 document 的 title 属性，不过**我们也可以执行数据获取或调用其他命令式的 API。**

**为什么在组件内部调用 `useEffect`？** 将 `useEffect` 放在组件内部让我们**可以在 effect 中直接访问 `count` state 变量**（或其他 props）。**我们不需要特殊的 API 来读取它** —— 它已经保存在函数作用域中。**Hook 使用了 JavaScript 的闭包机制**，而不用在 JavaScript 已经提供了解决方案的情况下，还引入特定的 React API。

**`useEffect` 会在每次渲染后都执行吗？** 是的，默认情况下，它在第一次渲染之后*和*每次更新之后都会执行。（我们稍后会谈到[如何控制它](https://zh-hans.reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects)。）你可能会更容易接受 effect 发生在“渲染之后”这种概念，不用再去考虑“挂载”还是“更新”。**React 保证了每次运行 effect 的同时，DOM 都已经更新完毕。**

### 详细说明

现在我们已经对 effect 有了大致了解，下面这些代码应该不难看懂了：

```jsx
function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
}
```

我们声明了 `count` state 变量，并告诉 React 我们需要使用 effect。紧接着传递函数给 `useEffect` Hook。此函数就是我们的 effect。然后使用 `document.title` 浏览器 API 设置 document 的 title。我们可以在 effect 中获取到最新的 `count` 值，因为他在函数的作用域内。当 React 渲染组件时，会保存已使用的 effect，并在更新完 DOM 后执行它。这个过程在每次渲染时都会发生，包括首次渲染。

经验丰富的 JavaScript 开发人员可能会注意到，传递给 `useEffect` 的函数在每次渲染中都会有所不同，这是刻意为之的。事实上这正是我们可以在 effect 中获取最新的 `count` 的值，而不用担心其过期的原因。每次我们重新渲染，都会生成*新的* effect，替换掉之前的。某种意义上讲，effect 更像是渲染结果的一部分 —— **每个 effect “属于”一次特定的渲染**。我们将在[本章节后续部分](https://zh-hans.reactjs.org/docs/hooks-effect.html#explanation-why-effects-run-on-each-update)更清楚地了解这样做的意义。

> 提示
>
> 与 `componentDidMount` 或 `componentDidUpdate` 不同，**使用 `useEffect` 调度的 effect 不会阻塞浏览器更新屏幕**，这让你的应用看起来响应更快。大多数情况下，effect 不需要同步地执行。在个别情况下（例如测量布局），有单独的 [`useLayoutEffect`](https://zh-hans.reactjs.org/docs/hooks-reference.html#uselayouteffect) Hook 供你使用，其 API 与 `useEffect` 相同。

## 需要清除的 effect

之前，我们研究了如何使用不需要清除的副作用，还有一些副作用是需要清除的。例如**订阅外部数据源**。这种情况下，**清除工作是非常重要的，可以防止引起内存泄露**！现在让我们来比较一下如何用 Class 和 Hook 来实现。

### 使用 Class 的示例

在 React class 中，你通常会在 `componentDidMount` 中设置订阅，并在 `componentWillUnmount` 中清除它。例如，假设我们有一个 `ChatAPI` 模块，它允许我们订阅好友的在线状态。以下是我们如何使用 class 订阅和显示该状态：

```jsx
class FriendStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOnline: null };
    this.handleStatusChange = this.handleStatusChange.bind(this);
  }

  componentDidMount() {
    ChatAPI.subscribeToFriendStatus(
      this.props.friend.id,
      this.handleStatusChange
    );
  }
  componentWillUnmount() {
    ChatAPI.unsubscribeFromFriendStatus(
      this.props.friend.id,
      this.handleStatusChange
    );
  }
  handleStatusChange(status) {
    this.setState({
      isOnline: status.isOnline
    });
  }

  render() {
    if (this.state.isOnline === null) {
      return 'Loading...';
    }
    return this.state.isOnline ? 'Online' : 'Offline';
  }
}
```

你会注意到 `componentDidMount` 和 `componentWillUnmount` 之间相互对应。使用生命周期函数迫使我们拆分这些逻辑代码，即使这两部分代码都作用于相同的副作用。

### 使用 Hook 的示例

如何使用 Hook 编写这个组件。

你可能认为需要单独的 effect 来执行清除操作。但由于添加和删除订阅的代码的紧密性，所以 `useEffect` 的设计是在同一个地方执行。如果你的 effect 返回一个函数，React 将会在执行清除操作时调用它：

```jsx
import React, { useState, useEffect } from 'react';

function FriendStatus(props) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    // Specify how to clean up after this effect:
    return function cleanup() {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
}
```

**为什么要在 effect 中返回一个函数？** 这是 effect 可选的清除机制。**每个 effect 都可以返回一个清除函数**。如此可以将添加和移除订阅的逻辑放在一起。它们都属于 effect 的一部分。

**React 何时清除 effect？** React **会在组件卸载的时候执行清除操作**。正如之前学到的，effect 在每次渲染的时候都会执行。这就是为什么 **React *会*在执行当前 effect 之前对上一个 effect 进行清除**。我们稍后将讨论[为什么这将助于避免 bug](https://zh-hans.reactjs.org/docs/hooks-effect.html#explanation-why-effects-run-on-each-update)以及[如何在遇到性能问题时跳过此行为](https://zh-hans.reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects)。

> 注意
>
> **并不是必须为 effect 中返回的函数命名**。这里我们将其命名为 `cleanup` 是为了表明此函数的目的，但其实也可以返回一个箭头函数或者给起一个别的名字。

## 小结

了解了 `useEffect` 可以在组件渲染后实现各种不同的副作用。有些副作用可能需要清除，所以需要返回一个函数：

```js
  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });
```

其他的 effect 可能不必清除，所以不需要返回。

```jsx
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
```

effect Hook 使用同一个 API 来满足这两种情况。

## 使用 Effect 的提示

### 提示: 使用多个 Effect 实现关注点分离

使用 Hook 其中一个[目的](https://zh-hans.reactjs.org/docs/hooks-intro.html#complex-components-become-hard-to-understand)就是要解决 class 中生命周期函数经常包含不相关的逻辑，但又把相关逻辑分离到了几个不同方法中的问题。下述代码是将前述示例中的计数器和好友在线状态指示器逻辑组合在一起的组件：

```jsx
class FriendStatusWithCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, isOnline: null };
    this.handleStatusChange = this.handleStatusChange.bind(this);
  }

  componentDidMount() {
    document.title = `You clicked ${this.state.count} times`;
    ChatAPI.subscribeToFriendStatus(
      this.props.friend.id,
      this.handleStatusChange
    );
  }

  componentDidUpdate() {
    document.title = `You clicked ${this.state.count} times`;
  }

  componentWillUnmount() {
    ChatAPI.unsubscribeFromFriendStatus(
      this.props.friend.id,
      this.handleStatusChange
    );
  }

  handleStatusChange(status) {
    this.setState({
      isOnline: status.isOnline
    });
  }
  // ...
```

可以发现设置 `document.title` 的逻辑是如何被分割到 `componentDidMount` 和 `componentDidUpdate` 中的，订阅逻辑又是如何被分割到 `componentDidMount` 和 `componentWillUnmount` 中的。而且 `componentDidMount` 中同时包含了两个不同功能的代码。

那么 Hook 如何解决这个问题呢？就像[你可以使用多个 *state* 的 Hook](https://zh-hans.reactjs.org/docs/hooks-state.html#tip-using-multiple-state-variables) 一样，你也可以使用多个 effect。这会将不相关逻辑分离到不同的 effect 中：

```js
function FriendStatusWithCounter(props) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  const [isOnline, setIsOnline] = useState(null);
  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });
  // ...
}
```

**Hook 允许我们按照代码的用途分离他们，** 而不是像生命周期函数那样。React 将按照 effect 声明的顺序依次调用组件中的*每一个* effect。

### 解释: 为什么每次更新的时候都要运行 Effect

如果你已经习惯了使用 class，那么你或许会疑惑**为什么 effect 的清除阶段在每次重新渲染时都会执行**，而不是只在卸载组件的时候执行一次。让我们看一个实际的例子，看看为什么这个设计可以帮助我们创建 bug 更少的组件。

我们介绍了一个用于显示好友是否在线的 `FriendStatus` 组件。从 class 中 props 读取 `friend.id`，然后在组件挂载后订阅好友的状态，并在卸载组件的时候取消订阅：

```js
  componentDidMount() {
    ChatAPI.subscribeToFriendStatus(
      this.props.friend.id,
      this.handleStatusChange
    );
  }

  componentWillUnmount() {
    ChatAPI.unsubscribeFromFriendStatus(
      this.props.friend.id,
      this.handleStatusChange
    );
  }
```

**但是当组件已经显示在屏幕上时，`friend` prop 发生变化时会发生什么？** 我们的组件将继续展示原来的好友状态。这是一个 bug。而且我们还会因为取消订阅时使用错误的好友 ID 导致内存泄露或崩溃的问题。

在 class 组件中，我们需要添加 `componentDidUpdate` 来解决这个问题：

```jsx
  componentDidMount() {
    ChatAPI.subscribeToFriendStatus(
      this.props.friend.id,
      this.handleStatusChange
    );
  }

  componentDidUpdate(prevProps) {
    // 取消订阅之前的 friend.id
    ChatAPI.unsubscribeFromFriendStatus(
      prevProps.friend.id,
      this.handleStatusChange
    );
    // 订阅新的 friend.id
    ChatAPI.subscribeToFriendStatus(
      this.props.friend.id,
      this.handleStatusChange
    );
  }

  componentWillUnmount() {
    ChatAPI.unsubscribeFromFriendStatus(
      this.props.friend.id,
      this.handleStatusChange
    );
  }
```

忘记正确地处理 `componentDidUpdate` 是 React 应用中常见的 bug 来源。

现在看一下使用 Hook 的版本：

```jsx
function FriendStatus(props) {
  // ...
  useEffect(() => {
    // ...
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });
```

它并不会受到此 bug 影响。(虽然我们没有对它做任何改动。)

并不需要特定的代码来处理更新逻辑，**因为 `useEffect` *默认*就会处理。它会在调用一个新的 effect 之前对前一个 effect 进行清理。**为了说明这一点，下面按时间列出一个可能会产生的订阅和取消订阅操作调用序列：

```jsx
// Mount with { friend: { id: 100 } } props
ChatAPI.subscribeToFriendStatus(100, handleStatusChange);     // 运行第一个 effect

// Update with { friend: { id: 200 } } props
ChatAPI.unsubscribeFromFriendStatus(100, handleStatusChange); // 清除上一个 effect
ChatAPI.subscribeToFriendStatus(200, handleStatusChange);     // 运行下一个 effect

// Update with { friend: { id: 300 } } props
ChatAPI.unsubscribeFromFriendStatus(200, handleStatusChange); // 清除上一个 effect
ChatAPI.subscribeToFriendStatus(300, handleStatusChange);     // 运行下一个 effect

// Unmount
ChatAPI.unsubscribeFromFriendStatus(300, handleStatusChange); // 清除最后一个 effect
```

此默认行为保证了一致性，避免了在 class 组件中因为没有处理更新逻辑而导致常见的 bug。

### 提示: 通过跳过 Effect 进行性能优化

在某些情况下，每次渲染后都执行清理或者执行 effect 可能会导致性能问题。在 class 组件中，我们可以通过在 `componentDidUpdate` 中添加对 `prevProps` 或 `prevState` 的比较逻辑解决：

```js
componentDidUpdate(prevProps, prevState) {
  if (prevState.count !== this.state.count) {
    document.title = `You clicked ${this.state.count} times`;
  }
}
```

这是很常见的需求，所以它被内置到了 `useEffect` 的 Hook API 中。**如果某些特定值在两次重渲染之间没有发生变化，你可以通知 React 跳过对 effect 的调用**，**只要传递数组作为 `useEffect` 的第二个可选参数即可**：

```jsx
useEffect(() => {
  document.title = `You clicked ${count} times`;
}, [count]); // 仅在 count 更改时更新
```

上面这个示例中，我们传入 `[count]` 作为第二个参数。这个参数是什么作用呢？如果 `count` 的值是 `5`，而且我们的组件重渲染的时候 `count` 还是等于 `5`，React 将对前一次渲染的 `[5]` 和后一次渲染的 `[5]` 进行比较。**因为数组中的所有元素都是相等的(`5 === 5`)，React 会跳过这个 effect，这就实现了性能的优化。**

当渲染时，如果 `count` 的值更新成了 `6`，React 将会把前一次渲染时的数组 `[5]` 和这次渲染的数组 `[6]` 中的元素进行对比。这次因为 `5 !== 6`，React 就会再次调用 effect。**如果数组中有多个元素，即使只有一个元素发生变化，React 也会执行 effect。**

对于有清除操作的 effect 同样适用：

```js
useEffect(() => {
  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }

  ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
  return () => {
    ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
  };
}, [props.friend.id]); // 仅在 props.friend.id 发生变化时，重新订阅
```

未来版本，可能会在构建时自动添加第二个参数。

> 注意：
>
> 如果你要使用此优化方式，请确保数组中包含了**所有外部作用域中会随时间变化并且在 effect 中使用的变量**，否则你的代码会引用到先前渲染中的旧变量。参阅文档，了解更多关于[如何处理函数](https://zh-hans.reactjs.org/docs/hooks-faq.html#is-it-safe-to-omit-functions-from-the-list-of-dependencies)以及[数组频繁变化时的措施](https://zh-hans.reactjs.org/docs/hooks-faq.html#what-can-i-do-if-my-effect-dependencies-change-too-often)内容。
>
> **如果想执行只运行一次的 effect（仅在组件挂载和卸载时执行），可以传递一个空数组（`[]`）作为第二个参数**。这就告诉 React 你的 effect 不依赖于 props 或 state 中的任何值，所以它永远都不需要重复执行。**这并不属于特殊情况 —— 它依然遵循依赖数组的工作方式。**
>
> 如果你传入了一个空数组（`[]`），effect 内部的 props 和 state 就会一直拥有其初始值。尽管传入 `[]` 作为第二个参数更接近大家更熟悉的 `componentDidMount` 和 `componentWillUnmount` 思维模式，但我们有[更好的](https://zh-hans.reactjs.org/docs/hooks-faq.html#is-it-safe-to-omit-functions-from-the-list-of-dependencies)[方式](https://zh-hans.reactjs.org/docs/hooks-faq.html#what-can-i-do-if-my-effect-dependencies-change-too-often)来避免过于频繁的重复调用 effect。除此之外，**请记得 React 会等待浏览器完成画面渲染之后才会延迟调用 `useEffect`**，因此会使得额外操作很方便。
>
> 我们推荐启用 [`eslint-plugin-react-hooks`](https://www.npmjs.com/package/eslint-plugin-react-hooks#installation) 中的 [`exhaustive-deps`](https://github.com/facebook/react/issues/14920) 规则。此规则会在添加错误依赖时发出警告并给出修复建议。

---

# Hook 规则

Hook 本质就是 JavaScript 函数，但是在使用它时需要遵循两条规则。我们提供了一个 [linter 插件](https://www.npmjs.com/package/eslint-plugin-react-hooks)来强制执行这些规则：

### 只在最顶层使用 Hook

**不要在循环，条件或嵌套函数中调用 Hook，** 确保总是在你的 React 函数的最顶层以及任何 return 之前调用他们。**遵守这条规则，你就能确保 Hook 在每一次渲染中都按照同样的顺序被调用**。这让 React 能够在多次的 `useState` 和 `useEffect` 调用之间保持 hook 状态的正确。(如果你对此感到好奇，我们在[下面](https://zh-hans.reactjs.org/docs/hooks-rules.html#explanation)会有更深入的解释。)

### 只在 React 函数中调用 Hook

**不要在普通的 JavaScript 函数中调用 Hook。**你可以：

- 在 React 的函数组件中调用 Hook
- 在自定义 Hook 中调用其他 Hook (我们将会在[下一页](https://zh-hans.reactjs.org/docs/hooks-custom.html) 中学习这个。)

遵循此规则，确保组件的状态逻辑在代码中清晰可见。

## ESLint 插件

我们发布了一个名为 [`eslint-plugin-react-hooks`](https://www.npmjs.com/package/eslint-plugin-react-hooks) 的 ESLint 插件来强制执行这两条规则。如果你想尝试一下，可以将此插件添加到你的项目中：

我们打算后续版本默认添加此插件到 [Create React App](https://zh-hans.reactjs.org/docs/create-a-new-react-app.html#create-react-app) 及其他类似的工具包中。

```bash
npm install eslint-plugin-react-hooks --save-dev
```

```json
// 你的 ESLint 配置
{
  "plugins": [
    // ...
    "react-hooks"
  ],
  "rules": {
    // ...
    "react-hooks/rules-of-hooks": "error", // 检查 Hook 的规则
    "react-hooks/exhaustive-deps": "warn" // 检查 effect 的依赖
  }
}
```

## 说明

正如我们[之前学到](https://zh-hans.reactjs.org/docs/hooks-state.html#tip-using-multiple-state-variables)的，我们可以在单个组件中使用多个 State Hook 或 Effect Hook：

```js
function Form() {
  // 1. Use the name state variable
  const [name, setName] = useState('Mary');

  // 2. Use an effect for persisting the form
  useEffect(function persistForm() {
    localStorage.setItem('formData', name);
  });

  // 3. Use the surname state variable
  const [surname, setSurname] = useState('Poppins');

  // 4. Use an effect for updating the title
  useEffect(function updateTitle() {
    document.title = name + ' ' + surname;
  });

  // ...
}
```

**那么 React 怎么知道哪个 state 对应哪个 `useState`？**答案是 **React 靠的是 Hook 调用的顺序**。因为我们的示例中，Hook 的调用顺序在每次渲染中都是相同的，所以它能够正常工作：

```js
// ------------
// 首次渲染
// ------------
useState('Mary')           // 1. 使用 'Mary' 初始化变量名为 name 的 state
useEffect(persistForm)     // 2. 添加 effect 以保存 form 操作
useState('Poppins')        // 3. 使用 'Poppins' 初始化变量名为 surname 的 state
useEffect(updateTitle)     // 4. 添加 effect 以更新标题

// -------------
// 二次渲染
// -------------
useState('Mary')           // 1. 读取变量名为 name 的 state（参数被忽略）
useEffect(persistForm)     // 2. 替换保存 form 的 effect
useState('Poppins')        // 3. 读取变量名为 surname 的 state（参数被忽略）
useEffect(updateTitle)     // 4. 替换更新标题的 effect

// ...
```

**只要 Hook 的调用顺序在多次渲染之间保持一致，React 就能正确地将内部 state 和对应的 Hook 进行关联**。但如果我们将一个 Hook (例如 `persistForm` effect) 调用放到一个条件语句中会发生什么呢？

```js
  // 🔴 在条件语句中使用 Hook 违反第一条规则
  if (name !== '') {
    useEffect(function persistForm() {
      localStorage.setItem('formData', name);
    });
  }
```

在第一次渲染中 `name !== ''` 这个条件值为 `true`，所以我们会执行这个 Hook。但是下一次渲染时我们可能清空了表单，表达式值变为 `false`。此时的渲染会跳过该 Hook，Hook 的调用顺序发生了改变：

```js
useState('Mary')           // 1. 读取变量名为 name 的 state（参数被忽略）
// useEffect(persistForm)  // 🔴 此 Hook 被忽略！
useState('Poppins')        // 🔴 2 （之前为 3）。读取变量名为 surname 的 state 失败
useEffect(updateTitle)     // 🔴 3 （之前为 4）。替换更新标题的 effect 失败
```

**React 不知道第二个 `useState` 的 Hook 应该返回什么。**React 会以为在该组件中第二个 Hook 的调用像上次的渲染一样，对应的是 `persistForm` 的 effect，但并非如此。**从这里开始，后面的 Hook 调用都被提前执行，导致 bug 的产生。**

**这就是为什么 Hook 需要在我们组件的最顶层调用。**如果我们想要有条件地执行一个 effect，可以将判断放到 Hook 的*内部*：

```js
  useEffect(function persistForm() {
    // 👍 将条件判断放置在 effect 中
    if (name !== '') {
      localStorage.setItem('formData', name);
    }
  });
```

**注意：如果使用了[提供的 lint 插件](https://www.npmjs.com/package/eslint-plugin-react-hooks)，就无需担心此问题。** 不过你现在知道了为什么 Hook 会这样工作，也知道了这个规则是为了避免什么问题。

----

# 自定义 Hook

通过自定义 Hook，可以将组件逻辑提取到可重用的函数中。

在我们学习[使用 Effect Hook](https://zh-hans.reactjs.org/docs/hooks-effect.html#example-using-hooks-1) 时，我们已经见过这个聊天程序中的组件，该组件用于显示好友的在线状态：

```js
import React, { useState, useEffect } from 'react';

function FriendStatus(props) {
  const [isOnline, setIsOnline] = useState(null);
  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
}
```

现在我们假设聊天应用中有一个联系人列表，当用户在线时需要把名字设置为绿色。我们可以把上面类似的逻辑复制并粘贴到 `FriendListItem` 组件中来，但这并不是理想的解决方案：

```jsx
import React, { useState, useEffect } from 'react';

function FriendListItem(props) {
  const [isOnline, setIsOnline] = useState(null);
  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  return (
    <li style={{ color: isOnline ? 'green' : 'black' }}>
      {props.friend.name}
    </li>
  );
}
```

相反，我们希望在 `FriendStatus` 和 `FriendListItem` 之间共享逻辑。

目前为止，在 React 中有两种流行的方式来共享组件之间的状态逻辑: [render props](https://zh-hans.reactjs.org/docs/render-props.html) 和[高阶组件](https://zh-hans.reactjs.org/docs/higher-order-components.html)，现在让我们来看看 Hook 是如何在让你不增加组件的情况下解决相同问题的。

## 提取自定义 Hook

当我们想在两个函数之间共享逻辑时，**我们会把它提取到第三个函数中**。而组件和 Hook 都是函数，所以也同样适用这种方式。

**自定义 Hook 是一个函数，其名称以 “`use`” 开头，函数内部可以调用其他的 Hook。** 例如，下面的 `useFriendStatus` 是我们第一个自定义的 Hook:

```jsx
import { useState, useEffect } from 'react';

function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
    };
  });

  return isOnline;
}
```

此处并未包含任何新的内容——逻辑是从上述组件拷贝来的。与组件中一致，**请确保只在自定义 Hook 的顶层无条件地调用其他 Hook**。

与 React 组件不同的是，**自定义 Hook 不需要具有特殊的标识**。我们可以自由的决定它的参数是什么，以及它应该返回什么（如果需要的话）。换句话说，它就像一个正常的函数。但是它的名字应该始终以 `use` 开头，这样可以一眼看出其符合 [Hook 的规则](https://zh-hans.reactjs.org/docs/hooks-rules.html)。

此处 `useFriendStatus` 的 Hook 目的是订阅某个好友的在线状态**。这就是我们需要将 `friendID` 作为参数，并返回这位好友的在线状态的原因。**

```js
function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  // ...

  return isOnline;
}
```

## 使用自定义 Hook

我们一开始的目标是在 `FriendStatus` 和 `FriendListItem` 组件中去除重复的逻辑，即：这两个组件都想知道好友是否在线。

现在我们已经把这个逻辑提取到 `useFriendStatus` 的自定义 Hook 中，然后就可以*使用它了：*

```js
function FriendStatus(props) {
  const isOnline = useFriendStatus(props.friend.id);

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
}
```

```jsx
function FriendListItem(props) {
  const isOnline = useFriendStatus(props.friend.id);

  return (
    <li style={{ color: isOnline ? 'green' : 'black' }}>
      {props.friend.name}
    </li>
  );
}
```

**这段代码等价于原来的示例代码吗？**等价，它的工作方式完全一样。如果你仔细观察，你会发现我们没有对其行为做任何的改变，我们只是将两个函数之间一些共同的代码提取到单独的函数中。**自定义 Hook 是一种自然遵循 Hook 设计的约定，而并不是 React 的特性。**

**自定义 Hook 必须以 “`use`” 开头吗？**必须如此。**这个约定非常重要**。不遵循的话，由于无法判断某个函数是否包含对其内部 Hook 的调用，React 将无法自动检查你的 Hook 是否违反了 [Hook 的规则](https://zh-hans.reactjs.org/docs/hooks-rules.html)。

**在两个组件中使用相同的 Hook 会共享 state 吗？**不会。自定义 Hook 是一种**重用*状态逻辑***的机制(例如设置为订阅并存储当前值)，所以每次使用自定义 Hook 时，其中的所有 state 和副作用都是完全隔离的。

**自定义 Hook 如何获取独立的 state？**每次*调用* Hook，它都会获取独立的 state。由于我们直接调用了 `useFriendStatus`，从 React 的角度来看，我们的组件只是调用了 `useState` 和 `useEffect`。 正如我们在[之前章节](https://zh-hans.reactjs.org/docs/hooks-effect.html#tip-use-multiple-effects-to-separate-concerns)中[了解到的](https://zh-hans.reactjs.org/docs/hooks-state.html#tip-using-multiple-state-variables)一样，我们可以在一个组件中多次调用 `useState` 和 `useEffect`，它们是完全独立的。

### 提示：在多个 Hook 之间传递信息

由于 Hook 本身就是函数，因此我们可以在它们之间传递信息。

我们将使用聊天程序中的另一个组件来说明这一点。这是一个聊天消息接收者的选择器，它会显示当前选定的好友是否在线:

```jsx
const friendList = [
  { id: 1, name: 'Phoebe' },
  { id: 2, name: 'Rachel' },
  { id: 3, name: 'Ross' },
];

function ChatRecipientPicker() {
  const [recipientID, setRecipientID] = useState(1);
  const isRecipientOnline = useFriendStatus(recipientID);

  return (
    <>
      <Circle color={isRecipientOnline ? 'green' : 'red'} />
      <select
        value={recipientID}
        onChange={e => setRecipientID(Number(e.target.value))}
      >
        {friendList.map(friend => (
          <option key={friend.id} value={friend.id}>
            {friend.name}
          </option>
        ))}
      </select>
    </>
  );
}
```

我们将当前选择的好友 ID 保存在 `recipientID` 状态变量中，并在用户从 `<select>` 中选择其他好友时更新这个 state。

由于 `useState` 为我们提供了 `recipientID` 状态变量的最新值，因此我们可以将它作为参数传递给自定义的 `useFriendStatus` Hook：

```js
  const [recipientID, setRecipientID] = useState(1);
  const isRecipientOnline = useFriendStatus(recipientID);
```

如此可以让我们知道*当前选中*的好友是否在线。当我们选择不同的好友并更新 `recipientID` 状态变量时，`useFriendStatus` Hook 将会取消订阅之前选中的好友，并订阅新选中的好友状态。

## `useYourImagination()`

自定义 Hook 解决了以前在 React 组件中无法灵活共享逻辑的问题。你可以创建涵盖各种场景的自定义 Hook，如表单处理、动画、订阅声明、计时器，甚至可能还有其他我们没想到的场景。更重要的是，**创建自定义 Hook 就像使用 React 内置的功能一样简单**。

尽量避免过早地增加抽象逻辑。既然函数组件能够做的更多，那么代码库中函数组件的代码行数可能会剧增。这属于正常现象 —— 不必立即将它们拆分为 Hook。但我们仍鼓励你能通过自定义 Hook 寻找可能，以达到简化代码逻辑，解决组件杂乱无章的目的。

例如，有个复杂的组件，其中包含了大量以特殊的方式来管理的内部状态。`useState` 并不会使得集中更新逻辑变得容易，因此你可能更愿意使用 [redux](http://redux.js.org/) 中的 reducer 来编写。

```js
function todosReducer(state, action) {
  switch (action.type) {
    case 'add':
      return [...state, {
        text: action.text,
        completed: false
      }];
    // ... other actions ...
    default:
      return state;
  }
}
```

Reducers 非常便于单独测试，且易于扩展，以表达复杂的更新逻辑。如有必要，您可以将它们分成更小的 reducer。但是，你可能还享受着 React 内部 state 带来的好处，或者可能根本不想安装其他库。

那么，为什么我们不编写一个 `useReducer` 的 Hook，使用 reducer 的方式来管理组件的内部 state 呢？其简化版本可能如下所示：

```jsx
function useReducer(reducer, initialState) {
  const [state, setState] = useState(initialState);

  function dispatch(action) {
    const nextState = reducer(state, action);
    setState(nextState);
  }

  return [state, dispatch];
}
```

在组件中使用它，让 reducer 驱动它管理 state：

```js
function Todos() {
  const [todos, dispatch] = useReducer(todosReducer, []);

  function handleAddClick(text) {
    dispatch({ type: 'add', text });
  }

  // ...
}
```

在复杂组件中使用 reducer 管理内部 state 的需求很常见，我们已经将 `useReducer` 的 Hook 内置到 React 中。你可以在 [Hook API 索引](https://zh-hans.reactjs.org/docs/hooks-reference.html)中找到它使用，搭配其他内置的 Hook 一起使用。

---

# Hook API 索引

如果你刚开始接触 Hook，那么可能需要先查阅 [Hook 概览](https://zh-hans.reactjs.org/docs/hooks-overview.html)。你也可以在 [Hooks FAQ](https://zh-hans.reactjs.org/docs/hooks-faq.html) 章节中获取有用的信息。

- [基础 Hook](https://zh-hans.reactjs.org/docs/hooks-reference.html#basic-hooks)
  - [`useState`](https://zh-hans.reactjs.org/docs/hooks-reference.html#usestate)
  - [`useEffect`](https://zh-hans.reactjs.org/docs/hooks-reference.html#useeffect)
  - [`useContext`](https://zh-hans.reactjs.org/docs/hooks-reference.html#usecontext)
- [额外的 Hook](https://zh-hans.reactjs.org/docs/hooks-reference.html#additional-hooks)
  - [`useReducer`](https://zh-hans.reactjs.org/docs/hooks-reference.html#usereducer)
  - [`useCallback`](https://zh-hans.reactjs.org/docs/hooks-reference.html#usecallback)
  - [`useMemo`](https://zh-hans.reactjs.org/docs/hooks-reference.html#usememo)
  - [`useRef`](https://zh-hans.reactjs.org/docs/hooks-reference.html#useref)
  - [`useImperativeHandle`](https://zh-hans.reactjs.org/docs/hooks-reference.html#useimperativehandle)
  - [`useLayoutEffect`](https://zh-hans.reactjs.org/docs/hooks-reference.html#uselayouteffect)
  - [`useDebugValue`](https://zh-hans.reactjs.org/docs/hooks-reference.html#usedebugvalue)
  - [`useDeferredValue`](https://zh-hans.reactjs.org/docs/hooks-reference.html#usedeferredvalue)
  - [`useTransition`](https://zh-hans.reactjs.org/docs/hooks-reference.html#usetransition)
  - [`useId`](https://zh-hans.reactjs.org/docs/hooks-reference.html#useid)
- [Library Hooks](https://zh-hans.reactjs.org/docs/hooks-reference.html#library-hooks)
  - [`useSyncExternalStore`](https://zh-hans.reactjs.org/docs/hooks-reference.html#usesyncexternalstore)
  - [`useInsertionEffect`](https://zh-hans.reactjs.org/docs/hooks-reference.html#useinsertioneffect)

## 基础 Hook

### `useState`

```js
const [state, setState] = useState(initialState);
```

返回一个 state，以及更新 state 的函数。

在初始渲染期间，返回的状态 (`state`) 与传入的第一个参数 (`initialState`) 值相同。

`setState` 函数用于更新 state。它接收一个新的 state 值并将组件的一次重新渲染加入队列。

```js
setState(newState);
```

在后续的重新渲染中，`useState` 返回的第一个值将始终是更新后最新的 state。

>注意
>
>React 会确保 `setState` 函数的标识是稳定的，并且不会在组件重新渲染时发生变化。这就是为什么可以安全地从 `useEffect` 或 `useCallback` 的依赖列表中省略 `setState`。

#### 函数式更新

如果新的 state 需要通过使用先前的 state 计算得出，那么可以将函数传递给 `setState`。该函数将接收先前的 state，并返回一个更新后的值。下面的计数器组件示例展示了 `setState` 的两种用法：

```jsx
function Counter({initialCount}) {
  const [count, setCount] = useState(initialCount);
  return (
    <>
      Count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
    </>
  );
}
```

“+” 和 “-” 按钮采用函数式形式，因为被更新的 state 需要基于之前的 state。但是“重置”按钮则采用普通形式，因为它总是把 count 设置回初始值。

如果你的更新函数返回值与当前 state 完全相同，则随后的重渲染会被完全跳过。

> 注意
>
> 与 class 组件中的 `setState` 方法不同，`useState` 不会自动合并更新对象。你可以用函数式的 `setState` 结合展开运算符来达到合并更新对象的效果。
>
> ```js
> const [state, setState] = useState({});
> setState(prevState => {
>   // 也可以使用 Object.assign
>   return {...prevState, ...updatedValues};
> });
> ```
>
> `useReducer` 是另一种可选方案，它更适合用于管理包含多个子值的 state 对象。

#### 惰性初始 state

`initialState` 参数只会在组件的初始渲染中起作用，后续渲染时会被忽略。**如果初始 state 需要通过复杂计算获得，则可以传入一个函数，在函数中计算并返回初始的 state，此函数只在初始渲染时被调**用：

```js
const [state, setState] = useState(() => {
  const initialState = someExpensiveComputation(props);
  return initialState;
});

```

#### 跳过 state 更新

如果你更新 State Hook 后的 state 与当前的 state 相同时，React 将跳过子组件的渲染并且不会触发 effect 的执行。（React 使用 [`Object.is` 比较算法](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is#Description) 来比较 state。）

需要注意的是，React 可能仍需要在跳过渲染前渲染该组件。不过由于 React 不会对组件树的“深层”节点进行不必要的渲染，所以大可不必担心。**如果你在渲染期间执行了高开销的计算，则可以使用 `useMemo` 来进行优化。**

### `useEffect`

```
useEffect(didUpdate);
```

该 Hook 接收一个包含命令式、且可能有副作用代码的函数。

在函数组件主体内（这里指在 React 渲染阶段）改变 DOM、添加订阅、设置定时器、记录日志以及执行其他包含副作用的操作都是不被允许的，**因为这可能会产生莫名其妙的 bug 并破坏 UI 的一致性**。

**使用 `useEffect` 完成副作用操作**。赋值给 `useEffect` 的函数会在组件渲染到屏幕之后执行。你可以把 effect 看作从 React 的纯函数式世界通往命令式世界的逃生通道。

默认情况下，effect 将在每轮渲染结束后执行，但你可以选择让它 [在只有某些值改变的时候](https://zh-hans.reactjs.org/docs/hooks-reference.html#conditionally-firing-an-effect) 才执行。

#### 清除 effect

通常，组件卸载时需要清除 effect 创建的诸如订阅或计时器 ID 等资源。要实现这一点，`useEffect` 函数需返回一个清除函数。以下就是一个创建订阅的例子：

```js
useEffect(() => {
  const subscription = props.source.subscribe();
  return () => {
    // 清除订阅
    subscription.unsubscribe();
  };
});
```

**为防止内存泄漏，清除函数会在组件卸载前执行**。另外，如果组件多次渲染（通常如此），则**在执行下一个 effect 之前，上一个 effect 就已被清除**。在上述示例中，意味着组件的每一次更新都会创建新的订阅。若想避免每次更新都触发 effect 的执行，请参阅下一小节。

#### effect 的执行时机

与 `componentDidMount`、`componentDidUpdate` 不同的是，**传给 `useEffect` 的函数会在浏览器完成布局与绘制之后**，**在一个延迟事件中被调用**。这使得它适用于许多常见的副作用场景，比如设置订阅和事件处理等情况，因为绝大多数操作不应阻塞浏览器对屏幕的更新。

**然而，并非所有 effect 都可以被延迟执行**。例如，一个对用户可见的 DOM 变更就必须在浏览器执行下一次绘制前被同步执行，这样用户才不会感觉到视觉上的不一致。（概念上类似于被动监听事件和主动监听事件的区别。）**React 为此提供了一个额外的 [`useLayoutEffect`](https://zh-hans.reactjs.org/docs/hooks-reference.html#uselayouteffect) Hook 来处理这类 effect。它和 `useEffect` 的结构相同，区别只是调用时机不同。**

此外，从 React 18 开始，当它是离散的用户输入（如点击）的结果时，或者当它是由 [`flushSync`](https://zh-hans.reactjs.org/docs/react-dom.html#flushsync) 包装的更新结果时，传递给 `useEffect` 的函数将在屏幕布局和绘制**之前**同步执行。这种行为便于事件系统或 [`flushSync`](https://zh-hans.reactjs.org/docs/react-dom.html#flushsync) 的调用者观察该效果的结果。

> 注意
>
> 这只影响传递给 `useEffect` 的函数被调用时 — 在这些 effect 中执行的更新仍会被推迟。这与 [`useLayoutEffect`](https://zh-hans.reactjs.org/docs/hooks-reference.html#uselayouteffect) 不同，后者会立即启动该函数并处理其中的更新。

即使在 `useEffect` 被推迟到浏览器绘制之后的情况下，**它也能保证在任何新的渲染前启动**。React 在开始新的更新前，总会先刷新之前的渲染的 effect。

#### effect 的条件执行

默认情况下，effect 会在每轮组件渲染完成后执行。这样的话，一旦 effect 的依赖发生变化，它就会被重新创建。

然而，在某些场景下这么做可能会矫枉过正。比如，在上一章节的订阅示例中，我们不需要在每次组件更新时都创建新的订阅，而是仅需要在 `source` prop 改变时重新创建。

要实现这一点，可以给 `useEffect` 传递第二个参数，它是 effect 所依赖的值数组。更新后的示例如下：

```js
useEffect(
  () => {
    const subscription = props.source.subscribe();
    return () => {
      subscription.unsubscribe();
    };
  },
  [props.source],
);
```

此时，只有当 `props.source` 改变后才会重新创建订阅。

> 注意
>
> 如果你要使用此优化方式，请确保数组中包含了**所有外部作用域中会发生变化且在 effect 中使用的变量**，否则你的代码会引用到先前渲染中的旧变量。请参阅文档，了解更多关于[如何处理函数](https://zh-hans.reactjs.org/docs/hooks-faq.html#is-it-safe-to-omit-functions-from-the-list-of-dependencies) 以及[数组频繁变化时的措施](https://zh-hans.reactjs.org/docs/hooks-faq.html#what-can-i-do-if-my-effect-dependencies-change-too-often) 的内容。
>
> 如果想执行只运行一次的 effect（仅在组件挂载和卸载时执行），可以传递一个空数组（`[]`）作为第二个参数。这就告诉 React 你的 effect 不依赖于 props 或 state 中的任何值，所以它永远都不需要重复执行。这并不属于特殊情况 —— 它依然遵循输入数组的工作方式。
>
> 如果你传入了一个空数组（`[]`），effect 内部的 props 和 state 就会一直持有其初始值。尽管传入 `[]` 作为第二个参数有点类似于 `componentDidMount` 和 `componentWillUnmount` 的思维模式，但我们有 [更好的](https://zh-hans.reactjs.org/docs/hooks-faq.html#is-it-safe-to-omit-functions-from-the-list-of-dependencies) [方式](https://zh-hans.reactjs.org/docs/hooks-faq.html#what-can-i-do-if-my-effect-dependencies-change-too-often) 来避免过于频繁的重复调用 effect。除此之外，请记得 React 会等待浏览器完成画面渲染之后才会延迟调用 `useEffect`，因此会使得处理额外操作很方便。
>
> 我们推荐启用 [`eslint-plugin-react-hooks`](https://www.npmjs.com/package/eslint-plugin-react-hooks#installation) 中的 [`exhaustive-deps`](https://github.com/facebook/react/issues/14920) 规则。此规则会在添加错误依赖时发出警告并给出修复建议。

依赖项数组不会作为参数传给 effect 函数。虽然从概念上来说它表现为：所有 effect 函数中引用的值都应该出现在依赖项数组中。未来编译器会更加智能，届时自动创建数组将成为可能。

### `useContext`

```js
const value = useContext(MyContext);
```

接收一个 context 对象（`React.createContext` 的返回值）并返回该 context 的当前值。**当前的 context 值由上层组件中距离当前组件最近的 `<MyContext.Provider>` 的 `value` prop 决定。**

当组件上层最近的 `<MyContext.Provider>` 更新时，该 Hook 会触发重渲染，并使用最新传递给 `MyContext` provider 的 context `value` 值。即使祖先使用 [`React.memo`](https://zh-hans.reactjs.org/docs/react-api.html#reactmemo) 或 [`shouldComponentUpdate`](https://zh-hans.reactjs.org/docs/react-component.html#shouldcomponentupdate)，也会在组件本身使用 `useContext` 时重新渲染。

别忘记 `useContext` 的参数必须是 *context 对象本身*：

- **正确：** `useContext(MyContext)`
- **错误：** `useContext(MyContext.Consumer)`
- **错误：** `useContext(MyContext.Provider)`

**调用了 `useContext` 的组件总会在 context 值变化时重新渲染**。如果重渲染组件的开销较大，你可以 [通过使用 memoization 来优化](https://github.com/facebook/react/issues/15156#issuecomment-474590693)。

> 提示
>
> 如果你在接触 Hook 前已经对 context API 比较熟悉，那应该可以理解，`useContext(MyContext)` 相当于 class 组件中的 `static contextType = MyContext` 或者 `<MyContext.Consumer>`。
>
> `useContext(MyContext)` 只是让你能够*读取* context 的值以及订阅 context 的变化。你仍然需要在上层组件树中使用 `<MyContext.Provider>` 来为下层组件*提供* context。

**把如下代码与 Context.Provider 放在一起**

```jsx
import React, { useContext } from 'react';

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

const ThemeContext = React.createContext(themes.light);

function ThemedButton() {
	const theme = useContext(ThemeContext);
	return (
		<button style={{background: theme.background, color: theme.foreground}}>
			I am styled by theme context!
		</button>
	)
}

function ToolBar(props) {
	return (
		<div>
			<ThemedButton />
		</div>
	);
}

export default function MyTheme() {
	return (
		<ThemeContext.Provider value={themes.dark}>
			<ToolBar />
		</ThemeContext.Provider>
	);
}
```

对先前 [Context 高级指南](https://zh-hans.reactjs.org/docs/context.html)中的示例使用 hook 进行了修改，你可以在链接中找到有关如何 Context 的更多信息。

## 额外的 Hook

以下介绍的 Hook，有些是上一节中基础 Hook 的变体，有些则仅在特殊情况下会用到。不用特意预先学习它们。

### `useReducer`

```js
const [state, dispatch] = useReducer(reducer, initialArg, init);
```

[`useState`](https://zh-hans.reactjs.org/docs/hooks-reference.html#usestate) 的替代方案。它接收一个形如 `(state, action) => newState` 的 reducer，并返回当前的 state 以及与其配套的 `dispatch` 方法。（如果你熟悉 Redux 的话，就已经知道它如何工作了。）

在某些场景下，`useReducer` 会比 `useState` 更适用，例如 state 逻辑较复杂且包含多个子值，或者下一个 state 依赖于之前的 state 等。并且，使用 `useReducer` 还能给那些会触发深更新的组件做性能优化，因为[你可以向子组件传递 `dispatch` 而不是回调函数](https://zh-hans.reactjs.org/docs/hooks-faq.html#how-to-avoid-passing-callbacks-down) 。

以下是用 reducer 重写 [`useState`](https://zh-hans.reactjs.org/docs/hooks-reference.html#usestate) 一节的计数器示例：

```jsx
import React, { useState, useEffect, useReducer } from 'react';

const initialState = { count : 0 };

function reducer(state, action) {
	switch (action.type) {
		case 'increment':
			return {count: state.count + 1};
		case 'decrement':
			return {count:state.count - 1};
		default:
			throw new Error();
	}
}

export default function Counter() {
	// 声明一个新的叫做 “count” 的 state 变量
	// const [count, setCount] = useState(0);
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<div>
			<p>Count: {state.count}</p>
			<button onClick={() => dispatch({type: 'decrement'})}>-</button>
			<button onClick={() => dispatch({type: 'increment'})}>+</button>
		</div>
	)
}
```

> 注意
>
> **React 会确保 `dispatch` 函数的标识是稳定的，并且不会在组件重新渲染时改变**。这就是为什么可以安全地从 `useEffect` 或 `useCallback` 的依赖列表中省略 `dispatch`。

#### 指定初始 state

有两种不同初始化 `useReducer` state 的方式，你可以根据使用场景选择其中的一种。将初始 state 作为第二个参数传入 `useReducer` 是最简单的方法：

```js
  const [state, dispatch] = useReducer(
    reducer,
    {count: initialCount}
  );
```

> 注意
>
> React 不使用 `state = initialState` 这一由 Redux 推广开来的参数约定。有时候初始值依赖于 props，因此需要在调用 Hook 时指定。如果你特别喜欢上述的参数约定，可以通过调用 `useReducer(reducer, undefined, reducer)` 来模拟 Redux 的行为，但我们不鼓励你这么做。

#### 惰性初始化

你可以选择惰性地创建初始 state。为此，需要将 `init` 函数作为 `useReducer` 的第三个参数传入，这样初始 state 将被设置为 `init(initialArg)`。

这么做可以将用于计算 state 的逻辑提取到 reducer 外部，这也为将来对重置 state 的 action 做处理提供了便利：

```jsx
import React, { useState, useEffect, useReducer } from 'react';

function init(initialCount) {
	return { count: initialCount };
}

function reducer(state, action) {
	switch (action.type) {
		case 'increment':
			return {count: state.count + 1};
		case 'decrement':
			return {count:state.count - 1};
		case 'reset':
			return init(action.payload);
		default:
			throw new Error();
	}
}

export default function Counter({initialCount}) {
	// 声明一个新的叫做 “count” 的 state 变量
	// const [count, setCount] = useState(0);
	const [state, dispatch] = useReducer(reducer, initialCount, init);
	return (
		<div>
			<p>Count: {state.count}</p>
			<button onClick={() => dispatch({type: 'reset', payload: initialCount})}>reset</button>
			<button onClick={() => dispatch({type: 'decrement'})}>-</button>
			<button onClick={() => dispatch({type: 'increment'})}>+</button>
		</div>
	)
}
```

```jsx
import './App.css';
import React from 'react'
import Counter from './components/Counter'
import MyTheme from './components/MyTheme'

export default function App() {
  return (
    <div>
      <h1>Hook</h1>
      <Counter initialCount={10} />
      <Counter initialCount={66} />
      <br/>
      <MyTheme />
    </div>
  )
}

```

#### 跳过 dispatch

如果 Reducer Hook 的返回值与当前 state 相同，React 将跳过子组件的渲染及副作用的执行。（React 使用 [`Object.is` 比较算法](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is#Description) 来比较 state。）

需要注意的是，React 可能仍需要在跳过渲染前再次渲染该组件。不过由于 React 不会对组件树的“深层”节点进行不必要的渲染，所以大可不必担心。如果你在渲染期间执行了高开销的计算，则可以使用 `useMemo` 来进行优化。

### `useCallback`

```js
const memoizedCallback = useCallback(
  () => {
    doSomething(a, b);
  },
  [a, b],
);
```

返回一个 [memoized](https://en.wikipedia.org/wiki/Memoization) 回调函数。

把内联回调函数及依赖项数组作为参数传入 `useCallback`，它将返回该回调函数的 memoized 版本，**该回调函数仅在某个依赖项改变时才会更新。**当你把回调函数传递给经过优化的并使用引用相等性去避免非必要渲染（例如 `shouldComponentUpdate`）的子组件时，它将非常有用。

`useCallback(fn, deps)` 相当于 `useMemo(() => fn, deps)`。

> 注意
>
> 依赖项数组不会作为参数传给回调函数。虽然从概念上来说它表现为：所有回调函数中引用的值都应该出现在依赖项数组中。未来编译器会更加智能，届时自动创建数组将成为可能。
>
> 我们推荐启用 [`eslint-plugin-react-hooks`](https://www.npmjs.com/package/eslint-plugin-react-hooks#installation) 中的 [`exhaustive-deps`](https://github.com/facebook/react/issues/14920) 规则。此规则会在添加错误依赖时发出警告并给出修复建议。

### `useMemo`

```js
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

返回一个 [memoized](https://en.wikipedia.org/wiki/Memoization) 值。

把“创建”函数和依赖项数组作为参数传入 `useMemo`，它仅会在某个依赖项改变时才重新计算 memoized 值。**这种优化有助于避免在每次渲染时都进行高开销的计算。**

**记住，传入 `useMemo` 的函数会在渲染期间执行。**请不要在这个函数内部执行不应该在渲染期间内执行的操作，诸如副作用这类的操作属于 `useEffect` 的适用范畴，而不是 `useMemo`。

如果没有提供依赖项数组，`useMemo` 在每次渲染时都会计算新的值。

**你可以把 `useMemo` 作为性能优化的手段，但不要把它当成语义上的保证。**将来，React 可能会选择“遗忘”以前的一些 memoized 值，并在下次渲染时重新计算它们，比如为离屏组件释放内存。先编写在没有 `useMemo` 的情况下也可以执行的代码 —— 之后再在你的代码中添加 `useMemo`，以达到优化性能的目的。

### `useRef`

```js
const refContainer = useRef(initialValue);
```

`useRef` 返回一个可变的 ref 对象，其 `.current` 属性被初始化为传入的参数（`initialValue`）。**返回的 ref 对象在组件的整个生命周期内持续存在。**

一个常见的用例便是命令式地访问子组件：

```jsx
function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` 指向已挂载到 DOM 上的文本输入元素
    inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}
```

本质上，`useRef` 就像是可以在其 `.current` 属性中保存一个可变值的“盒子”。

你应该熟悉 ref 这一种[访问 DOM](https://zh-hans.reactjs.org/docs/refs-and-the-dom.html) 的主要方式。如果你将 ref 对象以 `<div ref={myRef} />` 形式传入组件，则无论该节点如何改变，React 都会将 ref 对象的 `.current` 属性设置为相应的 DOM 节点。

然而，`useRef()` 比 `ref` 属性更有用。它可以[很方便地保存任何可变值](https://zh-hans.reactjs.org/docs/hooks-faq.html#is-there-something-like-instance-variables)，其类似于在 class 中使用实例字段的方式。

这是因为它创建的是一个普通 Javascript 对象。而 `useRef()` 和自建一个 `{current: ...}` 对象的**唯一区别**是，**`useRef` 会在每次渲染时返回同一个 ref 对象。**

请记住，当 ref 对象内容发生变化时，`useRef` 并*不会*通知你。变更 `.current` 属性不会引发组件重新渲染。如果想要在 React 绑定或解绑 DOM 节点的 ref 时运行某些代码，则需要使用[回调 ref](https://zh-hans.reactjs.org/docs/hooks-faq.html#how-can-i-measure-a-dom-node) 来实现。

### `useImperativeHandle`

```js
useImperativeHandle(ref, createHandle, [deps])
```

`useImperativeHandle` 可以让你在使用 `ref` 时自定义暴露给父组件的实例值。**在大多数情况下，应当避免使用 ref 这样的命令式代码。**`useImperativeHandle` 应当与 [`forwardRef`](https://zh-hans.reactjs.org/docs/react-api.html#reactforwardref) 一起使用：

```jsx
function FancyInput(props, ref) {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    }
  }));
  return <input ref={inputRef} ... />;
}
FancyInput = forwardRef(FancyInput);
```

在本例中，渲染 `<FancyInput ref={inputRef} />` 的父组件可以调用 `inputRef.current.focus()`。

### `useLayoutEffect`

其函数签名与 `useEffect` 相同，**但它会在所有的 DOM 变更之后同步调用 effect**。可以使用它来读取 DOM 布局并同步触发重渲染。在浏览器执行绘制之前，`useLayoutEffect` 内部的更新计划将被同步刷新。

尽可能使用标准的 `useEffect` 以避免阻塞视觉更新。

> 提示
>
> 如果你正在将代码从 class 组件迁移到使用 Hook 的函数组件，则需要注意 `useLayoutEffect` 与 `componentDidMount`、`componentDidUpdate` 的调用阶段是一样的。但是，我们推荐你**一开始先用 `useEffect`**，只有当它出问题的时候再尝试使用 `useLayoutEffect`。
>
> 如果你使用服务端渲染，请记住，*无论* `useLayoutEffect` *还是* `useEffect` 都无法在 Javascript 代码加载完成之前执行。**这就是为什么在服务端渲染组件中引入 `useLayoutEffect` 代码时会触发 React 告警。**解决这个问题，需要将代码逻辑移至 `useEffect` 中（如果首次渲染不需要这段逻辑的情况下），或是将该组件延迟到客户端渲染完成后再显示（如果直到 `useLayoutEffect` 执行之前 HTML 都显示错乱的情况下）。
>
> **若要从服务端渲染的 HTML 中排除依赖布局 effect 的组件，可以通过使用 `showChild && <Child />` 进行条件渲染，并使用 `useEffect(() => { setShowChild(true); }, [])` 延迟展示组件**。这样，在客户端渲染完成之前，UI 就不会像之前那样显示错乱了。

### `useDebugValue`

```
useDebugValue(value)
```

`useDebugValue` 可用于在 React 开发者工具中显示自定义 hook 的标签。

例如，[“自定义 Hook”](https://zh-hans.reactjs.org/docs/hooks-custom.html) 章节中描述的名为 `useFriendStatus` 的自定义 Hook：

```js
function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  // ...

  // 在开发者工具中的这个 Hook 旁边显示标签
  // e.g. "FriendStatus: Online"
  useDebugValue(isOnline ? 'Online' : 'Offline');

  return isOnline;
}
```

> 提示
>
> 我们不推荐你向每个自定义 Hook 添加 debug 值。当它作为共享库的一部分时才最有价值。

#### 延迟格式化 debug 值

在某些情况下，格式化值的显示可能是一项开销很大的操作。**除非需要检查 Hook，否则没有必要这么做**。

因此，`useDebugValue` 接受一个格式化函数作为可选的第二个参数。**该函数只有在 Hook 被检查时才会被调用**。它接受 debug 值作为参数，并且会返回一个格式化的显示值。

例如，一个返回 `Date` 值的自定义 Hook 可以通过格式化函数来避免不必要的 `toDateString` 函数调用：

```js
useDebugValue(date, date => date.toDateString());
```

### `useDeferredValue`

```js
const deferredValue = useDeferredValue(value);
```



### `useTransition`

```
const [isPending, startTransition] = useTransition();
```



### `useId`

```
const id = useId();
```

