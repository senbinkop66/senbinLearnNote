# 迭代器与生成器

## 1 理解迭代

迭代的英文“iteration”源自拉丁文 itero，意思是“重复”或“再来”。在软件开发领域，“迭代”的意思是按照顺序反复多次执行一段程序，通常会有明确的终止条件。ECMAScript 6 规范新增了两个高级特性：迭代器和生成器。使用这两个特性，能够更清晰、高效、方便地实现迭代。

在 JavaScript 中，计数循环就是一种最简单的迭代：

```js
for (let i = 1; i <= 10; ++i) {
	console.log(i);
}
```

**循环是迭代机制的基础**，这是因为它可以指定迭代的次数，以及每次迭代要执行什么操作。每次循环都会在下一次迭代开始之前完成，而每次迭代的顺序都是事先定义好的。

**迭代会在一个有序集合上进行**。（“有序”可以理解为集合中所有项都可以按照既定的顺序被遍历到，特别是开始和结束项有明确的定义。）数组是 JavaScript 中有序集合的最典型例子。

```js
let collection = ['foo', 'bar', 'baz'];
for (let index = 0; index < collection.length; ++index) {
	console.log(collection[index]);
}
```

因为数组有已知的长度，且数组每一项都可以通过索引获取，所以整个数组可以通过递增索引来遍历。

由于如下原因，通过这种循环来执行例程并不理想。

- **迭代之前需要事先知道如何使用数据结构**。数组中的每一项都只能先通过引用取得数组对象，然后再通过[]操作符取得特定索引位置上的项。这种情况并不适用于所有数据结构。
- **遍历顺序并不是数据结构固有的**。通过递增索引来访问数据是特定于数组类型的方式，并不适用于其他具有隐式顺序的数据结构。

ES5 新增了 Array.prototype.forEach()方法，向通用迭代需求迈进了一步（但仍然不够理想）：

```js
let collection = ['foo', 'bar', 'baz'];
collection.forEach((item) => console.log(item));
```

这个方法解决了单独记录索引和通过数组对象取得值的问题。不过，没有办法标识迭代何时终止。 因此这个方法只适用于数组，而且回调结构也比较笨拙。

 在 ECMAScript 较早的版本中，执行迭代必须使用循环或其他辅助结构。随着代码量增加，代码会 变得越发混乱。很多语言都通过原生语言结构解决了这个问题，开发者无须事先知道如何迭代就能实现 迭代操作。这个解决方案就是迭代器模式。Python、Java、C++，还有其他很多语言都对这个模式提供 了完备的支持。JavaScript 在 ECMAScript 6 以后也支持了迭代器模式。

## 2 迭代器模式

### 2.0 可迭 代对象

迭代器模式（特别是在 ECMAScript 这个语境下）描述了一个方案，**即可以把有些结构称为“可迭 代对象”（iterable）**，因为它们实现了正式的 Iterable 接口，而且可以通过迭代器 Iterator 消费。 

可迭代对象是一种抽象的说法。基本上，可以把可迭代对象理解成数组或集合这样的集合类型的对 象。它们包含的元素都是有限的，而且都具有无歧义的遍历顺序：

```js
// 数组的元素是有限的
// 递增索引可以按序访问每个元素
let arr = [3, 1, 4];
// 集合的元素是有限的
// 可以按插入顺序访问每个元素
let set = new Set().add(3).add(1).add(4);
```

不过，可迭代对象不一定是集合对象，也可以是仅仅具有类似数组行为的其他数据结构，比如本章 开头提到的计数循环。该循环中生成的值是暂时性的，但循环本身是在执行迭代。计数循环和数组都具 有可迭代对象的行为。

**注意** 临时性可迭代对象可以实现为生成器

任何实现 Iterable 接口的数据结构都可以被实现 Iterator 接口的结构“消费”（consume）。**迭 代器（iterator）是按需创建的一次性对象**。每个迭代器都会关联一个可迭代对象，而迭代器会暴露迭代 其关联可迭代对象的 API。迭代器无须了解与其关联的可迭代对象的结构，只需要知道如何取得连续的 值。这种概念上的分离正是 Iterable 和 Iterator 的强大之处。

### 2.1 可迭代协议

实现 Iterable 接口（可迭代协议）要求同时具备两种能力：**支持迭代的自我识别能力**和**创建实现 Iterator 接口的对象的能力**。在 ECMAScript 中，这意味着必须暴露一个属性作为“默认迭代器”，而 且这个属性必须使用特殊的 Symbol.iterator 作为键。这个默认迭代器属性必须引用一个迭代器工厂 函数，调用这个工厂函数必须返回一个新迭代器。 

