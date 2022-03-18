# HTTP

**超文本传输协议（HTTP）**是一个用于传输超媒体文档（例如 HTML）的[应用层](https://en.wikipedia.org/wiki/Application_Layer)协议。它是为 Web 浏览器与 Web 服务器之间的通信而设计的，但也可以用于其他目的。HTTP 遵循经典的[客户端-服务端模型](https://en.wikipedia.org/wiki/Client–server_model)，客户端打开一个连接以发出请求，然后等待直到收到服务器端响应。HTTP 是[无状态协议](http://en.wikipedia.org/wiki/Stateless_protocol)，这意味着服务器不会在两个请求之间保留任何数据（状态）。尽管通常基于 TCP/IP 层，但它可以在任何可靠的[传输层](https://zh.wikipedia.org/wiki/传输层)上使用，也就是说，该协议不会像 UDP 那样静默的丢失消息。[RUDP](https://en.wikipedia.org/wiki/Reliable_User_Datagram_Protocol)——作为 UDP 的可靠化升级版本——是一种合适的替代选择。

# 标识互联网上的内容

HTTP 请求的内容通称为"资源"。”资源“这一概念非常宽泛，它可以是一份文档，一张图片，或所有其他你能够想到的格式。每个资源都由一个 ([URI](https://developer.mozilla.org/zh-CN/docs/Glossary/URI)) 来进行标识。

一般情况下，资源的名称和位置由同一个 URL（统一资源定位符，它是 URI 的一种）来标识。也有某些特殊情况，资源的名称和位置由不同的 URI 进行标识：例如，待请求的资源希望客户端从另外一个位置访问它。我们可以使用一个特定的首部字段，[`Alt-Svc`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Alt-Svc)，来指示这种情况。

## [URLs 与 URNs](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web#urls_与_urns)

### [URLs](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web#urls)

URI 的最常见形式是统一资源定位符 ([URL](https://developer.mozilla.org/zh-CN/docs/Glossary/URL))，它也被称为 *Web 地址*。

```
https://developer.mozilla.org
https://developer.mozilla.org/en-US/docs/Learn/
https://developer.mozilla.org/en-US/search?q=URL
```

在浏览器的地址栏中输入上述任一地址，浏览器就会加载相应的网页（资源）。

URL 由多个必须或可选的组件构成。下面给出了一个复杂的 URL：

```
http://www.example.com:80/path/to/myfile.html?key1=value1&key2=value2#SomewhereInTheDocument
```

### [URNs](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web#urns)

URN 是另一种形式的 URI，它通过特定命名空间中的唯一名称来标识资源。

```
urn:isbn:9780141036144
urn:ietf:rfc:7230
```

上面两个 URN 标识了下面的资源：

- 乔治·奥威尔所著的《1984》
- IETF规范7230，超文本传输协议 (HTTP/1.1)：Message Syntax and Routing.

## [统一资源标识符的语法 (URI)](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web#统一资源标识符的语法_(uri))

### [方案或协议](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web#方案或协议)

```
http://www.example.com:80/path/to/myfile.html?key1=value1&key2=value2#SomewhereInTheDocument
```



| 方案        | 描述                                                         |
| :---------- | :----------------------------------------------------------- |
| data        | [Data URIs](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/Data_URIs) |
| file        | 指定主机上文件的名称                                         |
| ftp         | [文件传输协议](https://developer.mozilla.org/en-US/docs/Glossary/FTP) |
| http/https  | [超文本传输协议／安全的超文本传输协议](https://developer.mozilla.org/en-US/docs/Glossary/HTTP) |
| mailto      | 电子邮件地址                                                 |
| ssh         | 安全 shell                                                   |
| tel         | 电话                                                         |
| urn         | 统一资源名称                                                 |
| view-source | 资源的源代码                                                 |
| ws/wss      | （加密的） [WebSocket (en-US)](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) 连接 |

### [主机](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web#主机)

`www.example.com` 既是一个域名，也代表管理该域名的机构。它指示了需要向网络上的哪一台主机发起请求。当然，也可以直接向主机的 [IP address](https://developer.mozilla.org/zh-CN/docs/Glossary/IP_Address) 地址发起请求。但直接使用 IP 地址的场景并不常见。

### [端口](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web#端口)

`:80` 是端口。它表示用于访问 Web 服务器上资源的技术“门”。如果访问的该 Web 服务器使用HTTP协议的标准端口（HTTP为80，HTTPS为443）授予对其资源的访问权限，则通常省略此部分。否则端口就是 URI 必须的部分。

### [路径](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web#路径)

`/path/to/myfile.html` 是 Web 服务器上资源的路径。在 Web 的早期，类似这样的路径表示 Web 服务器上的物理文件位置。现在，它主要是由没有任何物理实体的 Web 服务器抽象处理而成的。

### [查询](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web#查询)

`?key1=value1&key2=value2` 是提供给 Web 服务器的额外参数。这些参数是用 & 符号分隔的键/值对列表。Web 服务器可以在将资源返回给用户之前使用这些参数来执行额外的操作。每个 Web 服务器都有自己的参数规则，想知道特定 Web 服务器如何处理参数的唯一可靠方法是询问该 Web 服务器所有者。

### [片段](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web#片段)

`#SomewhereInTheDocument` 是资源本身的某一部分的一个锚点。锚点代表资源内的一种“书签”，它给予浏览器显示位于该“加书签”点的内容的指示。 例如，在HTML文档上，浏览器将滚动到定义锚点的那个点上；在视频或音频文档上，浏览器将转到锚点代表的那个时间。值得注意的是 **# 号后面的部分，也称为片段标识符，永远不会与请求一起发送到服务器。**

## [示例](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web#示例)

```
https://developer.mozilla.org/en-US/docs/Learn
tel:+1-816-555-1212
git@github.com:mdn/browser-compat-data.git
ftp://example.org/resource.txt
urn:isbn:9780141036144
```

# Data URLs

**Data URLs**，即前缀为 `data:` 协议的URL，其允许内容创建者向文档中嵌入小文件。

## [语法](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/Data_URIs#syntax)

Data URLs 由四个部分组成：前缀(`data:`)、指示数据类型的MIME类型、如果非文本则为可选的`base64`标记、数据本身：

```
data:[<mediatype>][;base64],<data>
mediatype `是个 MIME 类型的字符串，例如 "`image/jpeg`" 表示 JPEG 图像文件。如果被省略，则默认值为 `text/plain;charset=US-ASCII
```

如果数据是文本类型，你可以直接将文本嵌入 (根据文档类型，使用合适的实体字符或转义字符)。如果是二进制数据，你可以将数据进行base64编码之后再进行嵌入。

下面是一些示例：

- `data:,Hello%2C%20World!`

  简单的 text/plain 类型数据

- `data:text/plain;base64,SGVsbG8sIFdvcmxkIQ%3D%3D`

  上一条示例的 base64 编码版本

- `data:text/html,%3Ch1%3EHello%2C%20World!%3C%2Fh1%3E`

  一个HTML文档源代码 `<h1>Hello, World</h1>`

- `data:text/html,<script>alert('hi');</script>`

  一个会执行 JavaScript alert 的 HTML 文档。注意 script 标签必须封闭。

## [给数据作 base64 编码](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/Data_URIs#encoding_data_into_base64_format)

在Linux或者Mac OS系统上，你可以使用 `uuencode `命令行工具来简单实现编码：

```
uuencode -m infile remotename
```

`infile` 参数表示要作 base64编码的文件名称，`remotename` 参数表示输出的文件名称, 实际上并没有在 data 方案的URLs 中使用。

输出结果如下：

```
begin-base64 664 test
YSBzbGlnaHRseSBsb25nZXIgdGVzdCBmb3IgdGV2ZXIK
====
```

以上 Data URL 会使用位于首行之后的编码后的数据

### [在网页上使用 JavaScript](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/Data_URIs#在网页上使用_javascript)

Web APIs 已经有对 base64 进行编码解码的方法: [Base64 encoding and decoding](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Base64_encoding_and_decoding).

## [常见问题](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/Data_URIs#common_problems)

下文介绍一些在使用`data` URIs时遇到的常见问题:

### 语法

`data` URLs 的格式很简单，但很容易会忘记把逗号加在 "data" 协议名后面，在对数据进行 base64 编码时也很容易发生错误。

### HTML代码格式化

一个 `data` URL 是一个文件中的文件，相对于文档来说这个文件可能就非常的长。因为 data URL 也是 URL，所以 data 会用空白符(换行符, 制表符, 空格)来对它进行格式化。但如果数据是经过 base64 编码的，就可能会[遇到一些问题](https://bugzilla.mozilla.org/show_bug.cgi?id=73026#c12)。

### 长度限制

虽然 Firefox 支持无限长度的 `data` URLs，但是标准中并没有规定浏览器必须支持任意长度的 `data` URIs。比如，Opera 11浏览器限制 URLs 最长为 65535 个字符，这意味着 data URLs 最长为 65529 个字符（如果你使用纯文本 data:, 而不是指定一个 MIME 类型的话，那么 65529 字符长度是编码后的长度，而不是源文件）。

### 缺乏错误处理

MIME类型错误或者base64编码错误,都会造成`data` URIs无法被正常解析, 但不会有任何相关错误提示.

### 不支持查询字符串

一个data URI的数据字段是没有结束标记的,所以尝试在一个data URI后面添加查询字符串会导致,查询字符串也一并被当作数据字段.例如:

```
data:text/html,lots of text...<p><a name%3D"bottom">bottom</a>?arg=val
```

这个 data URL 代表的 HTML 源文件内容为:

```
lots of text...<p><a name="bottom">bottom</a>?arg=val
```

# MIME 类型

**媒体类型**（通常称为 **Multipurpose Internet Mail Extensions** 或 **MIME** 类型 ）是一种标准，用来表示文档、文件或字节流的性质和格式。它在[IETF RFC 6838](https://tools.ietf.org/html/rfc6838)中进行了定义和标准化。

互联网号码分配机构（[IANA](https://www.iana.org/)）是负责跟踪所有官方MIME类型的官方机构，您可以在[媒体类型](https://www.iana.org/assignments/media-types/media-types.xhtml)页面中找到最新的完整列表。

**重要：**浏览器通常使用MIME类型（而不是文件扩展名）来确定如何处理URL，因此Web服务器在响应头中添加正确的MIME类型非常重要。如果配置不正确，浏览器可能会曲解文件内容，网站将无法正常工作，并且下载的文件也会被错误处理。

## [语法](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_Types#语法)

### [通用结构](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_Types#通用结构)

```
type/subtype
```

MIME的组成结构非常简单；由类型与子类型两个字符串中间用`'/'`分隔而组成。**不允许空格存在**。*type* 表示可以被分多个子类的独立类别。*subtype 表示细分后的每个类型。*

MIME类型对大小写不敏感，但是**传统写法都是小写**。


IN THIS ARTICLE[语法](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_Types#语法)[重要的MIME类型](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_Types#重要的mime类型)[设置正确的MIME类型的重要性](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_Types#设置正确的mime类型的重要性)[MIME 嗅探](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_Types#mime_嗅探)[其他传送文件类型的方法](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_Types#其他传送文件类型的方法)[其他](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_Types#其他)

# MIME 类型

**媒体类型**（通常称为 **Multipurpose Internet Mail Extensions** 或 **MIME** 类型 ）是一种标准，用来表示文档、文件或字节流的性质和格式。它在[IETF RFC 6838](https://tools.ietf.org/html/rfc6838)中进行了定义和标准化。

互联网号码分配机构（[IANA](https://www.iana.org/)）是负责跟踪所有官方MIME类型的官方机构，您可以在[媒体类型](https://www.iana.org/assignments/media-types/media-types.xhtml)页面中找到最新的完整列表。

**重要：**浏览器通常使用MIME类型（而不是文件扩展名）来确定如何处理URL，因此Web服务器在响应头中添加正确的MIME类型非常重要。如果配置不正确，浏览器可能会曲解文件内容，网站将无法正常工作，并且下载的文件也会被错误处理。

## [语法](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_Types#语法)

### [通用结构](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_Types#通用结构)

```
type/subtype
```

MIME的组成结构非常简单；由类型与子类型两个字符串中间用`'/'`分隔而组成。不允许空格存在。*type* 表示可以被分多个子类的独立类别。*subtype 表示细分后的每个类型。*

MIME类型对大小写不敏感，但是传统写法都是小写。

### [独立类型](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_Types#独立类型)

```
text/plain
text/html
image/jpeg
image/png
audio/mpeg
audio/ogg
audio/*
video/mp4
application/*
application/json
application/javascript
application/ecmascript
application/octet-stream
…
```

*独立*类型表明了对文件的分类，可以是如下之一：

| 类型          | 描述                                                         | 典型示例                                                     |
| :------------ | :----------------------------------------------------------- | :----------------------------------------------------------- |
| `text`        | 表明文件是普通文本，理论上是人类可读                         | `text/plain`, `text/html`, `text/css, text/javascript`       |
| `image`       | 表明是某种图像。不包括视频，但是动态图（比如动态gif）也使用image类型 | `image/gif`, `image/png`, `image/jpeg`, `image/bmp`, `image/webp`, `image/x-icon`, `image/vnd.microsoft.icon` |
| `audio`       | 表明是某种音频文件                                           | `audio/midi`, `audio/mpeg, audio/webm, audio/ogg, audio/wav` |
| `video`       | 表明是某种视频文件                                           | `video/webm`, `video/ogg`                                    |
| `application` | 表明是某种二进制数据                                         | `application/octet-stream`, `application/pkcs12`, `application/vnd.mspowerpoint`, `application/xhtml+xml`, `application/xml`, `application/pdf` |

对于text文件类型若没有特定的subtype，就使用 `text/plain`。类似的，二进制文件没有特定或已知的 subtype，即使用 `application/octet-stream`。

### [Multipart 类型](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_Types#multipart_类型)

```
multipart/form-data
multipart/byteranges
```

*Multipart* 类型表示细分领域的文件类型的种类，经常对应不同的 MIME 类型。这是*复合*文件的一种表现方式。`multipart/form-data` 可用于联系 [HTML Forms](https://developer.mozilla.org/en-US/docs/Learn/Forms) 和 [`POST`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/POST) 方法，此外 `multipart/byteranges`使用状态码[`206`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/206) `Partial Content`来发送整个文件的子集，**而HTTP对不能处理的复合文件使用特殊的方式：将信息直接传送给浏览器**（这时可能会建立一个“另存为”窗口，但是却不知道如何去显示内联文件。）

## [重要的MIME类型](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_Types#重要的mime类型)

### [application/octet-stream](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_Types#applicationoctet-stream)

这是应用程序文件的默认值。意思是 *未知的应用程序文件 ，*浏览器一般不会自动执行或询问执行。浏览器会像对待 设置了HTTP头[`Content-Disposition`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Disposition) 值为 `attachment` 的文件一样来对待这类文件。

### [text/plain](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_Types#textplain)

**文本文件默认值。**即使它*意味着未知的文本文件*，但浏览器认为是可以直接展示的。

`text/plain`并不是意味着某种文本数据。如果浏览器想要一个文本文件的明确类型，浏览器并不会考虑他们是否匹配。比如说，如果通过一个表明是下载CSS文件的[``](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/link)链接下载了一个 `text/plain` 文件。如果提供的信息是text/plain，浏览器并不会认出这是有效的CSS文件。CSS类型需要使用text/css。

### [text/css](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_Types#textcss)

在网页中要被解析为CSS的任何CSS文件必须指定MIME为`text/css`。通常，服务器不识别以.css为后缀的文件的MIME类型，而是将其以MIME为`text/plain` 或 `application/octet-stream` 来发送给浏览器：在这种情况下，大多数浏览器不识别其为CSS文件，直接忽略掉。特别要注意为CSS文件提供正确的MIME类型。

### [text/html](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_Types#texthtml)

所有的HTML内容都应该使用这种类型。XHTML的其他MIME类型（如`application/xml+html`）现在基本不再使用（HTML5统一了这些格式）。

注意：如果您打算使用 XML 的严格解析规则，您仍然需要使用 application/xml 或 application/xhtml+xml，使用 <![CDATA[…]]> 或来自非 HTML、非 SVG 或非 ‑MathML XML 命名空间，因为 text/html 的解析语义与 application/xml 的解析语义略有不同。

### [text/javascript](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_Types#textjavascript)

据 HTML 标准，应该总是使用 MIME 类型 `text/javascript` 服务 JavaScript 文件。其他值不被认为有效，使用那些值可能会导致脚本不被载入或运行。

历史原因，[MIME 嗅探标准](https://mimesniff.spec.whatwg.org/)（定义浏览器应该如何解释媒体类型和如何处理无有效媒体类型的内容）允许使用匹配以下任意的 MIME 类型服务 JavaScript：

- `application/javascript`
- `application/ecmascript`
- `application/x-ecmascript` 
- `application/x-javascript` 
- `text/javascript`
- `text/ecmascript`
- `text/javascript1.0` 
- `text/javascript1.1` 
- `text/javascript1.2` 
- `text/javascript1.3` 
- `text/javascript1.4` 
- `text/javascript1.5` 
- `text/jscript` 
- `text/livescript` 
- `text/x-ecmascript` 
- `text/x-javascript` 

**注意：**即便任何给定的 [user agent](https://developer.mozilla.org/zh-CN/docs/Glossary/User_agent) 可能支持这些中的任意或所有，你只应该使用 `text/javascript`。它是唯一确保能在目前和以后正常工作的 MIME 类型。

你可能发现某些内容在 `text/javascript` 媒体类型末尾有一个 `charset` 参数，指定用于表示代码内容的字符集。这不是合法的，而且在大多数场景下会导致脚本不被载入。

### [图片类型](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_Types#图片类型)

只有一小部分图片类型是被广泛支持的，Web安全的，可随时在Web页面中使用的：

| MIME 类型       | 图片类型                             |
| :-------------- | :----------------------------------- |
| `image/gif`     | GIF 图片 (无损耗压缩方面被PNG所替代) |
| `image/jpeg`    | JPEG 图片                            |
| `image/png`     | PNG 图片                             |
| `image/svg+xml` | SVG图片 (矢量图)                     |

此处的类型划分有一定的争议，有人认为此处应该增加 WebP（`image/webp`），但是每个新增的图片类型都会增加代码的数量，这会带来一些新的安全问题，所以浏览器供应商对于添加类型非常小心。

另外的一些图片种类可以在Web文档中找到。比如很多浏览器支持 *icon 类型的图标作为* favicons或者类似的图标，并且浏览器在MIME类型中的 `image/x-icon` 支持ICO图像。

Footnote 1

尽管 `image/vnd.microsoft.icon` [在ANA注册](https://www.iana.org/assignments/media-types/image/vnd.microsoft.icon), 它仍然不被广泛支持，`image/x-icon` 被作为替代品使用。

### [音频与视频类型](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_Types#音频与视频类型)

HTML并没有明确定义被用于[``](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/audio)和[``](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/video)元素所支持的文件类型，所以在web上使用的只有相对较小的一组类型。[ ](https://developer.mozilla.org/en-US/docs/Web/Media/Formats)文章 [Media formats supported by the HTML audio and video elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Supported_media_formats) 解释了可以被使用的解码器或视频文件格式。

在web环境最常用的视频文件的格式，是以下这些这些文件类型：

| MIME 类型                                               | 音频或视频类型                                               |
| :------------------------------------------------------ | :----------------------------------------------------------- |
| `audio/wave` `audio/wav` `audio/x-wav` `audio/x-pn-wav` | 音频流媒体文件。一般支持PCM音频编码 (WAVE codec "1") ，其他解码器有限支持（如果有的话）。 |
| `audio/webm`                                            | WebM 音频文件格式。Vorbis 和 Opus 是其最常用的解码器。       |
| `video/webm`                                            | 采用WebM视频文件格式的音视频文件。VP8 和 VP9是其最常用的视频解码器。Vorbis 和 Opus 是其最常用的音频解码器。 |
| `audio/ogg`                                             | 采用OGG多媒体文件格式的音频文件。 Vorbis 是这个多媒体文件格式最常用的音频解码器。 |
| `video/ogg`                                             | 采用OGG多媒体文件格式的音视频文件。常用的视频解码器是 Theora；音频解码器为Vorbis 。 |
| `application/ogg`                                       | 采用OGG多媒体文件格式的音视频文件。常用的视频解码器是 Theora；音频解码器为Vorbis 。 |
| `application/json`                                      | application/json (MIME_type)                                 |

### [multipart/form-data](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_Types#multipartform-data)

`multipart/form-data` 可用于[HTML表单](https://developer.mozilla.org/en-US/docs/Learn/Forms)从浏览器发送信息给服务器。作为多部分文档格式，它由边界线（一个由`'--'`开始的字符串）划分出的不同部分组成。每一部分有自己的实体，以及自己的 HTTP 请求头，[`Content-Disposition`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Disposition)和 [`Content-Type`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Type) 用于文件上传领域，最常用的 ([`Content-Length`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Length) 因为边界线作为分隔符而被忽略）。

```http
Content-Type: multipart/form-data; boundary=aBoundaryString
(other headers associated with the multipart document as a whole)

--aBoundaryString
Content-Disposition: form-data; name="myFile"; filename="img.jpg"
Content-Type: image/jpeg

(data)
--aBoundaryString
Content-Disposition: form-data; name="myField"

(data)
--aBoundaryString
(more subparts)
--aBoundaryString--
```

如下所示的表单:

```html
<form action="http://localhost:8000/" method="post" enctype="multipart/form-data">
  <input type="text" name="myTextField">
  <input type="checkbox" name="myCheckBox">Check</input>
  <input type="file" name="myFile">
  <button>Send the file</button>
</form>
```

Copy to Clipboard

会发送这样的请求:

```http
POST / HTTP/1.1
Host: localhost:8000
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate
Connection: keep-alive
Upgrade-Insecure-Requests: 1
Content-Type: multipart/form-data; boundary=---------------------------8721656041911415653955004498
Content-Length: 465

-----------------------------8721656041911415653955004498
Content-Disposition: form-data; name="myTextField"

Test
-----------------------------8721656041911415653955004498
Content-Disposition: form-data; name="myCheckBox"

on
-----------------------------8721656041911415653955004498
Content-Disposition: form-data; name="myFile"; filename="test.txt"
Content-Type: text/plain

Simple file.
-----------------------------8721656041911415653955004498--
```

### [multipart/byteranges](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_Types#multipartbyteranges)

`multipart/byteranges` 用于把部分的响应报文发送回浏览器。当发送状态码[`206`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/206)`Partial Content` 时，这个MIME类型用于指出这个文件由若干部分组成，每一个都有其请求范围。就像其他很多类型[`Content-Type`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Type)使用分隔符来制定分界线。每一个不同的部分都有[`Content-Type`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Type)这样的HTTP头来说明文件的实际类型，以及 [`Content-Range`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Range)来说明其范围。

```http
HTTP/1.1 206 Partial Content
Accept-Ranges: bytes
Content-Type: multipart/byteranges; boundary=3d6b6a416f9b5
Content-Length: 385

--3d6b6a416f9b5
Content-Type: text/html
Content-Range: bytes 100-200/1270

eta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <meta name="vieport" content
--3d6b6a416f9b5
Content-Type: text/html
Content-Range: bytes 300-400/1270

-color: #f0f0f2;
        margin: 0;
        padding: 0;
        font-family: "Open Sans", "Helvetica
--3d6b6a416f9b5--
```

## [设置正确的MIME类型的重要性](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_Types#设置正确的mime类型的重要性)

很多web服务器使用默认的 `application/octet-stream` 来发送未知类型。出于一些安全原因，对于这些资源浏览器不允许设置一些自定义默认操作，导致用户必须存储到本地以使用。常见的导致服务器配置错误的文件类型如下所示：

- RAR编码文件。在这种情况，理想状态是，设置真实的编码文件类型；但这通常不可能（可能是服务器所未知的类型或者这个文件包含许多其他的不同的文件类型）。这这种情况服务器将发送 `application/x-rar-compressed` 作为MIME类型，用户不会将其定义为有用的默认操作。
- 音频或视频文件。只有正确设置了MIME类型的文件才能被 <vedio>或<audio>别和播放。 可参照  [use the correct type for audio and video](https://developer.mozilla.org/En/Media_formats_supported_by_the_audio_and_video_elements)。
- 专有文件类型。是专有文件时需要特别注意。使用 `application/octet-stream` 作为特殊处理是不被允许的：对于一般的MIME类型浏览器不允许定义默认行为（比如“在Word中打开”）

## [MIME 嗅探](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_Types#mime_嗅探)

在缺失 MIME 类型或客户端认为文件设置了错误的 MIME 类型时，浏览器可能会通过查看资源来进行MIME嗅探。每一个浏览器在不同的情况下会执行不同的操作。因为这个操作会有一些安全问题，有的 MIME 类型表示可执行内容而有些是不可执行内容。浏览器可以通过请求头 [`Content-Type`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Type) 来设置 [`X-Content-Type-Options`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/X-Content-Type-Options) 以阻止MIME嗅探。

## [其他传送文件类型的方法](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_Types#其他传送文件类型的方法)

MIME类型不是传达文档类型信息的唯一方式：

- 有时会使用名称后缀，特别是在Microsoft Windows系统上。并非所有的操作系统都认为这些后缀是有意义的（特别是Linux和Mac OS），并且像外部MIME类型一样，不能保证它们是正确的。
- 魔术数字。不同类型的文件的语法通过查看结构来允许文件类型推断。例如，每个GIF文件以47 49 46 38十六进制值[GIF89]或89 50 4E 47 [.PNG]的PNG文件开头。 并非所有类型的文件都有幻数，所以这也不是100％可靠的方式。

# 常见 MIME 类型列表

这是一份 MIME 类型列表，以及各个类型的文档类别，按照它们的常见扩展名排序。

两种主要的 MIME 类型在默认类型中扮演了重要的角色：

- `text/plain` 表示文本文件的默认值。一个文本文件应当是人类可读的，并且不包含二进制数据。
- `application/octet-stream` 表示所有其他情况的默认值。一种未知的文件类型应当使用此类型。浏览器在处理这些文件时会特别小心, 试图防止、避免用户的危险行为.

# 选择 www 或非 www URL 作为域名

