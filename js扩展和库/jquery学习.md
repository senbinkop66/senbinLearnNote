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

## AJAX 简介

### 什么是 AJAX

AJAX 是与服务器交换数据的技术，它在不重载全部页面的情况下，实现了对部分网页的更新。

AJAX = 异步 JavaScript 和 XML（Asynchronous JavaScript and XML）。

简短地说，**在不重载整个网页的情况下，AJAX 通过后台加载数据，并在网页上进行显示。**

使用 AJAX 的应用程序案例：谷歌地图、腾讯微博、优酷视频、人人网等等。

### jQuery 与 AJAX

jQuery 提供多个与 AJAX 有关的方法。

通过 jQuery AJAX 方法，您能够使用 HTTP Get 和 HTTP Post 从远程服务器上请求文本、HTML、XML 或 JSON - 同时您能够把这些外部数据直接载入网页的被选元素中。

**如果没有 jQuery，AJAX 编程还是有些难度的。**

编写常规的 AJAX 代码并不容易，因为不同的浏览器对 AJAX 的实现并不相同。这意味着您必须编写额外的代码对浏览器进行测试。不过，jQuery 团队为我们解决了这个难题，我们只需要一行简单的代码，就可以实现 AJAX 功能。

jQuery 库支持完整的 Ajax 操作。这里所包含的所有函数和方法用于从服务端加载数据，并且不会导致页面刷新。

## AJAX get() 和 post() 方法

jQuery get() 和 post() 方法用于通过 HTTP GET 或 POST 请求从服务器请求数据。

### HTTP 请求：GET vs. POST

两种在客户端和服务器端进行请求-响应的常用方法是：GET 和 POST。

- *GET* - 从指定的资源请求数据
- *POST* - 向指定的资源提交要处理的数据

GET 基本上用于从服务器获得（取回）数据。注释：GET 方法可能返回缓存数据。

POST 也可用于从服务器获取数据。不过，POST 方法不会缓存数据，并且常用于连同请求一起发送数据。

### $.get() 方法

$.get() 方法通过 HTTP GET 请求从服务器上请求数据。

**语法**：

```js
$.get(URL,callback);
```

必需的 *URL* 参数规定您希望请求的 URL。

可选的 *callback* 参数是请求成功后所执行的函数名。

下面的例子使用 $.get() 方法从服务器上的一个文件中取回数据：

```js
$("button").click(function(){
  $.get("demo_test.php",function(data,status){
    alert("数据: " + data + "\n状态: " + status);
  });
});
```

$.get() 的第一个参数是我们希望请求的 URL（“demo_test.php”）。

第二个参数是回调函数。第一个回调参数存有被请求页面的内容，第二个回调参数存有请求的状态。

**提示：** 这个 PHP 文件 (“demo_test.php”) 类似这样：

```php
<?php
	echo '这是个从PHP文件中读取的数据。';
?>
```

### $.post() 方法

$.post() 方法通过 HTTP POST 请求向服务器提交数据。

**语法:**

```js
$.post(URL,data,callback);
```

必需的 *URL* 参数规定您希望请求的 URL。

可选的 *data* 参数规定连同请求发送的数据。

可选的 *callback* 参数是请求成功后所执行的函数名。

下面的例子使用 $.post() 连同请求一起发送数据：

```js
$("button").click(function(){
    $.post("/try/ajax/demo_test_post.php",
    {
        name:"阿西河教程",
        url:"https://www.axihe.com"
    },
        function(data,status){
        alert("数据: \n" + data + "\n状态: " + status);
    });
});
```

$.post() 的第一个参数是我们希望请求的 URL (“demo_test_post.php”)。

然后我们连同请求（name 和 url）一起发送数据。

“demo_test_post.php” 中的 PHP 脚本读取这些参数，对它们进行处理，然后返回结果。

第三个参数是回调函数。第一个回调参数存有被请求页面的内容，而第二个参数存有请求的状态。

**提示：** 这个 PHP 文件 (“demo_test_post.php”) 类似这样：

```php
<?php
    $name = isset($_POST['name']) ? htmlspecialchars($_POST['name']) : '';
    $url = isset($_POST['url']) ? htmlspecialchars($_POST['url']) : '';
    echo '网站名: ' . $name;
    echo "\n";
    echo 'URL 地址: ' .$url;
?>
```

## AJAX load() 方法

jQuery load() 方法是简单但强大的 AJAX 方法。

load() 方法从服务器加载数据，并把返回的数据放入被选元素中。

**语法:**

```
$(selector).load(URL,data,callback);
```

必需的 *URL* 参数规定您希望加载的 URL。

可选的 *data* 参数规定与请求一同发送的查询字符串键/值对集合。

可选的 *callback* 参数是 load() 方法完成后所执行的函数名称。

这是示例文件（“demo_test.txt”）的内容：

```html
<h2>jQuery AJAX 是个非常棒的功能！</h2>
<p id="p1">这是段落的一些文本。</p>
```

下面的例子会把文件 “demo_test.txt” 的内容加载到指定的 div 元素中：

```js
$("#div1").load("demo_test.txt");
```

也可以把 jQuery 选择器添加到 URL 参数。

下面的例子把 “demo_test.txt” 文件中 id=“p1” 的元素的内容，加载到指定的 div 元素中：

```js
$("#div1").load("demo_test.txt #p1");
```

可选的 callback 参数规定当 load() 方法完成后所要允许的回调函数。回调函数可以设置不同的参数：

