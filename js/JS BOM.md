



# history 对象

history 对象表示当前窗口首次使用以来用户的导航历史记录。因为 history 是 window 的属性， 所以每个 window 都有自己的 history 对象。出于安全考虑，这个对象不会暴露用户访问过的 URL， 但可以通过它在不知道实际 URL 的情况下前进和后退。

Window.history是一个只读属性，用来获取History 对象的引用，History 对象提供了操作浏览器会话历史（浏览器地址栏中访问的页面，以及当前页面中通过框架加载的页面）的接口。

History对象有如下方法：参见 Manipulating the browser history 中的示例和详情。尤其指出的是文章里解释了在使用pushState()和replaceState() 方法前，你需要了解的安全问题。



**`History`** 接口允许操作浏览器的曾经在标签页或者框架里访问的会话历史记录。

## [属性](https://developer.mozilla.org/zh-CN/docs/Web/API/History#属性)

*`History`* *接口不继承于任何属性。*

- [`History.length`](https://developer.mozilla.org/zh-CN/docs/Web/API/History/length) 只读

  History.length 是一个只读属性，返回当前 session 中的 history 个数，包含当前页面在内。例如，在一个新的选项卡加载的一个页面中，这个属性返回 1。

  ```js
  var result = window.history.length; // 返回当前 session 中的 history 个数
  ```

  

- [`History.scrollRestoration`](https://developer.mozilla.org/zh-CN/docs/Web/API/History/scrollRestoration) 

  **`滚动恢复属性`**允许 web 应用程序在历史导航上显式地设置默认滚动恢复行为。此属性可以是自动的（auto）或者手动的（manual）。

  ```js
  const scrollRestore = history.scrollRestoration
  ```

  ### [值](https://developer.mozilla.org/zh-CN/docs/Web/API/History/scrollRestoration#值)

  - `auto`

    将恢复用户已滚动到的页面上的位置。

  - `manual`

    未还原页上的位置。用户必须手动滚动到该位置。

  ### [查看当前页面滚动恢复行为](https://developer.mozilla.org/zh-CN/docs/Web/API/History/scrollRestoration#查看当前页面滚动恢复行为)

  ```js
  const scrollRestoration = history.scrollRestoration
  if (scrollRestoration === 'manual') {
    console.log('The location on the page is not restored, user will need to scroll manually.');
  }
  ```

  ### [防止自动恢复页面位置](https://developer.mozilla.org/zh-CN/docs/Web/API/History/scrollRestoration#防止自动恢复页面位置)

  ```js
  if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
  }
  ```

- [`History.state`](https://developer.mozilla.org/zh-CN/docs/Web/API/History/state) 只读

  返回在 history 栈顶的 `任意` 值的拷贝。 通过这种方式可以查看 state 值，不必等待 `popstate`事件发生后再查看。

  如果不进行下面两种类型的调用，state 的值将会是 null 

  [`pushState()`](https://developer.mozilla.org/zh-CN/docs/Web/API/History/pushState) or [`replaceState()`](https://developer.mozilla.org/zh-CN/docs/Web/API/History/replaceState).

  下面 log 例句输出 history.state 的值，首先是在没有执行 [`pushState()`](https://developer.mozilla.org/zh-CN/docs/Web/API/History/pushState) 语句进而将值 push 到 history 之前的 log。下面一行 log 语句再次输出 state 值，此时 history.state 已经有值。可以在脚本文件中执行下面语句，或者在控制台直接执行。

  ```js
  // 值为 null 因为我们还没有修改 history 栈
  console.log(`History.state before pushState: ${history.state}`);
  
  // 现在 push 一些数据到栈里
  history.replaceState({name: 'Example'}, "pushState example", 'page3.html');
  
  // 现在 state 已经有值了
  console.log(`History.state after pushState: ${history.state}`);
  ```

## [方法](https://developer.mozilla.org/zh-CN/docs/Web/API/History#方法)

*History 接口不继承任何方法。*

- [`History.back()`](https://developer.mozilla.org/zh-CN/docs/Web/API/History/back)

  在浏览器历史记录里前往上一页，用户可点击浏览器左上角的返回 (译者注：←) 按钮模拟此方法。**等价于 `history.go(-1)`**.

  > **Note:** 当浏览器会话历史记录处于第一页时调用此方法没有效果，而且也不会报错。

- [`History.forward()`](https://developer.mozilla.org/zh-CN/docs/Web/API/History/forward)

  在浏览器历史记录里前往下一页，用户可点击浏览器左上角的前进 (译者注：→) 按钮模拟此方法。**等价于 `history.go(1)`**.

  > **Note:** 当浏览器历史栈处于最顶端时 ( 当前页面处于最后一页时 ) 调用此方法没有效果也不报错。

- [`History.go()`](https://developer.mozilla.org/zh-CN/docs/Web/API/History/go)

  **通过当前页面的相对位置从浏览器历史记录 ( 会话记录 ) 加载页面**。比如：参数为-1 的时候为上一页，参数为 1 的时候为下一页。当整数参数超出界限时 ( 译者注：原文为 When `*integerDelta*` is out of bounds )，例如：如果当前页为第一页，前面已经没有页面了，我传参的值为-1，那么这个方法没有任何效果也不会报错。**调用没有参数的 `go() `方法或者参数值为 0 时，重新载入当前页面。**( 这点与支持字符串作为 url 参数的 IE 有点不同)。

- [`History.pushState()`](https://developer.mozilla.org/zh-CN/docs/Web/API/History/pushState)

  按指定的名称和 URL（如果提供该参数）将数据 push 进会话历史栈，数据被 DOM 进行不透明处理；你可以指定任何可以被序列化的 javascript 对象。注意到 Firefox 现在忽略了这个 title 参数，更多的信息，请看[manipulating the browser history](https://developer.mozilla.org/zh-CN/docs/Web/API/History_API)。

  > **Note:** 在 Gecko 2.0 (Firefox 4 / Thunderbird 3.3 / SeaMonkey 2.1) 到 Gecko 5.0 (Firefox 5.0 / Thunderbird 5.0 / SeaMonkey 2.2)中， 被传递的对象使用 JSON 进行序列化。从 Gecko 6.0 (Firefox 6.0 / Thunderbird 6.0 / SeaMonkey 2.3)开始，使用[结构化克隆算法](https://developer.mozilla.org/en-US/DOM/The_structured_clone_algorithm)进行序列化。这样，就可以让更多类型的对象被安全地传输。

- [`History.replaceState()`](https://developer.mozilla.org/zh-CN/docs/Web/API/History/replaceState)

  **按指定的数据，名称和 URL(如果提供该参数)，更新历史栈上最新的入口**。这个数据被 DOM 进行了不透明处理。你可以指定任何可以被序列化的 javascript 对象。注意到 Firefox 现在忽略了这个 title 参数，更多的信息，请看[manipulating the browser history](https://developer.mozilla.org/zh-CN/docs/Web/API/History_API)。

## back()

`back()`方法会在会话历史记录中向后移动一页。如果没有上一页，则此方法调用不执行任何操作。

```
window.history.back()
```

```html
<button id="go-back">Go back!</button>
<script>
window.onload = function(e) {
  document.getElementById('go-back').addEventListener('click', e => {
    window.history.back();
  })
}
</script>
```

## forward()

在会话历史中向前移动一页。它与使用`delta`参数为 1 时调用 `history.go(delta)`的效果相同。

```
window.history.forward();
```

```html
<button id='go-forward'>Go Forward!</button>
<script>
window.onload = function(e) {
  document.getElementById('go-forward').addEventListener('click', e => {
    window.history.forward();
  })
}
</script>
```

## go()

`go()`方法从会话历史记录中加载特定页面。你可以使用它在历史记录中前后移动，具体取决于`delta`参数的值。

```
window.history.go(delta);
```

### 参数

- `delta` 可选

  相对于当前页面你要去往历史页面的位置。负值表示向后移动，正值表示向前移动。因此，例如：`history.go(2)`向前移动两页，`history.go(-2)`则向后移动两页。如果未向该函数传参或`delta`相等于 0，则该函数与调用`location.reload()`具有相同的效果。

> 相等于 0 是采用宽松相等进行比较的。另外，JavaScript 值古怪的隐式转换在这里也是可用的。

向后移动一页（等价于调用[`back()`](https://developer.mozilla.org/en-US/docs/Web/API/History/back)）：

```js
window.history.go(-1)
```

Copy to Clipboard向前移动一页，就像调用了`forward()`：

```js
window.history.go(1)
```

向前移动两页：

```js
window.history.go(2);
```

向后移动两页：

```js
window.history.go(-2);
```

最后，以下任意一条语句都会重新加载当前页面：

```js
window.history.go();
window.history.go(0);
```

## History.pushState()

在 [HTML](https://developer.mozilla.org/zh-CN/docs/Web/HTML) 文档中，**`history.pushState()`** 方法向当前浏览器会话的历史堆栈中添加一个状态（state）。

```
history.pushState(state, title[, url])
```

### 参数

#### state

状态对象是一个 JavaScript 对象，它与pushState()创建的新历史记录条目相关联。 每当用户导航到新状态时，都会触发popstate (en-US)事件，并且该事件的状态属性包含历史记录条目的状态对象的副本。
**状态对象可以是任何可以序列化的对象**。 因为 Firefox 将状态对象保存到用户的磁盘上，以便用户重新启动浏览器后可以将其还原，所以我们对状态对象的序列化表示施加了 2MiB 的大小限制。 如果将序列化表示形式大于此状态的状态对象传递给pushState()，则该方法将引发异常。 如果您需要更多空间，建议您使用 sessionStorage或者localStorage。

#### title

当前大多数浏览器都忽略此参数，尽管将来可能会使用它。 在此处传递空字符串应该可以防止将来对方法的更改。 或者，您可以为要移动的状态传递简短的标题。

#### url 可选

新历史记录条目的 URL 由此参数指定。 请注意，**浏览器不会在调用pushState() 之后尝试加载此 URL，但可能会稍后尝试加载 URL**，例如在用户重新启动浏览器之后。 新的 URL 不必是绝对的。 如果是相对的，则相对于当前 URL 进行解析。 新网址必须与当前网址相同 origin； 否则，pushState()将引发异常。 **如果未指定此参数，则将其设置为文档的当前 URL。**

### 描述

从某种程度来说，调用 `pushState()` 和 `window.location = "#foo"`基本上一样，他们都会在当前的 document 中创建和激活一个新的历史记录。但是 `pushState()` 有以下优势：

- **新的 URL 可以是任何和当前 URL 同源的 URL**。但是设置 [`window.location`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/location) 只会在你只设置锚的时候才会使当前的 URL。
- 非强制修改 URL。相反，设置 `window.location = "#foo";` 仅仅会在锚的值不是 #foo 情况下创建一条新的历史记录。
- 可以在新的历史记录中关联任何数据。`window.location = "#foo"`形式的操作，你只可以将所需数据写入锚的字符串中。

注意： `pushState()` 不会造成 `hashchange (en-US)` 事件调用，即使新的 URL 和之前的 URL 只是锚的数据不同。

以下代码通过设置`*state*`, `*title*`和`*url*`创建一条新的历史记录。

```js
const state = { 'page_id': 1, 'user_id': 5 }
const title = ''
const url = 'hello-world.html'

history.pushState(state, title, url)
```

## History.replaceState()

`replaceState()`方法使用`state objects`, `title`,和 `URL` 作为参数， 修改当前历史记录实体，如果你想更新当前的 state 对象或者当前历史实体的 URL 来响应用户的的动作的话这个方法将会非常有用。

```js
history.replaceState(stateObj, title[, url]);
```

### [参数](https://developer.mozilla.org/zh-CN/docs/Web/API/History/replaceState#参数)

- stateObj

  状态对象是一个 JavaScript 对象，它与传递给 `replaceState` 方法的历史记录实体相关联。

- title

  [大部分浏览器忽略这个参数](https://github.com/whatwg/html/issues/2174), 将来可能有用。在此处传递空字符串应该可以防止将来对方法的更改。或者，您可以为该状态传递简短标题

- url 可选

  历史记录实体的 URL. **新的 URL 跟当前的 URL 必须是同源**; 否则 replaceState 抛出一个异常。

### 例子

假设 http://mozilla.org/foo.html 执行下面的 JavaScript 代码：

```js
var stateObj = { foo: "bar" };
history.pushState(stateObj, "", "bar.html");
```

上面这两行的解释可以在 "Example of pushState() method"这个章节找到。然后假设 http://mozilla.org/bar.html 执行下面的 JavaScript 代码：

```js
history.replaceState(stateObj, "", "bar2.html");
```

这会让 URL 栏显示 http://mozilla.org/bar2.html，但是不会加载 `bar2.html` 页面，甚至不会检查 bar2.html 是否存在

假设用户跳转到 http://www.microsoft.com，然后点击返回按钮。这时，URL 栏将会显示 http://mozilla.org/bar2.html 页面。如果用户此时点击返回按钮，URL 栏将会显示 http://mozilla.org/foo.html 页面，最终绕过了 bar.html 页面。









----

# windows对象



# window.setTimeout

`WindowOrWorkerGlobalScope` 混合的 **`setTimeout()`**方法设置一个定时器，该定时器在定时器到期后执行一个函数或指定的一段代码。

## 语法

```js
var timeoutID = scope.setTimeout(function[, delay, arg1, arg2, ...]);
var timeoutID = scope.setTimeout(function[, delay]);
var timeoutID = scope.setTimeout(code[, delay]);
```

### 参数

- `function`

  [`function`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function) 是你想要在到期时间 (`delay`毫秒) 之后执行的[函数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function)。

- `code`

  这是一个可选语法，你可以使用字符串而不是[`function`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function) ，在`delay`毫秒之后编译和执行字符串 (使用该语法是**不推荐的，** 原因和使用 [`eval()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/eval)一样，有安全风险)。

- `delay` 可选

  延迟的毫秒数 (一秒等于 1000 毫秒)，函数的调用会在该延迟之后发生。**如果省略该参数，delay 取默认值 0，意味着“马上”执行，或者尽快执行。**不管是哪种情况，实际的延迟时间可能会比期待的 (delay 毫秒数) 值长，原因请查看[实际延时比设定值更久的原因：最小延迟时间](https://developer.mozilla.org/zh-CN/docs/Web/API/setTimeout#实际延时比设定值更久的原因：最小延迟时间)。

- `arg1, ..., argN` 可选

  附加参数，一旦定时器到期，它们会作为参数传递给[`function`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function)

### 返回值

**返回值`timeoutID`是一个正整数，表示定时器的编号**。这个值可以传递给[`clearTimeout()`](https://developer.mozilla.org/zh-CN/docs/Web/API/clearTimeout)来取消该定时器。

需要注意的是 `setTimeout()` 和 [`setInterval()`](https://developer.mozilla.org/zh-CN/docs/Web/API/setInterval) **共用一个编号池**，技术上，`clearTimeout()` 和 [`clearInterval()`](https://developer.mozilla.org/zh-CN/docs/Web/API/clearInterval) 可以互换。但是，为了避免混淆，不要混用取消定时函数。

在同一个对象上（一个 window 或者 worker），`setTimeout()`或者`setInterval()`在后续的调用不会重用同一个定时器编号。但是不同的对象使用独立的编号池。

## 例子

下文的例子在网页中设置了两个简单的按钮，以触发 `setTimeout()` 和 `clearTimeout()` 方法：按下第一个按钮会设置一个定时器，定时器在 2s 后显示一个警告对话框，并将此次 setTimeout 的定时器 ID 保存起来，按下第二个按钮可以取消定时器。

HTML

```html
<p>Live Example</p>
<button onclick="delayedAlert();">Show an alert box after two seconds</button>
<p></p>
<button onclick="clearAlert();">Cancel alert before it happens</button>
```



JavaScript

```js
var timeoutID;

function delayedAlert() {
  timeoutID = window.setTimeout(slowAlert, 2000);
}

function slowAlert() {
  alert('That was really slow!');
}

function clearAlert() {
  window.clearTimeout(timeoutID);
}
```

## 兼容旧环境（polyfill）

如果你需要向你的回调函数内传递一个或多个参数，而且还需要兼容那些不支持传递额外参数 (不管使用`setTimeout()` 或者 `setInterval()`) 的浏览器时 (比如，IE9 及更早的版本), 你可以引入下面的兼容代码来支持向定时器函数传参。将以下代码添加到你代码的最上面：

```js
/*\
|*|
|*|  Polyfill which enables the passage of arbitrary arguments to the
|*|  callback functions of JavaScript timers (HTML5 standard syntax).
|*|
|*|  https://developer.mozilla.org/en-US/docs/DOM/window.setInterval
|*|
|*|  Syntax:
|*|  var timeoutID = window.setTimeout(func, delay[, param1, param2, ...]);
|*|  var timeoutID = window.setTimeout(code, delay);
|*|  var intervalID = window.setInterval(func, delay[, param1, param2, ...]);
|*|  var intervalID = window.setInterval(code, delay);
|*|
\*/

(function() {
  setTimeout(function(arg1) {
    if (arg1 === 'test') {
      // feature test is passed, no need for polyfill
      return;
    }
    var __nativeST__ = window.setTimeout;
    window.setTimeout = function(vCallback, nDelay /*, argumentToPass1, argumentToPass2, etc. */ ) {
      var aArgs = Array.prototype.slice.call(arguments, 2);
      return __nativeST__(vCallback instanceof Function ? function() {
        vCallback.apply(null, aArgs);
      } : vCallback, nDelay);
    };
  }, 0, 'test');

  var interval = setInterval(function(arg1) {
    clearInterval(interval);
    if (arg1 === 'test') {
      // feature test is passed, no need for polyfill
      return;
    }
    var __nativeSI__ = window.setInterval;
    window.setInterval = function(vCallback, nDelay /*, argumentToPass1, argumentToPass2, etc. */ ) {
      var aArgs = Array.prototype.slice.call(arguments, 2);
      return __nativeSI__(vCallback instanceof Function ? function() {
        vCallback.apply(null, aArgs);
      } : vCallback, nDelay);
    };
  }, 0, 'test');
}())

```



### 变通方法

另一种方法是使用匿名函数包裹你的回调函数，这种方式要消耗更多资源：

```js
var intervalID = setTimeout(function() { myFunc('one', 'two', 'three'); }, 1000);
```

上面那个例子也可以用[箭头函数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions):

```js
var intervalID = setTimeout(() => { myFunc('one', 'two', 'three'); }, 1000);
```



此外，也可使用 [function's bind](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)：

```js
setTimeout(function(arg1){}.bind(undefined, 10), 1000);
```



## 关于"`this`"的问题

当你向 `setTimeout()` (或者其他函数) 传递一个函数时，该函数中的`this`指向跟你的期望可能不同，这个问题在 [JavaScript reference](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/this#method_binding) 中进行了详细解释。

### 解释

由`setTimeout()`调用的代码运行在与所在函数完全分离的执行环境上。这会导致，**这些代码中包含的 `this` 关键字在非严格模式会指向 `window` (或全局) 对象，严格模式下为 undefined**，这和所期望的`this`的值是不一样的。

> **备注：** 即使是在严格模式下，`setTimeout()`的回调函数里面的`this`仍然默认指向`window`对象， 并不是`undefined`。

查看下面的例子：

```js
let myArray = ["zero", "one", "two"];
myArray.myMethod = function (sProperty) {
    alert(arguments.length > 0 ? this[sProperty] : this);
};

myArray.myMethod(); // prints "zero,one,two"
myArray.myMethod(1); // prints "one"
```



上面这段代码正常工作，用`myArray`调用，在函数内，`this[sProperty]`等于 `myArray[sProperty]`。然后，下面这个例子：

```js
setTimeout(myArray.myMethod, 1000); // prints "[object Window]" after 1 second
setTimeout(myArray.myMethod, 1500, "1"); // prints "undefined" after 1.5 seconds
```



`myArray.myMethod`函数传递给 `setTimeout`，到了定时时间，`this`没有指向，默认指向`window`对象。并且没有方法把 `thisArg` 传递给`setTimeout`，正如 Array 方法的`forEach`，`reduce`等。下面的例子**表示使用`call`方法设置`this`也没用**。

```js
setTimeout.call(myArray, myArray.myMethod, 2000); // error: "NS_ERROR_XPC_BAD_OP_ON_WN_PROTO: Illegal operation on WrappedNative prototype object"
setTimeout.call(myArray, myArray.myMethod, 2500, 2); // same error
```

### 可能的解决方案

一个通用的方法是**用包装函数来设置`this`**：

```js
setTimeout(function(){myArray.myMethod()}, 2000); // prints "zero,one,two" after 2 seconds
setTimeout(function(){myArray.myMethod('1')}, 2500); // prints "one" after 2.5 seconds
```



箭头函数也可以：

```js
setTimeout(() => {myArray.myMethod()}, 2000); // prints "zero,one,two" after 2 seconds
setTimeout(() => {myArray.myMethod('1')}, 2500); // prints "one" after 2.5 seconds
```



另一个解决`this`问题的方法是使用两个非原生的 `setTimeout()` 和 `setInterval()` 全局函数代替原生的。该非原生的函数通过使用[`Function.prototype.call`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call) 方法激活了正确的作用域。下面的代码显示了应该如何替换：

```js
// Enable the passage of the 'this' object through the JavaScript timers

var __nativeST__ = window.setTimeout, __nativeSI__ = window.setInterval;

window.setTimeout = function (vCallback, nDelay /*, argumentToPass1, argumentToPass2, etc. */) {
  var oThis = this, aArgs = Array.prototype.slice.call(arguments, 2);
  return __nativeST__(vCallback instanceof Function ? function () {
    vCallback.apply(oThis, aArgs);
  } : vCallback, nDelay);
};

window.setInterval = function (vCallback, nDelay /*, argumentToPass1, argumentToPass2, etc. */) {
  var oThis = this, aArgs = Array.prototype.slice.call(arguments, 2);
  return __nativeSI__(vCallback instanceof Function ? function () {
    vCallback.apply(oThis, aArgs);
  } : vCallback, nDelay);
};
```

新特性检测：

```js
let myArray = ["zero", "one", "two"];
myArray.myMethod = function (sProperty) {
    alert(arguments.length > 0 ? this[sProperty] : this);
};

setTimeout(alert, 1500, "Hello world!"); // the standard use of setTimeout and setInterval is preserved, but...
setTimeout.call(myArray, myArray.myMethod, 2000); // prints "zero,one,two" after 2 seconds
setTimeout.call(myArray, myArray.myMethod, 2500, 2); // prints "two" after 2,5 seconds
```



针对这个问题并没有原生的解决方案。

使用`bind()`的例子：

```js
let myArray = ['zero', 'one', 'two'];
myBoundMethod = (function (sProperty) {
    console.log(arguments.length > 0 ? this[sProperty] : this);
}).bind(myArray);

myBoundMethod(); // prints "zero,one,two" because 'this' is bound to myArray in the function
myBoundMethod(1); // prints "one"
setTimeout(myBoundMethod, 1000); // still prints "zero,one,two" after 1 second because of the binding
setTimeout(myBoundMethod, 1500, "1"); // prints "one" after 1.5 seconds
```



## 备注

你可以使用 [`clearTimeout()`](https://developer.mozilla.org/zh-CN/docs/Web/API/clearTimeout)来取消定时器。

如果你希望你的代码被重复的调用 (比如每 N 毫秒一次),考虑使用[`setInterval()`](https://developer.mozilla.org/zh-CN/docs/Web/API/setInterval)。



### 传递字符串字面量

向`setTimeout()`传递一个字符串而不是函数会遭受到与使用[`eval`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval#don.27t_use_eval.21)一样的风险。

```js
// 推荐
window.setTimeout(function() {
    alert("Hello World!");
}, 500);

// 不推荐
window.setTimeout("alert(\"Hello World!\");", 500);
```



字符串会在全局作用域内被解释执行，所以当`setTimeout()`函数执行完毕后，字符串中的变量不可用。

### 实际延时比设定值更久的原因：最小延迟时间

有很多因素会导致 setTimeout 的回调函数执行比设定的预期值更久，本节将讨论最常见的原因。

#### 最小延时 >=4ms

在浏览器中，`setTimeout()`/[`setInterval()`](https://developer.mozilla.org/zh-CN/docs/Web/API/setInterval) 的每调用一次定时器的最小间隔是 4ms，**这通常是由于函数嵌套导致（嵌套层级达到一定深度），或者是由于已经执行的 setInterval 的回调函数阻塞导致的**。例如：

```js
function cb() { f(); setTimeout(cb, 0); }
setTimeout(cb, 0);
```



```js
setInterval(f, 0);
```



在 Chrome 和 Firefox 中， 定时器的第 5 次调用被阻塞了；在 Safari 是在第 6 次；Edge 是在第 3 次。Gecko 从这个版本 [version 56 (en-US)](https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/56)开始对 `setInterval()` 开始采用这样的机制（`setTimeout()`已经实现，具体请参考以下内容)。

一直以来，不同浏览器中出现这种最小延迟的情况有所不同（例如 Firefox）- 从其他地方调用了 setInterval()，或者在嵌套函数调用 setTimeout() 时（嵌套级别达到特定深度时），都会出现超时延迟。

如果想在浏览器中实现 0ms 延时的定时器，你可以参考[这里](https://dbaron.org/log/20100309-faster-timeouts)所说的 [`window.postMessage()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/postMessage)

```js
(function() {
        var timeouts = [];
        var messageName = "zero-timeout-message";

        // Like setTimeout, but only takes a function argument.  There's
        // no time argument (always zero) and no arguments (you have to
        // use a closure).
        function setZeroTimeout(fn) {
            timeouts.push(fn);
            window.postMessage(messageName, "*");
        }

        function handleMessage(event) {
            if (event.source == window && event.data == messageName) {
                event.stopPropagation();
                if (timeouts.length > 0) {
                    var fn = timeouts.shift();
                    fn();
                }
            }
        }

        window.addEventListener("message", handleMessage, true);

        // Add the one thing we want added to the window object.
        window.setZeroTimeout = setZeroTimeout;
    })();
```



#### 未被激活的 tabs 的定时最小延迟>=1000ms

为了优化后台 tab 的加载损耗（以及降低耗电量），在未被激活的 tab 中定时器的最小延时限制为 1S(1000ms)。

Firefox 从 version 5 (see [bug 633421](https://bugzilla.mozilla.org/show_bug.cgi?id=633421)开始采取这种机制，1000ms 的间隔值可以通过 `dom.min_background_timeout_value` 改变。Chrome 从 version 11 ([crbug.com/66078](https://crbug.com/66078)) 开始采用。

Android 版的 Firefox 对未被激活的后台 tabs 的使用了 15min 的最小延迟间隔时间 ，并且这些 tabs 也能完全不被加载。

#### 追踪型脚本的最小延时限制

从 Firefox 55 版本开始，追踪型脚本（例如 谷歌分析，或者其他的一些被 Firefox 的 [TP lists](https://wiki.mozilla.org/Security/Tracking_protection#Lists) 识别为追踪型脚本的 外链 URL 脚本）是重点限制加载的对象。在当前正在使用的页面中，这个节流限制的延时依然是 4ms。但是在后台 tabs 中，这个最小延时限制是 10000ms（10s）,这个限制会在文档第一次加载后的 30s 后生效。

控制这些行为的属性包含以下这些：

- `dom.min_tracking_timeout_value`: 4
- `dom.min_tracking_background_timeout_value`: 10000
- `dom.timeout.tracking_throttling_delay`: 30000

#### 超时延迟

除了"最小延时"之外，定时器仍然有可能因为当前页面（或者操作系统/浏览器本身）被其他任务占用导致延时。 需要被强调是， 直到调用 `setTimeout()`的主线程执行完其他任务之后，回调函数和代码段才能被执行。例如：

```js
function foo() {
  console.log('foo has been called');
}
setTimeout(foo, 0);
console.log('After setTimeout');
```

会在控制台输出：

```
After setTimeout
foo has been called
```

出现这个结果的原因是，尽管`setTimeout` 以 0ms 的延迟来调用函数，**但这个任务已经被放入了队列中并且等待下一次执行**；并不是立即执行；队列中的等待函数被调用之前，当前代码必须全部运行完毕，因此这里运行结果并非预想的那样。

### WebExtension Background pages 和定时器

在 [WebExtension](https://developer.mozilla.org/zh-CN/docs/Mozilla/Add-ons/WebExtensions) 中 background pages，timers 工作不正常。这主要因为 background pages 实际上，并不是一次性全部加载：如果浏览器没有使用它，就不加载，如果需要就恢复。这对于 WebExtension 是透明的，但是有些事件 (包括 JS 的 timers) 不会在不加载/恢复循环中执行，所以 WebExtension 中建议使用 alarms。更详细的细节在[合并到事件驱动后台脚本](https://developer.chrome.com/extensions/background_migration)。

### [最大延时值](https://developer.mozilla.org/zh-CN/docs/Web/API/setTimeout#最大延时值)

包括 IE、Chrome、Safari、Firefox 在内的浏览器其内部以 32 位带符号整数存储延时。这就会导致如果一个延时 (delay) 大于 2147483647 毫秒 (大约 24.8 天) 时就会溢出，导致定时器将会被立即执行。
