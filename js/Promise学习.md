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

#### 使用 1: 基本编码流程

```js
  // 1.创建promise 对象，(pending状态), 指定执行器函数
  const p = new Promise((resolve, reject) => {
    // 2.在执行器函数中启动行异步任务
    setTimeout(() => {
      const time = Date.now();
      //3.根据结果做不同处理
      if (time % 2 === 1) {
        // 3.1 如果成功了，调用 resolve(),指定成功的value,变为resolved状态
        resolve(time);
      }else{
        // 3.2 如果失败了，调用reject(),指定失败的reason,变为rejected状态
        reject("失败" + time);
      }
    }, 2000);

  });
  // 4.用promise指定成功或失败的回调函数来获取成功的value或失败的reason
  p.then((value) => {
    // 成功的回调函数onResolved,得到成的value
    console.log("成功的value: " + value);
  }, (reason) => {
    // 失败的回调函数onRejected,得到失败的reason
    console.log("失败的reason: " + reason);
  });
```

#### 使用 2: 使用 promise 封装基于定时器的异步

```js
function doDelay(time) {
  // 1.创建promise 对象，(pending状态), 指定执行器函数
  return new Promise((resolve, reject) => {

    // 2.在执行器函数中启动行异步任务
    console.log("启动异步任务");

    setTimeout(() => {
      console.log("延迟任务开始执行...");
      const time = Date.now();

      //3.根据结果做不同处理, 假设: 时间为奇数代表成功, 为偶数代表失败
      if (time % 2 === 1) {
        // 3.1 如果成功了，调用 resolve(),指定成功的value,变为resolved状态
        resolve("成功的数据 ", time);
      }else{
        // 3.2 如果失败了，调用reject(),指定失败的reason,变为rejected状态
        reject("失败的数据 " + time);
      }
    }, time);
  });
}

  const p1 = doDelay(2000);

  // 4.用promise指定成功或失败的回调函数来获取成功的value或失败的reason
  p1.then((value) => {
    // 成功的回调函数onResolved,得到成的value
    console.log("成功的value: " + value);
  }, (reason) => {
    // 失败的回调函数onRejected,得到失败的reason
    console.log("失败的reason: " + reason);
  });

// 启动异步任务
// 延迟任务开始执行...
// 失败的reason: 失败的数据 1653979910670
```

#### 使用 3: 使用 promise 封装 ajax 异步请求

```js
  // 可复用的发 ajax 请求的函数: xhr + promise
  function promiseAjax(url) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onreadystatechange = () => {
        if (xhr.readyState !== 4) {
          return;
        }
        const {status, response} = xhr;
        // 请求成功, 调用 resolve(value)
        if (status >= 200 && status < 300) {
          //resolve(JSON.parse(response));
          resolve(response);
        } else {
          // 请求失败, 调用 reject(reason)
          reject(new Error("请求失败: status " + status));
        }
      };
      xhr.open("GET", url);
      xhr.send();
    });
  }
  
  let p = promiseAjax("http://127.0.0.1/test/genomefile.txt");
  p.then(data => {
    console.log('显示成功数据: ', data);
  }, error => {
    console.log("错误信息: ", error.message);
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

```js
// 成功的回调函数
function successCallback(result) {
  console.log("声音文件创建成功: " + result);
}

// 失败的回调函数
function failureCallback(error) {
  console.log("声音文件创建失败: " + error);
}

// 1).使用纯回调函数 
createAudioFileAsync(audioSettings, successCallback, failureCallback);

// 2) 使用 Promise
const promise = createAudioFileAsync(audioSettings);
setTimeout(() => {
  promise.then(successCallback, failureCallback);
}, 2000);


// 回调地狱
doSomething(function(result) {
  doSomethingElse(result, function(newResult) {
    doThirdThing(newResult, function(finalResult) {
      console.log("Got the final result: " + finalResult);
    }, failureCallback);
  }, failureCallback);
}, failureCallback);

// 使用 promise 的链式调用解决回调地狱
doSomething().then(function(result) {
  return doSomethingElse(result);
})
  .then(function(newResult) {
    return doThirdThing(newResult);
  })
  .then(function(finalResult) {
    console.log("Got the final result: " + finalResult);
  })
  .catch(failureCallback);

//async/await: 回调地狱的终极解决方案
async function request(){
  try {
    const result = await doSomething();
    const newResult = await doSomething(result);
    const finalResult = await doThirdThing(newResult);
    console.log("Got the final result: " + finalResult);
  } catch (error) {
    failureCallback(error);
  }
}
```

---

## 如何使用 Promise?

1. Promise 构造函数: Promise (excutor) {}

​	(1) executor 函数: 执行器 (resolve, reject) => {}

​	(2) resolve 函数: 内部定义成功时我们调用的函数 value => {}

​	(3) reject 函数: 内部定义失败时我们调用的函数 reason => {}

说明: **executor 会在 Promise 内部立即同步调用**,异步操作在执行器中执行



2. Promise.prototype.then 方法: (onResolved, onRejected) => {}

​	(1) onResolved 函数: 成功的回调函数 (value) => {}

​	(2) onRejected 函数: 失败的回调函数 (reason) => {}

说明: 指定用于得到成功 value 的成功回调和用于得到失败 reason 的失败回调，返回一个新的 promise 对象



3. Promise.prototype.catch 方法: (onRejected) => {}

​	(1) onRejected 函数: 失败的回调函数 (reason) => {}

说明: then()的语法糖, 相当于: then(undefined, onRejected)



4. Promise.resolve 方法: (value) => {}

​	(1) value: 成功的数据或 promise 对象

说明: 返回一个成功/失败的 promise 对象



5. Promise.reject 方法: (reason) => {}

​	(1) reason: 失败的原因

说明: 返回一个失败的 promise 对象



6. Promise.all 方法: (promises) => {}

​	(1) promises: 包含 n 个 promise 的数组

说明: 返回一个新的 promise, 只有所有的 promise 都成功才成功, 只要有一个失败了就直接失败



7. Promise.race 方法: (promises) => {}
   

​	(1) promises: 包含 n 个 promise 的数组

说明: 返回一个新的 promise, 第一个完成的 promise 的结果状态就是最终的结果状态

```js
new Promise((resolve, reject) => {
  if (Date.now() % 2 === 0) {
    resolve(1);
  } else {
    reject(2);
  }
}).then((value => {
  console.log("onResolved1()", value);
}).catch(reason => {
  console.log("onRejected1()", reason);
});
```

```js
const p1 = Promise.resolve(1);
const p2 = Promise.resolve(Promise.resolve(2));
const p3 = Promise.resolve(Promise.reject(3));
const p4 = Promise.reject(4);

const p5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Date.now() % 2 === 0) {
      resolve(66)
    } else {
      reject(99)
    }
  }, 100);
});

