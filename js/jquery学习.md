# jQuery 

jQuery 是一个高效、精简并且功能丰富的 JavaScript 工具库。它提供的 API 易于使用且兼容众多浏览器，这让诸如 HTML 文档遍历和操作、事件处理、动画和 Ajax 操作更加简单。

jQuery是一个轻量级的"写的少，做的多"的JavaScript库。

# 安装

## 下载 jQuery

有两个版本的 jQuery 可供下载：

- Production version - 用于实际的网站中，已被精简和压缩。
- Development version - 用于测试和开发（未压缩，是可读的代码）

以上两个版本都可以从 https://www.bootcdn.cn/jquery/ 中下载。

jQuery 库是一个 JavaScript 文件，您可以使用 HTML 的 `<script>` 标签引用它：

```html
<script src="./jquery-3.6.0.js"></script>
```

## 替代方案

如果您不希望下载并存放 jQuery，那么也可以通过 CDN（内容分发网络） 引用它。

Staticfile CDN、百度、又拍云、新浪、谷歌和微软的服务器都存有 jQuery 。

如果你的站点用户是国内的，建议使用百度、又拍云、新浪等国内CDN地址，如果你站点用户是国外的可以使用谷歌和微软。

如需从 Staticfile CDN、又拍云、新浪、谷歌或微软引用 jQuery，请使用以下代码之一：

```html
<script src="https://cdn.staticfile.org/jquery/1.10.2/jquery.min.js"></script>
<script src="https://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js"></script>
<script src="https://upcdn.b0.upaiyun.com/libs/jquery/jquery-2.0.2.min.js"></script>
<script src="https://lib.sinaapp.com/js/jquery/2.0.2/jquery-2.0.2.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script src="https://ajax.aspnetcdn.com/ajax/jquery/jquery-1.9.0.min.js"></script>
```

许多用户在访问其他站点时，已经从百度、又拍云、新浪、谷歌或微软加载过 jQuery。所以结果是，当他们访问您的站点时，会从缓存中加载 jQuery，这样可以减少加载时间。同时，大多数 CDN 都可以确保当用户向其请求文件时，会从离用户最近的服务器上返回响应，这样也可以提高加载速度。

# Ajax

jQuery 库支持完整的 Ajax 操作。这里所包含的所有函数和方法用于从服务端加载数据，并且不会导致页面刷新。

## 全局 Ajax 事件处理器