很多内置类型都实现了 Iterable 接口： 字符串 、数组 、映射 、集合 、arguments 对象 、NodeList 等 DOM 集合类型

检查是否存在默认迭代器属性可以暴露这个**工厂函数**：

```js
let num = 1;
let obj = {};
// 这两种类型没有实现迭代器工厂函数
console.log(num[Symbol.iterator]); // undefined
console.log(obj[Symbol.iterator]); // undefined
let str = 'abc';
let arr = ['a', 'b', 'c'];
let map = new Map().set('a', 1).set('b', 2).set('c', 3);
let set = new Set().add('a').add('b').add('c');
let els = document.querySelectorAll('div');
// 这些类型都实现了迭代器工厂函数
console.log(str[Symbol.iterator]); // f values() { [native code] }
console.log(arr[Symbol.iterator]); // f values() { [native code] }
console.log(map[Symbol.iterator]); // f values() { [native code] }
console.log(set[Symbol.iterator]); // f values() { [native code] }
console.log(els[Symbol.iterator]); // f values() { [native code] }
// 调用这个工厂函数会生成一个迭代器
console.log(str[Symbol.iterator]()); // StringIterator {}
console.log(arr[Symbol.iterator]()); // ArrayIterator {}
console.log(map[Symbol.iterator]()); // MapIterator {}
console.log(set[Symbol.iterator]()); // SetIterator {}
console.log(els[Symbol.iterator]()); // ArrayIterator {}
```

实际写代码过程中，不需要显式调用这个工厂函数来生成迭代器。实现可迭代协议的所有类型都会自动兼容接收可迭代对象的任何语言特性。接收可迭代对象的原生语言特性包括：

- for-of 循环
- 数组解构
- 扩展操作符
- Array.from()
- 创建集合
- 创建映射
- Promise.all()接收由期约组成的可迭代对象
- Promise.race()接收由期约组成的可迭代对象
- yield*操作符，在生成器中使用

这些原生语言结构会在后台调用提供的可迭代对象的这个工厂函数，从而创建一个迭代器：

```js
let arr = ['foo', 'bar', 'baz'];

// for-of 循环
for (let el of arr) {
    console.log(el);
}

// 数组解构
let [a, b, c] = arr;
console.log(a, b, c); // foo, bar, baz

// 扩展操作符
let arr2 = [...arr];
console.log(arr2); // ['foo', 'bar', 'baz']

// Array.from()
let arr3 = Array.from(arr);
console.log(arr3); // ['foo', 'bar', 'baz']

// Set 构造函数
let set = new Set(arr);
console.log(set); // Set(3) {'foo', 'bar', 'baz'}

// Map 构造函数
let pairs = arr.map((x, i) => [x, i]);
console.log(pairs); // [['foo', 0], ['bar', 1], ['baz', 2]]

let map = new Map(pairs);
console.log(map); // Map(3) { 'foo'=>0, 'bar'=>1, 'baz'=>2 }
```

如果对象原型链上的父类实现了 Iterable 接口，那这个对象也就实现了这个接口：

```js
class FooArray extends Array {}
let fooArr = new FooArray('foo', 'bar', 'baz');
for (let el of fooArr) {
	console.log(el);
}
```

### 2.2 迭代器协议

迭代器是一种一次性使用的对象，用于迭代与其关联的可迭代对象。迭代器 API 使用 next()方法 在可迭代对象中遍历数据。每次成功调用 next()，都会返回一个 IteratorResult 对象，其中包含迭 代器返回的下一个值。若不调用 next()，则无法知道迭代器的当前位置。 

next()方法返回的迭代器对象 IteratorResult 包含两个属性：**done 和 value**。done 是一个布 尔值，表示是否还可以再次调用 next()取得下一个值；value 包含可迭代对象的下一个值（done 为 false），或者 undefined（done 为 true）。**done: true 状态称为“耗尽”**。可以通过以下简单的数 组来演示：

```js
// 可迭代对象
let arr = ['foo', 'bar'];
// 迭代器工厂函数
console.log(arr[Symbol.iterator]); // f values() { [native code] }
// 迭代器
let iter = arr[Symbol.iterator]();
console.log(iter); // ArrayIterator {}
// 执行迭代
console.log(iter.next()); // { done: false, value: 'foo' }
console.log(iter.next()); // { done: false, value: 'bar' }
console.log(iter.next()); // { done: true, value: undefined }
```

这里通过创建迭代器并调用 next()方法按顺序迭代了数组，直至不再产生新值。**迭代器并不知道怎么从可迭代对象中取得下一个值，也不知道可迭代对象有多大。只要迭代器到达 done: true 状态，后续调用 next()就一直返回同样的值了**：

