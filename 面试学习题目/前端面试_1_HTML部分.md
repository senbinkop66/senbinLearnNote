----

## 1.请问HTML5有哪些新特性？

首先，HTML 是一种标记语言，全称超文本标记语言，HTML5是第五个版本。对比传统HTML（HTML4、XHTML 各版本），有以下新特性：

**1.文档的类型声明不同**

HTML5的文档声明相比传统HTML来说更为简便，有利于程序员快速阅读和开发。具体写法：

```
<!DOCTYPE html>
```

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

新增`<canvas>、<svg>`标签用于在网页绘制图形

  **5. 多媒体标签**

新增`<audio>`标签，以供引入音频

  **6. 新增数据存储API**

WebStorage本地存储，HTML5新增了两种客户端本地存储数据方法：

- localStorage：长期有效的数据存储，
- sessionStorage：只针对当前会话的数据存储。

**7.地理定位**，可使用getCurrentPosition()函数直接获取用户位置

**8.WebSocket协议**，能从客户端使用简单的语法推动消息到服务器，为客户端与服务端之间提供了一种全双工通信机制

**9.requestAnimationFrame请求动画关键帧**，把每一帧中的所有DOM操作集中起来，在一次重绘或回流中就完成，并且重绘或回流的时间间隔紧紧跟随浏览器的刷新频率，一般频率为每秒60帧

**10.Drag 和 Drop拖放**，抓取对象以后拖到另一个位置



----

## 2.html5移除的元素

- 纯表现的元素：basefont、big、center、font、s、strike、tt、u
- 对可用性产生负面影响的元素：frame、frameset、noframes



----

## 3.html标签的类型（head， body，！Doctype） 他们的作用是什么

!**DOCTYPE** 标签：

DOCTYPE声明于文档最前面，**告诉浏览器以何种方式来渲染页面**。

HTML5中的声明方式如下：

```html
<!DOCTYPE html>
```

head：

