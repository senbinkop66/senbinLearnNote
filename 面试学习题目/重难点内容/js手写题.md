#### 1 compose

题目描述:实现一个 compose 函数

```javascript
// 用法如下:
function fn1(x) {
  return x + 1;
}
function fn2(x) {
  return x + 2;
}
function fn3(x) {
  return x + 3;
}
function fn4(x) {
  return x + 4;
}
const a = compose(fn1, fn2, fn3, fn4);
console.log(a(1)); // 1+4+3+2+1=11
```

实现代码如下:

```javascript
function compose(...fn) {
    if (!fn.length) {
        return (v) => v;
    }
    if (fn.length === 1) {
        return fn[0];
    }
    return fn.reduce((pre, cur) => (...args) => pre(cur(...args)));
}
```



-----

#### 2 settimeout 模拟实现 setinterval(带清除定时器的版本)

题目描述:setinterval 用来实现循环定时调用 可能会存在一定的问题 能用 settimeout 解决吗

实现代码如下:

```javascript
function mySetInterval(fn, delay) {
    let timer = null;
    function interval() {
        fn();
        timer = setTimeout(interval, delay);
    }
    interval();
    return {
        cancel: () => {
            clearTimeout(timer);
        }
    }
}

function fn1() {
    console.log("1")
}
let test1 = mySetInterval(fn1, 1000);

setTimeout(test1.cancel, 5000);
```



我们在项目开发过程中可能有不止一个计时器，我们希望对所有的计时器统一进行处理，这时我们可以封装一个类来管理这些计时器，它包含以下几个内容

- `timerList`--存放计时器的数组
- `addTimer`--往 `timerList`添加计时器的方法，参数是一个对象，包含名称，回调方法跟时间
- `runTimer`--执行某个计时器的方法，参数是计时器的名称
- `clearTimer`--清除某个计时器的方法，参数是计时器的名称

```js

class timer {
  timerList = [];

  addTimer(name, callback, time = 1000) {
    this.timerList.push({
      name,
      callback,
      time
    });
    this.runTimer(name);
  }

  runTimer(name) {
    const _this = this;
    (function inner() {
      const task = _this.timerList.find((item) => {
        return item.name === name;
      });
      if (!task) return;
      task.t = setTimeout(() => {
        task.callback();
        clearTimeout(task.t);
        inner();
      }, task.time);
    })();
  }

  clearTimer(name) {
    const taskIndex = this.timerList.findIndex((item) => {
      return item.name === name;
    });
    if (taskIndex !== -1) {
      // 由于删除该计时器时可能存在该计时器已经入栈，所以要先清除掉，防止添加的时候重复计时
      clearTimeout(this.timerList[taskIndex].t);
      this.timerList.splice(taskIndex, 1);
    }
  }
}

export default new timer();

```



扩展：我们能反过来使用 setinterval 模拟实现 settimeout 吗？

```javascript
function mySetTimeout(fn, delay) {
    const timer = setInterval(() => {
        clearInterval(timer);
        fn();
    }, delay);
}

mySetTimeout(() => {
    console.log("2");
}, 2000);

```

> 扩展思考：为什么要用 settimeout 模拟实现 setinterval？setinterval 的缺陷是什么？



----

#### 3 发布订阅模式

题目描述:实现一个发布订阅模式拥有 on emit once off 方法

实现代码如下:

```javascript
class EventEmitter {
  constructor() {
    this.events = {};
  }
  // 实现订阅
  on(type, callBack) {
    if (!this.events[type]) {
      this.events[type] = [callBack];
    } else {
      this.events[type].push(callBack);
    }
  }
  // 删除订阅
  off(type, callBack) {
    if (!this.events[type]) return;
    this.events[type] = this.events[type].filter((item) => {
      return item !== callBack;
    });
  }
  // 只执行一次订阅事件
  once(type, callBack) {
    function fn() {
      callBack();
      this.off(type, fn);
    }
    this.on(type, fn);
  }
  // 触发事件
  emit(type, ...rest) {
    this.events[type] &&
      this.events[type].forEach((fn) => fn.apply(this, rest));
  }
}
// 使用如下
// const event = new EventEmitter();

// const handle = (...rest) => {
//   console.log(rest);
// };

// event.on("click", handle);

// event.emit("click", 1, 2, 3, 4);

// event.off("click", handle);

// event.emit("click", 1, 2);

// event.once("dbClick", () => {
//   console.log(123456);
// });
// event.emit("dbClick");
// event.emit("dbClick");

```



----

#### 4 数组去重

实现代码如下:

```javascript
function uniqueArr(arr) {
  return [...new Set(arr)];
}

```



----

#### 5 数组扁平化

题目描述:实现一个方法使多维数组变成一维数组

最常见的递归版本如下：

```javascript
function flattenArr(arr) {
    if (!Array.isArray(arr)) return;
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result = result.concat(flattenArr(arr[i]));
        } else {
            result.push(arr[i]);
        }
    }
    return result;
}

let arr = [1, [2, [3, 4, [5, 6]]]];
console.log(flattenArr(arr));  // [ 1, 2, 3, 4, 5, 6
```

> 扩展思考：能用迭代的思路去实现吗?

实现代码如下:

```javascript
function flatter(arr) {
  if (!arr.length) return;
  while (arr.some((item) => Array.isArray(item))) {
    arr = [].concat(...arr);
  }
  return arr;
}
// console.log(flatter([1, 2, [1, [2, 3, [4, 5, [6]]]]]));
```



----

#### 6 寄生组合继承

题目描述:实现一个你认为不错的 js 继承方式

实现代码如下:

```javascript
function Parent(name) {
  this.name = name;
  this.say = () => {
    console.log(111);
  };
}

Parent.prototype.play = () => {
  console.log(222);
};

function Children(name) {
  Parent.call(this);
  this.name = name;
}

Children.prototype = Object.create(Parent.prototype);
Children.prototype.constructor = Children;

// let child = new Children("111");
// // console.log(child.name);
// // child.say();
// // child.play();

```



----

#### 7 实现有并行限制的 Promise 调度器

题目描述:JS 实现一个带并发限制的异步调度器 Scheduler，保证同时运行的任务最多有两个

```javascript
 addTask(1000,"1");
 addTask(500,"2");
 addTask(300,"3");
 addTask(400,"4");
 的输出顺序是：2 3 1 4

 整个的完整执行流程：

一开始1、2两个任务开始执行
500ms时，2任务执行完毕，输出2，任务3开始执行
800ms时，3任务执行完毕，输出3，任务4开始执行
1000ms时，1任务执行完毕，输出1，此时只剩下4任务在执行
1200ms时，4任务执行完毕，输出4


```

实现代码如下:

```javascript
class Scheduler {
    constructor(limit) {
        this.queue = [];
        this.maxCount = limit;
        this.runCount = 0;
    }

    add(time, order) {
        const promiseCreator = () => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log(order);
                    resolve();
                }, time);
            });
        };
        this.queue.push(promiseCreator);
    }

    taskStart() {
        for (let i = 0; i < this.maxCount; i++) {
            this.request();
        }
    }

    request() {
        if (!this.queue || !this.queue.length || this.runCount >= this.maxCount) {
            return;
        }
        this.runCount++;
        this.queue.shift()().then(() => {
            this.runCount--;
            this.request();
        });
    }
}

const scheduler = new Scheduler(2);
const addTask = (time, order) => {
    scheduler.add(time, order);
}

addTask(1000, "1");
addTask(500, "2");
addTask(300, "3");
addTask(400, "4");
scheduler.taskStart();

/*
2
3
1
4
*/
```



----

#### 8 new 操作符

题目描述:手写 new 操作符实现

我们用new实例化一个构造函数，生成一个实例对象，而new到底做了什么呢，主要分为以下五步：

- 1: 获取构造函数
- 2：创建一个新对象；
- 3：将函数的作用域赋给新对象（这里实际上就是生产了一个新的上下文）
- 4：执行函数中的代码（为新对象添加属性、方法）
- 5：返回值，无返回值或者返回一个非对象值时，则将创建的新对象返回，否则会将返回值作为新对象返回。（也就是说一定会返回一个对象回来，这一步可以从下面的代码得结论）

```js
function MyNew() {
  let Constructor = Array.prototype.shift.call(arguments); // 1：取出构造函数

  let obj = {} // 2：执行会创建一个新对象

  obj.__proto__ = Constructor.prototype // 3：该对象的原型等于构造函数prototype

  var result = Constructor.apply(obj, arguments) // 4： 执行函数中的代码

  return typeof result === 'object' ? result : obj // 5： 返回的值必须为对象
}

function Man(name, age) {
  this.name = name
  this.age = age
}
var tom = new Man('tom', 20)
var mike = MyNew(Man, 'mike', 30)
console.log(tom  instanceof Man, mike instanceof Man) // true true
```

实现代码如下:

```javascript
function myNew(fn, ...args) {
  let obj = Object.create(fn.prototype);
  let res = fn.call(obj, ...args);
  if (res && (typeof res === "object" || typeof res === "function")) {
    return res;
  }
  return obj;
}


function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.say = function() {
  console.log(this.age);
};
let p1 = myNew(Person, "lihua", 18);
console.log(p1.name);
console.log(p1);
p1.say();

```



----

#### 9 call apply bind

题目描述:手写 call apply bind 实现



call方法的实现主要有以下三步，比如 `fn.call(obj, a, b) `：

- 1： 把调用函数fn的上下文指向obj
- 2： 形参a,b等是以逗号分隔传进去
- 3: 执行函数fn，并返回结果

```javascript
Function.prototype.myCall = function (context) {
  context = context ? Object(context) : window 
  context.fn = this // 重置上下文
  let args = [...arguments].slice(1) // 截取参数a,b
  let r = context.fn(...args) // 执行函数
  delete context.fn // 删除属性，避免污染
  return r // 返回结果
}

// 浏览器环境下
var a = 1, b = 2;
var obj ={a: 10,  b: 20}
function test(key1, key2){
  console.log(this[key1] + this[key2]) 
}
test('a', 'b') // 3
test.myCall(obj, 'a', 'b') // 30

```





apply方法和call方法大同小异，唯一差别就是，apply传入的参数是数组格式。



```js
// apply 原理
Function.prototype.myApply = function (context) {
  context = context ? Object(context) : window
  context.fn = this
  let args = [...arguments][1]
  if (!args) {
    return context.fn()
  }
  let r = context.fn(...args)
  delete context.fn;
  return r
}
   // 浏览器环境下
var a = 1, b = 2;
var obj ={a: 10,  b: 20}
function test(key1, key2){
  console.log(this[key1] + this[key2]) 
}
test('a', 'b') // 3
test.myCall(obj, ['a', 'b']) // 30  注意这里是传入数组 ['a', 'b']
```



bind方法和call、apply方法的差别是，他们都改变了上下文，但是bind没有立即执行函数。

```js
// bind 原理
Function.prototype.Mybind = function (context) {
  let _me = this
  return function () {
    return _me.apply(context)
  }
}

```

分析bind都能干些什么，有什么特点 1、函数调用，改变this 2、返回一个绑定this的函数 3、接收多个参数 4、支持柯里化形式传参 fn(1)(2)

```js
Function.prototype.bind = function(context) {
    //返回一个绑定this的函数，我们需要在此保存this
    let self = this
        // 可以支持柯里化传参，保存参数
    let arg = [...arguments].slice(1)
        // 返回一个函数
    return function() {
        //同样因为支持柯里化形式传参我们需要再次获取存储参数
        let newArg = [...arguments]
        console.log(newArg)
            // 返回函数绑定this，传入两次保存的参数
            //考虑返回函数有返回值做了return
        return self.apply(context, arg.concat(newArg))
    }
}

var a = 1, b = 2;
var obj ={a: 10,  b: 20}
function test(key1, key2){
	console.log(this[key1] + this[key2]) 
}
var fn = test.bind(obj)
fn('a', 'b') // 30
```





----

#### 10 深拷贝（考虑到复制 Symbol 类型）

题目描述:手写 new 操作符实现

实现代码如下:

```javascript
function isObject(val) {
  return typeof val === "object" && val !== null;
}

function deepClone(obj, hash = new WeakMap()) {
  if (!isObject(obj)) return obj;
    
  if (hash.has(obj)) {
    return hash.get(obj);
  }
    
  let target = Array.isArray(obj) ? [] : {};
    
  hash.set(obj, target);
    
  Reflect.ownKeys(obj).forEach((item) => {
    if (isObject(obj[item])) {
      target[item] = deepClone(obj[item], hash);
    } else {
      target[item] = obj[item];
    }
  });

  return target;
}

// var obj1 = {
// a:1,
// b:{a:2}
// };
// var obj2 = deepClone(obj1);
// console.log(obj1);

```



----

#### 11 instanceof

题目描述:手写 instanceof 操作符实现

实现代码如下:

```javascript
function myInstanceof(left, right) {
  while (true) {
    if (left === null) {
      return false;
    }
    if (left.__proto__ === right.prototype) {
      return true;
    }
    left = left.__proto__;
  }
}

```



-----

#### 12 柯里化

题目描述:柯里化（Currying），又称部分求值（Partial Evaluation），是把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参数而且返回结果的新函数的技术。核心思想是把多参数传入的函数拆成单参数（或部分）函数，内部再返回调用下一个单参数（或部分）函数，依次处理剩余的参数。

实现代码如下:

```javascript
function currying(fn, ...args) {
  const length = fn.length;
  let allArgs = [...args];
  const res = (...newArgs) => {
    allArgs = [...allArgs, ...newArgs];
    if (allArgs.length === length) {
      return fn(...allArgs);
    } else {
      return res;
    }
  };
  return res;
}


const add = (a, b, c) => a + b + c;
const a = currying(add, 1);
console.log(a(2,3))
```



----

#### 13 冒泡排序--时间复杂度 n^2

题目描述:实现一个冒泡排序

实现代码如下:

```javascript
function bubbleSort(arr) {
  // 缓存数组长度
  const len = arr.length;
  // 外层循环用于控制从头到尾的比较+交换到底有多少轮
  for (let i = 0; i < len; i++) {
    // 内层循环用于完成每一轮遍历过程中的重复比较+交换
    for (let j = 0; j < len - 1; j++) {
      // 若相邻元素前面的数比后面的大
      if (arr[j] > arr[j + 1]) {
        // 交换两者
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  // 返回数组
  return arr;
}
// console.log(bubbleSort([3, 6, 2, 4, 1]));

```



----

#### 14 选择排序--时间复杂度 n^2

题目描述:实现一个选择排序

实现代码如下:

```javascript
function selectSort(arr) {
  // 缓存数组长度
  const len = arr.length;
  // 定义 minIndex，缓存当前区间最小值的索引，注意是索引
  let minIndex;
    
  // i 是当前排序区间的起点
  for (let i = 0; i < len - 1; i++) {
    // 初始化 minIndex 为当前区间第一个元素
    minIndex = i;
    // i、j分别定义当前区间的上下界，i是左边界，j是右边界
    for (let j = i; j < len; j++) {
      // 若 j 处的数据项比当前最小值还要小，则更新最小值索引为 j
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    // 如果 minIndex 对应元素不是目前的头部元素，则交换两者
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
}
// console.log(quickSort([3, 6, 2, 4, 1]));

```



----

#### 15 插入排序--时间复杂度 n^2

题目描述:实现一个插入排序

实现代码如下:

```javascript
function insertSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i;
    let target = arr[j];
    while (j > 0 && arr[j - 1] > target) {
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = target;
  }
  return arr;
}
// console.log(insertSort([3, 6, 2, 4, 1]));

```



----

#### 16 快排--时间复杂度 nlogn~ n^2 之间

题目描述:实现一个快排

实现代码如下:

```javascript
function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const cur = arr[arr.length - 1];
  const left = arr.filter((v, i) => v <= cur && i !== arr.length - 1);
  const right = arr.filter((v) => v > cur);
  return [...quickSort(left), cur, ...quickSort(right)];
}
// console.log(quickSort([3, 6, 2, 4, 1]));

```



-----

#### 17 归并排序--时间复杂度 nlog(n)

题目描述:实现一个时间复杂度为 nlog(n)的排序算法

实现代码如下:

```javascript
function merge(left, right) {
  let res = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      res.push(left[i]);
      i++;
    } else {
      res.push(right[j]);
      j++;
    }
  }
  if (i < left.length) {
    res.push(...left.slice(i));
  } else {
    res.push(...right.slice(j));
  }
  return res;
}

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);

  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}
// console.log(mergeSort([3, 6, 2, 4, 1]));

```



----

#### 18 二分查找--时间复杂度 log2(n)

题目描述:如何确定一个数在一个有序数组中的位置

实现代码如下:

```javascript
function search(arr, target, start, end) {
  let targetIndex = -1;

  let mid = Math.floor((start + end) / 2);

  if (arr[mid] === target) {
    targetIndex = mid;
    return targetIndex;
  }

  if (start >= end) {
    return targetIndex;
  }

  if (arr[mid] < target) {
    return search(arr, target, mid + 1, end);
  } else {
    return search(arr, target, start, mid - 1);
  }
}
// const dataArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const position = search(dataArr, 6, 0, dataArr.length - 1);
// if (position !== -1) {
//   console.log(`目标元素在数组中的位置:${position}`);
// } else {
//   console.log("目标元素不在数组中");
// }
复制代码
```



----

#### 19 实现 LazyMan

题目描述:

```css
实现一个LazyMan，可以按照以下方式调用:
LazyMan(“Hank”)输出:
Hi! This is Hank!

LazyMan(“Hank”).sleep(10).eat(“dinner”)输出
Hi! This is Hank!
//等待10秒..
Wake up after 10
Eat dinner~

LazyMan(“Hank”).eat(“dinner”).eat(“supper”)输出
Hi This is Hank!
Eat dinner~
Eat supper~

LazyMan(“Hank”).eat(“supper”).sleepFirst(5)输出
//等待5秒
Wake up after 5
Hi This is Hank!
Eat supper
复制代码
```

实现代码如下:

```javascript
class _LazyMan {
  constructor(name) {
    this.tasks = [];
    const task = () => {
      console.log(`Hi! This is ${name}`);
      this.next();
    };
    this.tasks.push(task);
    setTimeout(() => {
      // 把 this.next() 放到调用栈清空之后执行
      this.next();
    }, 0);
  }
  next() {
    const task = this.tasks.shift(); // 取第一个任务执行
    task && task();
  }
  sleep(time) {
    this._sleepWrapper(time, false);
    return this; // 链式调用
  }
  sleepFirst(time) {
    this._sleepWrapper(time, true);
    return this;
  }
  _sleepWrapper(time, first) {
    const task = () => {
      setTimeout(() => {
        console.log(`Wake up after ${time}`);
        this.next();
      }, time * 1000);
    };
    if (first) {
      this.tasks.unshift(task); // 放到任务队列顶部
    } else {
      this.tasks.push(task); // 放到任务队列尾部
    }
  }
  eat(name) {
    const task = () => {
      console.log(`Eat ${name}`);
      this.next();
    };
    this.tasks.push(task);
    return this;
  }
}
function LazyMan(name) {
  return new _LazyMan(name);
}
复制代码
```



----

#### 20 防抖节流

题目描述:手写防抖节流

实现代码如下:

```javascript
// 防抖
function debounce(fn, delay = 300) {
  //默认300毫秒
  let timer;
  return function () {
    const args = arguments;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, args); // 改变this指向为调用debounce所指的对象
    }, delay);
  };
}

window.addEventListener(
  "scroll",
  debounce(() => {
    console.log(111);
  }, 1000)
);

// 节流
// 设置一个标志
function throttle(fn, delay) {
  let flag = true;
  return () => {
    if (!flag) return;
    flag = false;
    timer = setTimeout(() => {
      fn();
      flag = true;
    }, delay);
  };
}

window.addEventListener(
  "scroll",
  throttle(() => {
    console.log(111);
  }, 1000)
);

```



----

#### 21 写版本号排序的方法

