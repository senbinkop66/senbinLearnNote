------

# 基础

---

## 1. 什么是 React？

React是一个简单的javascript UI库，用于构建高效、快速的用户界面。

它是一个轻量级库，因此很受欢迎。它遵循组件设计模式、声明式编程范式和函数式编程概念，以使前端应用程序更高效。

它使用虚拟DOM来有效地操作DOM。

它遵循从高阶组件到低阶组件的单向数据流。



----

## 2. 如何在React中应用样式？

将样式应用于React组件有三种方法。

### 外部样式表

在此方法中，你可以将外部样式表导入到组件使用类中。 但是你应该使用className而不是class来为React元素应用样式, 这里有一个例子。

```jsx
import React from 'react';
import './App.css';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Dashboard } from './dashboard/dashboard';
import { UserDisplay } from './userdisplay';

function App() {
  return (
    <div className="App">
      <Header />
      <Dashboard />
      <UserDisplay />
      <Footer />
    </div>
  );
}

export default App;
```

### 内联样式

在这个方法中，我们可以直接将 props 传递给HTML元素，属性为style。这里有一个例子。这里需要注意的重要一点是，我们将javascript对象传递给style，这就是为什么我们使用 `backgroundColor` 而不是CSS方法`backbackground-color`。

```jsx
import React from 'react';

export const Header = () => {
    const heading = 'TODO App'
    return(
        <div style={{backgroundColor:'orange'}}>
            <h1>{heading}</h1>
        </div>
    )
}
```

### 定义样式对象并使用它

因为我们将javascript对象传递给style属性，所以我们可以在组件中定义一个style对象并使用它。下面是一个示例，你也可以将此对象作为 props 传递到组件树中。

```jsx
import React from 'react';

const footerStyle = {
    width: '100%',
    backgroundColor: 'green',
    padding: '50px',
    font: '30px',
    color: 'white',
    fontWeight: 'bold'
}

export const Footer = () => {
    return(
        <div style={footerStyle}>
            All Rights Reserved 2019
        </div>
    )
}
```



---

## 3. react组件间通信

以下6种方法是react组件间通信的方式：

- 父组件向子组件通讯: 父组件可以向子组件通过传 props 的方式，向子组件进行通讯
- 子组件向父组件通讯: props+回调的方式,父组件向子组件传递props进行通讯，此props为作用域为父组件自身的函数，子组件调用该函数，将子组件想要传递的信息，作为参数，传递到父组件的作用域中
- 兄弟组件通信: 找到这两个兄弟节点共同的父节点,结合上面两种方式由父节点转发信息进行通信
- 跨层级通信:Context设计目的是为了共享那些对于一个组件树而言是“全局”的数据，例如当前认证的用户、主题或首选语言,对于跨越多层的全局数据通过Context通信再适合不过
- 发布订阅模式: 发布者发布事件，订阅者监听事件并做出反应,我们可以通过引入event模块进行通信
- 全局状态管理工具: 借助Redux或者Mobx等全局状态管理工具进行通信,这种工具会维护一个全局状态中心Store,并根据不同的事件产生新的状态

----

##  React 组件间怎么进行通信？

我们将组件间通信可以拆分为两个词：

- 组件
- 通信

`React`的组件灵活多样，按照不同的方式可以分成很多类型的组件

而通信指的是发送者通过某种媒体以某种格式来传递信息到收信者以达到某个目的，广义上，任何信息的交通都是通信

**组件间通信**即指组件通过某种方式来传递信息以达到某个目的

### 如何通信

组件传递的方式有很多种，根据传送者和接收者可以分为如下：

- 父组件向子组件传递
- 子组件向父组件传递
- 兄弟组件之间的通信
- 父组件向后代组件传递
- 非关系组件传递

#### 父组件向子组件传递

由于`React`的数据流动为单向的，父组件向子组件传递是最常见的方式

父组件在调用子组件的时候，只需要在子组件标签内传递参数，**子组件通过`props`属性就能接收父组件传递过来的参数**

```jsx
function EmailInput(props) {
  return (
    <label>
      Email: <input value={props.email} />
    </label>
  );
}

const element = <EmailInput email="123124132@163.com" />;
```

#### 子组件向父组件传递

子组件向父组件通信的基本思路是，父组件向子组件传一个函数，然后通过这个函数的回调，拿到子组件传过来的值

父组件对应代码如下：

```jsx
import React, {Component} from "react";
import Child from "./Child";


export default class About extends Component {
	constructor() {
		super();
		this.state = {
			name: "about"
		}
	}
	getNameFromChild(value) {
		this.setState({name:value});
	}
	render() {
		return (
			<div>
				<h2>About content.</h2>
				<h2>父子组件通信</h2>
				<h3>父组件name:{this.state.name}</h3>
				<hr/>
				<Child getName={this.getNameFromChild.bind(this)} />
			</div>
		)
	}
}

```

子组件对应代码如下：

```jsx
import React, { Component } from 'react'

export default class Child extends Component {
  changeName = () => {
    const {input1} = this;
    this.props.getName(input1.value);
  }
  render() {
    return (
      <div>
        <h2>子组件</h2>
        <input type="text" ref={c => this.input1 = c} onBlur={this.changeName} />
      </div>
    )
  }
}

```

#### 兄弟组件之间的通信

如果是兄弟组件之间的传递，则父组件作为中间层来实现数据的互通，通过使用父组件传递

```jsx
class Parent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {count: 0}
  }
  setCount = () => {
    this.setState({count: this.state.count + 1})
  }
  render() {
    return (
      <div>
        <SiblingA
          count={this.state.count}
        />
        <SiblingB
          onClick={this.setCount}
        />
      </div>
    );
  }
}
```

#### 父组件向后代组件传递

父组件向后代组件传递数据是一件最普通的事情，就像全局数据一样

使用`context`提供了组件之间通讯的一种方式，可以共享数据，其他数据都能读取对应的数据

通过使用`React.createContext`创建一个`context`

```js
 const PriceContext = React.createContext('price')
```

`context`创建成功后，其下存在`Provider`组件用于创建数据源，`Consumer`组件用于接收数据，使用实例如下：

`Provider`组件通过`value`属性用于给后代组件传递数据：

```jsx
<PriceContext.Provider value={100}>
</PriceContext.Provider>
```

如果想要获取`Provider`传递的数据，可以通过`Consumer`组件或者或者使用`contextType`属性接收，对应分别如下：

```jsx
class MyClass extends React.Component {
  static contextType = PriceContext;
  render() {
    let price = this.context;
    /* 基于这个值进行渲染工作 */
  }
}
```

`Consumer`组件：

```jsx
<PriceContext.Consumer>
    { /*这里是一个函数*/ }
    {
        price => <div>price：{price}</div>
    }
</PriceContext.Consumer>
```

#### 非关系组件传递

如果组件之间关系类型比较复杂的情况，建议将数据进行一个全局资源管理，从而实现通信，例如`redux`。



由于`React`是单向数据流，**主要思想是组件不会改变接收的数据，只会监听数据的变化**，当**数据发生变化时它们会使用接收到的新值**，而不是去修改已有的值

因此，可以看到通信过程中，**数据的存储位置都是存放在上级位置中**



----

## 4. React组件生命周期的阶段是什么？

React 组件的生命周期有三个不同的阶段：

1. **初始渲染阶段**：这是组件即将开始其生命之旅并进入 DOM 的阶段。
2. **更新阶段**：一旦组件被添加到 DOM，它只有在 prop 或状态发生变化时才可能更新和重新渲染。这些只发生在这个阶段。
3. **卸载阶段**：这是组件生命周期的最后阶段，组件被销毁并从 DOM 中删除。



---

## 5. 详细解释 React 组件的生命周期方法

目前React 16.8 +的生命周期分为三个阶段,分别是挂载阶段、更新阶段、卸载阶段

挂载阶段:

- **constructor**: 构造函数，最先被执行,我们通常在构造函数里初始化state对象或者给自定义方法绑定this
- **getDerivedStateFromProps**: static getDerivedStateFromProps(nextProps, prevState),这是个静态方法,当我们接收到新的属性想去修改我们state，可以使用getDerivedStateFromProps
- **render**: render函数是**纯函数，只返回需要渲染的东西，不应该包含其它的业务逻辑**,可以返回原生的DOM、React组件、Fragment、Portals、字符串和数字、Boolean和null等内容
- **componentDidMount**: 组件装载之后调用，此时我们可以获取到DOM节点并操作，比如对canvas，svg的操作，服务器请求，订阅都可以写在这个里面，但是记得在componentWillUnmount中取消订阅

更新阶段:

- **getDerivedStateFromProps**: 此方法在更新和挂载阶段都可能会调用
- **shouldComponentUpdate**: shouldComponentUpdate(nextProps, nextState),有两个参数nextProps和nextState，表示新的属性和变化之后的state，返回一个布尔值，true表示会触发重新渲染，false表示不会触发重新渲染，**默认返回true,我们通常利用此生命周期来优化React程序性能**
- **render**: 更新阶段也会触发此生命周期
- **getSnapshotBeforeUpdate**: getSnapshotBeforeUpdate(prevProps, prevState),这个方法在render之后，componentDidUpdate之前调用，有两个参数prevProps和prevState，表示之前的属性和之前的state，这个函数有一个返回值，会作为第三个参数传给componentDidUpdate，如果你不想要返回值，可以返回null，此生命周期必须与componentDidUpdate搭配使用
- **componentDidUpdate**: componentDidUpdate(prevProps, prevState, snapshot),该方法在getSnapshotBeforeUpdate方法之后被调用，有三个参数prevProps，prevState，snapshot，表示之前的props，之前的state，和snapshot。第三个参数是getSnapshotBeforeUpdate返回的,如果触发某些回调函数时需要用到 DOM 元素的状态，则将对比或计算的过程迁移至 getSnapshotBeforeUpdate，然后在 componentDidUpdate 中统一触发回调或更新状态。

卸载阶段:

- **componentWillUnmount**: 当我们的组件被卸载或者销毁了就会调用，我们可以在这个函数里去清除一些定时器，取消网络请求，清理无效的DOM元素等垃圾清理工作

错误处理

渲染过程，生命周期，或子组件的构造函数中抛出错误时，会调用如下方法：

- static getDerivedStateFromError()
- componentDidCatch()

**扩展：**

React 16之后有三个生命周期被废弃(但并未删除)

- componentWillMount
- componentWillReceiveProps
- componentWillUpdate

官方计划在17版本完全删除这三个函数，只保留UNSAVE_前缀的三个函数，目的是为了向下兼容，但是对于开发者而言应该尽量避免使用他们，而是使用新增的生命周期函数替代它们



---

## 6. 简述下 React 每个生命周期都做了什么？

### render()

render() 方法是 class 组件中唯一必须实现的方法。

当 render 被调用时，它会检查 this.props 和 this.state 的变化并返回以下类型之一：

- React 元素。通常通过 JSX 创建。例如，`<div /> `会被 React 渲染为 DOM 节点，`<MyComponent />` 会被 React 渲染为自定义组件，无论是 `<div />` 还是 `<MyComponent />` 均为 React 元素。
- 数组或 fragments。 使得 render 方法可以返回多个元素。
- Portals。可以渲染子节点到不同的 DOM 子树中。
- 字符串或数值类型。它们在 DOM 中会被渲染为文本节点
- 布尔类型或 null。什么都不渲染。（主要用于支持返回 test && `<Child />` 的模式，其中 test 为布尔类型。）

**render() 函数应该为纯函数**，这意味着在不修改组件 state 的情况下，每次调用时都返回相同的结果，并且它不会直接与浏览器交互。

如需与浏览器进行交互，请在 componentDidMount() 或其他生命周期方法中执行你的操作。保持 render() 为纯函数，可以使组件更容易思考。



### constructor()

**如果不初始化 state 或不进行方法绑定**，则不需要为 React 组件实现构造函数。

在 React 组件挂载之前，会调用它的构造函数。在为 React.Component 子类实现构造函数时，**应在其他语句之前前调用 super(props)。**否则，this.props 在构造函数中可能会出现未定义的 bug。

通常，在 React 中，构造函数仅用于以下两种情况：