const pAll = Promise.all([p1, p2, p5]);
pAll.then(
  values => {
    console.log("all成功了 ", values);
  },
  reason => {
    console.log("all失败了 ", reason);
  }
);

const pRace = Promise.race([p5, p1, p4]);
pRace.then(
  value => {console.log('race 成功了 ', value)},
  reason => {console.log('race 失败了 ', reason)}
);

//race 成功了  1
// all成功了  (3) [1, 2, 66]
```

---

## promise 的几个关键问题

### 如何改变 promise 的状态?

(1) resolve(value): 如果当前是 pending 就会变为 resolved

(2) reject(reason): 如果当前是 pending 就会变为 rejected

(3) 抛出异常: 如果当前是 pending 就会变为 rejected

### 一个 promise 指定多个成功/失败回调函数, 都会调用吗?

当 promise 改变为对应状态时都会调用

### 改变 promise 状态和指定回调函数谁先谁后?

(1) 都有可能, 正常情况下是先指定回调再改变状态, 但也可以先改状态再指定回调

(2) 如何先改状态再指定回调?

① 在执行器中直接调用 resolve()/reject()
② 延迟更长时间才调用 then()

(3) 什么时候才能得到数据?

① 如果先指定的回调, 那当状态发生改变时, 回调函数就会调用, 得到数据
② 如果先改变的状态, 那当指定回调时, 回调函数就会调用, 得到数据

### promise.then()返回的新 promise 的结果状态由什么决定?

(1) 简单表达: 由 then()指定的回调函数执行的结果决定

(2) 详细表达:

① 如果抛出异常, 新 promise 变为 rejected, reason 为抛出的异常
② 如果返回的是**非 promise** 的任意值, 新 promise 变为 resolved, value 为返回的值
③ 如果返回的是另一个新 promise, 此 promise 的结果就会成为新 promise 的结果

### promise 如何串连多个操作任务?

(1) promise 的 then()返回一个新的 promise, 可以看成 then()的链式调用

(2) 通过 then 的链式调用串连多个同步/异步任务

### promise 异常传透?

(1) 当使用 promise 的 then 链式调用时, 可以在最后指定失败的回调

(2) 前面任何操作出了异常, 都会传到最后失败的回调中处理

### 中断 promise 链?

(1) 当使用 promise 的 then 链式调用时, 在中间中断, 不再调用后面的回调函数

(2) 办法: 在回调函数中**返回一个 pendding 状态的 promise 对象**







```

```



---

# Promise.resolve()

**Promise.resolve(value)**方法返回一个以给定值解析后的[`Promise`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 对象。如果这个值是一个 promise ，那么将返回这个 promise ；如果这个值是thenable（即带有[`"then" `](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/then)方法），返回的promise会“跟随”这个thenable的对象，采用它的最终状态；否则返回的promise将以此值完成。此函数将类promise对象的多层嵌套展平。

> **警告：**不要在解析为自身的thenable 上调用`Promise.resolve`。**这将导致无限递归**，因为它试图展平无限嵌套的promise。一个例子是将它与Angular中的异步管道一起使用。在[此处](https://angular.io/guide/template-syntax#avoid-side-effects)了解更多信息。

例如下例代码

```js
let thenable = {
  then: (resolve, reject) => {
    resolve(thenable)
  }
}

Promise.resolve(thenable)  //这会造成一个死循环
```

## [语法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve#syntax)

```
Promise.resolve(value);
```

### [参数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve#参数)

value

将被`Promise`对象解析的参数，也可以是一个`Promise`对象，或者是一个thenable。

### [返回值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve#返回值)

返回一个带着给定值解析过的`Promise`对象，如果参数本身就是一个`Promise`对象，则直接返回这个`Promise`对象。

## [描述](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve#description)

静态方法 `Promise.resolve`返回一个解析过的`Promise`对象。

## [示例](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve#示例)

### [使用静态`Promise.resolve`方法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve#使用静态promise.resolve方法)

```js
Promise.resolve("Success").then((value) => {
	console.log(value);  //Success
}, (reason)=> {
	console.log(reason);  // 不会被调用
});
```

### [resolve一个数组](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve#resolve一个数组)

```javascript
let p = Promise.resolve([1, 2, 3]);

p.then((value) => {
	console.log(value[1]);  //2
}, (reason)=> {
	console.log(reason);  // 不会被调用
});
```

### [resolve另一个promise](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve#resolve另一个promise)

```js
let p1 = Promise.resolve(11);

