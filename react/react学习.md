# React介绍

React 是一个声明式，高效且灵活的用于**构建用户界面**的 JavaScript 库。使用 React 可以将一些简短、独立的代码片段组合成复杂的 UI 界面，这些代码片段被称作“组件”。

- React 是一个用于**动态构建用户界面**的 JAVASCRIPT 库(只关注于视图)。
- React 主要用于构建 UI，很多人认为 React 是 MVC 中的 V（视图）。
- React 起源于 Facebook 的内部项目，用来架设 Instagram 的网站，并于 2013 年 5 月开源。
- React 拥有较高的性能，代码逻辑非常简单，越来越多的人已开始关注和使用它。

## 为什么学习React

1. 原生JavaScript操作DOM繁琐、效率低（DOM-API操作UI)
2. 使用Javascript直接操作DOM，浏览器会进行大量的重绘重排
3. 原生JavaScript没有组件化编码方案，代码复用率低

## React 特点

- **1.声明式设计** −React采用声明范式，可以轻松描述应用。（声明式编码）
- **2.高效** −React通过对DOM的模拟，使用虚拟DOM+优秀的Diff算法，最大限度地减少与真实DOM的交互。
- **3.灵活** −React可以与已知的库或框架很好地配合。
- **4.JSX** − JSX 是 JavaScript 语法的扩展。React 开发不一定使用 JSX ，但我们建议使用它。
- **5.组件** − 通过 React 构建组件，使得代码更加容易得到复用，能够很好的应用在大项目的开发中。
- **6.单向响应的数据流** − React 实现了单向响应的数据流，从而减少了重复代码，这也是它为什么比传统数据绑定更简单。
- 在React Native中可以使用React语法进行移动端开发

##  React高效的原因

1. 使用虚拟(virtual)DOM, 不总是直接操作页面真实DOM。
2. DOM Diffing算法, 最小化页面重绘。

## React 第一个实例

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<title>Hello React!</title>
<script src="https://cdn.staticfile.org/react/16.4.0/umd/react.development.js"></script>
<script src="https://cdn.staticfile.org/react-dom/16.4.0/umd/react-dom.development.js"></script>
<script src="https://cdn.staticfile.org/babel-standalone/6.26.0/babel.min.js"></script>
</head>
<body>
 
<div id="example"></div>
<script type="text/babel">
ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.getElementById('example')
);
</script>
 
</body>
</html>
```

实例中我们引入了三个库： react.development.min.js 、react-dom.development.min.js 和 babel.min.js：

- **react.min.js** - React 的核心库
- **react-dom.min.js** - 提供与 DOM 相关的功能
- **babel.min.js** - Babel 可以将 ES6 代码转为 ES5 代码，这样我们就能在目前不支持 ES6 浏览器上执行 React 代码。Babel 内嵌了对 JSX 的支持。通过将 Babel 和 babel-sublime 包（package）一同使用可以让源码的语法渲染上升到一个全新的水平。

以上代码将一个 h1 标题，插入 id="example" 节点中。

> **注意：**
>
> 如果我们需要使用 JSX，则 <script> 标签的 type 属性需要设置为 text/babel。

或者使用 create-react-app 工具创建的 react 开发环境：

```js
import React from "react";
import ReactDOM from "react-dom";

function Hello(props) {
  return <h1>Hello World!</h1>;
}

ReactDOM.render(<Hello />, document.getElementById("root"));
```

----

# React 安装

React 可以直接下载使用，下载包中也提供了很多学习的实例。

教程使用了 React 的版本为 16.4.0，可以在官网 https://reactjs.org/ 下载最新版。

你也可以直接使用 Staticfile CDN 的 React CDN 库，地址如下：

```html
<script src="https://cdn.staticfile.org/react/16.4.0/umd/react.development.js"></script> 
<script src="https://cdn.staticfile.org/react-dom/16.4.0/umd/react-dom.development.js"></script> <!-- 生产环境中不建议使用 --> 
<script src="https://cdn.staticfile.org/babel-standalone/6.26.0/babel.min.js"></script>
```

官方提供的 CDN 地址：

```html
<script src="https://unpkg.com/react@16/umd/react.development.js"></script> 
<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script> <!-- 生产环境中不建议使用 --> 
<script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>
```

**注意:** 在浏览器中使用 Babel 来编译 JSX 效率是非常低的。

## 相关js库

1. react.js：React核心库。
2. react-dom.js：提供操作DOM的react扩展库。
3.  babel.min.js：解析JSX语法代码转为JS代码的库。

## 通过 npm 使用 React

### 使用 create-react-app 快速构建 React 开发环境

create-react-app 是来自于 Facebook，通过该命令我们无需配置就能快速构建 React 开发环境。

create-react-app 自动创建的项目是基于 Webpack + ES6 。

执行以下命令创建项目：

```bash
$ cnpm install -g create-react-app
$ create-react-app my-app
$ cd my-app/
$ npm start
```

在浏览器中打开 **http://localhost:3000/** ，结果如下图所示：

### src/App.js

```react
import logo from './logo.svg';
import './App.css';

import React, {Component} from 'react';


class App extends Component {
  render(){
    return (
      <div className="App">
        <div>
          <h3>Hello World</h3>
          <h4>{ this.props.date.toLocaleTimeString()}</h4>
        </div>
      </div>
      
    );
  }
}

export default App;

```

src/index.js 是一个入口文件，我们可以尝试直接修改 src/index.js 文件代码：

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function tick(){
  ReactDOM.render(
    <React.StrictMode>
      <App date={new Date()}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

setInterval(tick,1000);
```

---

# React的基本使用

## 基本

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>React</title>
	<!-- 引入react核心库 -->
	<script src="./js/react.development.js"></script>
	<!-- 引入react-dom，用于支持react操作DOM -->
	<script src="./js/react-dom.development.js"></script>
	<!-- 引入babel，用于将jsx转为js -->
	<script src="./js/babel.min.js"></script>
</head>
<body>
	<!-- 准备好一个容器 -->
	<div id="test">
	</div>

	<!-- 此处一定要写babel -->
	<script type="text/babel">
		// 创建虚拟DOM
		const VDOM = <h1>Hello,React</h1>;  /* 此处一定不要写引号，因为不是字符串 */

		// 渲染虚拟DOM到页面
		ReactDOM.render(VDOM, document.getElementById("test"));
	</script>

</body>
</html>
```

## 创建虚拟DOM的两种方式

1.  纯JS方式(一般不用)
2.  JSX方式

###  纯JS方式(一般不用)

React]()提供了一些API来创建一种 “特别” 的一般js对象

```js
const VDOM = React.createElement('xx',{id:'xx'},'xx')
```

1. 上面创建的就是一个简单的虚拟DOM对象
2. 虚拟DOM对象最终都会被React转换为真实的DOM
3. 我们编码时基本只需要操作react的虚拟DOM相关数据, react会转换为真实DOM变化而更新界。

```js
		// 创建虚拟DOM
		const VDOM = React.createElement("h1", {id: "title"}, React.createElement("span", {}, "Hello React"));
		// 渲染虚拟DOM到页面
		ReactDOM.render(VDOM, document.getElementById("test"));
```

### JSX方式



```jsx
		// 创建虚拟DOM
		const VDOM = (
			<h1 id="title">
				<span>Hello,React</span>
			</h1>
		);  //此处一定不要写引号，因为不是字符串
		// 渲染虚拟DOM到页面
		ReactDOM.render(VDOM, document.getElementById("test"));
```



## 虚拟DOM与真实DOM

```jsx
		// 创建虚拟DOM
		const VDOM = (
			<h1 id="title">
				<span>Hello,React</span>
			</h1>
		);
		// 渲染虚拟DOM到页面
		ReactDOM.render(VDOM, document.getElementById("test"));
		
		//虚拟DOM
		console.log(VDOM); 
		// {$$typeof: Symbol(react.element), type: 'h1', key: null, ref: null, props: {…}, …}
		
		//真实DOM
		let tDOM = document.getElementById("demo");
		console.log(tDOM);
		// <div id="demo"></div>

		console.log(typeof VDOM);  //object
		console.log(VDOM instanceof Object);  //true
```

关于虚拟DOM：
	1.本质是Object类型的对象（一般对象）

​	2.虚拟DOM比较“轻”，真实DOM比较“重”，因为虚拟DOM是React内部在用，无需真实DOM上那么多的属性。

​	3.虚拟DOM最终会被React转化为真实DOM，呈现在页面上。





----

# React 元素渲染





元素是构成 React 应用的最小单位，它用于描述屏幕上输出的内容。

```jsx
const element = <h1>Hello, world!</h1>;
```

与浏览器的 DOM 元素不同，**React 当中的元素事实上是普通的对象**，React DOM 可以确保 浏览器 DOM 的数据内容与 React 元素保持一致。

### 将元素渲染到 DOM 中

首先我们在一个 HTML 页面中添加一个 **id="example"** 的 **<div>**:

```html
<div id="example"></div>
```

在此 div 中的所有内容都将由 React DOM 来管理，所以我们**将其称为 "根" DOM 节点**。

我们**用 React 开发应用时一般只会定义一个根节点**。但如果你是在一个已有的项目当中引入 React 的话，你可能会需要在不同的部分单独定义 React 根节点。

要将React元素渲染到根DOM节点中，我们通过把它们都传递给 **ReactDOM.render()** 的方法来将其渲染到页面上：

```jsx
const element = <h1>Hello, world!</h1>;
ReactDOM.render(
    element,
    document.getElementById('example')
);
```

### 更新元素渲染

**React 元素都是不可变的**。当元素被创建之后，你是无法改变其内容或属性的。

目前更新界面的**唯一办法是创建一个新的元素**，然后将它传入 ReactDOM.render() 方法：

```react
function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>现在是 {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(
    element,
    document.getElementById('example')
  );
}
 
setInterval(tick, 1000);
```

以上实例通过 setInterval() 方法，每秒钟调用一次 ReactDOM.render()。

我们可以将要展示的部分封装起来，以下实例用一个函数来表示：

```react
function Clock(props) {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>现在是 {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}
 
function tick() {
  ReactDOM.render(
    <Clock date={new Date()} />,
    document.getElementById('example')
  );
}
 
setInterval(tick, 1000);
```

除了函数外我们还可以创建一个 React.Component 的 ES6 类，该类封装了要展示的元素，需要注意的是在 render() 方法中，需要使用 **this.props** 替换 **props**：

```react
class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>现在是 {this.props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
 
function tick() {
  ReactDOM.render(
    <Clock date={new Date()} />,
    document.getElementById('example')
  );
}
 
setInterval(tick, 1000);

```

**React 只会更新必要的部分**

值得注意的是 **React DOM 首先会比较元素内容先后的不同**，而在渲染过程中只会更新改变了的部分。





----

# React JSX

React 使用 JSX 来替代常规的 JavaScript。  全称: JavaScript XML

**JSX 是一个看起来很像 XML 的 JavaScript 语法扩展**。

 JS + XML本质是**React.createElement(component, props, ...children)**方法的语法糖

我们不需要一定使用 JSX，但它有以下**优点**：

- JSX 执行更快，因为它在编译为 JavaScript 代码后进行了优化。
- 它是类型安全的，在编译过程中就能发现错误。
- 使用 JSX 编写模板更加简单快速。

我们先看下以下代码：

```jsx
const element = <h1>Hello, world!</h1>;
```

这种看起来可能有些奇怪的标签语法既不是字符串也不是 HTML。

它被称为 JSX， 一种 JavaScript 的语法扩展。 我们推荐在 React 中使用 JSX 来描述用户界面。

**JSX 是在 JavaScript 内部实现的。**

我们知道**元素**是构成 React 应用的最小单位，JSX 就是用来声明 React 当中的元素。

与浏览器的 DOM 元素不同，**React 当中的元素事实上是普通的对象**，React DOM 可以确保 浏览器 DOM 的数据内容与 React 元素保持一致。

要将 React 元素渲染到根 DOM 节点中，我们通过把它们都传递给 ReactDOM.render() 的方法来将其渲染到页面上：

```jsx
var myDivElement = <div className="foo" />;
ReactDOM.render(myDivElement, document.getElementById('example'));
```

> 注意: 由于 JSX 就是 JavaScript，一些标识符像 `class` 和 `for` 不建议作为 XML 属性名。作为替代，React DOM 使用 **`className` 和 `htmlFor` 来做对应的属性**。

## 作用

用来简化创建虚拟DOM

## 语法

```jsx
const myId = "kop66";
const myData = "YNWA";

// 创建虚拟DOM
const VDOM = (
	<div>
	<h2 className="title" id={myId.toLocaleLowerCase()}>
		<span style={{color:"#430000", fontSize:"28px"}}>{myData}</span>
	</h2>
	UserName:<input type="text" name="userName" /><br/>
	Age:<input type="text" name="userAge" />
		</div>
	);
// 渲染虚拟DOM到页面
ReactDOM.render(VDOM, document.getElementById("test"));
/*
jsx语法规则：
	1.定义虚拟DOM时，不要写引号。
	2.标签中混入JS表达式时要用{}。
	3.样式的类名指定不要用class，要用className。
	4.内联样式，要用style={{key:value}}的形式去写。
	5.只有一个根标签
	6.标签必须闭合
	7.标签首字母
		(1).若小写字母开头，则将该标签转为html中同名元素，若html中无该标签对应的同名元素，则报错。
		(2).若大写字母开头，react就去渲染对应的组件，若组件没有定义，则报错。
*/
```

## 例子

```jsx
// 模拟一些数据
const data = ["React","Vue","Angular","jQuery"];

// 创建虚拟DOM
const VDOM = (
	<div>
		<h1>前端JS框架</h1>
		<ul>
			{
				data.map((item, index) => {
					return <li key={index}>{item}</li>
				})
			}
		</ul>
	</div>
	);

// 渲染虚拟DOM到页面
ReactDOM.render(VDOM, document.getElementById("test"));

/* 
			一定注意区分：【js语句(代码)】与【js表达式】
					1.表达式：一个表达式会产生一个值，可以放在任何一个需要值的地方
								下面这些都是表达式：
										(1). a
										(2). a+b
										(3). demo(1)
										(4). arr.map() 
										(5). function test () {}
					2.语句(代码)：
								下面这些都是语句(代码)：
										(1).if(){}
										(2).for(){}
										(3).switch(){case:xxxx}
		
	 */
```



## 使用 JSX

JSX 看起来类似 HTML ，我们可以看下实例:

```jsx
ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.getElementById('example')
);
```

我们可以在以上代码中嵌套多个 HTML 标签，需要使用一个 div 元素包裹它，实例中的 p 元素添加了自定义属性 **data-myattribute**，添加自定义属性需要使用 **data-** 前缀。

```jsx
ReactDOM.render(
    <div>
        <h1>菜鸟教程</h1>
        <h2>欢迎学习 React</h2>
        <p data-myattribute = "somevalue">这是一个很不错的 JavaScript 库!</p>
    </div>
    ,
    document.getElementById('example')
);
```

### 独立文件

你的 React JSX 代码可以放在一个独立文件上，例如我们创建一个 `helloworld_react.js` 文件，代码如下：

```jsx
ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('example')
);
```

然后在 HTML 文件中引入该 JS 文件：

```html
<body>
  <div id="example"></div>
<script type="text/babel" src="helloworld_react.js"></script>
</body>
```

## JavaScript 表达式

我们可以在 JSX 中使用 JavaScript 表达式。表达式写在花括号 **{}** 中。实例如下：

```jsx
ReactDOM.render(
    <div>
      <h1>{1+1}</h1>
    </div>
    ,
    document.getElementById('example')
);
```

在 JSX 中不能使用 **if else** 语句，但可以使用 **conditional (三元运算)** 表达式来替代。以下实例中如果变量 **i** 等于 **1** 浏览器将输出 **true**, 如果修改 i 的值，则会输出 **false**.

```jsx
ReactDOM.render(
    <div>
      <h1>{i === 1 ? 'True!' : 'False'}</h1>
    </div>
    ,
    document.getElementById('example')
);
```

## 样式

**React 推荐使用内联样式**。我们可以使用 **camelCase** 语法来设置内联样式. React 会在指定元素数字后自动添加 **px** 。以下实例演示了为 **h1** 元素添加 **myStyle** 内联样式：

```jsx
var myStyle = {
    fontSize: 100,
    color: '#FF0000'
};
ReactDOM.render(
    <h1 style = {myStyle}>菜鸟教程</h1>,
    document.getElementById('example')
);
```

## 注释

**注释需要写在花括号中**，实例如下：

```jsx
ReactDOM.render(
    <div>
    <h1>菜鸟教程</h1>
    {/*注释...*/}
     </div>,
    document.getElementById('example')
);
```

## 数组

JSX 允许在模板中插入数组，**数组会自动展开所有成员**：

```jsx
var arr = [
  <h1>菜鸟教程</h1>,
  <h2>学的不仅是技术，更是梦想！</h2>,
];
ReactDOM.render(
  <div>{arr}</div>,
  document.getElementById('example')
);
```



# React 组件

## 模块与组件、模块化与组件化的理解

###  模块

1. 理解：向外提供特定功能的js程序, **一般就是一个js文件**
2. 为什么要拆成模块：**随着业务逻辑增加，代码越来越多且复杂。**
3.  作用：复用js, 简化js的编写, 提高js运行效率

### 组件

1.  理解：用来**实现局部功能效果**的代码和资源的集合(html/css/js/image等等)
2.  为什么要用组件： 一个界面的功能更复杂
3. 作用：复用编码, 简化项目编码, 提高运行效率

###  模块化

当应用的js都以模块来编写的, 这个应用就是一个**模块化的应用**

### 组件化

当应用是以多组件的方式实现, 这个应用就是一个**组件化的应用**

### **注意**

1. 组件名必须首字母大写
2. 虚拟DOM元素只能有一个根元素
3. 虚拟DOM元素必须有结束标签



## React面向组件编程

React 的组件可以定义为 class 或函数的形式。class 组件目前提供了更多的功能。



### 函数式组件

定义组件最简单的方式就是编写 JavaScript 函数：

```jsx
// 创建函数式组件
function MyComponent() {
	console.log(this); //此处的this是undefined，因为babel编译后开启了严格模式
	return <h2>函数式组件</h2>
}

// 渲染组件到页面
ReactDOM.render(<MyComponent/>, document.getElementById("test"));
/* 
	执行了ReactDOM.render(<MyComponent/>.......之后，发生了什么？
		1.React解析组件标签，找到了MyComponent组件。
		2.发现组件是使用函数定义的，随后调用该函数，将返回的虚拟DOM转为真实DOM，随后呈现在页面中。
		*/

```

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

该函数是一个有效的 React 组件，因为它接收唯一带有数据的 “props”（代表属性）对象与并返回一个 React 元素。这类组件被称为“函数组件”，**因为它本质上就是 JavaScript 函数。**

我们封装一个输出 "Hello World！" 的组件，组件名为 HelloMessage：

```jsx
function HelloMessage(props) {
    return <h1>Hello World!</h1>;
}
 
const element = <HelloMessage />;
 
ReactDOM.render(
    element,
    document.getElementById('example')
);
```

#### 实例解析：

1、我们可以使用函数定义了一个组件：

```jsx
function HelloMessage(props) {
    return <h1>Hello World!</h1>;
}
```

你也可以使用 ES6 class 来定义一个组件:

```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello World!</h1>;
  }
}
```

2、const element = `<HelloMessage />` 为用户自定义的组件。

> 注意，原生 HTML 元素名以小写字母开头，**而自定义的 React 类名以大写字母开头**，比如 HelloMessage 不能写成 helloMessage。除此之外还需要注意组件类只能包含一个顶层标签，否则也会报错。

如果我们需要向组件传递参数，可以使用 **this.props** 对象,实例如下：

```jsx
function HelloMessage(props) {
    return <h1>Hello {props.name}!</h1>;
}
 
const element = <HelloMessage name="Runoob"/>;
 
ReactDOM.render(
    element,
    document.getElementById('example')
);
```

以上实例中 **name** 属性通过 **props.name** 来获取。

> 注意，在添加属性时， class 属性需要写成 className ，for 属性需要写成 htmlFor ，**这是因为 class 和 for 是 JavaScript 的保留字。**

### 类式组件

如需定义 class 组件，需要继承 `React.Component`：

```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