- 通过给 this.state 赋值对象来初始化内部 state。

- 为事件处理函数绑定实例

在 constructor() 函数中**不要调用 setState() 方法**。如果你的组件需要使用内部 state，请直接在构造函数中为 this.state 赋值初始 state。

只能在构造函数中直接为 this.state 赋值。**如需在其他方法中赋值，你应使用 this.setState() 替代。**

要**避免在构造函数中引入任何副作用或订阅**。如遇到此场景，请将对应的操作放置在 componentDidMount 中。



### componentDidMount()

componentDidMount() 会在组件挂载后（插入 DOM 树中）立即调用。依赖于 DOM 节点的初始化应该放在这里。**如需通过网络请求获取数据，此处是实例化请求的好地方。**

这个方法是比较适合添加订阅的地方。如果添加了订阅，请不要忘记在 componentWillUnmount() 里取消订阅

**你可以在 componentDidMount() 里直接调用 setState()。它将触发额外渲染**，但此渲染会发生在浏览器更新屏幕之前。如此保证了即使在 render() 两次调用的情况下，用户也不会看到中间状态。请谨慎使用该模式，因为它会导致性能问题。通常，你应该在 constructor() 中初始化 state。如果你的渲染依赖于 DOM 节点的大小或位置，比如实现 modals 和 tooltips 等情况下，你可以使用此方式处理。



### componentDidUpdate()

componentDidUpdate() 会在更新后会被立即调用。**首次渲染不会执行**此方法。

当组件更新后，可以在此处对 DOM 进行操作。如果你对更新前后的 props 进行了比较，也可以选择在此处进行网络请求。（例如，当 props 未发生变化时，则不会执行网络请求）。

```js
componentDidUpdate(prevProps) {
  // 典型用法（不要忘记比较 props）：
  if (this.props.userID !== prevProps.userID) {
    this.fetchData(this.props.userID);
  }
}
```

你也可以在 componentDidUpdate() 中直接调用 setState()，**但请注意它必须被包裹在一个条件语句里，正如上述的例子那样进行处理，否则会导致死循环。**它还会导致额外的重新渲染，虽然用户不可见，但会影响组件性能**。不要将 props “镜像”给 state，请考虑直接使用 props。** 欲了解更多有关内容，请参阅为什么 props 复制给 state 会产生 bug。

如果组件实现了 getSnapshotBeforeUpdate() 生命周期（不常用），则它的返回值将作为 componentDidUpdate() 的第三个参数 “snapshot” 参数传递。否则此参数将为 undefined。



### componentWillUnmount()

componentWillUnmount() **会在组件卸载及销毁之前直接调用**。在此方法中执行必要的清理操作，例如，清除 timer，取消网络请求或清除在 componentDidMount() 中创建的订阅等。

componentWillUnmount() 中**不应调用 setState()**，因为**该组件将永远不会重新渲染**。组件实例卸载后，将永远不会再挂载它。



### shouldComponentUpdate()

根据 shouldComponentUpdate() 的返回值，判断 React 组件的输出是否受当前 state 或 props 更改的影响。默认行为是 state 每次发生变化组件都会重新渲染。大部分情况下，你应该遵循默认行为。

当 props 或 state 发生变化时，shouldComponentUpdate() 会在渲染执行之前被调用。返回值默认为 true。**首次渲染或使用 forceUpdate() 时不会调用该方法。**

此方法**仅作为性能优化的方式而存在**。不要企图依靠此方法来“阻止”渲染，因为这可能会产生 bug。你应该考虑使用内置的 PureComponent 组件，而不是手动编写 shouldComponentUpdate()。**PureComponent 会对 props 和 state 进行浅层比较，并减少了跳过必要更新的可能性。**

如果你一定要手动编写此函数，可以将 this.props 与 nextProps 以及 this.state 与nextState 进行比较，并返回 false 以告知 React 可以跳过更新。**请注意，返回 false 并不会阻止子组件在 state 更改时重新渲染。**

我们**不建议**在 shouldComponentUpdate() 中进行深层比较或使用 JSON.stringify()。**这样非常影响效率，且会损害性能。**

目前，如果 shouldComponentUpdate() 返回 false，则不会调用 UNSAFE_componentWillUpdate()，render() 和 componentDidUpdate()。后续版本，React 可能会将 shouldComponentUpdate 视为提示而不是严格的指令，并且，当返回 false 时，仍可能导致组件重新渲染。



### static getDerivedStateFromProps()

getDerivedStateFromProps 会**在调用 render 方法之前调用**，并且在初始挂载及后续更新时都会被调用。**它应返回一个对象来更新 state**，如果返回 null 则不更新任何内容。

**此方法适用于罕见的用例，即 state 的值在任何时候都取决于 props**。例如，实现 `<Transition> `组件可能很方便，该组件会比较当前组件与下一组件，以决定针对哪些组件进行转场动画。

派生状态会导致代码冗余，并使组件难以维护。 确保你已熟悉这些简单的替代方案：

- 如果你需要执行副作用（例如，数据提取或动画）以响应 props 中的更改，请改用 componentDidUpdate。
- 如果只想在 prop 更改时重新计算某些数据，请使用 memoization helper 代替。
- 如果你想在 prop 更改时“重置”某些 state，请考虑使组件完全受控或使用 key 使组件完全不受控代替。

**此方法无权访问组件实例。**如果你需要，可以通过提取组件 props 的纯函数及 class 之外的状态，在getDerivedStateFromProps()和其他 class 方法之间重用代码。

请注意，不管原因是什么，都会在每次渲染前触发此方法。这与 UNSAFE_componentWillReceiveProps 形成对比，后者仅在父组件重新渲染时触发，而不是在内部调用 setState 时。



### getSnapshotBeforeUpdate()

getSnapshotBeforeUpdate() **在最近一次渲染输出（提交到 DOM 节点）之前调用**。它使得组件能在发生更改之前从 DOM 中捕获一些信息（例如，滚动位置）。此生命周期方法的**任何返回值**将作为参数传递给 componentDidUpdate()。

此用法并不常见，但它可能出现在 UI 处理中，如需要以特殊方式处理滚动位置的聊天线程等。

应返回 snapshot 的值（或 null）。



### Error boundaries

Error boundaries 是 React 组件，它会在其子组件树中的任何位置捕获 JavaScript 错误，并记录这些错误，展示降级 UI 而不是崩溃的组件树。Error boundaries 组件会捕获在渲染期间，在生命周期方法以及其整个树的构造函数中发生的错误。

如果 class 组件定义了生命周期方法 static getDerivedStateFromError() 或 componentDidCatch() 中的任何一个（或两者），它就成为了 Error boundaries。通过生命周期更新 state 可让组件捕获树中未处理的 JavaScript 错误并展示降级 UI。

仅使用 Error boundaries 组件来从意外异常中恢复的情况；不要将它们用于流程控制。



### static getDerivedStateFromError()

此生命周期**会在后代组件抛出错误后被调用**。 它将抛出的错误作为参数，并返回一个值以更新 state。



### componentDidCatch()

此生命周期在后代组件抛出错误后被调用。 它接收两个参数：

- error —— 抛出的错误。
- info —— 带有 componentStack key 的对象，其中包含有关组件引发错误的栈信息。

componentDidCatch() 会在“提交”阶段被调用，因此允许执行副作用。 它应该用于记录错误之类的情况。

React 的开发和生产构建版本在 componentDidCatch() 的方式上有轻微差别。

**在开发模式下，错误会冒泡至 window**，这意味着任何 window.onerror 或 window.addEventListener('error', callback) 会中断这些已经被 componentDidCatch() 捕获的错误。

相反，在生产模式下，错误不会冒泡，这意味着任何根错误处理器只会接受那些没有显式地被 componentDidCatch() 捕获的错误。





----

## 7. 你对 React 的 refs 有什么了解？

Refs 是 React 中引用的简写。它是一个有助于存储对特定的 React 元素或组件的引用的属性，它将由组件渲染配置函数返回。**用于对 render() 返回的特定元素或组件的引用。**当需要进行 DOM 测量或向组件添加方法时，它们会派上用场。

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

## 8. 列出一些应该使用 Refs 的情况

以下是应该使用 refs 的情况：

- 需要管理焦点、选择文本或媒体播放时
- 触发式动画
- 与第三方 DOM 库集成

---

## 9. React中的类组件和函数组件之间有什么区别？

### 类组件（Class components）

- 无论是使用函数或是类来声明一个组件，它决不能修改它自己的 props。
  - **所有 React 组件都必须是纯函数**，**并禁止修改其自身 props**。
- React是单项数据流，父组件改变了属性，那么子组件视图会更新。
  - 属性 props是外界传递过来的，**状态 state是组件本身的，状态可以在组件中任意修改**
  - 组件的属性和状态改变都会更新视图。

```jsx
class Welcome extends React.Component {
  render() {
    return (
      <h1>Welcome { this.props.name }</h1>
    );
  }
}
ReactDOM.render(<Welcome name='react' />, document.getElementById('root'));
```



### 函数组件（functional component）

函数组件接收一个单一的 props 对象并返回了一个React元素

```jsx
function Welcome (props) {
  return <h1>Welcome {props.name}</h1>
}
ReactDOM.render(<Welcome name='react' />, document.getElementById('root'));
```

### 区别

#### 语法上

两者最明显的不同就是在语法上，函数组件是一个纯函数，它接收一个props对象返回一个react元素。而类组件需要去继承React.Component并且创建render函数返回react元素，这将会要更多的代码，虽然它们实现的效果相同。

#### 状态管理

因为函数组件是一个**纯函数**，**你不能在组件中使用setState()**，这也是为什么把函数组件称作为**无状态组件**。

如果你需要在你的组件中使用state，你**可以选择创建一个类组件**或者**将state提升到你的父组件中**，然后通过props对象传递到子组件。

#### 生命周期钩子

你**不能在函数组件中使用生命周期钩子**，原因和不能使用state一样，所有的生命周期钩子都来自于继承的React.Component中。

因此，**如果你想使用生命周期钩子，那么需要使用类组件**。

**注意**：在react16.8版本中添加了hooks，使得我们可以在函数组件中使用useState钩子去管理state，使用useEffect钩子去使用生命周期函数。**因此，2、3两点就不是它们的区别点**。从这个改版中我们可以看出作者更加看重函数组件，而且react团队曾提及到在react之后的版本将会对函数组件的性能方面进行提升。

#### 调用方式

如果SayHi是一个函数，React需要调用它：

```jsx
// 你的代码 
function SayHi() { 
    return <p>Hello, React</p> 
} 
// React内部 
const result = SayHi(props) // » <p>Hello, React</p>
```

如果SayHi是一个类，React需要先用new操作符将其实例化，然后调用刚才生成实例的render方法：

```jsx
// 你的代码 
class SayHi extends React.Component { 
    render() { 
        return <p>Hello, React</p> 
    } 
} 
// React内部 
const instance = new SayHi(props) // » SayHi {} 
const result = instance.render() // » <p>Hello, React</p>
```

可想而知，函数组件重新渲染将重新调用组件方法返回新的react元素，**类组件重新渲染将new一个新的组件实例，然后调用render类方法返回react元素**，这也说明为什么类组件中this是可变的。



---

## 10. 什么是高阶组件？

高阶组件就是一个函数，**且该函数接受一个组件作为参数，并返回一个新的组件**。基本上，这是从React的组成性质派生的一种模式，我们称它们为“纯”组件， 因为它们可以接受任何动态提供的子组件，但它们不会修改或复制其输入组件的任何行为。

```js
const EnhancedComponent = higherOrderComponent(WrappedComponent);
```

- 高阶组件（HOC）是 React 中用于复用组件逻辑的一种高级技巧
- 高阶组件的参数为一个组件返回一个新的组件
- 组件是将 props 转换为 UI，而**高阶组件是将组件转换为另一个组件**



---

##  11. constructor中super与props参数一起使用的目的是什么？

在调用方法之前，子类构造函数无法使用this引用super()。

在ES6中，在子类的constructor中必须先调用super才能引用this。

在constructor中可以使用this.props

- 使用props：

```jsx
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);  // Prints { name: 'sudheer',age: 30 }
    }
}
```

- 不使用props：

