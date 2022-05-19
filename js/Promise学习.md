# Promise 的理解和使用

## Promise 是什么?

### Promise理解

**Promise** 对象用于表示一个异步操作的最终完成 (或失败)及其结果值。

抽象表达:
1) Promise 是一门新的技术(ES6 规范) 
2. Promise 是 JS 中进行异步编程的新解决方案

  > 备注：旧方案是单纯使用回调函数
2. 具体表达:
1) 从语法上来说: Promise 是一个构造函数
2) 从功能上来说: promise 对象用来封装一个异步操作并可以获取其成功/失败的结果值

一个 `Promise` 对象代表一个在这个 promise 被创建出来时不一定已知的值。它让您能够把异步操作最终的成功返回值或者失败原因和相应的处理程序关联起来。 这样使得异步方法可以像同步方法那样返回值：异步方法并不会立即返回最终的值，而是会返回一个 *promise*，以便在未来某个时候把值交给使用者。

一个 `Promise` 必然处于以下几种状态之一：

- *待定（pending）*: 初始状态，既没有被兑现，也没有被拒绝。
- *已兑现（fulfilled）*: 意味着操作成功完成。
- *已拒绝（rejected）*: 意味着操作失败。

### promise 的状态改变

1. pending 变为 resolved

2. pending 变为 rejected

说明: 

- 只有这 2 种, 且一个 promise 对象只能改变一次
- 无论变为成功还是失败, 都会有一个结果数据
- 成功的结果数据一般称为 value, 失败的结果数据一般称为 reason

### promise 的基本流程



![promise](E:\pogject\学习笔记\image\js\promise基本流程.jpg)

待定状态的 Promise 对象要么会通过一个值*被兑现（fulfilled）*，要么会通过一个原因（错误）*被拒绝（rejected）*。当这些情况之一发生时，我们用 promise 的 then 方法排列起来的相关处理程序就会被调用。如果 promise 在一个相应的处理程序被绑定时就已经被兑现或被拒绝了，那么这个处理程序就会被调用，因此在完成异步操作和绑定处理方法之间不会存在竞争状态。

因为 Promise.prototype.then 和  Promise.prototype.catch 方法返回的是 promise， 所以它们可以被链式调用。

### promise 的基本使用

使用 1: 基本编码流程

```js
  // 1.创建promise 对象，(pending状态), 指定执行器函数
  const p = new Promise((resolve, reject) => {
    // 2.在执行器函数中启动行异步任务
    setTimeout(() => {
      const time = Date.now();
      //根据结果做不同处理
      if (time % 2 === 1) {
        resolve(time);
      }else{
        reject("失败" + time);
      }
    }, 2000);

  });
  // 4.获取promise结果
  p.then((value) => {
    console.log("成功的value: " + value);
  }, (reason) => {
    console.log("失败的reason: " + reason);
  });
```



---

## 为什么要用 Promise?

### 指定回调函数的方式更加灵活

1. 旧的: 必须在启动异步任务前指定
2. promise: 启动异步任务 => 返回 promie 对象 => 给promise 对象绑定回调函数(甚至可以在异步任务结束后指定/多个)

### 支持链式调用, 可以解决回调地狱问题

1. 什么是回调地狱?
  回调函数嵌套调用, 外部回调函数异步执行的结果是嵌套的回调执行的条件

2. 回调地狱的缺点?
  不便于阅读
  不便于异常处理

3. 解决方案?
  promise 链式调用

4. 终极解决方案?

   async/await