在 `React.Component` 的子类中有个必须定义的 [`render()`](https://zh-hans.reactjs.org/docs/react-component.html#render) 函数。

**我们强烈建议你不要创建自己的组件基类。** 在 React 组件中，[代码重用的主要方式是组合而不是继承](https://zh-hans.reactjs.org/docs/composition-vs-inheritance.html)。

> 注意: React 并不会强制你使用 ES6 的 class 语法。如果你倾向于不使用它，你可以使用 `create-react-class` 模块或类似的自定义抽象来代替。





适用于 **复杂组件** 的定义

```jsx
// 创建类式组件
class MyComponent extends React.Component {
	render() {
		//render是放在哪里的？—— MyComponent的原型对象上，供实例使用。
		//render中的this是谁？—— MyComponent的实例对象 <=> MyComponent组件实例对象。
		console.log('render中的this:', this);  // MyComponent {props: {…}, context: {…}, refs: {…}, updater: {…}, _reactInternalFiber: FiberNode, …}
		return <h2>类式组件</h2>
	}
}

// 渲染组件到页面
ReactDOM.render(<MyComponent/>, document.getElementById("test"));
		/* 
			执行了ReactDOM.render(<MyComponent/>.......之后，发生了什么？
					1.React解析组件标签，找到了MyComponent组件。
					2.发现组件是使用类定义的，随后new出来该类的实例，并通过该实例调用到原型上的render方法。
					3.将render返回的虚拟DOM转为真实DOM，随后呈现在页面中。
		*/
```

#### 渲染类组件标签的基本流程

1. React内部会创建组件实例对象
2. 调用render()得到虚拟DOM, 并解析为真实DOM
3. 插入到指定的页面元素内部





## 组合组件

组件可以在其输出中引用其他组件。这就可以让我们用同一组件来抽象出任意层次的细节。按钮，表单，对话框，甚至整个屏幕的内容：在 React 应用程序中，这些通常都会以组件的形式表示。

例如，我们可以创建一个可以多次渲染 `Welcome` 组件的 `App` 组件：

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}
```

**通常来说，每个新的 React 应用程序的顶层组件都是 `App` 组件**。但是，如果你将 React 集成到现有的应用程序中，你可能需要使用像 `Button` 这样的小组件，并自下而上地将这类组件逐步应用到视图层的每一处。



以下实例我们实现了输出网站名字和网址的组件：

```jsx
function Name(props) {
    return <h1>网站名称：{props.name}</h1>;
}
function Url(props) {
    return <h1>网站地址：{props.url}</h1>;
}
function Nickname(props) {
    return <h1>网站小名：{props.nickname}</h1>;
}
function App() {
    return (
    <div>
        <Name name="菜鸟教程" />
        <Url url="http://www.runoob.com" />
        <Nickname nickname="Runoob" />
    </div>
    );
}
 
ReactDOM.render(
     <App />,
    document.getElementById('example')
);
```

实例中 App 组件使用了 Name、Url 和 Nickname 组件来输出对应的信息。

----

## 提取组件

将组件拆分为更小的组件。

例如，参考如下 `Comment` 组件：

```jsx
function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
```

该组件用于描述一个社交媒体网站上的评论功能，它接收 `author`（对象），`text` （字符串）以及 `date`（日期）作为 props。

该组件由于嵌套的关系，变得难以维护，且很难复用它的各个部分。因此，让我们从中提取一些组件出来。

首先，我们将提取 `Avatar` 组件：

```jsx
function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}
```

`Avatar` 不需知道它在 `Comment` 组件内部是如何渲染的。因此，我们给它的 props 起了一个更通用的名字：`user`，而不是 `author`。

我们建议从组件自身的角度命名 props，而不是依赖于调用组件的上下文命名。

我们现在针对 `Comment` 做些微小调整：

```jsx
function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <Avatar user={props.author} />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
```

接下来，我们将提取 `UserInfo` 组件，该组件在用户名旁渲染 `Avatar` 组件：

```jsx
function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}
```

进一步简化 `Comment` 组件：

```jsx
function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
```

最初看上去，提取组件可能是一件繁重的工作，但是，在大型应用中，构建可复用组件库是完全值得的。

根据经验来看，**如果 UI 中有一部分被多次使用**（`Button`，`Panel`，`Avatar`），**或者组件本身就足够复杂**（`App`，`FeedStory`，`Comment`），那么它就是一个可提取出独立组件的候选项。

----

## 渲染组件

之前，我们遇到的 React 元素都只是 DOM 标签：

```jsx
const element = <div />;
```

不过，React 元素也可以是用户自定义的组件：

```jsx
const element = <Welcome name="Sara" />;
```

当 React 元素为用户自定义组件时，它会将 JSX 所接收的属性（attributes）以及子组件（children）转换为单个对象传递给组件，这个对象被称之为 “props”。

例如，这段代码会在页面上渲染 “Hello, Sara”：

```jsx
function Welcome(props) {  
    return <h1>Hello, {props.name}</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
const element = <Welcome name="Sara" />;
root.render(element);
```

让我们来回顾一下这个例子中发生了什么：

1. 我们调用 `root.render()` 函数，并传入 `<Welcome name="Sara" />` 作为参数。
2. React 调用 `Welcome` 组件，并将 `{name: 'Sara'}` 作为 props 传入。
3. `Welcome` 组件将 `<h1>Hello, Sara</h1>` 元素作为返回值。
4. React DOM 将 DOM 高效地更新为 `<h1>Hello, Sara</h1>`。

>**注意：** 组件名称必须以大写字母开头。
>
>React 会将以小写字母开头的组件视为原生 DOM 标签。例如，`<div />` 代表 HTML 的 div 标签，而 `<Welcome />` 则代表一个组件，并且需在作用域内使用 `Welcome`。
>
>你可以在[深入 JSX](https://zh-hans.reactjs.org/docs/jsx-in-depth.html#user-defined-components-must-be-capitalized) 中了解更多关于此规范的原因。





---



# React State(状态)

## 组件三大核心属性1: state

React 把组件看成是一个**状态机**（State Machines）。通过与用户的交互，实现不同状态，然后渲染 UI，让用户界面和数据保持一致。

React 里，**只需更新组件的 state，然后根据新的 state 重新渲染用户界面**（不要操作 DOM）。

###  理解

1.  state是组件对象最重要的属性, **值是对象**(可以包含多个key-value的组合)
2.  组件被称为"状态机", **通过更新组件的state来更新对应的页面显示**(重新渲染组件)
3.  State 与 props 类似，但是 state 是私有的，并且完全受控于当前组件。

###  强烈注意

1. 组件中**render方法中的this为组件实例对象**
2. 组件**自定义的方法中this为undefined**，如何解决？

​		a)   强制绑定this: 通过函数对象的bind()

​		b)   箭头函数

3.  状态数据，不能直接修改或更新

```jsx
/*
需求: 定义一个展示天气信息的组件
	1. 默认展示天气炎热 或 凉爽
	2. 点击文字切换天气
*/
//App.js


import './App.css';
import React, {Component} from 'react';

class Weather extends Component {
  //构造器调用几次？ ———— 1次
  constructor(props){
    console.log("constructor");
    super(props);
    // 初始化状态
    this.state = {isHot: true, wind: "大风"};

    //解决changeWeather中this指向问题
    this.changeWeather = this.changeWeather.bind(this);
  }

  //render调用几次？ ———— 1+n次 1是初始化的那次 n是状态更新的次数
  render() {
    // 读取状态
    const {isHot, wind} = this.state;
    return <h1 onClick={this.changeWeather}>今天天气很{isHot ? "炎热" : "凉爽"},{wind}</h1>
  }

  // changeWeather调用几次？ ———— 点几次调几次
  changeWeather(){
    // changeWeather放在哪里？ ———— Weather的原型对象上，供实例使用
    // 由于changeWeather是作为onClick的回调，所以不是通过实例调用的，是直接调用
    // 类中的方法默认开启了局部的严格模式，所以changeWeather中的this为undefined
    console.log("changeWeather");
    // 获取原来的 isHot 值
    const isHot = this.state.isHot;
    
    //严重注意：状态必须通过setState进行更新,且更新是一种合并，不是替换。
    this.setState({isHot: !isHot});
    console.log(this);

    //严重注意：状态(state)不可直接更改，下面这行就是直接更改！！！
    //this.state.isHot = !isHot //这是错误的写法
  }
}

export default Weather;

```

```jsx
//index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Weather from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
   <React.StrictMode>
     <Weather/>
   </React.StrictMode>,
   document.getElementById('root')
);

reportWebVitals();

```

### state简写方式

```jsx
class Weather extends Component {
  // 初始化状态
  state = {isHot: true, wind: "大风"};

  //render调用几次？ ———— 1+n次 1是初始化的那次 n是状态更新的次数
  render() {
    // 读取状态
    const {isHot, wind} = this.state;
    return <h1 onClick={this.changeWeather}>今天天气很<span style={{color: isHot ? "#ff99ff" : "#843bfb"}}>{isHot ? "炎热" : "凉爽"}</span>,{wind}</h1>
  }

  // 自定义方法————要用赋值语句的形式+箭头函数
  changeWeather = () => {
    // 获取原来的 isHot 值
    const isHot = this.state.isHot;
    //严重注意：状态必须通过setState进行更新,且更新是一种合并，不是替换。
    this.setState({isHot: !isHot});
  }
}

//2.渲染组件到页面
ReactDOM.render(<Weather/>, document.getElementById('test'))
```

----

### 将函数组件转换成 class 组件

```jsx
const root = ReactDOM.createRoot(document.getElementById('root'));

function Clock(props) {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}

function tick() {
  root.render(<Clock date={new Date()} />);
}

setInterval(tick, 1000);
```

通过以下五步将 `Clock` 的函数组件转成 class 组件：

1. 创建一个同名的 [ES6 class](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes)，并且继承于 `React.Component`。
2. 添加一个空的 `render()` 方法。
3. 将函数体移动到 `render()` 方法之中。
4. 在 `render()` 方法中使用 `this.props` 替换 `props`。
5. 删除剩余的空函数声明。

```jsx
class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
```

现在 `Clock` 组件被定义为 class，而不是函数。

每次组件更新时 `render` 方法都会被调用，但只要在相同的 DOM 节点中渲染 `<Clock />` ，就仅有一个 `Clock` 组件的 class 实例被创建使用。这就使得我们可以使用如 state 或生命周期方法等很多其他特性。

我们通过以下三步将 `date` 从 props 移动到 state 中：

1. 把 `render()` 方法中的 `this.props.date` 替换成 `this.state.date` ：

```jsx
class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
```

2. 添加一个 [class 构造函数](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes#Constructor)，然后在该函数中为 `this.state` 赋初值：

```jsx
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
```

通过以下方式将 `props` 传递到父类的构造函数中：

```js
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
```

Class 组件应该始终使用 `props` 参数来调用父类的构造函数。

3. 移除 `<Clock />` 元素中的 `date` 属性：

```jsx
root.render(<Clock />);
```

代码如下：

```jsx
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Clock />);
```

接下来，我们会设置 `Clock` 的计时器并每秒更新它。



### 将生命周期方法添加到类中

在具有许多组件的应用程序中，当组件被销毁时释放所占用的资源是非常重要的。

当 Clock 组件第一次被渲染到 DOM 中的时候，就为其设置一个计时器。这在 React 中被称为“**挂载**（mount）”。

同时，当 DOM 中 Clock 组件被删除的时候，应该清除计时器。这在 React 中被称为“**卸载**（unmount）”。

我们可以为 class 组件声明一些特殊的方法，当组件挂载或卸载时就会去执行这些方法：

```jsx
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Clock />);
```

**实例解析：**

**componentDidMount()** 与 **componentWillUnmount()** 方法被称作生命周期钩子。

`componentDidMount()` 方法会在组件已经被渲染到 DOM 中后运行，所以，最好在这里设置计时器

接下来把计时器的 ID 保存在 `this` 之中（`this.timerID`）。

尽管 `this.props` 和 `this.state` 是 React 本身设置的，且都拥有特殊的含义，但是其实你可以向 class 中随意添加不参与数据流（比如计时器 ID）的额外字段。

我们会在 `componentWillUnmount()` 生命周期方法中清除计时器

最后，我们会实现一个叫 `tick()` 的方法，`Clock` 组件每秒都会调用它。

使用 `this.setState()` 来时刻更新组件 state：

现在时钟每秒都会刷新。

让我们来快速概括一下发生了什么和这些方法的调用顺序：

1. 当 `<Clock />` 被传给 `root.render()`的时候，React 会调用 `Clock` 组件的构造函数。因为 `Clock` 需要显示当前的时间，所以它会用一个包含当前时间的对象来初始化 `this.state`。我们会在之后更新 state。
2. 之后 React 会调用组件的 `render()` 方法。这就是 React 确定该在页面上展示什么的方式。然后 React 更新 DOM 来匹配 `Clock` 渲染的输出。
3. 当 `Clock` 的输出被插入到 DOM 中后，React 就会调用 `ComponentDidMount()` 生命周期方法。在这个方法中，`Clock` 组件向浏览器请求设置一个计时器来每秒调用一次组件的 `tick()` 方法。
4. 浏览器每秒都会调用一次 `tick()` 方法。 在这方法之中，`Clock` 组件会通过调用 `setState()` 来计划进行一次 UI 更新。得益于 `setState()` 的调用，React 能够知道 state 已经改变了，然后会重新调用 `render()` 方法来确定页面上该显示什么。这一次，`render()` 方法中的 `this.state.date` 就不一样了，**如此一来就会渲染输出更新过的时间。React 也会相应的更新 DOM。**
5. 一旦 `Clock` 组件从 DOM 中被移除，React 就会调用 `componentWillUnmount()` 生命周期方法，这样计时器就停止了。

----

### 正确地使用 State

关于 `setState()` 你应该了解三件事：

#### 不要直接修改 State

例如，此代码不会重新渲染组件：

```js
// Wrong
this.state.comment = 'Hello';
```

而是应该使用 `setState()`:

```js
// Correct
this.setState({comment: 'Hello'});
```

**构造函数是唯一可以给 `this.state` 赋值的地方。**

#### State 的更新可能是异步的

出于性能考虑，React 可能会把多个 `setState()` 调用合并成一个调用。

因为 `this.props` 和 `this.state` 可能会异步更新，**所以你不要依赖他们的值来更新下一个状态。**

例如，**此代码可能会无法更新计数器**：

```js
// Wrong
this.setState({
  counter: this.state.counter + this.props.increment,
});
```

要解决这个问题，可以让 `setState()` 接收一个函数而不是一个对象。这个函数用上一个 state 作为第一个参数，将此次更新被应用时的 props 做为第二个参数：

```js
// Correct
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));
```

上面使用了[箭头函数](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)，不过使用普通的函数也同样可以：

```js
// Correct
this.setState(function(state, props) {
  return {
    counter: state.counter + props.increment
  };
});
```

### State 的更新会被合并

当你调用 `setState()` 的时候，**React 会把你提供的对象合并到当前的 state**。

例如，你的 state 包含几个独立的变量：

```js
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      comments: []
    };
  }
```

然后你可以分别调用 `setState()` 来单独地更新它们：

```js
  componentDidMount() {
    fetchPosts().then(response => {
      this.setState({
        posts: response.posts
      });
    });

    fetchComments().then(response => {
      this.setState({
        comments: response.comments
      });
    });
  }
```

**这里的合并是浅合并**，所以 `this.setState({comments})` 完整保留了 `this.state.posts`， 但是完全替换了 `this.state.comments`。



----

### 数据自顶向下流动

不管是父组件或是子组件**都无法知道某个组件是有状态的还是无状态的**，并且它们也并不关心它是函数组件还是 class 组件。

**这就是为什么称 state 为局部的或是封装的的原因**。除了拥有并设置了它的组件，其他组件都无法访问。

组件**可以选择把它的 state 作为 props 向下传递到它的子组件中**：

```jsx
<FormattedDate date={this.state.date} />
```

`FormattedDate` 组件会在其 props 中接收参数 `date`，但是组件本身无法知道它是来自于 `Clock` 的 state，或是 `Clock` 的 props，还是手动输入的：

```js
function FormattedDate(props) {
  return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}
```

**这通常会被叫做“自上而下”或是“单向”的数据流**。

任何的 state 总是所属于特定的组件，**而且从该 state 派生的任何数据或 UI 只能影响树中“低于”它们的组件**。

如果你把一个以组件构成的树想象成一个 props 的数据瀑布的话，**那么每一个组件的 state 就像是在任意一点上给瀑布增加额外的水源，但是它只能向下流动。**

为了证明每个组件都是真正独立的，我们可以创建一个渲染三个 `Clock` 的 `App` 组件：

```jsx
function FormattedDate(props) {
  return <h2>现在是 {props.date.toLocaleTimeString()}.</h2>;
}
 
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
 
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
 
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
 
  tick() {
    this.setState({
      date: new Date()
    });
  }
 
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <FormattedDate date={this.state.date} />
      </div>
    );
  }
}
 
function App() {
  return (
    <div>
      <Clock />
      <Clock />
      <Clock />
    </div>
  );
}
 
ReactDOM.render(<App />, document.getElementById('example'));
```

每个 `Clock` 组件都会单独设置它自己的计时器并且更新它。

在 React 应用中**，组件是有状态组件还是无状态组件属于组件实现的细节**，它可能会随着时间的推移而改变。你可以在有状态的组件中使用无状态的组件，反之亦然。



----

# React Props

## 组件三大核心属性2: props

state 和 props 主要的区别在于 **props** 是不可变的，**而 state 可以根据与用户交互来改变**。这就是为什么有些容器组件需要定义 state 来更新和修改数据。 而子组件只能通过 props 来传递数据。

### 理解

1. 每个组件对象都会有props(properties的简写)属性

2. 组件标签的所有属性都保存在props中

### 作用

1. 通过标签属性从组件外向组件内传递变化的数据

2. 注意: 组件内部不要修改props数据

### 编码操作

1. 内部读取某个属性值

```js
this.props.name
```

2. 对props中的属性值进行类型限制和必要性限制

(1) 第一种方式（React v15.5 开始已弃用）：

```js
Person.propTypes = {
 name: React.PropTypes.string.isRequired,
 age: React.PropTypes.number
}
```

(2) 第二种方式（新）：使用prop-types库进限制（需要引入prop-types库）

```js
import PropTypes from 'prop-types';  //引入prop-types，用于对组件标签属性进行限制

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number. 
}

```

扩展属性: 将对象的所有属性通过props传递

```jsx
<Person {...person} />
```

4. 默认属性值：

```js
Person.defaultProps = {
  age: 18,
  sex:'男'
}
```

5. 组件类的构造函数

```js
constructor(props){
  super(props)
  console.log(props)  //打印所有属性
}
```



## 使用 Props

### 单独传递

```jsx
/*
需求: 自定义用来显示一个人员信息的组件
1.	姓名必须指定，且为字符串类型；
2.	性别为字符串类型，如果性别没有指定，默认为男
3.	年龄为字符串类型，且为数字类型，默认值为18
*/

// Person.js
class Person extends Component {
  render() {
    const {name, sex, age} = this.props;
    return (
        <ul>
          <li>姓名: {name}</li>
          <li>性别: {sex}</li>
          <li>年龄: {age}</li>
        </ul>
      )
  }
}

//index.js
ReactDOM.render(
   <React.StrictMode>
     <Person name="Arnold" sex="male" age={23} />
     <Person name="Salah" sex="male" age={29} />
     <Person name="Kaita" sex="male" age={26} />
   </React.StrictMode>,
   document.getElementById('root')
);

```

### 多组属性批量传递

```jsx
// Person.js
class Person extends Component {
  render() {
    const {name, sex, age} = this.props;
    return (
        <ul>
          <li>姓名: {name}</li>
          <li>性别: {sex}</li>
          <li>年龄: {age + 1}</li>
        </ul>
      )
  }
}

// index.js
const persons = [
	{name: "Arnold", sex: "male", age: 23},
	{name:"Salah", sex: "male", age: 29},
	{name:"Kaita", sex: "male", age: 26},
];
ReactDOM.render(
   <React.StrictMode>
     <Person {...persons[0]} />
     <Person {...persons[1]} />
     <Person {...persons[2]} />
   </React.StrictMode>,
   document.getElementById('root')
);
```



以下实例演示了如何在组件中使用 props：

```jsx
function HelloMessage(props) {
    return <h1>Hello {props.name}!</h1>;
}
const element = <HelloMessage name="kop"/>;
ReactDOM.render(
    element,
    document.getElementById('example')
);

```

实例中 name 属性通过 props.name 来获取。

## Props 的只读性

组件无论是使用函数声明还是通过 class 声明，都决不能修改自身的 props。来看下这个 sum 函数：

```js
function sum(a, b) {
  return a + b;
}
```

这样的函数被称为[“纯函数”](https://en.wikipedia.org/wiki/Pure_function)，因为该函数不会尝试更改入参，且多次调用下相同的入参始终返回相同的结果。

相反，下面这个函数则不是纯函数，因为它更改了自己的入参：

```jsx
function withdraw(account, amount) {
  account.total -= amount;
}
```

React 非常灵活，但它也有一个严格的规则：

**所有 React 组件都必须像纯函数一样保护它们的 props 不被更改。**

当然，应用程序的 UI 是动态的，并会伴随着时间的推移而变化。在[下一章节](https://zh-hans.reactjs.org/docs/state-and-lifecycle.html)中，我们将介绍一种新的概念，称之为 “state”。在不违反上述规则的情况下，state 允许 React 组件随用户操作、网络响应或者其他变化而动态更改输出内容。

----

## 默认 Props值

### `defaultProps`

`defaultProps` 可以为 Class 组件添加默认 props。**这一般用于 props 未赋值，但又不能为 `null` 的情况**。例如：

```js
class CustomButton extends React.Component {
  // ...
}

CustomButton.defaultProps = {
  color: 'blue'
};
```

如果未提供 `props.color`，则默认设置为 `'blue'`

```jsx
  render() {
    return <CustomButton /> ; // props.color 将设置为 'blue'
  }
```

如果 `props.color` 被设置为 `null`，则它将保持为 `null`

```jsx
  render() {
    return <CustomButton color={null} /> ; // props.color 将保持是 null
  }
```



您可以通过配置特定的 `defaultProps` 属性来定义 `props` 的默认值：实例如下：

```jsx
class Greeting extends React.Component {
  render() {
    return (
      <h1>Hello, {this.props.name}</h1>
    );
  }
}

// 指定 props 的默认值：
Greeting.defaultProps = {
  name: 'Stranger'
};

// 渲染出 "Hello, Stranger"：
const root = ReactDOM.createRoot(document.getElementById('example')); 
root.render(<Greeting />);
```

如果你正在使用像 plugin-proposal-class-properties（之前名为 plugin-transform-class-properties）的 Babel 转换工具，你也可以在 React 组件类中声明 defaultProps 作为静态属性。此语法提案还没有最终确定，需要进行编译后才能在浏览器中运行。要了解更多信息，请查阅 class fields proposal。

```jsx
class Greeting extends React.Component {
  static defaultProps = {
    name: 'stranger'
  }

  render() {
    return (
      <div>Hello, {this.props.name}</div>
    )
  }
}
```

`defaultProps` 用于确保 `this.props.name` 在父组件没有指定其值时，有一个默认值。`propTypes` 类型检查发生在 `defaultProps` 赋值后，**所以类型检查也适用于 `defaultProps`**。

----

## State 和 Props

以下实例演示了如何在应用中组合使用 state 和 props 。我们可以在父组件中设置 state， 并通过在子组件上使用 props 将其传递到子组件上。在 render 函数中，我们设置 name 和 site 来获取父组件传递过来的数据。

```jsx
class WebSite extends React.Component {
  constructor() {
      super();
      this.state = {
        name: "kop",
        site: "https://www.kop.com"
      }
    }
  render() {
    return (
      <div>
        <Name name={this.state.name} />
        <Link site={this.state.site} />
      </div>
    );
  }
}
class Name extends React.Component {
  render() {
    return (
      <h1>{this.props.name}</h1>
    );
  }
}
class Link extends React.Component {
  render() {
    return (
      <a href={this.props.site}>
        {this.props.site}
      </a>
    );
  }
}
ReactDOM.render(
  <WebSite />,
  document.getElementById('example')
);
```



## 使用 PropTypes 进行类型检查

>注意：自 React v15.5 起，`React.PropTypes` 已移入另一个包中。请使用 [`prop-types` 库](https://www.npmjs.com/package/prop-types) 代替。
>
>我们提供了一个 [codemod 脚本](https://zh-hans.reactjs.org/blog/2017/04/07/react-v15.5.0.html#migrating-from-reactproptypes)来做自动转换。

随着你的应用程序不断增长，你可以通过类型检查捕获大量错误。对于某些应用程序来说，你可以使用 [Flow](https://flow.org/) 或 [TypeScript](https://www.typescriptlang.org/) 等 JavaScript 扩展来对整个应用程序做类型检查。但即使你不使用这些扩展，React 也内置了一些类型检查的功能。要在组件的 props 上进行类型检查，你只需配置特定的 `propTypes` 属性：

```js
import PropTypes from 'prop-types';

class Greeting extends React.Component {
  render() {
    return (
      <h1>Hello, {this.props.name}</h1>
    );
  }
}

Greeting.propTypes = {
  name: PropTypes.string
};
```

在此示例中，我们使用的是 class 组件，但是同样的功能也可用于函数组件，或者是由 [`React.memo`](https://zh-hans.reactjs.org/docs/react-api.html#reactmemo)/[`React.forwardRef`](https://zh-hans.reactjs.org/docs/react-api.html#reactforwardref) 创建的组件。

`PropTypes` 提供一系列验证器，可用于确保组件接收到的数据类型是有效的。在本例中, 我们使用了 `PropTypes.string`。当传入的 `prop` 值类型不正确时，JavaScript 控制台将会显示警告。出于性能方面的考虑，`propTypes` 仅在开发模式下进行检查。

### 对Props进行限制

第一种方式（React v15.5 开始已弃用）

```jsx
Person.propTypes = {
 name: React.PropTypes.string.isRequired,
 age: React.PropTypes.number
}
```

React.PropTypes 在 React v15.5 版本后已经移到了 **prop-types** 库。

```html
<script src="https://cdn.bootcss.com/prop-types/15.6.1/prop-types.js"></script>
```

Props 验证使用 **propTypes**，它可以保证我们的应用组件被正确使用，React.PropTypes 提供很多验证器 (validator) 来验证传入数据是否有效。**当向 props 传入无效数据时，JavaScript 控制台会抛出警告。**

第二种方式（新）：使用prop-types库进限制（需要引入prop-types库）

```js
Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number. 
}
```



```jsx
//person.js
import './App.css';
import React, {Component} from 'react';
import PropTypes from 'prop-types';  //引入prop-types，用于对组件标签属性进行限制

class Person extends Component {
  render() {
    const {name, sex, age} = this.props;
    //props是只读的
    //this.props.name = 'kop' //此行代码会报错，因为props是只读的
    return (
        <ul>
          <li>姓名: {name}</li>
          <li>性别: {sex}</li>
          <li>年龄: {age + 1}</li>
        </ul>
      )
  }
  
}
//对标签属性进行类型、必要性的限制
Person.propTypes = {
  name: PropTypes.string.isRequired,  //限制name必传，且为字符串
  sex: PropTypes.string,  // 限制sex为字符串
  age: PropTypes.number,  // 限制age为数值
  speak: PropTypes.func,  // 限制speak为函数
}

  //指定默认标签属性值