```js
let arr = ['foo'];
let iter = arr[Symbol.iterator]();
console.log(iter.next()); // { done: false, value: 'foo' }
console.log(iter.next()); // { done: true, value: undefined }
console.log(iter.next()); // { done: true, value: undefined }
console.log(iter.next()); // { done: true, value: undefined }
```

每个迭代器都表示对可迭代对象的一次性有序遍历。**不同迭代器的实例相互之间没有联系**，只会独立地遍历可迭代对象：

```js
let arr = ['foo', 'bar'];
let iter1 = arr[Symbol.iterator]();
let iter2 = arr[Symbol.iterator]();
console.log(iter1.next()); // { done: false, value: 'foo' }
console.log(iter2.next()); // { done: false, value: 'foo' }
console.log(iter2.next()); // { done: false, value: 'bar' }
console.log(iter1.next()); // { done: false, value: 'bar' }
```

迭代器并不与可迭代对象某个时刻的快照绑定，而仅仅是使用游标来记录遍历可迭代对象的历程。如果可迭代对象在迭代期间被修改了，那么迭代器也会反映相应的变化：

```js
let arr = ['foo', 'baz'];
let iter = arr[Symbol.iterator]();
console.log(iter.next()); // { done: false, value: 'foo' }
// 在数组中间插入值
arr.splice(1, 0, 'bar');
console.log(iter.next()); // { done: false, value: 'bar' }
console.log(iter.next()); // { done: false, value: 'baz' }
console.log(iter.next()); // { done: true, value: undefined }
```

**注意** 迭代器维护着一个指向可迭代对象的引用，因此迭代器会阻止垃圾回收程序回收可迭代对象。

迭代器”的概念有时候容易模糊，因为它可以指通用的迭代，也可以指接口，还可以指正式的迭代器类型。下面的例子比较了一个显式的迭代器实现和一个原生的迭代器实现。

```js
// 这个类实现了可迭代接口（Iterable）
// 调用默认的迭代器工厂函数会返回
// 一个实现迭代器接口（Iterator）的迭代器对象
class Foo {
    [Symbol.iterator]() {
        return {
            next() {
                return { done: false, value: 'foo' };
            }
        }
    }
}
let f = new Foo();
// 打印出实现了迭代器接口的对象
console.log(f[Symbol.iterator]()); // { next: [Function: next] }
// Array 类型实现了可迭代接口（Iterable）
// 调用 Array 类型的默认迭代器工厂函数
// 会创建一个 ArrayIterator 的实例
let a = new Array();
// 打印出 ArrayIterator 的实例
console.log(a[Symbol.iterator]()); // Object [Array Iterator] {}
```

### 2.3 自定义迭代器

与 Iterable 接口类似，**任何实现 Iterator 接口的对象都可以作为迭代器使用**。下面这个例子中的 Counter 类只能被迭代一定的次数：

```js
class Counter{
    // Counter 的实例应该迭代 limit 次
    constructor(limit){
        this.count=1;
        this.limit=limit;
    }

    next(){
        if (this.count<=this.limit) {
            return {done:false,value:this.count++};
        }else{
            return {done:true,value:undefined};
        }
    }
    [Symbol.iterator](){
        return this;
    }
}

let c1=new Counter(5);
for (let i of c1){
    console.log(i);
}
```

这个类实现了 Iterator 接口，但不理想。这是因为它的每个实例只能被迭代一次：

```js
let c1=new Counter(5);
for (let i of c1){
    console.log(i);  //1,2,3,4,5
}
//没有输出
for (let i of c1){
    console.log(i);
}
```

为了让一个可迭代对象能够创建多个迭代器，必须每创建一个迭代器就对应一个新计数器。为此，**可以把计数器变量放到闭包里，然后通过闭包返回迭代器**：

```js
class Counter{
    // Counter 的实例应该迭代 limit 次
    constructor(limit){
        this.limit=limit;
    }

    
    [Symbol.iterator](){
        let count=1;
        let limit=this.limit;
        return {
            next(){
                if (count<=limit) {
                    return {done:false,value:count++};
                }else{
                    return {done:true,value:undefined};
                }
            }
        };
    }
}

let c1=new Counter(5);
for (let i of c1){
    console.log(i);  //1,2,3,4,5
}

for (let i of c1){
    console.log(i);  //1,2,3,4,5
}
```

**每个以这种方式创建的迭代器也实现了 Iterable 接口**。Symbol.iterator 属性引用的工厂函数会返回相同的迭代器：