- *responseTxt* - 包含调用成功时的结果内容
- *statusTXT* - 包含调用的状态
- *xhr* - 包含 XMLHttpRequest 对象

下面的例子会在 load() 方法完成后显示一个提示框。如果 load() 方法已成功，则显示"外部内容加载成功！"，而如果失败，则显示错误消息：

```js
$("button").click(function(){
  $("#div1").load("demo_test.txt",function(responseTxt,statusTxt,xhr){
    if(statusTxt=="success")
      alert("外部内容加载成功!");
    if(statusTxt=="error")
      alert("Error: "+xhr.status+": "+xhr.statusText);
  });
});
```



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

jQuery 选择器允许您对 HTML 元素组或单个元素进行操作。

jQuery 选择器基于元素的 id、类、类型、属性、属性值等"查找"（或选择）HTML 元素。 它基于已经存在的 [CSS 选择器](https://www.axihe.com/api/css/res/css-selectors.html)，除此之外，它还有一些自定义的选择器。

jQuery 中所有选择器都以美元符号开头：`$()` 。

## 元素选择器

jQuery 元素选择器基于元素名选取元素。

在页面中选取所有 `<p>`元素:

```js
$("p")
```

用户点击按钮后，所有p元素都隐藏

```js
$(document).ready(function(){
  $("button").click(function(){
    $("p").hide();
  });
});
```

## #id 选择器

jQuery #id 选择器通过 HTML 元素的 id 属性选取指定的元素。

页面中元素的 id 应该是唯一的，所以您要在页面中选取唯一的元素需要通过 #id 选择器。

通过 id 选取元素语法如下：

```js
$("#test")
```

当用户点击按钮后，有 id=“test” 属性的元素将被隐藏：

```js
$(document).ready(function(){
  $("button").click(function(){
    $("#test").hide();
  });
});
```

## .class 选择器

jQuery 类选择器可以通过指定的 class 查找元素。

语法如下：

```js
$(".test")
```

用户点击按钮后所有带有 class=“test” 属性的元素都隐藏：

```js
$(document).ready(function(){
  $("button").click(function(){
    $(".test").hide();
  });
});
```

##  属性选择器

jQuery 使用 XPath 表达式来选择带有给定属性的元素。

```js
$("[href]") 选取所有带有 href 属性的元素。

$("[href='#']") 选取所有带有 href 值等于 "#" 的元素。

$("[href!='#']") 选取所有带有 href 值不等于 "#" 的元素。

$("[href$='.jpg']") 选取所有 href 值以 ".jpg" 结尾的元素。
```

## CSS 选择器

CSS 选择器可用于改变 HTML 元素的 CSS 属性。

下面的例子把所有 p 元素的背景颜色更改为红色：

```
$("p").css("background-color","red");
```

## jQuery 选择器

| 选择器                 | 实例                       | 选取                                       |
| :--------------------- | :------------------------- | :----------------------------------------- |
| *                      | $("*")                     | 所有元素                                   |
| #*id*                  | $("#lastname")             | id="lastname" 的元素                       |
| .*class*               | $(".intro")                | 所有 class="intro" 的元素                  |
| *element*              | $("p")                     | 所有 <p> 元素                              |
| .*class*.*class*       | $(".intro.demo")           | 所有 class="intro" 且 class="demo" 的元素  |
|                        |                            |                                            |
| :first                 | $("p:first")               | 第一个 <p> 元素                            |
| :last                  | $("p:last")                | 最后一个 <p> 元素                          |
| :even                  | $("tr:even")               | 所有偶数 <tr> 元素                         |
| :odd                   | $("tr:odd")                | 所有奇数 <tr> 元素                         |
|                        |                            |                                            |
| :eq(*index*)           | $("ul li:eq(3)")           | 列表中的第四个元素（index 从 0 开始）      |
| :gt(*no*)              | $("ul li:gt(3)")           | 列出 index 大于 3 的元素                   |
| :lt(*no*)              | $("ul li:lt(3)")           | 列出 index 小于 3 的元素                   |
| :not(*selector*)       | $("input:not(:empty)")     | 所有不为空的 input 元素                    |
|                        |                            |                                            |
| :header                | $(":header")               | 所有标题元素 <h1> - <h6>                   |
| :animated              |                            | 所有动画元素                               |
|                        |                            |                                            |
| :contains(*text*)      | $(":contains('nowcoder')") | 包含指定字符串的所有元素                   |
| :empty                 | $(":empty")                | 无子（元素）节点的所有元素                 |
| :hidden                | $("p:hidden")              | 所有隐藏的 <p> 元素                        |
| :visible               | $("table:visible")         | 所有可见的表格                             |
|                        |                            |                                            |
| s1,s2,s3               | $("th,td,.intro")          | 所有带有匹配选择的元素                     |
|                        |                            |                                            |
| [*attribute*]          | $("[href]")                | 所有带有 href 属性的元素                   |
| [*attribute*=*value*]  | $("[href='#']")            | 所有 href 属性的值等于 "#" 的元素          |
| [*attribute*!=*value*] | $("[href!='#']")           | 所有 href 属性的值不等于 "#" 的元素        |
| [*attribute*$=*value*] | $("[href$='.jpg']")        | 所有 href 属性的值包含以 ".jpg" 结尾的元素 |
|                        |                            |                                            |
| :input                 | $(":input")                | 所有 <input> 元素                          |
| :text                  | $(":text")                 | 所有 type="text" 的 <input> 元素           |
| :password              | $(":password")             | 所有 type="password" 的 <input> 元素       |
| :radio                 | $(":radio")                | 所有 type="radio" 的 <input> 元素          |
| :checkbox              | $(":checkbox")             | 所有 type="checkbox" 的 <input> 元素       |
| :submit                | $(":submit")               | 所有 type="submit" 的 <input> 元素         |
| :reset                 | $(":reset")                | 所有 type="reset" 的 <input> 元素          |
| :button                | $(":button")               | 所有 type="button" 的 <input> 元素         |
| :image                 | $(":image")                | 所有 type="image" 的 <input> 元素          |
| :file                  | $(":file")                 | 所有 type="file" 的 <input> 元素           |
|                        |                            |                                            |
| :enabled               | $(":enabled")              | 所有激活的 input 元素                      |
| :disabled              | $(":disabled")             | 所有禁用的 input 元素                      |
| :selected              | $(":selected")             | 所有被选取的 input 元素                    |
| :checked               | $(":checked")              | 所有被选中的 input 元素                    |

# jQuery 事件

事件方法会触发匹配元素的事件，或将函数绑定到所有匹配元素的某个事件。

## 什么是事件？

页面对不同访问者的响应叫做事件。

事件处理程序指的是当 HTML 中发生某些事件时所调用的方法。

实例：

- 在元素上移动鼠标。
- 选取单选按钮
- 点击元素

在事件中经常使用术语"触发"（或"激发"）例如： “当您按下按键时触发 keypress 事件”。

## jQuery 事件方法语法

在 jQuery 中，大多数 DOM 事件都有一个等效的 jQuery 方法。

页面中指定一个点击事件：

```
$("p").click();
```

下一步是定义什么时间触发事件。您可以通过一个事件函数实现：

```
$("p").click(function(){    // 动作触发后执行的代码!!});
```

| 方法                       | 描述                                                         |
| :------------------------- | :----------------------------------------------------------- |
| bind()                     | 向匹配元素附加一个或更多事件处理器                           |
| blur()                     | 触发、或将函数绑定到指定元素的 blur 事件                     |
| change()                   | 触发、或将函数绑定到指定元素的 change 事件                   |
| click()                    | 触发、或将函数绑定到指定元素的 click 事件                    |
| dblclick()                 | 触发、或将函数绑定到指定元素的 double click 事件             |
| delegate()                 | 向匹配元素的当前或未来的子元素附加一个或多个事件处理器       |
| die()                      | 移除所有通过 live() 函数添加的事件处理程序。                 |
| error()                    | 触发、或将函数绑定到指定元素的 error 事件                    |
| event.isDefaultPrevented() | 返回 event 对象上是否调用了 event.preventDefault()。         |
| event.pageX                | 相对于文档左边缘的鼠标位置。                                 |
| event.pageY                | 相对于文档上边缘的鼠标位置。                                 |
| event.preventDefault()     | 阻止事件的默认动作。                                         |
| event.result               | 包含由被指定事件触发的事件处理器返回的最后一个值。           |
| event.target               | 触发该事件的 DOM 元素。                                      |
| event.timeStamp            | 该属性返回从 1970 年 1 月 1 日到事件发生时的毫秒数。         |
| event.type                 | 描述事件的类型。                                             |
| event.which                | 指示按了哪个键或按钮。                                       |
| focus()                    | 触发、或将函数绑定到指定元素的 focus 事件                    |
| keydown()                  | 触发、或将函数绑定到指定元素的 key down 事件                 |
| keypress()                 | 触发、或将函数绑定到指定元素的 key press 事件                |
| keyup()                    | 触发、或将函数绑定到指定元素的 key up 事件                   |
| live()                     | 为当前或未来的匹配元素添加一个或多个事件处理器               |
| load()                     | 触发、或将函数绑定到指定元素的 load 事件                     |
| mousedown()                | 触发、或将函数绑定到指定元素的 mouse down 事件               |
| mouseenter()               | 触发、或将函数绑定到指定元素的 mouse enter 事件              |
| mouseleave()               | 触发、或将函数绑定到指定元素的 mouse leave 事件              |
| mousemove()                | 触发、或将函数绑定到指定元素的 mouse move 事件               |
| mouseout()                 | 触发、或将函数绑定到指定元素的 mouse out 事件                |
| mouseover()                | 触发、或将函数绑定到指定元素的 mouse over 事件               |
| mouseup()                  | 触发、或将函数绑定到指定元素的 mouse up 事件                 |
| one()                      | 向匹配元素添加事件处理器。每个元素只能触发一次该处理器。     |
| ready()                    | 文档就绪事件（当 HTML 文档就绪可用时）                       |
| resize()                   | 触发、或将函数绑定到指定元素的 resize 事件                   |
| scroll()                   | 触发、或将函数绑定到指定元素的 scroll 事件                   |
| select()                   | 触发、或将函数绑定到指定元素的 select 事件                   |
| submit()                   | 触发、或将函数绑定到指定元素的 submit 事件                   |
| toggle()                   | 绑定两个或多个事件处理器函数，当发生轮流的 click 事件时执行。 |
| trigger()                  | 所有匹配元素的指定事件                                       |
| triggerHandler()           | 第一个被匹配元素的指定事件                                   |
| unbind()                   | 从匹配元素移除一个被添加的事件处理器                         |
| undelegate()               | 从匹配元素移除一个被添加的事件处理器，现在或将来             |
| unload()                   | 触发、或将函数绑定到指定元素的 unload 事件                   |



# jQuery 效果 

##  隐藏和显示

### hide() 和 show()

```js
$(selector).hide(speed,callback);
$(selector).show(speed,callback);
```

- 可选的 speed 参数规定隐藏/显示的速度，可以取以下值：“slow”、“fast” 或毫秒。
- 可选的 callback 参数是隐藏或显示完成后所执行的函数名称。

通过 jQuery，您可以使用 hide() 和 show() 方法来隐藏和显示 HTML 元素：

```js
$("#hide").click(function(){
  $("p").hide();
});
 
$("#show").click(function(){
  $("p").show();
});
```

### toggle()

通过 jQuery，您可以使用 toggle() 方法来切换 hide() 和 show() 方法。

显示被隐藏的元素，并隐藏已显示的元素：

```js
$(selector).toggle(speed,callback);

$("button").click(function(){
  $("p").toggle();
});
```

## 淡入淡出

### fadeIn() 方法

jQuery fadeIn() 用于淡入已隐藏的元素。

```js
$(selector).fadeIn(speed,callback);

$("button").click(function(){
  $("#div1").fadeIn();
  $("#div2").fadeIn("slow");
  $("#div3").fadeIn(3000);
});
```

### fadeOut() 方法

jQuery fadeOut() 方法用于淡出可见元素。

```js
$(selector).fadeOut(speed,callback);

$("button").click(function(){
  $("#div1").fadeOut();
  $("#div2").fadeOut("slow");
  $("#div3").fadeOut(3000);
});
```

### fadeToggle() 方法

jQuery fadeToggle() 方法可以在 fadeIn() 与 fadeOut() 方法之间进行切换。

如果元素已淡出，则 fadeToggle() 会向元素添加淡入效果。

如果元素已淡入，则 fadeToggle() 会向元素添加淡出效果。

```js
$(selector).fadeToggle(speed,callback);

$("button").click(function(){
  $("#div1").fadeToggle();
  $("#div2").fadeToggle("slow");
  $("#div3").fadeToggle(3000);
});
```

### fadeTo() 方法

jQuery fadeTo() 方法允许渐变为给定的不透明度（值介于 0 与 1 之间）。

```
$(selector).fadeTo(speed,opacity,callback);
```

**必需的 speed 参数规定效果的时长**。它可以取以下值：“slow”、“fast” 或毫秒。

fadeTo() 方法中**必需的 opacity 参数将淡入淡出效果设置为给定的不透明度**（值介于 0 与 1 之间）。

可选的 callback 参数是该函数完成后所执行的函数名称。

```js
$("button").click(function(){
  $("#div1").fadeTo("slow",0.15);
  $("#div2").fadeTo("slow",0.4);
  $("#div3").fadeTo("slow",0.7);
});
```

## 滑动

### slideDown() 方法

jQuery slideDown() 方法用于向下滑动元素。

```js
$(selector).slideDown(speed,callback);

$("#flip").click(function(){
  $("#panel").slideDown();
});
```

### slideUp() 方法

jQuery slideUp() 方法用于向上滑动元素。

```js
$(selector).slideUp(speed,callback);

$("#flip").click(function(){
  $("#panel").slideUp();
});
```

### slideToggle() 方法

jQuery slideToggle() 方法可以在 slideDown() 与 slideUp() 方法之间进行切换。

如果元素向下滑动，则 slideToggle() 可向上滑动它们。

如果元素向上滑动，则 slideToggle() 可向下滑动它们。

```js
$(selector).slideToggle(speed,callback);

$("#flip").click(function(){
  $("#panel").slideToggle();
});
```

## 动画

###  animate() 方法

jQuery animate() 方法用于创建自定义动画。

```
$(selector).animate({params},speed,callback);
```

必需的 params 参数定义形成动画的 CSS 属性。

可选的 speed 参数规定效果的时长。它可以取以下值：“slow”、“fast” 或毫秒。

可选的 callback 参数是动画完成后所执行的函数名称。

**元素往右边移动了 250 像素：**

```js
$("button").click(function(){
  $("div").animate({left:'250px'});
});
```

默认情况下，所有 HTML 元素都有一个静态位置，且无法移动。
如需对位置进行操作，要记得首先把元素的 CSS position 属性设置为 relative、fixed 或 absolute！

### 操作多个属性

请注意，生成动画的过程中可同时使用多个属性：

```js
$("button").click(function(){
  $("div").animate({
    left:'250px',
    opacity:'0.5',
    height:'150px',
    width:'150px'
  });
});
```

**可以用 animate() 方法来操作所有 CSS 属性吗？**

是的，几乎可以！不过，需要记住一件重要的事情：当使用 animate() 时，必须使用 Camel 标记法书写所有的属性名，比如，必须使用 paddingLeft 而不是 padding-left，使用 marginRight 而不是 margin-right，等等。

同时，色彩动画并不包含在核心 jQuery 库中。

如果需要生成颜色动画，您需要从 jquery.com 下载 [颜色动画](http://plugins.jquery.com/color/) 插件。

### 使用相对值

也可以定义相对值（该值相对于元素的当前值）。需要在值的前面加上 += 或 -=：

```js
$("button").click(function(){
  $("div").animate({
    left:'250px',
    height:'+=150px',
    width:'+=150px'
  });
});
```

### 使用预定义的值

您甚至可以把属性的动画值设置为 “show”、“hide” 或 “toggle”：

```js
$("button").click(function(){
  $("div").animate({
    height:'toggle'
  });
});
```

### 使用队列功能

默认地，jQuery 提供针对动画的队列功能。

这意味着如果您在彼此之后编写多个 animate() 调用，jQuery 会创建包含这些方法调用的"内部"队列。然后逐一运行这些 animate 调用。

```js
$("button").click(function(){
  var div=$("div");
  div.animate({height:'300px',opacity:'0.4'},"slow");
  div.animate({width:'300px',opacity:'0.8'},"slow");
  div.animate({height:'100px',opacity:'0.4'},"slow");
  div.animate({width:'100px',opacity:'0.8'},"slow");
});
```

下面的例子把 div 元素往右边移动了 100 像素，然后增加文本的字号：

```js
$("button").click(function(){
  var div=$("div");
  div.animate({left:'100px'},"slow");
  div.animate({fontSize:'3em'},"slow");
});
```

## 停止动画

### stop() 方法

jQuery stop() 方法用于停止动画或效果，在它们完成之前。

stop() 方法适用于所有 jQuery 效果函数，包括滑动、淡入淡出和自定义动画。

**语法:**

```
$(selector).stop(stopAll,goToEnd);
```

可选的 stopAll 参数规定是否应该清除动画队列。默认是 false，即仅停止活动的动画，允许任何排入队列的动画向后执行。

可选的 goToEnd 参数规定是否立即完成当前动画。默认是 false。

因此，默认地，stop() 会清除在被选元素上指定的当前动画。

下面的例子演示 stop() 方法，不带参数：

```js
$("#stop").click(function(){
  $("#panel").stop();
});
```

## Callback 方法

### Callback 方法

Callback 函数在当前动画 100% 完成之后执行。

### 动画的问题

许多 jQuery 函数涉及动画。这些函数也许会将 *speed* 或 *duration* 作为可选参数。

例子： `$("p").hide("slow")`

*speed* 或 *duration* 参数可以设置许多不同的值，比如 “slow”, “fast”, “normal” 或毫秒。



### 使用 callback 实例

以下实例在隐藏效果完全实现后回调函数:

```js
$("button").click(function(){
  $("p").hide("slow",function(){
    alert("段落现在被隐藏了");
  });
});
```



### 没有 callback(回调)

以下实例没有回调函数，警告框会在隐藏效果完成前弹出：

```js
$("button").click(function(){
  $("p").hide(1000);
  alert("段落现在被隐藏了");
});
```

## 链式写法

### 链式写法(Chaining)

通过 jQuery，可以把动作/方法链接在一起。

Chaining 允许我们在一条语句中运行多个 jQuery 方法（在相同的元素上）。

到现在，我们都是一次写一条 jQuery 语句（一条接着另一条）。

不过，有一种名为链接（chaining）的技术，允许我们在相同的元素上运行多条 jQuery 命令，一条接着另一条。

**提示：** 这样的话，浏览器就不必多次查找相同的元素。

如需链接一个动作，您只需简单地把该动作追加到之前的动作上。

下面的例子把 css()、slideUp() 和 slideDown() 链接在一起。“p1” 元素首先会变为红色，然后向上滑动，再然后向下滑动：

```js
$("#p1").css("color","red").slideUp(2000).slideDown(2000);
```

如果需要，我们也可以添加多个方法调用。

**提示：**当进行链接时，代码行会变得很长。不过，jQuery 语法不是很严格；您可以按照希望的格式来写，包含换行和缩进。

如下书写也可以很好地运行：

```js
$("#p1").css("color","red")
  .slideUp(2000)
  .slideDown(2000);
```

jQuery 会抛掉多余的空格，并当成一行长代码来执行上面的代码行。

------



# jQuery HTML

## 获取内容和属性

jQuery 拥有可操作 HTML 元素和属性的强大方法。

### jQuery DOM 操作

jQuery 中非常重要的部分，就是操作 DOM 的能力。

jQuery 提供一系列与 DOM 相关的方法，这使访问和操作元素和属性变得很容易。

> **DOM = Document Object Model（文档对象模型）**

> DOM 定义访问 HTML 和 XML 文档的标准：

> “W3C 文档对象模型独立于平台和语言的界面，允许程序和脚本动态访问和更新文档的内容、结构以及样式。”

### text()、html() 以及 val()

三个简单实用的用于 DOM 操作的 jQuery 方法：

- text() - 设置或返回所选元素的文本内容
- html() - 设置或返回所选元素的内容（包括 HTML 标记）
- val() - 设置或返回表单字段的值

下面的例子演示如何通过 jQuery text() 和 html() 方法来获得内容：

```js
$("#btn1").click(function(){
  alert("Text: " + $("#test").text());
});
$("#btn2").click(function(){
  alert("HTML: " + $("#test").html());
});

//下面的例子演示如何通过 jQuery val() 方法获得输入字段的值：
$("#btn1").click(function(){
  alert("值为: " + $("#test").val());
});
```

### attr()

jQuery attr() 方法用于获取属性值。

下面的例子演示如何获得链接中 href 属性的值：

```js
$("button").click(function(){
  alert($("#axihe").attr("href"));
});
```

## 设置内容和属性

### text()、html() 以及 val()

我们将使用前一章中的三个相同的方法来设置内容：

- text() - 设置或返回所选元素的文本内容
- html() - 设置或返回所选元素的内容（包括 HTML 标记）
- val() - 设置或返回表单字段的值

下面的例子演示如何通过 text()、html() 以及 val() 方法来设置内容：

```js
$("#btn1").click(function(){
    $("#test1").text("Hello world!");
});
$("#btn2").click(function(){
    $("#test2").html("<b>Hello world!</b>");
});
$("#btn3").click(function(){
    $("#test3").val("axihe");
});
```

### text()、html() 以及 val() 的回调函数

上面的三个 jQuery 方法：text()、html() 以及 val()，同样拥有回调函数。回调函数有两个参数：被选元素列表中当前元素的下标，以及原始（旧的）值。**然后以函数新值返回您希望使用的字符串**。

下面的例子演示带有回调函数的 text() 和 html()：

```js
$("#btn1").click(function(){
    $("#test1").text(function(i,origText){
        return "旧文本: " + origText + " 新文本: Hello world! (index: " + i + ")"; 
    });
});
 
$("#btn2").click(function(){
    $("#test2").html(function(i,origText){
        return "旧 html: " + origText + " 新 html: Hello <b>world!</b> (index: " + i + ")"; 
    });
});
```

### attr()

jQuery attr() 方法也用于设置/改变属性值。

下面的例子演示如何改变（设置）链接中 href 属性的值：

```js
$("button").click(function(){
  $("#axihe").attr("href","https://www.axihe.com/edu/jquery");
});
```

attr() 方法也允许您**同时设置多个属性**。

下面的例子演示如何同时设置 href 和 title 属性：

```js
$("button").click(function(){
    $("#axihe").attr({
        "href" : "https://www.axihe.com/edu/jquery",
        "title" : "jQuery 教程"
    });
});
```

### attr() 的回调函数

jQuery 方法 attr()，也提供回调函数。回调函数有两个参数：被选元素列表中当前元素的下标，以及原始（旧的）值。然后以函数新值返回您希望使用的字符串。

下面的例子演示带有回调函数的 attr() 方法：

```js
$("button").click(function(){
  $("#axihe").attr("href", function(i,origValue){
    return origValue + "/jquery"; 
  });
});
```

## 添加元素

通过 jQuery，可以很容易地添加新元素/内容。

我们将学习用于添加新内容的四个 jQuery 方法：

- append() - 在被选元素的结尾插入内容
- prepend() - 在被选元素的开头插入内容
- after() - 在被选元素之后插入内容
- before() - 在被选元素之前插入内容

### append() 方法

jQuery append() 方法在被选元素的结尾插入内容（仍然该元素的内部）。

```js
$("p").append("追加文本");
```

### prepend() 方法

jQuery prepend() 方法在被选元素的开头插入内容。

```js
$("p").prepend("在开头追加文本");
```

### 添加若干新元素

在上面的例子中，我们只在被选元素的开头/结尾插入文本/HTML。

不过，append() 和 prepend() 方法能够通过参数接收无限数量的新元素。可以通过 jQuery 来生成文本/HTML（就像上面的例子那样），或者通过 JavaScript 代码和 DOM 元素。

在下面的例子中，我们创建若干个新元素。这些元素可以通过 text/HTML、jQuery 或者 JavaScript/DOM 来创建。然后我们通过 append() 方法把这些新元素追加到文本中（对 prepend() 同样有效）：

```js
function appendText()
{
    var txt1="<p>文本。</p>";              // 使用 HTML 标签创建文本
    var txt2=$("<p></p>").text("文本。");  // 使用 jQuery 创建文本
    var txt3=document.createElement("p");
    txt3.innerHTML="文本。";               // 使用 DOM 创建文本 text with DOM
    $("body").append(txt1,txt2,txt3);        // 追加新元素
}
```

### after() 和 before() 方法

jQuery after() 方法在被选元素之后插入内容。

jQuery before() 方法在被选元素之前插入内容。

```js
$("img").after("在后面添加文本"); 
$("img").before("在前面添加文本");
```

### 添加若干新元素

```js
function afterText()
{
    var txt1="<b>I </b>";                    // 使用 HTML 创建元素
    var txt2=$("<i></i>").text("love ");     // 使用 jQuery 创建元素
    var txt3=document.createElement("big");  // 使用 DOM 创建元素
    txt3.innerHTML="jQuery!";
    $("img").after(txt1,txt2,txt3);          // 在图片后添加文本
}
```

## 删除元素

通过 jQuery，可以很容易地删除已有的 HTML 元素。

如需删除元素和内容，一般可使用以下两个 jQuery 方法：

- remove() - 删除被选元素（及其子元素）
- empty() - 从被选元素中删除子元素

### remove() 方法

jQuery remove() 方法删除被选元素及其子元素。

```js
$("#div1").remove();
```

### empty() 方法

jQuery empty() 方法删除被选元素的子元素。

```js
$("#div1").empty();
```

### 过滤被删除的元素

jQuery remove() 方法也可接受一个参数，允许您对被删元素进行过滤。

该参数可以是任何 jQuery 选择器的语法。

下面的例子删除 class=“italic” 的所有 p 元素：

```js
$("p").remove(".italic");
```

## 获取并设置 CSS 类

通过 jQuery，可以很容易地对 CSS 元素进行操作。

jQuery 拥有若干进行 CSS 操作的方法。我们将学习下面这些：

- addClass() - 向被选元素添加一个或多个类
- removeClass() - 从被选元素删除一个或多个类
- toggleClass() - 对被选元素进行添加/删除类的切换操作
- css() - 设置或返回样式属性

下面的样式表将用于本页的所有例子：

```css
.important
{
        font-weight:bold;
        font-size:xx-large;
}
 
.blue
{
        color:blue;
}
```

### addClass() 方法

下面的例子展示如何向不同的元素添加 class 属性。当然，在添加类时，您也可以选取多个元素：

```js
$("button").click(function(){
  $("h1,h2,p").addClass("blue");
  $("div").addClass("important");
});
```

您也可以在 addClass() 方法中规定多个类：

```js
$("button").click(function(){
  $("body div:first").addClass("important blue");
});
```

### removeClass() 方法

下面的例子演示如何在不同的元素中删除指定的 class 属性：

```js
$("button").click(function(){
  $("h1,h2,p").removeClass("blue");
});
```

### toggleClass() 方法

下面的例子将展示如何使用 jQuery toggleClass() 方法。该方法对被选元素进行添加/删除类的切换操作：

```js
$("button").click(function(){
  $("h1,h2,p").toggleClass("blue");
});
```

## css() 方法

css() 方法设置或返回被选元素的一个或多个样式属性。

### 返回 CSS 属性

如需返回指定的 CSS 属性的值，请使用如下语法：

```js
css("propertyname");
```

下面的例子将返回首个匹配元素的 background-color 值：

```js
$("p").css("background-color");
```

### 设置 CSS 属性

如需设置指定的 CSS 属性，请使用如下语法：

```js
css("propertyname","value");
```

下面的例子将为所有匹配元素设置 background-color 值：

```js
$("p").css("background-color","yellow");
```

### 设置多个 CSS 属性

如需设置多个 CSS 属性，请使用如下语法：

```js
css({"propertyname":"value","propertyname":"value",...});
```

下面的例子将为所有匹配元素设置 background-color 和 font-size：

```js
$("p").css({"background-color":"yellow","font-size":"200%"});
```

## 尺寸

通过 jQuery，很容易处理元素和浏览器窗口的尺寸。

jQuery 提供多个处理尺寸的重要方法：

- width()
- height()
- innerWidth()
- innerHeight()
- outerWidth()
- outerHeight()

### width() 和 height() 方法

width() 方法设置或返回元素的宽度（不包括内边距、边框或外边距）。

height() 方法设置或返回元素的高度（不包括内边距、边框或外边距）。

下面的例子返回指定的 div 元素的宽度和高度：

```js
$("button").click(function(){
  var txt="";
  txt+="div 的宽度是: " + $("#div1").width() + "</br>";
  txt+="div 的高度是: " + $("#div1").height();
  $("#div1").html(txt);
});
```

### innerWidth() 和 innerHeight() 方法

innerWidth() 方法返回元素的宽度（包括内边距）。

innerHeight() 方法返回元素的高度（包括内边距）。

下面的例子返回指定的 div 元素的 inner-width/height：

```js
$("button").click(function(){
  var txt="";
  txt+="div 宽度，包含内边距: " + $("#div1").innerWidth() + "</br>";
    txt+="div 高度，包含内边距: " + $("#div1").innerHeight();
  $("#div1").html(txt);
});
```

### outerWidth() 和 outerHeight() 方法

outerWidth() 方法返回元素的宽度（包括内边距和边框）。

outerHeight() 方法返回元素的高度（包括内边距和边框）。

下面的例子返回指定的

元素的 outer-width/height：

```js
$("button").click(function(){
  var txt="";
  txt+="div 宽度，包含内边距和边框: " + $("#div1").outerWidth() + "</br>";
  txt+="div 高度，包含内边距和边框: " + $("#div1").outerHeight();
  $("#div1").html(txt);
});
```

------

#  jQuery 遍历

## 遍历

### 什么是遍历？

jQuery 遍历，意为"移动"，**用于根据其相对于其他元素的关系来"查找"（或选取）HTML 元素**。以某项选择开始，并沿着这个选择移动，直到抵达您期望的元素为止。

通过 jQuery 遍历，您能够从被选（当前的）元素开始，轻松地在家族树中向上移动（祖先），向下移动（子孙），水平移动（同胞）。这种移动被称为对 DOM 进行遍历。

祖先是父、祖父、曾祖父等等。后代是子、孙、曾孙等等。同胞拥有相同的父。

### 遍历 DOM

jQuery 提供了多种遍历 DOM 的方法。

遍历方法中最大的种类是树遍历（tree-traversal）。

## 祖先

祖先是父、祖父或曾祖父等等。

通过 jQuery，您能够向上遍历 DOM 树，以查找元素的祖先。

### 向上遍历 DOM 树

这些 jQuery 方法很有用，它们用于向上遍历 DOM 树：

- parent()
- parents()
- parentsUntil()

### parent() 方法

parent() 方法返回被选元素的直接父元素。

该方法**只会向上一级对 DOM 树进行遍历**。

下面的例子返回每个 元素的的直接父元素：

```js
$(document).ready(function(){
  $("span").parent();
});
```

### parents() 方法

parents() 方法**返回被选元素的所有祖先元素，它一路向上直到文档的根元素 ()**。

下面的例子返回所有 元素的所有祖先：

```js
$(document).ready(function(){
  $("span").parents();
});
```

您也**可以使用可选参数来过滤对祖先元素的搜索**。

下面的例子返回所有 元素的所有祖先，并且它是 ul 元素：

```js
$(document).ready(function(){
  $("span").parents("ul");
});
```

### parentsUntil() 方法

parentsUntil() 方法**返回介于两个给定元素之间的所有祖先元素**。

下面的例子返回介于 `<span>` 与 `<div>` 元素之间的所有祖先元素：

```js
$(document).ready(function(){
  $("span").parentsUntil("div");
});
```

## 后代

后代是子、孙、曾孙等等。

通过 jQuery，您能够向下遍历 DOM 树，以查找元素的后代。

### 向下遍历 DOM 树

下面是两个用于向下遍历 DOM 树的 jQuery 方法：

- children()
- find()

### children() 方法

children() 方法返回被选元素的**所有直接子元素**。

该方法只会向下一级对 DOM 树进行遍历。

下面的例子返回每个元素的所有直接子元素：

```js
$(document).ready(function(){
  $("div").children();
});
```

**您也可以使用可选参数来过滤对子元素的搜索。**

下面的例子返回类名为 “1” 的所有 `<p>` 元素，并且它们是 `<div>` 的直接子元素：

```js
$(document).ready(function(){
  $("div").children("p.1");
});
```

### find() 方法

find() 方法**返回被选元素的后代元素，一路向下直到最后一个后代**。

下面的例子返回属于 `<div>` 后代的所有 `<span>` 元素：

```js
$(document).ready(function(){
  $("div").find("span");
});
```

下面的例子返回 `<div>` 的所有后代：

```js
$(document).ready(function(){
  $("div").find("*");
});
```

## 同胞

同胞拥有相同的父元素。

通过 jQuery，您能够在 DOM 树中遍历元素的同胞元素。

### 在 DOM 树中水平遍历

有许多有用的方法让我们在 DOM 树进行水平遍历：

- siblings()
- next()
- nextAll()
- nextUntil()
- prev()
- prevAll()
- prevUntil()

### siblings() 方法

siblings() 方法返回被选元素的所有同胞元素。

下面的例子返回 `<h2>` 的所有同胞元素：

```js
$(document).ready(function(){
  $("h2").siblings();
});
```

您也可以使用可选参数来过滤对同胞元素的搜索。

下面的例子返回属于 `<h2>` 的同胞元素的所有 `<p>` 元素：

```js
$(document).ready(function(){
  $("h2").siblings("p");
});
```

### next() 方法

next() 方法返回被选元素的下一个同胞元素。

**该方法只返回一个元素。**

下面的例子返回 `<h2>` 的下一个同胞元素：

```js
$(document).ready(function(){
  $("h2").next();
});
```

### nextAll() 方法

nextAll() 方法**返回被选元素的所有跟随的同胞元素**。

下面的例子返回 `<h2>` 的所有跟随的同胞元素：

```js
$(document).ready(function(){
  $("h2").nextAll();
});
```

### nextUntil() 方法

nextUntil() 方法**返回介于两个给定参数之间的所有跟随的同胞元素**。

下面的例子返回介于 `<h2>` 与 `<h6>` 元素之间的所有同胞元素：

```js
$(document).ready(function(){
  $("h2").nextUntil("h6");
});
```

### prev(), prevAll() & prevUntil() 方法

prev(), prevAll() 以及 prevUntil() 方法的工作方式与上面的方法类似，只不过方向相反而已：它们返回的是前面的同胞元素（在 DOM 树中沿着同胞之前元素遍历，而不是之后元素遍历）。

```js
$(document).ready(function(){
  $("h2").prev();
});

$(document).ready(function(){
  $("h2").prevAll();
});

$(document).ready(function(){
  $("h2").prevUntil("h6");
});
```

## 过滤

### 缩小搜索元素的范围

三个最基本的过滤方法是：first(), last() 和 eq()，它们允许您基于其在一组元素中的位置来选择一个特定的元素。

其他过滤方法，比如 filter() 和 not() 允许您选取匹配或不匹配某项指定标准的元素。

### first() 方法

first() 方法返回被选元素的首个元素。

下面的例子选取首个 `<div>` 元素内部的第一个 `<p>` 元素：

```js
$(document).ready(function(){
  $("div p").first();
});
```

### last() 方法

last() 方法返回被选元素的最后一个元素。

下面的例子选择最后一个 `<div>` 元素中的最后一个 `<p>` 元素：

```js
$(document).ready(function(){
  $("div p").last();
});
```

### eq() 方法

eq() 方法返回被选元素中带有指定索引号的元素。

索引号从 0 开始，因此首个元素的索引号是 0 而不是 1。下面的例子选取第二个 p 元素（索引号 1）：

```js
$(document).ready(function(){
  $("p").eq(1);
});
```

### filter() 方法

**filter() 方法允许您规定一个标准**。不匹配这个标准的元素会被从集合中删除，**匹配的元素会被返回**。

下面的例子返回带有类名 “url” 的所有 p 元素：

```js
$(document).ready(function(){
  $("p").filter(".url");
});
```

### not() 方法

not() 方法返回不匹配标准的所有元素。

提示：**not() 方法与 filter() 相反。**

下面的例子返回不带有类名 “url” 的所有 p 元素：

```js
$(document).ready(function(){
  $("p").not(".url");
});
```