题目描述:有一组版本号如下['0.1.1', '2.3.3', '0.302.1', '4.2', '4.3.5', '4.3.4.5']。现在需要对其进行排序，排序的结果为 ['4.3.5','4.3.4.5','2.3.3','0.302.1','0.1.1']

实现代码如下:

```javascript
function compare(a, b) {
    let i = 0;
    const arr1 = a.split(".");
    const arr2 = b.split(".");

    while (true) {
    const s1 = arr1[i];
    const s2 = arr2[i];
    i++;
    if (s1 === undefined || s2 === undefined) {
      return arr2.length - arr1.length;
    }

    if (s1 === s2) continue;

    return s2 - s1;
    }
}

let arr = ['0.1.1', '2.3.3', '0.302.1', '4.2', '4.3.5', '4.3.4.5'];
arr.sort(compare);
console.log(arr);
// [ '4.3.5', '4.3.4.5', '4.2', '2.3.3', '0.302.1', '0.1.1' ]
```



----

#### 22 LRU 算法



实现代码如下:

```javascript
//  一个Map对象在迭代时会根据对象中元素的插入顺序来进行
// 新添加的元素会被插入到map的末尾，整个栈倒序查看
class LRUCache {
  constructor(capacity) {
    this.secretKey = new Map();
    this.capacity = capacity;
  }
  get(key) {
    if (this.secretKey.has(key)) {
      let tempValue = this.secretKey.get(key);
      this.secretKey.delete(key);
      this.secretKey.set(key, tempValue);
      return tempValue;
    } else return -1;
  }
  put(key, value) {
    // key存在，仅修改值
    if (this.secretKey.has(key)) {
      this.secretKey.delete(key);
      this.secretKey.set(key, value);
    }
    // key不存在，cache未满
    else if (this.secretKey.size < this.capacity) {
      this.secretKey.set(key, value);
    }
    // 添加新key，删除旧key
    else {
      this.secretKey.set(key, value);
      // 删除map的第一个元素，即为最长未使用的
      this.secretKey.delete(this.secretKey.keys().next().value);
    }
  }
}
// let cache = new LRUCache(2);
// cache.put(1, 1);
// cache.put(2, 2);
// console.log("cache.get(1)", cache.get(1))// 返回  1
// cache.put(3, 3);// 该操作会使得密钥 2 作废
// console.log("cache.get(2)", cache.get(2))// 返回 -1 (未找到)
// cache.put(4, 4);// 该操作会使得密钥 1 作废
// console.log("cache.get(1)", cache.get(1))// 返回 -1 (未找到)
// console.log("cache.get(3)", cache.get(3))// 返回  3
// console.log("cache.get(4)", cache.get(4))// 返回  4
复制代码
```



----

#### 23 Promise 以及相关方法的实现

题目描述:手写 Promise 以及 Promise.all Promise.race 的实现

实现代码如下:

```javascript
class Mypromise {
  constructor(fn) {
    // 表示状态
    this.state = "pending";
    // 表示then注册的成功函数
    this.successFun = [];
    // 表示then注册的失败函数
    this.failFun = [];

    let resolve = (val) => {
      // 保持状态改变不可变（resolve和reject只准触发一种）
      if (this.state !== "pending") return;

      // 成功触发时机  改变状态 同时执行在then注册的回调事件
      this.state = "success";
      // 为了保证then事件先注册（主要是考虑在promise里面写同步代码） promise规范 这里为模拟异步
      setTimeout(() => {
        // 执行当前事件里面所有的注册函数
        this.successFun.forEach((item) => item.call(this, val));
      });
    };

    let reject = (err) => {
      if (this.state !== "pending") return;
      // 失败触发时机  改变状态 同时执行在then注册的回调事件
      this.state = "fail";
      // 为了保证then事件先注册（主要是考虑在promise里面写同步代码） promise规范 这里模拟异步
      setTimeout(() => {
        this.failFun.forEach((item) => item.call(this, err));
      });
    };
    // 调用函数
    try {
      fn(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  // 实例方法 then

  then(resolveCallback, rejectCallback) {
    // 判断回调是否是函数
    resolveCallback =
      typeof resolveCallback !== "function" ? (v) => v : resolveCallback;
    rejectCallback =
      typeof rejectCallback !== "function"
        ? (err) => {
            throw err;
          }
        : rejectCallback;
    // 为了保持链式调用  继续返回promise
    return new Mypromise((resolve, reject) => {
      // 将回调注册到successFun事件集合里面去
      this.successFun.push((val) => {
        try {
          //    执行回调函数
          let x = resolveCallback(val);
          //（最难的一点）
          // 如果回调函数结果是普通值 那么就resolve出去给下一个then链式调用  如果是一个promise对象（代表又是一个异步） 那么调用x的then方法 将resolve和reject传进去 等到x内部的异步 执行完毕的时候（状态完成）就会自动执行传入的resolve 这样就控制了链式调用的顺序
          x instanceof Mypromise ? x.then(resolve, reject) : resolve(x);
        } catch (error) {
          reject(error);
        }
      });

      this.failFun.push((val) => {
        try {
          //    执行回调函数
          let x = rejectCallback(val);
          x instanceof Mypromise ? x.then(resolve, reject) : reject(x);
        } catch (error) {
          reject(error);
        }
      });
    });
  }
  //静态方法
  static all(promiseArr) {
    let result = [];
    //声明一个计数器 每一个promise返回就加一
    let count = 0;
    return new Mypromise((resolve, reject) => {
      for (let i = 0; i < promiseArr.length; i++) {
      //这里用 Promise.resolve包装一下 防止不是Promise类型传进来
        Promise.resolve(promiseArr[i]).then(
          (res) => {
            //这里不能直接push数组  因为要控制顺序一一对应(感谢评论区指正)
            result[i] = res;
            count++;
            //只有全部的promise执行成功之后才resolve出去
            if (count === promiseArr.length) {
              resolve(result);
            }
          },
          (err) => {
            reject(err);
          }
        );
      }
    });
  }
  //静态方法
  static race(promiseArr) {
    return new Mypromise((resolve, reject) => {
      for (let i = 0; i < promiseArr.length; i++) {
        Promise.resolve(promiseArr[i]).then(
          (res) => {
            //promise数组只要有任何一个promise 状态变更  就可以返回
            resolve(res);
          },
          (err) => {
            reject(err);
          }
        );
      }
    });
  }
}

// 使用
// let promise1 = new Mypromise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(123);
//   }, 2000);
// });
// let promise2 = new Mypromise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(1234);
//   }, 1000);
// });

// Mypromise.all([promise1,promise2]).then(res=>{
//   console.log(res);
// })

// Mypromise.race([promise1, promise2]).then(res => {
//   console.log(res);
// });

// promise1
//   .then(
//     res => {
//       console.log(res); //过两秒输出123
//       return new Mypromise((resolve, reject) => {
//         setTimeout(() => {
//           resolve("success");
//         }, 1000);
//       });
//     },
//     err => {
//       console.log(err);
//     }
//   )
//   .then(
//     res => {
//       console.log(res); //再过一秒输出success
//     },
//     err => {
//       console.log(err);
//     }
//   );
复制代码
```