let p2 = Promise.resolve(p1);

p2.then(value => {
	console.log(value);
});

console.log("p1 === p1 : " + (p1 === p2));

//打印顺序如下，这里有一个同步异步先后执行的区别
// p1 === p1 : true
// 11
```

日志顺序颠倒其实是由于异步地调用`then` 方法。在[这里](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then#Return_value)查看`then` 是如何工作的。

### [resolve thenable 并抛出错误](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve#resolve_thenable_并抛出错误)

```js
// Resolve一个thenable对象
let p1 = Promise.resolve({
	then: (onFulfill, onReject) => { onFulfill("fulfilled"); }
});

console.log(p1 instanceof Promise);  // true

p1.then(value => {
	console.log(value);  //fulfilled
}, reason =>{
	//不会被调用
});

// Thenable在callback之前抛出异常
// Promise rejects

let thenable1 = {
	then: (resolve) => {
		throw new TypeError("Throwing");
		resolve("Resolving");
	}
};

let p2 = Promise.resolve(thenable1);

p2.then((value) => {
	console.log(value);  // 不会被调用
}, reason => {
	console.log(reason);  //TypeError: Throwing
});

// Thenable在callback之后抛出异常
// Promise resolves
let thenable2 = { then: function(resolve) {
  resolve("Resolving");
  throw new TypeError("Throwing");
}};

let p3 = Promise.resolve(thenable2);

p3.then(function(v) {
  console.log(v);  // Resolving
}, function(e) {
  // 不会被调用
});
```

---

# Promise.reject()

**Promise.reject()**方法返回一个带有拒绝原因的`Promise`对象。

## [语法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject#syntax)

```
Promise.reject(reason);
```

### [参数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject#参数)

- reason

  表示`Promise`被拒绝的原因。

### [返回值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject#返回值)

一个给定原因了的被拒绝的 [`Promise`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)。

## [描述](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject#description)

静态函数`Promise.reject`返回一个被拒绝的`Promise对象`。通过使用[`Error`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error)的实例获取错误原因`reason`对调试和选择性错误捕捉很有帮助。

## [示例](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject#示例)

### [使用静态`Promise.reject()`方法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject#使用静态promise.reject方法)

```js

Promise.reject(new Error("fail")).then(value => {
	console.log(value);
},reason => {
	console.log(reason);  // Error: fail
})
```

----

# Promise.then()

**then()** 方法返回一个 [`Promise` (en-US)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)。它最多需要有两个参数：Promise 的成功和失败情况的回调函数。

> **备注：**如果忽略针对某个状态的回调函数参数，或者提供非函数 (nonfunction) 参数，那么 `then` 方法将会丢失关于该状态的回调函数信息，但是并不会产生错误。如果调用 `then` 的 `Promise` 的状态（fulfillment 或 rejection）发生改变，但是 `then` 中并没有关于这种状态的回调函数，那么 `then` 将创建一个没有经过回调函数处理的新 `Promise` 对象，**这个新 `Promise` 只是简单地接受调用这个 `then` 的原 `Promise` 的终态作为它的终态。**

## [语法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/then#语法)

```js
p.then(onFulfilled[, onRejected]);

p.then(value => {
  // fulfillment
}, reason => {
  // rejection
});
```

### [参数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/then#参数)

- `onFulfilled` 可选

  当 Promise 变成接受状态（fulfilled）时调用的[`函数`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function)。该函数有一个参数，即接受的最终结果（the fulfillment  value）。**如果该参数不是函数，则会在内部被替换为 `(x) => x`，即原样返回 promise 最终结果的函数**

- `onRejected` 可选

  当 Promise 变成拒绝状态（rejected）时调用的[`函数`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function)。该函数有一个参数，即拒绝的原因（`rejection reason`）。 **如果该参数不是函数，则会在内部被替换为一个 "Thrower" 函数** (it throws an error it received as argument)。

### [返回值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/then#返回值)

当一个 [`Promise`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 完成（fulfilled）或者失败（rejected）时，**返回函数将被异步调用**（由当前的线程循环来调度完成）。具体的返回值依据以下规则返回。如果 `then` 中的回调函数：

- 返回了一个值，那么 `then` 返回的 Promise 将会成为接受状态，并且将返回的值作为接受状态的回调函数的参数值。
- 没有返回任何值，那么 `then` 返回的 Promise 将会成为接受状态，并且该接受状态的回调函数的参数值为 `undefined`。
- 抛出一个错误，那么 `then` 返回的 Promise 将会成为拒绝状态，并且将抛出的错误作为拒绝状态的回调函数的参数值。
- 返回一个已经是接受状态的 Promise，那么 `then` 返回的 Promise 也会成为接受状态，并且将那个 Promise 的接受状态的回调函数的参数值作为该被返回的Promise的接受状态回调函数的参数值。
- 返回一个已经是拒绝状态的 Promise，那么 `then` 返回的 Promise 也会成为拒绝状态，并且将那个 Promise 的拒绝状态的回调函数的参数值作为该被返回的Promise的拒绝状态回调函数的参数值。
- 返回一个**未定状态**（`pending`）的 Promise，那么 `then` 返回 Promise 的状态也是未定的，并且它的终态与那个 Promise 的终态相同；同时，它变为终态时调用的回调函数参数与那个 Promise 变为终态时的回调函数的参数是相同的。

下面是一个演示` then` 方法的异步性的例子。

```js
const p1 = Promise.resolve(33);

let  then1 = p1.then(value => {
	console.log("this gets called after the end of the main stack. the value received and returned is: " + value);
	return value;
});

