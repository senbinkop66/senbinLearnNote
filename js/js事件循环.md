



## [任务 vs 微任务](https://developer.mozilla.org/zh-CN/docs/Web/API/HTML_DOM_API/Microtask_guide#任务_vs_微任务)

为了正确地讨论微任务，首先最好知道什么是一个 JavaScript 任务以及微任务如何区别于任务。这里是一个快速、简单的解释，但若你想了解更多细节，可以阅读这篇文章中的信息 [In depth: Microtasks and the JavaScript runtime environment](https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API/Microtask_guide/In_depth).

### [任务（Tasks）](https://developer.mozilla.org/zh-CN/docs/Web/API/HTML_DOM_API/Microtask_guide#任务（tasks）)

一个 **任务** 就是由执行诸如从头执行一段程序、执行一个事件回调或一个 interval/timeout 被触发之类的标准机制而被调度的任意 JavaScript 代码。这些都在 **任务队列（task queue）**上被调度。

在以下时机，任务会被添加到任务队列：

- 一段新程序或子程序被直接执行时（比如从一个控制台，或在一个 [``](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/script) 元素中运行代码）。
- 触发了一个事件，将其回调函数添加到任务队列时。
- 执行到一个由 [`setTimeout()`](https://developer.mozilla.org/zh-CN/docs/Web/API/setTimeout) 或 [`setInterval()`](https://developer.mozilla.org/zh-CN/docs/Web/API/setInterval) 创建的 timeout 或 interval，以致相应的回调函数被添加到任务队列时。

事件循环驱动你的代码按照这些任务排队的顺序，一个接一个地处理它们。在当前迭代轮次中，只有那些当事件循环过程开始时 *已经处于任务队列中* 的任务会被执行。其余的任务不得不等待到下一次迭代。

### [微任务（Microtasks）](https://developer.mozilla.org/zh-CN/docs/Web/API/HTML_DOM_API/Microtask_guide#微任务（microtasks）)

起初微任务和任务之间的差异看起来不大。它们很相似；都由位于某个队列的 JavaScript 代码组成并在合适的时候运行。但是，只有在迭代开始时队列中存在的任务才会被事件循环一个接一个地运行，这和处理微任务队列是殊为不同的。

有两点关键的区别。

首先，每当一个任务存在，事件循环都会检查该任务是否正把控制权交给其他 JavaScript 代码。如若不然，事件循环就会运行微任务队列中的所有微任务。接下来微任务循环会在事件循环的每次迭代中被处理多次，包括处理完事件和其他回调之后。

其次，如果一个微任务通过调用 [`queueMicrotask()`](https://developer.mozilla.org/zh-CN/docs/Web/API/queueMicrotask), 向队列中加入了更多的微任务，则那些新加入的微任务 *会早于下一个任务运行* 。这是因为事件循环会持续调用微任务直至队列中没有留存的，即使是在有更多微任务持续被加入的情况下。

> **注意：** 因为微任务自身可以入列更多的微任务，且事件循环会持续处理微任务直至队列为空，那么就存在一种使得事件循环无尽处理微任务的真实风险。如何处理递归增加微任务是要谨慎而行的。

## [使用微任务](https://developer.mozilla.org/zh-CN/docs/Web/API/HTML_DOM_API/Microtask_guide#使用微任务)

在谈论更多之前，再次注意到一点是重要的，那就是如果可能的话，大部分开发者并不应该过多的使用微任务。在基于现代浏览器的 JavaScript 开发中有一个高度专业化的特性，那就是允许你调度代码跳转到其他事情之前，而那些事情原本是处于用户计算机中一大堆等待发生的事情集合之中的。滥用这种能力将带来性能问题。

### [入列微任务](https://developer.mozilla.org/zh-CN/docs/Web/API/HTML_DOM_API/Microtask_guide#入列微任务)

就其本身而言，应该使用微任务的典型情况，要么只有在没有其他办法的时候，要么是当创建框架或库时需要使用微任务达成其功能。虽然在过去要使得入列微任务成为可能有可用的技巧（比如创建一个立即 resolve 的 promise），但新加入的 [`queueMicrotask()`](https://developer.mozilla.org/zh-CN/docs/Web/API/queueMicrotask) 方法增加了一种标准的方式，可以安全的引入微任务而避免使用额外的技巧。

通过引入 `queueMicrotask()`，由晦涩地使用 promise 去创建微任务而带来的风险就可以被避免了。举例来说，当使用 promise 创建微任务时，由回调抛出的异常被报告为 rejected promises 而不是标准异常。同时，创建和销毁 promise 带来了事件和内存方面的额外开销，这是正确入列微任务的函数应该避免的。

简单的传入一个 JavaScript [`Function`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function) ，以在 `queueMicrotask()` 方法中处理微任务时供其上下文调用即可；取决于当前执行上下文， `queueMicrotask()` 以定义的形式被暴露在 [`Window`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window) 或 [`Worker`](https://developer.mozilla.org/zh-CN/docs/Web/API/Worker) 接口上。

```js
queueMicrotask(() => {
  /* 微任务中将运行的代码 */
});
```

微任务函数本身没有参数，也不返回值。

### [何时使用微任务](https://developer.mozilla.org/zh-CN/docs/Web/API/HTML_DOM_API/Microtask_guide#何时使用微任务)

在本章节中，我们来看看微任务特别有用的场景。通常，这些场景关乎捕捉或检查结果、执行清理等；其时机晚于一段 JavaScript 执行上下文主体的退出，但早于任何事件处理函数、timeouts 或 intervals 及其他回调被执行。

何时是那种有用的时候？

使用微任务的最主要原因简单归纳为：**确保任务顺序的一致性，即便当结果或数据是同步可用的，也要同时减少操作中用户可感知到的延迟而带来的风险。**

#### 保证条件性使用 promises 时的顺序

微任务可被用来确保执行顺序总是一致的一种情形，是当 promise 被用在一个 `if...else` 语句（或其他条件性语句）中、但并不在其他子句中的时候。考虑如下代码：

```js
customElement.prototype.getData = url => {
  if (this.cache[url]) {
    this.data = this.cache[url];
    this.dispatchEvent(new Event("load"));
  } else {
    fetch(url).then(result => result.arrayBuffer()).then(data => {
      this.cache[url] = data;
      this.data = data;
      this.dispatchEvent(new Event("load"));
    )};
  }
};
```

这段代码带来的问题是，通过在 `if...else` 语句的其中一个分支（此例中为缓存中的图片地址可用时）中使用一个任务而 promise 包含在 `else` 子句中，我们面临了操作顺序可能不同的局势；比方说，像下面看起来的这样：

```js
element.addEventListener("load", () => console.log("Loaded data"));
console.log("Fetching data...");
element.getData();
console.log("Data fetched");
```

连续执行两次这段代码会形成下表中的结果：

| 数据未缓存                                         | 数据已缓存                                           |
| :------------------------------------------------- | :--------------------------------------------------- |
| Fetching data 、   Data fetched  、    Loaded data | `Fetching data 、   Loaded data 、    Data fetched ` |

甚至更糟的是，有时元素的 `data`

属性会被设置，还有时当这段代码结束运行时却不会被设置。

我们可以通过在 `if` 子句里使用一个微任务来确保操作顺序的一致性，以达到平衡两个子句的目的：

```js
customElement.prototype.getData = url => {
  if (this.cache[url]) {
    queueMicrotask(() => {
      this.data = this.cache[url];
      this.dispatchEvent(new Event("load"));
    });
  } else {
    fetch(url).then(result => result.arrayBuffer()).then(data => {
      this.cache[url] = data;
      this.data = data;
      this.dispatchEvent(new Event("load"));
    )};
  }
};
```

通过在两种情况下各自都通过一个微任务（`if` 中用的是 `queueMicrotask()` 而 `else` 子句中通过 [`fetch()`](https://developer.mozilla.org/zh-CN/docs/Web/API/fetch) 使用了 promise）处理了设置 `data` 和触发 `load` 事件，平衡了两个子句。