```jsx
class MyComponent extends React.Component {
    constructor(props) {
        super();
        console.log(this.props); // Prints undefined
        // But Props parameter is still available
        console.log(props); // Prints { name: 'sudheer',age: 30 }
    }

    render() {
        // No difference outside constructor
        console.log(this.props) // Prints { name: 'sudheer',age: 30 }
    }
}
```

上面的代码片段揭示了**this.props行为仅在构造函数中有所不同**。外部构造函数相同。



---

## 12. React 事件绑定原理

React并不是将click事件绑在该div的真实DOM上，而是在document处监听所有支持的事件，当事件发生并冒泡至document处时，React将事件内容封装并交由真正的处理函数运行。这样的方式不仅减少了内存消耗，还能在组件挂载销毁时统一订阅和移除事件。
另外冒泡到 document 上的事件也不是原生浏览器事件，而是 React 自己实现的合成事件（SyntheticEvent）。因此我们如果不想要事件冒泡的话，调用 event.stopPropagation 是无效的，而应该调用event.preventDefault。



---

## 13. 简述一下 React 的源码实现

1. React 的实现主要分为Component和Element；
2. Component属于 React 实例，在创建实例的过程中会在实例中注册state和props属性，还会依次调用内置的生命周期函数；
3. Component中有一个render函数，render函数要求返回一个Element对象（或null）；
4. Element对象分为原生Element对象和组件式对象，原生Element+ 组件式对象会被一起解析成虚拟 DOM 树，并且内部使用的state和props也以 AST 的形式注入到这棵虚拟 DOM 树之中；
5. 在渲染虚拟 DOM 树的前后，会触发 React Component 的一些生命周期钩子函数，比如componentWillMount和componentDidMount，在虚拟 DOM 树解析完成后将被渲染成真实 DOM 树；
6. 调用setState时，会调用更新函数更新Component的state，并且触发内部的一个updater，调用render生成新的虚拟 DOM 树，利用 diff 算法与旧的虚拟 DOM 树进行比对，比对以后利用最优的方案进行 DOM 节点的更新，这也是 React 单向数据流的原理（与 Vue 的 MVVM 不同之处）。



----

##  14. 什么是受控组件？

在HTML当中，像`<input>,<textarea>, 和 <select>`这类表单元素会维持自身状态，并根据用户输入进行更新。但在React中，可变的状态通常保存在组件的状态属性中，并且只能用 setState() 方法进行更新。

### 非受控组件

非受控组件，即**组件的状态不受React控制的组件**，例如下边这个

```jsx
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Demo1 extends Component {
    render() {
        return (
            <input />
        )
    }
}

ReactDOM.render(<Demo1/>, document.getElementById('content'))
```

在这个最简单的输入框组件里,我们并没有干涉input中的value展示,即用户输入的内容都会展示在上面。如果我们通过props给组件设置一个初始默认值,defaultValue属性是React内部实现的一个属性,目的类似于input的placeholder属性。

ps: 此处如果使用value代替defaultValue,会发现输入框的值无法改变

### 受控组件

受控组件就是组件的状态受React控制。上面提到过，既然通过设置input的value属性, 无法改变输入框值,那么我们把它和state结合在一起,再绑定onChange事件,实时更新value值就行了。

```jsx
class Demo1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value
        }
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        })
    }

    render() {
        return (
            <input value={this.state.value} onChange={e => this.handleChange(e)}/>
        )
    }
}
```



----

##  15. 什么是JSX？

JSX即JavaScript XML。一种在React组件内部构建标签的类XML语法。JSX为react.js开发的一套语法糖，也是react.js的使用基础。React在不使用JSX的情况下一样可以工作，然而使用JSX可以提高组件的可读性，因此推荐使用JSX。

```jsx
class MyComponent extends React.Component {
  render() {
    let props = this.props;  
    return (
      <div className="my-component">
      	<a href={props.url}>{props.name}</a>
      </div>
    );
  }
}
```

**优点**：

- 允许使用熟悉的语法来定义 HTML 元素树；
- 提供更加语义化且移动的标签；
- 程序结构更容易被直观化；
- 抽象了 React Element 的创建过程；
- 可以随时掌控 HTML 标签以及生成这些标签的代码；
- 是原生的 JavaScript。



**浏览器只能处理 JavaScript 对象**，而不能读取常规 JavaScript 对象中的 JSX。所以为了使浏览器能够读取 JSX，首先，需要用像 Babel 这样的 JSX 转换器将 JSX 文件转换为 JavaScript 对象，然后再将其传给浏览器。



----

## 16. setState 之后发生了什么

**简单版本**： React 利用**状态队列机制**实现了 setState 的“异步”更新，避免频繁的重复更新 state。

首先将新的 state 合并到状态更新队列中，然后根据更新队列和 shouldComponentUpdate 的状态来判断是否需要更新组件。

**复杂版本**：

- enqueueSetState 将 state 放入队列中，并调用 enqueueUpdate 处理要更新的 Component
- 如果组件当前正处于 update 事务中，则先将 Component 存入 dirtyComponent 中。否则调用batchedUpdates 处理。
- batchedUpdates 发起一次 transaction.perform() 事务
- 开始执行事务初始化，运行，结束三个阶段
  - 初始化：事务初始化阶段没有注册方法，故无方法要执行
  - 运行：执行 setSate 时传入的 callback 方法
  - 结束：更新 isBatchingUpdates 为 false，并执行 FLUSH_BATCHED_UPDATES 这个 wrapper 中的close方法，FLUSH_BATCHED_UPDATES在close阶段，会循环遍历所有的 dirtyComponents，调用updateComponent 刷新组件，并执行它的 pendingCallbacks, 也就是 setState 中设置的 callback。



---

## 17 setState到底是异步还是同步?

有时表现出异步,有时表现出同步

1. setState**只在合成事件和钩子函数中是“异步”的**，在原生事件和setTimeout中都是**同步**的。
2. setState的“异步”并不是说内部由异步代码实现，**其实本身执行的过程和代码都是同步的**，只是合成事件和钩子函数的调用顺序在更新之前，导致在合成事件和钩子函数中没法立马拿到更新后的值，形成了所谓的“异步”，当然可以通过第二个参数setState(partialState, callback)中的callback拿到更新后的结果。
3. setState的**批量更新优化**也是**建立在“异步”（合成事件、钩子函数）之上的**，在原生事件和setTimeout 中不会批量更新，在“异步”中如果对同一个值进行多次setState，setState的批量更新策略会对其进行覆盖，取最后一次的执行，如果是同时setState多个不同的值，在更新时会对其进行合并批量更新。



在React中，如果是由React引发的事件处理（比如通过onClick引发的事件处理），调用setState不会同步更新this.state，**除此之外的setState调用会同步执行this.state** 。

所谓“**除此之外**”，指的是绕过React通过addEventListener直接添加的事件处理函数，还有通过setTimeout/setInterval产生的异步调用。

原因： 在React的setState函数实现中，会根据一个**变量isBatchingUpdates**判断是直接更新this.state还是放到队列中回头再说，而isBatchingUpdates**默认是false**，也就表示setState会同步更新this.state，但是，**有一个函数batchedUpdates，这个函数会把isBatchingUpdates修改为true**，而**当React在调用事件处理函数之前就会调用这个batchedUpdates**，造成的后果，就是由React控制的事件处理过程setState**不会同步**更新this.state。

注意： setState的“异步”并不是说内部由异步代码实现，**其实本身执行的过程和代码都是同步的**，只是合成事件和钩子函数的**调用顺序**在更新之前，**导致在合成事件和钩子函数中没法立马拿到更新后的值，形式了所谓的“异步”**，当然可以通过第二个参数 setState(partialState, callback) 中的callback拿到更新后的结果。

综上，setState 只在合成事件和 hook() 中是“异步”的，在 原生事件和 setTimeout 中都是同步的。



---

## 18. 为什么不能直接使用 this.state 改变数据？

react中不能直接修改state，因为并不会重新触发render。

以如下方式更新状态，组件不会重新渲染。

```js
//Wrong
this.state.message =”Hello world”;
```

而是需要使用setState()方法，状态改变时，组件通过重新渲染做出响应。

```js
//Correct
This.setState({message: ‘Hello World’});
```

setState通过一个队列机制来实现 state 更新。当执行 setState 的时候，**会将需要更新的 state 合并后放入状态队列，而不会立刻更新 this.state**。

队列机制可以高效的批量更新 state，**如果不通过 setState 而直接修改 this.state，那么该 state 将不会被放入状态队列中**，当下次调用 setState 并对状态队列进行合并时，将会忽略之前被直接修改的 state，而造成无法预知的错误。



----

## 19. state 和 props 区别是啥？

props和state是普通的 JS 对象。虽然它们都包含影响渲染输出的信息，但是它们在组件方面的功能是不同的。即

- state 是组件自己管理数据，控制自己的状态，可变；
- props 是外部传入的数据参数，不可变；
- 没有state的叫做**无状态组件**，有state的叫做**有状态组件**；
- **多用 props，少用 state**，也就是多写无状态组件。



----

## 20. 当调用setState时，React render 是如何工作的？

**虚拟 DOM 渲染**: 当render方法被调用时，它返回一个新的组件的虚拟 DOM 结构。当调用setState()时，render会被再次调用，因为默认情况下shouldComponentUpdate总是返回true，所以默认情况下 React 是没有优化的。

**原生 DOM 渲染**: React 只会在虚拟DOM中修改真实DOM节点，而且修改的次数非常少——这是很棒的React特性，它优化了真实DOM的变化，使React变得更快。



---

##  React中，能否直接将 props 的值复制给 state？

应该避免这种写法：

```js
constructor(props) {
 super(props);
 // 不要这样做
 this.state = { color: props.color };
}
```

因为这样做毫无必要（你可以直接使用 this.props.color），同时还产生了 bug（更新 prop 中的 color 时，并不会影响 state）。

**只有在你刻意忽略 prop 更新的情况下使用。**

此时，应将 prop 重命名为 initialColor 或 defaultColor。必要时，你可以修改它的 key，以强制 **重置** 其内部 state。



----

## 21. react 虚拟dom

虚拟dom是什么？

虚拟 dom 相当于在 js 和真实 dom 中间加了一个缓存，利用 dom diff 算法避免了没有必要的 dom 操作，从而 提高性能。

虚拟DOM（VDOM）它是真实DOM的内存表示,一种编程概念，一种模式。它会和真实的DOM同步，比如通过ReactDOM这种库，这个同步的过程叫做调和(reconcilation)。

虚拟DOM更多是一种模式，不是一种特定的技术。

实现过程

1. 用 JavaScript 对象结构表示 DOM 树的结构
2. 用这个树构建一个真正的 DOM 树，插到文档当中当状态变更的时候，重新构造一棵新的对象树。
3. 用新的树和旧的树进行比较，记录两棵树差异把 2 所记录的差异应用到步骤 1 所构建的真正的 DOM 树上，视图就更新了。



---

##  react 的虚拟dom是怎么实现的？

React 是把真实的 DOM 树转换为 JS 对象树，也就是 Virtual DOM。每次数据更新后，重新计算 VM，并和上一次生成的 VM 树进行对比，对发生变化的部分进行批量更新。除了性能之外，VM 的实现最大的好处在于和其他平台的集成。

比如我们一个真是的 DOM 是这样的

```html
<button class="myButton">
  <span>this is button</span>
</button>
```

那么在转化为 VM 之后就是这样的

```js
{
  type: 'button',
  props: {
  	className: 'myButton',
    children: [{
      type: 'span',
      props: {
        type: 'text'
        children: 'this is button'
      }
    }]
  }
}
```



---

## 22. 虚拟dom和real dom区别 性能差异

因为 VM 并不是真实的操作 DOM，通过 diff 算法可以避免一些不变要的 DOM 操作，从而提高了性能。

减少DOM的操作：虚拟dom可以将多次操作合并为一次操作，减少DOM操作的次数