> 扩展思考:如何取消 promise

Promise.race()方法可以用来竞争 Promise 可以借助这个特性 自己包装一个 空的 Promise 与要发起的 Promise 来实现

```javascript
function wrap(pro) {
  let obj = {};
  // 构造一个新的promise用来竞争
  let p1 = new Promise((resolve, reject) => {
    obj.resolve = resolve;
    obj.reject = reject;
  });

  obj.promise = Promise.race([p1, pro]);
  return obj;
}

let testPro = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(123);
  }, 1000);
});

let wrapPro = wrap(testPro);
wrapPro.promise.then((res) => {
  console.log(res);
});
wrapPro.resolve("被拦截了");
复制代码
```



----

#### 24 实现一个 add 方法

题目描述:实现一个 add 方法 使计算结果能够满足如下预期： add(1)(2)(3)()=6 add(1,2,3)(4)()=10

其实就是考函数柯里化

实现代码如下:

```javascript
function add(...args) {
  let allArgs = [...args];
  function fn(...newArgs) {
    allArgs = [...allArgs, ...newArgs];
    return fn;
  }
  fn.toString = function () {
    if (!allArgs.length) {
      return;
    }
    return allArgs.reduce((sum, cur) => sum + cur);
  };
  return fn;
}
复制代码
```



-----

#### 25 动态规划求解硬币找零问题

题目描述:给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1

```ini
示例1：
输入: coins = [1, 2, 5], amount = 11
输出: 3
解释: 11 = 5 + 5 + 1

示例2：
输入: coins = [2], amount = 3
输出: -1
复制代码
```

实现代码如下:

```javascript
const coinChange = function (coins, amount) {
  // 用于保存每个目标总额对应的最小硬币个数
  const f = [];
  // 提前定义已知情况
  f[0] = 0;
  // 遍历 [1, amount] 这个区间的硬币总额
  for (let i = 1; i <= amount; i++) {
    // 求的是最小值，因此我们预设为无穷大，确保它一定会被更小的数更新
    f[i] = Infinity;
    // 循环遍历每个可用硬币的面额
    for (let j = 0; j < coins.length; j++) {
      // 若硬币面额小于目标总额，则问题成立
      if (i - coins[j] >= 0) {
        // 状态转移方程
        f[i] = Math.min(f[i], f[i - coins[j]] + 1);
      }
    }
  }
  // 若目标总额对应的解为无穷大，则意味着没有一个符合条件的硬币总数来更新它，本题无解，返回-1
  if (f[amount] === Infinity) {
    return -1;
  }
  // 若有解，直接返回解的内容
  return f[amount];
};
复制代码
```



-----

#### 26 请实现 DOM2JSON 一个函数，可以把一个 DOM 节点输出 JSON 的格式

题目描述:

```css
<div>
  <span>
    <a></a>
  </span>
  <span>
    <a></a>
    <a></a>
  </span>
</div>

把上诉dom结构转成下面的JSON格式

{
  tag: 'DIV',
  children: [
    {
      tag: 'SPAN',
      children: [
        { tag: 'A', children: [] }
      ]
    },
    {
      tag: 'SPAN',
      children: [
        { tag: 'A', children: [] },
        { tag: 'A', children: [] }
      ]
    }
  ]
}
复制代码
```

实现代码如下:

```javascript
function dom2Json(domtree) {
  let obj = {};
  obj.name = domtree.tagName;
  obj.children = [];
  domtree.childNodes.forEach((child) => obj.children.push(dom2Json(child)));
  return obj;
}
复制代码
```

> 扩展思考:如果给定的不是一个 Dom 树结构 而是一段 html 字符串 该如何解析?

那么这个问题就类似 Vue 的模板编译原理 我们可以利用正则 匹配 html 字符串 遇到开始标签 结束标签和文本 解析完毕之后生成对应的 ast 并建立相应的父子关联 不断的 advance 截取剩余的字符串 直到 html 全部解析完毕 



----

#### 27 类数组转化为数组的方法

题目描述:类数组拥有 length 属性 可以使用下标来访问元素 但是不能使用数组的方法 如何把类数组转化为数组?

实现代码如下:

```javascript
const arrayLike=document.querySelectorAll('div')

// 1.扩展运算符
[...arrayLike]
// 2.Array.from
Array.from(arrayLike)
// 3.Array.prototype.slice
Array.prototype.slice.call(arrayLike)
// 4.Array.apply
Array.apply(null, arrayLike)
// 5.Array.prototype.concat
Array.prototype.concat.apply([], arrayLike)

复制代码
```



----

#### 28 Object.is 实现

题目描述:

```vbnet
Object.is不会转换被比较的两个值的类型，这点和===更为相似，他们之间也存在一些区别。
    1. NaN在===中是不相等的，而在Object.is中是相等的
    2. +0和-0在===中是相等的，而在Object.is中是不相等的
复制代码
```

实现代码如下:

```javascript
Object.is = function (x, y) {
  if (x === y) {
    // 当前情况下，只有一种情况是特殊的，即 +0 -0
    // 如果 x !== 0，则返回true
    // 如果 x === 0，则需要判断+0和-0，则可以直接使用 1/+0 === Infinity 和 1/-0 === -Infinity来进行判断
    return x !== 0 || 1 / x === 1 / y;
  }

  // x !== y 的情况下，只需要判断是否为NaN，如果x!==x，则说明x是NaN，同理y也一样
  // x和y同时为NaN时，返回true
  return x !== x && y !== y;
};
复制代码
```



----

#### 29 AJAX

题目描述:利用 XMLHttpRequest 手写 AJAX 实现

实现代码如下:

```javascript
const getJSON = function (url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== 4) return;
      if (xhr.status === 200 || xhr.status === 304) {
        resolve(xhr.responseText);
      } else {
        reject(new Error(xhr.responseText));
      }
    };
    xhr.send();
  });
};

```



-----

#### 30 分片思想解决大数据量渲染问题

题目描述:渲染百万条结构简单的大数据时 怎么使用分片思想优化渲染

实现代码如下:

```javascript
let ul = document.getElementById("container");
// 插入十万条数据
let total = 100000;
// 一次插入 20 条
let once = 20;
//总页数
let page = total / once;
//每条记录的索引
let index = 0;
//循环加载数据
function loop(curTotal, curIndex) {
  if (curTotal <= 0) {
    return false;
  }
  //每页多少条
  let pageCount = Math.min(curTotal, once);
  window.requestAnimationFrame(function () {
    for (let i = 0; i < pageCount; i++) {
      let li = document.createElement("li");
      li.innerText = curIndex + i + " : " + ~~(Math.random() * total);
      ul.appendChild(li);
    }
    loop(curTotal - pageCount, curIndex + pageCount);
  });
}
loop(total, index);
复制代码
```