```js
let arr = ['foo', 'bar', 'baz'];
let iter1 = arr[Symbol.iterator]();
console.log(iter1[Symbol.iterator]); // f values() { [native code] }
let iter2 = iter1[Symbol.iterator]();
console.log(iter1 === iter2); // true
```

因为每个迭代器也实现了 Iterable 接口，所以它们可以用在任何期待可迭代对象的地方，比如for-of 循环：

```js
let arr = [3, 1, 4];
let iter = arr[Symbol.iterator]();
for (let item of arr ) { console.log(item); }
// 3
// 1
// 4
for (let item of iter ) { console.log(item); }
// 3
// 1
// 4
```

### 2.4 提前终止迭代器

**可选的 return()方法**用于指定在迭代器提前关闭时执行的逻辑。执行迭代的结构在想让迭代器知道它不想遍历到可迭代对象耗尽时，就可以“关闭”迭代器。可能的情况包括：

- for-of 循环通过 break、continue、return 或 throw 提前退出；
- 解构操作并未消费所有值。

**return()方法必须返回一个有效的 IteratorResult 对象**。简单情况下，可以只返回{ done: true }。因为这个返回值只会用在生成器的上下文中，所以本章后面再讨论这种情况。

如下面的代码所示，内置语言结构在发现还有更多值可以迭代，但不会消费这些值时，会自动调用return()方法。

```js
class Counter{
    // Counter 的实例应该迭代 limit 次
    constructor(limit){
        this.limit=limit;
    }

    
    [Symbol.iterator](){
        let count=1;
        let limit=this.limit;
        return {
            next(){
                if (count<=limit) {
                    return {done:false,value:count++};
                }else{
                    return {done:true};
                }
            },
            return(){
                console.log("exiting early");
                return {done:true};
            }
        };
    }
}

let c1=new Counter(5);
for (let i of c1){
    if (i>2) {
        break;
    }
    console.log(i);
}
/*
1
2
exiting early
*/

let c2=new Counter(5);
try{
    for (let i of c2){
        if (i>2) {
            throw "err";
        }
        console.log(i);
    }
}catch(e){}
/*
1
2
exiting early
*/

let c3=new Counter(5);
//解构
let [a,b]=c3;  //exiting early

```

**如果迭代器没有关闭，则还可以继续从上次离开的地方继续迭代**。比如，数组的迭代器就是不能关闭的：

```js
let a = [1, 2, 3, 4, 5];
let iter = a[Symbol.iterator]();
for (let i of iter) {
    console.log(i);
    if (i > 2) {
        break
    }
}
// 1
// 2
// 3
for (let i of iter) {
    console.log(i);
}
// 4
// 5
```

因为 return()方法是可选的，所以**并非所有迭代器都是可关闭的**。要知道某个迭代器是否可关闭， 可以测试这个迭代器实例的 return 属性是不是函数对象。不过，仅仅给一个不可关闭的迭代器增加这 个方法并不能让它变成可关闭的。这是因为**调用 return()不会强制迭代器进入关闭状态**。即便如此， return()方法还是会被调用。

```js
let a = [1, 2, 3, 4, 5];
let iter = a[Symbol.iterator]();
iter.return = function() {
    console.log('Exiting early');
    return { done: true };
};
for (let i of iter) {
    console.log(i);
    if (i > 2) {
        break
    }
}
// 1
// 2
// 3
// Exiting early
for (let i of iter) {
    console.log(i);
}
// 4
// 5
```



## 3 生成器

### 3.1 生成器基础

生成器是 ECMAScript 6 新增的一个极为灵活的结构，拥有在一个函数块内暂停和恢复代码执行的能力。这种新能力具有深远的影响，比如，使**用生成器可以自定义迭代器和实现协程**。

**生成器的形式是一个函数，函数名称前面加一个星号（*）表示它是一个生成器**。只要是可以定义函数的地方，就可以定义生成器。

```js
// 生成器函数声明
function* generatorFn() {}
// 生成器函数表达式
let generatorFn = function* () {}
// 作为对象字面量方法的生成器函数
let foo = {
    * generatorFn() {}
}
// 作为类实例方法的生成器函数
class Foo {
    * generatorFn() {}
}
// 作为类静态方法的生成器函数
class Bar {
    static * generatorFn() {}
}
```

**注意** 箭头函数不能用来定义生成器函数。

**标识生成器函数的星号不受两侧空格的影响**：

```js
// 等价的生成器函数：
function* generatorFnA() {}
function *generatorFnB() {}
function * generatorFnC() {}
// 等价的生成器方法：
class Foo {
	*generatorFnD() {}
	* generatorFnE() {}
}
```