这些方法用于注册事件处理器，用来处理页面上的任何 Ajax 请求，当某些事件触发后，这些事件处理器被调用。如何 [`jQuery.ajaxSetup()`](https://www.jquery123.com/jQuery.ajaxSetup/) 中的 `global` 属性被设置为 `true` （这也是默认设置），那么，每个 Ajax 请求都会触发全局事件。

> *注意：全局事件绝对不会被跨域（cross-domain）脚本或 JSONP 请求触发，和 `global` 属性的设置毫无关系。*

------

### .ajaxComplete()

```js
//描述:当Ajax请求完成后注册一个回调函数。
.ajaxComplete( handler(event, XMLHttpRequest, ajaxOptions) )
```



每当一个Ajax请求完成，jQuery就会触发`ajaxComplete`事件，在这个时间点所有处理函数会使用`.ajaxComplete()`方法注册并执行。

观察活动中的这种方法，建立一个基本的Ajax加载请求：

```html
<div class="trigger">Trigger</div>
<div class="result"></div>
<div class="log"></div>
<script type="text/javascript">
  //在document上绑定事件处理器：
  $(document).ajaxComplete(function(){
    $(".log").text("Triggered ajaxComplete handler.");
  });

  //现在，我们可以使用任何的jQuery方法构建一个Ajax请求：
  $(".trigger").click(function(){
    $(".result").load("./ajax/testAjax.html");
  });

</script>
```

当我们点击class为 `trigger` 的元素并且Ajax请求完成，这个信息就会显示。

**但是从 jQuery 1.8 开始, `.ajaxComplete()` 方法只能绑定到 `document`元素.**

**注，这段在官网的原文中已经被删除:** 因为`.ajaxComplete()` 是作为一个jQuery对象实例方法去执行的，回调函数中，我们可以用`this`关键字作为指定的元素。

无论哪一个Ajax请求被完成，所有`ajaxComplete`处理函数都将被执行。如果我们必须区分不同的请求,我们可以使参数传递给这个处理函数。 他是通过事件对象， `XMLHttpRequest` 对象和设置对象中使用的请求，做每一次`ajaxComplete` 处理器执行的。举个例子,我们能限制我们的回调到只处理事件处理某一特定的URL:

```js
  //在document上绑定事件处理器：
  $(document).ajaxComplete(function(event,xhr,settings){
    if (settings.url==="./ajax/testAjax.html") {
      $(".log").text("Triggered ajaxComplete handler."+xhr.responseHTML);
    }
  });

  //现在，我们可以使用任何的jQuery方法构建一个Ajax请求：
  $(".trigger").click(function(){
    $(".result").load("./ajax/testAjax.html");
  });
```

**注意:** 你可以得到返回的AJAX内容 察看XML和HTML的`xhr.responseXML` 或 `xhr.responseHTML` 之间的分别。

> 其他注意事项：如果`global`选项设置为`false`，调用`$.ajax()` 或 `$.ajaxSetup()`,`.ajaxComplete()`方法将不会被触发。

*当Ajax请求完成后显示一个信息。*

```js
$(document).ajaxComplete(function(event,request, settings) {
 $( "#msg" ).append( "<li>Request Complete.</li>" );
 });

```

------

### .ajaxError()

```js
//描述: Ajax请求出错时注册一个回调处理函数，这是一个 Ajax Event。
.ajaxError( handler(event, jqXHR, ajaxSettings, thrownError) )
```

当一个Ajax请求出错时，jQuery就会触发`ajaxError`事件，在这个时间点所有处理函数会使用`.ajaxError()`方法注册并执行。

> **注意:**这里的handler处理器调用跨域的脚本和跨域的JSONP请求。

```html
<!--观察这种方法，建立一个基本的Ajax加载请求：-->
<button class="trigger">Trigger</button>
<div class="result"></div>
<div class="log"></div>
<script type="text/javascript">
  //在document上绑定事件处理器：
  $(document).ajaxError(function(){
    $("div.log").text( "Triggered ajaxError handler." );
  });

  //现在，我们可以使用任何的jQuery方法构建一个Ajax请求：
  $("button.trigger").click(function(){
    $(".result").load("./ajax/missing.html");
  });

</script>
```

当用户点击按钮并且Ajax请求失败，因为所请求的文件不存在，这个信息就会显示。

无论哪一个Ajax请求被完成，所有`ajaxError`处理器都将被执行。如果我们必须区分不同的请求,我们可以使参数传递给这个处理器。 他是通过事件对象、 `XMLHttpRequest` 对象和设置对象中使用的请求，每次`ajaxError` 处理器执行，它传递事件对象，`jqXHR`对象（在 jQuery 1.5之前是`XHR`对象），和用来创建请求的设置（settings）对象。如果请求失败，因为JavaScript抛出一个异常，并且作为第四个参数的异常对象被传递给处理函数。举个例子,我们能限制我们的回调到只处理事件处理某一特定的URL:

```js
  //在document上绑定事件处理器：
  $(document).ajaxError(function(event,jqxhr,settings,exception){
     if (settings.url==="./ajax/missing.html") {
      $(".log").text("Triggered ajaxError handler."+exception);
    }
  });

  //现在，我们可以使用任何的jQuery方法构建一个Ajax请求：
  $("button.trigger").click(function(){
    $(".result").load("./ajax/missing.html");
  });
```

------

### .ajaxSend()

```js
.ajaxSend( handler(event, jqXHR, ajaxOptions) )
//描述: 在Ajax请求发送之前绑定一个要执行的函数
```

每当一个Ajax请求即将发送，jQuery就会触发`ajaxSend`事件，在这个时间点所有处理函数都会使用`.ajaxSend()`方法注册并执行。

```html
<button class="trigger">Trigger</button>
<div class="result"></div>
<div class="log"></div>

<script type="text/javascript">
  //在document上绑定事件处理器：
  $(document).ajaxSend(function(event,jqxhr,settings){
     if (settings.url==="./ajax/testAjax.html") {
      $(".log").text("Triggered ajaxSend handler.");
    }
  });

  //现在，我们可以使用任何的jQuery方法构建一个Ajax请求：
  $("button.trigger").click(function(){
    $(".result").load("./ajax/testAjax.html");
  });

</script>
```

当我们点击class为 `trigger` 的元素并且Ajax请求即将开始，这个信息就会显示。

------

### .ajaxStart()

```js
.ajaxStart( handler() )
//描述: 在AJAX 请求刚开始时执行一个处理函数。
```

每当一个Ajax请求即将发送，jQuery检查是否有任何其他响应过程中的Ajax请求（注：未完成的请求）。如果没有检查到，jQuery就会触发`ajaxStart`事件，在这个时间点所有处理函数都会使用`.ajaxStart()`方法注册并执行。

```js
  //在document上绑定事件处理器：
  $(document).ajaxStart(function(){
    $(".log").text("Triggered ajaxStart handler.");
  });

  //现在，我们可以使用任何的jQuery方法构建一个Ajax请求：
  $("button.trigger").click(function(){
    $(".result").load("./ajax/testAjax.html");
  });
```

------

### .ajaxStop()

```js
.ajaxStop( handler() )
//描述: 在AJAX 请求完成时执行一个处理函数。
```

每当一个Ajax请求完成，jQuery检查是否有任何其他响应过程中的Ajax请求（注：未完成的请求）。如果都执行完成，jQuery就会触发`ajaxStop`事件，在这个时间点所有处理函数都会使用`.ajaxStop()`方法注册并执行。如果一个未处理完成的Ajax请求用`beforeSend`回调函数返回`false`取消，`ajaxStop`事件也被触发

```js
  //在document上绑定事件处理器：
  $(document).ajaxStop(function(){
    $(".log").text("Triggered ajaxStop handler.");
  });
```

------

### .ajaxSuccess()

```js
.ajaxSuccess( handler(event, XMLHttpRequest, ajaxOptions) )
//描述: 绑定一个函数当 Ajax 请求成功完成时执行。
```

每当一个Ajax请求成功完成，jQuery就会触发`ajaxSuccess`事件，在这个时间点所有处理函数都会使用`.ajaxSuccess()`方法注册并执行。

```js
  //在document上绑定事件处理器：
  $(document).ajaxSuccess(function(){
    $(".log").text("Triggered ajaxSuccess handler.");
  });

  //现在，我们可以使用任何的jQuery方法构建一个Ajax请求：
  $("button.trigger").click(function(){
    $(".result").load("./ajax/testAjax.html");
  });
```

------



## 辅助函数

这些函数用于辅助完成Ajax任务。

------

### jQuery.param()

```js
jQuery.param( obj )
//描述: 创建一个数组或对象序列化的的字符串，适用于一个URL 地址查询字符串或Ajax请求。
```

这个函数 可以将表单元素的值 转换为 序列化字符串 

如果传递的对象是一个数组，它必须是一个对象数组，其格式要跟[.serializeArray()](https://www.jquery123.com/serializeArray)返回的格式一样：

```js
[{name:"first",value:"Rick"},
{name:"last",value:"Astley"},
{name:"job",value:"Rock Star"}]
```

> **注意:** 因为一些框架解析序列化的数字的能力有限， 在传递 `obj` 参数时我们应该谨慎，尽量不要传递含有对象的数组，或者数组中嵌套其它数组。

> **注意:** 由于目前对序列化字符串没有统一的规约，此方法无法对复杂数据结构进行编码，使之可以支持所有语言。 在此之前， `$.param` 方法将继续保持其目前的形式。

我们可以显示一个对象的查询字符串 和一个相应的URI-decoded 版本，如下:

```js
var myObject = {
  a: {
    one: 1, 
    two: 2, 
    three: 3
  }, 
  b: [1,2,3]
};

var recursiveEncoded=$.param(myObject);
var recursiveDecoded=decodeURIComponent($.param(myObject));

console.log(recursiveEncoded);  //a%5Bone%5D=1&a%5Btwo%5D=2&a%5Bthree%5D=3&b%5B%5D=1&b%5B%5D=2&b%5B%5D=3
console.log(recursiveDecoded);  //a[one]=1&a[two]=2&a[three]=3&b[]=1&b[]=2&b[]=3
```

序列化一个 key/value 对象*

```js
  var params = { width:1680, height:1050 };
  var str=$.param(params);
  console.log(str);  //width=1680&height=1050
```

------

### .serialize()

```js
.serialize()
//描述: 将用作提交的表单元素的值编译成字符串。这个方法不接受任何参数。
```

`.serialize()` 方法使用标准的 URL-encoded 符号上建立一个文本字符串. 它可以对一个代表一组表单元素的 jQuery 对象进行操作，比如`<input>`, `<textarea>`, 和 `<select>`: `$( "input, textarea, select" ).serialize();`：

`<form>` 序列化很容易：

```js
$( "form" ).on( "submit", function( event ) {
  event.preventDefault();
  console.log( $( this ).serialize() );
});
```

在这种情况下，jQuery成功的控制表单的序列化。只有`form`元素检查它们所包含的输入框，在所有其他情况下，输入元素要序列化应该是集合的一部分传递给`.serialize()`方法。选择集合中表单和它子元素在序列化的字符串会导致重复。

**注意**: 只有 ["successful controls"](http://www.w3.org/TR/html401/interact/forms.html#h-17.13.2)可以被序列化成字符串。其中，提交按钮的值不会被序列化。另外，如果想要一个表单元素的值被序列化成字符串，这个元素必须含有 `name` 属性。此外，复选框（checkbox）和单选按钮（radio）(`input` 类型为 "radio" 或 "checkbox")的值只有在被选中时才会被序列化。另外，文件选择元素的数据也不会被序列化。

*把一个表单序列化成一个查询字符串，使之能够在一个Ajax请求中发送。*

```html
<form>
  <select name="single">
    <option>Single</option>
    <option>Single2</option>
  </select>
 
  <br />
  <select name="multiple" multiple="multiple">
    <option selected="selected">Multiple</option>
    <option>Multiple2</option>
    <option selected="selected">Multiple3</option>
  </select>
  <br/>
  <input type="checkbox" name="check" value="check1" id="ch1"/>
 
  <label for="ch1">check1</label>
 
  <input type="checkbox" name="check" value="check2" checked="checked" id="ch2"/>
 
  <label for="ch2">check2</label>
  <br />
  <input type="radio" name="radio" value="radio1" checked="checked" id="r1"/>
 
  <label for="r1">radio1</label>
  <input type="radio" name="radio" value="radio2" id="r2"/>
 
  <label for="r2">radio2</label><br>
  user name:<input type="text" name="user"><br>
  password:<input type="password" name="pass"><br>
  <input type="submit" name="Submit">
</form>

<script type="text/javascript">

$( "form" ).on( "submit", function( event ) {
  event.preventDefault();
  console.log( $( this ).serialize() );
  //single=Single&multiple=Multiple&multiple=Multiple3&check=check2&radio=radio1&user=kop&pass=123456
});

</script>
```

------

### .serializeArray()

```js
.serializeArray()
//描述: 将用作提交的表单元素的值编译成拥有name和value对象组成的数组。例如[ { name: a value: 1 }, { name: b value: 2 },...]
```

`.serializeArray()` 方法创建一个对象组成的javascript数组，用来编码成一个JSON一样的字符串。 它可以对一个代表一组表单元素的 jQuery 对象进行操作。表单元素可以有以下几种类型：

```html
<form>
  <div><input type="text" name="a" value="1" id="a" /></div>
  <div><input type="text" name="b" value="2" id="b" /></div>
  <div><input type="hidden" name="c" value="3" id="c" /></div>
  <div>
    <textarea name="d" rows="8" cols="40">4</textarea>
  </div>
  <div><select name="e">
    <option value="5" selected="selected">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
  </select></div>
  <div>
    <input type="checkbox" name="f" value="8" id="f" />
  </div>
  <div>
    <input type="submit" name="g" value="Submit" id="g" />
  </div>
</form>
```

`.serializeArray()`方法使用标准的W3C["successful controls"](http://www.w3.org/TR/html401/interact/forms.html#h-17.13.2)的标准来检测哪些元素应当包括在内。被禁用的元素不会被包括在内。并且,元素必须含有 `name` 属性。此外，提交按钮的值也不会被序列化。文件选择元素的数据也不会被序列化。

`.serializeArray()` 方法可以对单独选择的表单元素对象进行操作， 比如 `<input>`, `<textarea>`, 和 `<select>`。还有个更方便的方法是，直接使用 `<form>` 标签来进行序列化操作：

```js
$('form').submit(function() {
  console.log($(this).serializeArray());
  return false;
});
/*
0: {name: 'single', value: 'Single'}
1: {name: 'multiple', value: 'Multiple'}
2: {name: 'multiple', value: 'Multiple3'}
3: {name: 'check', value: 'check2'}
4: {name: 'radio', value: 'radio1'}
5: {name: 'user', value: 'kop'}
6: {name: 'pass', value: '123456'}
length: 7
*/
```

-------

## 底层接口

这些函数可以用于发起任意Ajax请求。

------

### jQuery.ajax()

```js
jQuery.ajax( url [, settings ] )
//说明: 执行一个异步的HTTP（Ajax）的请求。
```

jQuery 发送的所有 Ajax 请求，内部都会通过调用 `$.ajax()` 函数来实现。通常没有必要直接调用这个函数，可以使用几个已经封装的简便方法，如[`$.get()`](https://www.jquery123.com/jQuery.get)和[`.load()`](https://www.jquery123.com/load)。如果你需要用到那些不常见的选项，那么， `$.ajax()`使用起来更灵活。

>- 由于浏览器的安全限制，大多数“Ajax”的要求，均采用[同一起源的政策](http://en.wikipedia.org/wiki/Same_origin_policy) ;该请求不能成功地检索来自不同的域，子域或协议的数据。
>
>- Script和JSONP形式请求不受同源策略的限制。

*保存数据到服务器，成功时显示信息。*

```js
$.ajax({
  type: "POST",
  url: "some.php",
  data: { name: "John", location: "Boston" }
}).done(function( msg ) {
  alert( "Data Saved: " + msg );
});
```

*装入一个 HTML 网页最新版本。*

```js
$.ajax({
  url: "test.html",
  cache: false
}).done(function( html ) {
  $("#results").append(html);
});
```

*发送 XML 数据至服务器。设置 processData 选项为 `false`，防止自动转换数据格式。*

```js
var xmlDocument = [create xml document];
var xmlRequest = $.ajax({
  url: "page.php",
  processData: false,
  data: xmlDocument
});
 
xmlRequest.done(handleResponse);
```

*发送id作为数据发送到服务器， 保存一些数据到服务器上， 并通一旦它的完成知用户。  如果请求失败，则提醒用户。*

```js
var menuId = $("ul.nav").first().attr("id");
var request = $.ajax({
  url: "script.php",
  type: "POST",
  data: {id : menuId},
  dataType: "html"
});
 
request.done(function(msg) {
  $("#log").html( msg );
});
 
request.fail(function(jqXHR, textStatus) {
  alert( "Request failed: " + textStatus );
});
```

*载入并执行一个JavaScript文件.*

```js
$.ajax({
  type: "GET",
  url: "test.js",
  dataType: "script"
});
```

------

### jQuery.ajaxPrefilter()

```js
jQuery.ajaxPrefilter( [dataTypes ], handler(options, originalOptions, jqXHR) )
//描述: 在每个请求之前被发送和$.ajax()处理它们前处理，设置自定义Ajax选项或修改现有选项。
```

注册一个典型使用`$.ajaxPrefilter()`的预过滤器，看起来像这样：

```js
$.ajaxPrefilter( function( options, originalOptions, jqXHR ) {
  // Modify options, control originalOptions, store jqXHR, etc
});
```

以下的情况下：

- `options` 是请求的选项
- `originalOptions` 值作为提供给Ajax方法未经修改的选项，因此，没有`ajaxSettings`设置中的默认值
- `jqXHR` 是请求的jqXHR对象

当自定义选项，需要提前处理，预过滤器（Prefilters）是一个完美的选择。给定下面的代码， 例如，如果自定义`abortOnRetry`选项被设置为`true`，那么调用`$.ajax()`会自动中止请求相同的URL：

```js
var currentRequests = {};
 
$.ajaxPrefilter(function( options, originalOptions, jqXHR ) {
  if ( options.abortOnRetry ) {
    if ( currentRequests[ options.url ] ) {
      currentRequests[ options.url ].abort();
    }
    currentRequests[ options.url ] = jqXHR;
  }
});
```

预过滤器（Prefilters）也可以被用来修改已经存在的选项。例如，下面的代理服务器跨域请求http://mydomain.net/proxy/：

```js
$.ajaxPrefilter( function( options ) {
  if ( options.crossDomain ) {
    options.url = "http://mydomain.net/proxy/" + encodeURIComponent( options.url );
    options.crossDomain = false;
  }
});
```

如果提供可选的`dataTypes`参数，那么预滤器（prefilter）将只会对满足指定 dataTypes 的请求有效。例如， 以下仅适用于JSON和 script 请求给定的预过滤器：

```js
$.ajaxPrefilter( "json script", function( options, originalOptions, jqXHR ) {
  // Modify options, control originalOptions, store jqXHR, etc
});
```

`$.ajaxPrefilter()`方法也**可以将请求重定向到另一个数据类型，并且返回该数据类型**。  例如，如果 URL 中含有在 isActuallyScript() 函数中设定的指定属性，那么设置成一个“script”的请求：

```js
$.ajaxPrefilter(function( options ) {
  if ( isActuallyScript( options.url ) ) {
    return "script";
  }
});
```

这将确保请求被认为是“script”类型的，而且也保证了所有对 script 数据类型有效的预前过滤器，也将被应用到它。

------

### jQuery.ajaxSetup()

```js
jQuery.ajaxSetup( options )
//描述: 为以后要用到的Ajax请求设置默认的值
```

所有后面的 Ajax 调用任何函数都将使用新的设置参数,除非它们调用时设置了各自的参数重载了这个默认值。 直到下一次调用`$.ajaxSetup()`.

**注意：** 此处指定的设置会影响*所有* `$.ajax`或基于AJAX的衍生方法，如`$.get()`的调用。这可能会导致不良的行为因为其他调用（例如，插件）可能希望正常的默认设置。**出于这个原因，我们强烈建议您不要使用此API。相反我们建议，在调用时明确设置选项或定义一个简单的插件。**

举个例子,我们可以事先设置服务器重复响应的默认URL参数：

```js
$.ajaxSetup({
  url: 'ping.php'
});
```

现在每次Ajax请求将自动使用这个"ping.php" URL：

```js
$.ajax({
  // url not set here; uses ping.php
  data: {'name': 'Dan'}
});
```

**注意**: 全局回调函数应使用他们各自的全局Ajax事件处理方法-`.ajaxStart()`, `.ajaxStop()`, `.ajaxComplete()`, `.ajaxError()`, `.ajaxSuccess()`, `.ajaxSend()`-设置，而不是为 `$.ajaxSetup()` 设置 `options` 对象。

*设置 AJAX 请求默认地址为 "/xmlhttp/"，禁止触发全局 AJAX 事件，用 POST 代替默认 GET 方法。其后的 AJAX 请求不再设置任何选项参数。*

```js
$.ajaxSetup({
   url: "/xmlhttp/",
   global: false,
   type: "POST"
 
 });
 $.ajax({ data: myData });
```

------

### jQuery.ajaxTransport()

```js
jQuery.ajaxTransport( dataType, handler(options, originalOptions, jqXHR) )
//描述: 创建一个对象，用于处理Ajax数据的实际传输。
```

传输（transport）是一个对象，它提供了两种方法，`send` 和 `abort`，内部使用由`$.ajax()`发出请求。传输（transport）是最高级的方法用来增强`$.ajax()`并且应仅作为当预过滤器（prefilters）和转换器（converters）无法满足你的需求的时候的最后的手段。

由于每个请求需要有自己的传输（transport）对象实例，传输不能直接注册。因此，你应该提供一个函数代替返回传输（transport）。

传输（transports）工厂注册使用`$.ajaxTransport()`。一个典型的注册看起来像这样：

```js
$.ajaxTransport( function( options, originalOptions, jqXHR ) {
  if( /* transportCanHandleRequest */ ) {
    return {
      send: function( headers, completeCallback ) {
        /* send code */
      },
      abort: function() {
        /* abort code */
      }
    };
  }
});
```

就像预过滤器（prefilters），一个传输（transport）的工厂函数可以被连接到一个特定的 dataType（数据类型）：

```js
$.ajaxTransport( "script", function( options, originalOptions, jqXHR ) {
    /* Will only be called for script requests */
});
```

示例演示小的图像怎样传输实现：

```js
$.ajaxTransport( "image", function( s ) {
 
  if ( s.type === "GET" && s.async ) {
 
    var image;
 
    return {
 
      send: function( _ , callback ) {
 
        image = new Image();
 
        function done( status ) {
          if ( image ) {
            var statusText = ( status == 200 ) ? "success" : "error",
            tmp = image;
            image = image.onreadystatechange = image.onerror = image.onload = null;
            callback( status, statusText, { image: tmp } );
          }
        }
 
        image.onreadystatechange = image.onload = function() {
          done( 200 );
        };
        image.onerror = function() {
          done( 404 );
        };
 
        image.src = s.url;
      },
 
      abort: function() {
        if ( image ) {
          image = image.onreadystatechange = image.onerror = image.onload = null;
        }
      }
    };
  }
});
```

------

## 快捷方法

这些方法帮你用最少的代码发送常见的Ajax请求。

### jQuery.get()

```js
jQuery.get( url [, data ] [, success(data, textStatus, jqXHR) ] [, dataType ] )
//描述: 使用一个HTTP GET请求从服务器加载数据。
```

这是一个Ajax功能的缩写，这相当于:

```js
$.ajax({
  url:url,
  data:data,
  success:success,
  dataType:dataType
});
```

`success` 回调函数会传入返回的数据，是根据MIME类型的响应，它可能返回的数据类型包括XML根节点, 字符串, JavaScript 文件, 或者 JSON 对象。 同时还会传入描述响应状态的字符串。

**在jQuery 1.5**，`success`回调函数还传递一个[“jqXHR”对象](https://www.jquery123.com/jQuery.get/#jqxhr-object) （ **在** jQuery **1.4中** ，它传递的是`XMLHttpRequest`对象）。然而，由于JSONP形式和跨域的GET请求不使用XHR，在这些情况下， `jqXHR`和`textStatus`参数传递给success（成功）回调是 undefined 。

大多数实现将指定一个成功的回调处理程序：

```js
$.get('ajax/test.html', function(data) {
  $('.result').html(data);
  alert('Load was performed.');
});
```

The jqXHR Object（jqXHR 对象）

**从jQuery 1.5开始**，所有jQuery的Ajax方法都返回一个`XMLHTTPRequest`对象的超集。这个通过`$.get()`方法返回的jQuery XHR对象，或“jqXHR，”实现了 Promise 接口，使它拥有 Promise 的所有属性，方法和行为（见[Deferred object](https://www.jquery123.com/category/deferred-object/)获取更多信息）。`jqXHR.done()` (表示成功), `jqXHR.fail() (表示错误)`, 和 `jqXHR.always()` (表示完成, 无论是成功或错误) 方法接受一个函数参数，用来请求终止时被调用。关于这个函数接收参数的详细信息，请参阅 [jqXHR Object](https://www.jquery123.com/jQuery.ajax/#jqXHR) 文档中的 $.ajax() 章节。

Promise 接口也允许jQuery的Ajax方法, 包括 `$.get()`, 在一个单独的请求中关联到 `.done()`, `.fail()`, 和 `.always()` 回调函数， 甚至允许你在请求已经结束后，指派回调函数。如果该请求已经完成，则回调函数会被立刻调用。

```js
// Assign handlers immediately after making the request,
  // and remember the jqxhr object for this request
  var jqxhr = $.get("example.php", function() {
    alert("success");
  })
  .success(function() { alert("second success"); })
  .error(function() { alert("error"); })
  .complete(function() { alert("complete"); });
 
  // perform other work here ...
 
  // Set another completion function for the request above
  jqxhr.complete(function(){ alert("second complete"); });

```

*请求 test.php 页面, 但是忽略返回结果.*

```js
$.get("test.php");
```

 *请求 test.php 页面 并且发送url参数(虽然仍然忽视返回的结果)。*

```js
$.get("test.php", { name: "John", time: "2pm" } );
```

 *传递数组形式data参数给服务器 (虽然仍然忽视返回的结果).*

```js
$.get("test.php", { 'choices[]': ["Jon", "Susan"]} );
```

 *Alert 从 test.php请求的数据结果 (HTML 或者 XML,取决于返回的结果).*

```js
$.get("test.php", function(data){
	alert("Data Loaded: " + data);
});
```

*Alert 从 test.cgi请求并且发送url参数的数据结果 (HTML 或者 XML,取决于返回的结果).*

```js
$.get("test.cgi", { name: "John", time: "2pm" },
   function(data){
     alert("Data Loaded: " + data);
   });
```

 *获取test.php的页面已返回的JSON格式的内容 (<?php echo json_encode(array("name"=>"John","time"=>"2pm")); ?>), 并且加到页面中.*

```js
$.get("test.php",
   function(data){
     $('body').append( "Name: " + data.name ) // John
              .append( "Time: " + data.time ); //  2pm
   }, "json");
```

------

### jQuery.getJSON()

```js
jQuery.getJSON( url [, data ] [, success(data, textStatus, jqXHR) ] )
//描述: 使用一个HTTP GET请求从服务器加载JSON编码的数据。
```

这是一个Ajax函数的缩写，这相当于:

```js
$.ajax({
  dataType: "json",
  url: url,
  data: data,
  success: success
});
```

数据会被附加到一个查询字符串的URL中，发送到服务器。如果该值的`data`参数是一个普通的对象，它会转换为一个字符串并使用URL编码，然后才追加到URL中。

大多数情况下都会指定一个请求成功后的回调函数：

```js
$.getJSON('ajax/test.json', function(data) {
  var items = [];
 
  $.each(data, function(key, val) {
    items.push('<li id="' + key + '">' + val + '</li>');
  });
 
  $('<ul/>', {
    'class': 'my-new-list',
    html: items.join('')
  }).appendTo('body');
});
```

这个例子，当然遵循JSON文件的结构：

```json
{
  "one": "Singular sensation",
  "two": "Beady little eyes",
  "three": "Little birds pitch by my doorstep"
}
```

使用这种结构，这个例子遍历请求的数据，建立了一个无序列表，并追加到body。

在`success`回调中传入返回的数据，通常是一个JavaScript对象或数组所定义的JSON结构，使用[`$.parseJSON()`](https://www.jquery123.com/jQuery.parseJSON)方法解析。它（`success`回调）也传入了响应状态文本。

**在jQuery 1.5，**，在`success`回调函数接收一个[“jqXHR”对象](https://www.jquery123.com/jQuery.get/#jqxhr-object) （ 在**jQuery 1.4**中 ，它收到的是`XMLHttpRequest`对象）。然而，由于JSONP形式和跨域的GET请求不使用XHR，在这些情况下， `jqXHR`和`textStatus`参数传递给success（成功）回调是 undefined 。

> **重要提示：** 从jQuery 1.4开始，如果JSON文件包含一个语法错误，该请求通常会静静的失败。因此应该避免频繁手工编辑JSON数据。JSON语法规则比JavaScript对象字面量表示法更加严格。例如，所有在JSON中的字符串，无论是属性或值，必须用双引号括起来，更多JSON细节信息请参阅http://json.org/ 。

JSONP

如果URL包含字符串“callback=?”（或类似的参数，取决于服务器端 API 是如何定义的），这个请求被视为JSONP形式请求。更多`jsonp`数据类型的细节讨论，请参阅[`$.ajax()`](https://www.jquery123.com/jQuery.ajax/)。

Promise 接口也允许jQuery的Ajax方法, 包括 `$.getJSON()`, 在一个单独的请求中关联到 `.success()`, `.complete()`, 和 `.error()` 回调函数， 甚至允许你在请求已经结束后，指派回调函数。如果该请求已经完成，则回调函数会被立刻调用。

```js
// Assign handlers immediately after making the request,
// and remember the jqxhr object for this request
var jqxhr = $.getJSON("example.json", function() {
  alert("success");
})
.success(function() { alert("second success"); })
.error(function() { alert("error"); })
.complete(function() { alert("complete"); });
 
// perform other work here ...
 
// Set another completion function for the request above
jqxhr.complete(function(){ alert("second complete"); });
```

*从 Flickr JSONP API中加载最近的四张标签为猫的图片：*

```html
<!DOCTYPE html>
<html>
<head>
  <style>img{ height: 100px; float: left; }</style>
  <script src="https://code.jquery.com/jquery-latest.js"></script>
</head>
<body>
  <div id="images">
 
</div>
<script>
$.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
  {
    tags: "mount rainier",
    tagmode: "any",
    format: "json"
  },
  function(data) {
    $.each(data.items, function(i,item){
      $("<img/>").attr("src", item.media.m).appendTo("#images");
      if ( i == 3 ) return false;
    });
  });</script>
 
</body>
</html>
```

*通过test.js加载这个JSON数据，并使用返回的JSON数据中的 name值：*

```js
$.getJSON("test.js", function(json) {
   alert("JSON Data: " + json.users[3].name);
 });
```

*通过额外的Key/value参数从test.js加载这个JSON数据,并使用返回的JSON数据中的 name值：.*

```js
$.getJSON("test.js", { name: "John", time: "2pm" }, function(json) {
    alert("JSON Data: " + json.users[3].name);
    });
```

------

### jQuery.getScript()

```js
jQuery.getScript( url [, success(script, textStatus, jqXHR) ] )
//使用一个HTTP GET请求从服务器加载并执行一个 JavaScript 文件
```

这是一个Ajax函数的缩写，这相当于:

```js
$.ajax({
  url: url,
  dataType: "script",
  success: success
});
```

这个脚本在全局环境中执行，所以指向其他变量和运行jQuery函数。被加载的脚本同样作用于当前页面：

Success Callback（成功回调）

一旦脚本已经被加载，将触发回调  但不一定执行。

```js
$(".result").html("<p>Lorem ipsum dolor sit amet.</p>");
```

通过引用这个文件名，脚本被包含进来并执行：

```js
$.getScript("./ajax/test.js", function(data, textStatus, jqxhr) {
   console.log(data); //data returned
   console.log(textStatus); //success
   console.log(jqxhr.status); //200
   console.log('Load was performed.');
});

/*
0
VM123:2 1
VM123:2 2
VM123:2 3
VM123:2 4
test.html:31 for (let i=0;i<5;i++){
	console.log(i);
}
test.html:32 success
test.html:33 200
test.html:34 Load was performed.
*/
```

```js
//test.js
for (let i=0;i<5;i++){
	console.log(i);
}
```

Handling Errors（错误处理）

从jQuery 1.5开始，你可以用[`.fail()`](https://www.jquery123.com/deferred.fail)来处理错误:

```js
$.getScript("ajax/test.js")
.done(function(script, textStatus) {
  console.log( textStatus );
})
.fail(function(jqxhr, settings, exception) {
  $( "div.log" ).text( "Triggered ajaxError handler." );
});
```

jQuery1.5之前，不得不使用全局的`.ajaxError()`回调事件来处理`$.getScript()`错误：

```js
$( "div.log" ).ajaxError(function(e, jqxhr, settings, exception) {
  if (settings.dataType=='script') {
    $(this).text( "Triggered ajaxError handler." );
  }
});
```

Caching Responses（缓存响应）

默认情况下，`$.getScript()` cache选项被设置为 `false`。这将在请求的URL的查询字符串中追加一个时间戳参数，以确保每次浏览器下载的脚本被重新请求。您可以全局的使用 [`$.ajaxSetup()`](https://www.jquery123.com/jquery.ajaxsetup)设置cache(缓存)属性覆盖该功能：

```js
$.ajaxSetup({
  cache: true
});
```

*定义了一个 $.cachedScript() 方法可以获取缓存的脚本：*

```js
jQuery.cachedScript = function(url, options) {
 
  // allow user to set any option except for dataType, cache, and url
  options = $.extend(options || {}, {
    dataType: "script",
    cache: true,
    url: url
  });
 
  // Use $.ajax() since it is more flexible than $.getScript
  // Return the jqXHR object so we can chain callbacks
  return jQuery.ajax(options);
};
 
// Usage
$.cachedScript("ajax/test.js").done(function(script, textStatus) {
  console.log( textStatus );
});
```

*动态加载新的[官方jQuery 颜色动画插件](http://github.com/jquery/jquery-color)，一旦该插件加载完成就会触发一些颜色动画。*

```html
<!DOCTYPE html>
<html>
<head>
  <style>
.block {
   background-color: blue;
   width: 150px;
   height: 70px;
   margin: 10px;
}</style>
  <script src="https://code.jquery.com/jquery-latest.js"></script>
</head>
<body>
 
<button id="go">&raquo; Run</button>
 
<div class="block"></div>
 
<script>
(function() {
  var url = "https://raw.github.com/jquery/jquery-color/master/jquery.color.js";
  $.getScript(url, function() {
    $("#go").click(function(){
      $(".block")
        .animate( { backgroundColor: "rgb(255, 180, 180)" }, 1000 )
        .delay(500)
        .animate( { backgroundColor: "olive" }, 1000 )
        .delay(500)
        .animate( { backgroundColor: "#00f" }, 1000 );
    });
  });
})();
</script>
 
</body>
</html>
```

------

### jQuery.post()

```js
jQuery.post( url [, data ] [, success(data, textStatus, jqXHR) ] [, dataType ] )
//描述: 使用一个HTTP POST 请求从服务器加载数据。
```

这是一个 Ajax 函数的简写形式，这相当于：

```js
$.ajax({
  type: "POST",
  url: url,
  data: data,
  success: success,
  dataType: dataType
});
```

`success`回调函数会传入返回的数据，是根据MIME类型的响应，它可能返回的数据类型包括XML根节点, 字符串, JavaScript 文件, 或者 JSON 对象。 同时还会传入描述响应状态的字符串。

大多数实现将指定一个成功的处理函数：

```js
$.post('ajax/test.html', function(data) {
  $('.result').html(data);
});
```

这个例子所请求的全部HTML代码片段插入到页面中。

用 `POST` 获取的页面是从来不会被缓存, 所以这些请求中的 `cache` 和 `ifModified` 选项在 `jQuery.ajaxSetup()` 是无效的。

*请求 test.php 页面, 但是忽略返回结果*

```js
$.post("test.php");
```

*请求 test.php 页面 并且发送url参数(虽然仍然忽视返回的结果)。*

```js
$.post("test.php", { name: "John", time: "2pm" } );
```

*传递数组形式data参数给服务器 (虽然仍然忽视返回的结果)。*

```js
$.post("test.php", { 'choices[]': ["Jon", "Susan"] });
```

*使用Ajax请求发送表单数据。*

```js
$.post("test.php", $("#testform").serialize());
```

*Alert 从 test.php请求的数据结果 (HTML 或者 XML,取决于返回的结果)。*

```js
$.post("test.php", function(data) {
  alert("Data Loaded: " + data);
});
```

*Alert 从 test.cgi请求并且发送url参数的数据结果 (HTML 或者 XML,取决于返回的结果)。*

```js
$.post("test.php", { name: "John", time: "2pm" },
  function(data) {
    alert("Data Loaded: " + data);
  });
```

*得到test.php的内容，存储在一个 XMLHttpResponse 对象中并且运用 process() JavaScript函数。*

```js
$.post("test.php", { name: "John", time: "2pm" },
  function(data) {
    process(data);
  },
 "xml"
);
```

*Posts to the test.php page and gets contents which has been returned in json format (<?php echo json_encode(array("name"=>"John","time"=>"2pm")); ?>).*

```js
$.post("test.php", { "func": "getNameAndTime" },
  function(data){
    console.log(data.name); // John
    console.log(data.time); //  2pm
  }, "json");
```

*用ajax传递一个表单并把结果在一个div中*

```html
<!DOCTYPE html>
<html>
<head>
  <script src="https://code.jquery.com/jquery-latest.js"></script>
</head>
<body>
  <form action="/" id="searchForm">
   <input type="text" name="s" placeholder="Search..." />
   <input type="submit" value="Search" />
  </form>
  <!-- the result of the search will be rendered inside this div -->
  <div id="result"></div>
 
<script>
/* attach a submit handler to the form */
$("#searchForm").submit(function(event) {
 
  /* stop form from submitting normally */
  event.preventDefault();
 
  /* get some values from elements on the page: */
  var $form = $( this ),
      term = $form.find( 'input[name="s"]' ).val(),
      url = $form.attr( 'action' );
 
  /* Send the data using post and put the results in a div */
  $.post( url, { s: term },
    function( data ) {
        var content = $( data ).find( '#content' );
        $( "#result" ).empty().append( content );
    }
  );
});
</script>
 
</body>
</html>
```

------

### .load()

```js
.load( url [, data ] [, complete(responseText, textStatus, XMLHttpRequest) ] )
//描述: 从服务器载入数据并且将返回的 HTML 代码并插入至 匹配的元素 中。
```

> *注意: 事件处理函数中也有一个方法叫* `.load()`*。  jQuery根据传递给它的参数设置来确定使用哪个方法执行。*

这个方法是从服务器获取数据最简单的方法。除了不是全局函数，这个方法和`$.get(url, data, success)` 基本相同，它有一个隐含的回调函数。 当他检查到一个成功的请求(i.e. 当 `textStatus`是 "success" 或者 "notmodified")时，`.load()` 方法将返回的HTML 内容数据设置到相匹配的节点中。这就意味着大多数采用这个方法可以很简单:

```js
$('#result').load('ajax/test.html');
```

如果选择器没有匹配的元素——在这种情况下，如果document不包含id = "result" 的元素- 这个Ajax请求将*不会*被发送出去。

如果提供回调,都将在执行后进行后处理:

如果提供了 "complete" 回调函数，它将在函数处理完之后，并且 HTML 已经被插入完时被调用。回调函数会在每个匹配的元素上被调用一次，并且 `this`始终指向当前正在处理的 DOM 元素。

```js
$('#result').load('ajax/test.html', function() {
  alert('Load was performed.');
});
```

Request Method（请求方法）

默认使用 GET 方式 ， 如果data参数提供一个对象，那么使用 POST 方式。

Loading Page Fragments（加载页面片段）

`.load()` 方法, 不像 `$.get()`那样，允许我们使用在 `url` 中添加特定参数的特殊语法，来实现可以指定要插入哪一部分远程文档。如果 `url` 参数的字符串中包含一个或多个空格，那么第一个空格后面的内容，会被当成是 jQuery 的选择器，从而决定应该加载返回结果中的哪部分内容。（译者注：第一个空格后面是一个jQuery选择器，返回的内容中匹配该选择器的内容将被载人到页面中。）

我们可以修改上述例子中,只有#container的一部分被载人到文件中：

```js
$('#result').load('ajax/test.html #container');
```

当这种方法执行, 它将检索 `ajax/test.html` 返回的页面内容，jQuery会获取ID为 `container` 元素的内容，并且插入到ID为 `result` 元素，而其他未被检索到的元素将被废弃。

jQuery使用浏览器的`.innerHTML`属性去解析检索到的文档，并将其插入到当前文档中。在此过程中，浏览器通常会过滤文档中的一些元素 ，比如`<html>`, `<title>`, 或者 `<head>` 元素。其结果是，由`.load()`方法返回的元素与从浏览器中直接获取到的文档内容，可能是并不完全一样的。

Script Execution（脚本执行）

当使用URL参数中没有后面跟选择器表达式时， 那么传递给 `.html()` 的返回内容中，是含有脚本的。在它们被丢弃之前，脚本是会被执行的。但如果调用 `.load()`时，即使在 url 参数中添加了选择器表达式，但在 DOM 被更新之前，脚本会被删除。因此脚本*不*会被执行。下面的例子分别演示了这两种情况：

任何加载到 `#a` 中的 JavaScript 脚本，将会作为文档的一部分而被执行。

```js
$('#a').load('article.html');
```

然而，在以下情况下，脚本块将从被加载到`#b`的document中被剥离出来，而不执行：

```js
$('#b').load('article.html #target');
```

> 由于浏览器的安全限制，大多数“Ajax”的要求，均采用[同源的政策](http://en.wikipedia.org/wiki/Same_origin_policy) ;该请求不能成功地检索来自不同的域，子域或协议的数据。

*在一个有序列表中，加载主页的页脚导航。*

```html
<!DOCTYPE html>
<html>
<head>
  <style>
 body{ font-size: 12px; font-family: Arial; }
 </style>
  <script src="https://code.jquery.com/jquery-latest.js"></script>
</head>
<body>
 
<b>Footer navigation:</b>
<ol id="new-nav"></ol>
 
<script>
  $("#new-nav").load("/ #jq-footerNavigation li");
</script>
 
</body>
</html>
```

*显示一个信息如果Ajax请求遭遇一个错误*

```html
<b>Successful Response (should be blank):</b>
<div id="success"></div>
<b>Error Response:</b>
<div id="error"></div>
 
<script>
$("#success").load("/not-here.php", function(response, status, xhr) {
  if (status == "error") {
    var msg = "Sorry but there was an error: ";
    $("#error").html(msg + xhr.status + " " + xhr.statusText);
  }
});
  </script>
```

*将feeds.html 文件载人到 ID为feeds的DIV.*

```js
$("#feeds").load("feeds.html");
```

*发送数组形式的data参数到服务器。*

```js
$("#objectID").load("test.php", { 'choices[]': ["Jon", "Susan"] } );
```

与上面相同，但会将附加参数 POST 到服务器，并在服务器完成响应时执行回调。

```js
$("#feeds").load("feeds.php", {limit: 25}, function(){
	alert("The last 25 entries in the feed have been loaded");
});
```



# jQuery 选择器

