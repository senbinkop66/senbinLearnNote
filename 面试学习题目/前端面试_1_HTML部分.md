------

## html

------

#### 1.1 html标签的类型（head， body，！Doctype） 他们的作用是什么

**参考答案：**

!DOCTYPE 标签：

- 它是指示 web 浏览器关于页面使用哪个 HTML 版本进行编写的指令.

head：

- 是所有头部元素的容器, 绝大多数头部标签的内容不会显示给读者，它的作用是保存页面的一些 [元数据](https://developer.mozilla.org/zh-CN/docs/Glossary/Metadata)。
- 该标签下所包含的部分可加入的标签有<title>,<meta>和<link>

body :

- 用于定义文档的主体, 包含了文档的所有内容
- 该标签支持 html 的全局属性和事件属性.

------

#### 1.2 h5新特性

**参考答案：**

- 新增选择器 document.querySelector、document.querySelectorAll
- 拖拽释放(Drag and drop) API
- 媒体播放的 video 和 audio
- 本地存储 localStorage 和 sessionStorage
- 离线应用 manifest
- 桌面通知 Notifications
- 语意化标签 article、footer、header、nav、section
- 增强表单控件 calendar、date、time、email、url、search
- 地理位置 Geolocation
- 多任务 webworker
- 全双工通信协议 websocket
- 历史管理 history
- 跨域资源共享(CORS) Access-Control-Allow-Origin
- 页面可见性改变事件 visibilitychange
- 跨窗口通信 PostMessage
- Form Data 对象
- 绘画 canvas

H5移除的元素：

- 纯表现的元素：basefont、big、center、font、s、strike、tt、u
- 对可用性产生负面影响的元素：frame、frameset、noframes

------

#### 1.3 伪类和伪元素

**参考答案：**

伪类：用于已有元素处于某种状态时为其添加对应的样式，这个状态是根据用户行为而动态变化的。

例如：当用户悬停在指定元素时，可以通过:hover来描述这个元素的状态，虽然它和一般css相似，可以为 已有元素添加样式，**但是它只有处于DOM树无法描述的状态下才能为元素添加样式，所以称为伪类。**

伪元素：用于创建一些不在DOM树中的元素，并为其添加样式。

例如，我们可以通过:before来在一个元素之前添加一些文本，并为这些文本添加样式，**虽然用户可以看见 这些文本，但是它实际上并不在DOM文档中。**

------

#### 1.4 html5语义化

**参考答案：**

在HTML5出来之前，我们习惯于用div来表示页面的章节或者不同模块，但是div本身是没有语义的。但是现在，HTML5中加入了一些语义化标签，来更清晰的表达文档结构。

```html
<title>      <!--：页面标题。-->
<hn>         <!--：h1~h6，分级标题，<h1> 与 <title> 协调有利于搜索引擎优化。-->
<ul>         <!--：无序列表。-->
<li>         <!--：有序列表。-->
<header>     <!--：页眉通常包括网站标志、主导航、全站链接以及搜索框。-->
<nav>         <!--：标记导航，仅对文档中重要的链接群使用。-->
<main>         <!--：页面主要内容，一个页面只能使用一次。如果是web应用，则包围其主要功能。-->
<article>    <!--：定义外部的内容，其中的内容独立于文档的其余部分。-->
<section>    <!--：定义文档中的节（section、区段）。比如章节、页眉、页脚或文档中的其他部分。-->
<aside>         <!--：定义其所处内容之外的内容。如侧栏、文章的一组链接、广告、友情链接、相关产品列表等。-->
<footer>     <!--：页脚，只有当父级是body时，才是整个页面的页脚。-->
<small>      <!--：呈现小号字体效果，指定细则，输入免责声明、注解、署名、版权。-->
<strong>     <!--：和 em 标签一样，用于强调文本，但它强调的程度更强一些。-->
<em>         <!--：将其中的文本表示为强调的内容，表现为斜体。-->
<mark>       <!--：使用黄色突出显示部分文本。-->
<figure>     <!--：规定独立的流内容（图像、图表、照片、代码等等）（默认有40px左右margin）。-->
<figcaption><!--：定义 figure 元素的标题，应该被置于 figure 元素的第一个或最后一个子元素的位置。-->
<cite>       <!--：表示所包含的文本对某个参考文献的引用，比如书籍或者杂志的标题。-->
<blockquoto><!--：定义块引用，块引用拥有它们自己的空间。-->
<q>          <!--：短的引述（跨浏览器问题，尽量避免使用）。-->
<time>       <!--：datetime属性遵循特定格式，如果忽略此属性，文本内容必须是合法的日期或者时间格式。-->
<abbr>       <!--：简称或缩写。-->
<dfn>       <!--：定义术语元素，与定义必须紧挨着，可以在描述列表dl元素中使用。-->
<address>    <!--：作者、相关人士或组织的联系信息（电子邮件地址、指向联系信息页的链接）。-->
<del>        <!--：移除的内容。-->
<ins>        <!--：添加的内容。-->
<code>       <!--：标记代码。-->
<meter>      <!--：定义已知范围或分数值内的标量测量。（Internet Explorer 不支持 meter 标签）-->
<progress>    <!--：定义运行中的进度（进程）。-->
```

**扩展：**

语义化优点：

- 易于用户阅读，样式丢失的时候能让页面呈现清晰的结构。
- 有利于SEO，搜索引擎根据标签来确定上下文和各个关键字的权重。
- 方便屏幕阅读器解析，如盲人阅读器根据语义渲染网页
- 有利于开发和维护，语义化更具可读性，代码更好维护，与CSS3关系更和谐。

------

#### 1.5 audio 标签的api

**参考答案：**

audio常用属性

| **属性** | **属性值** | **注释**                                                     |
| :------- | :--------- | :----------------------------------------------------------- |
| src      | url        | 播放的音乐的url地址（火狐只支持ogg的音乐，而IE9只支持MP3格式的音乐。chrome貌似全支持） |
| preload  | preload    | 预加载（在页面被加载时进行加载或者说缓冲音频），如果使用了autoplay的话那么该属性失效。 |
| loop     | loop       | 循环播放                                                     |
| controls | controls   | 是否显示默认控制条（控制按钮）                               |
| autoplay | autoplay   | 自动播放                                                     |

audio音乐格式的支持

| **音频格式** | **Chrome** | **Firefox** | **IE9** | **Opera** | **Safari** |
| :----------- | :--------- | :---------- | :------ | :-------- | :--------- |
| OGG          | √          | √           | √       | ×         | ×          |
| MP3          | √          | ×           | √       | ×         | √          |
| WAV          | ×          | √           | ×       | √         | ×          |

audio属性

| 属性        | 注释                                                         |
| :---------- | :----------------------------------------------------------- |
| duration    | 获取媒体文件的总时长，以s为单位，如果无法获取，返回NaN       |
| paused      | 如果媒体文件被暂停，那么paused属性返回true，反之则返回false  |
| ended       | 如果媒体文件播放完毕返回true                                 |
| muted       | 用来获取或设置静音状态。值为boolean                          |
| volume      | 控制音量的属性值为0-1;0为音量最小，1为音量最大               |
| startTime   | 返回起始播放时间                                             |
| error       | 返回错误代码，为null的时候为正常。否则可以通过Music.error.code来获取具体的错误代码： 1.用户终止 2.网络错误 3.解码错误 4.URL无效 |
| currentTime | 用来获取或控制当前播放的时间，单位为s。                      |
| currentSrc  | 以字符串形式返回正在播放或已加载的文件                       |

常用的控制用的函数：

| 函数             | 作用                                                 |
| :--------------- | :--------------------------------------------------- |
| load()           | 加载音频、视频软件                                   |
| play()           | 加载并播放音频、视频文件或重新播放暂停的的音频、视频 |
| pause()          | 暂停出于播放状态的音频、视频文件                     |
| canPlayType(obj) | 测试是否支持给定的Mini类型的文件                     |

常用audio的事件：

| 事件名称       | 事件作用                                           |
| :------------- | :------------------------------------------------- |
| loadstart      | 客户端开始请求数据                                 |
| progress       | 客户端正在请求数据（或者说正在缓冲）               |
| play           | play()和autoplay播放时                             |
| pause          | pause()方法促发时                                  |
| ended          | 当前播放结束                                       |
| timeupdate     | 当前播放时间发生改变的时候。播放中常用的时间处理哦 |
| canplaythrough | 歌曲已经载入完全完成                               |
| canplay        | 缓冲至目前可播放状态。                             |

---

#### 1.6 页面从获得document到渲染之间的事件

　页面加载时，大致可以分为以下几个步骤：

1. 　　开始解析HTML文档结构
2. 　　加载外部样式表及JavaScript脚本
3. 　　解析执行JavaScript脚本
4. 　　DOM树渲染完成
5. 　　加载未完成的外部资源（如 图片）
6.     页面加载成功

　那么在这整个过程中触发了哪些**常用**的事件呢？

**document readystatechange事件**

　　**readyState** 属性描述了文档的加载状态，在整个加载过程中 document.readyState会不断变化，每次变化都会触发readystatechange事件。

　　**readyState** 有以下状态：

　　　　loading / 加载`document` 仍在加载。

　　　　interactive / 互动文档已经完成加载，文档已被解析，但是诸如图像，[样式表](https://so.csdn.net/so/search?q=样式表&spm=1001.2101.3001.7020)和框架之类的子资源仍在加载。

　　　　complete / 完成T文档和所有子资源已完成加载。状态表示 `load` 事件即将被触发。

　　比如说在步骤2的时候对应 interactive  步骤5之后对应complete ，都会触发readystatechange事件。

> 文档，图片等加载时的readyState 和 XMLHttpRequest.readyState 是不一样的。要注意区分

**document DOMContentLoaded事件**

　　DOM树渲染完成时触发DOMContentLoaded事件，此时可能外部资源还在加载。 jquery中的ready事件就是同样的效果

**window load事件**

　　所有的资源全部加载完成会触发window 的 load事件。

```html
    <div>
      <h1>测试页面加载时，事件触发顺序</h1>
      <img src="https://img.php.cn/upload/article/000/000/040/5de23106225a7269.jpg">
      <h1>测试页面加载时，事件触发顺序</h1>
      <img src="https://img95.699pic.com/xsj/1k/3o/kd.jpg!/fw/700/watermark/url/L3hzai93YXRlcl9kZXRhaWwyLnBuZw/align/southeast">
    </div>
<script type="text/javascript">
  console.log("resolve body javascript");

  window.addEventListener("load", function(){
    console.log("window load");
  });

  document.addEventListener("readystatechange", function(){
    console.log("document readystatechange:" + document.readyState);
  });

  document.addEventListener("DOMContentLoaded", function(){
    console.log("document DOMContentLoaded");
  });

  document.addEventListener("load", function(){
      //没有该事件,document.load()作为旧版的 w3c 标准 DOM Level 3 Load & Save module 其中的一部分。
    console.log("document load");
  });
  
    /*
    test127.html:20 resolve body javascript
    test127.html:27 document readystatechange:interactive
    test127.html:31 document DOMContentLoaded
    test127.html:27 document readystatechange:complete
    test127.html:23 window load
	*/
</script>
```

所以在只需要文档结构加载完成就可以执行的脚本，可以监听DOMContentLoaded ；需要所有内容都加载完成才能执行的脚本，要监听window.onload  或者 document.readyState === 'complete'。　

---

#### 1.7 meta标签的属性，有什么用？

**HTML `<meta>` 元素**表示那些不能由其它 HTML 元相关（meta-related）元素（([``](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/base)、[``](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/link), [``](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/script)、[``](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/style) 或 [``](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/title)）之一表示的任何[元数据](https://developer.mozilla.org/zh-CN/docs/Glossary/Metadata)信息。

`meta` 元素定义的元数据的类型包括以下几种：

- 如果设置了 [`name`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/meta#attr-name) 属性，`meta` 元素提供的是文档级别（*document-level*）的元数据，应用于整个页面。
- 如果设置了 [`http-equiv`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/meta#attr-http-equiv) 属性，`meta` 元素则是编译指令，提供的信息与类似命名的 HTTP 头部相同。
- 如果设置了 [`charset`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/meta#attr-charset) 属性，`meta` 元素是一个字符集声明，告诉文档使用哪种字符编码。
- 如果设置了 [`itemprop`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes#attr-itemprop) 属性，`meta` 元素提供用户定义的元数据。

**元数据(metadata)元素**的概念，用来构建HTML文档的基本结构，以及就如何处理文档向浏览器提供信息和指示，它们本身不是文档内容，但提供了关于后面文档内容的信息。

具体用途

##### 1. 指定名/值对定义元数据

name属性与content属性结合使用, name用来表示元数据的类型，表示当前<meta>标签的具体作用；content属性用来提供值。

```html
<meta name="参数" content="具体描述信息">

<meta name="keywords" content="电商,物流">
<meta name="author" content="张三">
<meta name="description" content="网站描述...">
```

##### 2. 声明字符编码

charset属性为HTML5新增的属性，用于声明字符编码,以下两种写法效果一样

```html
<meta charset="utf-8"> //HTML5
```

##### 3. 模拟http标头字段

**http-equiv**属性与**content**属性结合使用, **http-equiv**属性为指定所要模拟的标头字段的名称，**content**属性用来提供值。

```html
<meta http-equiv="参数" content="具体的描述">
```

**content-Type** 声明网页字符编码:

```html
<meta http-equiv="content-Type" content="text/html charset=UTF-8">
```

**refresh** 指定一个时间间隔(**以秒为单位**),在此时间过去之后从服务器重新载入当前页面,也可以另外指定一个页面.

```html
<meta http-equiv="refresh" content="2;URL=http://www.baidu.com">//2秒后在当前页跳转到百度
```

**X-UA-Compatible** 浏览器采取何种版本渲染当前页面

```html
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"> //指定IE和Chrome使用最新版本渲染当前页面
```

**expires** 用于设定网页的到期时间，过期后网页必须到服务器上重新传输

```html
<meta http-equiv="expires" content="Sunday 22 July 2016 16:30 GMT">
```

**catch-control** 用于指定所有缓存机制在整个请求/响应链中必须服从的指令

```html
<meta http-equiv="cache-control" content="no-cache">//
```

| content的值                          | 说明                                                         |
| ------------------------------------ | ------------------------------------------------------------ |
| public                               | 所有内容都将被缓存(客户端和代理服务器都可缓存)               |
| private                              | 内容只缓存到私有缓存中(仅客户端可以缓存，代理服务器不可缓存) |
| no-cache                             | 必须先与服务器确认返回的响应是否被更改，然后才能使用该响应来满足后续对同一个网址的请求。因此，如果存在合适的验证令牌 (ETag)，no-cache 会发起往返通信来验证缓存的响应，如果资源未被更改，可以避免下载。 |
| no-store                             | 所有内容都不会被缓存到缓存或 Internet 临时文件中             |
| must-revalidation/proxy-revalidation | 如果缓存的内容失效，请求必须发送到服务器/代理以进行重新验证  |
| max-age=xxx (xxx is numeric)         | 缓存的内容将在 xxx 秒后失效, 这个选项只在HTTP 1.1可用, 并如果和Last-Modified一起使用时, 优先级较高 |

---

#### 1.8 preload和prefetch的区别？

关键字 **`preload`** 作为元素<link)>的属性 [`rel`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/link#attr-rel) 的值，表示用户十分有可能需要在当前浏览中加载目标资源，所以浏览器**必须**预先获取和缓存对应资源。 

preload 顾名思义就是一种预加载的方式，它通过声明向浏览器声明一个需要提交加载的资源，当资源真正被使用的时候立即执行，就无需等待网络的消耗。

关键字 **`prefetch`** 作为元素<link>的属性 [`rel`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/link#attr-rel) 的值，是为了提示浏览器，用户未来的浏览有可能需要加载目标资源，所以浏览器**有可能**通过事先获取和缓存对应资源，优化用户体验。

链接预取是一种浏览器机制，其**利用浏览器空闲时间来下载或预取用户在不久的将来可能访问的文档**。网页向浏览器提供一组预取提示，并在浏览器完成当前页面的加载后开始静默地拉取指定的文档并将其存储在缓存中。当用户访问其中一个预取文档时，便可以快速的从浏览器缓存中得到。

prefetch 跟 preload 不同，它的作用是告诉浏览器未来可能会使用到的某个资源，浏览器就会在闲时去加载对应的资源，若能预测到用户的行为，比如懒加载，点击到其它页面等则相当于提前预加载了需要的资源。它的用法跟 preload 是一样的

```html
<link rel="prefetch" href="/images/big.jpeg">
```

preload 与prefetch 的区别

- **preload** 是一个声明式 fetch，可以**强制浏览器在不阻塞 document 的 onload 事件的情况下请求资源**。 preload 顾名思义就是一种预加载的方式，它通过声明向浏览器声明一个需要提交加载的资源，当资源真正被使用的时候立即执行，就无需等待网络的消耗。
- **prefetch** 告诉浏览器**这个资源将来可能需要**，但是什么时间加载这个资源是由浏览器来决定的。 若能预测到用户的行为，比如懒加载，点击到其它页面等则相当于提前预加载了需要的资源。

使用方法：

通过 Link 标签进行创建：

```html
<link rel="preload" href="/path/to/style.css" as="style">
```

在 HTTP 响应头中加上 preload 字段：

```
Link: <https://example.com/other/styles.css>; rel=preload; as=style
```

**这种方式比通过 Link 方式加载资源方式更快，请求在返回还没到解析页面的时候就已经开始预加载资源了**。

prefetch 预判加载与preload 使用方法是一样的

缓存行为

当资源被 preload 或者 prefetch 后，会从网络堆栈传输到 HTTP 缓存并进入渲染器的内存缓存。 如果资源可以被缓存（例如，存在有效的 cache-control 和 max-age），它将存储在 HTTP 缓存中，可用于当前和未来的会话。 如果资源不可缓存，则不会将其存储在 HTTP 缓存中。 相反，它会被缓存到内存缓存中并保持不变直到它被使用。

副作用

正确使用 preload/prefetch 不会造成二次下载，也就说：**当页面上使用到这个资源时候 preload 资源还没下载完，这时候不会造成二次下载**，会等待第一次下载并执行脚本。

对于 **preload 来说，一旦页面关闭了，它就会立即停止 preload 获取资源**，而对于 **prefetch 资源，即使页面关闭，prefetch 发起的请求仍会进行不会中断**。

preload 和 prefetch 的优先级

preload 用 “as” 或者用 “type” 属性来表示他们请求资源的优先级（比如说 preload 使用 as=”style” 属性将获得最高的优先级）。没有 “as” 属性的将被看作异步请求，“Early”意味着在所有未被预加载的图片请求之前被请求（“late”意味着之后）

例如，preload as =“style”将获得最高优先级，而as =“script”将获得低优先级或中优先级。 这些资源也遵循相同的CSP策略（例如脚本受 script-src 约束）。

**当页面 preload 已经在 Service Worker 缓存及 HTTP 缓存中的资源时会发生什么？**

这各情况来说是比较少的，但通常来说，会是比较好的情况 —— 如果资源没有超出 HTTP 缓存时间或者 Service Worker 没有主动重新发起请求，那么浏览器就不会再去请求这个资源了。

如果资源在 HTTP 缓存中(在SW缓存和网络之间)，那么 preload 会从相同的资源中获得缓存命中。

**使用 preload 或 prefetch，可能会浪费用户的带宽，特别是在资源没有缓存的情况下**。

没有用到的 preload 资源在 Chrome 的 console 里会在 onload 事件 3s 后发生警告。

**webpack优化之preload和prefetch**

单页面应用由于页面过多，可能会导致代码体积过大，从而使得首页打开速度过慢。所以**切分代码，优化首屏打开速度尤为重要**。

但是所有的技术手段都不是完美的。当我们切割代码后，首屏的js文件体积减少了好多。但是也有一个突出的问题：

那就是当跳转其他页面的时候，需要下载相应页面的js文件，这就导致体验极其不好，每一次点击访问新页面都要等待js文件下载，然后再去请求接口获取数据。频繁出现loading动画的体验真的不好

所以如果我们在进入首页后，在浏览器的空闲时间提前下好用户可能会点击页面的js文件，这样首屏的js文件大小得到了控制，而且再点击新页面的时候，相关的js文件已经下载好了，就不再会出现loading动画。

动态引入js文件，实现code-splitting，减少首屏打开时间

按引入情况加载，只需添加注释即可

```web-idl
代码分割注释：/*webpackChunkName: 'mp-supports'*/
prefetch注释：/* webpackPrefetch: true */
```

---

#### 1.9 盒子模型和内联盒子

在下面的示例中，我们在一个段落中使用了`<span>`，并对其应用了宽度、高度、边距、边框和内边距。可以看到，**宽度和高度被忽略了**。外边距、内边距和边框是生效的，但它们不会改变其他内容与内联盒子的关系，因此内边距和边框会与段落中的其他单词重叠。

```html
  <style type="text/css">
    p{
      width: 200px;
    }
   span {
    margin: 20px;
    padding: 20px;
    width: 80px;
    height: 50px;
    background-color: lightblue;
    border: 2px solid blue;
  }

  </style>
  <body>
<p>
    I am a paragraph and this is a <span>span</span> inside that paragraph. A span is an inline element and so does not respect width and height.
</p>     
```

1.常见的内联元素如：a,span,em,strong,b,br,ifont,img,input,label,sub(下标),sup(上标),textarea,u等。

2.内联元素的表现形式是始终以行内逐个进行显示

3.内联元素没有自己的形状，不能定义它的宽和高，它显示的宽度、高度只能根据所包含内容的高度和宽度来确定，它的最小内容单元也

会呈现矩形形状,所以行内元素要想设置宽高必须先把它变成块元素（display:block;）,**但span这个行内元素除外，它只要设置了浮动无需再转块**

行内元素的盒模型:

行内元素不支持设置宽和高，由内容区决定行内元素

可以设置padding，垂直方向的padding不会影响页面的布局

可以设置border，垂直方向的border不会影响页面的布局

可以设置margin，垂直方向的margin不会影响页面的布局



---

---

## 1.1 请问HTML5有哪些新特性？

首先，HTML 是一种标记语言，全称超文本标记语言，HTML5是第五个版本。对比传统HTML（HTML4、XHTML 各版本），有以下新特性：

1. **文档的类型声明不同**

HTML5的文档声明相比传统HTML来说更为简便，有利于程序员快速阅读和开发。具体写法：<!DOCTYPE html>

  **2. 新增语义化、结构化标签**

传统HTML没有语义化、结构化标签，不方便阅读，不清楚哪里是网页头部、尾部。HTML5新增的语义化、结构化标签主要有：

| <header>     | 网页或节的页眉/头部                |
| ------------ | ---------------------------------- |
| <footer>     | 网页或节的页脚/尾部                |
| <nav>        | 导航栏（一般集中放一些页面链接）   |
| <aside>      | 侧边栏                             |
| <article>    | 网页中一段独立的“文章”，可独立阅读 |
| <section>    | 节，有主题的内容组（一般含有标题） |
| <figcaption> | 图片标题                           |
| <figure>     | 图片与图片标题的组合               |
| <main>       | 主内容                             |
| <time>       | 时间                               |
| <video>      | 视频                               |
| <datalist>   | 选项列表                           |
| <summary>    | 包含 details 元素的标题            |

 **3. 增强型表单，**以便更好地控制与验证input

新增的input类型：color、date、datetime、datetime-local、email、month、number、range、search、tel、time、url、week

新增表单属性（输入限制）：placehoder、required、pattern、autofocus、multiple、step、min/max、height/wdith

  **4. 图像标签**

新增<canvas>、<svg>标签用于在网页绘制图形

  **5. 多媒体标签**

新增<audio>标签，以供引入音频

  **6. 新增的一些功能性API**

WebStorage本地存储，HTML5新增了两种客户端本地存储数据方法：

- localStorage：长期有效的数据存储，
- sessionStorage：只针对当前会话的数据存储。

地理定位，可使用getCurrentPosition()函数直接获取用户位置

WebSocket协议，能从客户端使用简单的语法推动消息到服务器，为客户端与服务端之间提供了一种全双工通信机制

requestAnimationFrame请求动画关键帧，把每一帧中的所有DOM操作集中起来，在一次重绘或回流中就完成，并且重绘或回流的时间间隔紧紧跟随浏览器的刷新频率，一般频率为每秒60帧

Drag 和 Drop拖放，抓取对象以后拖到另一个位置

---

### **1.什么是<!DOCTYPE>声明？**

对标记语言的文档类型声明，告知浏览器该页面使用的是哪个 HTML 版本，浏览器的解析器用什么文档标准解析页面文档，必须在 HTML 文档的第一行，且位于 <html> 标签之前，但不属于HTML标签

在 HTML5 中只有一种：<!DOCTYPE html>，HTML 4.01 中有三种模式：分别是：Strict、Transitional 和 Frameset

---

###  **2. 什么是语义化标签？**

能传达标签所包含内容类型的信息，开发者能直观地分辨标签和属性的用途

常见语义化标签：<hn>：h1~h6，分级标题；<header>：头部；<nav>：导航栏；<main>：主要内容；<footer>：尾部

常见非语义化标签：<div>、<span>

语义化标签的一些**优点**：

代码结构清晰，即使没有css的情况下，也能够呈现出清晰的内容结构

有利于SEO，爬虫依赖**标签**来确定关键字权重，可以和搜索引擎建立良好的沟通，帮助抓取更多的有效信息

提升用户体验，例如title、alt属性可以解释名称、图片信息

代码可读性强，便于团队开发和维护，让其他开发人员能快速理解HTML结构，减少差异化。

便于其他设备解析: 如屏幕阅读器、盲人阅读器、移动设备等，网页渲染效率高

----

---

## 文件引入方式

------

#### 5.1 link 和 @import

作用：样式的导入方式

link 的使用

```html
<link href="index.css" rel="stylesheet">
```

@import 的使用

```html
<style type="text/css">
	@import url(index.css);
</style>
```

link 和 @import 的**区别**

1. 引入的内容不同

   link 除了引用样式文件，还可以引用图片等资源文件，而 @import 只引用样式文件

2. 加载顺序不同

   link 引用 CSS 时，在页面载入时同时加载；@import 需要页面网页完全载入以后加载

3. 兼容性不同

   link 是 XHTML 标签，无兼容问题；@import 是在 CSS2.1 提出的，低版本的浏览器不支持

4. 对 JS 的支持不同

   link 支持使用 Javascript 控制 DOM 去改变样式；而 @import 不支持

------

#### 5.2 为什么link用href获取资源 ,script和img用src

**参考答案：**

src用于替换当前元素，href用于在当前文档和引用资源之间确立联系。

src

- src是source的缩写，指向外部资源的位置，指向的内容将会嵌入到文档中当前标签所在位置；在请求src资源时会将其指向的资源下载并应用到文档内，例如js脚本，img图片和frame等元素

  ```html
  <script src ="js.js"></script> 
  ```

当浏览器解析到该元素时，**会暂停其他资源的下载和处理**，直到将该资源加载、编译、执行完毕，图片和框架 等元素也如此，类似于将所指向资源嵌入当前标签内。**这也是为什么将js脚本放在底部而不是头部**

href

- href是Hypertext Reference的缩写，指向网络资源所在位置，建立和当前元素（锚点）或当前文档（链接）之间的链接

- 在文档中添加link标签，浏览器会识别该文档为css文件，就会并行下载资源并且**不会**停止对当前文档的处理。这也是为什么建议使用link方式来加载css，而不是使用@import方式

  ```html
  <link href="common.css" rel="stylesheet"/>
  ```

------

## 1.6 请问什么是DOM结构？

浏览器渲染页面都是从解析HTML文档开始的，HTML文档中定义了该页面所有组成元素以及分布结构，解析时，将元素转换为一个个DOM节点，再根据各元素间的所属关系，转换为DOM树，如下图示例所示，每个页面都有对应的DOM树

![img](https://uploadfiles.nowcoder.com/images/20210930/897353_1632984775830/DAD918C8A9ED0031746ADC00AD5450C8)

----