Person.defaultProps = {
  sex: "男",  // sex默认值为男
  age: 18  // age默认值为18
}
export default Person;

```

```jsx
// index.js
const persons = [
	{name: "Arnold", sex: "male"},
	{name:"Salah", sex: "male", age: 29},
	{name:"Kaita", age: 26},
];

function speak() {
  console.log("说话");
}

ReactDOM.render(
   <React.StrictMode>
     <Person {...persons[0]} speak={speak} />
     <Person {...persons[1]} />
     <Person {...persons[2]} />
   </React.StrictMode>,
   document.getElementById('root')
);
```

### 限制props的简写方式

```jsx
import './App.css';
import React, {Component} from 'react';
import PropTypes from 'prop-types';  //引入prop-types，用于对组件标签属性进行限制

class Person extends Component {
  //static 关键字声明的是类自身的属性，实例上访问不到
  //对标签属性进行类型、必要性的限制
  static propTypes = {
    name: PropTypes.string.isRequired,  //限制name必传，且为字符串
    sex: PropTypes.string,  // 限制sex为字符串
    age: PropTypes.number,  // 限制age为数值
    speak: PropTypes.func,  // 限制speak为函数
  }
  
  //指定默认标签属性值
  static defaultProps = {
    sex: "男",  // sex默认值为男
    age: 18  // age默认值为18
  }

  render() {
    const {name, sex, age} = this.props;
    //props是只读的
    //this.props.name = 'kop' //此行代码会报错，因为props是只读的
    return (
        <ul>
          <li>姓名: {name}</li>
          <li>性别: {sex}</li>
          <li>年龄: {age + 1}</li>
        </ul>
      )
  }
}

export default Person;
```

### 限制单个元素

你可以通过 `PropTypes.element` 来确保传递给组件的 children 中只包含一个元素。

```jsx
import PropTypes from 'prop-types';

class MyComponent extends React.Component {
  render() {
    // 这必须只有一个元素，否则控制台会打印警告。
    const children = this.props.children;
    return (
      <div>
        {children}
      </div>
    );
  }
}

MyComponent.propTypes = {
  children: PropTypes.element.isRequired
};
```



### 更多验证器

以下提供了使用不同验证器的例子：

```jsx
import PropTypes from 'prop-types';

MyComponent.propTypes = {
  // 你可以将属性声明为 JS 原生类型，默认情况下
  // 这些属性都是可选的。
  optionalArray: PropTypes.array,
  optionalBool: PropTypes.bool,
  optionalFunc: PropTypes.func,
  optionalNumber: PropTypes.number,
  optionalObject: PropTypes.object,
  optionalString: PropTypes.string,
  optionalSymbol: PropTypes.symbol,

  // 任何可被渲染的元素（包括数字、字符串、元素或数组）
  // (或 Fragment) 也包含这些类型。
  optionalNode: PropTypes.node,

  // 一个 React 元素。
  optionalElement: PropTypes.element,

  // 一个 React 元素类型（即，MyComponent）。
  optionalElementType: PropTypes.elementType,

  // 你也可以声明 prop 为类的实例，这里使用
  // JS 的 instanceof 操作符。
  optionalMessage: PropTypes.instanceOf(Message),

  // 你可以让你的 prop 只能是特定的值，指定它为
  // 枚举类型。
  optionalEnum: PropTypes.oneOf(['News', 'Photos']),

  // 一个对象可以是几种类型中的任意一个类型
  optionalUnion: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.instanceOf(Message)
  ]),

  // 可以指定一个数组由某一类型的元素组成
  optionalArrayOf: PropTypes.arrayOf(PropTypes.number),

  // 可以指定一个对象由某一类型的值组成
  optionalObjectOf: PropTypes.objectOf(PropTypes.number),

  // 可以指定一个对象由特定的类型值组成
  optionalObjectWithShape: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number
  }),

  // An object with warnings on extra properties
  optionalObjectWithStrictShape: PropTypes.exact({
    name: PropTypes.string,
    quantity: PropTypes.number
  }),

  // 你可以在任何 PropTypes 属性后面加上 `isRequired` ，确保
  // 这个 prop 没有被提供时，会打印警告信息。
  requiredFunc: PropTypes.func.isRequired,

  // 任意类型的必需数据
  requiredAny: PropTypes.any.isRequired,

  // 你可以指定一个自定义验证器。它在验证失败时应返回一个 Error 对象。
  // 请不要使用 `console.warn` 或抛出异常，因为这在 `oneOfType` 中不会起作用。
  customProp: function(props, propName, componentName) {
    if (!/matchme/.test(props[propName])) {
      return new Error(
        'Invalid prop `' + propName + '` supplied to' +
        ' `' + componentName + '`. Validation failed.'
      );
    }
  },

  // 你也可以提供一个自定义的 `arrayOf` 或 `objectOf` 验证器。
  // 它应该在验证失败时返回一个 Error 对象。
  // 验证器将验证数组或对象中的每个值。验证器的前两个参数
  // 第一个是数组或对象本身
  // 第二个是他们当前的键。
  customArrayProp: PropTypes.arrayOf(function(propValue, key, componentName, location, propFullName) {
    if (!/matchme/.test(propValue[key])) {
      return new Error(
        'Invalid prop `' + propFullName + '` supplied to' +
        ' `' + componentName + '`. Validation failed.'
      );
    }
  })
};
```



## 函数式组件使用props

```jsx
		//创建组件
		function Person (props){
			const {name,age,sex} = props
			return (
					<ul>
						<li>姓名：{name}</li>
						<li>性别：{sex}</li>
						<li>年龄：{age}</li>
					</ul>
				)
		}
		Person.propTypes = {
			name:PropTypes.string.isRequired, //限制name必传，且为字符串
			sex:PropTypes.string,//限制sex为字符串
			age:PropTypes.number,//限制age为数值
		}

		//指定默认标签属性值
		Person.defaultProps = {
			sex:'男',//sex默认值为男
			age:18 //age默认值为18
		}
		//渲染组件到页面
		ReactDOM.render(<Person name="kop"/>,document.getElementById('test1'))
```

如果你在常规开发中使用函数组件，那你可能需要做一些适当的改动，以保证 PropsTypes 应用正常。

假设你有如下组件：

```jsx
export default function HelloWorldComponent({ name }) {
  return (
    <div>Hello, {name}</div>
  )
}
```

如果要添加 PropTypes，你可能需要在导出之前以单独声明的一个函数的形式，声明该组件，具体代码如下：

```jsx
function HelloWorldComponent({ name }) {
  return (
    <div>Hello, {name}</div>
  )
}

export default HelloWorldComponent
```

接着，可以直接在 `HelloWorldComponent` 上添加 PropTypes：

```jsx
import PropTypes from 'prop-types'

function HelloWorldComponent({ name }) {
  return (
    <div>Hello, {name}</div>
  )
}

HelloWorldComponent.propTypes = {
  name: PropTypes.string
}

export default HelloWorldComponent
```



---

# 构造器constructor()

```
constructor(props)
```

**如果不初始化 state 或不进行方法绑定，则不需要为 React 组件实现构造函数。**

在 React 组件挂载之前，会调用它的构造函数。在为 React.Component 子类实现构造函数时，应在其他语句之前调用 `super(props)`。否则，`this.props` 在构造函数中**可能会出现未定义的 bug**。

通常，在 React 中，构造函数**仅用于以下两种情况**：

- 通过给 `this.state` 赋值对象来初始化[内部 state](https://zh-hans.reactjs.org/docs/state-and-lifecycle.html)。
- 为[事件处理函数](https://zh-hans.reactjs.org/docs/handling-events.html)绑定实例

在 `constructor()` 函数中**不要调用 `setState()` 方法**。如果你的组件需要使用内部 state，请直接在构造函数中为 **`this.state` 赋值初始 state**：

```js
constructor(props) {
  super(props);
  // 不要在这里调用 this.setState()
  this.state = { counter: 0 };
  this.handleClick = this.handleClick.bind(this);
}
```

**只能在构造函数中直接为 `this.state` 赋值。**如需在其他方法中赋值，你应使用 `this.setState()` 替代。

**要避免在构造函数中引入任何副作用或订阅**。如遇到此场景，请将对应的操作放置在 `componentDidMount` 中。

> 注意
>
> **避免将 props 的值复制给 state！这是一个常见的错误：**
>
> ```js
> constructor(props) {
>  super(props);
>  // 不要这样做
>  this.state = { color: props.color };
> }
> ```
>
> 如此做毫无必要（你可以直接使用 `this.props.color`），同时还产生了 bug（更新 prop 中的 `color` 时，并不会影响 state）。
>
> **只有在你刻意忽略 prop 更新的情况下使用。**此时，应将 prop 重命名为 `initialColor` 或 `defaultColor`。必要时，你可以[修改它的 `key`](https://zh-hans.reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#recommendation-fully-uncontrolled-component-with-a-key)，以强制“重置”其内部 state。
>
> 请参阅关于[避免派生状态的博文](https://zh-hans.reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html)，以了解出现 state 依赖 props 的情况该如何处理。

```js
  constructor(props) {
    // 构造器是否接收props,是否传递给super,取决于：是否希望在构造器中通过this访问props
    super(props);
    console.log("constructor", this.props);
  }
```

----

# React Refs

## 组件三大核心属性3: refs与事件处理

React 支持一种非常特殊的属性 **Ref** ，你可以用来绑定到 render() 输出的任何组件上。

这个特殊的属性允许你引用 render() 返回的相应的支撑实例（ backing instance ）。这样就可以确保在任何时间总是拿到正确的实例。

**组件内的标签可以定义ref属性来标识自己**

**Refs 提供了一种方式，允许我们访问 DOM 节点或在 render 方法中创建的 React 元素。**

在典型的 React 数据流中，[props](https://zh-hans.reactjs.org/docs/components-and-props.html) 是父组件与子组件交互的唯一方式。要修改一个子组件，你需要使用新的 props 来重新渲染它。但是，在某些情况下，你需要在典型数据流之外强制修改子组件。被修改的子组件可能是一个 React 组件的实例，也可能是一个 DOM 元素。对于这两种情况，React 都提供了解决办法。

## 何时使用 Refs

下面是几个适合使用 refs 的情况：

- 管理焦点，文本选择或媒体播放。
- 触发强制动画。
- 集成第三方 DOM 库。

**避免使用 refs 来做任何可以通过声明式实现来完成的事情**。

举个例子，避免在 `Dialog` 组件里暴露 `open()` 和 `close()` 方法，最好传递 `isOpen` 属性。

## 勿过度使用 Refs

你可能首先会想到使用 refs 在你的 app 中“让事情发生”。如果是这种情况，请花一点时间，认真再考虑一下 state 属性应该被安排在哪个组件层中。通常你会想明白，让更高的组件层级拥有这个 state，是更恰当的。查看 [状态提升](https://zh-hans.reactjs.org/docs/lifting-state-up.html) 以获取更多有关示例。

>注意
>
>下面的例子已经更新为使用在 React 16.3 版本引入的 `React.createRef()` API。如果你正在使用一个较早版本的 React，我们推荐你使用[回调形式的 refs](https://zh-hans.reactjs.org/docs/refs-and-the-dom.html#callback-refs)。

----



## 过时 API：String 类型的 Refs

如果你之前使用过 React，你可能了解过之前的 API 中的 string 类型的 ref 属性，例如 `"textInput"`。你可以通过 `this.refs.textInput` 来访问 DOM 节点。我们不建议使用它，因为 string 类型的 refs 存在 [一些问题](https://github.com/facebook/react/pull/8333#issuecomment-271648615)。它已过时并可能会在未来的版本被移除。

> 如果你目前还在使用 `this.refs.textInput` 这种方式访问 refs ，我们建议用[回调函数](https://zh-hans.reactjs.org/docs/refs-and-the-dom.html#callback-refs)或 [`createRef` API](https://zh-hans.reactjs.org/docs/refs-and-the-dom.html#creating-refs) 的方式代替。

绑定一个 ref 属性到 render 的返回值上：

```html
<input ref="myInput" />
```

在其它代码中，通过 this.refs 获取支撑实例：

```js
var input = this.refs.myInput;
var inputValue = input.value;
var inputRect = input.getBoundingClientRect();
```

### 完整实例

你可以通过使用 this 来获取当前 React 组件，或使用 ref 来获取组件的引用，实例如下：

```jsx
import './App.css';
import React, {Component} from 'react';
import PropTypes from 'prop-types';  //引入prop-types，用于对组件标签属性进行限制

class MyComponent extends Component {
  // 展示左侧输入框的数据
  showData = () => {
    const {input1} = this.refs;
    console.log("input1:", input1.value);
  }

  // 展示右侧输入框的数据
  showData2 = () => {
    const {input2} = this.refs;
    console.log("input2:", input2.value);
  }

  render() {
    return (
      <div>
        <input ref="input1" type="text" placeholder="点击按钮提示数据" />&nbsp;
        <button onClick={this.showData}>点击提示左侧的数据</button>&nbsp;
        <input ref="input2" onBlur={this.showData2} type="text" placeholder="失去焦点提示数据" />
      </div>
    )
  }
}

export default MyComponent;
```

实例中，我们获取了输入框的支撑实例的引用，子点击按钮后输入框获取焦点。

我们也可以使用 getDOMNode() 方法获取 DOM 元素

## 回调函数形式的refs

React 也支持另一种设置 refs 的方式，称为“回调 refs”。它能助你更精细地控制何时 refs 被设置和解除。

不同于传递 `createRef()` 创建的 `ref` 属性，你会传递一个函数。这个函数中接受 React 组件实例或 HTML DOM 元素作为参数，以使它们能在其他地方被存储和访问。

下面的例子描述了一个通用的范例：使用 `ref` 回调函数，在实例的属性中存储对 DOM 节点的引用。

```jsx
class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = null;
    this.setTextInputRef = element => {
      this.textInput = element;
    };

    this.focusTextInput = () => {
      // 使用原生 DOM API 使 text 输入框获得焦点
      if (this.textInput) this.textInput.focus();
    };
  }

  componentDidMount() {
    // 组件挂载后，让文本框自动获得焦点
    this.focusTextInput();
  }

  render() {
    // 使用 `ref` 的回调函数将 text 输入框 DOM 节点的引用存储到 React
    // 实例上（比如 this.textInput）
    return (
      <div>
        <input
          type="text"
          ref={this.setTextInputRef}
        />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
      </div>
    );
  }
}
```

React 将在组件挂载时，会调用 `ref` 回调函数并传入 DOM 元素，当卸载时调用它并传入 `null`。**在 `componentDidMount` 或 `componentDidUpdate` 触发前，React 会保证 refs 一定是最新的。**

你可以在组件间传递回调形式的 refs，就像你可以传递通过 `React.createRef()` 创建的对象 refs 一样。

```jsx
function CustomTextInput(props) {
  return (
    <div>
      <input ref={props.inputRef} />
    </div>
  );
}

class Parent extends React.Component {
  render() {
    return (
      <CustomTextInput
        inputRef={el => this.inputElement = el}
      />
    );
  }
}
```

在上面的例子中，`Parent` 把它的 refs 回调函数当作 `inputRef` props 传递给了 `CustomTextInput`，而且 `CustomTextInput` 把相同的函数作为特殊的 `ref` 属性传递给了 `<input>`。结果是，在 `Parent` 中的 `this.inputElement` 会被设置为与 `CustomTextInput` 中的 `input` 元素相对应的 DOM 节点。



```jsx
import './App.css';
import React, {Component} from 'react';
import PropTypes from 'prop-types';  //引入prop-types，用于对组件标签属性进行限制

class MyComponent extends Component {
  // 展示左侧输入框的数据
  showData = () => {
    console.log(this);
    const {input1} = this;
    console.log("input1:", input1.value);
  }

  // 展示右侧输入框的数据
  showData2 = () => {
    const {input2} = this;
    console.log("input2:", input2.value);
  }

  render() {
    return (
      <div>
        <h2>回调形式的ref</h2>
        <input ref={c => this.input1 = c } type="text" placeholder="点击按钮提示数据" />&nbsp;
        <button onClick={this.showData}>点击提示左侧的数据</button>&nbsp;
        <input ref={c => this.input2 = c} onBlur={this.showData2} type="text" placeholder="失去焦点提示数据" />
      </div>
    )
  }
}

export default MyComponent;
```

### 关于回调 refs 的说明

如果 `ref` 回调函数是以内联函数的方式定义的，**在更新过程中它会被执行两次，第一次传入参数 `null`，然后第二次会传入参数 DOM 元素。**这是因为在每次渲染时会创建一个新的函数实例，所以 React 清空旧的 ref 并且设置新的。

**通过将 ref 的回调函数定义成 class 的绑定函数的方式可以避免上述问题**，但是大多数情况下它是无关紧要的。

#### 回调ref中回调执行次数的问题

```jsx
import './App.css';
import React, {Component} from 'react';
import PropTypes from 'prop-types';  //引入prop-types，用于对组件标签属性进行限制

class MyComponent extends Component {
  state = {
    isHot: false
  }

  // 展示左侧输入框的数据
  showInfo = () => {
    const {input1} = this;
    console.log("input1:", input1.value);
  }

  changeWeather = () => {
    const {isHot} = this.state;
    this.setState({isHot: !isHot});
  }
	
    // 通过将 ref 的回调函数定义成 class 的绑定函数的方式可以避免上述问题
  saveInput = (currentNode) => {
    this.input1 = currentNode;
    console.log("@", currentNode);
  }

  render() {
    const {isHot} = this.state;
    return (
      <div>
        <h2>回调形式的ref</h2>
        <h4>今天天气很{isHot ? '炎热':'凉爽'}</h4>
        {/*<input ref={(currentNode) => {
            this.input1 = currentNode;
            console.log("@", currentNode);
          }
        } type="text" />&nbsp;*/}
        <input ref={this.saveInput} type="text" />&nbsp;
        <button onClick={this.showInfo}>点击提示输入的数据</button>&nbsp;
        <button onClick={this.changeWeather}>点我切换天气</button>
      </div>
    )
  }
}

export default MyComponent;
```

----

## createRef创建refs容器

### 创建 Refs

Refs 是使用 `React.createRef()` 创建的，并通过 `ref` 属性附加到 React 元素。**在构造组件时，通常将 Refs 分配给实例属性，以便可以在整个组件中引用它们。**

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  render() {
    return <div ref={this.myRef} />;
  }
}

```

### 访问 Refs

当 ref 被传递给 `render` 中的元素时，对该节点的引用可以在 ref 的 `current` 属性中被访问。

```js
const node = this.myRef.current;
```

ref 的值根据节点的类型而有所不同：

- 当 `ref` 属性用于 HTML 元素时，构造函数中使用 `React.createRef()` 创建的 `ref` **接收底层 DOM 元素**作为其 `current` 属性。
- 当 `ref` 属性用于自定义 class 组件时，`ref` 对象**接收组件的挂载实例**作为其 `current` 属性。
- **你不能在函数组件上使用 `ref` 属性**，因为他们没有实例。

以下例子说明了这些差异。

#### 为 DOM 元素添加 ref

以下代码使用 `ref` 去存储 DOM 节点的引用：

```jsx
class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    // 创建一个 ref 来存储 textInput 的 DOM 元素
    this.textInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  focusTextInput() {
    // 直接使用原生 API 使 text 输入框获得焦点
    // 注意：我们通过 "current" 来访问 DOM 节点
    this.textInput.current.focus();
  }

  render() {
    // 告诉 React 我们想把 <input> ref 关联到
    // 构造器里创建的 `textInput` 上
    return (
      <div>
        <input
          type="text"
          ref={this.textInput} />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
      </div>
    );
  }
}
```

React 会在组件挂载时给 `current` 属性传入 DOM 元素，并在组件卸载时传入 `null` 值。`ref` 会在 `componentDidMount` 或 `componentDidUpdate` 生命周期钩子触发前更新。

#### 为 class 组件添加 Ref

如果我们想包装上面的 `CustomTextInput`，来模拟它挂载之后立即被点击的操作，我们可以使用 ref 来获取这个自定义的 input 组件并手动调用它的 `focusTextInput` 方法：

```jsx
class AutoFocusTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  componentDidMount() {
    this.textInput.current.focusTextInput();
  }

  render() {
    return (
      <CustomTextInput ref={this.textInput} />
    );
  }
}
```

请注意，这仅在 `CustomTextInput` 声明为 class 时才有效：

```js
class CustomTextInput extends React.Component {
  // ...
}
```

#### Refs 与函数组件

默认情况下，**你不能在函数组件上使用 `ref` 属性**，因为它们没有实例：

```jsx
function MyFunctionComponent() {
  return <input />;
}

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }
  render() {
    // This will *not* work!
    return (
      <MyFunctionComponent ref={this.textInput} />
    );
  }
}
```