调用生成器函数会产生一个**生成器对象**。生成器对象一开始处于**暂停执行（suspended）的状态**。与迭代器相似，生成器对象也实现了 Iterator 接口，因此具有 next()方法。调用这个方法会让生成器开始或恢复执行。

```js
function * generatorFn(){}

const g=generatorFn();

console.log(g);  //Object [Generator] {<suspended>}
console.log(g.next);  //[Function: next]
```

**next()方法的返回值类似于迭代器**，有一个 done 属性和一个 value 属性。函数体为空的生成器函数中间不会停留，调用一次 next()就会让生成器到达 done: true 状态。

```js
function * generatorFn(){}

const g=generatorFn();

console.log(g);  //Object [Generator] {}
console.log(g.next());  //{ value: undefined, done: true }

```

**value 属性是生成器函数的返回值**，默认值为 undefined，可以通过生成器函数的返回值指定：

```js
function * generatorFn(){
    return 'foo';
}

const g=generatorFn();

console.log(g);  //Object [Generator] {}
console.log(g.next());  //{ value: 'foo', done: true }
```

**生成器函数只会在初次调用 next()方法后开始执行**，如下所示：

```js
function * generatorFn(){
    console.log('foo');
}
// 初次调用生成器函数并不会打印日志
const g=generatorFn();
g.next();  //foo
```

**生成器对象实现了 Iterable 接口**，它们默认的迭代器是自引用的：

```js
function * generatorFn(){}

console.log(generatorFn);  //[GeneratorFunction: generatorFn]
console.log(generatorFn()[Symbol.iterator]);  //[Function: [Symbol.iterator]]
console.log(generatorFn());  //Object [Generator] {}
console.log(generatorFn()[Symbol.iterator]);  //[Function: [Symbol.iterator]]

const g=generatorFn();
console.log(g===g[Symbol.iterator]());  //true
```

### 3.2 通过 yield 中断执行

**yield 关键字可以让生成器停止和开始执行**，也是生成器最有用的地方。**生成器函数在遇到 yield关键字之前会正常执行**。遇到这个关键字后，执行会停止，函数作用域的状态会被保留。停止执行的生成器函数**只能通过在生成器对象上调用 next()方法来恢复执行**：

```js
function * generatorFn(){
    yield;
}

const g=generatorFn();
console.log(g.next());  //{ value: undefined, done: false }
console.log(g.next());  //{ value: undefined, done: true }
console.log(g.next());  //{ value: undefined, done: true }
```

#### yield 关键字与 return 关键字

此时的 yield 关键字有点像函数的中间返回语句，它生成的值会出现在 next()方法返回的对象里。

通过 **yield 关键字**退出的生成器函数会处在 done: false 状态；

通过 **return 关键字**退出的生成器函数会处于 done: true 状态。

```js
function * generatorFn(){
    yield 'foo';
    yield 'bar';
    return "baz";
}

const g=generatorFn();
console.log(g.next());  //{ value: 'foo', done: false }
console.log(g.next());  //{ value: 'bar', done: false }

console.log(g.next());  //{ value: 'baz', done: true }

console.log(g.next());  //{ value: undefined, done: true }
```

生成器函数内部的执行流程会针对每个生成器对象区分作用域。**在一个生成器对象上调用 next()不会影响其他生成器**：

```js
function * generatorFn(){
    yield 'foo';
    yield 'bar';
    return "baz";
}

const g1=generatorFn();
const g2=generatorFn();

console.log(g1.next());  //{ value: 'foo', done: false }
console.log(g2.next());  //{ value: 'foo', done: false }
console.log(g2.next());  //{ value: 'bar', done: false }
console.log(g1.next());  //{ value: 'bar', done: false }
console.log(g1.next());  //{ value: 'baz', done: true }
console.log(g2.next());  //{ value: 'baz', done: true }
```

**yield 关键字只能在生成器函数内部使用，用在其他地方会抛出错误**。类似函数的 return 关键字**，yield 关键字必须直接位于生成器函数定义中**，出现在嵌套的非生成器函数中会抛出语法错误：

```js
// 有效
function* validGeneratorFn() {
    yield;
}
// 无效
function* invalidGeneratorFnA() {
    function a() {
        yield;
    }
}
// 无效
function* invalidGeneratorFnB() {
    const b = () => {
        yield;
    }
}
// 无效
function* invalidGeneratorFnC() {
    (() => {
        yield;
    })();
}
```

#### 生成器对象作为可迭代对象

在生成器对象上显式调用 next()方法的用处并不大。其实，如果把生成器对象当成可迭代对象，那么使用起来会更方便：