| **Real DOM**                   | **Virtual DOM**               |
| :----------------------------- | :---------------------------- |
| 1. 更新缓慢。                  | 1. 更新更快。                 |
| 2. 可以直接更新 HTML。         | 2. 无法直接更新 HTML。        |
| 3. 如果元素更新，则创建新DOM。 | 3.如果元素更新，则更新 JSX 。 |
| 4. DOM操作代价很高。           | 4. DOM 操作非常简单。         |
| 5. 消耗的内存较多。            | 5. 很少的内存消耗。           |



---

## React中的VM 一定会提高性能吗？

不一定，因为 VM 只是通过 diff 算法**避免了一些不需要变更的** DOM 操作，**最终还是要操作 DOM 的**，并且 **diff 的过程也是有成本的**。

对于某些场景，比如都是需要变更 DOM 的操作，因为 VM 还会有额外的 diff 算法的成本在里面，所以 VM 的方式并不会提高性能，甚至比原生 DOM 要慢。

但是正如尤大大说的，这是一个性能 vs 可维护性的取舍。

框架的意义在于为你掩盖底层的 DOM 操作，**让你用更声明式的方式来描述你的目的，从而让你的代码更容易维护。**

没有任何框架可以比纯手动的优化 DOM 操作更快，因为框架的 DOM 操作层需要应对任何上层 API 可能产生的操作，它的实现必须是普适的。

针对任何一个 benchmark，都可以写出比任何框架更快的手动优化，但是那有什么意义呢？在构建一个实际应用的时候，出于可维护性的考虑，不可能在每一个地方都去做手动优化。



---

## 虚拟DOM一定更快吗？

**虚拟DOM／domDiff**

我们常说的虚拟DOM是通过JS对象模拟出来的DOM节点,domDiff是通过特定算法计算出来一次操作所带来的DOM变化。react和vue中都使用了虚拟DOM，我们借着react聊聊虚拟DOM。

react中涉及到虚拟DOM的代码主要分为以下三部分，其中核心是第二步的domDiff算法：

- 把render中的JSX(或者createElement这个API)转化成虚拟DOM
- **状态或属性改变后重新计算虚拟DOM**并生成一个补丁对象(domDiff)
- 通过这个补丁对象更新视图中的DOM节点

**虚拟DOM不一定更快**

干前端的都知道DOM操作是性能杀手，因为操作DOM会引起页面的回流或者重绘。相比起来，通过多一些预先计算来减少DOM的操作要划算的多。

但是，“使用虚拟DOM会更快”这句话并不一定适用于所有场景。例如：一个页面就有一个按钮，点击一下，数字加一，那肯定是直接操作DOM更快。使用虚拟DOM无非白白增加了计算量和代码量。即使是复杂情况，浏览器也会对我们的DOM操作进行优化，大部分浏览器会根据我们操作的时间和次数进行批量处理，所以直接操作DOM也未必很慢。

那么为什么现在的框架都使用虚拟DOM呢？**因为使用虚拟DOM可以提高代码的性能下限，并极大的优化大量操作DOM时产生的性能损耗。**同时这些框架也保证了，即使在少数虚拟DOM不太给力的场景下，性能也在我们接受的范围内。

而且，我们之所以喜欢react、vue等使用了虚拟DOM框架，不光是因为他们快，还有很多其他更重要的原因。例如react对函数式编程的友好，vue优秀的开发体验等.



---

## 简单介绍下React中的 diff 算法

diff 算法主要**基于三个规律**：

- DOM 节点的跨层级移动的操作特别少，可以忽略不计
- 拥有相同类的两个组件将会生成相似的树形结构，拥有不同类的两个组件将会生成不同的树形结构
- 对于同一层级的一组子节点，可以通过唯一的 id 进行区分

### tree diff

因为上面的三个策略中的第一点， **DOM 节点的跨级操作比较少，那么 diff 算法只会对相同层级的 DOM 节点进行比较**。如果发现节点不存在 那么会将该节点以及其子节点完全删除，不会再继续比较。如果出现了 DOM 节点的跨层级的移动操作，那么会删除该节点以及其所有的子节点，然后在移动后的位置重新创建。

### component diff

如果是同一类型的组件，那么会继续对比 VM 数

如果不是同一类型的组件，那么会将其和其子节点完全替换，不会再进行比对

同一类型的组件，有可能 VM 没有任何的变化，如果可以确定的知道这点，那么就可以节省大量的 diff 时间，所以用户可以设置 shouldComponentUpdate() 来判断是否需要进行 diff 算法。

### element diff

当节点处于同一层级的时候时，有三种操作：INSERT_MAKEUP插入、 MOVE_EXISTING 移动、 REMOVE_NODE 删除

这里 React 有一个优化策略，对于同一层级的同组子节点，添加唯一的 key 进行区分。这样的话，就可以判断出来是否是移动节点。通过 key 发现新旧集合中的节点都是相同的节点，就只需要进行移动操作就可以。





---

##  简述下 React 的事件代理机制？

React **并不会**把所有的处理函数直接绑定在真实的节点上。**而是把所有的事件绑定到结构的最外层，使用一个统一的事件监听器**，这个事件监听器上维持了一个映射来保存所有组件内部的事件监听和处理函数。

当组件挂载或卸载时，只是在这个统一的事件监听器上插入或删除一些对象。

当事件发生时，首先被这个统一的事件监听器处理，然后在映射里找到真正的事件处理函数并调用。

这样做的**优点是解决了兼容性问题，并且简化了事件处理和回收机制**（不需要手动的解绑事件，React 已经在内部处理了）。但是有些事件 React 并没有实现，比如 window 的 resize 事件。



----

## 23. React 中如果绑定事件使用匿名函数有什么影响？

```jsx
class Demo {
  render() {
    return <button onClick={(e) => {
      alert('我点击了按钮')
    }}>
      按钮
    </button>
  }
}
```

这样的写法，因为使用的是匿名函数，所以**组件每次都会认为是一个新的 props**，**不会使用缓存优化，在性能上会有一定的损耗。**



---

## 24. React 的事件代理机制和原生事件绑定混用会有什么问题？

我们在平时的开发中应该尽可能的避免 React 的事件代理机制和原生事件绑定混用。

React 的合成事件层，并没有将事件直接绑定到 DOM 元素上，所以使用 e.stopPropagation() 来阻止原生 DOM 的冒泡的行为是不行的。**阻止 React 事件冒泡的行为只能用于 React 合成事件系统**，但是 **在原生事件中的阻止冒泡行为，却可以阻止 React 合成事件的传播**。



---

## 25. React 的事件代理机制和原生事件绑定有什么区别？

- **事件传播与阻止事件的传播**： React 的合成事件并没有实现事件捕获 **只支持了事件冒泡**。阻止事件传播 React 做了兼容性处理，只需要 e.preventDefault() 即可，原生存在兼容性问题。
- **事件类型**：`React 是 原生事件类型 的一个子集`（React 只是实现了 DOM level3 的事件接口，有些事件 React 并没有实现，比如 window 的 resize 事件。）阻止 React 事件冒泡的行为只能用于 React 合成事件系统，但是 在原生事件中的阻止冒泡行为，却可以阻止 React 合成事件的传播。
- **事件的绑定方式**：原生事件系统中支持多种不同的绑定事件的方式，**React 中只有一种**
- **事件对象**：原生中存在 IE 的兼容性问题，React 做了兼容处理。



---

## 26. React中为什么要给组件设置 key？

在开发过程中，我们需要保证某个元素的 key 在其同级元素中具有唯一性。

在 React Diff 算法中React 会借助元素的 Key 值来判断该元素是新创建的还是被移动而来的元素，从而减少不必要的元素重新渲染。

此外，React 还需要借助 Key 值来判断元素与本地状态的关联关系。



---

## 为什么不能用数组下标来作为react组件中的key？

react 使用diff算法，使用key来做同级比对。如果使用数组下标作为key，有以下情况：

- 在数组头部或中部插入或删除元素： **所有key对应的节点的值发生更改，进行重新渲染。造成性能损耗**
- 而如果使用数组中唯一值来作为key：不管是在何处插入或删除节点，其他key对应的节点的值未发生更改，只需插入或删除操作的数组节点。



---

## 27. React.PureComponent 和 React.Component 有什么区别？

PureComponent 和 Component的区别是：Component需要**手动实现** shouldComponentUpdate，**而 PureComponent 通过浅对比默认实现了 shouldComponentUpdate 方法。**

浅比较(shallowEqual)，即react源码中的一个函数，然后根据下面的方法进行是不是PureComponent的判断，帮我们做了本来应该我们在 shouldComponentUpdate 中做的事情

```js
if (this._compositeType === CompositeTypes.PureClass) {
  shouldUpdate = !shallowEqual(prevProps, nextProps) || ! shallowEqual(inst.state, nextState);
}
```

注意： **浅比较只比较了第一层**，复杂数据结构可能会导致更新问题

总结: PureComponent 不仅会影响本身，而且会影响子组件，**所以 PureComponent 最佳情况是展示组件**



---

## 28. 在 shouldComponentUpdate 或 componentWillUpdate 中使用 setState 会发生什么？

当调用 setState 的时候，实际上会将新的 state 合并到状态更新队列中，并对 partialState 以及 _pendingStateQueue 更新队列进行合并操作。最终通过 enqueueUpdate 执行 state 更新。

如果在 shouldComponentUpdate 或 componentWillUpdate 中使用 setState，**会使得 state 队列（_pendingStateQueue）不为 null**，从而调用 updateComponent 方法，updateComponent 中会继续调用 shouldComponentUpdate 和 componentWillUpdate，**因此造成死循环**。



---

## 29. React 中的 ref 有什么用？

使用 refs 获取。**组件被调用时会新建一个改组件的实例。refs 会指向这个实例**，可以是一个回调函数，回调函数会在组件被挂载后立即执行。

如果把 refs 放到原生 DOM 组件的 input 中，我们就可以通过 **refs 得到 DOM 节点**；如果把 refs 放到 React 组件中，那么我们**获得的就是组件的实例**，因此就可以调用实例的方法（如果想访问该组件的真实 DOM，那么可以用 React.findDOMNode 来找到 DOM 节点，但是不推崇此方法）。

**refs 无法用于无状态组件**，无状态组件挂载时只是方法调用，没有新建实例。在 v16 之后，可以使用 useRef。



---

## React Fiber是什么？

### Fiber 出现的背景

首先要知道的是，JavaScript 引擎和页面渲染引擎两个线程是互斥的，当其中一个线程执行时，另一个线程只能挂起等待。

在这样的机制下，如果 JavaScript 线程长时间地占用了主线程，那么渲染层面的更新就不得不长时间地等待，界面长时间不更新，会导致页面响应度变差，用户可能会感觉到卡顿。

而这正是 React 15 的 Stack Reconciler 所面临的问题，即是 JavaScript 对主线程的超时占用问题。**Stack Reconciler 是一个同步的递归过程，使用的是 JavaScript 引擎自身的函数调用栈，它会一直执行到栈空为止**，所以当 React 在渲染组件时，从开始到渲染完成整个过程是一气呵成的。如果渲染的组件比较庞大，js 执行会占据主线程较长时间，会导致页面响应度变差。

而且所有的任务都是按照先后顺序，没有区分优先级，这样就会导致优先级比较高的任务无法被优先执行。

### Fiber 是什么

Fiber 的中文翻译叫**纤程**，与进程、线程同为程序执行过程，**Fiber 就是比线程还要纤细的一个过程**。纤程意在对渲染过程实现进行更加精细的控制。

从架构角度来看，Fiber 是对 React 核心算法（即**调和过程**）的重写。

从编码角度来看，**Fiber 是 React 内部所定义的一种数据结构**，它是 Fiber 树结构的节点单位，也就是 React 16 新架构下的"虚拟 DOM"。

一个 fiber 就是一个 JavaScript 对象，Fiber 的数据结构如下：

