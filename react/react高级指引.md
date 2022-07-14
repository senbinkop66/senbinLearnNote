# 无障碍辅助功能

## 为什么我们需要无障碍辅助功能？

网络无障碍辅助功能（Accessibility，也被称为 [**a11y**](https://en.wiktionary.org/wiki/a11y)，因为以 A 开头，以 Y 结尾，中间一共 11 个字母）是一种可以帮助所有人获得服务的设计和创造。无障碍辅助功能是使得辅助技术正确解读网页的必要条件。

React 对于创建可访问网站有着全面的支持，而这通常是通过标准 HTML 技术实现的。

### WCAG

[网络内容无障碍指南（Web Content Accessibility Guidelines，WCAG）](https://www.w3.org/WAI/intro/wcag) 为开发无障碍网站提供了指南。

### WAI-ARIA

[网络无障碍倡议 - 无障碍互联网应用（Web Accessibility Initiative - Accessible Rich Internet Applications）](https://www.w3.org/WAI/intro/aria) 文件包含了创建完全无障碍 JavaScript 部件所需要的技术。

注意：JSX 支持所有 `aria-*` HTML 属性。虽然大多数 React 的 DOM 变量和属性命名都使用驼峰命名（camelCased），但 aria-* 应该像其在 HTML 中一样使用带连字符的命名法（也叫诸如 hyphen-cased，kebab-case，lisp-case)。

```jsx
<input
  type="text"
  aria-label={labelText}  aria-required="true"  onChange={onchangeHandler}
  value={inputValue}
  name="name"
/>
```

## 语义化的 HTML

语义化的 HTML 是无障碍辅助功能网络应用的基础。 利用多种 HTML 元素来强化您网站中的信息通常可以使您直接获得无障碍辅助功能。

- [MDN 的 HTML 元素参照（MDN HTML elements reference）](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)

有时，语义化的 HTML 会被破坏。比如当在 JSX 中使用 `<div>` 元素来实现 React 代码功能的时候，又或是在使用列表（`<ol>`， `<ul>` 和 `<dl>`）和 HTML `<table>` 时。 在这种情况下，我们应该使用 [React Fragments](https://zh-hans.reactjs.org/docs/fragments.html) 来组合各个组件。

举个例子，

```jsx
import React, { Fragment } from 'react';
function ListItem({ item }) {
  return (
    <Fragment>      
      <dt>{item.term}</dt>
      <dd>{item.description}</dd>
    </Fragment>  
    );
}

function Glossary(props) {
  return (
    <dl>
      {props.items.map(item => (
        <ListItem item={item} key={item.id} />
      ))}
    </dl>
  );
}
```

和其他的元素一样，你可以把一系列的对象映射到一个 fragment 的数组中。

```jsx
function Glossary(props) {
  return (
    <dl>
      {props.items.map(item => (
        // Fragments should also have a `key` prop when mapping collections
        <Fragment key={item.id}>
          <dt>{item.term}</dt>
          <dd>{item.description}</dd>
        </Fragment>
      ))}
    </dl>
  );
}
```

当你不需要在 fragment 标签中添加任何 prop 且你的工具支持的时候，你可以使用 [短语法](https://zh-hans.reactjs.org/docs/fragments.html#short-syntax)：

```jsx
function ListItem({ item }) {
  return (
    <>
      <dt>{item.term}</dt>
      <dd>{item.description}</dd>
    </>
  );
}
```

## 无障碍表单

### 标记

所有的 HTML 表单控制，例如 `<input>` 和 `<textarea>` ，都需要被标注来实现无障碍辅助功能。我们需要提供屏幕朗读器以解释性标注。

以下资源向我们展示了如何写标注：

- [W3C 向我们展示如何标注元素](https://www.w3.org/WAI/tutorials/forms/labels/)
- [WebAIM 向我们展示如何标注元素](https://webaim.org/techniques/forms/controls)
- [Paciello Group 解释什么是无障碍名称](https://www.paciellogroup.com/blog/2017/04/what-is-an-accessible-name/)

尽管这些标准 HTML 实践可以被直接用在 React 中，请注意 `for` 在 JSX 中应该被写作 `htmlFor`：

```
<label htmlFor="namedInput">Name:</label><input id="namedInput" type="text" name="name"/>
```

### 在出错时提醒用户

当出现错误时，所有用户都应该知情。下面的链接告诉我们如何给屏幕朗读器设置错误信息：

- [W3C 展示用户推送](https://www.w3.org/WAI/tutorials/forms/notifications/)
- [WebAIM 关于表单校验的文章](https://webaim.org/techniques/formvalidation/)

## 控制焦点

确保你的网络应用在即使只拥有键盘的环境下正常运作。

- [WebAIM 讨论使用键盘进行无障碍访问](https://webaim.org/techniques/keyboard/)

### 键盘焦点及焦点轮廓

键盘焦点的定义是：在 DOM 中，当前被选中来接受键盘信息的元素。我们可以在各处看到键盘焦点，它会被焦点轮廓包围，像下面的这个图像一样。

[![选中的链接被蓝色键盘焦点轮廓包围着。](https://zh-hans.reactjs.org/static/dec0e6bcc1f882baf76ebc860d4f04e5/4fcfe/keyboard-focus.png)](https://zh-hans.reactjs.org/static/dec0e6bcc1f882baf76ebc860d4f04e5/4fcfe/keyboard-focus.png)

请不要使用 CSS 移除这个轮廓，比如设置 `outline: 0`，除非你将使用其他的方法实现焦点轮廓。

### 跳过内容机制

为了帮助和提速键盘导航，我们提供了一种机制，可以帮助用户跳过一些导航段落。

跳转链接（Skiplinks），或者说跳转导航链接（Skip Navigation Links）是一种隐藏的导航链接，它只会在使用键盘导航时可见。使用网页内部锚点和一些式样可以很容易地实现它：

- [WebAIM - 跳转导航链接（Skip Navigation Links）](https://webaim.org/techniques/skipnav/)

另外，使用地标元素和角色，比如 `<main>` 和 `<aside>`，作为辅助来划分网页的区域可以让用户快速导航至这些部分。

你可以通过下面的链接了解更多如何使用这些元素来增强无障碍辅助功能：

- [无障碍地标](https://www.scottohara.me/blog/2018/03/03/landmarks.html)

### 使用程序管理焦点

我们的 React 应用在运行时会持续更改 HTML DOM，有时这将会导致键盘焦点的丢失或者是被设置到了意料之外的元素上。为了修复这类问题，我们需要以编程的方式让键盘聚焦到正确的方向上。比方说，在一个弹窗被关闭的时候，重新设置键盘焦点到弹窗的打开按钮上。

MDN Web 文档关注了这个问题并向我们解释了可以如何搭建[可用键盘导航的 JavaScript 部件](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets)。

我们可以用 [DOM 元素的 Refs](https://zh-hans.reactjs.org/docs/refs-and-the-dom.html) 在 React 中设置焦点。

用以上技术，我们先在一个 class 组件的 JSX 中创建一个元素的 ref：

```jsx
class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    // 创造一个 textInput DOM 元素的 ref
    this.textInput = React.createRef();
  }
  render() {
  // 使用 `ref` 回调函数以在实例的一个变量中存储文本输入 DOM 元素
  //（比如，this.textInput）。
    return (
      <input
        type="text"
        ref={this.textInput}
      />
    );
  }
}
```

然后我们就可以在需要时于其他地方把焦点设置在这个组件上：

```jsx
focus() {
  // 使用原始的 DOM API 显式地聚焦在 text input 上
  // 注意：我们通过访问 “current” 来获得 DOM 节点
  this.textInput.current.focus();
}
```

有时，父组件需要把焦点设置在其子组件的一个元素上。我们可以通过在子组件上设置一个特殊的 prop 来[对父组件暴露 DOM refs](https://zh-hans.reactjs.org/docs/refs-and-the-dom.html#exposing-dom-refs-to-parent-components) 从而把父组件的 ref 传向子节点的 DOM 节点。

```jsx
function CustomTextInput(props) {
  return (
    <div>
      <input ref={props.inputRef} />
    </div>
  );
}

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.inputElement = React.createRef();
  }
  render() {
    return (
      <CustomTextInput inputRef={this.inputElement} />
    );
  }
}

// 现在你就可以在需要时设置焦点了
this.inputElement.current.focus();
```

当使用 [HOC](https://zh-hans.reactjs.org/docs/higher-order-components.html) 来扩展组件时，我们建议使用 React 的 `forwardRef` 函数来向被包裹的组件[转发 ref](https://zh-hans.reactjs.org/docs/forwarding-refs.html)。如果第三方的 HOC 不支持转发 ref，上面的方法仍可以作为一种备选方案。

[react-aria-modal](https://github.com/davidtheclark/react-aria-modal) 提供了一个很好的焦点管理的例子。 这是一个少有的完全无障碍的模态窗口的例子。它不仅仅把初始焦点设置在了取消按钮上（防止键盘用户意外激活成功操作）和把键盘焦点固定在了窗口之内， 关闭窗口时它也会把键盘焦点重置到打开窗口的那一个元素上。

> 注意:
>
> 虽然这是一个非常重要的无障碍辅助功能，但它也是一种应该谨慎使用的技术。 我们应该在受到干扰时使用它来修复键盘焦点，而不是试图预测用户想要如何使用应用程序。

----

## 鼠标和指针事件

确保任何可以使用鼠标和指针完成的功能也可以只通过键盘完成。只依靠指针会产生很多使键盘用户无法使用你的应用的情况。

为了说明这一点，让我们看一下由点击事件引起的破坏无障碍访问的典型示例：外部点击模式，用户可以通过点击元素以外的地方来关闭已打开的弹出框。

![一个切换按钮可以打开一个弹窗，这个弹窗使用了外部点击模式，此图用一个鼠标指针展示了关闭操作是可行的。](https://zh-hans.reactjs.org/5523b05b22210c5a2fa0bd1f01339cb3/outerclick-with-mouse.gif)

通常实现这个功能的方法是在 `window` 对象中附上一个 `click` 事件以关闭弹窗：

```jsx
class OuterClickExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
    this.toggleContainer = React.createRef();

    this.onClickHandler = this.onClickHandler.bind(this);
    this.onClickOutsideHandler = this.onClickOutsideHandler.bind(this);
  }

  componentDidMount() {
    window.addEventListener('click', this.onClickOutsideHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.onClickOutsideHandler);
  }

  onClickHandler() {
    this.setState(currentState => ({
      isOpen: !currentState.isOpen
    }));
  }

  onClickOutsideHandler(event) {
    if (this.state.isOpen && !this.toggleContainer.current.contains(event.target)) {
      this.setState({ isOpen: false });
    }
  }

  render() {
    return (
      <div ref={this.toggleContainer}>
        <button onClick={this.onClickHandler}>Select an option</button>
        {this.state.isOpen && (
          <ul>
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
          </ul>
        )}
      </div>
    );
  }
}
```

当用户使用指针设备，比如鼠标时，这样做没有问题。但是当只使用键盘时，因为 `window` 对象不会接受到 `click` 事件，用户将无法使用 tab 切换到下一个元素。这样会导致用户无法使用你应用中的一些内容，导致不完整的用户体验。

![一个通过按钮打开的使用了外部点击模式的弹窗列表。用键盘操作时，我们可以看到弹窗没有在失去焦点时被关闭，遮挡了屏幕上的其他元素。](https://zh-hans.reactjs.org/eca0ca825c8c5e2aa609cee72ef47e27/outerclick-with-keyboard.gif)

使用正确的事件触发器，比如 `onBlur` 和 `onFocus`，同样可以达成这项功能：

```jsx
class BlurExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
    this.timeOutId = null;

    this.onClickHandler = this.onClickHandler.bind(this);
    this.onBlurHandler = this.onBlurHandler.bind(this);
    this.onFocusHandler = this.onFocusHandler.bind(this);
  }

  onClickHandler() {
    this.setState(currentState => ({
      isOpen: !currentState.isOpen
    }));
  }

  // 我们在下一个时间点使用 setTimeout 关闭弹窗。
  // 这是必要的，因为失去焦点事件会在新的焦点事件前被触发，
  // 我们需要通过这个步骤确认这个元素的一个子节点
  // 是否得到了焦点。
  onBlurHandler() {
    this.timeOutId = setTimeout(() => {
      this.setState({
        isOpen: false
      });
    });
  }

  // 如果一个子节点获得了焦点，不要关闭弹窗。
  onFocusHandler() {
    clearTimeout(this.timeOutId);
  }

  render() {
    // React 通过把失去焦点和获得焦点事件传输给父节点
    // 来帮助我们。
    return (
      <div onBlur={this.onBlurHandler}
           onFocus={this.onFocusHandler}>
        <button onClick={this.onClickHandler}
                aria-haspopup="true"
                aria-expanded={this.state.isOpen}>
          Select an option
        </button>
        {this.state.isOpen && (
          <ul>
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
          </ul>
        )}
      </div>
    );
  }
}
```

以上代码使得键盘和鼠标用户都可以使用我们的功能。请注意我们添加了 `aria-*` props 以服务屏幕朗读器用户。作为一个简单的例子，我们没有实现使用`方向键`来与弹窗互动。

![一个针对鼠标和键盘用户都正确关闭的弹窗。](https://zh-hans.reactjs.org/28ce2067489843caf05fe7ce22494542/blur-popover-close.gif)

这只是众多只依赖于鼠标和指针的程序破坏键盘用户的例子之一。始终使用键盘测试会让你迅速发现这些问题，你可以使用适用于键盘的事件处理器来修复这些问题。

---