console.log(then1);

setTimeout(() => {
	console.log(then1);
});

// Promise { <pending> }
// this gets called after the end of the main stack. the value received and returned is: 33
// Promise { 33 }
```

## [描述](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/then#描述)

由于 `then` 和 [`Promise.prototype.catch()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch) 方法都会返回 promise，它们可以被[链式调用](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Using_promises#chaining)——这同时也是一种被称为**复合**（ *composition）* 的操作。

## [示例](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/then#示例)

### [使用 `then` 方法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/then#使用_then_方法)

```js
const p1 = new Promise((resolve, reject) => {
  resolve('成功！');
  // or
  // reject(new Error("出错了！"));
});

p1.then(value => {
  console.log(value); // 成功！
}, reason => {
  console.error(reason); // 
});
```

### [链式调用](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/then#链式调用)

`then` 方法返回一个 `Promise` 对象，其允许方法链。

你可以传递一个匿名函数给 `then`，并且，如果它返回一个 `Promise`，一个等价的 `Promise` 将暴露给后续的方法链。下面的代码片段使用 `setTimout` 函数来模拟异步代码操作。

```js
const p1 = new Promise((resolve, reject) => {
  resolve('成功！');
  // or
  // reject(new Error("出错了！"));
});

p1.then(value => {
  console.log(value); // 成功！
}, reason => {
  console.error(reason); // 
});

Promise.resolve("foo")
	// 1. 接收 "foo" 并与 "bar" 拼接，并将其结果做为下一个 resolve 返回。
	.then((value) => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				value += "bar";
				resolve(value);
			}, 1);
		});
	})
	// 2. 接收 "foobar", 放入一个异步函数中处理该字符串
	// 并将其打印到控制台中, 但是不将处理后的字符串返回到下一个。
	.then((value) => {
		setTimeout(() => {
			value += "baz";
			console.log(value);
		}, 1);
		return value;
	})
	// 3. 打印本节中代码将如何运行的帮助消息，
	// 字符串实际上是由上一个回调函数之前的那块异步代码处理的。
	.then((value) => {
		console.log("Last Then:  oops... didn't bother to instantiate and return a promise in the prior then so the sequence may be a bit surprising");
	// 注意 `string` 这时不会存在 'baz'。
	// 因为这是发生在我们通过setTimeout模拟的异步函数中。
	console.log(value);
});

// 成功！
// Last Then:  oops... didn't bother to instantiate and return a promise in the prior then so the sequence may be a bit surprising
// foobar
// foobarbaz
```

当一个值只是从一个 `then` 内部返回时，它将等价地返回 `Promise.resolve(<由被调用的处理程序返回的值>)`。

```js
const p1 = new Promise((resolve, reject) => {
	resolve(1);
});

p1.then(value => {
  console.log(value); // 
  return value + 1;
}).then((value) => {
	console.log(value + " A synchronous value works");
});

p1.then((value) => {
	console.log(value);
});

// 1
// 1
// 2 A synchronous value works
```

如果函数抛出错误或返回一个拒绝的Promise，则 `then` 将返回一个拒绝的Promise。

```js
Promise.resolve()
	.then(()=> {
		//使 .then() 返回一个 rejected promise
		throw new Error("Oj no!");
	})
	.then(() => {
		console.log("Not called!");
	}, (reason) => {
		console.error('onRejected function called: ' + reason.message);
		//onRejected function called: Oj no!
	});
```

在其他情况下，一个 resolving Promise 会被返回。在下面的例子里，第一个 `then()` 会返回一个用 resolving Promise 包装的 `42`，即使之前的 Promise 是 rejected 的。

```js
Promise.reject()
	.then(()=> 99, () => 42)
	.then((value) => {
		console.log("Resolved with " + value);  //Resolved with 42
	});
```

实际上，捕获 rejected promise 的需求经常大于使用 `then` 的两种情况语法，比如下面这样的：

```js
Promise.resolve()
  .then(() => {
    // 使 .then() 返回一个 rejected promise
    throw new Error('Oh no!');
  })
  .catch(error => {
    console.error('onRejected function called: ' + error.message);
  })
  .then(() => {
    console.log("I am always called even if the prior then's promise rejects");
  });

// onRejected function called: Oh no!
// I am always called even if the prior then's promise rejects
```

你也可以在另一个顶层函数上使用链式去实现基于 Promise API 的函数。

```js
function fetchCurrentData(){
	 // fetch() API 返回了一个 Promise.
	// 这个函数提供了类似的API，
	// 这个函数除了实现 Promise，它还能够完成更多的工作。
	return fetch("currentdata.json").then(response => {
		if (response.headers.get("content-type") !== "application/json") {
			throw new TypeError();
		}
		let data = response.json;
		return data;
	});
}
```

如果 `onFulfilled` 返回了一个 promise，**`then` 的返回值就会被 Promise resolved 或者 rejected。**

```js
function resolveLater(resolve, reject) {
	setTimeout(() => {
		resolve(10);
	}, 1000);
}

function rejecteLater(resolve, reject) {
	setTimeout(() => {
		reject(new Error("Error"));
	}, 1000);
}

let p1 = Promise.resolve("foo");

let p2 = p1.then(() => {
	// Return promise here, that will be resolved to 10 after 1 second
	return new Promise(resolveLater);
});

p2.then((value) => {
	console.log("resolved", value);  // resolved 10
}, (error) => {
	// not called
	console.error("rejected", reason);
});

let p3 = p1.then(() => {
	// Return promise here, that will be rejected with 'Error' after 1 second
	return new Promise(rejecteLater);
});

p3.then((value) => {
	// not called
	console.log("resolved", value);
}, error => {
	console.error("rejected", error);  //rejected Error: Error
});
```

### [基于 promise 的 ](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/then#基于_promise_的_domxrefwindow.setimmediate_polyfill)[`window.setImmediate`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/setImmediate) polyfill

Using a [`Function.prototype.bind()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) `Reflect.apply` ([`Reflect.apply()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/apply)) method to create a (non-cancellable) setImmediate-style function.

