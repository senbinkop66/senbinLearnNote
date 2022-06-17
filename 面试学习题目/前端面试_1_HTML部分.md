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

对标记语言的文档类型声明，告知浏览器该页面使用的是哪个 HTML 版本，浏览器的解析器用什么文档标准解析页面文档，必须在 HTML 文档的第一行，且位于 <html> 标签之前，但不属于HTML标签

在 HTML5 中只有一种：<!DOCTYPE html>，HTML 4.01 中有三种模式：分别是：Strict、Transitional 和 Frameset

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

- DOMContentLoaded —— 浏览器已完全加载 HTML，并构建了 DOM 树，但像 `<img> `和样式表之类的外部资源可能尚未加载完成。
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

此规则有两个例外：

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

在处理程序中，我们只能执行不涉及延迟或询问用户的简单操作。正是由于这个限制，它很少被使用。我们可以使用 navigator.sendBeacon 来发送网络请求。

有一个特殊的 **navigator.sendBeacon(url, data) 方法**可以满足这种需求，**它在后台发送数据，转换到另外一个页面不会有延迟**：浏览器离开页面，但仍然在执行 sendBeacon。

当 sendBeacon 请求完成时，浏览器可能已经离开了文档，所以就无法获取服务器响应（对于分析数据来说通常为空）。

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

## 14. link 和 @import

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

   link 除了引用样式文件，还可以引用图片等资源文件，而 **@import 只引用样式文件**

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

当浏览器解析到该元素时，**会暂停其他资源的下载和处理**，直到将该资源加载、编译、执行完毕，图片和框架 等元素也如此，类似于将所指向资源嵌入当前标签内。**这也是为什么将js脚本放在底部而不是头部**

href

- href是Hypertext Reference的缩写，**指向网络资源所在位置**，建立和当前元素（锚点）或当前文档（链接）之间的链接

- 在文档中添加link标签，浏览器会识别该文档为css文件，就会并行下载资源并且**不会**停止对当前文档的处理。**这也是为什么建议使用link方式来加载css，而不是使用@import方式**

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

谷歌浏览器做了很多优化，其中一个主要的优化就是预解析操作。**当渲染引擎收到字节流之后，会开启一个预解析线程，用来分析HTML文件中包含的JavaScript、CSS等相关文件**，解析到相关文件之后，预解析线程会提前下载这些文件。

再回到 DOM 解析上，我们知道引入 JavaScript 线程会阻塞 DOM，不过也有一些相关的策略来规避，比如使用 CDN 来加速 JavaScript 文件的加载，压缩 JavaScript 文件的体积。

另外，**如果 JavaScript 文件中没有操作 DOM 相关代码**，就可以将该 JavaScript 脚本设置为**异步加载**，通过 async 或 defer 来标记代码，使用方式如下所示：

```html
<script async type="text/javascript" src='foo.js'></script>
<script defer type="text/javascript" src='foo.js'></script>
```

async和defer区别：

- async：脚本并行加载，加载完成之后立即执行，执行时机不确定，仍有可能阻塞HTML解析，执行时机在load事件派发之前。
- defer：脚本并行加载，等待HTML解析完成之后，按照加载顺序执行脚本，执行时机DOMContentLoaded事件派发之前。

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

通过上面三点的分析，我们知道了 JavaScript 会阻塞 DOM 生成，而样式文件又会阻塞js的执行。



----

## 18. CSSOM树和DOM树是同时解析的吗？

浏览器会下下载HTML解析页面生成DOM树，遇到CSS标签就开始解析CSS，这个过程不会阻塞，**但是如果遇到了JS脚本，此时假如CSSOM还没有构建完，需要等待CSSOM构建完**，再去执行JS脚本，然后再执行DOM解析，此时会阻塞。



---