```js
function* generatorFn() {
    yield 1;
    yield 2;
    yield 3;
}
for (const x of generatorFn()) {
    console.log(x);  //1,2,3
}
```

在需要自定义迭代对象时，这样使用生成器对象会特别有用。比如，我们需要定义一个可迭代对象，而它会产生一个迭代器，这个迭代器会执行指定的次数。使用生成器，可以通过一个简单的循环来实现：

```js
function* nTimes(n) {
    while(n--){
        yield;
    }
}
for (let _ of nTimes(5)) {
    console.log("foo");  //foo foo foo foo foo
}
```

传给生成器的函数可以控制迭代循环的次数。在 n 为 0 时，while 条件为假，循环退出，生成器函数返回。

#### 使用 yield 实现输入和输出

除了可以作为函数的中间返回语句使用，yield 关键字还可以作为函数的中间参数使用。上一次让生成器函数暂停的 yield 关键字会接收到传给 next()方法的第一个值。这里有个地方不太好理解——**第一次调用 next()传入的值不会被使用，因为这一次调用是为了开始执行生成器函数**：

```js
function* generatorFn(initial) {
    console.log(initial);
    console.log(yield);
    console.log(yield);
}

let g=generatorFn("a");

g.next("b");  //a
g.next("c");  //c
g.next("d");  //d
```

**yield 关键字可以同时用于输入和输出**，如下例所示：

```js
function* generatorFn(initial) {
    return yield 'foo';
}

let g=generatorFn();

console.log(g.next());  //{ value: 'foo', done: false }
console.log(g.next("bar"));  //{ value: 'bar', done: true }
console.log(g.next("baz"));  //{ value: undefined, done: true }
```

因为函数必须对整个表达式求值才能确定要返回的值，所以它在遇到 yield 关键字时暂停执行并计算出要产生的值："foo"。下一次调用 next()传入了"bar"，作为交给同一个 yield 的值。然后这个值被确定为本次生成器函数要返回的值。

**yield 关键字并非只能使用一次**。比如，以下代码就定义了一个无穷计数生成器函数：

```js
function* generatorFn() {
    for (let i = 0;;++i) {
        yield i;
    }
}
let generatorObject = generatorFn();
console.log(generatorObject.next().value); // 0
console.log(generatorObject.next().value); // 1
console.log(generatorObject.next().value); // 2
console.log(generatorObject.next().value); // 3
console.log(generatorObject.next().value); // 4
console.log(generatorObject.next().value); // 5
//...
```

假设我们想定义一个生成器函数，它会根据配置的值迭代相应次数并产生迭代的索引。初始化一个新数组可以实现这个需求，但不用数组也可以实现同样的行为：

```js
function* nTimes(n) {
    for (let i = 0; i < n; ++i) {
        yield i;
    }
}
for (let x of nTimes(3)) {
    console.log(x);
}
// 0
// 1
// 2
```

另外，使用 while 循环也可以，而且代码稍微简洁一点：

```js
function* nTimes(n) {
    let i = 0;
    while(n--) {
        yield i++;
    }
}
for (let x of nTimes(3)) {
    console.log(x);
}
// 0
// 1
// 2
```

这样使用生成器也可以实现范围和填充数组：

```js
function* range(start, end) {
    while(end > start) {
        yield start++;
    }
}
for (const x of range(4, 7)) {
    console.log(x);
}
// 4
// 5
// 6

function* zeroes(n) {
    while(n--) {
    yield 0;
    }
}
console.log(Array.from(zeroes(8))); // [0, 0, 0, 0, 0, 0, 0, 0]
```

#### 产生可迭代对象

**可以使用星号增强 yield 的行为，让它能够迭代一个可迭代对象，从而一次产出一个值**：

```js
//等价的 generatorFn：
function* generatorFn1() {
    for (const x of [1, 2, 3]) {
        yield x;
    }
}

function *generatorFn(){
    yield* [1,2,3];
}

let generatorObject = generatorFn();
for (let x of generatorFn()) {
    console.log(x);
}
```

与生成器函数的星号类似，**yield 星号两侧的空格不影响其行为**：

```js
//等价的 generatorFn：
function* generatorFn() {
    yield* [1, 2];
    yield *[3, 4];
    yield * [5, 6];
}

let generatorObject = generatorFn();
for (let x of generatorFn()) {
    console.log(x);
}
// 1
// 2
// 3
// 4
// 5
// 6
```

因为 yield*实际上只是将一个可迭代对象序列化为一连串可以单独产出的值，所以这跟把 yield放到一个循环里没什么不同。下面两个生成器函数的行为是等价的：