```js
const nextTick = (() => {
	const noop = () => {};  // literally
	const nextTickPromise = () => Promise.resolve().then(noop);

	const rfab = Reflect.apply.bind;  //(thisArg, fn, thisArg, [...args])
	const nextTick = (fn, ...args) =>{
		fn !== undefined ? Promise.resolve(args).then(rfab(null, fn, null)) : nextTickPromise()
	};

	nextTick.ntp = nextTickPromise;

	return nextTick;
})();
```

---

# Promise.catch()

**catch()** 方法返回一个[Promise (en-US)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)，并且处理拒绝的情况。它的行为与调用[`Promise.prototype.then(undefined, onRejected)`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) 相同。 (事实上, calling `obj.catch(onRejected)` 内部calls `obj.then(undefined, onRejected)`).

## [语法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch#syntax)

```js
p.catch(onRejected);

p.catch(function(reason) {
   // 拒绝
});
```

### [参数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch#参数)

- **onRejected**

  当Promise 被rejected时,被调用的一个[`Function`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function)。 该函数拥有一个参数：`reason`  rejection 的原因。如果 `onRejected` 抛出一个错误或返回一个本身失败的 Promise ，  通过 `catch()` 返回的Promise 被rejected；否则，它将显示为成功（resolved）。

### [返回值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch#返回值)

