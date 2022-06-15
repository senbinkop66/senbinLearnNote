# Redux 概述和概念

## Redux 是什么？

它有助于首先理解这个“Redux”的东西是什么。它有什么作用？它帮助我解决什么问题？我为什么要使用它？

**Redux 是一个使用叫做“action”的事件来管理和更新应用状态的模式和工具库** 它以集中式Store（centralized store）的方式对整个应用中使用的状态进行集中管理，**其规则确保状态只能以可预测的方式更新。**

### 为什么要使用 Redux？

Redux 帮你管理“全局”状态 - 哪些应用程序的许多部分都需要的状态。

Redux 提供的模式和工具**使您更容易理解应用程序中的状态何时、何地、为什么以及如何更新**，以及**当这些更改发生时您的应用程序逻辑将如何表现**. Redux 指导您编写可预测和可测试的代码，这有助于让您确信您的应用程序将按预期工作。

### 我什么时候应该使用 Redux？

Redux 可帮助您处理共享状态的管理，但与任何工具一样，它也有权衡。有更多的概念需要学习，还有更多的代码需要编写。它还为您的代码添加了一些额外代码，并要求您遵循某些限制。这是短期和长期生产力之间的权衡。

Redux 在以下情况下更有用：

- 在应用的大量地方，都存在大量的状态
- 应用状态会随着时间的推移而频繁更新
- 更新该状态的逻辑可能很复杂
- 中型和大型代码量的应用，很多人协同开发

**并非所有应用程序都需要 Redux。 花一些时间思考您正在构建的应用程序类型，并决定哪些工具最能帮助解决您正在处理的问题。**

### Redux 库和工具

Redux 是一个小型的独立 JS 库。 但是，它通常与其他几个包一起使用：

#### React-Redux