```js
type Fiber = {
  // 用于标记fiber的WorkTag类型，主要表示当前fiber代表的组件类型如FunctionComponent、ClassComponent等
  tag: WorkTag,
  // ReactElement里面的key
  key: null | string,
  // ReactElement.type，调用`createElement`的第一个参数
  elementType: any,
  // The resolved function/class/ associated with this fiber.
  // 表示当前代表的节点类型
  type: any,
  // 表示当前FiberNode对应的element组件实例
  stateNode: any,

  // 指向他在Fiber节点树中的`parent`，用来在处理完这个节点之后向上返回
  return: Fiber | null,
  // 指向自己的第一个子节点
  child: Fiber | null,
  // 指向自己的兄弟结构，兄弟节点的return指向同一个父节点
  sibling: Fiber | null,
  index: number,

  ref: null | (((handle: mixed) => void) & { _stringRef: ?string }) | RefObject,

  // 当前处理过程中的组件props对象
  pendingProps: any,
  // 上一次渲染完成之后的props
  memoizedProps: any,

  // 该Fiber对应的组件产生的Update会存放在这个队列里面
  updateQueue: UpdateQueue<any> | null,

  // 上一次渲染的时候的state
  memoizedState: any,

  // 一个列表，存放这个Fiber依赖的context
  firstContextDependency: ContextDependency<mixed> | null,

  mode: TypeOfMode,

  // Effect
  // 用来记录Side Effect
  effectTag: SideEffectTag,

  // 单链表用来快速查找下一个side effect
  nextEffect: Fiber | null,

  // 子树中第一个side effect
  firstEffect: Fiber | null,
  // 子树中最后一个side effect
  lastEffect: Fiber | null,

  // 代表任务在未来的哪个时间点应该被完成，之后版本改名为 lanes
  expirationTime: ExpirationTime,

  // 快速确定子树中是否有不在等待的变化
  childExpirationTime: ExpirationTime,

  // fiber的版本池，即记录fiber更新过程，便于恢复
  alternate: Fiber | null,
}
```

### Fiber 如何解决问题的

**Fiber 把一个渲染任务分解为多个渲染任务，而不是一次性完成**，把每一个分割得很细的任务视作一个"执行单元"，React 就会检查现在还剩多少时间，如果没有时间就将控制权让出去，故任务会被分散到多个帧里面，**中间可以返回至主进程控制执行其他任务**，最终实现更流畅的用户体验。

即是实现了"增量渲染"，实现了可中断与恢复，恢复后也可以复用之前的中间状态，并给不同的任务赋予不同的优先级，其中每个任务更新单元为 React Element 对应的 Fiber 节点。

### Fiber 实现原理

实现的方式是requestIdleCallback这一 API，但 React 团队 polyfill 了这个 API，使其对比原生的浏览器兼容性更好且拓展了特性。

> window.requestIdleCallback()方法**将在浏览器的空闲时段内调用的函数排队**。这使开发者能够在主事件循环上执行后台和低优先级工作，而不会影响延迟关键事件，如动画和输入响应。函数一般会按先进先调用的顺序执行，然而，如果回调函数指定了执行超时时间 timeout，则有可能为了在超时前执行函数而打乱执行顺序。

requestIdleCallback回调的执行的**前提条件**是当前浏览器处于空闲状态。

即requestIdleCallback的作用是在浏览器一帧的剩余空闲时间内执行优先度相对较低的任务。**首先 React 中任务切割为多个步骤，分批完成。在完成一部分任务之后，将控制权交回给浏览器，让浏览器有时间再进行页面的渲染。等浏览器忙完之后有剩余时间，再继续之前 React 未完成的任务**，是一种**合作式调度**。

简而言之，由浏览器给我们分配**执行时间片**，我们要按照约定在这个时间内执行完毕，并将控制权还给浏览器。

React 16 的Reconciler基于 Fiber 节点实现，被称为 Fiber Reconciler。

作为**静态的数据结构**来说，每个 Fiber 节点对应一个 React element，保存了该组件的类型（函数组件/类组件/原生组件等等）、对应的 DOM 节点等信息。

作为**动态的工作单元**来说，每个 Fiber 节点保存了本次更新中该组件改变的状态、要执行的工作。

每个 Fiber 节点有个对应的 React element，多个 Fiber 节点是如何连接形成树呢？靠如下三个属性：

```js
// 指向父级Fiber节点
this.return = null
// 指向子Fiber节点
this.child = null
// 指向右边第一个兄弟Fiber节点
this.sibling = null
```



---

## 不同版本的 React 都做过哪些优化？

React渲染页面的两个阶段：

- **调度阶段**（reconciliation）：在这个阶段 React 会更新数据生成新的 Virtual DOM，然后通过Diff算法，快速找出需要更新的元素，放到更新队列中去，得到新的更新队列。
- **渲染阶段**（commit）：这个阶段 React 会遍历更新队列，**将其所有的变更一次性更新到DOM上**。

### React 15 架构

React15架构可以分为两层：

- Reconciler（协调器）—— 负责找出变化的组件；
- Renderer（渲染器）—— 负责将变化的组件渲染到页面上；

在React15及以前，Reconciler采用递归的方式创建虚拟DOM，递归过程是**不能中断**的。**如果组件树的层级很深，递归会占用线程很多时间，递归更新时间超过了16ms，用户交互就会卡顿。**

为了解决这个问题，React16将递归的无法中断的更新重构为异步的可中断更新，由于曾经用于递归的虚拟DOM数据结构已经无法满足需要。于是，全新的Fiber架构应运而生。

### React 16 架构

为了解决同步更新长时间占用线程导致页面卡顿的问题，也为了探索运行时优化的更多可能，React开始重构并一直持续至今。重构的目标是实现Concurrent Mode（并发模式）。

从v15到v16，React团队花了两年时间将源码架构中的Stack Reconciler重构为Fiber Reconciler。

React16架构可以分为三层：

- Scheduler（调度器）—— 调度任务的优先级，高优任务优先进入Reconciler；
- Reconciler（协调器）—— 负责找出变化的组件：**更新工作从递归变成了可以中断的循环过程**。Reconciler内部采用了Fiber的架构；
- Renderer（渲染器）—— 负责将变化的组件渲染到页面上。

### React 17 优化

React16的expirationTimes模型只能区分是否>=expirationTimes决定节点是否更新。React17的lanes模型可以选定一个更新区间，并且动态的向区间中增减优先级，可以处理更细粒度的更新。

> Lane用**二进制位**表示任务的优先级，方便优先级的计算（位运算），不同优先级占用不同位置的“赛道”，而且存在批的概念，优先级越低，“赛道”越多。高优先级打断低优先级，新建的任务需要赋予什么优先级等问题都是Lane所要解决的问题。

Concurrent Mode的目的是实现一套可中断/恢复的更新机制。其由两部分组成：

- 一套协程架构：Fiber Reconciler
- 基于协程架构的启发式更新算法：控制协程架构工作方式的算法



----

## Fiber 为什么是 React 性能的一个飞跃？

### 什么是 Fiber

Fiber 的英文含义是“纤维”，它是比线程（Thread）更细的线，比线程（Thread）控制得更精密的执行模型。在广义计算机科学概念中，Fiber 又是一种协作的（Cooperative）编程模型（协程），帮助开发者用一种【既模块化又协作化】的方式来编排代码。

在 React 中，Fiber 就是 React 16 实现的一套新的更新机制，让 React 的更新过程变得可控，避免了之前采用递归需要一气呵成影响性能的做法。

### React Fiber 中的时间分片

把一个耗时长的任务分成很多小片，每一个小片的运行时间很短，虽然总时间依然很长，但是在每个小片执行完之后，都给其他任务一个执行的机会，这样唯一的线程就不会被独占，其他任务依然有运行的机会。

React Fiber 把更新过程碎片化，每执行完一段更新过程，就把控制权交还给 React 负责任务协调的模块，看看有没有其他紧急任务要做，如果没有就继续去更新，如果有紧急任务，那就去做紧急任务。

### Stack Reconciler

**基于栈的 Reconciler**，浏览器引擎会从执行栈的顶端开始执行，执行完毕就弹出当前执行上下文，开始执行下一个函数，直到执行栈被清空才会停止。然后将执行权交还给浏览器。由于 React 将页面视图视作一个个函数执行的结果。每一个页面往往由多个视图组成，这就意味着多个函数的调用。

如果一个页面足够复杂，形成的函数调用栈就会很深。每一次更新，执行栈需要一次性执行完成，中途不能干其他的事儿，只能"一心一意"。结合前面提到的浏览器刷新率，JS 一直执行，浏览器得不到控制权，就不能及时开始下一帧的绘制。**如果这个时间超过 16ms，当页面有动画效果需求时，动画因为浏览器不能及时绘制下一帧，这时动画就会出现卡顿。**不仅如此，因为事件响应代码是在每一帧开始的时候执行，如果不能及时绘制下一帧，事件响应也会延迟。

### Fiber Reconciler

**链表结构**

在 React Fiber 中用链表遍历的方式替代了 React 16 之前的栈递归方案。在 React 16 中使用了大量的链表。

- 使用多向链表的形式替代了原来的树结构；

```html
<div id="A">
	A1
	<div id="B1">
  		B1
  		<div id="C1"></div>
	</div>
	<div id="B2">
  		B2
	</div>
</div>
```



![img](E:\pogject\学习笔记\image\react\2WZ3j1iHExedXJD.png)



- 副作用单链表；



![img](E:\pogject\学习笔记\image\react\ogZiFnkjXtPLOdr.png)



- 状态更新单链表；



![img](E:\pogject\学习笔记\image\react\W4AeV3tJvwqYZD7.png)



链表是一种简单高效的数据结构，它在当前节点中保存着指向下一个节点的指针；遍历的时候，通过操作指针找到下一个元素。



![img](E:\pogject\学习笔记\image\react\uxPC8M13ckrGfWn.png)



链表相比顺序结构数据格式的好处就是：

- 操作更高效，比如顺序调整、删除，只需要改变节点的指针指向就好了。
- 不仅可以根据当前节点找到下一个节点，在多向链表中，还可以找到他的父节点或者兄弟节点。

但链表也不是完美的，缺点就是：

- 比顺序结构数据更占用空间，因为每个节点对象还保存有指向下一个对象的指针。
- 不能自由读取，必须找到他的上一个节点。

**React 用空间换时间**，更高效的操作可以方便根据优先级进行操作。同时可以根据当前节点找到其他节点，在挂起和恢复过程中起到了关键作用。



---

##  React Fiber 是如何实现更新过程可控？

更新过程的可控主要体现在下面几个方面：

- 任务拆分
- 任务挂起、恢复、终止
- 任务具备优先级

### 任务拆分

在 React Fiber 机制中，它采用"化整为零"的思想，将调和阶段（Reconciler）递归遍历 VDOM 这个大任务分成若干小任务，每个任务只负责一个节点的处理。

### 任务挂起、恢复、终止

- workInProgress tree

workInProgress 代表当前正在执行更新的 Fiber 树。在 render 或者 setState 后，会构建一颗 Fiber 树，也就是 workInProgress tree，**这棵树在构建每一个节点的时候会收集当前节点的副作用**，整棵树构建完成后，会形成一条完整的**副作用链**。

- currentFiber tree

currentFiber 表示上次渲染构建的 Filber 树。在每一次更新完成后 workInProgress 会赋值给 currentFiber。在新一轮更新时 workInProgress tree 再重新构建，新 workInProgress 的节点通过 alternate 属性和 currentFiber 的节点建立联系。

在新 workInProgress tree 的创建过程中，会同 currentFiber 的对应节点进行 Diff 比较，收集副作用。**同时也会复用和 currentFiber 对应的节点对象，减少新创建对象带来的开销**。也就是说无论是创建还是更新、挂起、恢复以及终止操作都是发生在 workInProgress tree 创建过程中的。workInProgress tree 构建过程其实就是循环的执行任务和创建下一个任务。

#### 挂起

当第一个小任务完成后，先判断这一帧是否还有空闲时间，没有就挂起下一个任务的执行，记住当前挂起的节点，让出控制权给浏览器执行更高优先级的任务。

#### 恢复

在浏览器渲染完一帧后，判断当前帧是否有剩余时间，**如果有就恢复执行之前挂起的任务**。如果没有任务需要处理，代表调和阶段完成，可以开始进入渲染阶段。

- 如何判断一帧是否有空闲时间的呢？

使用前面提到的 **RIC (RequestIdleCallback)** 浏览器原生 API，React 源码中为了兼容低版本的浏览器，对该方法进行了 Polyfill。

- 恢复执行的时候又是如何知道下一个任务是什么呢？