```js
function* generatorFnA() {
    for (const x of [1, 2, 3]) {
        yield x;
    }
}
for (const x of generatorFnA()) {
    console.log(x);
}
// 1
// 2
// 3
function* generatorFnB() {
        yield* [1, 2, 3];
}
for (const x of generatorFnB()) {
    console.log(x);
}
// 1
// 2
// 3
```

**yield*的值是关联迭代器返回 done: true 时的 value 属性**。对于普通迭代器来说，这个值是undefined：

```js
function* generatorFn() {
    console.log('iter value:', yield* [1, 2, 3]);
}
for (const x of generatorFn()) {
    console.log('value:', x);
}
// value: 1
// value: 2
// value: 3
// iter value: undefined
```

对于生成器函数产生的迭代器来说，这个值就是生成器函数返回的值：

```js
function* innerGeneratorFn() {
    yield 'foo';
    return 'bar';
}
function* outerGeneratorFn(genObj) {
    console.log('iter value:', yield* innerGeneratorFn());
}
for (const x of outerGeneratorFn()) {
    console.log('value:', x);
}
// value: foo
// iter value: bar
```

#### 使用 yield*实现递归算法

yield*最有用的地方是实现递归操作，此时生成器可以产生自身。看下面的例子：

```js
function* nTimes(n) {
    if (n>0) {
        yield * nTimes(n-1);
        yield n-1;
    }
}

for (const x of nTimes(3)) {
    console.log(x);
}
// 0
// 1
// 2
```

在这个例子中，每个生成器首先都会从新创建的生成器对象产出每个值，然后再产出一个整数。结果就是生成器函数会递归地减少计数器值，并实例化另一个生成器对象。**从最顶层来看，这就相当于创建一个可迭代对象并返回递增的整数**。

**使用递归生成器结构和 yield*可以优雅地表达递归算法**。下面是一个图的实现，用于生成一个随机的双向图：

```js
class Node{
    constructor(id){
        this.id=id;
        this.neighbors=new Set();
    }
    connect(node){
        if (node!==this) {
            this.neighbors.add(node);
            node.neighbors.add(this);
        }
    }
}

class RandomGraph{
    constructor(size){
        this.nodes=new Set();
        //创建节点
        for (let i=0;i<size;++i){
            this.nodes.add(new Node(i));
        }
        // 随机连接节点
        const threshold=1/size;
        for (let x of this.nodes){
            for (let y of this.nodes){
                if (Math.random()<threshold) {
                    x.connect(y);
                }
            }
        }
    }
    // 这个方法仅用于调试
    print(){
        for (let node of this.nodes){
            let ids=[...node.neighbors].map((n)=>n.id).join(",");
            console.log(`${node.id}:${ids}`);
        }
    }
}

const g = new RandomGraph(6);
g.print();
/*
0:2,3
1:2,3
2:0,1,5,3
3:1,0,2
4:
5:2
*/
```

图数据结构非常适合递归遍历，而递归生成器恰好非常合用。为此，生成器函数必须接收一个可迭代对象，产出该对象中的每一个值，并且对每个值进行递归。这个实现可以用来测试某个图是否连通，即是否没有不可到达的节点。只要从一个节点开始，然后尽力访问每个节点就可以了。结果就得到了一个非常简洁的深度优先遍历：

```js
class Node{
    constructor(id){
        this.id=id;
        this.neighbors=new Set();
    }
    connect(node){
        if (node!==this) {
            this.neighbors.add(node);
            node.neighbors.add(this);
        }
    }
}

class RandomGraph{
    constructor(size){
        this.nodes=new Set();
        //创建节点
        for (let i=0;i<size;++i){
            this.nodes.add(new Node(i));
        }
        // 随机连接节点
        const threshold=1/size;
        for (let x of this.nodes){
            for (let y of this.nodes){
                if (Math.random()<threshold) {
                    x.connect(y);
                }
            }
        }
    }
    // 这个方法仅用于调试
    print(){
        for (let node of this.nodes){
            let ids=[...node.neighbors].map((n)=>n.id).join(",");
            console.log(`${node.id}:${ids}`);
        }
    }
    isConnected(){
        let visitedNodes=new Set();
        function *traverse(nodes){
            for (let node of nodes){
                if (!visitedNodes.has(node)) {
                    yield node;
                    yield* traverse(node.neighbors);
                }
            }
        }
        // 取得集合中的第一个节点
        let firstNode=this.nodes[Symbol.iterator]().next().value;
        //使用递归生成器迭代每个节点
        for (let node of traverse([firstNode])){
            visitedNodes.add(node);
        }
        return visitedNodes.size===this.nodes.size;
    }
}

const g = new RandomGraph(6);
g.print();
console.log(g.isConnected()); //false
/*
0:4
1:3
2:
3:1,5
4:0
5:3
*/
```