- 是所有头部元素的容器, 绝大多数头部标签的内容不会显示给读者，它的作用是保存页面的一些 [元数据](https://developer.mozilla.org/zh-CN/docs/Glossary/Metadata)。
- 该标签下所包含的部分可加入的标签有`<title>,<meta>和<link>`

body :

- 用于定义文档的主体, 包含了文档的所有内容
- 该标签支持 html 的全局属性和事件属性.



------

## 4.HTML、XML、XHTML 的区别

- HTML：**超文本标记语言**，是语法较为松散的、不严格的Web语言；传输数据。
- XML：可扩展的标记语言，主要**用于存储数据和结构**，可扩展；
- XHTML：可扩展的超文本标记语言，基于XML，作用与HTML类似，**但语法更严格**。

---

## 5.什么是<!DOCTYPE>声明？

对标记语言的文档类型声明，**告知浏览器该页面使用的是哪个 HTML 版本，浏览器的解析器用什么文档标准解析页面文档**，必须在 HTML 文档的第一行，且位于 <html> 标签之前，但不属于HTML标签

在 HTML5 中只有一种：`<!DOCTYPE html>`，HTML 4.01 中有三种模式：分别是：Strict、Transitional 和 Frameset



---

## 6.meta标签的属性，有什么用？

`<meta>`：**文档级元数据元素**
HTML `<meta>` 元素表示那些不能由**其它 HTML 元相关（meta-related）元素**（`<base>`、`<link>`, `<script>`、`<style>` 或 `<title>`）之一表示的任何元数据信息。

`meta` 元素定义的元数据的类型包括以下几种：

- 如果设置了 name 属性，meta 元素提供的是文档级别（document-level）的元数据，应用于整个页面。
- 如果设置了 http-equiv 属性，meta 元素则是编译指令，提供的信息与类似命名的 HTTP 头部相同。
- 如果设置了 charset 属性，meta 元素是一个字符集声明，告诉文档使用哪种字符编码。
- 如果设置了 itemprop 属性，meta 元素提供用户定义的元数据。

**元数据(metadata)元素**的概念，用来构建HTML文档的基本结构，以及就如何处理文档向浏览器提供信息和指示，**它们本身不是文档内容，但提供了关于后面文档内容的信息。**元数据不会显示在页面上，但是能够被机器识别。总而言之, meta标签是用来让机器识别的，同时它对SEO起着重要的作用。

具体用途

### 1. 指定名/值对定义元数据

name属性与content属性结合使用, name用来表示元数据的类型，表示当前`<meta>`标签的具体作用；content属性用来提供值。

指定元数据的名称(这部分对SEO非常有用)

```html
<meta name="参数" content="具体描述信息">

<meta name="keywords" content="电商,物流">  <!--为搜索引擎提供关键字 -->
<meta name="author" content="张三">  <!--定义了页面的作者-->
<meta name="description" content="网站描述...">  <!--对网页整体的描述 -->

<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minmum-scale=1.0">
<!--
viewport——对页面视图相关进行定义

width=device-width——将页面宽度设置为跟随屏幕宽度变化而变化
initial-scale=1.0——设置浏览器首次加载页面时的初始缩放比例(0.0-10.0正数)
maximum-scale=1.0——允许用户缩放的最大比例(0.0-10.0正数)，必须大于等于minimum-scale
minimum-scale=1.0——允许用户缩放的最小比例(0.0-10.0正数)，必须小于等于maximum-scale
user-scalable=no——是否允许用户手动缩放(yes或者no)
-->

<meta name="generator" content="Hexo 3.8.0"> <!-- generator——包含生成页面软件的标识符 -->
<meta name="theme-color" content="#222">   <!-- theme-color——定义主题颜色 -->
```



### 2. 声明字符编码

charset属性为HTML5新增的属性，用于声明字符编码,以下两种写法效果一样。指定了html文档的编码格式，常用的是utf-8(Unicode的字符编码)，还有ISO-8859-1(拉丁字母的字符编码)。

```html
<meta charset="utf-8"> //HTML5
```

### 3. 模拟http标头字段

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
<meta http-equiv="refresh" content="30">  <!-- refresh——每30s刷新一次文档 -->

<meta http-equiv="refresh" content="2;URL=http://www.baidu.com">   <!-- 2秒后在当前页跳转到百度  -->
```

**X-UA-Compatible** 浏览器**采取何种版本渲染当前页面**

```html
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<!--X-UA-Compatible——告知浏览器以何种版本渲染界面, 指定IE和Chrome使用最新版本渲染当前页面 -->
```

**expires** 用于**设定网页的到期时间**，过期后网页必须到服务器上重新传输

```html
<meta http-equiv="expires" content="Sunday 22 July 2016 16:30 GMT">
```

**catch-control** 用于指定所有**缓存机制**在整个请求/响应链中必须服从的指令

```html
<!-- Cache-Control——请求和响应遵循的缓存机制，可以声明缓存的内容，修改过期时间，可多次声明 -->
<meta http-equiv="Cache-Control" content="no-transform"> <!-- no-transform——不得对资源进行转换或转变。 -->
<meta http-equiv="Cache-Control" content="no-siteapp">  <!-- no-siteapp——禁止百度进行转码  -->

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

### 4.property & content

可以让网页成为一个富媒体对象，同意网页内容被其他网站引用，同时在应用的时候不会只是一个链接，会提取相应的信息展现给用户。

```html
<meta property="og:type" content="website">
<meta property="og:url" content="https://username.github.io/index.html">
<meta property="og:site_name" content="tony's blog">
```



----

## 7. 什么是HTML5，和HTML的区别是什么？

HTML5是HTML的新标准，其主要目标是无需任何额外的插件如Flash、Silverlight等，就可以传输所有内容。它囊括了动画、视频、丰富的图形用户界面等。

HTML5是由万维网联盟（W3C）和Web Hypertext Application Technology Working Group 合作创建的HTML新版本。

**区别**

从文档声明类型上看：

HTML是很长的一段代码，很难记住。如下代码：

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "
http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
```

HTML5却只有简简单单的声明，方便记忆。如下：

```
<!DOCTYPE html>
```

> 不输入<!DOCTYPE HTML>，浏览器将无法识别html文件，因此html将无法正常工作。

 从语义结构上看：

HTML4.0：没有体现结构语义化的标签，通常都是这样来命名的`<div id="header"></div>`，这样表示网站的头部。
HTML5：在语义上却有很大的优势。提供了一些新的标签，比如：`<header><article><footer>`。



----

##  8. 什么是语义化标签？

**能传达标签所包含内容类型的信息**，开发者能直观地分辨标签和属性的用途

常见语义化标签：`<hn>`：h1~h6，分级标题；`<header>`：头部；`<nav>`：导航栏；`<main>`：主要内容；`<footer>`：尾部

常见非语义化标签：`<div>、<span>`

**语义化标签的一些优点**：

- 代码结构清晰，即使css样式丢失的时候的情况下，也能够呈现出清晰的内容结构

- 有利于SEO，爬虫依赖**标签**来确定关键字权重，可以和搜索引擎建立良好的沟通，帮助抓取更多的有效信息

- 提升用户体验，例如title、alt属性可以解释名称、图片信息

- **代码可读性强，便于团队开发和维护**，让其他开发人员能快速理解HTML结构，减少差异化。
- 便于其他设备解析: 如屏幕阅读器、盲人阅读器、移动设备等，网页渲染效率高



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



------

## 9.audio 标签的api

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

| 事件名称       | 事件作用                                             |
| :------------- | :--------------------------------------------------- |
| loadstart      | 客户端开始请求数据                                   |
| progress       | 客户端正在请求数据（或者说正在缓冲）                 |
| play           | play()和autoplay播放时                               |
| pause          | pause()方法促发时                                    |
| ended          | 当前播放结束                                         |
| timeupdate     | 当前播放时间发生改变的时候。播放中常用的时间处理函数 |
| canplaythrough | 歌曲已经载入完全完成                                 |
| canplay        | 缓冲至目前可播放状态。                               |

---

## 10.  页面从获得document到渲染之间的事件

　页面加载时，大致可以分为以下几个步骤：

1. 　　开始解析HTML文档结构
2. 　　加载外部样式表及JavaScript脚本
3. 　　解析执行JavaScript脚本
4. 　　DOM树渲染完成
5. 　　加载未完成的外部资源（如 图片）
6.     页面加载成功

　那么在这整个过程中触发了哪些**常用**的事件呢？

### document  readystatechange事件

　　**readyState** 属性描述了文档的加载状态，在整个加载过程中 document.readyState会不断变化，每次变化都会触发readystatechange事件。

　　**readyState** 有以下状态：

　　　　loading / 加载`document` 仍在加载。

　　　　interactive / 互动文档已经完成加载，文档已被解析，但是诸如图像，样式表和框架之类的子资源仍在加载。

　　　　complete / 完成文档和所有子资源已完成加载。状态表示 `load` 事件即将被触发。

　　比如说在步骤2的时候对应 interactive  步骤5之后对应complete ，都会触发readystatechange事件。

> 文档，图片等加载时的readyState 和 XMLHttpRequest.readyState 是不一样的。要注意区分

### document  DOMContentLoaded事件

　　DOM树渲染完成时触发DOMContentLoaded事件，此时可能外部资源还在加载。 jquery中的ready事件就是同样的效果

### window load事件

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

## 11.说说对几个页面生命周期事件的理解

HTML 页面的生命周期包含三个重要事件：

- DOMContentLoaded —— **浏览器已完全加载 HTML，并构建了 DOM 树**，但像 `<img> `和样式表之类的外部资源**可能尚未加载完成**。
- load —— 浏览器不仅加载完成了 HTML，还加载完成了所有外部资源：图片，样式等。
- beforeunload/unload —— 当用户正在离开页面时。

每个事件都是有用的：

- DOMContentLoaded 事件 —— DOM 已经就绪，因此处理程序可以查找 DOM 节点，并初始化接口。
- load 事件 —— 外部资源已加载完成，样式已被应用，图片大小也已知了。
- beforeunload 事件 —— 用户正在离开：我们可以检查用户是否保存了更改，并询问他是否真的要离开。
- unload 事件 —— 用户几乎已经离开了，但是我们仍然可以启动一些操作，例如发送统计数据。

### DOMContentLoaded 和脚本

当浏览器处理一个 HTML 文档，并在文档中遇到 `<script>` 标签时，就会在继续构建 DOM 之前运行它。这是一种防范措施，因为脚本可能想要修改 DOM，甚至对其执行 document.write 操作，**所以 DOMContentLoaded 必须等待脚本执行结束**。

因此，DOMContentLoaded 肯定在下面的这些脚本执行结束之后发生。

此规则有**两个例外**：

- 具有 async 特性（attribute）的脚本不会阻塞 DOMContentLoaded，稍后 我们会讲到。
- 使用 document.createElement('script') 动态生成并添加到网页的脚本也不会阻塞 DOMContentLoaded。

### DOMContentLoaded 和样式

**外部样式表不会影响 DOM**，因此 DOMContentLoaded 不会等待它们。

但这里有一个陷阱。**如果在样式后面有一个脚本，那么该脚本必须等待样式表加载完成**。原因是，脚本可能想要获取元素的坐标和其他与样式相关的属性。因此，它必须等待样式加载完成。

当 DOMContentLoaded 等待脚本时，**它现在也在等待脚本前面的样式**。

### 浏览器内建的自动填充

Firefox，Chrome 和 Opera 都会在 DOMContentLoaded 中自动填充表单。

例如，如果页面有一个带有登录名和密码的表单，并且浏览器记住了这些值，**那么在 DOMContentLoaded 上，浏览器会尝试自动填充它们**（如果得到了用户允许）。

因此，**如果** DOMContentLoaded 被需要加载很长时间的脚本延迟触发，那么自动填充也会等待。你可能在某些网站上看到过（如果你使用浏览器自动填充）—— **登录名/密码字段不会立即自动填充，而是在页面被完全加载前会延迟填充**。这**实际上是 DOMContentLoaded 事件之前的延迟。**



### window.onload

当整个页面，包括样式、图片和其他资源被加载完成时，会触发 window 对象上的 load 事件。可以通过 onload 属性获取此事件。



### window.onunload

当访问者离开页面时，window 对象上的 unload 事件就会被触发。我们可以在那里**做一些不涉及延迟的操作，例如关闭相关的弹出窗口**。

有一个值得注意的特殊情况是**发送分析数据**。假设我们收集有关页面使用情况的数据：鼠标点击，滚动，被查看的页面区域等。

自然地，当用户要离开的时候，我们希望通过 unload 事件将数据保存到我们的服务器上。

在处理程序中，我们**只能执行不涉及延迟或询问用户的简单操作**。正是由于这个限制，它很少被使用**。我们可以使用 navigator.sendBeacon 来发送网络请求。**

有一个特殊的 **navigator.sendBeacon(url, data) 方法**可以满足这种需求，**它在后台发送数据，转换到另外一个页面不会有延迟**：浏览器离开页面，但仍然在执行 sendBeacon。

当 sendBeacon 请求完成时，浏览器可能已经离开了文档，**所以就无法获取服务器响应**（对于分析数据来说通常为空）。

**还有一个 keep-alive 标志，该标志用于在 fetch 方法中为通用的网络请求执行此类“离开页面后”的请求**。

如果我们要取消跳转到另一页面的操作，在这里做不到。但是我们可以使用另一个事件 —— onbeforeunload。



### window.onbeforeunload

如果访问者触发了离开页面的导航（navigation）或试图关闭窗口，**beforeunload 处理程序将要求进行更多确认。**

如果我们要取消事件，浏览器会询问用户是否确定。



---

## 12. preload和prefetch的区别？

关键字 **`preload`** 作为元素`<link>`的属性`rel` 的值，**表示用户十分有可能需要在当前浏览中加载目标资源**，所以浏览器**必须**预先获取和缓存对应资源。 

preload 顾名思义就是一种**预加载**的方式，它通过声明向浏览器声明一个需要提交加载的资源，当资源真正被使用的时候立即执行，就无需等待网络的消耗。

关键字 **`prefetch`** 作为元素`<link>`的属性`rel` 的值，是为了提示浏览器，**用户未来的浏览有可能需要加载目标资源**，所以浏览器**有可能**通过事先获取和缓存对应资源，优化用户体验。

链接预取是一种浏览器机制，其**利用浏览器空闲时间来下载或预取用户在不久的将来可能访问的文档**。网页向浏览器提供一组预取提示，并在浏览器完成当前页面的加载后开始静默地拉取指定的文档并将其存储在缓存中。当用户访问其中一个预取文档时，便可以快速的从浏览器缓存中得到。

prefetch 跟 preload 不同，它的作用是告诉浏览器未来可能会使用到的某个资源，浏览器就会在闲时去加载对应的资源，若能预测到用户的行为，比如懒加载，点击到其它页面等则相当于提前预加载了需要的资源。它的用法跟 preload 是一样的

```html
<link rel="prefetch" href="/images/big.jpeg">
```

preload 与prefetch 的区别

- **preload** 是一个声明式 fetch，可以**强制浏览器在不阻塞 document 的 onload 事件的情况下请求资源**。 preload 顾名思义就是一种预加载的方式，它通过声明向浏览器声明一个需要提交加载的资源，当资源真正被使用的时候立即执行，就无需等待网络的消耗。
- **prefetch** 告诉浏览器**这个资源将来可能需要**，但是**什么时间加载这个资源是由浏览器来决定的**。 若能预测到用户的行为，比如懒加载，点击到其它页面等则相当于提前预加载了需要的资源。

**使用方法：**

通过 Link 标签进行创建：

```html
<link rel="preload" href="/path/to/style.css" as="style">
```

在 HTTP 响应头中加上 preload 字段：

```htaccess
Link: <https://example.com/other/styles.css>; rel=preload; as=style
```

**这种方式比通过 Link 方式加载资源方式更快，请求在返回还没到解析页面的时候就已经开始预加载资源了**。

prefetch 预判加载与preload 使用方法是一样的

**缓存行为**

当资源被 preload 或者 prefetch 后，会从网络堆栈传输到 HTTP 缓存并进入渲染器的内存缓存。 **如果资源可以被缓存**（例如，存在有效的 cache-control 和 max-age），**它将存储在 HTTP 缓存中**，可用于当前和未来的会话。 如果资源不可缓存，则不会将其存储在 HTTP 缓存中。 相反，它会被缓存到内存缓存中并保持不变直到它被使用。

**副作用**

正确使用 preload/prefetch 不会造成二次下载，也就说：**当页面上使用到这个资源时候 preload 资源还没下载完，这时候不会造成二次下载**，会等待第一次下载并执行脚本。

对于 **preload 来说，一旦页面关闭了，它就会立即停止 preload 获取资源**，而对于 **prefetch 资源，即使页面关闭，prefetch 发起的请求仍会进行不会中断**。

**preload 和 prefetch 的优先级**

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

**所以如果我们在进入首页后，在浏览器的空闲时间提前下好用户可能会点击页面的js文件**，这样首屏的js文件大小得到了控制，而且再点击新页面的时候，相关的js文件已经下载好了，就不再会出现loading动画。

动态引入js文件，实现code-splitting，减少首屏打开时间

按引入情况加载，只需添加注释即可

```web-idl
代码分割注释：/*webpackChunkName: 'mp-supports'*/
prefetch注释：/* webpackPrefetch: true */
```





---

## 13.盒子模型和内联盒子

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

1.常见的内联元素如：`a,span,em,strong,b,br,ifont,img,input,label,sub(下标),sup(上标),textarea,u`等。

2.内联元素的**表现形式是始终以行内逐个进行显示**

3.内联元素没有自己的形状，不能定义它的宽和高，它显示的宽度、高度只能根据所包含内容的高度和宽度来确定，它的最小内容单元也

会呈现矩形形状,所以**行内元素要想设置宽高必须先把它变成块元素**（display:block;）,**但span这个行内元素除外，它只要设置了浮动无需再转块**

行内元素的盒模型:

- 行内元素不支持设置宽和高，由内容区决定行内元素

- 可以设置padding，垂直方向的padding不会影响页面的布局

- 可以设置border，垂直方向的border不会影响页面的布局

- 可以设置margin，垂直方向的margin不会影响页面的布局




------

## 14. 页面导入样式时，使用link和@import有什么区别？

link属于HTML标签，而@import是css提供的；

页面被加载时，link会同时被加载，而@import引用的css会等到页面被加载完再加载；

@import只在IE5以上才能识别，而link是XHTML标签，无兼容问题；

link方式的样式的权重高于@import的权重。



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

   link 除了引用样式文件，**还可以引用图片等资源文件**，而 **@import 只引用样式文件**

2. 加载顺序不同

   link 引用 CSS 时，在页面载入时同时加载；**@import 需要页面网页完全载入以后加载**

3. 兼容性不同

   link 是 XHTML 标签，无兼容问题；**@import 是在 CSS2.1 提出的，低版本的浏览器不支持**

4. 对 JS 的支持不同

   link 支持使用 Javascript 控制 DOM 去改变样式；**而 @import 不支持**
   
   

------

## 15.为什么link用href获取资源 ,script和img用src

`src`**用于替换当前元素**，`href`用于**在当前文档和引用资源之间确立联系**。

src

- src是source的缩写，**指向外部资源的位置，指向的内容将会嵌入到文档中当前标签所在位置**；在请求src资源时会将其指向的资源下载并应用到文档内，例如js脚本，img图片和frame等元素

  ```html
  <script src ="js.js"></script> 
  ```

当浏览器解析到该元素时，**会暂停其他资源的下载和处理**，直到将该资源加载、编译、执行完毕，图片和框架 等元素也如此，**类似于将所指向资源嵌入当前标签内**。src 会阻塞对文档的处理。**这也是为什么将js脚本放在底部而不是头部**

href

- href是Hypertext Reference的缩写，**指向网络资源所在位置**，建立和当前元素（锚点）或当前文档（链接）之间的**链接**

- 在文档中添加link标签，浏览器会识别该文档为css文件，就会并行下载资源并且**不会**停止对当前文档的处理。 href 不会阻塞对文档的处理，**这也是为什么建议使用link方式来加载css，而不是使用@import方式**

  ```html
  <link href="common.css" rel="stylesheet"/>
  ```





------

## 16. 请问什么是DOM结构？

浏览器渲染页面都是从解析HTML文档开始的，HTML文档中定义了该页面所有组成元素以及分布结构，解析时，将元素转换为一个个DOM节点，再根据各元素间的所属关系，转换为DOM树，如下图示例所示，每个页面都有对应的DOM树

![img](E:\pogject\学习笔记\image\html\dom结构)

文档对象模型 (DOM) 将 web 页面与到脚本或编程语言连接起来。通常是指  JavaScript，但将 HTML、SVG 或 XML 文档建模为对象并不是 JavaScript 语言的一部分。**DOM 模型用一个逻辑树来表示一个文档，树的每个分支的终点都是一个节点 (node)，每个节点都包含着对象 (objects)。**DOM 的方法 (methods) 让你可以用特定方式操作这个树，用这些方法你可以改变文档的结构、样式或者内容。节点可以关联上事件处理器，一旦某一事件被触发了，那些事件处理器就会被执行。



----

## 17. js和css是如何影响DOM树构建的？

**CSS不会阻塞DOM的解析，但是会影响JAVAScript的运行**，javaSscript会阻止DOM树的解析，最终css（CSSOM）会影响DOM树的渲染，也可以说最终会影响渲染树的生成。

分成三种类型来讲解：

### JavaScript脚本在html页面中

```html
<html>
  <body>
    <div>1</div>
    <script>
      let div1 = document.getElementsByTagName('div')[0]
      div1.innerText = 'time.geekbang'
    </script>
    <div>test</div>
  </body>
</html>
```

两段div中间插入一段JavaScript脚本，这段脚本的解析过程就有点不一样了。

**当解析到script脚本标签时，HTML解析器暂停工作，javascript引擎介入，并执行script标签中的这段脚本。**

因为这段javascript脚本修改了DOM中第一个div中的内容，所以执行这段脚本之后，div节点内容已经修改为time.geekbang了。脚本执行完成之后，HTML解析器恢复解析过程，继续解析后续的内容，直至生成最终的DOM。

### html页面中引入javaScript文件

```js
//foo.js
let div1 = document.getElementsByTagName('div')[0]
div1.innerText = 'time.geekbang'
```

```html
<html>
  <body>
    <div>1</div>
    <script type="text/javascript" src='foo.js'></script>
    <div>test</div>
  </body>
</html>
```

这段代码的功能还是和前面那段代码是一样的，只是把内嵌JavaScript脚本修改成了通过javaScript文件加载。

其整个执行流程还是一样的，**执行到`script`标签时，暂停整个DOM的解析，执行javascript代码**，不过这里执行javascript时，需要现在在这段代码。**这里需要重点关注下载环境**，因为javascript文件的下载过程会阻塞DOM解析，而通常下载又是非常耗时的，会受到网络环境、javascript文件大小等因素的影响。

优化机制：

谷歌浏览器做了很多优化，其中一个主要的优化就是预解析操作。**当渲染引擎收到字节流之后，会开启一个预解析线程，用来分析HTML文件中包含的JavaScript、CSS等相关文件**，解析到相关文件之后，**预解析线程会提前下载这些文件。**

再回到 DOM 解析上，我们知道引入 JavaScript 线程会阻塞 DOM，不过也有一些相关的策略来规避，比如使用 CDN 来加速 JavaScript 文件的加载，压缩 JavaScript 文件的体积。

另外，**如果 JavaScript 文件中没有操作 DOM 相关代码**，就可以将该 JavaScript 脚本设置为**异步加载**，通过 async 或 defer 来标记代码，使用方式如下所示：

```html
<script async type="text/javascript" src='foo.js'></script>
<script defer type="text/javascript" src='foo.js'></script>
```

async和defer区别：

- async：脚本并行加载，加载完成之后立即执行，执行时机不确定，仍有可能阻塞HTML解析，**执行时机在load事件派发之前。**
- defer：脚本并行加载，等待HTML解析完成之后，按照加载顺序执行脚本，**执行时机DOMContentLoaded事件派发之前**。

### html页面中有css样式

```css
//theme.css
div {color:blue}
```

```html
<html>
<head>
    <style src='theme.css'></style>
</head>
<body>
  <div>1</div>
  <script>
      let div1 = document.getElementsByTagName('div')[0]
      div1.innerText = 'time.geekbang' // 需要 DOM
      div1.style.color = 'red' // 需要 CSSOM
  </script>
  <div>test</div>
</body>
</html>
```

该示例中，JavaScript 代码出现了 `div1.style.color = ‘red’` 的语句，它是用来操纵 CSSOM 的，**所以在执行 JavaScript 之前，需要先解析 JavaScript 语句之上所有的CSS 样式**。所以如果代码里引用了外部的 CSS 文件，那么在执行 JavaScript 之前，还需要等待外部的 CSS 文件下载完成，并解析生成 CSSOM 对象之后，才能执行 JavaScript 脚本。

而 JavaScript 引擎**在解析 JavaScript 之前，是不知道 JavaScript 是否操纵了 CSSOM的**，所以渲染引擎在遇到 JavaScript 脚本时，**不管该脚本是否操纵了 CSSOM，都会执行CSS 文件下载**，解析操作，再执行 JavaScript 脚本。**所以说 JavaScript 脚本是依赖样式表的，这又多了一个阻塞过程。**

通过上面三点的分析，我们知道了 JavaScript 会阻塞 DOM 生成，**而样式文件又会阻塞js的执行**。



----

## 18. CSSOM树和DOM树是同时解析的吗？

浏览器会下下载HTML解析页面生成DOM树，遇到CSS标签就开始解析CSS，这个过程不会阻塞，**但是如果遇到了JS脚本，此时假如CSSOM还没有构建完，需要等待CSSOM构建完**，再去执行JS脚本，然后再执行DOM解析，此时会阻塞。



---

## 19. 如何实现浏览器内多个标签页之间的通信？

### Broadcast Channel

顾名思义，“广播频道”，官方文档里的解释为“用于同源不同页面之间完成通信的功能”，在其中某个页面发送的消息会被其他页面监听到。

注意“同源”二字，该方法无法完成跨域的数据传输。

### localStorage

localStorage是浏览器多个标签共用的存储空间，所以可以用来实现多标签之间的通信

> session是会话级的存储空间，每个标签页都是单独的。

### SharedWorker

SharedWorker可以被多个window共同使用，但必须保证这些标签页都是同源的(相同的协议，主机和端口号)

### WebSocket通讯

全双工（full-duplex）通信自然可以实现多个标签之间的通信

### 定时器setInterval+cookie

- 在页面A设置一个使用setInterval定时器不断刷新，检查Cookies的值是否发生变化，如果变化就进行刷新的操作。
- 由于Cookies是在同域可读的，所以在页面B审核的时候改变Cookies的值，页面A自然是可以拿到的。

这样做确实可以实现我想要的功能，但是这样的方法相当浪费资源。虽然在这个性能过盛的时代，浪费不浪费也感觉不出来，但是这种实现方案，确实不够优雅。

### postMessage

两个需要交互的tab页面具有依赖关系。

如 A页面中通过JavaScript的window.open打开B页面，或者B页面通过iframe嵌入至A页面，此种情形最简单，可以通过HTML5的 window.postMessage API完成通信，**由于postMessage函数是绑定在 window 全局对象下，因此通信的页面中必须有一个页面（如A页面）可以获取另一个页面（如B页面）的window对象，这样才可以完成单向通信**；B页面无需获取A页面的window对象，如果需要B页面对A页面的通信，只需要在B页面侦听message事件，获取事件中传递的source对象，该对象即为A页面window对象的引用：

```js
//B页面
window.addEventListner('message',(e)=>{
    let {data,source,origin} = e;
    source.postMessage('message echo','/');
});
```

postMessage的第一个参数为消息实体，它是一个结构化对象，即可以通过“JSON.stringify和JSON.parse”函数还原的对象；第二个参数为消息发送范围选择器，设置为“/”意味着只发送消息给同源的页面，设置为“*”则发送全部页面。



----

## 20. 使用input标签上传图片时，怎样触发默认拍照功能？

capture 属性用于指定文件上传控件中媒体拍摄的方式。

可选值：

- user 前置
- environment 后置
- camera 相机
- camcorder 摄像机
- microphone 录音

```html
<input type='file' accept='image/*;' capture='camera'>
```



----

## 21.input上传文件可以同时选择多个吗？怎么设置？

可以，通过给input标签设置multiple属性。

```html
<input type="file" name="files" multiple/>
```



----

## 22.如何禁止input展示输入的历史记录？

在输入input时会提示原来输入过的内容，还会出现下拉的历史记录，禁止这种情况只需在input中加入： autocomplete=“off”

```html
<input type="text"  autocomplete="off" />
```

autocomplete 属性是用来规定输入字段是否启用自动完成的功能。

用于指示 input 元素是否能够拥有一个默认值，此默认值是由浏览器自动补全的。此设定可以被属于此表单的子元素的 `autocomplete` 属性覆盖。 可能的值有：

- `off`：浏览器可能不会自动补全条目（在疑似登录表单中，浏览器倾向于忽略该值，而提供密码自动填充功能，参见 [自动填充属性和登录](https://developer.mozilla.org/zh-CN/docs/Web/Security/Securing_your_site/Turning_off_form_autocompletion#禁用自动填充)）
- `on`：浏览器可自动补全条目



----

## 23.能否使用自闭合script标签引入脚本文件?

不能。**自闭合标签来自于XML语法**，而不是HTML语法。

根据现在的HTML语法，**只有不需要结束标签的void element（如img之类的），或者是外部元素（如svg）可以使用自闭合**。script标签显然不在此列。

```html
// 正确写法
<script src="..."></script>

// 错误写法
<script src="..."/>
```



----

## 24.iconfont是什么？有什么优缺点？

**什么是 IconFont**

IconFont 就是**字体图标**。严格地说，就是一种字体，但是，它们不包含字母或数字，而是包含符号和字形。您可以使用 CSS 设置样式，就像设置常规文本一样，这使得 IconFont 成为 Web 开发时图标的热门选择。

**优点**

- 可以方便地将任何 CSS 效果应用于它们。
- **因为它们是矢量图形，所以它们是可伸缩的**。这意味着我们可以在不降低质量的情况下伸缩它们。
- 我们**只需要发送一个或少量 HTTP 请求来加载它们**，而不是像图片，可能需要多个 HTTP 请求。
- 由于尺寸小，它们加载速度快。
- 它们在所有浏览器中都得到支持（甚至支持到 IE6）。

**不足**

- 不能用来显示复杂图像
- 通常只限于一种颜色，除非应用一些 CSS 技巧
- 字体图标通常是根据特定的网格设计的，例如 16x16, 32×32, 48×48等。如果由于某种原因将网格系统改为25×25，可能不会得到清晰的结果



---

## 25.页面统计数据中，常用的 PV、UV 指标分别是什么？

**PV(页面访问量)**

即页面浏览量或点击量，用户每1次对网站中的每个网页访问均被记录1个PV。

用户对同一页面的多次访问，访问量累计，用以衡量网站用户访问的网页数量。

**UV(独立访客)**

是指通过互联网访问、浏览这个网页的自然人。访问您网站的一台电脑客户端为一个访客。

00:00-24:00内相同的客户端只被计算一次。



----

## 26. 什么是 DOM 和 BOM？

DOM

- DOM 指的是文档对象模型，它指的是把文档当做一个对象，这个对象主要定义了**处理网页内容的方法和接口**。

BOM

- BOM 指的是浏览器对象模型，它指的是把浏览器当做一个对象来对待，这个对象主要定义了**与浏览器进行交互的法和接口**。
- BOM的核心是 window，而 window 对象具有双重角色，它既是通过 js 访问浏览器窗口的一个接口，又是一个 Global（全局）对象。**这意味着在网页中定义的任何对象，变量和函数，都作为全局对象的一个属性或者方法存在**。
- window 对象含有 location 对象、navigator 对象、screen 对象等子对象，**并且 DOM 的最根本的对象 document 对象也是 BOM 的 window 对象的子对象。**



---

## 27.一台设备的dpr，是否是可变的？

`devicePixelRatio`，中文名称是设备像素比。这个概念在移动开发的时候会被特别关注，因为它关系到了整个画面的观感、布局甚至是清晰度。在JavaScript BOM中，它是window全局对象下的一个属性，它的定义如下：

> dpr = 设备像素 / CSS像素

也有文章把设备像素称为**物理像素**，把CSS像素称为**独立像素**（DIPs），但所指的都是同样概念：

(1) 首先说**设备像素**。举手机的例子来说，设备像素也就是在手机广告上经常会看到的`1920*1080`像素或`1280*720`像素，也就是常说的分辨率为1080p或720p。**它所指的是设备上有多少个能够显示一种特定颜色的最小区域**，在**任何设备中这个数值都是不会变的**。

(2) 再说**CSS像素**，它的一种更广义的叫法是独立像素。CSS像素是为web开发者所打造的，是在CSS和JavaScript中使用的一个抽象的层，我们在CSS中定义的width: 100px;、font-size: 16px;等属性都是指CSS像素。而相对于CSS像素，**设备像素这个概念在前端中几乎用不上（除了screen.width/height）。**

那么，从定义来看，**dpr的意义**就是：**在一个设备（的每个方向）上，每个CSS像素会被多少个实际的物理像素来显示**。

![img](E:\pogject\学习笔记\image\html\DPR像素比)

上图中，一个蓝色方块代表一个设备像素，一个黄色方块代表一个CSS像素。我们可以通过这张图来理清dpr的概念：

- 如图左，一个设备像素覆盖了多个CSS像素，dpr < 1，对应用户的缩小操作；
- 如图右，一个CSS像素覆盖了多个设备像素，dpr > 1，对应用户的放大操作。

由于**用户的缩放操作会改变dpr**，所以**设备dpr是在默认缩放为100%的情况下定义的。**



----

## 28. html和css中的图片加载与渲染规则是什么样的？

Web浏览器先会把获取到的HTML代码解析成一个DOM树，HTML中的每个标签都是DOM树中的一个节点，包括display: none隐藏的标签，还有JavaScript动态添加的元素等。浏览器会获取到所有样式，并会把所有样式解析成样式规则，在解析的过程中会去掉浏览器不能识别的样式。

浏览器将会把**DOM树**和**样式规则**组合在一起（DOM元素和样式规则匹配）后将会合建一个**渲染树**（Render Tree），渲染树类似于DOM树，但两者别还是很大的：**渲染树能识别样式，渲染树中每个节点（NODE）都有自己的样式**，而且渲染树不包含隐藏的节点（比如display:none的节点，还有`</head>`内的一些节点），因为这些节点不会用于渲染，也不会影响节点的渲染，因此不会包含到渲染树中。**一旦渲染树构建完毕后，浏览器就可以根据渲染树来绘制页面了。**

简单的归纳就是浏览器渲染Web页面大约会经过六个过程：

- 解析HTML，构成DOM树
- 解析加载的样式，构建样式规则树
- 加载JavaScript，执行JavaScript代码
- DOM树和样式规则树进行匹配，构成渲染树
- 计算元素位置进行页面布局
- 绘制页面，最终在浏览器中呈现

是不是会感觉这个和我们图像加载渲染没啥关系一样，事实并非如此，因为img、picture或者background-image都是DOM树或样式规则中的一部分，那么咱们套用进来，图片加载和渲染的时机有可能是下面这样：

- 解析HTML时，如果遇到img或picture标签，将会加载图片
- 解析加载的样式，**遇到background-image时，并不会加载图片，而会构建样式规则树**
- 加载JavaScript，执行JavaScript代码，如果代码中有创建img元素之类，会添加到DOM树中；如查有添加background-image规则，将会添加到样式规则树中
- DOM树和样式规则匹配时构建渲染树，**如果DOM树节点匹配到样式规则中的backgorund-image，则会加载背景图片**
- 计算元素（图片）位置进行布局
- 开始渲染图片，浏览器将呈现渲染出来的图片

上面套用浏览器渲染页面的机制，但图片加载与渲染还是有一定的规则。因为，**页面中不是所有的`<img>`（或picture）元素引入的图片和background-image引入的背景图片都会加载的。**那么就引发出新问题了，什么时候会真正的加载，加载规则又是什么？

先概括一点：

> Web页面中不是所有的图片都会加载和渲染！

根据前面介绍的浏览器加载和渲染机制，我们可以归纳为：

- `<img>、<picture>`和设置background-image的**元素**遇到display:none时，图片**会加载**但不会渲染
- `<img>、<picture>`和设置background-image的**元素祖先元素**设置display:none时，background-image不会渲染也**不会加载**，而img和picture引入的图片不会渲染但**会加载**
  - <img>、<picture>	和background-image引入相同路径相同图片文件名时，**图片只会加载一次**
- 样式文件中background-image引入的图片，**如果匹配不到DOM元素，图片不会加载**
- 伪类引入的background-image，比如:hover，**只有当伪类被触发时，图片才会加载**



---

## 29. mete标签中的viewport 有什么用？

**什么是 Viewport?**

viewport 是**用户网页的可视区域**。viewport 翻译为中文可以叫做"视区"。

手机浏览器是把页面放在一个虚拟的"窗口"（viewport）中，**通常这个虚拟的"窗口"（viewport）比屏幕宽**，这样就不用把每个网页挤到很小的窗口中（这样会破坏没有针对手机浏览器优化的网页的布局），用户可以通过平移和缩放来看网页的不同部分。

**设置 Viewport**

一个常用的针对移动网页优化过的页面的 viewport meta 标签大致如下：

```html
1<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

- width：控制 viewport 的大小，可以指定的一个值，如 600，或者特殊的值，如 device-width 为设备的宽度（单位为缩放为 100% 时的 CSS 的像素）。
- height：和 width 相对应，指定高度。
- initial-scale：初始缩放比例，也即是当页面第一次 load 的时候缩放比例。
- maximum-scale：允许用户缩放到的最大比例。
- minimum-scale：允许用户缩放到的最小比例。
- user-scalable：用户是否可以手动缩放。



---

## 30. style标签写在body后与body前有什么区别？

页面加载自上而下 当然是先加载样式。

写在body标签后由于浏览器以逐行方式对HTML文档进行解析，**当解析到写在尾部的样式表（外联或写在style标签）会导致浏览器停止之前的渲染，等待加载且解析样式表完成之后重新渲染，**在windows的IE下可能会出现FOUC现象（即样式失效导致的页面闪烁问题）



---

## 31.前端该如何选择图片的格式？

### 图片的类型

图片的类型目前就分为两种：

- 位图
- 矢量图

**位图**

所谓位图就是**用像素点拼起来的图**也叫**点阵图**，平时我们用到的png、jpg等图片就是位图。

**矢量图**

矢量图，也叫做向量图。矢量图并不纪录画面上每一点的信息，**而是纪录了元素形状及颜色的算法**，当你打开一幅矢量图的时候，软件对图形对应的函数进行运算，将运算结果图形的形状和颜色显示给你看。

无论显示画面是大还是小，画面上的对象对应的算法是不变的，所以，即使对画面进行倍数相当大的缩放，它也不会像位图那样会失真。

常见的就是svg格式的。

### 图片的压缩类型

- 无压缩
- 有损压缩
- 无损压缩

**无压缩**

无压缩的图片格式不对图片数据进行压缩处理，能准确地呈现原图片。例如**BMP格式**的图片。

**有损压缩**

指在压缩文件大小的过程中，损失了一部分图片的信息，也即降低了图片的质量（即图片被压糊了），**并且这种损失是不可逆的**。

常见的有损压缩手段是按照一定的算法将临近的像素点进行合并。压缩算法不会对图片所有的数据进行编码压缩，而是在压缩的时候，去除了人眼无法识别的图片细节。因此**有损压缩可以在同等图片质量的情况下大幅降低图片的体积**。例如**jpg格式**的图片使用的就是有损压缩。

**无损压缩**

在压缩图片的过程中，图片的质量没有任何损耗。我们任何时候都**可以从无损压缩过的图片中恢复出原来的信息**。

压缩算法对图片的所有的数据进行编码压缩，能在保证图片的质量的同时降低图片的体积。例如**png、gif**使用的就是无损压缩。

### 图片位数

图片位数通常分为8、16、24、32

- 图片位数越大，能表示的颜色越多，同时占用的体积也约大。例如8位图片支持256种颜色，即2的8次方。
- 图片位数越大，颜色过渡也就越细腻，携带的色彩信息可以更加丰富。
- 32位跟24位的区别就是多了一个Alpha通道，用来支持半透明，其他的跟24位基本一样。

### 常见的图片的格式

**GIF**

GIF的全称是`Graphics Interchange Format`，可译为**图形交换格式**，是在1987年由Compu Serve公司为了填补跨平台图像格式的空白而发展起来的。

GIF采用的是Lempel-Zev-Welch（LZW）压缩算法，最高支持256种颜色。由于这种特性，**GIF比较适用于色彩较少的图片**，比如卡通造型、公司标志等等。如果碰到需要用24位真彩色的场合，那么GIF的表现力就有限了。

GIF格式图片**最大的特性是帧动画**，相比古老的bmp格式，尺寸较小，而且支持透明(不支持半透明，因为不支持 Alpha 透明通道 )和动画。

优点：

- 体积小
- 支持动画

缺点：

- 由于采用了8位压缩，最多只能处理256种颜色

**JPEG/JPG**

JPEG是`Joint Photographic Experts Group`(联合图像专家组)的缩写，文件后辍名为"．jpg"或"．jpeg"，是常用的图像文件格式，由一个软件开发联合会组织制定，是一种**有损压缩格式**，能够将图像压缩在很小的储存空间，图像中重复或不重要的资料会被丢失，因此容易造成图像数据的损伤。尤其是使用过高的压缩比例，将使最终解压缩后恢复的图像质量明显降低，如果追求高品质图像，不宜采用过高压缩比例。

优点：

- 采用有损压缩，压缩后体积更小
- 支持24位真彩色
- 支持渐进式加载

缺点：

- 有损压缩会损坏图片的质量
- 不支持透明/半透明

**渐进式jpeg**

渐进式jpg(progressive jpeg)文件包含多次扫描，这些扫描顺序的存储在jpg文件中。打开文件过程中，会先显示整个图片的模糊轮廓，随着扫描次数的增加，图片变得越来越清晰。

**PNG**

png，即便携式网络图形是一种**无损压缩**的位图片形格式，其设计目的是试图替代GIF和TIFF文件格式，同时增加一些GIF文件格式所不具备的特性。PNG使用从LZ77派生的无损数据压缩算法，一般应用于JAVA程序、网页或S60程序中，原因是它压缩比高，生成文件体积小。

png支持8位、24位、32位3种，我们通常叫它们png8、png24、png32。

优点：

- 无损压缩
- 支持透明、半透明
- 最高支持24位真彩色图像以及8位灰度图像，从而彻底地消除锯齿边缘。

缺点：

- 与jpg的有损耗压缩相比，png提供的压缩量较少
- 不支持动画，如需支持动画还得使用apng

**APNG**

APNG（Animated Portable Network Graphics）是一个基于PNG（Portable Network Graphics）的位图动画格式。实际上就是多张png组成的动图。MAC电脑打开可以看到组成apng的每一张图。

优点：

- 支持png的所有优点
- 支持动画

缺点：

- 浏览器支持情况较差

**WEBP**

WebP是由Google最初在2010年发布，**目标是减少文件大小。它能同时支持无损压缩和有损压缩。**

它几乎集成了以上所有图片的优点，并且能够拥有更高的压缩率，但是浏览器支持率还不够理想。

**SVG**

SVG是一种用XML定义的语言，用来描述二维矢量及矢量/栅格图形。SVG提供了3种类型的图形对象：矢量图形（例如：由直线和曲线组成的路径）、图象、文本。图形对象还可进行分组、添加样式、变换、组合等操作，特征集包括嵌套变换、剪切路径、alpha蒙板、滤镜效果、模板对象和其它扩展。

SVG图形是可交互的和动态的，可以在SVG文件中嵌入动画元素或通过脚本来定义动画。

SVG与上面图片不同的是它是矢量图，无论你怎么放大，它都不会失真；同时，SVG文件通常要比比JPEG和PNG格式的文件要小很多。

优点：

- SVG 可被非常多的工具读取和修改（比如记事本）
- SVG 与 JPEG 和 GIF 图像比起来，尺寸更小，且可压缩性更强。
- SVG 是可伸缩
- SVG 图像可在任何的分辨率下被高质量地打印
- SVG 可在图像质量不下降的情况下被放大
- SVG 可以与 JavaScript 技术一起运行
- SVG 文件是纯粹的 XML

缺点：

- 渲染成本相对于其他格式图片比较高，对于性能有影响。
- 需要学习成本，因为SVG是一种用XML定义的语言。

### 如何选择图片的格式

![img](E:\pogject\学习笔记\image\html\图片格式)



---

## 32.浏览器乱码的原因是什么？如何解决？

**产生乱码的原因**：

- 网页源代码是gbk的编码，而内容中的中文字是utf-8编码的，这样浏览器打开即会出现html乱码。反之也会出现乱码；
- html网页编码是gbk，而程序从数据库中调出呈现是utf-8编码的内容也会造成编码乱码；
- 浏览器不能自动检测网页编码，造成网页乱码。

**解决办法**

- 使用软件进行编辑HTML网页内容；
- 如果网页设置编码是gbk，而数据库储存数据编码格式是UTF-8，此时需要程序查询数据库数据显示数据前进程序转码；
- 如果浏览器浏览时候出现网页乱码，在浏览器中找到转换编码的菜单进行转换；



----

## 33. webSocket如何兼容低浏览器

- Adobe Flash Socket；
- ActiveX HTMLFile (IE) ；
- 基于 multipart 编码发送 XHR；
- 基于长轮询的 XHR；



----

## 34.标签上title属性与alt属性的区别是什么？

- alt 是为了在图片**未能正常显示时（屏幕阅读器）给予文字说明**。且长度必须少于100个英文字符或者用户必须保证替换文字尽可能的短。
- title 属性为设置该属性的元素**提供建议性的信息**。使用title属性提供非本质的额外信息。



---

## 35.简述 html 页面渲染过程

整个渲染过程其实就是将URL对应的各种资源，通过浏览器渲染引擎的解析，输出可视化的图像。

### 基本概念

- **HTML解释器**：解释HTML语言的解释器，本质是将HTML文本解释成DOM树（文档对象模型）。
- **CSS解释器**：解释样式表的解释器，其作用是将DOM中的各个元素对象加上样式信息，从而为计算最后结果的布局提供依据。
- **布局**：将DOM和css样式信息结合起来，计算它们的大小位置等布局信息，形成一个能够表示这所有信息的内部表示模型即渲染树。
- **JavaScript引擎**：JavaScript可以修改网页的内容，也能修改CSS的信息，JavaScript引擎解释JavaScript代码并把代码的逻辑和对DOM和CSS的改动信息应用到布局中去，从而改变渲染的结果。

### 基本过程

- 1.解析HTML文件，创建DOM树

浏览器解析html源码，然后创建一个 DOM树。并行请求 css/image/js在DOM树中，每一个HTML标签都有一个对应的节点，并且每一个文本也都会有一个对应的文本节点。DOM树的根节点就是 documentElement，对应的是html标签。

- 2.解析CSS,形成CSS对象模型

浏览器解析CSS代码，计算出最终的样式数据。构建CSSOM树。对CSS代码中非法的语法它会直接忽略掉。解析CSS的时候会按照如下顺序来定义优先级：

> 浏览器默认设置 < 用户设置 < 外链样式 < 内联样式 < html中的style。

- 3.将CSS与DOM合并，构建渲染树（renderingtree）

DOM Tree + CSSOM –> 渲染树（rendering tree）。渲染树和DOM树有点像，但是是有区别的。DOM树完全和html标签一一对应，但是渲染树会忽略掉不需要渲染的元素，比如head、display:none的元素等。而且一大段文本中的每一个行在渲染树中都是独立的一个节点。**渲染树中的每一个节点都存储有对应的css属性。**

- 4.布局和绘制

一旦渲染树创建好了，浏览器就可以根据渲染树直接把页面绘制到屏幕上。

以上四个步骤并不是一次性顺序完成的。如果DOM或者CSSOM被修改，以上过程会被重复执行。实际上，CSS和JavaScript往往会多次修改DOM或者CSSOM。

### Repaint(重绘)

重绘是改变不影响元素在网页中的位置的元素样式时，譬如background-color(背景色)， border-color(边框色)，visibility(可见性)，浏览器会根据元素的新属性重新绘制一次(这就是重绘，或者说重新构造样式)，使元素呈现新的外观。

重绘不会带来重新布局，所以并不一定伴随重排。

### Reflow（重排）

渲染对象在创建完成并添加到渲染树时，`并不包含位置和大小信息`。**计算这些值的过程称为布局或重排。**

"重绘"不一定需要"重排"，比如改变某个网页元素的颜色，就只会触发"重绘"，不会触发"重排"，因为布局没有改变。

但是，"重排"必然导致"重绘"，比如改变一个网页元素的位置，就会同时触发"重排"和"重绘"，因为布局改变了。

### 浏览器如何优化渲染？

- **将多次改变样式属性的操作合并成一次操作**
- **将需要多次重排的元素，position属性设为absolute或fixed，这样此元素就脱离了文档流，它的变化不会影响到其他元素**。例如有动画效果的元素就最好设置为绝对定位。
- 由于display属性为none的元素不在渲染树中，对隐藏的元素操作不会引发其他元素的重排。**如果要对一个元素进行复杂的操作时，可以先隐藏它，操作完成后再显示。**这样只在隐藏和显示时触发2次重排。



----

## 36.script 标签为什么建议放在 body 标签的底部（defer、async）

因为浏览器在渲染html的时候是从上到下执行的，当遇到js文件的时候就会停止当前页面的渲染，转而去下载js文件。

如果将script标签放在头部，**在文件很大的情况下将导致首屏加载时间延长，影响用户体验**。

- 将script标签放在body的底部
- 通过defer、async属性将js文件转为异步加载



---

## 37.iframe是什么？有哪些优缺点？

iframe 可以在一个网站里面嵌入另一个网站的内容。

### iframe的优点

- iframe能够原封不动的把嵌入的网页展现出来。
- 如果有多个网页引用iframe，那么你只需要修改iframe的内容，就可以实现调用的每一个页面内容的更改，方便快捷。
- 网页如果为了统一风格，头部和版本都是一样的，就可以写成一个页面，用iframe来嵌套，可以增加代码的可重用。
- **如果遇到加载缓慢的第三方内容如图标和广告，这些问题可以由iframe来解决。**

### iframe的缺点

- 会产生很多页面，不容易管理。
- iframe框架结构有时会让人感到迷惑，如果框架个数多的话，可能会出现上下、左右滚动条，会分散访问者的注意力，用户体验度差。 
- 代码复杂，无法被一些搜索引擎索引到，这一点很关键，现在的搜索引擎爬虫还不能很好的处理iframe中的内容，所以使用iframe会不利于搜索引擎优化。
- 很多的移动设备（PDA 手机）无法完全显示框架，设备兼容性差。
- iframe 里面的样式、脚本资源，会增加请求次数，对于大型网站是不可取的。
- iframe 会阻碍页面的 onload 事件，给用户页面加载很慢的感觉。

iframe 已经渐渐的退出了前端开发的舞台。



---

## 38.canvas在标签上设置宽高，与在style中设置宽高有什么区别？

**canvas标签**的width和height是**画布实际宽度和高度**，绘制的图形都是在这个上面。

而**style的**width和height是canvas**在浏览器中被渲染的高度和宽度**。

如果canvas的width和height**没指定或值不正确，就被设置成默认值。**



----

## 39. 如何禁用a标签跳转页面或定位链接?

当页面中a标签不需要任何跳转时，从原理上来讲，可分如下两种方法：

- **标签属性**href，**使其指向空或不返回任何内容**。如：

```html
<a href="javascript:void(0);" >点此无反应javascript:void(0)</a>

<a href="javascript:;" >点此无反应javascript:</a>
```

- 从**标签事件**入手，**阻止其默认行为**。如：

html方法：

```html
<a href="" onclick="return false;">return false;</a>
<a href="#" onclick="return false;">return false;</a>
```

或者在js文件中阻止默认点击事件：

```js
Event.preventDefault()
```

还可以在css文件中处理点击，不响应任何鼠标事件：

```js
pointer-events: none;
```



---

## 40.行内元素有哪些？块级元素有哪些？ 空(void)元素有那些？

CSS规范规定，每个元素都有display属性，确定该元素的类型，每个元素都有默认的display值，如div的display默认值为“block”，则为“块级”元素；span默认display属性值为“inline”，是“行内”元素。

- 常用的块状元素有：

```html
<div>、<p>、<h1>...<h6>、<ol>、<ul>、<dl>、<table>、<address>、<blockquote> 、<form>
```

- 常用的内联元素有：

```html
<a>、<span>、<br>、<i>、<em>、<strong>、<label>、<q>、<var>、<cite>、<code>
```

- 常用的内联块状元素有：

```html
<img>、<input>
```

- 知名的空元素：

```html
<br/> <hr/> <img/> <input/> <link/> <meta/> 
```

---

## 41. label标签有什么用？

label标签来定义表单控制间的关系,当用户选择该标签时，浏览器会自动将焦点转到和标签相关的表单控件上。

```html
<label for="Name">Number:</label>
<input type='text' name="Name" id="Name"/>

<label>Date:<input type="text" name="B"/></label>
```

---

## 42.script 标签中， async 和 defer 两个属性有什么用途和区别？

在 HTML 中会遇到以下三类 script：

```html
<script src='xxx'></script>
<script src='xxx' async></script>
<script src='xxx' defer></script>
```

script标签用于加载脚本与执行脚本，直接使用script脚本时，html会按照顺序来加载并执行脚本，在脚本加载&执行的过程中，会阻塞后续的DOM渲染。

比如现在大家习惯于在页面中引用各种第三方脚本，但如果第三方服务商出现了一些小问题，比如延迟之类的，就会使得页面白屏。

针对上述情况，script标签提供了两种方式来解决问题，就是加入属性async以及defer，这两个属性使得script标签加载都不会阻塞DOM的渲染。

```
defer：此布尔属性被设置为向浏览器指示脚本在文档被解析后执行。
async：设置此布尔属性，以指示浏览器如果可能的话，应异步执行脚本。
```

### defer

如果script标签设置了defer属性，则浏览器会异步下载该文件并且不会影响后续DOM的渲染。

如果有多个设置了defer属性的script标签存在，则会按照顺序执行所有的script，defer脚本会在文档渲染完毕后，DOMContentLoaded事件调用前执行。

### async

async属性会使得script脚本异步的加载并在允许的情况下执行，而async的执行并不会按照script标签在页面中的顺序来执行，而是谁先加载完谁先执行。



---

## 43. 输入框宽度自适应

**CSS实现该效果的原理：**

1、用div嵌套“input”和“label”

2、将“input”输入的内容同步到“label”中，并将“label”设置成不可见

3、将“input”盖在“label”上

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title></title>
</head>
	<style type="text/css">
		.container {
			display: inline-flex;
			align-items: center;
			box-sizing: border-box;
			position: relative;
			border: 1px solid #000;
			border-radius: 5px;
			height: 40px;
			min-width: 50px;
			font-family: Arial,'microsoft yahei';
			font-size: 14px;
		}
		.label {
			display: inline-block;
			font-size: inherit;
			line-height: normal;
			visibility: hidden;
			font-family: inherit;
			padding: 0 10px;
		}
		.input {
			box-sizing: border-box;
			position: absolute;
			display: inline;
			line-height: normal;
			border-radius: inherit;
			height: 100%;
			width: 100%;
			outline: 0;
			border: 0;
			margin: 0;
			padding: 0 10px;
		}
	</style>

<body>
	<div id="app">
		<div class="container">
			<label id="label" class="label"></label>
			<input type="text" id="input" class="input">
		</div>
	</div>
</body>
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.14"></script>
<script type="text/javascript">
	document.getElementById("input").addEventListener("input", (e) => {
		document.getElementById("label").innerHTML = e.target.value;
	})
</script>

</html>
```