如果要在函数组件中使用 `ref`，你可以使用 [`forwardRef`](https://zh-hans.reactjs.org/docs/forwarding-refs.html)（可与 [`useImperativeHandle`](https://zh-hans.reactjs.org/docs/hooks-reference.html#useimperativehandle) 结合使用），或者可以将该组件转化为 class 组件。

不管怎样，你可以**在函数组件内部使用 `ref` 属性**，只要它指向一个 DOM 元素或 class 组件：

```jsx
function CustomTextInput(props) {
  // 这里必须声明 textInput，这样 ref 才可以引用它
  const textInput = useRef(null);

  function handleClick() {
    textInput.current.focus();
  }

  return (
    <div>
      <input
        type="text"
        ref={textInput} />
      <input
        type="button"
        value="Focus the text input"
        onClick={handleClick}
      />
    </div>
  );
}
```



```jsx
import './App.css';
import React, {Component} from 'react';
import PropTypes from 'prop-types';  //引入prop-types，用于对组件标签属性进行限制

class MyComponent extends Component {

  // React.createRef调用后可以返回一个容器，该容器可以存储被ref所标识的节点,该容器是“专人专用”的
  myRef = React.createRef();
  myRef2 = React.createRef();

  // 展示左侧输入框的数据
  showData = () => {
    // console.log(this.myRef);
    console.log("input1:", this.myRef.current.value);
  }

  // 展示右侧输入框的数据
  showData2 = () => {
    console.log("input2:", this.myRef2.current.value);
  }

  render() {
    return (
      <div>
        <h2>回调形式的ref</h2>
        <input ref={this.myRef} type="text" placeholder="点击按钮提示数据" />&nbsp;
        <button onClick={this.showData}>点击提示左侧的数据</button>&nbsp;
        <input ref={this.myRef2} onBlur={this.showData2} type="text" placeholder="失去焦点提示数据" />
      </div>
    )
  }
}

export default MyComponent;
```

---

### 将 DOM Refs 暴露给父组件

在极少数情况下，你可能希望在父组件中引用子节点的 DOM 节点。通常不建议这样做，因为它会打破组件的封装，**但它偶尔可用于触发焦点或测量子 DOM 节点的大小或位置。**

虽然你可以[向子组件添加 ref](https://zh-hans.reactjs.org/docs/refs-and-the-dom.html#adding-a-ref-to-a-class-component)，但这不是一个理想的解决方案，**因为你只能获取组件实例而不是 DOM 节点**。并且，**它还在函数组件上无效。**

如果你使用 16.3 或更高版本的 React, 这种情况下我们推荐使用 [ref 转发](https://zh-hans.reactjs.org/docs/forwarding-refs.html)。**Ref 转发使组件可以像暴露自己的 ref 一样暴露子组件的 ref**。关于怎样对父组件暴露子组件的 DOM 节点，在 [ref 转发文档](https://zh-hans.reactjs.org/docs/forwarding-refs.html#forwarding-refs-to-dom-components)中有一个详细的例子。

如果你使用 16.2 或更低版本的 React，或者你需要比 ref 转发更高的灵活性，你可以使用[这个替代方案](https://gist.github.com/gaearon/1a018a023347fe1c2476073330cc5509)将 ref 作为特殊名字的 prop 直接传递。

可能的话，**我们不建议暴露 DOM 节点**，但有时候它会成为救命稻草。注意这个方案需要你在子组件中增加一些代码。如果你对子组件的实现没有控制权的话，你剩下的选择是使用 [`findDOMNode()`](https://zh-hans.reactjs.org/docs/react-dom.html#finddomnode)，但在[`严格模式`](https://zh-hans.reactjs.org/docs/strict-mode.html#warning-about-deprecated-finddomnode-usage) 下已被废弃且不推荐使用。







----

# React 事件处理

React 元素的事件处理和 DOM 元素的很相似，但是有一点语法上的不同：

- React 事件的命名采用小驼峰式（camelCase），而不是纯小写。
- 使用 JSX 语法时你需要传入一个函数作为事件处理函数，而不是一个字符串。

例如，传统的 HTML：

```html
<button onclick="activateLasers()">
  Activate Lasers
</button>
```

在 React 中略微不同：

```jsx
<button onClick={activateLasers}>
  Activate Lasers
</button>
```

在 React 中另一个不同点是**你不能通过返回 `false` 的方式阻止默认行为**。你必须显式的使用 `preventDefault`。例如，传统的 HTML 中阻止表单的默认提交行为，你可以这样写：

```html
<form onsubmit="console.log('You clicked submit.'); return false">
  <button type="submit">Submit</button>
</form>
```

在 React 中，可能是这样的：

```jsx
function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}
```

在这里，`e` 是一个合成事件。React 根据 [W3C 规范](https://www.w3.org/TR/DOM-Level-3-Events/)来定义这些合成事件，所以你不需要担心跨浏览器的兼容性问题。**React 事件与原生事件不完全相同。**如果想了解更多，请查看 [`SyntheticEvent`](https://zh-hans.reactjs.org/docs/events.html) 参考指南。

使用 React 时，你一般不需要使用 `addEventListener` 为已创建的 DOM 元素添加监听器。**事实上，你只需要在该元素初始渲染的时候添加监听器即可。**

当你使用 [ES6 class](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes) 语法定义一个组件的时候，通常的做法是将事件处理函数声明为 class 中的方法。例如，下面的 `Toggle` 组件会渲染一个让用户切换开关状态的按钮：

```jsx
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // 为了在回调中使用 `this`，这个绑定是必不可少的
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}
```

你必须谨慎对待 JSX 回调函数中的 `this`，在 JavaScript 中，class 的方法默认不会[绑定](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_objects/Function/bind) `this`。**如果你忘记绑定 `this.handleClick` 并把它传入了 `onClick`，当你调用这个函数的时候 `this` 的值为 `undefined`。**

这并不是 React 特有的行为；这其实与 [JavaScript 函数工作原理](https://www.smashingmagazine.com/2014/01/understanding-javascript-function-prototype-bind/)有关。**通常情况下，如果你没有在方法后面添加 `()`**，例如 `onClick={this.handleClick}`，**你应该为这个方法绑定 `this`**。

```jsx
class LoggingButton extends React.Component {
  // 此语法确保 `handleClick` 内的 `this` 已被绑定。
  // 注意: 这是 *实验性* 语法。
  handleClick = () => {
    console.log('this is:', this);
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Click me
      </button>
    );
  }
}
```

[Create React App](https://github.com/facebookincubator/create-react-app) 默认启用此语法。

如果你没有使用 class fields 语法，你可以在回调中使用[箭头函数](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions)：

```jsx
class LoggingButton extends React.Component {
  handleClick() {
    console.log('this is:', this);
  }

  render() {
    // 此语法确保 `handleClick` 内的 `this` 已被绑定。
    return (
      <button onClick={() => this.handleClick()}>
        Click me
      </button>
    );
  }
}
```

此语法问题在于每次渲染 `LoggingButton` 时**都会创建不同的回调函数**。在大多数情况下，这没什么问题，**但如果该回调函数作为 prop 传入子组件时，这些组件可能会进行额外的重新渲染**。我们通常建议**在构造器中绑定或使用 class fields 语法来避免这类性能问**题。






1. 通过onXxx属性指定事件处理函数(注意大小写)

- React使用的是**自定义(合成)事件**, 而不是使用的原生DOM事件 --为了更好的兼容性

- React中的事件是通过**事件委托方式**处理的(委托给组件最外层的元素) -- 为了的高效

2. 通过event.target得到发生事件的DOM元素对象 -- 不要过度使用ref

```jsx
import './App.css';
import React, {Component} from 'react';
import PropTypes from 'prop-types';  //引入prop-types，用于对组件标签属性进行限制

class MyComponent extends Component {

  // React.createRef调用后可以返回一个容器，该容器可以存储被ref所标识的节点,该容器是“专人专用”的
  myRef = React.createRef();
  // 展示左侧输入框的数据
  showData = (event) => {
    // console.log(event.target.value);
    console.log("input1:", this.myRef.current.value);
  }

  // 展示右侧输入框的数据
  showData2 = (event) => {
    console.log("input2:", event.target.value);
  }

  render() {
    return (
      <div>
        <h2>事件处理</h2>
        <input ref={this.myRef} type="text" placeholder="点击按钮提示数据" />&nbsp;
        <button onClick={this.showData}>点击提示左侧的数据</button>&nbsp;
        <input onBlur={this.showData2} type="text" placeholder="失去焦点提示数据" />
      </div>
    )
  }
}

export default MyComponent;
```



## 向事件处理程序传递参数

在循环中，通常我们会为事件处理函数传递额外的参数。例如，若 `id` 是你要删除那一行的 ID，以下两种方式都可以向事件处理函数传递参数：

```jsx
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
```

上述两种方式是等价的，分别通过[箭头函数](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)和 [`Function.prototype.bind`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind) 来实现。

在这两种情况下，React 的事件对象 `e` 会被作为第二个参数传递。**如果通过箭头函数的方式，事件对象必须显式的进行传递**，而通过 `bind` 的方式，事件对象以及更多的参数将会被隐式的进行传递。

值得注意的是，**通过 bind 方式向监听函数传参**，在类组件中定义的监听函数，事件对象 e 要排在所传递参数的后面，例如：

```jsx
class Popper extends React.Component{
    constructor(){
        super();
        this.state = {name:'Hello world!'};
    }
    preventPop(name, e){    //事件对象e要放在最后
        e.preventDefault();
        alert(name);
    }
    render(){
        return (
            <div>
                <p>hello</p>
                {/* 通过 bind() 方法传递参数。 */}
                <a href="https://reactjs.org" onClick={this.preventPop.bind(this,this.state.name)}>Click</a>
            </div>
        );
    }
}
```

----

# React 表单与事件

在 React 里，HTML 表单元素的工作方式和其他的 DOM 元素有些不同，**这是因为表单元素通常会保持一些内部的 state**。例如这个纯 HTML 表单只接受一个名称：

```html
<form>
  <label>
    名字:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="提交" />
</form>
```

此表单具有默认的 HTML 表单行为，即在用户提交表单后浏览到新页面。如果你在 React 中执行相同的代码，它依然有效。但大多数情况下，使用 JavaScript 函数可以很方便的处理表单的提交， 同时还可以访问用户填写的表单数据。实现这种效果的标准方式是使用“受控组件”。

在 HTML 当中，像 `<input>`, `<textarea>`, 和 `<select>` 这类表单元素会维持自身状态，并根据用户输入进行更新。**但在 React 中，可变的状态通常保存在组件的状态属性中**，并且只能用 setState() 方法进行更新。

## 非受控组件



现用现取

```jsx
import './App.css';
import React, {Component} from 'react';
import PropTypes from 'prop-types';  //引入prop-types，用于对组件标签属性进行限制

class MyComponent extends Component {
  handleSubmit = (event) => {
    event.preventDefault();  //阻止表单提交
    // console.log(this);
    const {username, password} = this;
    console.log(`输入的用户名：${username.value}, 密码：${password.value}`);
  }

  render() {
    return (
      <div>
        <h2>收集表单数据</h2>
        <form onSubmit={this.handleSubmit}>
          User Name:<input ref={c => this.username = c} type="text" name="username" placeholder="用户名" />&nbsp;
          Password:<input ref={c => this.password = c} type="password" name="password" placeholder="密码" />&nbsp;
          <button>login</button>
        </form>
      </div>
    )
  }
}

export default MyComponent;
```

## 受控组件

在 HTML 中，表单元素（如`<input>`、 `<textarea>` 和 `<select>`）通常自己维护 state，并根据用户输入进行更新。而在 React 中，可变状态（mutable state）通常保存在组件的 state 属性中，并且只能通过使用 [`setState()`](https://zh-hans.reactjs.org/docs/react-component.html#setstate)来更新。

**我们可以把两者结合起来，使 React 的 state 成为“唯一数据源”**。渲染表单的 React 组件还控制着用户输入过程中表单发生的操作。

被 React **以这种方式控制取值的表单输入元素**就叫做“**受控组件**”。

例如，如果我们想让前一个示例在提交时打印出名称，我们可以将表单写为受控组件：

```jsx
import './App.css';
import React, {Component} from 'react';
import PropTypes from 'prop-types';  //引入prop-types，用于对组件标签属性进行限制

class MyComponent extends Component {
  // 初始化状态
  state = {
    username: "",  // 用户名
    password: "",  // 密码
  }

  // 保存用户名到状态中
  saveUsername = (event) => {
    this.setState({username: event.target.value});
  }
  // 保存密码到状态中
  savePassword = (event) => {
    this.setState({password: event.target.value});
  }

  // 表单提交的回调
  handleSubmit = (event) => {
    event.preventDefault();  //阻止表单提交
    // console.log(this);
    const {username, password} = this.state;
    console.log(`输入的用户名：${username}, 密码：${password}`);
  }

  render() {
    return (
      <div>
        <h2>收集表单数据</h2>
        <form onSubmit={this.handleSubmit}>
          User Name:<input onChange={this.saveUsername} type="text" name="username" />&nbsp;
          Password:<input onChange={this.savePassword} type="password" name="password" />&nbsp;
          <button>login</button>
        </form>
      </div>
    )
  }
}

export default MyComponent;
```

由于在表单元素上设置了 `value` 属性，因此显示的值将始终为 `this.state.value`，**这使得 React 的 state 成为唯一数据源。由于 `handlechange` 在每次按键时都会执行并更新 React 的 state，因此显示的值将随着用户输入而更新。**

**对于受控组件来说，输入的值始终由 React 的 state 驱动**。你也可以将 value 传递给其他 UI 元素，或者通过其他事件处理函数重置，但这意味着你需要编写更多的代码。

---

## 受控输入空值

在[受控组件](https://zh-hans.reactjs.org/docs/forms.html#controlled-components)上指定 `value` 的 prop 会阻止用户更改输入。如果你指定了 `value`，但输入仍可编辑，则可能是你意外地将 `value` 设置为 `undefined` 或 `null`。

下面的代码演示了这一点。（输入最初被锁定，但在短时间延迟后变为可编辑。）

```jsx
ReactDOM.createRoot(mountNode).render(<input value="hi" />);

setTimeout(function() {
  ReactDOM.createRoot(mountNode).render(<input value={null} />);
}, 1000);
```

## 受控组件的替代品

有时使用受控组件会很麻烦，因为你需要为数据变化的每种方式都编写事件处理函数，并通过一个 React 组件传递所有的输入 state。当你将之前的代码库转换为 React 或将 React 应用程序与非 React 库集成时，这可能会令人厌烦。在这些情况下，你可能希望使用[非受控组件](https://zh-hans.reactjs.org/docs/uncontrolled-components.html), 这是实现输入表单的另一种方式。

## 成熟的解决方案

如果你想寻找包含验证、追踪访问字段以及处理表单提交的完整解决方案，使用 [Formik](https://jaredpalmer.com/formik) 是不错的选择。然而，它也是建立在受控组件和管理 state 的基础之上 —— 所以不要忽视学习它们。



---

## 使用高阶函数和函数柯里化

```js
				/* 
					高阶函数：如果一个函数符合下面2个规范中的任何一个，那该函数就是高阶函数。
									1.若A函数，接收的参数是一个函数，那么A就可以称之为高阶函数。
									2.若A函数，调用的返回值依然是一个函数，那么A就可以称之为高阶函数。
									常见的高阶函数有：Promise、setTimeout、arr.map()等等

					函数的柯里化：通过函数调用继续返回函数的方式，实现多次接收参数最后统一处理的函数编码形式。 
						function sum(a){
							return(b)=>{
								return (c)=>{
									return a+b+c
								}
							}
						}
					*/
```

```jsx
import './App.css';
import React, {Component} from 'react';
import PropTypes from 'prop-types';  //引入prop-types，用于对组件标签属性进行限制

class MyComponent extends Component {
  // 初始化状态
  state = {
    username: "",  // 用户名
    password: "",  // 密码
  }

  saveFormData = (dataType) => {
    return (event) => {
      this.setState({[dataType]: event.target.value});
    }
  }

  // 表单提交的回调
  handleSubmit = (event) => {
    event.preventDefault();  //阻止表单提交
    // console.log(this);
    const {username, password} = this.state;
    console.log(`输入的用户名：${username}, 密码：${password}`);
  }

  render() {
    return (
      <div>
        <h2>收集表单数据</h2>
        <form onSubmit={this.handleSubmit}>
          User Name:<input onChange={this.saveFormData("username")} type="text" name="username" />&nbsp;
          Password:<input onChange={this.saveFormData("password")} type="password" name="password" />&nbsp;
          <button>login</button>
        </form>
      </div>
    )
  }
}

export default MyComponent;
```

## 不用函数柯里化实现

```jsx
import './App.css';
import React, {Component} from 'react';
import PropTypes from 'prop-types';  //引入prop-types，用于对组件标签属性进行限制

class MyComponent extends Component {
  // 初始化状态
  state = {
    username: "",  // 用户名
    password: "",  // 密码
  }

  saveFormData = (dataType, event) => {
    this.setState({[dataType]: event.target.value});
  }

  // 表单提交的回调
  handleSubmit = (event) => {
    event.preventDefault();  //阻止表单提交
    // console.log(this);
    const {username, password} = this.state;
    console.log(`输入的用户名：${username}, 密码：${password}`);
  }

  render() {
    return (
      <div>
        <h2>收集表单数据</h2>
        <form onSubmit={this.handleSubmit}>
          User Name:<input onChange={event => this.saveFormData("username", event)} type="text" name="username" />&nbsp;
          Password:<input onChange={event => this.saveFormData("password", event)} type="password" name="password" />&nbsp;
          <button>login</button>
        </form>
      </div>
    )
  }
}

export default MyComponent;
```



----

## textarea 标签

在 HTML 中, `<textarea>` 元素通过其子元素定义其文本:

```html
<textarea>
  你好， 这是在 text area 里的文本
</textarea>
```

而在 React 中，`<textarea>` 使用 `value` 属性代替。这样，可以使得使用 `<textarea>` 的表单和使用单行 input 的表单非常类似：

```jsx
class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '请撰写一篇关于你喜欢的 DOM 元素的文章.'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('提交的文章: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          文章:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="提交" />
      </form>
    );
  }
}
```

请注意，`this.state.value` 初始化于构造函数中，因此文本区域默认有初值。

----



## Select 下拉菜单

在 HTML 中，`<select>` 创建下拉列表标签。例如，如下 HTML 创建了水果相关的下拉列表：

```html
<select>
  <option value="grapefruit">葡萄柚</option>
  <option value="lime">酸橙</option>
  <option selected value="coconut">椰子</option>
  <option value="mango">芒果</option>
</select>
```

请注意，由于 `selected` 属性的缘故，椰子选项默认被选中。**React 并不会使用 `selected` 属性，而是在根 `select` 标签上使用 `value` 属性。**这在受控组件中更便捷，因为您只需要在根标签中更新它。例如：

```jsx
class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'coconut'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('你喜欢的风味是: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          选择你喜欢的风味:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">葡萄柚</option>
            <option value="lime">酸橙</option>
            <option value="coconut">椰子</option>
            <option value="mango">芒果</option>
          </select>
        </label>
        <input type="submit" value="提交" />
      </form>
    );
  }
}
```

总的来说，这使得 `<input type="text">`, `<textarea>` 和 `<select>` 之类的标签都非常相似—它们都接受一个 `value` 属性，你可以使用它来实现受控组件。

注意

你可以将数组传递到 `value` 属性中，以支持在 `select` 标签中选择多个选项：

```jsx
<select multiple={true} value={['B', 'C']}>
```

----

## 文件 input 标签

在 HTML 中，`<input type="file">` 允许用户从存储设备中选择一个或多个文件，将其上传到服务器，或通过使用 JavaScript 的 [File API](https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications) 进行控制。

```html
<input type="file" />
```

因为它的 value 只读，所以它是 React 中的一个**非受控**组件。将与其他非受控组件[在后续文档中](https://zh-hans.reactjs.org/docs/uncontrolled-components.html#the-file-input-tag)一起讨论。

----



## 多个表单

当需要处理多个 `input` 元素时，我们可以给每个元素添加 `name` 属性，**并让处理函数根据 `event.target.name` 的值选择要执行的操作**。

例如：

```jsx
class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form>
        <label>
          参与:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          来宾人数:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
      </form>
    );
  }
}
```

这里使用了 ES6 [计算属性名称](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Object_initializer#Computed_property_names)的语法更新给定输入名称对应的 state 值：

例如：

```js
this.setState({
  [name]: value});
```

等同 ES5:

```js
var partialState = {};
partialState[name] = value;
this.setState(partialState);
```

另外，由于 `setState()` 自动[将部分 state 合并到当前 state](https://zh-hans.reactjs.org/docs/state-and-lifecycle.html#state-updates-are-merged), 只需调用它更改部分 state 即可。



----

## React 事件

以下实例演示通过 onClick 事件来修改数据：

```jsx
class HelloMessage extends React.Component {
  constructor(props) {
      super(props);
      this.state = {value: 'Hello axihe!'};
      this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({value: '阿西河前端教程'})
  }
  render() {
    var value = this.state.value;
    return <div>
            <button onClick={this.handleChange}>点我</button>
            <h4>{value}</h4>
           </div>;
  }
}
ReactDOM.render(
  <HelloMessage />,
  document.getElementById('example')
);
```

当你需要从子组件中更新父组件的 state 时，你需要在父组件通过创建事件句柄 (handleChange) ，并作为 prop (updateStateProp) 传递到你的子组件上。实例如下：

```jsx
class Content extends React.Component {
  render() {
    return  <div>
              <button onClick = {this.props.updateStateProp}>点我</button>
              <h4>{this.props.myDataProp}</h4>
           </div>
  }
}
class HelloMessage extends React.Component {
  constructor(props) {
      super(props);
      this.state = {value: 'Hello axihe!'};
      this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({value: '阿西河前端教程'})
  }
  render() {
    var value = this.state.value;
    return <div>
            <Content myDataProp = {value}
              updateStateProp = {this.handleChange}></Content>
           </div>;
  }
}
ReactDOM.render(
  <HelloMessage />,
  document.getElementById('example')
);
```







-----

# React 条件渲染

在 React 中，你可以创建不同的组件来封装各种你需要的行为。然后还可以根据应用的状态变化只渲染其中的一部分。

React 中的条件渲染和 JavaScript 中的一致，使用 JavaScript 操作符 if 或条件运算符来创建表示当前状态的元素，然后让 React 根据它们来更新 UI。

先来看两个组件：

```js
function UserGreeting(props){
    return "欢迎回来!";
}
function GuestGreeting(props){
    return "请先注册。";
}
```

我们将创建一个 Greeting 组件，它会根据用户是否登录来显示其中之一：

```jsx
function Greeting(props){
    const isLoggedIn=props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}

ReactDOM.render(
    <Greeting isLoggedIn={false} />,
    document.getElementById("example")
);
```

## 元素变量

你可以使用变量来储存元素。它可以帮助你有条件的渲染组件的一部分，而输出的其他部分不会更改。

在下面的例子中，我们将要创建一个名为 LoginControl 的有状态的组件。

它会根据当前的状态来渲染 或 ，它也将渲染前面例子中的 。

```jsx
class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }
  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }
  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }
  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button = null;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }
    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}
ReactDOM.render(
  <LoginControl />,
  document.getElementById('example')
);
```

## 与运算符 &&

你可以通过用花括号包裹代码在 JSX 中嵌入任何表达式 ，也包括 JavaScript 的逻辑与 &&，它可以方便地条件渲染一个元素。

```jsx
function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&
        <h2>
          您有 {unreadMessages.length} 条未读信息。
        </h2>
      }
    </div>
  );
}
const messages = ['React', 'Re: React', 'Re:Re: React'];
ReactDOM.render(
  <Mailbox unreadMessages={messages} />,
  document.getElementById('example')
);
```

在 JavaScript 中，true && expression 总是返回 **expression**，而 false && expression 总是返回 **false**。

因此，如果条件是 **true**，&& 右侧的元素就会被渲染，如果是 **false**，React 会忽略并跳过它。

## 三目运算符

条件渲染的另一种方法是使用 JavaScript 的条件运算符：

```js
condition ? true : false。
```

在下面的例子中，我们用它来有条件的渲染一小段文本。

```jsx
render() { 
    const isLoggedIn = this.state.isLoggedIn; 
    return (

		The user is **{isLoggedIn ? ‘currently’ : ‘not’}** logged in.
); } 
```

同样它也可以用在较大的表达式中，虽然不太直观：

```jsx
render() {
  const isLoggedIn = this.state.isLoggedIn;
  return (
    <div>
      {isLoggedIn ? (
        <LogoutButton onClick={this.handleLogoutClick} />
      ) : (
        <LoginButton onClick={this.handleLoginClick} />
      )}
    </div>
  );
}
```

## 阻止组件渲染

在极少数情况下，你可能希望隐藏组件，即使它被其他组件渲染。让 render 方法返回 null 而不是它的渲染结果即可实现。

在下面的例子中， `<WarningBanner />`根据属性 warn 的值条件渲染。如果 warn 的值是 false，则组件不会渲染：

```jsx
function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }
  return (
    <div className="warning">
      警告!
    </div>
  );
}
class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: true}
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }
  handleToggleClick() {
    this.setState(prevState => ({
      showWarning: !prevState.showWarning
    }));
  }
  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? '隐藏' : '显示'}
        </button>
      </div>
    );
  }
}
ReactDOM.render(
  <Page />,
  document.getElementById('example')
);
```

组件的 render 方法返回 null 并不会影响该组件生命周期方法的回调。例如，componentWillUpdate 和 componentDidUpdate 依然可以被调用。



# React 列表 & Keys

我们可以使用 JavaScript 的 map() 方法 来创建列表。

使用 map() 方法遍历数组生成了一个 1 到 5 的数字列表：

```jsx
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((numbers) =>
  <li>{numbers}</li>
);
ReactDOM.render(
  <ul>{listItems}</ul>,
  document.getElementById('example')
);
```

我们可以将以上实例重构成一个组件，组件接收数组参数，每个列表元素分配一个 key，不然会出现警告 a key should be provided for list items，**意思就是需要包含 key**：

```jsx
function NumberList(props){
  const numbers=props.numbers;
  const listItems=numbers.map((number)=>
    <li key={number.toString()}>{number}</li>
    );
    return (
      <ul>{listItems}</ul>
    );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('example')
);
```

## Keys

Keys 可以在 DOM 中的某些元素被增加或删除的时候帮助 React 识别哪些元素发生了变化。因此你应当给数组中的每一个元素赋予一个确定的标识。

```jsx
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
    {number}
);
```

一个元素的 key 最好是这个元素在列表中拥有的一个独一无二的字符串。**通常，我们使用来自数据的 id 作为元素的 key**:

```jsx
const todoItems = todos.map((todo) =>
  <li key={todo.id}>
    {todo.text}
  </li>
);
```

当元素没有确定的 id 时，你可以使用他的序列号索引 index 作为 key：

```jsx
const todoItems = todos.map((todo, index) =>
  // 只有在没有确定的 id 时使用
  <li key={index}>
    {todo.text}
  </li>
);
```

如果列表可以重新排序，我们不建议使用索引来进行排序，因为这会导致渲染变得很慢。

## 用 keys 提取组件

元素的 key 只有在它和它的兄弟节点对比时才有意义。

比方说，如果你提取出一个 ListItem 组件，你应该把 key 保存在数组中的这个 元素上，而不是放在 ListItem 组件中的 li 元素上。

### 错误的示范

```jsx
function ListItem(props) {
  const value = props.value;
  return (
    // 错啦！你不需要在这里指定key:
    <li key={value.toString()}>
      {value}
    </li>
  );
}
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    //错啦！元素的key应该在这里指定：
    <ListItem value={number} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}
const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('example')
);
```

### key 的正确使用方式

```jsx
function ListItem(props) {
  // 对啦！这里不需要指定key:
  return <li>{props.value}</li>;
}
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    // 又对啦！key应该在数组的上下文中被指定
    <ListItem key={number.toString()}
              value={number} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}
const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('example')
);
```

当你在 map() 方法的内部调用元素时，你最好随时记得为每一个元素加上一个独一无二的 key。

## 元素的 key 在他的兄弟元素之间应该唯一

数组元素中使用的 key 在其兄弟之间应该是独一无二的。然而，它们不需要是全局唯一的。当我们生成两个不同的数组时，我们可以使用相同的键。

```jsx
function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map((post) =>
        <li key={post.id}>
          {post.title}
        </li>
      )}
    </ul>
  );
  const content = props.posts.map((post) =>
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );
  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}
const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];
ReactDOM.render(
  <Blog posts={posts} />,
  document.getElementById('example')
);
```

key 会作为给 React 的提示，但不会传递给你的组件。如果您的组件中需要使用和 key 相同的值，请将其作为属性传递：

```jsx
const content = posts.map((post) =>
  <Post
    key={post.id}
    id={post.id}
    title={post.title} />
);
```

## 在 jsx 中嵌入 map()

在上面的例子中，我们声明了一个单独的 listItems 变量并将其包含在 JSX 中：

```jsx
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <ListItem key={number.toString()}
              value={number} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}
```

JSX 允许在大括号中嵌入任何表达式，所以我们可以在 map() 中这样使用：

```jsx
function NumberList(props) {
  const numbers = props.numbers;
  return (
    <ul>
      {numbers.map((number) =>
        <ListItem key={number.toString()}
                  value={number} />
      )}
    </ul>
  );
}
```

这么做有时可以使你的代码更清晰，但有时这种风格也会被滥用。就像在 JavaScript 中一样，何时需要为了可读性提取出一个变量，这完全取决于你。但请记住，如果一个 map() 嵌套了太多层级，那你就可以提取出组件。



# React 组件 API

## React 组件 API

在本章节中我们将讨论 React 组件 API。我们将讲解以下 7 个方法：

- 设置状态：setState
- 替换状态：replaceState
- 设置属性：setProps
- 替换属性：replaceProps
- 强制更新：forceUpdate
- 获取 DOM 节点：findDOMNode
- 判断组件挂载状态：isMounted

## 设置状态：setState

```js
setState(object nextState[, function callback])
```

### 参数说明

- **nextState**，将要设置的新状态，该状态会和当前的**state**合并
- **callback**，可选参数，回调函数。该函数会在**setState**设置成功，且组件重新渲染后调用。

合并 nextState 和当前 state，并重新渲染组件。setState 是 React 事件处理函数中和请求回调函数中触发 UI 更新的主要方法。

### 关于 setState

不能在组件内部通过 this.state 修改状态，因为该状态会在调用 setState() 后被替换。

setState() 并不会立即改变 this.state，而是创建一个即将处理的 state。setState() 并不一定是同步的，为了提升性能 React 会批量执行 state 和 DOM 渲染。

setState() 总是会触发一次组件重绘，除非在 shouldComponentUpdate() 中实现了一些条件渲染逻辑。

```jsx
class Counter extends React.Component{
  constructor(props) {
      super(props);
      this.state = {clickCount: 0};
      this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(function(state) {
      return {clickCount: state.clickCount + 1};
    });
  }
  render () {
    return (<h2 onClick={this.handleClick}>点我！点击次数为: {this.state.clickCount}</h2>);
  }
}
ReactDOM.render(
  <Counter />,
  document.getElementById('example')
);

```

实例中通过点击 h2 标签来使得点击计数器加 1。

## 替换状态：replaceState

```
replaceState(object nextState[, function callback])
```

- **nextState**，将要设置的新状态，该状态会替换当前的**state**。
- **callback**，可选参数，回调函数。该函数会在**replaceState**设置成功，且组件重新渲染后调用。

**replaceState()\**方法与\**setState()\**类似，但是方法只会保留\**nextState**中状态，原**state**不在**nextState**中的状态都会被删除。

## 设置属性：setProps

```
setProps(object nextProps[, function callback])
```

- **nextProps**，将要设置的新属性，该状态会和当前的**props**合并
- **callback**，可选参数，回调函数。该函数会在**setProps**设置成功，且组件重新渲染后调用。

设置组件属性，并重新渲染组件。

**props**相当于组件的数据流，它总是会从父组件向下传递至所有的子组件中。当和一个外部的 JavaScript 应用集成时，我们可能会需要向组件传递数据或通知**React.render()\**组件需要重新渲染，可以使用\**setProps()**。

更新组件，我可以在节点上再次调用**React.render()**，也可以通过**setProps()**方法改变组件属性，触发组件重新渲染。

## 替换属性：replaceProps

```
replaceProps(object nextProps[, function callback])
```

- **nextProps**，将要设置的新属性，该属性会替换当前的**props**。
- **callback**，可选参数，回调函数。该函数会在**replaceProps**设置成功，且组件重新渲染后调用。

**replaceProps()\**方法与\**setProps**类似，但它会删除原有 props。

## 强制更新：forceUpdate

```
forceUpdate([function callback])
```

### 参数说明

- **callback**，可选参数，回调函数。该函数会在组件**render()**方法调用后调用。

forceUpdate() 方法会使组件调用自身的 render() 方法重新渲染组件，组件的子组件也会调用自己的 render()。但是，组件重新渲染时，依然会读取 this.props 和 this.state，如果状态没有改变，那么 React 只会更新 DOM。

forceUpdate() 方法适用于 this.props 和 this.state 之外的组件重绘（如：修改了 this.state 后），通过该方法通知 React 需要调用 render()

一般来说，**应该尽量避免使用 forceUpdate()**，而**仅从 this.props 和 this.state 中读取状态并由 React 触发 render() 调用**。

## 获取 DOM 节点：findDOMNode

```
DOMElement findDOMNode()
```

- 返回值：DOM 元素 DOMElement

如果组件已经挂载到 DOM 中，该方法返回对应的本地浏览器 DOM 元素。当**render**返回**null** 或 **false**时，**this.findDOMNode()\**也会返回\**null**。从 DOM 中读取值的时候，该方法很有用，如：获取表单字段的值和做一些 DOM 操作。

## 判断组件挂载状态：isMounted

```
bool isMounted()
```

- 返回值：**true**或**false**，表示组件是否已挂载到 DOM 中

**isMounted()**方法用于判断组件是否已挂载到 DOM 中。可以使用该方法保证了**setState()**和**forceUpdate()**在异步场景下的调用不会出错。

---

# React 组件生命周期

每个组件都包含 “生命周期方法”，你可以重写这些方法，以便于在运行过程中特定的阶段执行这些方法。**你可以使用此[生命周期图谱](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)作为速查表**。在下述列表中，常用的生命周期方法会被加粗。其余生命周期函数的使用则相对罕见。

组件的生命周期可分成三个状态：

- Mounting：已插入真实 DOM
- Updating：正在被重新渲染
- Unmounting：已移出真实 DOM

#### 挂载

当组件实例被创建并插入 DOM 中时，其生命周期调用顺序如下：

- **constructor**()
- static getDerivedStateFromProps()
- **render**()
- **componentDidMount**()

> 注意:
>
> 下述生命周期方法即将过时，在新代码中应该避免使用它们：
>
> UNSAFE_componentWillMount()

#### 更新

当组件的 props 或 state 发生变化时会触发更新。组件更新的生命周期调用顺序如下：

- static getDerivedStateFromProps()
- shouldComponentUpdate()
- **render**()
- getSnapshotBeforeUpdate()
- **componentDidUpdate**()

>注意:
>
>下述方法即将过时，在新代码中应该避免使用它们：
>
>UNSAFE_componentWillUpdate()
>
>UNSAFE_componentWillReceiveProps()

#### 卸载

当组件从 DOM 中移除时会调用如下方法：

- **componentWillUnmount**()

#### 错误处理

当渲染过程，生命周期，或子组件的构造函数中抛出错误时，会调用如下方法：

- static getDerivedStateFromError()
- componentDidCatch()



生命周期的方法有：

- componentWillMount : **在渲染前调用**，在客户端也在服务端。
- componentDidMount : 	在第一次渲染后调用，**只在客户端**。	之后组件已经生成了对应的 DOM 结构，可以通过 this.getDOMNode() 来进行访问。 	如果你想和其他 JavaScript 框架一起使用，可以在这个方法中调用 setTimeout, setInterval 或者发送 AJAX 请求等操作（防止异步	操作阻塞 UI)。
- componentWillReceiveProps:  **在组件接收到一个新的 prop （更新后）时被调用**。这个方法在初始化 render 时不会被调用。
- shouldComponentUpdate:  返回一个布尔值。**在组件接收到新的 props 或者 state 时被调用**。在初始化时或者使用 forceUpdate 时不被调用。 **可以在你确认不需要更新组件时使用**。
- componentWillUpdate:   在组件接收到新的 props 或者 state **但还没有 render 时被调用**。在初始化时不会被调用。
- componentDidUpdate:  **在组件完成更新后立即调用**。在初始化时不会被调用。
- componentWillUnmount:  在组件从 DOM 中移除之前立刻被调用。

----

## 引出生命周期

### 理解

1. 组件从创建到死亡它会经历一些特定的阶段。

2. React组件中包含一系列勾子函数(生命周期回调函数), 会在特定的时刻调用。

3. 我们在定义组件时，会在特定的生命周期回调函数中，做特定的工作。



```jsx
import './App.css';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';  //引入prop-types，用于对组件标签属性进行限制

//创建组件
// 生命周期回调函数 <==> 生命周期钩子函数 <==> 生命周期函数 <==> 生命周期钩子
class MyComponent extends Component {
  state = {
    opacity: 1
  }
  death = () => {
    // 卸载组件
    ReactDOM.unmountComponentAtNode(document.getElementById("root"));
  }

  // 组件挂载完毕
  componentDidMount() {
    console.log("componentDidMount");
    this.timer = setInterval(() => {
      // 获取原状态
      let {opacity} = this.state;
      opacity -= 0.1;
      if (opacity <= 0) {
        opacity = 1;
      }
      this.setState({opacity});
    }, 200);
  }

  // 组件将要卸载
  componentWillUnmount() {
    // 清除定时器
    console.log("componentWillUnmount");
    clearInterval(this.timer);
  }
  render() {
    console.log("render");
    return (
      <div>
        <h2 style={{opacity: this.state.opacity, color: "#345678"}}>React怎么学习？</h2>
        <button onClick={this.death}>try</button>
      </div>
    )
  }
}

export default MyComponent;
```

----

## react生命周期(旧)

![image-20220609195616524](E:\pogject\学习笔记\image\js\react生命周期旧)

生命周期的三个阶段（旧）

   **1.** **初始化阶段:** 由ReactDOM.render()触发---初次渲染

1. constructor()

2. componentWillMount()

3. render()

4. componentDidMount()   =====> **常用**,  一般在这个钩子中做一些初始化的事，例如：**开启定时器、发送网络请求、订阅消息**

   **2.** **更新阶段:** 由组件内部this.setSate()或父组件重新render触发

1. shouldComponentUpdate()

2. componentWillUpdate()

3. render()   =====> 必须使用的一个

4. componentDidUpdate()

​    **3.** **卸载组件:** 由ReactDOM.unmountComponentAtNode()触发

1. componentWillUnmount()  =====> **常用**   ，一般在这个钩子中做一些收尾的事，例如：**关闭定时器、取消订阅消息**



```jsx
import './App.css';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';  //引入prop-types，用于对组件标签属性进行限制

//创建组件
class MyComponent extends Component {
  // 构造器
  constructor(props) {
    console.log("Count --- constructor");
    super(props);
    this.state = {count: 0};
  }

  // 加1按钮的回调
  add = () => {
    // 获取原状态
    const {count} = this.state;
    // 更新状态
    this.setState({count: count + 1})
  }

  // 卸载组件按钮的回调
  death = () => {
    // 卸载组件
    ReactDOM.unmountComponentAtNode(document.getElementById("root"));
  }

  // 强制更新按钮的回调
  force = () => {
    this.forceUpdate();
  }

  // 组件将要挂载
  componentWillMount() {
    console.log("Count --- componentWillMount");
  }

  // 组件挂载完毕
  componentDidMount() {
    console.log("Count --- componentDidMount");
  }

  // 控制组件更新的“阀门”
  shouldComponentUpdate() {
    console.log("Count --- shouldComponentUpdate");
    // 写了必需返回 true 才能更新
    return true;
  }

  // 组件将要更新的钩子
  componentWillUpdate() {
    console.log("Count --- componentWillUpdate");
  }

  // 组件更新完毕的钩子
  componentDidUpdate() {
    console.log("Count --- componentDisUpdate");
  }

  // 组件将要卸载
  componentWillUnmount() {
    console.log("Count --- componentWillUnmount");
  }


  render() {
    console.log("Count --- render");
    const {count} = this.state;
    return (
      <div>
        <h2 style={{opacity: this.state.opacity, color: "#345678"}}>当前求和为：{count}</h2>
        <button onClick={this.add}>add</button>
        <button onClick={this.death}>卸载组件</button>
        <button onClick={this.force}>强制更新</button>
      </div>
    )
  }
}

export default MyComponent;
```



父子组件

```jsx
// 父组件A
class A extends React.Component {
	// 初始化状态
	state = {carName: "OOOO"};
	
	changeCar = () => {
		this.setState({carName: "BMW"});
	}

	render() {
		return (
			<div>
				<div>我是A组件</div>
				<button onClick={this.changeCar}>换车</button>
				<B carName={this.state.carName} />
			</div>
		)
	}
}

// 子组件B
class B extends React.Component {

	// 组件将要接收新的props的钩子
	componentWillReceiveProps(props) {
		console.log("B --- componentWillReceiveProps", props);
	}

	  // 控制组件更新的“阀门”
  shouldComponentUpdate() {
    console.log("B --- shouldComponentUpdate");
    // 写了必需返回 true 才能更新
    return true;
  }

  // 组件将要更新的钩子
  componentWillUpdate() {
    console.log("B --- componentWillUpdate");
  }

  // 组件更新完毕的钩子
  componentDidUpdate() {
    console.log("B --- componentDisUpdate");
  }

  // 组件将要卸载
  componentWillUnmount() {
    console.log("B --- componentWillUnmount");
  }

  render() {
  	console.log("B --- render");
  	return (
  		<div>我是B组件，接收到的车是:{this.props.carName}</div>
  	);
  }
}

// 渲染组件到页面
ReactDOM.render(<A />, document.getElementById("test"));

```

----

## 生命周期流程图(新)

![image-20220610113442372](C:\Users\1111\AppData\Roaming\Typora\typora-user-images\image-20220610113442372.png)

生命周期的三个阶段（新）

**1.** **初始化阶段:** 由ReactDOM.render()触发---初次渲染

1. constructor()

2. **getDerivedStateFromProps** 

3. render()

4. componentDidMount()

**2.** **更新阶段:** 由组件内部this.setSate()或父组件重新render触发

1. **getDerivedStateFromProps**

2. shouldComponentUpdate()

3. render()

4. **getSnapshotBeforeUpdate**

5. componentDidUpdate()

  **3.** **卸载组件:** 由ReactDOM.unmountComponentAtNode()触发

1. componentWillUnmount()



```jsx
import './App.css';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';  //引入prop-types，用于对组件标签属性进行限制

      /* 
        1. 初始化阶段: 由ReactDOM.render()触发---初次渲染
                1.  constructor()
                2.  getDerivedStateFromProps 
                3.  render()
                4.  componentDidMount() =====> 常用
                      一般在这个钩子中做一些初始化的事，例如：开启定时器、发送网络请求、订阅消息
        2. 更新阶段: 由组件内部this.setSate()或父组件重新render触发
                1.  getDerivedStateFromProps
                2.  shouldComponentUpdate()
                3.  render()
                4.  getSnapshotBeforeUpdate
                5.  componentDidUpdate()
        3. 卸载组件: 由ReactDOM.unmountComponentAtNode()触发
                1.  componentWillUnmount()  =====> 常用
                      一般在这个钩子中做一些收尾的事，例如：关闭定时器、取消订阅消息
      */

//创建组件
class MyComponent extends Component {
  // 构造器
  constructor(props) {
    console.log("Count --- constructor");
    super(props);
    this.state = {count: 0};
  }

  // 加1按钮的回调
  add = () => {
    // 获取原状态
    const {count} = this.state;
    // 更新状态
    this.setState({count: count + 1})
  }

  // 卸载组件按钮的回调
  death = () => {
    // 卸载组件
    ReactDOM.unmountComponentAtNode(document.getElementById("root"));
  }

  // 强制更新按钮的回调
  force = () => {
    this.forceUpdate();
  }

  // 若state的值在任何时候都取决于props，那么可以使用getDerivedStateFromProps
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps", props, state);
    // 它应返回一个对象来更新 state，如果返回 `null` 则不更新任何内容。
    return null;
  }

  // 在更新之前获取快照
  getSnapshotBeforeUpdate() {
    console.log("getSnapshotBeforeUpdate");
    return "react学习";
  }

  // 组件挂载完毕的钩子
  componentDidMount() {
    console.log("Count --- componentDidMount");
  }

  // 控制组件更新的“阀门”
  shouldComponentUpdate() {
    console.log("Count --- shouldComponentUpdate");
    // 写了必需返回 true 才能更新
    return true;
  }

  // 组件更新完毕的钩子
  componentDidUpdate(preProps, preState, snapshotValue) {
    console.log("Count --- componentDidUpdate", preProps, preState, snapshotValue);
  }

  // 组件将要卸载的钩子
  componentWillUnmount() {
    console.log("Count --- componentWillUnmount");
  }


  render() {
    console.log("Count --- render");
    const {count} = this.state;
    return (
      <div>
        <h2 style={{opacity: this.state.opacity, color: "#345678"}}>当前求和为：{count}</h2>
        <button onClick={this.add}>add</button>
        <button onClick={this.death}>卸载组件</button>
        <button onClick={this.force}>强制更新</button>
      </div>
    )
  }
}

export default MyComponent;
```



```

```



### 重要的勾子

1. render：初始化渲染或更新渲染调用

2. componentDidMount：开启监听, 发送ajax请求

3. componentWillUnmount：做一些收尾工作, 如: 清理定时器

### 即将废弃的勾子

1. componentWillMount

2. componentWillReceiveProps

3. componentWillUpdate

现在使用会出现警告，下一个大版本需要加上UNSAFE_前缀才能使用，以后可能会被彻底废弃，不建议使用。





## React 实例

以下实例在 Hello 组件加载以后，通过 componentDidMount 方法设置一个定时器，每隔 100 毫秒重新设置组件的透明度，并重新渲染：

```jsx
class Hello extends React.Component{
  constructor(props){
    super(props);
    this.state={opacity:1.0};
  }
  componentDidMount(){
    this.timer=setInterval(function(){
      var opacity=this.state.opacity;
      opacity-=.05;
      if (opacity<0.1) {
        opacity=1.0;
      }
      this.setState({
        opacity:opacity
      });
    }.bind(this),100);
  }
  render(){
    return (
      <div style={{opacity:this.state.opacity}}>
        Hello {this.props.name}
      </div>
      );
  }
}
ReactDOM.render(
  <Hello name="senbin" />,
  document.getElementById('example')
  );
```

以下实例初始化 **state** ， **setNewnumber** 用于更新 **state**。所有生命周期在 **Content** 组件中。

```jsx
class Button extends React.Component {
  constructor(props) {
      super(props);
      this.state = {data: 0};
      this.setNewNumber = this.setNewNumber.bind(this);
  }
  setNewNumber() {
    this.setState({data: this.state.data + 1})
  }
  render() {
      return (
         <div>
            <button onClick = {this.setNewNumber}>INCREMENT</button>
            <Content myNumber = {this.state.data}></Content>
         </div>
      );
    }
}
class Content extends React.Component {
  componentWillMount() {
      console.log('Component WILL MOUNT!')
  }
  componentDidMount() {
       console.log('Component DID MOUNT!')
  }
  componentWillReceiveProps(newProps) {
        console.log('Component WILL RECEIVE PROPS!')
  }
  shouldComponentUpdate(newProps, newState) {
        return true;
  }
  componentWillUpdate(nextProps, nextState) {
        console.log('Component WILL UPDATE!');
  }
  componentDidUpdate(prevProps, prevState) {
        console.log('Component DID UPDATE!')
  }
  componentWillUnmount() {
         console.log('Component WILL UNMOUNT!')
  }
    render() {
      return (
        <div>
          <h3>{this.props.myNumber}</h3>
        </div>
      );
    }
}
ReactDOM.render(
   <div>
      <Button />
   </div>,
  document.getElementById('example')
);
```

----

## 常用的生命周期方法

### `render()`

```
render()
```

`render()` 方法是 **class 组件中唯一必须实现的方法**。

当 `render` 被调用时，**它会检查 `this.props` 和 `this.state` 的变化**并返回以下类型之一：

- **React 元素**。通常通过 JSX 创建。例如，`<div />` 会被 React 渲染为 DOM 节点，`<MyComponent />` 会被 React 渲染为自定义组件，无论是 `<div />` 还是 `<MyComponent />` 均为 React 元素。
- **数组或 fragments**。 使得 render 方法可以返回多个元素。欲了解更多详细信息，请参阅 [fragments](https://zh-hans.reactjs.org/docs/fragments.html) 文档。
- **Portals**。可以渲染子节点到不同的 DOM 子树中。欲了解更多详细信息，请参阅有关 [portals](https://zh-hans.reactjs.org/docs/portals.html) 的文档。
- **字符串或数值类型**。它们在 DOM 中会被渲染为文本节点。
- **布尔类型或 `null`**。什么都不渲染。（主要用于支持返回 `test && <Child />` 的模式，其中 test 为布尔类型。)

`render()` 函数应该为**纯函数**，这**意味着在不修改组件 state 的情况下，每次调用时都返回相同的结果，并且它不会直接与浏览器交互**。

如需与浏览器进行交互，请在 `componentDidMount()` 或其他生命周期方法中执行你的操作。**保持 `render()` 为纯函数，可以使组件更容易思考。**

>注意  如果 `shouldComponentUpdate()` 返回 false，**则不会调用 `render()`**。

----

### `constructor()`

```
constructor(props)
```

**如果不初始化 state 或不进行方法绑定，则不需要为 React 组件实现构造函数。**

在 React 组件挂载之前，会调用它的构造函数。在为 React.Component 子类实现构造函数时，**应在其他语句之前调用 `super(props)`。否则，`this.props` 在构造函数中可能会出现未定义的 bug。**

通常，在 React 中，构造函数仅用于以下两种情况：

- 通过给 `this.state` 赋值对象来初始化[内部 state](https://zh-hans.reactjs.org/docs/state-and-lifecycle.html)。
- 为[事件处理函数](https://zh-hans.reactjs.org/docs/handling-events.html)绑定实例

在 `constructor()` 函数中**不要调用 `setState()` 方法**。如果你的组件需要使用内部 state，请直接在构造函数中为 **`this.state` 赋值初始 state**：

```js
constructor(props) {
  super(props);
  // 不要在这里调用 this.setState()
  this.state = { counter: 0 };
  this.handleClick = this.handleClick.bind(this);
}
```

**只能在构造函数中直接为 `this.state` 赋值。**如需在其他方法中赋值，你应使用 `this.setState()` 替代。

要避免在构造函数中引入任何副作用或订阅。如遇到此场景，请将对应的操作放置在 `componentDidMount` 中。

> 注意
>
> **避免将 props 的值复制给 state！这是一个常见的错误：**
>
> ```js
> constructor(props) {
>  super(props);
>  // 不要这样做
>  this.state = { color: props.color };
> }
> ```
>
> 如此做毫无必要（你可以直接使用 `this.props.color`），同时还产生了 bug（更新 prop 中的 `color` 时，并不会影响 state）。
>
> **只有在你刻意忽略 prop 更新的情况下使用。**此时，应将 prop 重命名为 `initialColor` 或 `defaultColor`。必要时，你可以[修改它的 `key`](https://zh-hans.reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#recommendation-fully-uncontrolled-component-with-a-key)，以强制“重置”其内部 state。
>
> 请参阅关于[避免派生状态的博文](https://zh-hans.reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html)，以了解出现 state 依赖 props 的情况该如何处理。



---

### `componentDidMount()`

```
componentDidMount()
```

`componentDidMount()` **会在组件挂载后（插入 DOM 树中）立即调用**。

**依赖于 DOM 节点的初始化应该放在这里**。如需通过网络请求获取数据，此处是实例化请求的好地方。

这个方法是**比较适合添加订阅的地方**。如果添加了订阅，**请不要忘记在 `componentWillUnmount()` 里取消订阅**

你可以在 `componentDidMount()` 里**直接调用 `setState()`**。它将触发额外渲染，**但此渲染会发生在浏览器更新屏幕之前。如此保证了即使在 `render()` 两次调用的情况下，用户也不会看到中间状态。**请谨慎使用该模式，因为它会导致性能问题。通常，你应该在 `constructor()` 中初始化 state**。如果你的渲染依赖于 DOM 节点的大小或位置，比如实现 modals 和 tooltips 等情况下，你可以使用此方式处理**

----

### `componentDidUpdate()`

```
componentDidUpdate(prevProps, prevState, snapshot)
```

`componentDidUpdate()` **会在更新后会被立即调用**。首次渲染不会执行此方法。

当组件更新后，可以在此处对 DOM 进行操作。**如果你对更新前后的 props 进行了比较，也可以选择在此处进行网络请求**。（例如，当 props 未发生变化时，则不会执行网络请求）。

```js
componentDidUpdate(prevProps) {
  // 典型用法（不要忘记比较 props）：
  if (this.props.userID !== prevProps.userID) {
    this.fetchData(this.props.userID);
  }
}
```

你也可以在 `componentDidUpdate()` 中**直接调用 `setState()`**，但请注意**它必须被包裹在一个条件语句里**，正如上述的例子那样进行处理，**否则会导致死循环。它还会导致额外的重新渲染**，虽然用户不可见，但会影响组件性能。**不要将 props “镜像”给 state**，请考虑直接使用 props。 欲了解更多有关内容，请参阅[为什么 props 复制给 state 会产生 bug](https://zh-hans.reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html)。

如果组件实现了 `getSnapshotBeforeUpdate()` 生命周期（不常用），**则它的返回值将作为 `componentDidUpdate()` 的第三个参数 “snapshot” 参数传递。**否则此参数将为 undefined。

>注意   如果 [`shouldComponentUpdate()`](https://zh-hans.reactjs.org/docs/react-component.html#shouldcomponentupdate) 返回值为 false，则不会调用 `componentDidUpdate()`。

----

### `componentWillUnmount()`

```
componentWillUnmount()
```

`componentWillUnmount()` 会在组件卸载及销毁之前直接调用。**在此方法中执行必要的清理操作，例如，清除 timer，取消网络请求或清除在 `componentDidMount()` 中创建的订阅等。**

`componentWillUnmount()` 中**不应调用 `setState()`**，因为该组件将永远不会重新渲染。**组件实例卸载后，将永远不会再挂载它。**

---

## 不常用的生命周期方法

本节中的生命周期方法并不太常用。它们偶尔会很方便，但是大部分情况下组件可能都不需要它们。你可以在[生命周期图谱](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)中，选择“显示不常用的生命周期”复选框，即可看到下述相关方法。

### `shouldComponentUpdate()`

```
shouldComponentUpdate(nextProps, nextState)
```

根据 `shouldComponentUpdate()` 的返回值，判断 React 组件的输出是否受当前 state 或 props 更改的影响。**默认行为是 state 每次发生变化组件都会重新渲染。**大部分情况下，你应该遵循默认行为。

当 props 或 state 发生变化时，`shouldComponentUpdate()` 会在渲染执行之前被调用。**返回值默认为 true**。

首次渲染或使用 `forceUpdate()` 时**不会**调用该方法。

此方法仅作为**[性能优化的方式](https://zh-hans.reactjs.org/docs/optimizing-performance.html)**而存在。不要企图依靠此方法来“阻止”渲染，因为这可能会产生 bug。你应该**考虑使用内置的 [`PureComponent`](https://zh-hans.reactjs.org/docs/react-api.html#reactpurecomponent) 组件**，而不是手动编写 `shouldComponentUpdate()`。**`PureComponent` 会对 props 和 state 进行浅层比较，并减少了跳过必要更新的可能性。**

如果你一定要手动编写此函数，可以将 `this.props` 与 `nextProps` 以及 `this.state` 与`nextState` 进行比较，**并返回 `false` 以告知 React 可以跳过更新**。请注意，**返回 `false` 并不会阻止子组件在 state 更改时重新渲染**。

我们不建议在 `shouldComponentUpdate()` 中进行深层比较或使用 `JSON.stringify()`。这样非常影响效率，且会损害性能。

目前，如果 `shouldComponentUpdate()` 返回 `false`，则不会调用 [`UNSAFE_componentWillUpdate()`](https://zh-hans.reactjs.org/docs/react-component.html#unsafe_componentwillupdate)，[`render()`](https://zh-hans.reactjs.org/docs/react-component.html#render) 和 [`componentDidUpdate()`](https://zh-hans.reactjs.org/docs/react-component.html#componentdidupdate)。

> 后续版本，React 可能会将 `shouldComponentUpdate` 视为提示而不是严格的指令，并且，当返回 `false` 时，仍可能导致组件重新渲染。



----

### `static getDerivedStateFromProps()`

```js
static getDerivedStateFromProps(props, state)
```

`getDerivedStateFromProps` 会在调用 render 方法之前调用，并且在初始挂载及后续更新时都会被调用。**它应返回一个对象来更新 state**，如果**返回 `null` 则不更新任何内容**。

此方法适用于[罕见的用例](https://zh-hans.reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#when-to-use-derived-state)，**即 state 的值在任何时候都取决于 props**。例如，实现 `<Transition>` 组件可能很方便，该组件会比较当前组件与下一组件，以决定针对哪些组件进行转场动画。

派生状态会导致代码冗余，并使组件难以维护。 [确保你已熟悉这些简单的替代方案：](https://zh-hans.reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html)

- 如果你需要**执行副作用**（例如，数据提取或动画）以响应 props 中的更改，请改用 [`componentDidUpdate`](https://zh-hans.reactjs.org/docs/react-component.html#componentdidupdate)。
- 如果只想在 **prop 更改时重新计算某些数据**，[请使用 memoization helper 代替](https://zh-hans.reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#what-about-memoization)。
- 如果你想**在 prop 更改时“重置”某些 state**，请考虑使组件[完全受控](https://zh-hans.reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#recommendation-fully-controlled-component)或[使用 `key` 使组件完全不受控](https://zh-hans.reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#recommendation-fully-uncontrolled-component-with-a-key) 代替。

**此方法无权访问组件实例**。如果你需要，可以通过提取组件 props 的纯函数及 class 之外的状态，在`getDerivedStateFromProps()`和其他 class 方法之间重用代码。

请注意，**不管原因是什么，都会在*每次*渲染前触发此方法**。这与 `UNSAFE_componentWillReceiveProps` 形成对比，后者仅在父组件重新渲染时触发，而不是在内部调用 `setState` 时。

----

### `getSnapshotBeforeUpdate(prevPros, prevState)`

```js
getSnapshotBeforeUpdate(prevProps, prevState)
```

`getSnapshotBeforeUpdate()` **在最近一次渲染输出（提交到 DOM 节点）之前调用**。它使得组件能在发生更改之前从 DOM 中捕获一些信息（例如，滚动位置）。**此生命周期方法的任何返回值将作为参数传递给 `componentDidUpdate()`。**

此用法并不常见，但它可能出现在 UI 处理中，如需要以特殊方式处理滚动位置的聊天线程等。

**应返回 snapshot 的值（或 `null`）。**

getSnapShotBeforeUpdate**的使用场景**

```jsx
import './App.css';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';  //引入prop-types，用于对组件标签属性进行限制


//创建组件
class NewsList extends Component {
  constructor(props) {
    super(props);
    this.listRef = React.createRef();
  }

  state = {newsArr: []};

  // 组件挂载完毕的钩子
  componentDidMount() {
    setInterval(() => {
      // 获取原状态
      const {newsArr} = this.state;
      // 模拟一条新闻
      const news = `新闻${newsArr.length + 1}`;
      // 更新状态
      this.setState({newsArr: [news, ...newsArr]});
    }, 1000);
  }

  // 在更新之前获取快照
  getSnapshotBeforeUpdate() {
    const list = this.listRef.current;
    return list.scrollHeight;
  }


  // 组件更新完毕的钩子
  componentDidUpdate(preProps, preState, height) {
    const list = this.listRef.current;
    list.scrollTop += list.scrollHeight - height;
  }

  render() {
    return (
      <div className="list" ref={this.listRef}>
        {
          this.state.newsArr.map((item, index) => {
            return <div key={index} className="news">{item}</div>
          })
        }
      </div>
    )
  }
}

export default NewsList;
```

在上述示例中，重点是从 `getSnapshotBeforeUpdate` 读取 `scrollHeight` 属性，因为 “render” 阶段生命周期（如 `render`）和 “commit” 阶段生命周期（如 `getSnapshotBeforeUpdate` 和 `componentDidUpdate`）之间可能存在延迟。

---

## Error boundaries

[Error boundaries](https://zh-hans.reactjs.org/docs/error-boundaries.html) 是 React 组件，它会在其子组件树中的任何位置捕获 JavaScript 错误，并记录这些错误，展示降级 UI 而不是崩溃的组件树。**Error boundaries 组件会捕获在渲染期间，在生命周期方法以及其整个树的构造函数中发生的错误。**

如果 class 组件定义了生命周期方法 `static getDerivedStateFromError()` 或 `componentDidCatch()` 中的任何一个（或两者），它就成为了 Error boundaries。**通过生命周期更新 state 可让组件捕获树中未处理的 JavaScript 错误并展示降级 UI。**

仅使用 Error boundaries 组件来从意外异常中恢复的情况；**不要将它们用于流程控制。**

> 注意     Error boundaries 仅捕获组件树中**以下**组件中的错误。但它本身的错误无法捕获。

----

### `static getDerivedStateFromError()`

```
static getDerivedStateFromError(error)
```

**此生命周期会在后代组件抛出错误后被调用**。 它将抛出的错误作为参数，并返回一个值以更新 state

```jsx
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // 更新 state 使下一次渲染可以显降级 UI
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      // 你可以渲染任何自定义的降级  UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
```

> 注意  `getDerivedStateFromError()` 会在`渲染`阶段调用，因此不允许出现副作用。 如遇此类情况，请改用 `componentDidCatch()`。

----

### `componentDidCatch()`

```
componentDidCatch(error, info)
```

**此生命周期在后代组件抛出错误后被调用**。 它接收两个参数：

1. `error` —— 抛出的错误。
2. `info` —— 带有 `componentStack` key 的对象，其中包含[有关组件引发错误的栈信息](https://zh-hans.reactjs.org/docs/error-boundaries.html#component-stack-traces)。

`componentDidCatch()` 会在“提交”阶段被调用，**因此允许执行副作用。 它应该用于记录错误之类的情况**：

```jsx
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // 更新 state 使下一次渲染可以显示降级 UI
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // "组件堆栈" 例子:
    //   in ComponentThatThrows (created by App)
    //   in ErrorBoundary (created by App)
    //   in div (created by App)
    //   in App
    logComponentStackToMyService(info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      // 你可以渲染任何自定义的降级 UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
```

React 的开发和生产构建版本在 `componentDidCatch()` 的方式上有轻微差别。

在开发模式下，错误会冒泡至 `window`，这意味着任何 `window.onerror` 或 `window.addEventListener('error', callback)` 会中断这些已经被 `componentDidCatch()` 捕获的错误。

**相反，在生产模式下，错误不会冒泡**，这意味着任何根错误处理器只会接受那些没有显式地被 `componentDidCatch()` 捕获的错误。

>注意
>
>如果发生错误，你可以通过调用 `setState` 使用 `componentDidCatch()` 渲染降级 UI，但在未来的版本中将不推荐这样做。 **可以使用静态 `getDerivedStateFromError()` 来处理降级渲染。**



---

## 过时的生命周期方法

以下生命周期方法标记为“过时”。**这些方法仍然有效，但不建议在新代码中使用它们**。参阅此[博客文章](https://zh-hans.reactjs.org/blog/2018/03/27/update-on-async-rendering.html)以了解更多有关迁移旧版生命周期方法的信息。

### `UNSAFE_componentWillMount()`

```
UNSAFE_componentWillMount()
```

> 注意
>
> 此生命周期之前名为 `componentWillMount`。该名称将继续使用至 React 17。可以使用 [`rename-unsafe-lifecycles` codemod](https://github.com/reactjs/react-codemod#rename-unsafe-lifecycles) 自动更新你的组件。

`UNSAFE_componentWillMount()` 在挂载之前被调用。它在 `render()` 之前调用，因此在此方法中同步调用 `setState()` 不会触发额外渲染。**通常，我们建议使用 `constructor()` 来初始化 state。**

**避免在此方法中引入任何副作用或订阅**。如遇此种情况，请改用 `componentDidMount()`。

此方法是**服务端渲染唯一会调用的生命周期函数。**

----

### `UNSAFE_componentWillReceiveProps()`

```
UNSAFE_componentWillReceiveProps(nextProps)
```

> 注意
>
> 此生命周期之前名为 `componentWillReceiveProps`。该名称将继续使用至 React 17。可以使用 [`rename-unsafe-lifecycles` codemod](https://github.com/reactjs/react-codemod#rename-unsafe-lifecycles) 自动更新你的组件。

> 注意:
>
> 使用此生命周期方法通常会出现 bug 和不一致性：
>
> - 如果你需要**执行副作用**（例如，数据提取或动画）以响应 props 中的更改，请改用 [`componentDidUpdate`](https://zh-hans.reactjs.org/docs/react-component.html#componentdidupdate) 生命周期。
> - 如果你使用 `componentWillReceiveProps` **仅在 prop 更改时重新计算某些数据**，请[使用 memoization helper 代替](https://zh-hans.reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#what-about-memoization)。
> - 如果你使用 `componentWillReceiveProps` 是为了**在 prop 更改时“重置”某些 state**，请考虑使组件[完全受控](https://zh-hans.reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#recommendation-fully-controlled-component)或[使用 `key` 使组件完全不受控](https://zh-hans.reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#recommendation-fully-uncontrolled-component-with-a-key) 代替。
>
> 对于其他使用场景，[请遵循此博客文章中有关派生状态的建议](https://zh-hans.reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html)。

`UNSAFE_componentWillReceiveProps()` **会在已挂载的组件接收新的 props 之前被调用**。如果你需要更新状态以响应 prop 更改（例如，重置它），你可以比较 `this.props` 和 `nextProps` 并在此方法中使用 `this.setState()` 执行 state 转换。

请注意，**如果父组件导致组件重新渲染，即使 props 没有更改，也会调用此方法**。如果只想处理更改，**请确保进行当前值与变更值的比较。**

在[挂载](https://zh-hans.reactjs.org/docs/react-component.html#mounting)过程中，React 不会针对初始 props 调用 `UNSAFE_componentWillReceiveProps()`。**组件只会在组件的 props 更新时调用此方法**。调用 `this.setState()` **通常不会**触发 `UNSAFE_componentWillReceiveProps()`。

------

### `UNSAFE_componentWillUpdate()`

```
UNSAFE_componentWillUpdate(nextProps, nextState)
```

> 注意
>
> 此生命周期之前名为 `componentWillUpdate`。该名称将继续使用至 React 17。可以使用 [`rename-unsafe-lifecycles` codemod](https://github.com/reactjs/react-codemod#rename-unsafe-lifecycles) 自动更新你的组件。

**当组件收到新的 props 或 state 时，会在渲染之前调用** `UNSAFE_componentWillUpdate()`。使用此作为在更新发生之前执行准备更新的机会。初始渲染不会调用此方法。

注意，你**不能此方法中调用 `this.setState()`**；在 `UNSAFE_componentWillUpdate()` 返回之前，你也不应该执行任何其他操作（例如，dispatch Redux 的 action）触发对 React 组件的更新

通常，此方法可以替换为 `componentDidUpdate()`。如果你在此方法中读取 DOM 信息（例如，为了保存滚动位置），则可以将此逻辑移至 `getSnapshotBeforeUpdate()` 中。

> 注意
>
> 如果 `shouldComponentUpdate()` 返回 false，则不会调用 `UNSAFE_componentWillUpdate()`。



---

## 其他 API

不同于上述生命周期方法（React 主动调用），以下方法是你可以在组件中调用的方法。

只有两个方法：`setState()` 和 `forceUpdate()`。

### `setState()`

```js
setState(updater, [callback])
```

`setState()` **将对组件 state 的更改排入队列**，并**通知 React 需要使用更新后的 state 重新渲染此组件及其子组件**。

这是用于更新用户界面以响应事件处理器和处理服务器数据的**主要方式**

将 `setState()` 视为`请求`**而不是立即更新组件的命令**。为了更好的感知性能，**React 会延迟调用它，然后通过一次传递更新多个组件**。在罕见的情况下，你需要强制 DOM 更新同步应用，你可以使用 [`flushSync`](https://zh-hans.reactjs.org/docs/react-dom.html#flushsync) 来包装它，但这可能会损害性能。

`setState()` 并不总是立即更新组件。**它会批量推迟更新**。这使得在调用 `setState()` 后立即读取 `this.state` 成为了隐患。**为了消除隐患，请使用 `componentDidUpdate` 或者 `setState` 的回调函数（`setState(updater, callback)`）**，这两种方式都可以保证在应用更新后触发。如需基于之前的 state 来设置当前的 state，请阅读下述关于参数 `updater` 的内容。

除非 `shouldComponentUpdate()` 返回 `false`，否则 `setState()` 将始终执行重新渲染操作。如果可变对象被使用，且无法在 `shouldComponentUpdate()` 中实现条件渲染，那么仅在新旧状态不一时调用 `setState()`可以避免不必要的重新渲染

参数一为带有形式参数的 `updater` 函数：

```js
(state, props) => stateChange
```

`state` 是对应用变化时组件状态的引用。当然，**它不应直接被修改。你应该使用基于 `state` 和 `props` 构建的新对象来表示变化**。例如，假设我们想根据 `props.step` 来增加 state：

```js
this.setState((state, props) => {
  return {counter: state.counter + props.step};
});
```

updater 函数中接收的 `state` 和 `props` 都保证为最新。**updater 的返回值会与 `state` 进行浅合并。**

`setState()` 的第二个参数为**可选的回调函数**，它将在 `setState` 完成合并并重新渲染组件后执行。**通常，我们建议使用 `componentDidUpdate()` 来代替此方式。**

`setState()` 的第一个参数除了接受函数外，还可以接受对象类型：

```js
setState(stateChange[, callback])
```

`stateChange` 会将传入的对象浅层合并到新的 state 中，例如，调整购物车商品数：

```js
this.setState({quantity: 2})
```

这种形式的 `setState()` 也是异步的，并且在同一周期内会对多个 `setState` 进行批处理。例如，如果在同一周期内多次设置商品数量增加，则相当于：

```js
Object.assign(
  previousState,
  {quantity: state.quantity + 1},
  {quantity: state.quantity + 1},
  ...
)
```

后调用的 `setState()` 将覆盖同一周期内先调用 `setState` 的值，因此商品数仅增加一次。**如果后续状态取决于当前状态，我们建议使用 updater 函数的形式代替：**

```
this.setState((state) => {
  return {quantity: state.quantity + 1};
});
```

有关更多详细信息，请参阅：

- [State 和生命周期指南](https://zh-hans.reactjs.org/docs/state-and-lifecycle.html)
- [深入学习：何时以及为什么 `setState()` 会批量执行？](https://stackoverflow.com/a/48610973/458193)
- [深入：为什么不直接更新 `this.state`？](https://github.com/facebook/react/issues/11527#issuecomment-360199710)

------

### `forceUpdate()`

```
component.forceUpdate(callback)
```

默认情况下，当组件的 state 或 props 发生变化时，组件将重新渲染。如果 `render()` 方法依赖于其他数据，**则可以调用 `forceUpdate()` 强制让组件重新渲染。**

调用 `forceUpdate()` 将致使组件调用 `render()` 方法，此操作会跳过该组件的 `shouldComponentUpdate()`。**但其子组件会触发正常的生命周期方法，包括 `shouldComponentUpdate()` 方法**。如果标记发生变化，React 仍将只更新 DOM。

通常你应该避免使用 `forceUpdate()`，尽量在 `render()` 中使用 `this.props` 和 `this.state`。

---

## Class 属性

### `defaultProps`

`defaultProps` 可以为 Class 组件添加默认 props。这一般用于 props 未赋值，但又不能为 `null` 的情况。例如：

```js
class CustomButton extends React.Component {
  // ...
}

CustomButton.defaultProps = {
  color: 'blue'
};
```

如果未提供 `props.color`，则默认设置为 `'blue'`

```jsx
  render() {
    return <CustomButton /> ; // props.color 将设置为 'blue'
  }
```

如果 `props.color` 被设置为 `null`，则它将保持为 `null`

```jsx
  render() {
    return <CustomButton color={null} /> ; // props.color 将保持是 null
  }
```

------



### `displayName`

`displayName` 字符串多用于调试消息。通常，你不需要设置它，因为它可以根据函数组件或 class 组件的名称推断出来。如果调试时需要显示不同的名称或创建高阶组件，请参阅[使用 displayname 轻松进行调试](https://zh-hans.reactjs.org/docs/higher-order-components.html#convention-wrap-the-display-name-for-easy-debugging)了解更多。

----

## 实例属性

### `props`

`this.props` 包括被该组件调用者定义的 props。欲了解 props 的详细介绍，请参阅[组件 & Props](https://zh-hans.reactjs.org/docs/components-and-props.html)。

需特别注意，`this.props.children` 是一个特殊的 prop，通常由 JSX 表达式中的子组件组成，而非组件本身定义。

### `state`

组件中的 state 包含了随时可能发生变化的数据。state 由用户自定义，它是一个普通 JavaScript 对象。

如果某些值未用于渲染或数据流（例如，计时器 ID），则不必将其设置为 state。此类值可以在组件实例上定义。

欲了解关于 state 的更多信息，请参阅 [State & 生命周期](https://zh-hans.reactjs.org/docs/state-and-lifecycle.html)。

永远不要直接改变 `this.state`，因为后续调用的 `setState()` 可能会替换掉你的改变。请把 `this.state` 看作是不可变的。

-----



----

# Diffing 算法

当对比两棵树时，React 首先比较两棵树的根节点。不同类型的根节点元素会有不同的形态。

![image-20220610201432602](E:\pogject\学习笔记\image\js\reactDiff算法)

### 设计动机

在某一时间节点调用 React 的 `render()` 方法，会创建一棵由 React 元素组成的树。在下一次 state 或 props 更新时，相同的 `render()` 方法会返回一棵不同的树。React 需要基于这两棵树之间的差别来判断如何高效的更新 UI，以保证当前 UI 与最新的树保持同步。

此算法有一些通用的解决方案，即生成将一棵树转换成另一棵树的最小操作次数。然而，即使使用[最优的算法](http://grfia.dlsi.ua.es/ml/algorithms/references/editsurvey_bille.pdf)，该算法的复杂程度仍为 O(n 3 )，其中 n 是树中元素的数量。

如果在 React 中使用该算法，那么展示 1000 个元素则需要 10 亿次的比较。这个开销实在是太过高昂。于是 React 在**以下两个假设的基础之上**提出了一套 O(n) 的启发式算法：

1. **两个不同类型的元素会产生出不同的树**；
2. 开发者可以**使用 `key` 属性**标识哪些子元素在不同的渲染中可能是不变的。

在实践中，我们发现以上假设在几乎所有实用的场景下都成立。

### 对比不同类型的元素

**当根节点为不同类型的元素时，React 会拆卸原有的树并且建立起新的树。**举个例子，当一个元素从 `<a>` 变成 `<img>`，从 `<Article>` 变成 `<Comment>`，或从 `<Button>` 变成 `<div>` 都会触发一个完整的重建流程。

**当卸载一棵树时，对应的 DOM 节点也会被销毁。**组件实例将执行 `componentWillUnmount()` 方法。当建立一棵新的树时，对应的 DOM 节点会被创建以及插入到 DOM 中。组件实例将执行 `UNSAFE_componentWillMount()` 方法，紧接着 `componentDidMount()` 方法。所有与之前的树相关联的 state 也会被销毁。

**在根节点以下的组件也会被卸载，它们的状态会被销毁**。比如，当比对以下更变时：

```jsx
<div>
  <Counter />
</div>

<span>
  <Counter />
</span>
```

React 会销毁 `Counter` 组件并且重新装载一个新的组件。

### 对比同一类型的元素

当对比两个相同类型的 React 元素时，React 会保留 DOM 节点，**仅比对及更新有改变的属性**。比如：

```jsx
<div className="before" title="stuff" />

<div className="after" title="stuff" />
```

通过对比这两个元素，React 知道只需要修改 DOM 元素上的 `className` 属性。

**当更新 `style` 属性时，React 仅更新有所更变的属性**。比如：

```jsx
<div style={{color: 'red', fontWeight: 'bold'}} />

<div style={{color: 'green', fontWeight: 'bold'}} />
```

通过对比这两个元素，React 知道只需要修改 DOM 元素上的 `color` 样式，无需修改 `fontWeight`。

**在处理完当前节点之后，React 继续对子节点进行递归。**

### 对比同类型的组件元素

当一个组件更新时，组件实例会保持不变，因此可以在不同的渲染时保持 state 一致。**React 将更新该组件实例的 props 以保证与最新的元素保持一致**，并且调用该实例的 `UNSAFE_componentWillReceiveProps()`、`UNSAFE_componentWillUpdate()` 以及 `componentDidUpdate()` 方法。

下一步，调用 `render()` 方法，diff 算法将在之前的结果以及新的结果中进行递归。

### 对子节点进行递归

默认情况下，当递归 DOM 节点的子元素时，React 会同时遍历两个子元素的列表；**当产生差异时，生成一个 mutation。**

**在子元素列表末尾新增元素时，更新开销比较小**。比如：

```jsx
<ul>
  <li>first</li>
  <li>second</li>
</ul>

<ul>
  <li>first</li>
  <li>second</li>
  <li>third</li>
</ul>
```

React 会先匹配两个 `<li>first</li>` 对应的树，然后匹配第二个元素 `<li>second</li>` 对应的树，最后插入第三个元素的 `<li>third</li>` 树。

**如果只是简单的将新增元素插入到表头，那么更新开销会比较大**。比如：

```jsx
<ul>
  <li>Duke</li>
  <li>Villanova</li>
</ul>

<ul>
  <li>Connecticut</li>
  <li>Duke</li>
  <li>Villanova</li>
</ul>
```

React 并不会意识到应该保留 `<li>Duke</li>` 和 `<li>Villanova</li>`，**而是会重建每一个子元素。这种情况会带来性能问题。**

### Keys

为了解决上述问题，React 引入了 `key` 属性。当子元素拥有 key 时，React 使用 key 来匹配原有树上的子元素以及最新树上的子元素。以下示例在新增 `key` 之后，使得树的转换效率得以提高：

```jsx
<ul>
  <li key="2015">Duke</li>
  <li key="2016">Villanova</li>
</ul>

<ul>
  <li key="2014">Connecticut</li>
  <li key="2015">Duke</li>
  <li key="2016">Villanova</li>
</ul>
```

现在 React 知道只有带着 `'2014'` key 的元素是新元素，带着 `'2015'` 以及 `'2016'` key 的元素仅仅移动了。

实际开发中，编写一个 key 并不困难。你要展现的元素可能已经有了一个唯一 ID，于是 key 可以直接从你的数据中提取：

```jsx
<li key={item.id}>{item.name}</li>
```

**当以上情况不成立时，你可以新增一个 ID 字段到你的模型中**，或者**利用一部分内容作为哈希值来生成一个 key**。这个 key 不需要全局唯一，**但在列表中需要保持唯一。**

最后，你也可以使用元素在数组中的下标作为 key。**这个策略在元素不进行重新排序时比较合适，如果有顺序修改，diff 就会变慢。**

当基于下标的组件进行重新排序时，**组件 state 可能会遇到一些问题**。由于组件实例是基于它们的 key 来决定是否更新以及复用，如果 key 是一个下标，那么修改顺序时会修改当前的 key，**导致非受控组件的 state（比如输入框）可能相互篡改，会出现无法预期的变动。**

在 Codepen 有两个例子，分别为 [展示使用下标作为 key 时导致的问题](https://zh-hans.reactjs.org/redirect-to-codepen/reconciliation/index-used-as-key)，以及[不使用下标作为 key 的例子的版本，修复了重新排列，排序，以及在列表头插入的问题](https://zh-hans.reactjs.org/redirect-to-codepen/reconciliation/no-index-used-as-key)。

## 

```jsx
import '../App.css';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';  //引入prop-types，用于对组件标签属性进行限制

  /*
   经典面试题:
      1). react/vue中的key有什么作用？（key的内部原理是什么？）
      2). 为什么遍历列表时，key最好不要用index?
      
      1. 虚拟DOM中key的作用：
          1). 简单的说: key是虚拟DOM对象的标识, 在更新显示时key起着极其重要的作用。

          2). 详细的说: 当状态中的数据发生变化时，react会根据【新数据】生成【新的虚拟DOM】, 
                        随后React进行【新虚拟DOM】与【旧虚拟DOM】的diff比较，比较规则如下：

                  a. 旧虚拟DOM中找到了与新虚拟DOM相同的key：
                        (1).若虚拟DOM中内容没变, 直接使用之前的真实DOM
                        (2).若虚拟DOM中内容变了, 则生成新的真实DOM，随后替换掉页面中之前的真实DOM

                  b. 旧虚拟DOM中未找到与新虚拟DOM相同的key
                        根据数据创建新的真实DOM，随后渲染到到页面
                  
      2. 用index作为key可能会引发的问题：
                1. 若对数据进行：逆序添加、逆序删除等破坏顺序操作:
                        会产生没有必要的真实DOM更新 ==> 界面效果没问题, 但效率低。

                2. 如果结构中还包含输入类的DOM：
                        会产生错误DOM更新 ==> 界面有问题。
                        
                3. 注意！如果不存在对数据的逆序添加、逆序删除等破坏顺序操作，
                  仅用于渲染列表用于展示，使用index作为key是没有问题的。
          
      3. 开发中如何选择key?:
                1.最好使用每条数据的唯一标识作为key, 比如id、手机号、身份证号、学号等唯一值。
                2.如果确定只是简单的展示数据，用index也是可以的。
   */
  
  /* 
    慢动作回放----使用index索引值作为key

      初始数据：
          {id:1,name:'小张',age:18},
          {id:2,name:'小李',age:19},
      初始的虚拟DOM：
          <li key=0>小张---18<input type="text"/></li>
          <li key=1>小李---19<input type="text"/></li>

      更新后的数据：
          {id:3,name:'小王',age:20},
          {id:1,name:'小张',age:18},
          {id:2,name:'小李',age:19},
      更新数据后的虚拟DOM：
          <li key=0>小王---20<input type="text"/></li>
          <li key=1>小张---18<input type="text"/></li>
          <li key=2>小李---19<input type="text"/></li>

  -----------------------------------------------------------------

  慢动作回放----使用id唯一标识作为key

      初始数据：
          {id:1,name:'小张',age:18},
          {id:2,name:'小李',age:19},
      初始的虚拟DOM：
          <li key=1>小张---18<input type="text"/></li>
          <li key=2>小李---19<input type="text"/></li>

      更新后的数据：
          {id:3,name:'小王',age:20},
          {id:1,name:'小张',age:18},
          {id:2,name:'小李',age:19},
      更新数据后的虚拟DOM：
          <li key=3>小王---20<input type="text"/></li>
          <li key=1>小张---18<input type="text"/></li>
          <li key=2>小李---19<input type="text"/></li>

   */

//创建组件
class Person extends Component {
  state = {
      persons:[
        {id: 1, name: '太子', age: 23},
        {id: 2, name: '萝卜', age: 26},
      ]
  };

  add = () =>{
    const {persons} = this.state;
    const p = {id: persons.length + 1, name: "法老", age: 29};
    this.setState({persons: [p, ...persons]});
  }

  render() {
    return (
      <div>
        <h2>展示人员信息</h2>
        <button onClick={this.add}>添加一个人</button>
        <h3>使用index（索引值）作为key</h3>
        <ul>
          {
            this.state.persons.map((personObj, index) => {
              return <li key={index}>{personObj.name}---{personObj.age}&nbsp;<input type="text" /></li>
            })
          }
        </ul>
        <hr/>
        <h3>使用id（数据的唯一标识）作为key</h3>
        <ul>
          {
            this.state.persons.map((personObj, index) => {
              return <li key={personObj.id}>{personObj.name}---{personObj.age}&nbsp;<input type="text" /></li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default Person;
```

## 权衡

请谨记协调算法是一个实现细节。React 可以在每个 action 之后对整个应用进行重新渲染，得到的最终结果也会是一样的。在此情境下，重新渲染表示在所有组件内调用 `render` 方法，这不代表 React 会卸载或装载它们。**React 只会基于以上提到的规则来决定如何进行差异的合并。**

我们定期优化启发式算法，让常见用例更高效地执行。**在当前的实现中，可以理解为一棵子树能在其兄弟之间移动，但不能移动到其他位置。**在这种情况下，算法会重新渲染整棵子树。

由于 React 依赖启发式算法，因此当以下假设没有得到满足，性能会有所损耗。

1. **该算法不会尝试匹配不同组件类型的子树**。如果你发现你在两种不同类型的组件中切换，但输出非常相似的内容，**建议把它们改成同一类型。**在实践中，我们没有遇到这类问题。
2. **Key 应该具有稳定，可预测，以及列表内唯一的特质**。不稳定的 key（比如通过 `Math.random()` 生成的）会导致许多组件实例和 DOM 节点被不必要地重新创建，这可能导致性能下降和子组件中的状态丢失。



----

# React应用(基于React脚手架)

---

## 使用create-react-app创建react应用

### react脚手架

1. xxx脚手架: 用来帮助程序员快速创建一个基于xxx库的模板项目

- 包含了所有需要的配置（语法检查、jsx编译、devServer…）

- 下载好了所有相关的依赖

- 可以直接运行一个简单效果

2. react提供了一个用于创建react项目的脚手架库: create-react-app

3. 项目的整体技术架构为:  react + webpack + es6 + eslint

4. 使用脚手架开发的项目的特点: **模块化, 组件化, 工程化**

---

### 创建项目并启动

**第一步**，全局安装：

```bash
npm i -g create-react-app
```

**第二步**，切换到想创项目的目录，使用命令：

```bash
create-react-app my-app1
```

**第三步**，进入项目文件夹：

```bash
cd my-app1
```

**第四步**，启动项目：

```bash
npm start
```

### react脚手架项目结构

```bash
public ---- 静态资源文件夹
		favicon.icon ------ 网站页签图标
		index.html -------- 主页面
		logo192.png ------- logo图
		logo512.png ------- logo图
		manifest.json ----- 应用加壳的配置文件
		robots.txt -------- 爬虫协议文件
src ---- 源码文件夹
		App.css -------- App组件的样式
		App.js --------- App组件
		App.test.js ---- 用于给App做测试
		index.css ------ 样式
		index.js ------- 入口文件
		logo.svg ------- logo图
		reportWebVitals.js
			--- 页面性能分析文件(需要web-vitals库的支持)
		setupTests.js
			---- 组件单元测试的文件(需要jest-dom库的支持)

```

####  public/index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <!-- %PUBLIC_URL% 代表public文件夹路径 -->
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <!-- 开启理想视口，用于做移动端网页的适配 -->
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <!-- 用于配置浏览器页签+地址栏的颜色(仅支持安卓手机浏览器) -->
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <!-- 用于指定网页添加到手机主屏幕后的图标 -->
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
    <!-- 应用加壳时的配置文件 -->
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <!--
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.
    -->
    <title>React App</title>
  </head>
  <body>
    <!-- 若浏览器不支持js则展示标签中的内容 -->
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run `npm start` or `yarn start`.

      To create a production bundle, use `npm run build` or `yarn build`.
    -->
  </body>
</html>

```





### 功能界面的组件化编码流程（通用）

1. 拆分组件: 拆分界面,抽取组件

2. 实现静态组件: 使用组件实现静态页面效果

3. 实现动态组件

​		3.1 动态显示初始化数据

​			3.1.1 数据类型

​			3.1.2 数据名称

​			3.1.3 保存在哪个组件?

​		3.2 交互(从绑定事件监听开始)

### Hello-React

#### index.js

```jsx
// 引入react核心库
import React from 'react';
// 引入ReactDOM
import ReactDOM from 'react-dom';
//
import './index.css';
// 引入App组件
import App from './App';

import reportWebVitals from './reportWebVitals';

// 渲染App到页面
ReactDOM.render(
   <React.StrictMode>
     <App />
   </React.StrictMode>,
   document.getElementById('root')
);

reportWebVitals();

```

#### App.js

```jsx
//创建“外壳”组件App

import './App.css';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';  //引入prop-types，用于对组件标签属性进行限制

import Hello from "./components/Hello";
import Welcome from "./components/Welcome";

// 创建并暴露App组件
 export default class App extends Component {
  render() {
    
    return (
      <div>
        <Hello />
        <Welcome />
      </div>
    )
  }
}

```

#### Hello/index.jsx

```jsx
import React, {Component} from "react";
import hello from "./index.module.css";

export default class Hello extends Component {
	//
	render() {
		return (
			<div>
				<h2 className={hello.title}>Hello React</h2>
			</div>
		)
	}
}
```

#### Hello/index.module.css

```css
.title {
	background-color: #32fbda;
}
```

#### Welcome/index.jsx

```jsx
import React, {Component} from "react";
import "./index.css";

export default class Welcome extends Component {
	//
	render() {
		return (
			<div>
				<h2 className="title">Welcome to React!</h2>
			</div>
		)
	}
}
```

#### Welcome/index.css

```css
.title {
	background-color: #986bfd;
}
```

----

## toDoList案例

功能: 组件化实现此功能

实现组件间数据传递

### todoList案例相关知识点

​    1.拆分组件、实现静态组件，注意：className、style的写法

​    2.动态初始化列表，如何确定将数据放在哪个组件的state中？

​          ——某个组件使用：放在其自身的state中

​          ——某些组件使用：放在他们共同的父组件state中（官方称此操作为：状态提升）

​    3.关于父子之间通信：

​        1.【父组件】给【子组件】传递数据：通过props传递

​        2.【子组件】给【父组件】传递数据：通过props传递，要求父提前给子传递一个函数

​    4.注意defaultChecked 和 checked的区别，类似的还有：defaultValue 和 value

​    5.状态在哪里，操作状态的方法就在哪里

-----

# React AJAX

### 前置说明

1. React本身只关注于界面, 并不包含发送ajax请求的代码

2. 前端应用需要通过ajax请求与后台进行交互(json数据)

3. react应用中需要集成第三方ajax库(或自己封装)

### 常用的ajax请求库

1. jQuery: 比较重, 如果需要另外引入不建议使用

2. axios: 轻量级, 建议使用

- 封装XmlHttpRequest对象的ajax
- promise风格
- 可以用在浏览器端和node服务器端





React 组件的数据可以通过 componentDidMount 方法中的 Ajax 来获取，当从服务端获取数据时可以将数据存储在 state 中，再用 this.setState 方法重新渲染 UI。

当使用异步加载数据时，在组件卸载前使用 componentWillUnmount 来取消未完成的请求。

以下实例演示了获取 Github 用户最新 gist 共享描述：

```jsx
        <script src="./jquery-3.6.0.js"></script>

        <script src="https://cdn.staticfile.org/react/16.4.0/umd/react.development.js"></script>
        <script src="https://cdn.staticfile.org/react-dom/16.4.0/umd/react-dom.development.js"></script>
        <script src="https://cdn.staticfile.org/babel-standalone/6.26.0/babel.min.js"></script>
<

div id="example"></div>
<script type="text/babel">
class UserGist extends React.Component {
  constructor(props) {
      super(props);
      this.state = {username: '', lastGistUrl: ''};
  }
  componentDidMount() {
    this.serverRequest = $.get(this.props.source, function (result) {
      var lastGist = result[0];
      console.log(lastGist);
      this.setState({
        username: lastGist.owner.login,
        lastGistUrl: lastGist.html_url
      });
    }.bind(this));
  }
  componentWillUnmount() {
    this.serverRequest.abort();
  }
  render() {
    return (
      <div>
        {this.state.username} 用户最新的 Gist 共享地址：
        <a href={this.state.lastGistUrl}>{this.state.lastGistUrl}</a>
      </div>
    );
  }
}
ReactDOM.render(
  <UserGist source="https://api.github.com/users/octocat/gists" />,
  document.getElementById('example')
);
</script>
```

## axios请求数据

### server1.js

```js
const express = require('express')
const app = express()

app.use((request,response,next)=>{
	console.log('有人请求服务器1了');
	console.log('请求来自于',request.get('Host'));
	console.log('请求的地址',request.url);
	next()
})

app.get('/students',(request,response)=>{
	const students = [
		{id:'001',name:'tom',age:18},
		{id:'002',name:'jerry',age:19},
		{id:'003',name:'tony',age:120},
	]
	response.send(students)
})

app.listen(5000,(err)=>{
	if(!err) console.log('服务器1启动成功了,请求学生信息地址为：http://localhost:5000/students');
})

```

server2.js

```js
const express = require('express')
const app = express()

app.use((request,response,next)=>{
	console.log('有人请求服务器2了');
	next()
})

app.get('/cars',(request,response)=>{
	const cars = [
		{id:'001',name:'奔驰',price:199},
		{id:'002',name:'马自达',price:109},
		{id:'003',name:'捷达',price:120},
	]
	response.send(cars)
})

app.listen(5001,(err)=>{
	if(!err) console.log('服务器2启动成功了,请求汽车信息地址为：http://localhost:5001/cars');
})

```

### react脚手架配置代理

#### 方法一

在package.json中追加如下配置

```json
  "proxy": "http://localhost:5000"
```

说明：

1. 优点：配置简单，前端请求资源时可以不加任何前缀。

2. 缺点：不能配置多个代理。

3. 工作方式：上述方式配置代理，当请求了3000不存在的资源时，那么该请求会转发给5000 （优先匹配前端资源）

#### 方法二

1. 第一步：创建代理配置文件

   在src下创建配置文件：src/setupProxy.js

2. 编写setupProxy.js配置具体代理规则：

```js
const proxy = require("http-proxy-middleware");

module.exports = function(app) {
	app.use(
		proxy("/api1", { //遇见/api1前缀的请求，就会触发该代理配置
			target: `http://localhost:5000`,  //  请求转发给谁
			changeOrigin: true,  // 控制服务器收到的请求头中Host的值
			pathRewrite: {"^/api1": ""}   //重写请求路径(必须)
		}),
		 /*
         	changeOrigin设置为true时，服务器收到的请求头中的host为：localhost:5000
         	changeOrigin设置为false时，服务器收到的请求头中的host为：localhost:3000
         	changeOrigin默认值为false，但我们一般将changeOrigin值设为true
         */
		proxy("/api2", { //遇见/api2前缀的请求，就会触发该代理配置
			target: `http://localhost:5001`,  //  请求转发给谁
			changeOrigin: true,  // 控制服务器收到的请求头中Host的值
			pathRewrite: {"^/api2": ""}   //重写请求路径(必须)
		})
	);
}
```

说明：

1. 优点：可以配置多个代理，可以灵活的控制请求是否走代理。

2. 缺点：配置繁琐，前端请求资源时必须加前缀。

### index.js

```jsx
import React, {Component} from "react";
import hello from "./index.module.css";
import axios from 'axios'

export default class RequestData extends Component {
	getStudentData = () => {
		axios.get("http://localhost:3000/api1/students").then(
			response => {
				console.log("成功:", response.data);
			}, error => {
				console.log("失败:", error);
			}
		);
	}

	getCarData = () => {
		axios.get("http://localhost:3000/api2/cars").then(
			response => {
				console.log("成功:", response.data);
			}, error => {
				console.log("失败:", error);
			}
		);
	}
	render() {
		return (
			<div>
				<button onClick={this.getStudentData}>点我获取学生数据</button>
				<button onClick={this.getCarData}>点我获取汽车数据</button>
			</div>
		)
	}
}
```



----

## github搜索用户案例

### axios实现

#### App.js

```jsx
//创建“外壳”组件App

import './App.css';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';  //引入prop-types，用于对组件标签属性进行限制

import GithubSearch from "./components/GithubSearch";
import List from './components/List'

// 创建并暴露App组件
 export default class App extends Component {
 	// 初始化状态
 	state = {
 		users: [],  // users初始值为数组
 		isFirst: true,  // 是否为第一次打开页面
 		isLoading: false,  //标识是否处于加载中
 		err: "",  // 存储请求相关的错误信息
 	}

 	// 更新App的state
 	updateAppState = (stateObj) => {
 		this.setState(stateObj);
 	}
  render() {
    
    return (
      <div className="container">
        <GithubSearch updateAppState={this.updateAppState} />
        <List {...this.state} />
      </div>
    )
  }
}
```

#### GithubSearch

```jsx
import React, {Component} from "react";
import axios from "axios";

export default class GithubSearch extends Component {
	// 搜索函数
	search = () => {
		// 获取用户的输入(连续解构赋值+重命名)
		// const {keyWordElement: {value: keyWord}} = this;
		const keyWord = this.keyWordElement.value;
		console.log(keyWord);
		//发送请求前通知App更新状态
		this.props.updateAppState({isFirst:false,isLoading:true});

		axios.get(`api1/search/users?q=${keyWord}`).then(response => {
			//请求成功后通知App更新状态
			this.props.updateAppState({isLoading:false, users: response.data.items});
		}, error => {
			// 请求失败后通知App更新状态
			this.props.updateAppState({isLoading:false, err: error.message});;
		});
	}

	render() {
		return (
			<section className="jumbotron">
				<h3 className="jumbotron-heading">搜索github用户</h3>
				<input ref={c => this.keyWordElement = c} type="text" placeholder="输入关键词点击搜索" />&nbsp;
				<button onClick={this.search}>搜索</button>
			</section>
		)
	}
}
```

#### List

```jsx
import React, {Component} from "react";
import "./index.css";

export default class List extends Component {
	render() {
		const {users, isFirst, isLoading, err} = this.props;
		return (
			<div className="row">
				{
						isFirst ? <h2>欢迎使用，输入关键字，随后点击搜索</h2> : 
							isLoading ? <h2>Loading...</h2> : 
								err ? <h2 style={{color: "red"}}>{err}</h2> : 
									users.map((userObj) => {
										return (
											<div key={userObj.id} className="card">
												<a rel="noreferrer" href={userObj.html_url} target="_blank">
													<img alt="head_portrait" src={userObj.avatar_url} style={{width:"100px"}} />
												</a>
												<p className="card-text">{userObj.login}</p>
											</div>
										)
									})
				}
			</div>
		)
	}
}
```

#### server.js

```js
const express = require("express")
const axios = require("axios")
const app = express()
/*
  请求地址： http://localhost:3000/search/users?q=aa

  后台路由
    key： /search/users
    value： function () {}
*/
app.get("/search/users", function (req, res) {
  const {q} = req.query
  axios({
    url: 'https://api.github.com/search/users',
    params: {q}
  }).then(response => {
    res.json(response.data)
  })
})

app.listen(5000, "localhost", (err) => {
  if (!err){
  	console.log("服务器启动成功")
  	console.log("请求github真实数据请访问：http://localhost:5000/search/users")
  	console.log("请求本地模拟数据请访问：http://localhost:5000/search/users2")
  } 
  else console.log(err);
})

```

#### setupProxy.js

```js
const proxy = require('http-proxy-middleware')

module.exports = function(app){
	app.use(
		proxy('/api1',{ //遇见/api1前缀的请求，就会触发该代理配置
			target:'http://localhost:5000', //请求转发给谁
			changeOrigin:true,//控制服务器收到的请求头中Host的值
			pathRewrite:{'^/api1':''} //重写请求路径(必须)
		})
	)
}
```



----

### pubsub实现

#### App.js

```jsx
//创建“外壳”组件App
import './App.css';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';  //引入prop-types，用于对组件标签属性进行限制

import GithubSearch from "./components/GithubSearch";
import List from './components/List'

// 创建并暴露App组件
 export default class App extends Component {
  render() {
    return (
      <div className="container">
        <GithubSearch />
        <List />
      </div>
    )
  }
}

```

#### GithubSearch

```jsx
import React, {Component} from "react";
import axios from "axios";
import PubSub from "pubsub-js";

export default class GithubSearch extends Component {
	// 搜索函数
	search = () => {
		// 获取用户的输入(连续解构赋值+重命名)
		// const {keyWordElement: {value: keyWord}} = this;
		const keyWord = this.keyWordElement.value
		//发送请求前通知List更新状态
		PubSub.publish("searchResult", {isFirst:false,isLoading:true});

		axios.get(`api1/search/users?q=${keyWord}`).then(
			response => {
				//请求成功后通知List更新状态
				PubSub.publish("searchResult", {isLoading:false, users: response.data.items});
			}, error => {
				// 请求失败后通知List更新状态
				PubSub.publish("searchResult", {isLoading:false, err: error.message});;
		});
	}

	render() {
		return (
			<section className="jumbotron">
				<h3 className="jumbotron-heading">搜索github用户</h3>
				<input ref={c => this.keyWordElement = c} type="text" placeholder="输入关键词点击搜索" />&nbsp;
				<button onClick={this.search}>搜索</button>
			</section>
		)
	}
}
```

#### List

```jsx
import React, {Component} from "react";
import "./index.css";
import PubSub from "pubsub-js";


export default class List extends Component {
	 	// 初始化状态
 	state = {
 		users: [],  // users初始值为数组
 		isFirst: true,  // 是否为第一次打开页面
 		isLoading: false,  //标识是否处于加载中
 		err: "",  // 存储请求相关的错误信息
 	};

 	componentDidMount() {
 		this.token = PubSub.subscribe("searchResult", (_msg, stateObj) => {
 			this.setState(stateObj);
 		});
 	}
 	componentWillUnmount() {
 		PubSub.unsubscribe(this.token);
 	}

	render() {
		const {users, isFirst, isLoading, err} = this.state;
		return (
			<div className="row">
				{
						isFirst ? <h2>欢迎使用，输入关键字，随后点击搜索</h2> : 
							isLoading ? <h2>Loading...</h2> : 
								err ? <h2 style={{color: "red"}}>{err}</h2> : 
									users.map((userObj) => {
										return (
											<div key={userObj.id} className="card">
												<a rel="noreferrer" href={userObj.html_url} target="_blank">
													<img alt="head_portrait" src={userObj.avatar_url} style={{width:"100px"}} />
												</a>
												<p className="card-text">{userObj.login}</p>
											</div>
										)
									})
				}
			</div>
		)
	}
}
```



----

### fetch实现

#### GithubSearch

```jsx
import React, {Component} from "react";
// import axios from "axios";
import PubSub from "pubsub-js";

export default class GithubSearch extends Component {
	// 搜索函数
	search = async () => {
		// 获取用户的输入(连续解构赋值+重命名)
		// const {keyWordElement: {value: keyWord}} = this;
		const keyWord = this.keyWordElement.value
		//发送请求前通知List更新状态
		PubSub.publish("searchResult", {isFirst:false,isLoading:true});

		/*
		// 发送网络请求---使用fetch发送（未优化）
		fetch(`api1/search/users?q=${keyWord}`).then(
			response => {
				console.log("联系服务器成功了");
				return response.json();
				
			}, error => {
				console.log('联系服务器失败了',error);
				return new Promise(() => {});  //不再往下走
				// PubSub.publish("searchResult", {isLoading:false, err: error.message});
		}).then(
			response => {
				//请求成功后通知List更新状态
				console.log("获取数据成功了", response);
				// PubSub.publish("searchResult", {isLoading:false, users: response.items});
			},
			error => {
				// 请求失败后通知List更新状态
				console.log('获取数据失败了',error);
			}
		);
		*/
		// 发送网络请求---使用fetch发送（优化）
		try {
			const response = await fetch(`api1/search/users?q=${keyWord}`);
			const data = await response.json();
			console.log(data);
			PubSub.publish("searchResult", {isLoading:false, users: data.items});
		} catch (error) {
			// 统一处理错误
			console.log('请求出错',error);
			PubSub.publish("searchResult", {isLoading:false, err: error.message});;
		}
	}

	render() {
		return (
			<section className="jumbotron">
				<h3 className="jumbotron-heading">搜索github用户</h3>
				<input ref={c => this.keyWordElement = c} type="text" placeholder="输入关键词点击搜索" />&nbsp;
				<button onClick={this.search}>搜索</button>
			</section>
		)
	}
}
```

---

### github搜索案例总结

​    1.设计状态时要考虑全面，例如带有网络请求的组件，要考虑请求失败怎么办。

​    2.ES6小知识点：解构赋值+重命名         

```js
let obj = {a:{b:1}}

const {a} = obj; //传统解构赋值

const {a:{b}} = obj; //连续解构赋值

const {a:{b:value}} = obj; //连续解构赋值+重命名
```

​    3.消息订阅与发布机制

​          1.先订阅，再发布（理解：有一种隔空对话的感觉）

​          2.适用于任意组件间通信

​          3.要在组件的componentWillUnmount中取消订阅

​    4.fetch发送请求（关注分离的设计思想）       

```js
try {
 	const response= await fetch(`/api1/search/users2?q=${keyWord}`)
	const data = await response.json()
	console.log(data);
} catch (error) {
	console.log('请求出错',error);
}
```

---



# react路由

## 路由的理解

### SPA的理解

1. 单页Web应用（single page web application，SPA）。

2. 整个应用只有**一个完整的页面**。

3. 点击页面中的链接**不会刷新**页面，只会做页面的**局部更新。**
4. 数据都需要通过ajax请求获取, 并在前端异步展现。

### 什么是路由?

1. 一个路由就是一个映射关系(key:value)

2. key为路径, value可能是function或component

### 路由分类

1. **后端路由**：

(1)   理解： value是function, 用来处理客户端提交的请求。

(2)   注册路由： `router.get(path, function(req, res))`

(3)   工作过程：当node接收到一个请求时, 根据请求路径找到匹配的路由, 调用路由中的函数来处理请求, 返回响应数据

2. **前端路由**：

(1)   浏览器端路由，value是component，用于展示页面内容。

(2)   注册路由: `<Route path="/test" component={Test}>`

(3)   工作过程：当浏览器的path变为/test时, 当前路由组件就会变为Test组件

### react-router-dom的理解

1. react的一个插件库。

2. 专门用来实现一个SPA应用。

3. 基于react的项目基本都会用到此库。

-----

## 路由的基本使用

### App.js

#### 类式

```jsx
//创建“外壳”组件App
import './App.css';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link, Routes, Route} from 'react-router-dom';

import Home from "./components/Home";
import About from './components/About';

/*
路由的基本使用
			1.明确好界面中的导航区、展示区
			2.导航区的a标签改为Link标签
						<Link to="/xxxxx">Demo</Link>
			3.展示区写Route标签进行路径的匹配
						<Route path='/xxxx' component={Demo}/>
						v6版本:
							<Routes>
								<Route path='/xxxx' element={<Demo /> }/>
							</Routes>
			4.<App>的最外侧包裹了一个<BrowserRouter>或<HashRouter>
*/

// 创建并暴露App组件
export default class App extends Component {
	render() {
		return (
			<div>
				<div className="row">
					<div className="col-xs-offset-2 col-xs-8">
						<div className="page-header">
							<h2>React Router Demo</h2>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-offset-2 col-xs-2">
						<div className="list-group">
							{/* 原生html中，靠<a>跳转不同的页面 */}
							{/* <a className="list-group-item" href="./about.html">About</a>
							<a className="list-group-item active" href="./home.html">Home</a> */}

							{/* 在React中靠路由链接实现切换组件--编写路由链接 */}
								<Link className="list-group-item" to="/about">About</Link>
								<Link className="list-group-item" to="/home">Home</Link>
						</div>
					</div>

					<div className="col-xs-6">
						<div className="panel">
							<div className="panel-body">
								{/* 注册路由 */}
								<Routes>
									<Route path="/about" element={<About />} />
									<Route path="/home" element={<Home />} />
								</Routes>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

```

#### 函数式

```

```



## 路由组件与一般组件

### App.js

```jsx
//创建“外壳”组件App
import './App.css';
import React, {Component} from 'react';
import {Link, Routes, Route} from 'react-router-dom';

import Home from "./pages/Home";   //Home是路由组件
import About from './pages/About';   //About是路由组件
import Header from "./components/Header";  //Header是一般组件

/*
路由组件与一般组件
			1.写法不同：
						一般组件：<Demo/>
						路由组件：<Route path="/demo" element={<Demo />}/>
			2.存放位置不同：
						一般组件：components
						路由组件：pages
			3.接收到的props不同：
						一般组件：写组件标签时传递了什么，就能收到什么
						路由组件：接收到三个固定的属性
											history:
														go: ƒ go(n)
														goBack: ƒ goBack()
														goForward: ƒ goForward()
														push: ƒ push(path, state)
														replace: ƒ replace(path, state)
											location:
														pathname: "/about"
														search: ""
														state: undefined
											match:
														params: {}
														path: "/about"
														url: "/about"
*/

// 创建并暴露App组件
export default class App extends Component {
	render() {
		return (
			<div>
				<div className="row">
					<div className="col-xs-offset-2 col-xs-8">
						<Header />
					</div>
				</div>
				<div className="row">
					<div className="col-xs-offset-2 col-xs-2">
						<div className="list-group">
							{/* 原生html中，靠<a>跳转不同的页面 */}
							{/* <a className="list-group-item" href="./about.html">About</a>
							<a className="list-group-item active" href="./home.html">Home</a> */}

							{/* 在React中靠路由链接实现切换组件--编写路由链接 */}
								<Link className="list-group-item" to="/about">About</Link>
								<Link className="list-group-item" to="/home">Home</Link>
						</div>
					</div>

					<div className="col-xs-6">
						<div className="panel">
							<div className="panel-body">
								{/* 注册路由 */}
								<Routes>
									<Route path="/about" element={<About />} />
									<Route path="/home" element={<Home />} />
								</Routes>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
```

## NavLink的使用

```jsx
//创建“外壳”组件App
import './App.css';
import React, {Component} from 'react';
import {NavLink, Routes, Route} from 'react-router-dom';

import Home from "./pages/Home";   //Home是路由组件
import About from './pages/About';   //About是路由组件
import Header from "./components/Header";  //Header是一般组件

// 创建并暴露App组件
export default class App extends Component {
	render() {
		return (
			<div>
				<div className="row">
					<div className="col-xs-offset-2 col-xs-8">
						<Header />
					</div>
				</div>
				<div className="row">
					<div className="col-xs-offset-2 col-xs-2">
						<div className="list-group">
							{/* 原生html中，靠<a>跳转不同的页面 */}
							{/* <a className="list-group-item" href="./about.html">About</a>
							<a className="list-group-item active" href="./home.html">Home</a> */}

							{/* 在React中靠路由链接实现切换组件--编写路由链接 */}
							{/*通过activeClassName指定样式名不生效，用下面方式*/}
								<NavLink className={({isActive}) => "list-group-item " + (isActive ? "demo" : "")} to="/about">About</NavLink>
								<NavLink className={({isActive}) => "list-group-item " + (isActive ? "demo" : "")} to="/home">Home</NavLink>
						</div>
					</div>

					<div className="col-xs-6">
						<div className="panel">
							<div className="panel-body">
								{/* 注册路由 */}
								<Routes>
									<Route path="/about" element={<About />} />
									<Route path="/home" element={<Home />} />
								</Routes>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
```

```html
    <style type="text/css">
        /* indx.html 新增样式 */
      .demo {
        background-color: #43fffb !important;
        color: #fff !important;
      }
    </style>
```

## NavLink的包装

### MyNavLink

```jsx
import React, {Component} from "react";
import "./index.css";
import {NavLink} from "react-router-dom";

export default class MyNavLink extends Component {
	//
	render() {
		return (
			<NavLink className={({isActive}) => "list-group-item " + (isActive ? "demo" : "")} {...this.props} />
		)
	}
}
```

### App.js

```jsx
//创建“外壳”组件App
import './App.css';
import React, {Component} from 'react';
import {Routes, Route} from 'react-router-dom';

import Home from "./pages/Home";   //Home是路由组件
import About from './pages/About';   //About是路由组件
import Header from "./components/Header";  //Header是一般组件
import MyNavLink from "./components/MyNavLink";  //Header是一般组件

// 创建并暴露App组件
export default class App extends Component {
	render() {
		return (
			<div>
				<div className="row">
					<div className="col-xs-offset-2 col-xs-8">
						<Header />
					</div>
				</div>
				<div className="row">
					<div className="col-xs-offset-2 col-xs-2">
						<div className="list-group">
{/*
NavLink与封装NavLink
				1.NavLink可以实现路由链接的高亮，通过activeClassName指定样式名
				2.标签体内容是一个特殊的标签属性
				3.通过this.props.children可以获取标签属性
*/}
							{/* 在React中靠路由链接实现切换组件--编写路由链接 */}
								<MyNavLink to="/about" children="About"></MyNavLink>
								<MyNavLink to="/home">Home</MyNavLink>
						</div>
					</div>

					<div className="col-xs-6">
						<div className="panel">
							<div className="panel-body">
								{/* 注册路由 */}
								<Routes>
									<Route path="/about" element={<About />} />
									<Route path="/home" element={<Home />} />
								</Routes>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

```

## Switch的使用(已经被Routes替代)

```jsx
{/*
	1.通常情况下，path和component是一一对应的关系。
	2.Switch可以提高路由匹配效率(单一匹配)。
*/}
								<Routes>
									<Route path="/about" element={<About />} />
									<Route path="/home" element={<Home />} />
									<Route path="/home" element={<Test />} />
								</Routes>
```



## 解决样式丢失问题

### public/index.html

```html
    <!-- <link rel="stylesheet" type="text/css" href="%PUBLIC_URL%/css/bootstrap.css"> -->
    <link rel="stylesheet" type="text/css" href="/css/bootstrap.css">
```

### App.js

```jsx
//创建“外壳”组件App
import './App.css';
import React, {Component} from 'react';
import {Routes, Route} from 'react-router-dom';

import Home from "./pages/Home";
import About from './pages/About';
import Test from "./pages/Test";
import Header from "./components/Header";
import MyNavLink from "./components/MyNavLink";

// 创建并暴露App组件
export default class App extends Component {
	render() {
		return (
			<div>
				<div className="row">
					<div className="col-xs-offset-2 col-xs-8">
						<Header />
					</div>
				</div>
				<div className="row">
					<div className="col-xs-offset-2 col-xs-2">
						<div className="list-group">
{/*
		解决多级路径刷新页面样式丢失的问题
				1.public/index.html 中 引入样式时不写 ./ 写 / （常用）
				2.public/index.html 中 引入样式时不写 ./ 写 %PUBLIC_URL% （常用）
				3.使用HashRouter
*/}

							{/* 在React中靠路由链接实现切换组件--编写路由链接 */}
								<MyNavLink to="kop/about" children="About"></MyNavLink>
								<MyNavLink to="kop/home">Home</MyNavLink>
						</div>
					</div>

					<div className="col-xs-6">
						<div className="panel">
							<div className="panel-body">
								{/* 注册路由 */}
								<Routes>
									<Route path="kop/about" element={<About />} />
									<Route path="kop/home" element={<Home />} />
								</Routes>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

```

## 精准匹配与模糊匹配

```jsx
// 创建并暴露App组件
export default class App extends Component {
	render() {
		return (
			<div>
				<div className="row">
					<div className="col-xs-offset-2 col-xs-8">
						<Header />
					</div>
				</div>
				<div className="row">
					<div className="col-xs-offset-2 col-xs-2">
						<div className="list-group">
{/*
		路由的严格匹配与模糊匹配
				1.默认使用的是模糊匹配（简单记：【输入的路径】必须包含要【匹配的路径】，且顺序要一致）
				2.开启严格匹配：<Route exact={true} path="/about" element={<About />}/>
				3.严格匹配不要随便开启，需要再开，有些时候开启会导致无法继续匹配二级路由
*/}

							{/* 在React中靠路由链接实现切换组件--编写路由链接 */}
								<MyNavLink to="/about" children="About"></MyNavLink>
								<MyNavLink to="/home/a/b">Home</MyNavLink>
						</div>
					</div>

					<div className="col-xs-6">
						<div className="panel">
							<div className="panel-body">
								{/* 注册路由 */}

								<Routes>
									<Route exact path="/about" element={<About />} />
									<Route exact path="/home" element={<Home />} />
								</Routes>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

```

## Redirect的使用

```jsx
//创建“外壳”组件App
import './App.css';
import React, {Component} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';

import Home from "./pages/Home";
import About from './pages/About';
import Header from "./components/Header";
import MyNavLink from "./components/MyNavLink";

// 创建并暴露App组件
export default class App extends Component {
	render() {
		return (
			<div>
				<div className="row">
					<div className="col-xs-offset-2 col-xs-8">
						<Header />
					</div>
				</div>
				<div className="row">
					<div className="col-xs-offset-2 col-xs-2">
						<div className="list-group">

							{/* 在React中靠路由链接实现切换组件--编写路由链接 */}
								<MyNavLink to="/about">About</MyNavLink>
								<MyNavLink to="/home">Home</MyNavLink>
						</div>
					</div>

					<div className="col-xs-6">
						<div className="panel">
							<div className="panel-body">
								{/* 注册路由 */}
{/*
	Redirect的使用	
				1.一般写在所有路由注册的最下方，当所有路由都无法匹配时，跳转到Redirect指定的路由
				2.具体编码：
						<Routes>
									<Route path="/about" element={<About />} />
									<Route path="/home" element={<Home />} />
									<Redirect to="/about" />
						</Routes>
*/}
								<Routes>
									<Route path="/about" element={<About />} />
									<Route path="/home" element={<Home />} />
									{/*<Redirect to="/about" />  v6 版本已经改变 */}
									<Route path="*" element={<Navigate to="/about" />} />
								</Routes>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

```

## 嵌套路由的使用

### Home

```jsx
import React, {Component} from "react";
import {Route, Routes, Navigate} from "react-router-dom";
import MyNavLink from "../../components/MyNavLink";
import News from "./News";
import Message from "./Message";

export default class Home extends Component {
	//
	render() {
		return (
			<div>
				<h3>我是Home的内容</h3>
				<div>
					<ul className="nav nav-tabs">
						<li>
							<MyNavLink to="home/news">News</MyNavLink>
						</li>
						<li>
							<MyNavLink to="home/message">Message</MyNavLink>
						</li>
					</ul>
					{/* 注册路由 */}
					{/*
						嵌套路由
							1.注册子路由时要写上父路由的path值
							2.路由的匹配是按照注册路由的顺序进行的
							3.二级路由不加/
					*/}
					<Routes>
						<Route path="home/news" element={<News />} />
						<Route path="home/message" element={<Message />} />
						<Route path="*" element={<Navigate to="home/news" />} />
					</Routes>
				</div>
			</div>
		)
	}
}

```

## 向路由组件传递参数

### params参数

### search参数

### state参数

```js
/*
向路由组件传递参数
  1.params参数
        路由链接(携带参数)：<Link to='/demo/test/tom/18'}>详情</Link>
        注册路由(声明接收)：<Route path="/demo/test/:name/:age" component={Test}/>
        接收参数：this.props.match.params
  2.search参数
        路由链接(携带参数)：<Link to='/demo/test?name=tom&age=18'}>详情</Link>
        注册路由(无需声明，正常注册即可)：<Route path="/demo/test" component={Test}/>
        接收参数：this.props.location.search
        备注：获取到的search是urlencoded编码字符串，需要借助querystring解析
  3.state参数
        路由链接(携带参数)：<Link to={{pathname:'/demo/test',state:{name:'tom',age:18}}}>详情</Link>
        注册路由(无需声明，正常注册即可)：<Route path="/demo/test" component={Test}/>
        接收参数：this.props.location.state
        备注：刷新也可以保留住参数
*/
```



## 编程式路由导航

```js
/*
编程式路由导航
借助this.props.history对象上的API对操作路由跳转、前进、后退
    -this.props.history.push()
    -this.props.history.replace()
    -this.props.history.goBack()
    -this.props.history.goForward()
    -this.props.history.go()
*/
```

### withRouter的使用

```jsx
import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

class Header extends Component {

	back = ()=>{
		this.props.history.goBack()
	}

	forward = ()=>{
		this.props.history.goForward()
	}

	go = ()=>{
		this.props.history.go(-2)
	}

	render() {
		console.log('Header组件收到的props是',this.props);
		return (
			<div className="page-header">
				<h2>React Router Demo</h2>
				<button onClick={this.back}>回退</button>&nbsp;
				<button onClick={this.forward}>前进</button>&nbsp;
				<button onClick={this.go}>go</button>
			</div>
		)
	}
}

export default withRouter(Header)

//withRouter可以加工一般组件，让一般组件具备路由组件所特有的API
//withRouter的返回值是一个新组件

```

### BrowserRouter与HashRouter的区别

```js
/*
BrowserRouter与HashRouter的区别
      1.底层原理不一样：
            BrowserRouter使用的是H5的history API，不兼容IE9及以下版本。
            HashRouter使用的是URL的哈希值。
      2.path表现形式不一样
            BrowserRouter的路径中没有#,例如：localhost:3000/demo/test
            HashRouter的路径包含#,例如：localhost:3000/#/demo/test
      3.刷新后对路由state参数的影响
            (1).BrowserRouter没有任何影响，因为state保存在history对象中。
            (2).HashRouter刷新后会导致路由state参数的丢失！！！
      4.备注：HashRouter可以用于解决一些路径错误相关的问题。
   */
```



----