> 扩展思考：对于大数据量的简单 dom 结构渲染可以用分片思想解决 如果是复杂的 dom 结构渲染如何处理？

这时候就需要使用虚拟列表了 大家自行百度哈 虚拟列表和虚拟表格在日常项目使用还是很频繁的



----

#### 31 将虚拟 Dom 转化为真实 Dom

题目描述:JSON 格式的虚拟 Dom 怎么转换成真实 Dom

```css
{
  tag: 'DIV',
  attrs:{
  id:'app'
  },
  children: [
    {
      tag: 'SPAN',
      children: [
        { tag: 'A', children: [] }
      ]
    },
    {
      tag: 'SPAN',
      children: [
        { tag: 'A', children: [] },
        { tag: 'A', children: [] }
      ]
    }
  ]
}
把上诉虚拟Dom转化成下方真实Dom
<div id="app">
  <span>
    <a></a>
  </span>
  <span>
    <a></a>
    <a></a>
  </span>
</div>

复制代码
```

实现代码如下:

```javascript
// 真正的渲染函数
function _render(vnode) {
  // 如果是数字类型转化为字符串
  if (typeof vnode === "number") {
    vnode = String(vnode);
  }
  // 字符串类型直接就是文本节点
  if (typeof vnode === "string") {
    return document.createTextNode(vnode);
  }
  // 普通DOM
  const dom = document.createElement(vnode.tag);
  if (vnode.attrs) {
    // 遍历属性
    Object.keys(vnode.attrs).forEach((key) => {
      const value = vnode.attrs[key];
      dom.setAttribute(key, value);
    });
  }
  // 子数组进行递归操作
  vnode.children.forEach((child) => dom.appendChild(_render(child)));
  return dom;
}
复制代码
```



-----

#### 32 实现模板字符串解析功能

题目描述:

```ini
let template = '我是{{name}}，年龄{{age}}，性别{{sex}}';
let data = {
  name: '姓名',
  age: 18
}
render(template, data); // 我是姓名，年龄18，性别undefined

```

实现代码如下:

```javascript
function render(template, data) {
  let computed = template.replace(/\{\{(\w+)\}\}/g, function (match, key) {
    return data[key];
  });
  return computed;
}

```



----

#### 33 实现一个对象的 flatten 方法

题目描述:

```css
const obj = {
 a: {
        b: 1,
        c: 2,
        d: {e: 5}
    },
 b: [1, 3, {a: 2, b: 3}],
 c: 3
}

flatten(obj) 结果返回如下
// {
//  'a.b': 1,
//  'a.c': 2,
//  'a.d.e': 5,
//  'b[0]': 1,
//  'b[1]': 3,
//  'b[2].a': 2,
//  'b[2].b': 3
//   c: 3
// }
复制代码
```

实现代码如下:

```javascript
function isObject(val) {
  return typeof val === "object" && val !== null;
}

function flatten(obj) {
  if (!isObject(obj)) {
    return;
  }
  let res = {};
  const dfs = (cur, prefix) => {
    if (isObject(cur)) {
      if (Array.isArray(cur)) {
        cur.forEach((item, index) => {
          dfs(item, `${prefix}[${index}]`);
        });
      } else {
        for (let k in cur) {
          dfs(cur[k], `${prefix}${prefix ? "." : ""}${k}`);
        }
      }
    } else {
      res[prefix] = cur;
    }
  };
  dfs(obj, "");

  return res;
}
flatten();

```



----

#### 34 列表转成树形结构

题目描述:

```yaml
[
    {
        id: 1,
        text: '节点1',
        parentId: 0 //这里用0表示为顶级节点
    },
    {
        id: 2,
        text: '节点1_1',
        parentId: 1 //通过这个字段来确定子父级
    }
    ...
]

转成
[
    {
        id: 1,
        text: '节点1',
        parentId: 0,
        children: [
            {
                id:2,
                text: '节点1_1',
                parentId:1
            }
        ]
    }
]
复制代码
```

实现代码如下:

```javascript
function listToTree(data) {
  let temp = {};
  let treeData = [];
  for (let i = 0; i < data.length; i++) {
    temp[data[i].id] = data[i];
  }
  for (let i in temp) {
    if (+temp[i].parentId != 0) {
      if (!temp[temp[i].parentId].children) {
        temp[temp[i].parentId].children = [];
      }
      temp[temp[i].parentId].children.push(temp[i]);
    } else {
      treeData.push(temp[i]);
    }
  }
  return treeData;
}
复制代码
```



----

#### 35 树形结构转成列表

题目描述:

```yaml
[
    {
        id: 1,
        text: '节点1',
        parentId: 0,
        children: [
            {
                id:2,
                text: '节点1_1',
                parentId:1
            }
        ]
    }
]
转成
[
    {
        id: 1,
        text: '节点1',
        parentId: 0 //这里用0表示为顶级节点
    },
    {
        id: 2,
        text: '节点1_1',
        parentId: 1 //通过这个字段来确定子父级
    }
    ...
]

复制代码
```

实现代码如下:

```javascript
function treeToList(data) {
  let res = [];
  const dfs = (tree) => {
    tree.forEach((item) => {
      if (item.children) {
        dfs(item.children);
        delete item.children;
      }
      res.push(item);
    });
  };
  dfs(data);
  return res;
}
复制代码
```



----

#### 36 大数相加

题目描述:实现一个add方法完成两个大数相加

```ini
let a = "9007199254740991";
let b = "1234567899999999999";

function add(a ,b){
   //...
}

复制代码
```

实现代码如下:

```javascript
function add(a ,b){
   //取两个数字的最大长度
   let maxLength = Math.max(a.length, b.length);
   //用0去补齐长度
   a = a.padStart(maxLength , 0);//"0009007199254740991"
   b = b.padStart(maxLength , 0);//"1234567899999999999"
   //定义加法过程中需要用到的变量
   let t = 0;
   let f = 0;   //"进位"
   let sum = "";
   for(let i=maxLength-1 ; i>=0 ; i--){
      t = parseInt(a[i]) + parseInt(b[i]) + f;
      f = Math.floor(t/10);
      sum = t%10 + sum;
   }
   if(f!==0){
      sum = '' + f + sum;
   }
   return sum;
}
```



----

## 数字转千分位

### 数值转字符串遍历

```js
function format_with_array(number) {
    var arr = (number + '').split('.');
    var int = arr[0].split('');
    var fraction = arr[1] || '';
    var r = "";
    var len = int.length;
    int.reverse().forEach(function (v, i) {
        if (i !== 0 && i % 3 === 0) {
            r = v + "," + r;
        } else {
            r = v + r;
        }
    })
    return r + (!!fraction ? "." + fraction : '');
}
```

