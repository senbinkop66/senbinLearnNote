



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