### 3.3 生成器作为默认迭代器

因为生成器对象实现了 Iterable 接口，而且生成器函数和默认迭代器被调用之后都产生迭代器，所以生成器格外适合作为默认迭代器。下面是一个简单的例子，这个类的默认迭代器可以用一行代码产出类的内容：

```js
class Foo {
    constructor() {
        this.values = [1, 2, 3];
    }
    * [Symbol.iterator]() {
        yield* this.values;
    }
}
const f = new Foo();
for (const x of f) {
    console.log(x);
}
// 1
// 2
// 3
```

这里，for-of 循环调用了默认迭代器（它恰好又是一个生成器函数）并产生了一个生成器对象。这个生成器对象是可迭代的，所以完全可以在迭代中使用。

### 3.4 提前终止生成器

与迭代器类似，生成器也支持“可关闭”的概念。一个实现 Iterator 接口的对象一定有 next()方法，还有一个可选的 return()方法用于提前终止迭代器。生成器对象除了有这两个方法，还有第三个方法：throw()。

```js
function* generatorFn() {}
const g = generatorFn();
console.log(g); // Object [Generator] {}
console.log(g.next); // [Function: next]
console.log(g.return); // [Function: return]
console.log(g.throw); // [Function: throw]
```

return()和 throw()方法都可以用于强制生成器进入关闭状态。

#### return()

**return()方法会强制生成器进入关闭状态**。提供给 return()方法的值，就是终止迭代器对象的值：

```js
function* generatorFn() {
    for (const x of [1, 2, 3]) {
        yield x;
    }
}
const g = generatorFn();
console.log(g); // generatorFn {<suspended>}
console.log(g.return(4)); // { done: true, value: 4 }
console.log(g); // generatorFn {<closed>}
```

与迭代器不同，**所有生成器对象都有 return()方法，只要通过它进入关闭状态，就无法恢复了**。后续调用 next()会显示 done: true 状态，而提供的任何返回值都不会被存储或传播：

```js
function* generatorFn() {
    for (const x of [1, 2, 3]) {
        yield x;
    }
}
const g = generatorFn();
console.log(g.next()); // { done: false, value: 1 }
console.log(g.return(4)); // { done: true, value: 4 }
console.log(g.next()); // { done: true, value: undefined }
console.log(g.next()); // { done: true, value: undefined }
console.log(g.next()); // { done: true, value: undefined }
```

for-of 循环等内置语言结构**会忽略状态为 done: true 的 IteratorObject 内部返回的值**。

```js
function* generatorFn() {
    for (const x of [1, 2, 3]) {
        yield x;
    }
}
const g = generatorFn();
for (const x of g) {
    if (x > 1) {
        g.return(4);
    }
    console.log(x);
}
// 1
// 2
```

#### throw()

throw()方法会在暂停的时候将一个提供的错误注入到生成器对象中。如果错误未被处理，生成器就会关闭：

```js
function* generatorFn() {
    for (const x of [1, 2, 3]) {
        yield x;
    }
}
const g = generatorFn();
console.log(g); // generatorFn {<suspended>}
try {
    g.throw('foo');
} catch (e) {
    console.log(e); // foo
}
console.log(g); // generatorFn {<closed>}
```

不过，**假如生成器函数内部处理了这个错误，那么生成器就不会关闭，而且还可以恢复执行**。错误处理会跳过对应的 yield，因此在这个例子中会跳过一个值。比如：

```js
function* generatorFn() {
    for (const x of [1, 2, 3]) {
        try {
            yield x;
        } catch(e) {}
    }
}
const g = generatorFn();
console.log(g.next()); // { done: false, value: 1}
g.throw('foo');
console.log(g.next()); // { done: false, value: 3}
```

在这个例子中，生成器在 try/catch 块中的 yield 关键字处暂停执行。在暂停期间，throw()方 法向生成器对象内部注入了一个错误：字符串"foo"。这个错误会被 yield 关键字抛出。因为错误是在 生成器的 try/catch 块中抛出的，所以仍然在生成器内部被捕获。可是，由于 yield 抛出了那个错误， 生成器就不会再产出值 2。此时，生成器函数继续执行，在下一次迭代再次遇到 yield 关键字时产出了 值 3。 

**注意** 如果生成器对象还没有开始执行，那么调用 throw()抛出的错误不会在函数内部被 捕获，**因为这相当于在函数块外部抛出了错误**。