答案是在前面提到的链表。在 React Fiber 中**每个任务**其实就是在处理一个 FiberNode 对象，然后又生成下一个任务需要处理的 FiberNode。

#### 终止

其实**并不是每次更新都会走到提交阶段**。当在调和过程中触发了新的更新，在执行下一个任务的时候，判断是否有优先级更高的执行任务，如果有就终止原来将要执行的任务，开始新的 workInProgressFiber 树构建过程，开始新的更新流程。**这样可以避免重复更新操作**。这也是在 React 16 以后生命周期函数 componentWillMount **有可能会执行多次**的原因。



![img](E:\pogject\学习笔记\image\react\zDMJxTkSUA7qQbW.png)



### 任务具备优先级

React Fiber 除了通过挂起，恢复和终止来控制更新外，还给每个任务分配了优先级。具体点就是在创建或者更新 FiberNode 的时候，通过算法给每个任务分配一个到期时间（expirationTime）。在每个任务执行的时候除了判断剩余时间，**如果当前处理节点已经过期，那么无论现在是否有空闲时间都必须执行该任务**。过期时间的大小还代表着任务的优先级。

任务在执行过程中顺便收集了每个 FiberNode 的副作用，将有副作用的节点通过 firstEffect、lastEffect、nextEffect 形成一条副作用单链表 A1(TEXT)-B1(TEXT)-C1(TEXT)-C1-C2(TEXT)-C2-B1-B2(TEXT)-B2-A。

其实最终都是为了收集到这条副作用链表，有了它，在接下来的渲染阶段就通过遍历副作用链完成 DOM 更新。这里需要注意，更新真实 DOM 的这个动作是一气呵成的，不能中断，不然会造成视觉上的不连贯（commit）。



---

## React有哪些性能优化的方法？

React 渲染性能优化的三个方向，其实也适用于其他软件开发领域，这三个方向分别是:

- **减少计算的量**。 -> 对应到 React 中就是减少渲染的节点 或者 降低组件渲染的复杂度
- **利用缓存**。-> 对应到 React 中就是如何避免重新渲染，利用函数式编程的 memo 方式来避免组件重新渲染
- **精确重新计算的范围**。 对应到 React 中就是绑定组件和状态关系, 精确判断更新的'时机'和'范围'. 只重新渲染'脏'的组件，或者说降低渲染范围

### 减少渲染的节点/降低渲染计算量(复杂度)

首先从计算的量上下功夫，减少节点渲染的数量或者降低渲染的计算量可以显著的提高组件渲染性能。

**不要在渲染函数中进行不必要的计算**

比如不要在渲染函数(render)中进行数组排序、数据转换、订阅事件、创建事件处理器等等. 渲染函数中不应该放置太多副作用

**减少不必要的嵌套**

有些团队是重度的 styled-components 用户，其实大部分情况下我们都不需要这个玩意，比如纯静态的样式规则，以及需要重度性能优化的场景。除了性能问题，另外一个困扰我们的是它带来的节点嵌套地狱。

所以我们需要理性地选择一些工具，比如使用原生的 CSS，减少 React 运行时的负担.

一般不必要的节点嵌套都是滥用高阶组件/RenderProps 导致的。所以还是那句话‘只有在必要时才使用 xxx’。 有很多种方式来代替高阶组件/RenderProps，例如优先使用 props、React Hooks

**虚拟列表**

虚拟列表是常见的‘长列表'和'复杂组件树'优化方式，它**优化的本质就是减少渲染的节点**。

虚拟列表**只渲染当前视口可见元素**。

虚拟列表常用于以下组件场景:

- 无限滚动列表，grid, 表格，下拉列表，spreadsheets
- 无限切换的日历或轮播图
- 大数据量或无限嵌套的树
- 聊天窗，数据流(feed), 时间轴
- 等等

**惰性渲染**

惰性渲染的初衷本质上和虚表一样，也就是说我们**只在必要时才去渲染对应的节点**。

举个典型的例子，我们常用 Tab 组件，我们没有必要一开始就将所有 Tab 的 panel 都渲染出来，而是等到该 Tab 被激活时才去惰性渲染。

还有很多场景会用到惰性渲染，例如树形选择器，模态弹窗，下拉列表，折叠组件等等。

**选择合适的样式方案**

在样式运行时性能方面大概可以总结为：CSS > 大部分CSS-in-js > inline style



### 避免重新渲染

减少不必要的重新渲染也是 React 组件性能优化的重要方向. 为了避免不必要的组件重新渲染需要在做到两点:

- 保证组件纯粹性。即控制组件的副作用，如果组件有副作用则无法安全地缓存渲染结果
- 通过shouldComponentUpdate生命周期函数来比对 state 和 props, 确定是否要重新渲染。对于函数组件可以使用React.memo包装

另外这些措施也可以帮助你更容易地优化组件重新渲染:

**简化 props**

如果一个组件的 **props 太复杂一般意味着这个组件已经违背了‘单一职责**’，首先应该尝试对组件进行拆解. ② 另外复杂的 props 也会变得难以维护, 比如会影响shallowCompare效率, 还会让组件的变动变得难以预测和调试.

简化的 props 更容易理解, 且可以提高组件缓存的命中率

**不变的事件处理器**

避免使用箭头函数形式的事件处理器, 例如:

```jsx
<ComplexComponent onClick={evt => onClick(evt.id)} otherProps={values} />
```

假设 ComplexComponent 是一个复杂的 PureComponent, 这里使用箭头函数，**其实每次渲染时都会创建一个新的事件处理器**，这会导致 ComplexComponent 始终会被重新渲染.

更好的方式是使用实例方法:

```jsx
class MyComponent extends Component {
  render() {
    <ComplexComponent onClick={this.handleClick} otherProps={values} />;
  }
  handleClick = () => {
    /*...*/
  };
}
```

即使现在使用hooks，我依然会使用useCallback来包装事件处理器，尽量给下级组件暴露一个静态的函数:

```jsx
const handleClick = useCallback(() => {
  /*...*/
}, []);

return <ComplexComponent onClick={handleClick} otherProps={values} />;
```

但是如果useCallback依赖于很多状态，你的useCallback可能会变成这样:

```js
const handleClick = useCallback(() => {
  /*...*/
  // 
}, [foo, bar, baz, bazz, bazzzz]);
```

这种写法实在让人难以接受，这时候谁还管什么函数式非函数式的。我是这样处理的:

```jsx
function useRefProps<T>(props: T) {
  const ref = useRef < T > props;
  // 每次渲染更新props
  useEffect(() => {
    ref.current = props;
  });
}

function MyComp(props) {
  const propsRef = useRefProps(props);

  // 现在handleClick是始终不变的
  const handleClick = useCallback(() => {
    const { foo, bar, baz, bazz, bazzzz } = propsRef.current;
    // do something
  }, []);
}
```

设计更方便处理的 Event Props. 有时候我们会被逼的不得不使用箭头函数来作为事件处理器：

```jsx
<List>
  {list.map(i => (
    <Item key={i.id} onClick={() => handleDelete(i.id)} value={i.value} />
  ))}
</List>
```

上面的 onClick 是一个糟糕的实现，它没有携带任何信息来标识事件来源，所以这里只能使用闭包形式，更好的设计可能是这样的:

```jsx
// onClick传递事件来源信息
const handleDelete = useCallback((id: string) => {
  /*删除操作*/
}, []);

return (
  <List>
    {list.map(i => (
      <Item key={i.id} id={i.id} onClick={handleDelete} value={i.value} />
    ))}
  </List>
);
```

如果是第三方组件或者 DOM 组件呢? 实在不行，看能不能传递data-*属性:

```jsx
const handleDelete = useCallback(event => {
  const id = event.currentTarget.dataset.id;
  /*删除操作*/
}, []);

return (
  <ul>
    {list.map(i => (
      <li key={i.id} data-id={i.id} onClick={handleDelete} value={i.value} />
    ))}
  </ul>
);
```

**不可变数据**

不可变数据可以让状态变得可预测，也让 shouldComponentUpdate '浅比较'变得更可靠和高效。

相关的工具有Immutable.js、Immer、immutability-helper 以及 seamless-immutable。

**简化 state**

不是所有状态都应该放在组件的 state 中. 例如缓存数据。按照我的原则是：如果需要组件响应它的变动, 或者需要渲染到视图中的数据才应该放到 state 中。这样可以避免不必要的数据变动导致组件重新渲染.

**使用 recompose 精细化比对**

尽管 hooks 出来后，recompose 宣称不再更新了，但还是不影响我们使用 recompose 来控制shouldComponentUpdate方法, 比如它提供了以下方法来精细控制应该比较哪些 props:

```js
 /* 相当于React.memo */
 pure()
 /* 自定义比较 */
 shouldUpdate(test: (props: Object, nextProps: Object) => boolean): HigherOrderComponent
 /* 只比较指定key */
 onlyUpdateForKeys( propKeys: Array<string>): HigherOrderComponent
```

其实还可以再扩展一下，比如omitUpdateForKeys忽略比对某些 key.



### 精细化渲染

所谓精细化渲染指的是只有一个数据来源导致组件重新渲染, 比如说 A 只依赖于 a 数据，那么只有在 a 数据变动时才渲染 A, 其他状态变化不应该影响组件 A。

Vue 和 Mobx 宣称自己性能好的一部分原因是它们的'响应式系统', 它允许我们定义一些‘响应式数据’，当这些响应数据变动时，依赖这些响应式数据视图就会重新渲染。

**响应式数据的精细化渲染**

大部分情况下，响应式数据可以实现视图精细化的渲染, 但它还是不能避免开发者写出低效的程序. 本质上还是因为组件违背‘单一职责’.

举个例子，现在有一个 MyComponent 组件，依赖于 A、B、C 三个数据源，来构建一个 vdom 树。现在的问题是什么呢？现在只要 A、B、C 任意一个变动，那么 MyComponent 整个就会重新渲染。

更好的做法是让组件的职责更单一，精细化地依赖响应式数据，或者说对响应式数据进行‘隔离’. 如下图, A、B、C 都抽取各自的组件中了，现在 A 变动只会渲染 A 组件本身，而不会影响父组件和 B、C 组件。

对于 Vue 或者 Mobx 来说，一个组件的渲染函数就是一个依赖收集的上下文。上面 List 组件渲染函数内'访问'了所有的列表项数据，那么 Vue 或 Mobx 就会认为你这个组件依赖于所有的列表项，这样就导致，只要任意一个列表项的属性值变动就会重新渲染整个 List 组件。

解决办法也很简单，就是将数据隔离抽取到单一职责的组件中。对于 Vue 或 Mobx 来说，越细粒度的组件，可以收获更高的性能优化效果。

**不要滥用 Context**

其实 Context 的用法和响应式数据正好相反。不少滥用 Context API 的例子, 说到底还是没有处理好‘状态的作用域问题’.

首先要理解 Context API 的更新特点，它是可以穿透React.memo或者shouldComponentUpdate的比对的，也就是说，一旦 Context 的 Value 变动，所有依赖该 Context 的组件会全部 forceUpdate.

这个和 Mobx 和 Vue 的响应式系统不同，Context API 并不能细粒度地检测哪些组件依赖哪些状态，所以说上节提到的‘精细化渲染’组件模式，在 Context 这里就成为了‘反模式’.

----

## 说说React服务端渲染怎么做？原理是什么？

### SSR是什么

服务端渲染（`Server-Side Rendering` ，简称`SSR`），指由服务侧完成页面的 `HTML` 结构拼接的页面处理技术，发送到浏览器，然后为其绑定状态与事件，成为完全可交互页面的过程

其解决的问题主要有两个：

- SEO，由于搜索引擎爬虫抓取工具可以直接查看完全渲染的页面
- 加速首屏加载，解决首屏白屏问题

### 如何实现SSR

在`react`中，实现`SSR`主要有两种形式：

- 手动搭建一个 SSR 框架
- 使用成熟的SSR 框架，如 Next.JS

这里主要以手动搭建一个`SSR`框架进行实现

首先通过`express`启动一个`app.js`文件，用于监听3000端口的请求，当请求根目录时，返回`HTML`，如下：