一个[`Promise`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## [描述](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch#description)

`catch `方法可以用于您的promise组合中的错误处理。

Internally calls `Promise.prototype.then` on the object upon which is called, passing the parameters `undefined` and the `onRejected` handler received; then returns the value of that call (which is a [`Promise`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)).

## [示例](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch#示例)

### [使用链式语句的 `catch`方法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch#使用链式语句的_catch方法)

```js
let p1 = new Promise((resolve, reject) => {
	resolve("Success");
});

p1.then((value) => {
	console.log(value);
	throw "Oh no!";
}).catch((e) => {
	console.log(e);
}).then(() => {
	console.log("after a catch the chain is restored");
}, () => {
	console.log("Not fired due to the catch");
});

// Success
// Oh no!
// after a catch the chain is restored

// 以下行为与上述相同
p1.then(function(value) {
  console.log(value); // "Success!"
  return Promise.reject('oh, no!');
}).catch(function(e) {
  console.log(e); // "oh, no!"
}).then(function(){
  console.log('after a catch the chain is restored');
}, function () {
  console.log('Not fired due to the catch');
});
```

### [捕获抛出的错误](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch#捕获抛出的错误)

```js
// 抛出一个错误，大多数时候将调用catch方法
let p1 = new Promise((resolve, reject) => {
	throw "Uh-oh";
});

p1.catch((e) => {
	console.log(e);  //
});

// 在异步函数中抛出的错误不会被catch捕获到
let p2 = new Promise((resolve, reject) => {
	setTimeout(() =>{
		throw "Uncaught Execption";
	}, 1000);
});

p2.catch((e) => {
	console.log(e);  // 不会执行
})

// 在resolve()后面抛出的错误会被忽略
let p3 = new Promise((resolve, reject) => {
	resolve();
	throw "Silenced Execption!";
});

p3.catch((e) => {
	console.log(e);  // 不会执行
});
```

### [如果已决议](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch#如果已决议)

```js
//创建一个新的 Promise ，且已决议
var p1 = Promise.resolve("calling next");

var p2 = p1.catch(function (reason) {
    //这个方法永远不会调用
    console.log("catch p1!");
    console.log(reason);
});

p2.then(function (value) {
    console.log("next promise's onFulfilled"); /* next promise's onFulfilled */
    console.log(value); /* calling next */
}, function (reason) {
    console.log("next promise's onRejected");
    console.log(reason);
});
```

---

# Promise.finally()

`**finally()**` 方法返回一个[`Promise`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)。在promise结束时，无论结果是fulfilled或者是rejected，都会执行指定的回调函数。这为在`Promise`是否成功完成后都需要执行的代码提供了一种方式。

这避免了同样的语句需要在[`then()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/then)和[`catch()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch)中各写一次的情况。

## [语法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally#语法)

```
p.finally(onFinally);

p.finally(function() {
   // 返回状态为(resolved 或 rejected)
});
```

### [参数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally#参数)

- `onFinally`

  `Promise` 结束后调用的[`Function`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function)。

### [返回值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally#返回值)

返回一个设置了 `finally` 回调函数的[`Promise`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)对象。 

## [描述](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally#描述)

如果你想在 promise 执行完毕后**无论其结果怎样都做一些处理或清理时，`finally()` 方法可能是有用的。**

`finally()` 虽然与 `.then(onFinally, onFinally)` 类似，它们不同的是：

- 调用内联函数时，不需要多次声明该函数或为该函数创建一个变量保存它。
- 由于无法知道`promise`的最终状态，所以`finally`的回调函数中不接收任何参数，它仅用于无论最终结果如何都要执行的情况。
- 与`Promise.resolve(2).then(() => {}, () => {})` （resolved的结果为`undefined`）不同，`Promise.resolve(2).finally(() => {})` resolved的结果为 `2`。
- 同样，`Promise.reject(3).then(() => {}, () => {})` (fulfilled的结果为`undefined`), `Promise.reject(3).finally(() => {})` rejected 的结果为 `3`。

> **备注：** 在`finally`回调中 `throw`（或返回被拒绝的promise）将以 `throw()` 指定的原因拒绝新的promise.

## [示例](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally#示例)

```js
let isLoading = true;

fetch(myRequest).then(function(response) {
    var contentType = response.headers.get("content-type");
    if(contentType && contentType.includes("application/json")) {
      return response.json();
    }
    throw new TypeError("Oops, we haven't got JSON!");
  })
  .then(function(json) { /* process your JSON further */ })
  .catch(function(error) { console.log(error); })
  .finally(function() { isLoading = false; });

```



---

# Promise.all()

Promise.all() 方法接收一个promise的iterable类型（注：Array，Map，Set都属于ES6的iterable类型）的输入，并且只返回一个[`Promise`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)实例， 那个输入的所有promise的resolve回调的结果是一个数组。这个[`Promise`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)的resolve回调执行是在所有输入的promise的resolve回调都结束，或者输入的iterable里没有promise了的时候。它的reject回调执行是，只要任何一个输入的promise的reject回调执行或者输入不合法的promise就会立即抛出错误，并且reject的是第一个抛出的错误信息。

## [语法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/all#语法)

```
Promise.all(iterable);
```

### [参数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/all#参数)

- iterable

  一个[可迭代](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterable_protocol)对象，如 [`Array`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array) 或 [`String`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String)。

### [返回值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/all#返回值)

- 如果传入的参数是一个空的可迭代对象，则返回一个**已完成（already resolved）**状态的 [`Promise`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)。
- 如果传入的参数不包含任何 `promise`，则返回一个**异步完成（asynchronously resolved）** [`Promise`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)。注意：Google Chrome 58 在这种情况下返回一个**已完成（already resolved）**状态的 [`Promise`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)。
- 其它情况下返回一个**处理中（pending）**的[`Promise`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)。这个返回的 `promise` 之后会在所有的 `promise` 都完成或有一个 `promise` 失败时**异步**地变为完成或失败。 见下方关于“Promise.all 的异步或同步”示例。返回值将会按照参数内的 `promise` 顺序排列，而不是由调用 `promise` 的完成顺序决定。

## [说明](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/all#说明)

此方法在集合多个 `promise` 的返回结果时很有用。

完成（Fulfillment）：
如果传入的可迭代对象为空，`Promise.all` 会**同步**地返回一个已完成（resolved）状态的`promise`。
如果所有传入的 `promise` 都变为完成状态，或者传入的可迭代对象内没有 `promise`，`Promise.all` 返回的 `promise` **异步**地变为完成。
在任何情况下，`Promise.all` 返回的 `promise` 的**完成状态的结果都是一个数组**，它包含所有的传入迭代参数对象的值（也包括非 `promise` 值）。

失败/拒绝（Rejection）：
如果传入的 `promise` 中有一个失败（rejected），`Promise.all` 异步地将失败的那个结果给失败状态的回调函数，而不管其它 `promise` 是否完成。

## [示例](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/all#示例)

### [`Promise.all` 的使用](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/all#promise.all_的使用)

`Promise.all` 等待所有都完成（或第一个失败）。

```js
var p1 = Promise.resolve(3);
var p2 = 1337;
var p3 = new Promise((resolve, reject) => {
	setTimeout(resolve, 100, "foo");
});

Promise.all([p1, p2, p3]).then(values => {
	console.log(values);  // [ 3, 1337, 'foo' ]
});
```

如果参数中包含非 `promise` 值，这些值将被忽略，但仍然会被放在返回数组中（如果 `promise` 完成的话）：

```js
var p1 = Promise.all([1, 2, 3]);

var p2 = Promise.all([1, 2, 3, Promise.resolve(444)]);

var p3 = Promise.all([1, 2, 3, Promise.reject(555)]);

setTimeout(function(){
	console.log(p1);  //Promise { [ 1, 2, 3 ] }
	console.log(p2);  //Promise { [ 1, 2, 3, 444 ] }
	console.log(p3);  //[UnhandledPromiseRejection
},0);
```

### [`Promise.all` 的异步和同步](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/all#promise.all_的异步和同步)

下面的例子中演示了 `Promise.all` 的异步性（如果传入的可迭代对象是空的，就是同步）：

```js
// we are passing as argument an array of promises that are already resolved,
// to trigger Promise.all as soon as possible
var resolvedPromisesArray = [Promise.resolve(33), Promise.resolve(44)];

var p = Promise.all(resolvedPromisesArray);
// immediately logging the value of p
console.log(p);

// using setTimeout we can execute code after the stack is empty
setTimeout(function(){
    console.log('the stack is now empty');
    console.log(p);
});

// logs, in order:
// Promise { <state>: "pending" }
// the stack is now empty
// Promise { <state>: "fulfilled", <value>: Array[2] }
```

如果 `Promise.all` 失败，也是一样的：

```js
var mixedPromisesArray = [Promise.resolve(33), Promise.reject(44)];
var p = Promise.all(mixedPromisesArray);
console.log(p);
setTimeout(function(){
    console.log('the stack is now empty');
    console.log(p);
});

// logs
// Promise { <state>: "pending" }
// the stack is now empty
// Promise { <state>: "rejected", <reason>: 44 }
```

但是，`Promise.all` **当且仅当**传入的可迭代对象为空时为同步：

```js
var p = Promise.all([]); // will be immediately resolved
var p2 = Promise.all([1337, "hi"]); // non-promise values will be ignored, but the evaluation will be done asynchronously
console.log(p);
console.log(p2)
setTimeout(function(){
    console.log('the stack is now empty');
    console.log(p2);
});

// logs
// Promise { [] }

// Promise { <pending> }
// the stack is now empty
// Promise { [ 1337, 'hi' ] }
```

### [`Promise.all` 的快速返回失败行为](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/all#promise.all_的快速返回失败行为)

`Promise.all` 在任意一个传入的 `promise` 失败时返回失败。例如，如果你传入的 `promise`中，有四个 `promise` 在一定的时间之后调用成功函数，**有一个立即调用失败函数，那么 `Promise.all` 将立即变为失败。**

```js
var p1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 'one');
});
var p2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, 'two');
});
var p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'three');
});
var p4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 4000, 'four');
});
var p5 = new Promise((resolve, reject) => {
  reject('reject');
});

Promise.all([p1, p2, p3, p4, p5]).then(values => {
  console.log(values);
}, reason => {
  console.log(reason)
});

//From console:
//"reject"

//You can also use .catch
Promise.all([p1, p2, p3, p4, p5]).then(values => {
  console.log(values);
}).catch(reason => {
  console.log(reason)
});

//From console:
//"reject"
```

---

# Promise.allSettled()

该`Promise.allSettled()`方法返回一个在所有给定的promise都已经`fulfilled`或`rejected`后的promise，**并带有一个对象数组，每个对象表示对应的promise结果。**

当您有多个**彼此不依赖**的异步任务成功完成时，或者您总是想知道每个`promise`的结果时，通常使用它。

相比之下，`Promise.all()` 更适合彼此相互依赖或者在其中任何一个`reject`时立即结束。

## [句法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled#句法)

```
Promise.allSettled(iterable);
```

### [参数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled#参数)

- `iterable`

  一个[可迭代的](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols)对象，例如[`Array`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)，其中每个成员都是`Promise`。

### [返回值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled#返回值)

一旦所指定的 promises 集合中每一个 promise 已经完成，无论是成功的达成或被拒绝，**未决议的** [`Promise`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)将被**异步**完成。那时，所返回的 promise 的处理器将传入一个数组作为输入，该数组包含原始 promises 集中每个 promise 的结果。

对于每个结果对象，都有一个 `status` 字符串。如果它的值为 `fulfilled`，则结果对象上存在一个 `value` 。如果值为 `rejected`，则存在一个 `reason` 。value（或 reason ）反映了每个 promise 决议（或拒绝）的值。

```js
let p1 = Promise.resolve(3);
let p2 = new Promise((resolve, reject) => {
	setTimeout(reject, 100, "foo");
});
let promises = [p1, p2];

Promise.allSettled(promises).then((results) => {
	results.forEach((result) => console.log(result));
});

// { status: 'fulfilled', value: 3 }
// { status: 'rejected', reason: 'foo' }
```

---

# Promise.any()

`Promise.any()` 接收一个[`Promise`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)可迭代对象，只要其中的一个 `promise` 成功，就返回那个已经成功的 `promise` 。如果可迭代对象中没有一个 `promise` 成功（即所有的 `promises` 都失败/拒绝），就返回一个失败的 `promise `和[`AggregateError`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/AggregateError)类型的实例，它是 [`Error`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error) 的一个子类，用于把单一的错误集合在一起。本质上，这个方法和[`Promise.all()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)是相反的。

> **警告：**`Promise.any()` 方法依然是实验性的，尚未被所有的浏览器完全支持。它当前处于 [TC39 第四阶段草案（Stage 4）](https://github.com/tc39/proposal-promise-any)

## [语法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/any#语法)

```
Promise.any(iterable);
```

### [参数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/any#参数)

- `iterable`

  一个[可迭代](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterable_protocol)的对象, 例如 [Array](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)。

### [返回值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/any#返回值)

- 如果传入的参数是一个空的可迭代对象，则返回一个 **已失败（already rejected）** 状态的 [Promise](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)。
- 如果传入的参数不包含任何 `promise`，则返回一个 **异步完成** （**asynchronously resolved**）的 [Promise](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)。
- 其他情况下都会返回一个**处理中（pending）** 的 [Promise](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)。 只要传入的迭代对象中的任何一个 `promise` 变成成功（resolve）状态，或者其中的所有的 `promises` 都失败，那么返回的 `promise` 就会 **异步地**（当调用栈为空时） 变成成功/失败（resolved/reject）状态。

## [说明](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/any#说明)

这个方法用于返回第一个成功的 `promise` 。只要有一个 `promise` 成功此方法就会终止，它不会等待其他的 `promise` 全部完成。

不像 [Promise.all()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/all) 会返回一组完成值那样（resolved values），**我们只能得到一个成功值**（假设至少有一个 `promise` 完成）。当**我们只需要一个 `promise` 成功，而不关心是哪一个成功时此方法很有用的。**

同时, 也不像 [Promise.race()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/race) 总是返回第一个结果值（resolved/reject）那样，**这个方法返回的是第一个 *成功的* 值**。这个方法将会忽略掉所有被拒绝的 `promise`，直到第一个 `promise` 成功。

### [成功（Fulfillment）：](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/any#成功（fulfillment）：)

当任何一个被传入的 `promise` 成功的时候, 无论其他的 `promises` 成功还是失败，此函数会将那个成功的 `promise` 作为返回值 。

- 如果传入的参数是一个空的可迭代对象, 这个方法将会同步返回一个已经完成的 `promise`。
- 如果传入的任何一个 `promise` 已成功, 或者传入的参数不包括任何 `promise`, **那么 `Promise.any` 返回一个异步成功的 `promise`**。

### [失败/拒绝（Rejection）：](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/any#失败拒绝（rejection）：)

如果所有传入的 `promises` 都失败, `Promise.any` **将返回异步失败**，和一个 [AggregateError](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AggregateError) 对象，它继承自 [Error](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error)，有一个 `error` 属性，**属性值是由所有失败值填充的数组。**

## [示例](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/any#示例)

### [First to fulfil](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/any#first_to_fulfil)

即使第一个返回的 promise 是失败的，`Promise.any()` 依然使用第一个成功状态的 promise 来返回。这与使用首个（无论 rejected 还是 fullfiled）promise 来返回的 [`Promise.race()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/race) 相反。

```js
const pErr = new Promise((resolve, reject) => {
	reject("总是失败");
});

const pSlow = new Promise((resolve, reject) => {
	setTimeout(resolve, 500, "最终完成");
});

const pFast = new Promise((resolve, reject) => {
	setTimeout(resolve, 100, "很快完成");
});

Promise.any([pErr, pSlow, pFast]).then((value) => {
	console.log(value);  //很快完成
});
```

### [Rejections with AggregateError](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/any#rejections_with_aggregateerror)

如果没有 fulfilled (成功的) promise，`Promise.any()` 返回 [`AggregateError`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/AggregateError) 错误。

```js
const pErr = new Promise((resolve, reject) => {
	reject("总是失败");
});

const pSlow = new Promise((resolve, reject) => {
	setTimeout(reject, 500, "最终失败");
});

const pFast = new Promise((resolve, reject) => {
	setTimeout(reject, 100, "很快失败");
});

Promise.any([pErr, pSlow, pFast])
	.then((value) => {
		console.log(value);  //
	}).catch((err) => {
		console.log(err);  //[AggregateError: All promises were rejected]
});
```

### [显示第一张已加载的图片](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/any#显示第一张已加载的图片)

在这个例子，我们有一个获取图片并返回 blob 的函数，我们使用 `Promise.any()` 来获取一些图片并显示第一张有效的图片（即最先 resolved 的那个 promise）。

```js
function fetchAndDecode(url) {
	return fetch(url).then(response => {
		if (!response.ok){
			throw new Error(`HTTP error! status: ${response.status}`);
		} else {
			return response.blob();
		}
	});
}

let coffee = fetchAndDecode("coffee.jpg");
let tea = fetchAndDecode("tea.jpg");

Promise.any([coffee, tea]).then(value => {
	let objectURL = URL.createObjectURL(value);
	let image = document.createElement("img");
	image.src = objectURL;
	document.body.appendChild(image);
}).catch((error) => {
	console.log(error.message);
});
```

---

# Promise.race()

**`Promise.race(iterable)`** 方法返回一个 promise，一旦迭代器中的某个promise解决或拒绝，返回的 promise就会解决或拒绝。

```js
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'one');
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'two');
});

Promise.race([promise1, promise2]).then((value) => {
  console.log(value);
  // Both resolve, but promise2 is faster
});
// expected output: "two"

```

## [语法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/race#syntax)

```
Promise.race(iterable);
```

### [**参数**](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/race#参数)

- iterable

  可迭代对象，类似[`Array`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)。详见 [iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)。

### [返回值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/race#返回值)

一个**待定的** [`Promise`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 只要给定的迭代中的一个promise解决或拒绝，就采用第一个promise的值作为它的值，从而**异步**地解析或拒绝（一旦堆栈为空）。

## [描述](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/race#description)

`race` 函数返回一个 `Promise`，它将与第一个传递的 promise 相同的完成方式被完成。它可以是完成（ resolves），也可以是失败（rejects）**，这要取决于第一个完成的方式是两个中的哪个。**

**如果传的迭代是空的，则返回的 promise 将永远等待。**

如果迭代包含一个或多个非承诺值和/或已解决/拒绝的承诺，则` Promise.race` 将解析为迭代中找到的第一个值。

## [示例](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/race#示例)

### [Promise.race的异步性](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/race#promise.race的异步性)

```js
let resolvedPromisesArray = [Promise.resolve(33), Promise.resolve(44)];

let p = Promise.race(resolvedPromisesArray);

console.log(p);

setTimeout(function(){
	console.log("the stack is now empty");
	console.log(p);
});

// Promise { <pending> }
// the stack is now empty
// Promise { 33 }
```

### [使用 Promise.race –  setTimeout 的示例](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/race#使用_promise.race_–_settimeout_的示例)

```js
let p1 = new Promise((resolve, reject) => {
	setTimeout(resolve, 500, "one");
});

let p2 = new Promise((resolve, reject) => {
	setTimeout(resolve, 100, "two");
});

Promise.race([p1, p2]).then((value) => {
	console.log(value);  // two
	// 两个都完成，但 p2 更快
});

let p3 = new Promise((resolve, reject) => {
	setTimeout(resolve, 100, "three");
});

let p4 = new Promise((resolve, reject) =>{
	setTimeout(reject, 500, "four");
});

Promise.race([p3, p4]).then((value) => {
	console.log(value); // three 
	// p3 更快，所以它完成了
}, (reason) => {
	console.log(reason);  //未被调用
});

let p5 = new Promise((resolve, reject) => {
	setTimeout(resolve, 500, "five");
});

let p6 = new Promise((resolve, reject) =>{
	setTimeout(reject, 100, "six");
});

Promise.race([p5, p6]).then((value) => {
	console.log(value); // 未被调用
}, (reason) => {
	console.log(reason);  //six
	// p6 更快，所以它失败了
});
```



# 自定义(手写)Promise



```

```