### substring

```js
function format_with_substring(number) {
    var arr = (number + '').split('.');
    var int = arr[0] + '';
    var fraction = arr[1] || '';
    var f = int.length % 3;
    var r = int.substring(0, f);

    for (var i = 0; i < Math.floor(int.length / 3); i++) {
        r += ',' + int.substring(f + i * 3, f + (i + 1) * 3)
    }

    if (f === 0) {
        r = r.substring(1);
    }
    return r + (!!fraction ? "." + fraction : '');
}
```

### 除法+求模

```js
function format_with_mod(number) {
    var n = number;
    var r = ""; 
    var temp;
    do {
        mod = n % 1000;
        n = n / 1000;
        temp = ~~mod;
        r =  (n >= 1 ?`${temp}`.padStart(3, "0"): temp) + (!!r ? "," + r : "")
    } while (n >= 1)

    var strNumber = number + "";
    var index = strNumber.indexOf(".");
    if (index > 0) {
        r += strNumber.substring(index);
    }
    return r;
}
```

### 正则

```js
function formatNumber(num) {
	let [int, fraction] = num.toString().split(".");
	let reg = /\d{1,3}(?=(\d{3})+$)/g
	return (int + '').replace(reg, "$&,") + (!!fraction ? "." + fraction : "");
}
function format_with_regex(number) {
    var reg = /(\d)(?=(?:\d{3})+$)/g   
    return (number + '').replace(reg, '$1,');
}

let num1 = 123456.342;
console.log(formatNumber(num1));  // 123,456.342

let num2 = -1234567.342;
console.log(formatNumber(num2));  // -1,234,567.342
```

### toLocaleString

```js
function format_with_toLocaleString(number, minimumFractionDigits, maximumFractionDigits) {
    minimumFractionDigits = minimumFractionDigits || 2;
    maximumFractionDigits = (maximumFractionDigits || 2);
    maximumFractionDigits = Math.max(minimumFractionDigits, maximumFractionDigits);

    return number.toLocaleString("en-us", {
        maximumFractionDigits: maximumFractionDigits || 2,
        minimumFractionDigits: minimumFractionDigits || 2
    })
}
```

### Intl.NumberFormat

```js
function format_with_Intl(number, minimumFractionDigits, maximumFractionDigits) {
    minimumFractionDigits = minimumFractionDigits || 2;
    maximumFractionDigits = (maximumFractionDigits || 2);
    maximumFractionDigits = Math.max(minimumFractionDigits, maximumFractionDigits);

    return new Intl.NumberFormat('en-us', {
        maximumFractionDigits: maximumFractionDigits || 2,
        minimumFractionDigits: minimumFractionDigits || 2
    }).format(number)
}
```







----

## 获取url参数

通过循环处理

```js
function getUrlParam(variable){
 	var query = window.location.search.substring(1);
	var vars = query.split("&");
	for (var i=0;i<vars.length;i++) {
   		var pair = vars[i].split("=");
       	if(pair[0] == variable){return pair[1];}
    }
    return(null);
}

```

通过正则处理

```js
function getUrlParam(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
	var r = window.location.search.substr(1).match(reg);  //匹配目标参数
	if (r != null) return unescape(r[2]); return null; //返回参数值
}
```



----

## 原生JS实现省市区(县)三级联动下拉列表

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>测试</title>
    <style type="text/css">
   * {
    margin: 0;
    padding: 0;
   }
   fieldset {
    width: 500px;
    padding: 20px;
    margin: 30px auto;
    border: 1px solid #ccc;
   }
   legend {
    font-size: 18px;
    font-weight: bold;
   }
   #addr-show {
    width: 200px;
    height: 25px;
    margin-bottom: 10px;
   }
   .btn {
    width: 80px;
    height: 30px;
    border-radius: 4px;
    border: 1px solid #ccc;
    outline: none;
    background-color: #aaa;
    margin: 0 20px;
   }
   .btn:disabled {
    background-color: #ccc;
   }
   select {
    width: 120px;
    height: 30px;
   }
   select #city {
    display: none;
   }
   select #country {
    display: none;
   }
    </style>