```js
const express = require('express')
const app = express()
app.get('/', (req,res) => res.send(`
<html>
   <head>
       <title>ssr demo</title>
   </head>
   <body>
       Hello world
   </body>
</html>
`))

app.listen(3000, () => console.log('Exampleapp listening on port 3000!'))
```

然后再服务器中编写`react`代码，在`app.js`中进行应引用

```jsx
import React from 'react'

const Home = () =>{
    return <div>home</div>
}
export default Home
```

为了让服务器能够识别`JSX`，这里需要使用`webpakc`对项目进行打包转换，创建一个配置文件`webpack.server.js`并进行相关配置，如下：

```js
const path = require('path')    //node的path模块
const nodeExternals = require('webpack-node-externals')

module.exports = {
    target:'node',
    mode:'development',           //开发模式
    entry:'./app.js',             //入口
    output: {                     //打包出口
        filename:'bundle.js',     //打包后的文件名
        path:path.resolve(__dirname,'build')    //存放到根目录的build文件夹
    },
    externals: [nodeExternals()],  //保持node中require的引用方式
    module: {
        rules: [{                  //打包规则
           test:   /\.js?$/,       //对所有js文件进行打包
           loader:'babel-loader',  //使用babel-loader进行打包
           exclude: /node_modules/,//不打包node_modules中的js文件
           options: {
               presets: ['react','stage-0',['env', { 
                                  //loader时额外的打包规则,对react,JSX，ES6进行转换
                    targets: {
                        browsers: ['last 2versions']   //对主流浏览器最近两个版本进行兼容
                    }
               }]]
           }
       }]
    }
}
```

接着借助`react-dom`提供了服务端渲染的 `renderToString`方法，负责把`React`组件解析成`html`

```js
import express from 'express'
import React from 'react'//引入React以支持JSX的语法
import { renderToString } from 'react-dom/server'//引入renderToString方法
import Home from'./src/containers/Home'

const app= express()
const content = renderToString(<Home/>)
app.get('/',(req,res) => res.send(`
<html>
   <head>
       <title>ssr demo</title>
   </head>
   <body>
        ${content}
   </body>
</html>
`))

app.listen(3001, () => console.log('Exampleapp listening on port 3001!'))
```

上面的过程中，已经能够成功将组件渲染到了页面上

但是像一些事件处理的方法，是无法在服务端完成，因此需要将组件代码在浏览器中再执行一遍，这种服务器端和客户端共用一套代码的方式就称之为**同构**

**重构**通俗讲就是**一套React代码在服务器上运行一遍，到达浏览器又运行一遍**：

- 服务端渲染**完成页面结构**
- 浏览器端渲染**完成事件绑定**

浏览器实现事件绑定的方式为让浏览器去拉取`JS`文件执行，让`JS`代码来控制，因此需要引入`script`标签

通过`script`标签为页面引入客户端执行的`react`代码，并通过`express`的`static`中间件为`js`文件配置路由，修改如下：

```js
import express from 'express'
import React from 'react'//引入React以支持JSX的语法
import { renderToString } from'react-dom/server'//引入renderToString方法
import Home from './src/containers/Home'
 
const app = express()
app.use(express.static('public'));
//使用express提供的static中间件,中间件会将所有静态文件的路由指向public文件夹
 const content = renderToString(<Home/>)
 
app.get('/',(req,res)=>res.send(`
<html>
   <head>
       <title>ssr demo</title>
   </head>
   <body>
        ${content}
   <script src="/index.js"></script>
   </body>
</html>
`))

 app.listen(3001, () =>console.log('Example app listening on port 3001!'))
```

然后再客户端执行以下`react`代码，新建`webpack.client.js`作为客户端React代码的`webpack`配置文件如下：

```js
const path = require('path')                    //node的path模块

module.exports = {
    mode:'development',                         //开发模式
    entry:'./src/client/index.js',              //入口
    output: {                                   //打包出口
        filename:'index.js',                    //打包后的文件名
        path:path.resolve(__dirname,'public')   //存放到根目录的build文件夹
    },
    module: {
        rules: [{                               //打包规则
           test:   /\.js?$/,                    //对所有js文件进行打包
           loader:'babel-loader',               //使用babel-loader进行打包
           exclude: /node_modules/,             //不打包node_modules中的js文件
           options: {
               presets: ['react','stage-0',['env', {     
                    //loader时额外的打包规则,这里对react,JSX进行转换
                    targets: {
                        browsers: ['last 2versions']   //对主流浏览器最近两个版本进行兼容
                    }
               }]]
           }
       }]
    }
}
```

这种方法就能够简单实现首页的`react`服务端渲染，过程对应如下图：



![img](E:\pogject\学习笔记\image\react\a2894970-f3f7-11eb-85f6-6fac77c0c9b3.png)



在做完初始渲染的时候，一个应用会存在路由的情况，配置信息如下：

```jsx
import React from 'react'                   //引入React以支持JSX
import { Route } from 'react-router-dom'    //引入路由
import Home from './containers/Home'        //引入Home组件

export default (
    <div>
        <Route path="/" exact component={Home}></Route>
    </div>
)
```

然后可以通过`index.js`引用路由信息，如下：

```jsx
import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter } from'react-router-dom'
import Router from'../Routers'

const App= () => {
    return (
        <BrowserRouter>
           {Router}
        </BrowserRouter>
    )
}

ReactDom.hydrate(<App/>, document.getElementById('root'))
```

这时候控制台会存在报错信息，原因在于每个`Route`组件外面包裹着一层`div`，但服务端返回的代码中并没有这个`div`

解决方法只需要将路由信息在服务端执行一遍，使用使用`StaticRouter`来替代`BrowserRouter`，通过`context`进行参数传递

```js
import express from 'express'
import React from 'react'//引入React以支持JSX的语法
import { renderToString } from 'react-dom/server'//引入renderToString方法
import { StaticRouter } from 'react-router-dom'
import Router from '../Routers'
 
const app = express()
app.use(express.static('public'));
//使用express提供的static中间件,中间件会将所有静态文件的路由指向public文件夹

app.get('/',(req,res)=>{
    const content  = renderToString((
        //传入当前path
        //context为必填参数,用于服务端渲染参数传递
        <StaticRouter location={req.path} context={{}}>
           {Router}
        </StaticRouter>
    ))
    res.send(`
   <html>
       <head>
           <title>ssr demo</title>
       </head>
       <body>
       <div id="root">${content}</div>
       <script src="/index.js"></script>
       </body>
   </html>
    `)
})


app.listen(3001, () => console.log('Exampleapp listening on port 3001!'))
```

这样也就完成了路由的服务端渲染

### react SSR原理

整体`react`服务端渲染原理并不复杂，具体如下：

`node server` 接收客户端请求，得到当前的请求`url` 路径，然后在已有的路由表内查找到对应的组件，拿到需要请求的数据，将数据作为 `props`、`context`或者`store` 形式传入组件

然后基于 `react` 内置的服务端渲染方法 `renderToString()`把组件渲染为 `html`字符串在把最终的 `html `进行输出前需要将数据注入到浏览器端

浏览器开始进行渲染和节点对比，然后执行完成组件内事件绑定和一些交互，浏览器重用了服务端输出的 `html` 节点，整个流程结束



---

##  说说你在React项目是如何捕获错误的？







----

# react-router

----

## 1. 什么是React 路由

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

   虽然`<div>`用于封装 Router 中的多个路由，当你想要仅显示要在多个定义的路线中呈现的单个路线时，可以使用 “switch” 关键字。使用时，`<switch>`标记会按顺序将已定义的 URL 与已定义的路由进行匹配。找到第一个匹配项后，它将渲染指定的路径。从而绕过其它路线。

4. React Router 的优点

-    就像 React 基于组件一样，在 React Router v4 中，API 是 'All About Components'。可以将 Router 可视化为单个根组件（），其中我们将特定的子路由（）包起来。

-    无需手动设置历史值：在 React Router v4 中，我们要做的就是将路由包装在 组件中。

-    包是分开的：共有三个包，分别用于 Web、Native 和 Core。这使我们应用更加紧凑。基于类似的编码风格很容易进行切换。




---

## react-router 里的 `<Link>` 标签和 `<a> `标签有什么区别？

对比 `<a> `标签, Link 避免了不必要的重新渲染。

react-router是伴随着react框架出现的路由系统，它也是公认的一种优秀的路由解决方案。在使用react-router时候，我们常常会使用其自带的路径跳转组件Link,通过实现跳转；

react-router 接管了其默认的链接跳转行为，区别去传统的页面跳转，Link 的 **“跳转”** 行为**只会触发相匹配的对应的页面内容更新**，而不会刷新整个页面。

Link 跳转做了三件事情：

- 有onclick那就执行onclick
- click的时候阻止a标签默认事件
- 根据跳转 href，用 history 跳转，此时只是链接变了，并没有刷新页面

**而 a 标签就是普通的超链接了**，用于从当前页面跳转到href指向的另一个页面（**非锚点情况**）。



----

##  React中的路由懒加载是什么？原理是什么？

### React.lazy 是什么

随着前端应用体积的扩大，资源加载的优化是我们必须要面对的问题，动态代码加载就是其中的一个方案。

webpack 提供了符合 ECMAScript 提案 的 import() 语法 ，让我们来实现动态地加载模块（注：require.ensure 与 import() 均为 webpack 提供的代码动态加载方案，在 webpack 2.x 中，require.ensure 已被 import 取代）。

在 React 16.6 版本中，新增了 React.lazy 函数，它能让你像渲染常规组件一样处理动态引入的组件，配合 webpack 的 Code Splitting ，只有当组件被加载，对应的资源才会导入 ，从而达到懒加载的效果。

### 使用 React.lazy

在实际的使用中，首先是引入组件方式的变化：

```js
// 不使用 React.lazy
import OtherComponent from './OtherComponent';

// 使用 React.lazy
const OtherComponent = React.lazy(() => import('./OtherComponent'))
```

React.lazy 接受一个函数作为参数，这个函数需要调用 import() 。它需要返回一个 Promise，该 Promise 需要 resolve 一个 defalut export 的 React 组件。

React.lazy 方法返回的是一个 lazy 组件的对象，类型是 react.lazy，并且 lazy 组件具有 _status 属性，与 Promise 类似它具有 Pending、Resolved、Rejected 三个状态，分别代表组件的加载中、已加载、和加载失败三种状态。

需要注意的一点是，**React.lazy 需要配合 Suspense 组件一起使用**，在 Suspense 组件中渲染 React.lazy 异步加载的组件。如果单独使用 React.lazy，React 会给出错误提示。

```jsx
import React, {Suspense} from 'react'

const HelloWorld = React.lazy(() => import("../components/HelloWorld"));

export default function News() {
	return (
		<div>
			<Suspense fallback={<h2>Loading...</h2>}>
				<HelloWorld></HelloWorld>
			</Suspense>
			<ul>
				<li>news001</li>
				<li>news002</li>
				<li>news003</li>
			</ul>
		</div>
		
	)
}

```

如上代码中，通过 import()、React.lazy 和 Suspense 共同一起实现了 React 的懒加载，也就是我们常说了运行时动态加载，即 OtherComponent 组件文件被拆分打包为一个新的包（bundle）文件，并且只会在 OtherComponent 组件渲染时，才会被下载到本地。

**Suspense 可以包裹多个动态加载的组件**，这也意味着在加载这两个组件的时候只会有一个 loading 层，因为 loading 的实现实际是 Suspense 这个父组件去完成的，当所有的子组件对象都 resolve 后，再去替换所有子组件。这样也就避免了出现多个 loading 的体验问题。所以 loading 一般不会针对某个子组件，而是针对整体的父组件做 loading 处理。



### 实现原理

#### Webpack 动态加载

上面使用了 import() 语法，webpack 检测到这种语法会自动代码分割。使用这种动态导入语法代替以前的静态引入，可以让组件在渲染的时候，再去加载组件对应的资源，这个异步加载流程的实现机制是怎么样呢？