Redux 可以集成到任何的 UI 框架中，其中最常见的是 React 。[**React-Redux**](https://react-redux.js.org/) 是我们的官方包，它可以让 React 组件访问 state 和下发 action 更新 store，从而同 Redux 集成起来。

#### Redux Toolkit

[**Redux Toolkit**](https://redux-toolkit.js.org/) 是我们推荐的编写 Redux 逻辑的方法。 它包含我们认为对于构建 Redux 应用程序必不可少的包和函数。 Redux Toolkit 构建在我们建议的最佳实践中，简化了大多数 Redux 任务，防止了常见错误，并使编写 Redux 应用程序变得更加容易。

#### Redux DevTools 扩展

[**Redux DevTools 扩展**](https://github.com/zalmoxisus/redux-devtools-extension) 可以显示 Redux 存储中状态随时间变化的历史记录。这允许您有效地调试应用程序，包括使用强大的技术，如“时间旅行调试”。

----

## Redux 术语和概念

在我们深入研究一些实际代码之前，让我们先谈谈使用 Redux 需要了解的一些术语和概念。

### State 管理

让我们从一个小的 React 计数器组件开始。 它跟踪组件状态中的数字，并在单击按钮时增加数字：

```jsx
import React, {useState} from 'react';

export default function Counter() {
	// State: a counter value
	const [counter, setCounter] = useState(0);

	// Action: 当事件发生后，触发状态更新的代码
	const increment = () => {
		setCounter(prevCounter => prevCounter + 1);
	}

	// View: UI 定义
	return (
		<div>
			Value: {counter} &nbsp;<button onClick={increment}>Increment</button>
		</div>
	)
}
```

这是一个包含以下部分的自包含应用程序：

- **state**：驱动应用的真实数据源头
- **view**：基于当前状态的 UI 声明性描述
- **actions**：根据用户输入在应用程序中发生的事件，并触发状态更新

接下来简要介绍 **"单向数据流（one-way data flow）"**:

- 用 state 来描述应用程序在特定时间点的状况
- 基于 state 来渲染出 View
- 当发生某些事情时（例如用户单击按钮），state 会根据发生的事情进行更新，生成新的 state
- 基于新的 state 重新渲染 View

![单向数据流](E:\pogject\学习笔记\image\js\redux1)

然而，当我们有**多个组件需要共享和使用相同state**时，可能会变得很复杂，尤其是当这些组件位于应用程序的不同部分时。有时这可以通过 ["提升 state"](https://reactjs.org/docs/lifting-state-up.html) 到父组件来解决，但这并不总是有效。

解决这个问题的**一种方法**是**从组件中提取共享 state，并将其放入组件树之外的一个集中位置**。这样，我们的组件树就变成了一个大“view”，任何组件都可以访问 state 或触发 action，无论它们在树中的哪个位置！

通过定义和分离 state 管理中涉及的概念并强制执行维护 view 和 state 之间独立性的规则，代码变得更结构化和易于维护。

这就是 Redux 背后的**基本思想**：应用中使用集中式的全局状态来管理，并明确更新状态的模式，以便让代码具有可预测性。

### 不可变性 Immutability

"Mutable" 意为 "可改变的"，而 "immutable" 意为永不可改变。

JavaScript 的对象（object）和数组（array）默认都是 mutable 的。如果我创建一个对象，我可以更改其字段的内容。如果我创建一个数组，我也可以更改内容：

```js
const obj = { a: 1, b: 2 }
// 对外仍然还是那个对象，但它的内容已经变了
obj.b = 3

const arr = ['a', 'b']
// 同样的，数组的内容改变了
arr.push('c')
arr[1] = 'd'
```

这就是 *改变* 对象或数组的例子。内存中还是原来对象或数组的引用，但里面的内容变化了。

**如果想要不可变的方式来更新，代码必需先\*复制\*原来的 object/array，然后更新它的复制体**。

JavaScript array/object 的展开运算符（spread operator）可以实现这个目的：

```js
const obj = {
  a: {
    // 为了安全的更新 obj.a.c，需要先复制一份
    c: 3
  },
  b: 2
}

const obj2 = {
  // obj 的备份
  ...obj,
  // 覆盖 a
  a: {
    // obj.a 的备份
    ...obj.a,
    // 覆盖 c
    c: 42
  }
}

const arr = ['a', 'b']
// 创建 arr 的备份，并把 c 拼接到最后。
const arr2 = arr.concat('c')

// 或者，可以对原来的数组创建复制体
const arr3 = arr.slice()
// 修改复制体
arr3.push('c')
```

**Redux 期望所有状态更新都是使用不可变的方式**。 稍后会说明为什么这很重要，以及编写不可变更新逻辑的一些更简单的方法

### 术语

在我们继续之前，您需要熟悉一些重要的 Redux 术语：

#### Action

**action** 是一个具有 `type` 字段的普通 JavaScript 对象。**你可以将 action 视为描述应用程序中发生了什么的事件**.

`type` 字段是一个字符串，给这个 action 一个描述性的名字，比如`"todos/todoAdded"`。我们通常把那个类型的字符串写成“**域/事件名称**”，其中第一部分是**这个 action 所属的特征或类别**，第二部分是**发生的具体事情**。

action 对象可以有其他字段，其中包含有关发生的事情的附加信息。按照惯例，我们将该信息放在名为 `payload` 的字段中。

一个典型的 action 对象可能如下所示：

```js
const addTodoAction = {
  type: 'todos/todoAdded',
  payload: 'Buy milk'
}
```

#### Action Creator

**action creator** 是一个创建并返回一个 action 对象的函数。它的**作用是让你不必每次都手动编写 action 对象**：

```js
const addTodo = text => {
  return {
    type: 'todos/todoAdded',
    payload: text
  }
}
```

#### Reducer

**reducer** 是一个函数，接收当前的 `state` 和一个 `action` 对象，必要时决定如何更新状态，并返回新状态。函数签名是：`(state, action) => newState`。 **你可以将 reducer 视为一个事件监听器，它根据接收到的 action（事件）类型处理事件。**

> "Reducer" 函数的名字来源是因为它和 [`Array.reduce()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) 函数使用的回调函数很类似。

Reducer 必需符合以下规则：

- 仅使用 `state` 和 `action` 参数计算新的状态值
- 禁止直接修改 `state`。**必须通过复制现有的 `state` 并对复制的值进行更改的方式来做 *不可变更新**（immutable updates）*。
- 禁止任何异步逻辑、依赖随机值或导致其他“副作用”的代码

稍后我们将更多地讨论 reducer 的规则，包括为什么它们很重要以及如何正确地遵循它们。

reducer 函数内部的逻辑通常遵循以下步骤：

- 检查 reducer 是否关心这个 action
  - 如果是，则复制 state，使用新值更新 state 副本，然后返回新 state
- 否则，返回原来的 state 不变

下面是 reducer 的小例子，展示了每个 reducer 应该遵循的步骤：

```js
const initialState = { value: 0 }

function counterReducer(state = initialState, action) {
  // 检查 reducer 是否关心这个 action
  if (action.type === 'counter/increment') {
    // 如果是，复制 `state`
    return {
      ...state,
      // 使用新值更新 state 副本
      value: state.value + 1
    }
  }
  // 返回原来的 state 不变
  return state
}
```

Reducer 可以在内部使用任何类型的逻辑来决定新状态应该是什么，如 `if/else`、`switch`、循环等等。

##### **Reducer 名字的来历**

[`Array.reduce()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) 方法处理数组的方式是，一次处理数组中的每一项，并返回一个最终结果。您可以将其视为“将数组减少到一个值”。

`Array.reduce()` 将回调函数作为参数，该函数将为数组中的每一项调用一次。它需要两个参数：

- `previousResult`，回调函数上次返回的值
- `currentItem`，数组中的当前项

回调函数第一次运行时，没有可用的 `previousResult`，因此我们还需要传入一个初始值，该值将用作第一个 `previousResult`。

reduce 处理数组相加的代码如下：

```js
const numbers = [2, 5, 8]

const addNumbers = (previousResult, currentItem) => {
  console.log({ previousResult, currentItem })
  return previousResult + currentItem
}

const initialValue = 0

const total = numbers.reduce(addNumbers, initialValue)
// {previousResult: 0, currentItem: 2}
// {previousResult: 2, currentItem: 5}
// {previousResult: 7, currentItem: 8}

console.log(total)
// 15
```

请注意，这个 `addNumbers` 就是 “reduce 回调函数”，**它本身不需要跟踪任何东西**。它接受 `previousResult` 和 `currentItem` 参数，用它们做一些事情，并返回一个新的结果值。

**Redux reducer 函数与这个“reduce 回调函数”函数的想法完全相同！** 它接受上一个结果（`state`）和当前项（`action` 对象），根据这些参数计算出一个新 state，并返回该新 state。

如果我们要创建一个 Redux 操作数组，调用 `reduce()`，并传入一个 reducer 函数，我们会以同样的方式得到最终结果：

```js
const actions = [
  { type: 'counter/increment' },
  { type: 'counter/increment' },
  { type: 'counter/increment' }
]

const initialState = { value: 0 }

const finalResult = actions.reduce(counterReducer, initialState)
console.log(finalResult)
// {value: 3}
```

我们可以说 **Redux reducer 将一组操作（随着时间的推移）减少到单个状态**。不同之处在于，使用 `Array.reduce()` 时它会一次性发生，**而使用 Redux 时，它会在您正在运行的应用程序的整个生命周期内发生**。

----

#### Store

当前 Redux 应用的状态存在于一个名为 **store** 的对象中。

store 是通过传入一个 reducer 来创建的，并且有一个名为 `getState` 的方法，它返回当前状态值：

```js
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({ reducer: counterReducer })

console.log(store.getState())
// {value: 0}
```

#### Dispatch

Redux store 有一个方法叫 `dispatch`。**更新 state 的唯一方法是调用 `store.dispatch()` 并传入一个 action 对象**。 store 将执行所有 reducer 函数并计算出更新后的 state，调用 `getState()` 可以获取新 state。

```js
store.dispatch({ type: 'counter/increment' })

console.log(store.getState())
// {value: 1}
```

**dispatch 一个 action 可以形象的理解为 "触发一个事件"**。发生了一些事情，我们希望 store 知道这件事。 Reducer 就像事件监听器一样，当它们收到关注的 action 后，它就会更新 state 作为响应。

我们通常调用 action creator 来调用 action：

```js
const increment = () => {
  return {
    type: 'counter/increment'
  }
}

store.dispatch(increment())

console.log(store.getState())
// {value: 2}
```

#### Selector

Selector 函数**可以从 store 状态树中提取指定的片段**。随着应用变得越来越大，会遇到应用程序的不同部分需要读取相同的数据，**selector 可以避免重复这样的读取逻辑**：

```js
const selectCounterValue = state => state.value

const currentValue = selectCounterValue(store.getState())
console.log(currentValue)
// 2
```

---

### Redux 数据流

早些时候，我们谈到了“单向数据流”，它描述了更新应用程序的以下步骤序列：

- State 描述了应用程序在特定时间点的状况
- 基于 state 来渲染 UI
- 当发生某些事情时（例如用户单击按钮），state 会根据发生的事情进行更新
- 基于新的 state 重新渲染 UI

具体来说，对于 Redux，我们可以将这些步骤分解为更详细的内容：

- 初始启动：
  - 使用最顶层的 root reducer 函数创建 Redux store
  - store 调用一次 root reducer，并将返回值保存为它的初始 `state`
  - 当 UI 首次渲染时，UI 组件访问 Redux store 的当前 state，并使用该数据来决定要呈现的内容。同时监听 store 的更新，以便他们可以知道 state 是否已更改。
- 更新环节：
  - 应用程序中发生了某些事情，例如用户单击按钮
  - dispatch 一个 action 到 Redux store，例如 `dispatch({type: 'counter/increment'})`
  - store 用之前的 `state` 和当前的 `action` 再次运行 reducer 函数，并将返回值保存为新的 `state`
  - store 通知所有订阅过的 UI，通知它们 store 发生更新
  - 每个订阅过 store 数据的 UI 组件都会检查它们需要的 state 部分是否被更新。
  - 发现数据被更新的每个组件都强制使用新数据重新渲染，紧接着更新网页

动画的方式来表达数据流更新：

![数据流更新动画](http://cn.redux.js.org/assets/images/ReduxDataFlowDiagram-49fa8c3968371d9ef6f2a1486bd40a26.gif)

## 总结

- Redux 是一个管理全局应用状态的库
  - Redux 通常与 React-Redux 库一起使用，把 Redux 和 React 集成在一起
  - Redux Toolkit 是编写 Redux 逻辑的推荐方式
- Redux 使用 "单向数据流"
  - State 描述了应用程序在某个时间点的状态，UI 基于该状态渲染
  - 当应用程序中发生某些事情时：
    - UI dispatch 一个 action
    - store 调用 reducer，随后根据发生的事情来更新 state
    - store 通知 UI state 发生了变化
  - UI 基于新 state 重新渲染
- Redux 有这几种类型的代码
  - *Action* 是有 `type` 字段的纯对象，描述发生了什么
  - *Reducer* 是纯函数，基于先前的 state 和 action 来计算新的 state
  - 每当 dispatch 一个 action 后，*store* 就会调用 root reducer

# 应用的结构

## 计数器示例应用程序

我们将看到的示例项目是一个小型计数器应用程序，它允许我们在单击按钮时对数字进行加减运算。它可能不是很令人兴奋，但它展示了一个 React + Redux 应用程序的所有重要部分。

本项目使用 Create-React-App 的官方 Redux 模板 创建。开箱即用，它已经配置了标准的 Redux 应用程序结构，使用 Redux Toolkit 创建 Redux 存储和逻辑，以及 React-Redux 将 Redux 存储和 React 组件连接在一起。

```bash
npx create-react-app redux-essentials-example --template redux
```

### 使用计数器应用程序

我们可以在这里看到两个重要的事情：

- 当我们点击“+”按钮时，一个 type 为“counter/increment”的 action 被 dispatch 到 store
- dispatch action 后，`state.counter.value` 字段开始从 `0` 改到 `1`

现在尝试以下步骤：

- 再次单击“+”按钮。显示的值现在应该是 2。
- 单击“-”按钮一次。显示的值现在应该是 1。
- 单击“添加金额”按钮。显示的值现在应该是 3。
- 将文本框中的数字“2”更改为“3”
- 单击“添加异步”按钮。您应该会看到一个进度条填充按钮，几秒钟后，显示的值应更改为 6。

## Application 实现

你已经知道了应用的功能，现在看一下代码实现。

以下是构成此应用程序的关键文件：

```
/src
    index.js: the starting point for the app
    App.js: the top-level React component
    /app
    	store.js: creates the Redux store instance
    /features
    	/counter
    		Counter.js: a React component that shows the UI for the counter feature
    		counterSlice.js: the Redux logic for the counter feature
```

让我们先看看 Redux store 是如何创建的。

### 创建 Redux Store

打开 `app/store.js`，代码是这样：

```js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
	reducer: {
		counter: counterReducer
	},
});
```

Redux store 是使用 Redux Toolkit 中的 `configureStore` 函数创建的。`configureStore` 要求我们传入一个 `reducer` 参数。

我们的应用程序可能由许多不同的特性组成，每个特性都可能有自己的 reducer 函数。当我们调用`configureStore` 时，我们可以传入一个对象中的所有不同的 reducer。 对象中的键名 key 将定义最终状态树中的键名 key。

我们有一个名为 `features/counter/counterSlice.js` 的文件，它为计数器逻辑导出了一个 reducer 函数。 我们可以在此处导入 `counterReducer` 函数，并在创建 store 时包含它。

当我们传入一个像 `{counter: counterReducer}` 这样的对象时，它表示我们希望在 Redux 状态对象中有一个 `state.counter` 部分，并且我们希望 `counterReducer` 函数负责决定是否以及如何在 dispatch action 时更新 `state.counter` 部分。

Redux 允许使用不同类型的插件（“中间件”和“增强器”）自定义 store 设置。`configureStore` 默认会自动在 store setup 中添加几个中间件以提供良好的开发者体验，并且还设置 store 以便 Redux DevTools Extension 可以检查其内容。

#### Redux 切片（Slice）

**“切片”是应用中单个功能的 Redux reducer 逻辑和 action 的集合**, 通常一起定义在一个文件中。该名称来自于将根 Redux 状态对象拆分为多个状态“切片”。

比如，在一个博客应用中，store 的配置大致长这样：

```js
import { configureStore } from '@reduxjs/toolkit'
import usersReducer from '../features/users/usersSlice'
import postsReducer from '../features/posts/postsSlice'
import commentsReducer from '../features/comments/commentsSlice'

export default configureStore({
  reducer: {
    users: usersReducer,
    posts: postsReducer,
    comments: commentsReducer
  }
})
```

例子中，`state.users`，`state.posts`，和 `state.comments` 均是 Redux state 的一个切片“slice”。由于 `usersReducer` 负责更新 `state.users` 切片，我们将其称为“slice reducer”函数。

#### **Reducer 与 State 的结构**

Redux store 需要在创建时传入一个“root reducer”函数。因此，如果我们有许多不同的 slice reducer 函数，我们如何获得单个 root reducer，以及它如何定义 Redux store 中 state 的内容呢？

如果我们尝试手动调用所有 slice 的 reducer，它可能如下所示：

```js
function rootReducer(state = {}, action) {
  return {
    users: usersReducer(state.users, action),
    posts: postsReducer(state.posts, action),
    comments: commentsReducer(state.comments, action)
  }
}
```

这会单独调用每个 slice reducer，传入 Redux 状态的特定切片，并将每个返回值包含在最终的新 Redux 状态对象中。

Redux 有一个名为 [`combineReducers`](http://cn.redux.js.org/api/combinereducers) 的函数，它会自动为我们执行此操作。它接受一个全是 slice reducer 的对象作为其参数，并返回一个函数，该函数在调度操作时调用每个 slice reducer。每个 slice reducer 的结果都组合成一个对象作为最终结果。我们可以使用 `combineReducers` 做和前面例子一样的事情：

```js
const rootReducer = combineReducers({
  users: usersReducer,
  posts: postsReducer,
  comments: commentsReducer
})
```

当我们将 slice reducer 的对象传递给 `configureStore` 时，它会将这些对象传递给 `combineReducers` 以便我们生成根 reducer。

正如我们之前看到的，你也可以直接传递一个 reducer 函数作为 `reducer` 参数：

```js
const store = configureStore({
  reducer: rootReducer
})
```

### 创建 Slice Reducer 和 Action

既然我们知道`counterReducer` 函数来自 `features/counter/counterSlice.js`，那么让我们一块一块地看看那个文件里有什么。

```js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCount } from './counterAPI';

const initialState = {
  value: 0,
  status: 'idle',
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async (amount) => {
    const response = await fetchCount(amount);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value += action.payload;
      });
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCount = (state) => state.counter.value;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
export const incrementIfOdd = (amount) => (dispatch, getState) => {
  const currentValue = selectCount(getState());
  if (currentValue % 2 === 1) {
    dispatch(incrementByAmount(amount));
  }
};

export default counterSlice.reducer;

```

早些时候，我们看到单击 UI 中的不同按钮会 dispatch 三种不同类型的 Redux action：

- `{type: "counter/increment"}`
- `{type: "counter/decrement"}`
- `{type: "counter/incrementByAmount"}`

我们知道 action 是带有 `type` 字段的普通对象，`type` 字段总是一个字符串，并且我们通常有 action creator 函数来创建和返回 action 对象。那么在哪里定义 action 对象、类型字符串和 action creator 呢？

我们*可以*每次都手写。但是，那会很乏味。此外，Redux 中*真正*重要的是 reducer 函数，以及其中计算新状态的逻辑。

Redux Toolkit 有一个名为 `createSlice` 的函数，它负责生成 action 类型字符串、action creator 函数和 action 对象的工作。您所要做的就是为这个切片定义一个名称，编写一个包含 reducer 函数的对象，它会自动生成相应的 action 代码。`name` 选项的字符串用作每个 action 类型的第一部分，每个 reducer 函数的键名用作第二部分。因此，`"counter"` 名称 + `"increment"` reducer 函数生成了一个 action 类型 `{type: "counter/increment"}`。（毕竟，如果计算机可以为我们做，为什么要手写！）

除了 `name` 字段，`createSlice` 还需要我们为 reducer 传入初始状态值，以便在第一次调用时就有一个 `state`。在这种情况下，我们提供了一个对象，它有一个从 0 开始的 `value` 字段。

我们可以看到这里有三个 reducer 函数，它们对应于通过单击不同按钮 dispatc 的三种不同的 action 类型。

`createSlice` 会自动生成与我们编写的 reducer 函数同名的 action creator。我们可以通过调用其中一个来检查它并查看它返回的内容：

```js
console.log(counterSlice.actions.increment())
// {type: "counter/increment"}
```

它还生成知道如何响应所有这些 action 类型的 slice reducer 函数：

```js
const newState = counterSlice.reducer(
  { value: 10 },
  counterSlice.actions.increment()
)
console.log(newState)
// {value: 11}
```

### Reducer 的规则

上一节讲过，Reducer 必需符合以下规则：

- 仅使用 `state` 和 `action` 参数计算新的状态值
- 禁止直接修改 `state`。必须通过复制现有的 `state` 并对复制的值进行更改的方式来做 *不可变更新（immutable updates）*。
- 禁止任何异步逻辑、依赖随机值或导致其他“副作用”的代码

但为什么这些规则很重要？有几个不同的原因：

- Redux 的**目标之一是使您的代码可预测**。当函数的输出仅根据输入参数计算时，更容易理解该代码的工作原理并对其进行测试。
- 另一方面，如果一个函数依赖于自身之外的变量，或者行为随机，你永远不知道运行它时会发生什么。
- **如果一个函数 mutate 了其他对象，比如它的参数，这可能会意外地改变应用程序的工作方式**。这可能是错误的常见来源，例如“我更新了我的状态，但现在我的 UI 没有在应该更新的时候更新！”
- Redux DevTools 的一些功能取决于你的 reducer 是否正确遵循这些规则

“不可变更新（Immutable Updates）” 这个规则尤其重要，值得进一步讨论。

### Reducer 与 不可变更新

前面讲过 “可变更新 mutation”（更新已有对象/数组的值）与“不可变更新 immutability”（认为值是不可以改变的）

在 Redux 中，***永远\* 不允许在 reducer 中更改 state 的原始对象！**

```js
// ❌ 非法 - 默认情况下，这将更改 state！
state.value = 123
```

不能在 Redux 中更改 state 有几个原因：

- 它会导致 bug，例如 UI 未正确更新以显示最新值
- 更难理解状态更新的原因和方式
- 编写测试变得更加困难
- 它打破了正确使用“时间旅行调试”的能力
- 它违背了 Redux 的预期精神和使用模式

所以如果我们不能更改原件，我们如何返回更新的状态呢？

**Reducer 中必需要先创建原始值的\*副本\*，然后可以改变副本。**

```js
// ✅ 这样操作是安全的，因为创建了副本
return {
  ...state,
  value: 123
}
```

我们已经看到我们可以[手动编写不可变更新](http://cn.redux.js.org/tutorials/essentials/part-1-overview-concepts#immutability)，通过使用 JavaScript 的数组/对象扩展运算符和其他返回原始值副本的函数。但是，如果您认为“以这种方式手动编写不可变更新看起来很难记住和正确执行”……是的，您是对的！:)

手动编写不可变的更新逻辑确实繁琐，而且在 reducer 中意外改变状态是 Redux 用户最常犯的一个错误。

**这就是为什么 Redux Toolkit 的 `createSlice` 函数可以让您以更简单的方式编写不可变更新！**

`createSlice` 内部使用了一个名为 [Immer](https://immerjs.github.io/immer/) 的库。 Immer 使用一种称为 “Proxy” 的特殊 JS 工具来包装您提供的数据，当你尝试 ”mutate“ 这些数据的时候，奇迹发生了，**Immer 会跟踪您尝试进行的所有更改，然后使用该更改列表返回一个安全的、不可变的更新值**，就好像您手动编写了所有不可变的更新逻辑一样。

所以，下面的代码：

```js
function handwrittenReducer(state, action) {
  return {
    ...state,
    first: {
      ...state.first,
      second: {
        ...state.first.second,
        [action.someId]: {
          ...state.first.second[action.someId],
          fourth: action.someValue
        }
      }
    }
  }
}
```

可以变成这样：

```js
function reducerWithImmer(state, action) {
  state.first.second[action.someId].fourth = action.someValue
}
```

变得非常易读！

但，还有一些非常重要的规则要记住：

>警告
>
>你*只能*在 Redux Toolkit 的 `createSlice` 和 `createReducer` 中编写 “mutation” 逻辑，因为它们在内部使用 Immer！如果你在没有 Immer 的 reducer 中编写 mutation 逻辑，它*将*改变状态并导致错误！

考虑到这一点，让我们回过头来看看计数器 slice 中的实际的 reducer。

```js
export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    }
  }
})
```

我们可以看到 `increment` reducer 总是给 `state.value` 加 1。 因为 Immer 知道我们已经对原来的 `state` 对象进行了更改，所以我们实际上不必在此处返回任何内容。 同理，`decrement` reducer 减 1。

在这两个 reducer 中，我们实际上不需要让我们的代码查看 `action` 对象。它无论如何都会被传入，但由于我们不需要它，我们可以省掉把 `action` 声明为 reducer 的参数。

另一方面，`incrementByAmount` 这个 reducer 还需要知道更多信息：它应该增加多少计数器值。因此，我们将 reducer 声明为同时具有 `state` 和 `action` 参数。这样，我们知道我们在文本框中输入的金额被放入 `action.payload` 字段，这就是要被添加到 `state.value` 的值。

### 用 Thunk 编写异步逻辑

到目前为止，我们应用程序中的所有逻辑都是同步的。首先 dispatch action，store 调用 reducer 来计算新状态，然后 dispatch 函数完成并结束。但是，JavaScript 语言有很多编写异步代码的方法，我们的应用程序通常具有异步逻辑，比如从 API 请求数据之类的事情。我们需要一个地方在我们的 Redux 应用程序中放置异步逻辑。

**thunk** 是一种特定类型的 Redux 函数，可以包含异步逻辑。Thunk 是使用两个函数编写的：

- 一个内部 thunk 函数，它以 `dispatch` 和 `getState` 作为参数
- 外部创建者函数，它创建并返回 thunk 函数

从 `counterSlice` 导出的函数就是一个 thunk action creator 的例子。

```js
// The function below is called a thunk and allows us to perform async logic.
// It can be dispatched like a regular action: `dispatch(incrementAsync(10))`.
// This will call the thunk with the `dispatch` function as the first argument.
// Async code can then be executed and other actions can be dispatched
export const incrementAsync = amount => dispatch => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount))
  }, 1000)
}
```

我们可以像使用普通 Redux action creator 一样使用它们：

```js
store.dispatch(incrementAsync(5))
```

但是，使用 thunk 需要在创建时将 `redux-thunk` *middleware*（一种 Redux 插件）添加到 Redux store 中。幸运的是，Redux Toolkit 的 `configureStore` 函数已经自动为我们配置好了，所以我们可以继续在这里使用 thunk。

当您需要进行 AJAX 调用以从服务器获取数据时，您可以将该调用放入 thunk 中。这是一个写得有点长的例子，所以你可以看到它是如何定义的：

```js
// 外部的 thunk creator 函数
const fetchUserById = userId => {
  // 内部的 thunk 函数
  return async (dispatch, getState) => {
    try {
      // thunk 内发起异步数据请求
      const user = await userAPI.fetchById(userId)
      // 但数据响应完成后 dispatch 一个 action
      dispatch(userLoaded(user))
    } catch (err) {
      // 如果过程出错，在这里处理
    }
  }
}
```

#### **Thunk 和异步逻辑**

我们知道我们**不允许在 reducer 中放置任何类型的异步逻辑**。但是，这种逻辑必须存在于某个地方。

如果我们可以访问 Redux 的 store，我们可以编写一些异步代码并在完成后调用 `store.dispatch()`：

```js
const store = configureStore({ reducer: counterReducer })

setTimeout(() => {
  store.dispatch(increment())
}, 250)
```

但是，在真正的 Redux 应用程序中，我们不允许将 store 导入到其他文件中，尤其是在我们的 React 组件中，因为它使代码更难以测试和重用。

另外，我们经常需要编写一些我们知道最终会与*一些* store 一起使用的异步逻辑，但我们不知道*是哪块* store。

Redux 的 store 可以使用“中间件”进行扩展，中间件是一种可以添加额外功能的附加组件或插件。使用中间件的最常见原因是让您编写具有异步逻辑的代码，但同时仍能与 store 对话。他们还可以修改 store，以便我们可以调用 `dispatch()` 并传入普通 action 对象*以外*的值，例如函数或 Promise。

Redux Thunk 中间件修改了 store 以让您将函数传递给 `dispatch`。事实上，代码很短，只有下面几行：

```js
const thunkMiddleware =
  ({ dispatch, getState }) =>
  next =>
  action => {
    if (typeof action === 'function') {
      return action(dispatch, getState)
    }

    return next(action)
  }
```

它先判断传入 `dispatch` 的 action 是函数还是对象。如果是一个函数，则调用函数，并返回结果。否则，传入的是普通 action 对象，就把这个 action 传递给 store 处理。

这就让我们可以用一种方法来处理同步或者异步方法，同时仍然可以调用 `dispatch` 和 `getState`。

### React Counter 组件

前面，我们看到了一个独立的 React `<Counter>` 组件是什么样的。我们的 React+Redux 应用程序有一个类似的 `<Counter>` 组件，但它做了一些不同的事情。

我们将首先查看 `Counter.js` 组件文件：

```jsx
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount
} from './counterSlice'
import styles from './Counter.module.css'

export function Counter() {
  const count = useSelector(selectCount)
  const dispatch = useDispatch()
  const [incrementAmount, setIncrementAmount] = useState('2')

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      {/* 这里省略了额外的 render 代码 */}
    </div>
  )
}
```

与之前的简单 React 示例一样，我们有一个名为 `Counter` 的函数组件，它将一些数据存储在 `useState` hooks 中。

然而，在我们的组件中，看起来我们并没有将当前计数器的值存储为 state。而是放到 `count` 变量中，但它不是来自 `useState` hooks。

虽然 React 包含几个内置 hooks，如 `useState` 和 `useEffect`，其他库可以创建自己的 [自定义 hooks](https://reactjs.org/docs/hooks-custom.html)，使用 React 的 hooks 来构建自定义逻辑。

[React-Redux 库](https://react-redux.js.org/) 有 [一组自定义 hooks，允许你的 React 组件与 Redux store 交互]([https://react-redux.js](https://react-redux.js/) .org/api/hooks）。

#### 使用 `useSelector` 提取数据

首先，`useSelector` 这个 hooks 让我们的组件从 Redux 的 store 状态树中提取它需要的任何数据。

前面讲过，我们可以编写 “selector” 函数，它以 `state` 作为参数并返回状态树的一部分。

`counterSlice.js` 在底部有这个 selector 函数：

```js
// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCount = state => state.counter.value
```

如果我们可以访问 Redux 的 store，我们可以将当前计数器值检索为：

```js
const count = selectCount(store.getState())
console.log(count)
// 0
```

我们的组件不能直接与 Redux store 对话，因为组件文件中不能引入 store。但是，`useSelector` 负责为我们在幕后与 Redux store 对话。 如果我们传入一个 selector 函数，它会为我们调用 `someSelector(store.getState())`，并返回结果。

因此，我们可以通过执行以下操作来获取 store 中的计数器值：

```js
const count = useSelector(selectCount)
```

我们也不是*只能*使用已经导出的 selector。例如，我们可以编写一个选择器函数作为 `useSelector` 的内联参数：

```js
const countPlusTwo = useSelector(state => state.counter.value + 2)
```

每当一个 action 被 dispatch 并且 Redux store 被更新时，`useSelector` 将重新运行我们的选择器函数。如果选择器返回的值与上次不同，`useSelector` 将确保我们的组件使用新值重新渲染。

#### 使用 `useDispatch` 来 dispatch action

类似地，我们知道如果我们可以访问 Redux store，我们可以使用 action creator 来 dispatch action，比如 `store.dispatch(increment())`。 由于我们无法访问 store 本身，因此我们需要某种方式来访问 `dispatch` 方法。

`useDispatch` hooks 为我们完成了这项工作，并从 Redux store 中为我们提供了实际的 `dispatch` 方法：

```js
const dispatch = useDispatch()
```

从那里，我们可以在用户执行诸如单击按钮之类的操作时 dispatch 对应 action：

```jsx
<button
  className={styles.button}
  aria-label="Increment value"
  onClick={() => dispatch(increment())}
>
  +
</button>
```

### 组件 State 与 表单

现在你可能想知道，“我是否总是需要将我所有应用程序的状态放入 Redux store？”

答案是 **不。整个应用程序所需的全局状态应该放在 Redux store 中。而只在一个地方用到的状态应该放到组件的 state。**

在这个例子中，我们有一个文本输入框 input，用户可以在其中输入要添加到计数器的下一个数字：

```jsx
const [incrementAmount, setIncrementAmount] = useState('2')

// later
return (
  <div className={styles.row}>
    <input
      className={styles.textbox}
      aria-label="Set increment amount"
      value={incrementAmount}
      onChange={e => setIncrementAmount(e.target.value)}
    />
    <button
      className={styles.button}
      onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}
    >
      Add Amount
    </button>
    <button
      className={styles.asyncButton}
      onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
    >
      Add Async
    </button>
  </div>
)
```

我们*可以*在 Redux store 中保留当前数字字符串，方法是在输入的 `onChange` 处理程序中 dispatch action 并将其保存在我们的 reducer 中。但是，这并没有给我们带来任何好处。唯一使用文本字符串的地方是这里，在 `<Counter>` 组件中。（当然，在这个例子中只有一个其他组件：`<App>`。但即使我们有一个包含许多组件的更大的应用程序，也只有 `<Counter>` 关心这个输入值。）

因此，将该值保留在 `<Counter>` 组件中的 `useState` 的 hooks 中是有意义的。

类似地，如果我们有一个名为 `isDropdownOpen` 的布尔值，应用程序中的其他组件不会关心它——它应该真正保持在这个组件的本地。

**在 React + Redux 应用中，你的全局状态应该放在 Redux store 中，你的本地状态应该保留在 React 组件中。**

如果您不确定该放在哪里，这里有一些常用的经验法则，用于确定应该将哪种数据放入 Redux：

- 应用程序的其他部分是否关心这些数据？
- 您是否需要能够基于这些原始数据创建进一步的派生数据？
- 是否使用相同的数据来驱动多个组件？
- 能够将这种状态恢复到给定的时间点（即时间旅行调试）对您是否有价值？
- 是否要缓存数据（即，如果数据已经存在，则使用它的状态而不是重新请求它）？
- 您是否希望在热重载 UI 组件（交换时可能会丢失其内部状态）时保持此数据一致？

这也是一般如何在 Redux 中考虑表单的一个很好的例子。 **大多数表单的 state 不应该保存在 Redux 中。** 相反，在编辑表单的时候把数据存到表单组件中，当用户提交表单的时候再 dispatch action 来更新 store。

在我们继续之前要注意的另一件事是：还记得 `counterSlice.js` 中的 `incrementAsync` 这个 thunk 吗？我们在这个组件中使用它。请注意，我们使用它的方式与 dispatch 其他普通的 action 是一样的。这个组件不关心我们是在 dispatch 一个普通的 action 还是异步逻辑。它只知道当你点击那个按钮时，它会执行 dispatch。

### Providing the Store

我们已经看到我们的组件可以使用 `useSelector` 和 `useDispatch` 这两个 hooks 与 Redux 的 store 通信。奇怪的是，我们并没有导入 store，那么这些 hooks 怎么知道要与哪个 Redux store 对话呢？

现在我们已经看到了这个应用程序的全貌，是时候回到这个应用程序的起点，看看拼图的最后部分是如何组合在一起的。

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import store from './app/store'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
```

我们总是必须调用 `ReactDOM.render(<App />)` 来告诉 React 开始渲染我们的根 `<App>` 组件。 为了让像 `useSelector` 这样的 hooks 正常工作，我们需要使用一个名为 `<Provider>` 的组件在幕后传递 Redux store，以便他们可以访问它。

我们在这里引用来自 `app/store.js` 中创建的 store。然后，用 `<Provider>` 包裹整个 `<App>`，并传入 store：`<Provider store={store}>`。

现在，任何调用 `useSelector` 或 `useDispatch` 的 React 组件都可以访问 `<Provider>` 中的 store。

### 总结

- 我们可以使用 Redux Toolkit `configureStore` API 创建一个 Redux store
  - `configureStore` 接收 `reducer` 函数来作为命名参数
  - `configureStore` 自动使用默认值来配置 store
- 在 slice 文件中编写 Redux 逻辑
  - 一个 slice 包含一个特定功能或部分的 state 相关的 reducer 逻辑和 action
  - Redux Toolkit 的 `createSlice` API 为您提供的每个 reducer 函数生成 action creator 和 action 类型
- Redux reducer 必须遵循以下原则
  - 必须依赖 `state` 和 `action` 参数去计算出一个新 state
  - 必须通过拷贝旧 state 的方式去做 *不可变更新* (*immutable updates*)
  - 不能包含任何异步逻辑或其他副作用
  - Redux Toolkit 的 `createSlice` API 内部使用了 Immer 库才达到表面上直接修改（"mutating"）state 也实现不可变更新（*immutable updates*）的效果
- 一般使用 “thunks” 来开发特定的异步逻辑
  - Thunks 接收 `dispatch` 和 `getState` 作为参数
  - Redux Toolkit 内置并默认启用了 `redux-thunk` 中间件
- 使用 React-Redux 来做 React 组件和 Redux store 的通信
  - 在应用程序根组件包裹 `<Provider store={store}>` 使得所有组件都能访问到 store
  - 全局状态应该维护在 Redux store 内，局部状态应该维护在局部 React 组件内