</head>
<body>
    <div>
      <fieldset>
        <legend>下拉选择框实现省市区（县）三级联动</legend>
        <form action="#">
          <label for="addr-show">您选择的是：
            <input type="text" value="" id="addr-show">
          </label>
          <br>

          <!-- 省份选择 -->
          <select id="prov" onchange="showCity(this)">
            <option>=请选择省份=</option>
          </select>

          <!--城市选择-->
          <select id="city" onchange="showCountry(this)">
            <option>=请选择城市=</option>
          </select>

          <!--县区选择-->
          <select id="country" onchange="selectCountry(this)">
            <option>=请选择县区=</option>
          </select>

          <button type="button" id="btn" class="btn met1" onclick="showAddr()">确定</button>
        </form>
      </fieldset>
    </div>
    <script type="text/javascript">
      const provice = [
        {
          name: "北京市",
          city: [
            {
              name: "北京市",
              districtAndCounty: ["东城区", "西城区", "崇文区", "宣武区", "朝阳区", "丰台区", "石景山区", "海淀区", "门头沟区", "房山区", "通州区", "顺义区", "昌平区", "大兴区", "怀柔区", "平谷区", "密云县", "延庆县", "延庆镇"]
            }
          ]
        },
        {
          name: "天津市",
          city: [
            {
              name: "天津市",
              districtAndCounty: ["和平区", "河东区", "河西区", "南开区", "河北区", "红桥区", "塘沽区", "汉沽区", "大港区", "东丽区", "西青区", "津南区", "北辰区", "武清区", "宝坻区", "蓟县", "宁河县", "芦台镇", "静海县", "静海镇"]
            }
          ]
        },
        {
          name: "上海市",
          city: [
            {
              name: "上海市",
              districtAndCounty: ["黄浦区", "卢湾区", "徐汇区", "长宁区", "静安区", "普陀区", "闸北区", "虹口区", "杨浦区", "闵行区", "宝山区?", "嘉定区", "浦东新区", "金山区", "松江区", "青浦区", "南汇区", "奉贤区", "崇明县", "城桥镇"]
            }
          ]
        },
        {
          name: "重庆市",
          city: [
            {
              name: "重庆市",
              districtAndCounty: ["渝中区", "大渡口区", "江北区", "沙坪坝区", "九龙坡区", "南岸区", "北碚区", "万盛区", "双桥区", "渝北区", "巴南区", "万州区", "涪陵区", "黔江区", "长寿区", "合川市", "永川区市", "江津市", "南川市", "綦江县", "潼南县", "铜梁县", "大足县", "荣昌县", "璧山县", "垫江县", "武隆县", "丰都县", "城口县", "梁平县", "开县", "巫溪县", "巫山县", "奉节县", "云阳县", "忠县", "石柱土家族自治县", "彭水苗族土家族自治县", "酉阳土家族苗族自治县", "秀山土家族苗族自治县"]
            }
          ]
        },
        {
          name: "辽宁省",
          city: [
            {
              name: "沈阳市",
              districtAndCounty: ["沈河区", "和平区", "大东区", "皇姑区", "铁西区", "苏家屯区", "东陵区", "新城子区", "于洪区", "新民市", "辽中县", "辽中镇", "康平县", "康平镇", "法库县", "法库镇"]
            },
            {
              name: "朝阳市",
              districtAndCounty: ["双塔区", "龙城区", "北票市", "凌源市", "朝阳县", "朝阳市双塔区", "建平县", "喀喇沁左翼蒙古族自治县", "大城子镇"]
            },
            {
              name: "阜新市",
              districtAndCounty: ["海州区", "新邱区", "太平区", "清河门区", "细河区", "彰武县", "彰武镇", "阜新蒙古族自治县", "阜新镇"]
            },
            {
              name: "铁岭市",
              districtAndCounty: ["银州区", "清河区", "调兵山市", "开原市", "铁岭县", "铁岭市银州区", "西丰县", "西丰镇", "昌图县", "昌图镇"]
            },
            {
              name: "抚顺市",
              districtAndCounty: ["顺城区", "新抚区", "东洲区", "望花区", "抚顺县", "抚顺市顺城区", "新宾满族自治县", "新宾镇", "清原满族自治县", "清原镇"]
            },
            {
              name: "本溪市",
              districtAndCounty: ["平山区", "溪湖区", "明山区", "南芬区", "本溪满族自治县", "小市镇", "桓仁满族自治县", "桓仁镇"]
            },
            {
              name: "辽阳市",
              districtAndCounty: ["白塔区", "文圣区", "宏伟区", "弓长岭区", "太子河区", "灯塔市", "辽阳县", "首山镇"]
            },
            {
              name: "鞍山市",
              districtAndCounty: ["铁东区", "铁西区", "立山区", "千山区", "海城市", "台安县", "台安镇", "岫岩满族自治县", "岫岩镇"]
            },
            {
              name: "丹东市",
              districtAndCounty: ["振兴区", "元宝区", "振安区", "凤城市", "东港市", "宽甸满族自治县", "宽甸镇"]
            },
            {
              name: "大连市",
              districtAndCounty: ["西岗区", "中山区", "沙河口区", "甘井子区", "旅顺口区", "金州区", "瓦房店市", "普兰店市", "庄河市", "长海县", "大长山岛镇"]
            },
            {
              name: "营口市",
              districtAndCounty: ["站前区", "西市区", "鲅鱼圈区", "老边区", "大石桥市", "盖州市"]
            },
            {
              name: "盘锦市",
              districtAndCounty: ["兴隆台区", "双台子区", "大洼县", "大洼镇", "盘山县", "盘锦市双台子区"]
            },
            {
              name: "锦州市",
              districtAndCounty: ["太和区", "古塔区", "凌河区", "凌海市", "北宁市", "黑山县", "黑山镇", "义县", "义州镇"]
            },
            {
              name: "葫芦岛市",
              districtAndCounty: ["龙港区", "连山区", "南票区", "兴城市", "绥中县", "绥中镇", "建昌县", "建昌镇"]
            }
          ]
        },
      ];
      // 页面加载时，动态获取省份列表并放到下拉菜单的下拉项中
      let btn = document.getElementById("btn");
      let prov = document.getElementById("prov");

      (function showProv() {
        btn.disabled = true;
        const len = provice.length;
        for (let i = 0; i < len; i++) {
          let provOpt = document.createElement("option");
          provOpt.innerText = provice[i]["name"];
          provOpt.value = i;
          prov.appendChild(provOpt);
        }
      })();
      //这是一个立即执行函数。
      /* 当点击省份的下拉列表时会触发select的onchange事件，我们用options的selectedIndex属性找到用户选择的省份，动态的生成相应省得城市列表*/

      /*根据所选的省份来显示城市列表*/
      let addrShow = document.getElementById("addr-show");
      let city = document.getElementById("city");
      let country = document.getElementById("country");
      const current = {prov: 0, city: 0, country: 0};

      function showCity(obj) {
        let val = Number(obj.options[obj.selectedIndex].value);
        // console.log(val);
        if (val >= 0) {
          city.style.display = "inline-block";
          country.style.display = "none";
        } else {
          city.style.display = "none";
          country.style.display = "none";
        }
        if (val !== current.prov) {
          current.prov = val;
          addrShow.value = "";
          btn.disabled = true;
        }
        if (val !== null) {
          city.length = 1;   //清空之前的内容只留第一个默认选项
          let cityLen = 0;
          if (provice[val]) {
            cityLen = provice[val]["city"].length;
          }
          for (let j = 0; j < cityLen; j++) {
            let cityOpt = document.createElement("option");
            cityOpt.innerText = provice[val]["city"][j].name;
            cityOpt.value = j;
            city.appendChild(cityOpt);
          }
        }
      }

      /*根据所选的城市来显示县区列表*/
      function showCountry(obj) {
        let val = Number(obj.options[obj.selectedIndex].value);
        if (val >= 0) {
          country.style.display = 'inline-block';
        } else {
          country.style.display = 'none';
        }
        current.city = val;
        if (val !== null) {
          country.length = 1; //清空之前的内容只留第一个默认选项
          let countryLen = 0;
          if (provice[current.prov]["city"][val]) {
            countryLen = provice[current.prov]["city"][val].districtAndCounty.length;
          }
          // var countryLen = provice[current.prov]["city"][val].districtAndCounty.length;
          if(countryLen === 0){
            addrShow.value = provice[current.prov].name + '-' + provice[current.prov]["city"][current.city].name;
            return;
          }
          for (let j = 0; j < countryLen; j++) {
            let countryOpt = document.createElement('option');
            countryOpt.innerText = provice[current.prov]["city"][val].districtAndCounty[j];
            countryOpt.value = j;
            country.appendChild(countryOpt);
          }
        }
      }

      function selectCountry(obj) {
        let val = Number(obj.options[obj.selectedIndex].value);
        current.country = val;
        btn.disabled = false;
        addrShow.value = provice[current.prov].name + '-' + provice[current.prov]["city"][current.city].name + '-' + provice[current.prov]["city"][current.city].districtAndCounty[current.country];
      }

      function showAddr() {
        addrShow.value = provice[current.prov].name + '-' + provice[current.prov]["city"][current.city].name + '-' + provice[current.prov]["city"][current.city].districtAndCounty[current.country];
        //处理其他
      }

    </script>
</body>
</html>

```