```js
function import(url) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    const tempGlobal = "__tempModuleLoadingVariable" + Math.random().toString(32).substring(2);
    script.type = "module";
    script.textContent = `import * as m from "${url}"; window.${tempGlobal} = m;`;

    script.onload = () => {
      resolve(window[tempGlobal]);
      delete window[tempGlobal];
      script.remove();
    };

    script.onerror = () => {
      reject(new Error("Failed to load module script with URL " + url));
      delete window[tempGlobal];
      script.remove();
    };

    document.documentElement.appendChild(script);
  });
}
```

结合上面的代码来看，webpack 通过创建 script 标签来实现动态加载的，找出依赖对应的 chunk 信息，然后生成 script 标签来动态加载 chunk，每个 chunk 都有对应的状态：未加载 、 加载中、已加载 。

我们可以运行 React.lazy 代码来具体看看 network 的变化，为了方便辨认 chunk。我们可以在 import 里面加入 webpackChunckName 的注释，来指定包文件名称。



#### Suspense 组件

Suspense 内部主要通过捕获组件的状态去判断如何加载，上面我们提到 React.lazy 创建的动态加载组件具有 Pending、Resolved、Rejected 三种状态，当这个组件的状态为 Pending 时显示的是 Suspense 中 fallback 的内容，**只有状态变为 resolve 后才显示组件**。



#### Error Boundaries 处理资源加载失败场景

如果遇到网络问题或是组件内部错误，页面的动态资源可能会加载失败，为了优雅降级，可以使用 Error Boundaries 来解决这个问题。

Error Boundaries 是一种组件，如果你在组件中定义了 static getDerivedStateFromError() 或 componentDidCatch() 生命周期函数，它就会成为一个 Error Boundaries 的组件。

它的用法也非常的简单，可以直接当作一个组件去使用，如下：

```html
<ErrorBoundary>
  <MyWidget />
</ErrorBoundary>
```

**总结**

React.lazy() 和 React.Suspense 的提出为现代 React 应用的性能优化和工程化提供了便捷之路。 React.lazy 可以让我们像渲染常规组件一样处理动态引入的组件，结合 Suspense 可以更优雅地展现组件懒加载的过渡动画以及处理加载异常的场景。



----

# redux

----

## 1. redux的原理

**Redux：**Redux 是当今最热门的前端开发库之一。它是 JavaScript 程序的可预测状态容器，用于整个应用的状态管理。使用 Redux 开发的应用易于测试，可以在不同环境中运行，并显示一致的行为。



### 数据如何通过 Redux 流动？

![redux原理图](E:\pogject\学习笔记\image\react\redux原理图.png)

1. 首先，用户（通过View）发出Action，发出方式就用到了dispatch方法。
2. 然后，Store自动调用Reducer，并且传入两个参数：当前State和收到的Action，Reducer会返回新的State
3. State一旦有变化，Store就会调用监听函数，来更新View。



### Redux遵循的三个原则是什么？

1. **单一事实来源**：整个应用的状态存储在单个 store 中的对象/状态树里。因此所有组件的状态都存储在 Store 中，并且它们从 Store 本身接收更新。单一状态树可以更容易地跟踪随时间的变化，并调试或检查应用程序。
2. **状态是只读的**：改变状态的唯一方法是去触发一个动作。动作是描述变化的普通 JS 对象。就像 state 是数据的最小表示一样，该操作是对数据更改的最小表示。
3. **使用纯函数进行更改**：为了指定状态树如何通过操作进行转换，你需要纯函数。纯函数是那些返回值仅取决于其参数值的函数。



### Redux 由以下组件组成

1. **Action** – 这是一个用来描述发生了什么事情的对象。
2. **Reducer** – 这是一个确定状态将如何变化的地方。
3. **Store** – 整个程序的状态/对象树保存在Store中。
4. **View** – 只显示 Store 提供的数据。

**如何在 Redux 中定义 Action？**

React 中的 Action 必须具有 type 属性，该属性指示正在执行的 ACTION 的类型。**必须将它们定义为字符串常量，并且还可以向其添加更多的属性**。在 Redux 中，action 被名为 Action Creators 的函数所创建。以下是 Action 和Action Creator 的示例：

```js
function addTodo(text) {
    return {
        type: ADD_TODO,    
         text
    }
}
```

**解释 Reducer 的作用**

**Reducers 是纯函数**，它规定应用程序的状态怎样因响应 ACTION 而改变。Reducers 通过接受先前的状态和 action 来工作，然后它返回一个新的状态。它根据操作的类型确定需要执行哪种更新，然后返回新的值。如果不需要完成任务，它会返回原来的状态。

**Store 在 Redux 中的意义是什么？**

Store 是一个 JavaScript 对象，它可以保存程序的状态，并提供一些方法来访问状态、调度操作和注册侦听器。应用程序的整个状态/对象树保存在单一存储中。因此，Redux 非常简单且是可预测的。我们可以将中间件传递到 store 来处理数据，并记录改变存储状态的各种操作。所有操作都通过 reducer 返回一个新状态。

**Redux 有哪些优点？**

- **结果的可预测性** - 由于总是存在一个真实来源，即 store ，因此不存在如何将当前状态与动作和应用的其他部分同步的问题。
- **可维护性** - 代码变得更容易维护，具有可预测的结果和严格的结构。
- **服务器端渲染** - 你只需将服务器上创建的 store 传到客户端即可。这对初始渲染非常有用，并且可以优化应用性能，从而提供更好的用户体验。
- **开发人员工具** - 从操作到状态更改，开发人员可以实时跟踪应用中发生的所有事情。
- 社区和生态系统 - Redux 背后有一个巨大的社区，这使得它更加迷人。一个由才华横溢的人组成的大型社区为库的改进做出了贡献，并开发了各种应用。
- 易于测试 - Redux 的代码主要是小巧、纯粹和独立的功能。这使代码可测试且独立。
- 组织 - Redux 准确地说明了代码的组织方式，这使得代码在团队使用时更加一致和简单。

---

## 2. redux-saga 和 mobx 的比较

**状态管理**

- redux-sage 是 redux 的一个异步处理的中间件。
- mobx 是数据管理库，和 redux 一样。

**设计思想**

- redux-sage 属于 flux 体系， 函数式编程思想。
- mobx 不属于 flux 体系，面向对象编程和响应式编程。

**主要特点**

- redux-sage 因为是中间件，更关注异步处理的，通过 Generator 函数来将异步变为同步，使代码可读性高，结构清晰。action 也不是 action creator 而是 pure action，
- 在 Generator 函数中通过 call 或者 put 方法直接声明式调用，并自带一些方法，如 takeEvery，takeLast，race等，控制多个异步操作，让多个异步更简单。
- mobx 是更简单更方便更灵活的处理数据。 Store 是包含了 state 和 action。state 包装成一个可被观察的对象， action 可以直接修改 state，之后通过 Computed values 将依赖 state 的计算属性更新 ，之后触发 Reactions 响应依赖 state 的变更，输出相应的副作用 ，但不生成新的 state。

**数据可变性**

- redux-sage 强调 state 不可变，不能直接操作 state，通过 action 和 reducer 在原来的 state 的基础上返回一个新的 state 达到改变 state 的目的。
- mobx 直接在方法中更改 state，同时所有使用的 state 都发生变化，不生成新的 state。

**写法难易度**

- redux-sage 比 redux 在 action 和 reducer 上要简单一些。需要用 dispatch 触发 state 的改变，需要 mapStateToProps 订阅 state。
- mobx 在非严格模式下不用 action 和 reducer，在严格模式下需要在 action 中修改 state，并且自动触发相关依赖的更新。

**使用场景**

- redux-sage 很好的解决了 redux 关于异步处理时的复杂度和代码冗余的问题，数据流向比较好追踪。但是 redux 的学习成本比 较高，代码比较冗余，不是特别需要状态管理，最好用别的方式代替。
- mobx 学习成本低，能快速上手，代码比较简洁。但是可能因为代码编写的原因和数据更新时相对黑盒，导致数据流向不利于追踪。



---

## 3. redux异步中间件之间的优劣?

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











----

# Hooks

---

## React Hooks带来了什么便利？

在没有 hooks 之前，我们使用函数定义的组件中，不能使用 React 的 state、各种生命周期钩子类组件的特性。在 React 16.8 之后，推出了新功能： Hooks，通过 hooks 我们可以再函数定义的组件中使用类组件的特性。

好处:

- 跨组件复用: 其实 render props / HOC 也是为了复用，相比于它们，Hooks 作为官方的底层 API，最为轻量，而且改造成本小，不会影响原来的组件层次结构和传说中的嵌套地狱；
- 相比而言，类组件的实现更为复杂
  - 不同的生命周期会使逻辑变得分散且混乱，不易维护和管理；
  - 时刻需要关注this的指向问题；
  - 代码复用代价高，高阶组件的使用经常会使整个组件树变得臃肿；
- 状态与 UI 隔离: 正是由于 Hooks 的特性，状态逻辑会变成更小的粒度，并且极容易被抽象成一个自定义 Hooks，组件中的状态和 UI 变得更为清晰和隔离。

**注意**:

- 避免在 循环/条件判断/嵌套函数 中调用 hooks，保证调用顺序的稳定；
- 不能在useEffect中使用useState，React 会报错提示；
- 类组件不会被替换或废弃，不需要强制改造类组件，两种方式能并存





---

##  hooks的优缺点

### **优点**

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



### **缺点**

**部分代码从主动式变成响应式**

写函数组件时，你不得不改变一些写法习惯。你必须把深入理解useEffect和useCallback这些api的第二个参数的作用。其次，还有下面几点：

1. useEffect的依赖参数并不好写，你需要花时间去判断该把什么变量加入到依赖数组，幸运的是eslint-plugin-react-hooks很多场景可以帮你解决这点，但有时得靠你自己加以判断
2. useEffect很容易出错，它是响应式的，当某个依赖项变化时它才会被调用。有时，useEffect会发生比你预期更多的调用次数。你必须去理解它的调用时机、调用时的状态老旧问题，这不直观，也难以维护，这点在团队协作中很明显，你的队友有时会难以理解你useEffect的触发时机以及其作用。

**状态不同步**

不好用的useEffect，

这绝对可以成为摒弃react hooks的理由。函数的运行是独立的，每个函数都有一份独立的作用域。当我们处理复杂逻辑的时候，经常会碰到“引用不是最新”的问题。



---

## 列举几个常见的 Hook?

- **状态钩子 (useState)**: 用于定义组件的 State，类似类定义中 this.state 的功能
- **生命周期钩子 (useEffect**): 类定义中有许多生命周期函数，而在 React Hooks 中也提供了一个相应的函数 (useEffect)，这里可以看做componentDidMount、componentDidUpdate和componentWillUnmount的结合。
- **useContext**: 获取 context 对象
- **useCallback**: 缓存回调函数，避免传入的回调每次都是新的函数实例而导致依赖组件重新渲染，具有性能优化的效果；
- **useMemo**: 用于缓存传入的 props，避免依赖的组件每次都重新渲染；
- **useRef**: 获取组件的真实节点；



---

##  使用React Hooks有什么优势？

hooks 是react 16.8 引入的特性，他允许你在不写class的情况下操作state 和react的其他特性。

React Hooks **要解决的问题是状态共享**，是继 render-props 和 higher-order components 之后的第三种状态共享方案，不会产生 JSX 嵌套地狱问题。

这个状态指的是状态逻辑，所以称为**状态逻辑复用**会更恰当，因为**只共享数据处理逻辑**，**不会**共享数据本身。



---

##  React Hooks当中的useEffect是如何区分生命周期钩子的

useEffect可以看成是 `componentDidMount`，`componentDidUpdate` 和 `componentWillUnmount` 三者的结合。

useEffect(callback, [source])接收两个参数，调用方式如下：

```js
useEffect(() => {
   console.log('mounted');
   
   return () => {
       console.log('willUnmount');
   }
 }, [source]);
```

生命周期函数的调用主要是通过第二个参数`[source]`来进行控制，有如下几种情况：

- [source]`参数不传`时，则每次都会优先调用上次保存的函数中返回的那个函数，然后再调用外部那个函数；
- [source]`参数传[]`时，则外部的函数只会在初始化时调用一次，返回的那个函数也只会最终在组件卸载时调用一次；
- [source]`参数有值`时，则只会监听到数组中的值发生变化后才优先调用返回的那个函数，再调用外部的函数。



----

