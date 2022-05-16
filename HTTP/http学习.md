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

网站所有者经常会问的一个问题是选择非 www 的还是 www 的网址。本文提供了选择建议。

## [什么是域名？](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/Choosing_between_www_and_non-www_URLs#什么是域名？)

在一个 HTTP 网址中，在初始 `http://` 或 `https://` 后的第一个子字符串称为域。它是文档所在的服务器的名称。

一个服务器不一定是一个独立的物理机：几台服务器可以驻留在同一台物理机器上，或者一台服务器可以通过几台机器进行处理，协作处理并响应或负载均衡它们之间的请求。关键点在于语义上**一个域名代表一个单独的服务器**。

## [所以，我只能选择其中一个做为我的网站的网址？](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/Choosing_between_www_and_non-www_URLs#所以，我只能选择其中一个做为我的网站的网址？)

- 是的，你必须选择其中之一，且一直使用。选择使用其中哪一个取决于你，当你选择完之后，就要保持下去。这样，无论是对用户，还是对搜索引擎，你的网站能保持更好的一致性。这包括始终链接到所选域名（如果你在网站中使用相对网址，则不应该很难），也可以始终将链接（通过电子邮件/社交网络等）共享使用同一个域名。
- 不，你可以有两个。重要的是，你需是保持的那一个官方的域名，**这个官方域名被称为\*规范\*名称**。你所有的绝对链接应该使用它。但即便如此，你仍然可以有其他域名使用：HTTP允许使用两种技术，以便它在使用规范域名的同时还允许非规范域名使用，使使用者或搜索引擎可以准确的访问到所预期的页面。

所以，选择其中一个作为你的域名的规范地址！下面有两种技术允许不规范的域名仍然起作用。

## [规范网址方式](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/Choosing_between_www_and_non-www_URLs#规范网址方式)

选择下面有两种不同的方式使网站*规范*。

### [使用 HTTP 301 重定向](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/Choosing_between_www_and_non-www_URLs#使用_http_301_重定向)

在这种情况下，你需要配置服务器接收的HTTP请求（ 常见为 www 和非 www 网址相同）以及适当的HTTP响应 [`301`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/301) 去响应所有非规范的域名请求。这会将尝试使访问非规范网址的浏览器重定向到其规范的等效网址。举例来说，如果您选择使用非 www 网址为规范类型，你的所有 www 网址都应该被重定向到对应的非 www 网址上。

例如：

1. 服务器收到 http://www.example.org/whaddup 请求（当规范域名是 example.org 时）
2. 服务器则以代码 [`301`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/301) 与头 [`Location`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Location) ：`http://example.org/whaddup`
3. 该客户端发出的规范的域名请求：http://example.org/whaddup

它可以将一个特殊的 HTML [``](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/link) 元素添加到网页指示什么网页的标准地址，这对页面的访问者没有影响，但在搜索引擎检索时会告诉搜索引擎当页面实际的地址。通过这种方式，搜索引擎不需要索引同一页面多次，那样可能导致它被视为重复的内容或垃圾邮件，甚至从搜索引擎结果中删除或者降低你的页面显示排名。

当加入这样一个标签，会告诉搜索引擎，你提供相同内容的两个域名那一个是规范的。以前面的例子为例，http://www.example.org/whaddup 将提供与 http://example.org/whaddup 相同的内容，但有一个附加的 [``](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/link) 头部元素：

```
<link href="http://example.org/whaddup" rel="canonical">
```

不同于以往，浏览器历史记录将考虑非 www 和 www 的网址作为独立的条目。

## [使你页面都有效](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/Choosing_between_www_and_non-www_URLs#使你页面都有效)

有了这些技术，你可以配置服务器对www前缀和非www前缀的域名进行正确的响应，如果你无法预测用户会在浏览器地址栏使用哪个URL，你需要做的就是选择一个作为你的规范地址，然后重定向另一个。

----

# HTTP 基础

## HTTP概述

HTTP是一种能够获取如 HTML 这样的网络资源的 [protocol](https://developer.mozilla.org/zh-CN/docs/Glossary/Protocol)(通讯协议)。它是在 Web 上进行数据交换的基础，是一种 **client-server 协议**，也就是说，请求通常是由像浏览器这样的接受方发起的。一个完整的Web文档通常是由不同的子文档拼接而成的，像是文本、布局描述、图片、视频、脚本等等。

![A Web document is the composition of different resources](https://mdn.mozillademos.org/files/13677/Fetching_a_page.png)

客户端和服务端通过交换各自的消息（与数据流正好相反）进行交互。由像浏览器这样的客户端发出的消息叫做 *requests*，被服务端响应的消息叫做 *responses。*

![HTTP as an application layer protocol, on top of TCP (transport layer) and IP (network layer) and below the presentation layer.](https://mdn.mozillademos.org/files/13673/HTTP%20&%20layers.png)HTTP被设计于20世纪90年代初期，是一种可扩展的协议。它是应用层的协议，通过[TCP](https://developer.mozilla.org/zh-CN/docs/Glossary/TCP)，或者是[TLS](https://developer.mozilla.org/zh-CN/docs/Glossary/TLS)－加密的TCP连接来发送，理论上任何可靠的传输协议都可以使用。因为其良好的扩展性，时至今日，它不仅被用来传输超文本文档，还用来传输图片、视频或者向服务器发送如HTML表单这样的信息。HTTP还可以根据网页需求，仅获取部分Web文档内容更新网页。

---

## [基于HTTP的组件系统](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Overview#基于http的组件系统)

HTTP是一个client-server协议：请求通过一个实体被发出，实体也就是用户代理。大多数情况下，这个用户代理都是指浏览器，当然它也可能是任何东西，比如一个爬取网页生成维护搜索引擎索引的机器爬虫。

每一个发送到服务器的请求，都会被服务器处理并返回一个消息，也就是*response*。在这个请求与响应之间，还有许许多多的被称为 [proxies](https://developer.mozilla.org/zh-CN/docs/Glossary/Proxy_server) 的实体，他们的作用与表现各不相同，比如有些是网关，还有些是[caches](https://developer.mozilla.org/zh-CN/docs/Glossary/Cache)等。

![img](https://mdn.mozillademos.org/files/13679/Client-server-chain.png)

实际上，在一个浏览器和处理请求的服务器之间，还有路由器、调制解调器等许多计算机。由于Web的层次设计，那些在网络层和传输层的细节都被隐藏起来了。HTTP位于最上层的应用层。虽然底层对于分析网络问题非常重要，但是大多都跟对HTTP的描述不相干。

### [客户端：user-agent](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Overview#客户端：user-agent)

user-agent 就是任何能够为用户发起行为的工具。这个角色通常都是由浏览器来扮演。一些例外情况，比如是工程师使用的程序，以及Web开发人员调试应用程序。

浏览器**总是**作为发起一个请求的实体，他永远不是服务器（虽然近几年已经出现一些机制能够模拟由服务器发起的请求消息了）。

要展现一个网页，浏览器首先发送一个请求来获取页面的HTML文档，再解析文档中的资源信息发送其他请求，获取可执行脚本或CSS样式来进行页面布局渲染，以及一些其它页面资源（如图片和视频等）。然后，浏览器将这些资源整合到一起，展现出一个完整的文档，也就是网页。浏览器执行的脚本可以在之后的阶段获取更多资源，并相应地更新网页。

一个网页就是一个超文本文档。也就是说，有一部分显示的文本可能是链接，启动它（通常是鼠标的点击）就可以获取一个新的网页，使得用户可以控制客户端进行网上冲浪。浏览器来负责发送HTTP请求，并进一步解析HTTP返回的消息，以向用户提供明确的响应。

### [Web服务端](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Overview#web服务端)

在上述通信过程的另一端，是由Web Server来*服务*并提供客户端所请求的文档。Server只是虚拟意义上代表一个机器：它可以是共享负载（负载均衡）的一组服务器组成的计算机集群，也可以是一种复杂的软件，通过向其他计算机（如缓存，数据库服务器，电子商务服务器 ...）发起请求来获取部分或全部资源。

Server 不一定是一台机器，但一个机器上可以装载的众多Servers。在HTTP/1.1 和[`Host`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Host)头部中，它们甚至可以共享同一个IP地址。

### [代理（Proxies）](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Overview#代理（proxies）)

在浏览器和服务器之间，有许多计算机和其他设备转发了HTTP消息。由于Web栈层次结构的原因，它们大多都出现在传输层、网络层和物理层上，对于HTTP应用层而言就是透明的，虽然它们可能会对应用层性能有重要影响。还有一部分是表现在应用层上的，被称为**代理（Proxies）**。代理（Proxies）既可以表现得透明，又可以不透明（“改变请求”会通过它们）。代理主要有如下几种作用：

- 缓存（可以是公开的也可以是私有的，像浏览器的缓存）
- 过滤（像反病毒扫描，家长控制...）
- 负载均衡（让多个服务器服务不同的请求）
- 认证（对不同资源进行权限管理）
- 日志记录（允许存储历史信息）

---

## [HTTP 的基本性质](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Overview#http_的基本性质)

### [HTTP 是简单的](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Overview#http_是简单的)

虽然下一代HTTP/2协议将HTTP消息封装到了帧（frames）中，HTTP大体上还是被设计得简单易读。HTTP报文能够被人读懂，还允许简单测试，降低了门槛，对新人很友好。

### [HTTP 是可扩展的](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Overview#http_是可扩展的)

在 HTTP/1.0 中出现的 [HTTP headers](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers) 让协议扩展变得非常容易。只要服务端和客户端就新 headers 达成语义一致，新功能就可以被轻松加入进来。

### [HTTP 是无状态，有会话的](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Overview#http_是无状态，有会话的)

HTTP是无状态的：在同一个连接中，两个执行成功的请求之间是没有关系的。这就带来了一个问题，用户没有办法在同一个网站中进行连续的交互，比如在一个电商网站里，用户把某个商品加入到购物车，切换一个页面后再次添加了商品，这两次添加商品的请求之间没有关联，浏览器无法知道用户最终选择了哪些商品。而使用HTTP的头部扩展，HTTP Cookies就可以解决这个问题。把Cookies添加到头部中，创建一个会话让每次请求都能共享相同的上下文信息，达成相同的状态。

注意，HTTP本质是无状态的，**使用Cookies可以创建有状态的会话**。

---

### [HTTP 和连接](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Overview#http_和连接)

一个连接是由传输层来控制的，这从根本上不属于HTTP的范围。HTTP并不需要其底层的传输层协议是面向连接的，只需要它是可靠的，或不丢失消息的（至少返回错误）。在互联网中，有两个最常用的传输层协议：TCP是可靠的，而UDP不是。因此，**HTTP依赖于面向连接的TCP进行消息传递，但连接并不是必须的。**

在客户端（通常指浏览器）与服务器能够交互（客户端发起请求，服务器返回响应）之前，必须在这两者间建立一个 TCP 链接，打开一个 TCP 连接需要多次往返交换消息（因此耗时）。HTTP/1.0 默认为每一对 HTTP 请求/响应都打开一个单独的 TCP 连接。当需要连续发起多个请求时，这种模式比多个请求共享同一个 TCP 链接更低效。

为了减轻这些缺陷，HTTP/1.1引入了流水线（被证明难以实现）和持久连接的概念：底层的TCP连接可以通过[`Connection`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Connection)头部来被部分控制。HTTP/2则发展得更远，通过在一个连接复用消息的方式来让这个连接始终保持为暖连接。 

为了更好的适合HTTP，设计一种更好传输协议的进程一直在进行。Google就研发了一种以UDP为基础，能提供更可靠更高效的传输协议[QUIC](https://en.wikipedia.org/wiki/QUIC)。

---

## [HTTP 能控制什么](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Overview#http_能控制什么)

多年以来，HTTP良好的扩展性使得越来越多的Web功能归其控制。缓存和认证很早就可以由HTTP来控制了。另一方面，对同源同域的限制到2010年才有所改变。

以下是可以被HTTP控制的常见特性。

- [缓存 ](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Caching)
  文档如何缓存能通过HTTP来控制。服务端能告诉代理和客户端哪些文档需要被缓存，缓存多久，而客户端也能够命令中间的缓存代理来忽略存储的文档。
- *开放同源限制*
  为了防止网络窥听和其它隐私泄漏，浏览器强制对Web网站做了分割限制。只有来自于**相同来源**的网页才能够获取网站的全部信息。这样的限制有时反而成了负担，HTTP可以通过修改头部来开放这样的限制，因此Web文档可以是由不同域下的信息拼接成的（某些情况下，这样做还有安全因素考虑）。
- *认证*
  一些页面能够被保护起来，仅让特定的用户进行访问。基本的认证功能可以直接通过HTTP提供，使用[`Authenticate`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Authenticate)相似的头部即可，或用HTTP Cookies来设置指定的会话。
- *[代理和隧道](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Proxy_servers_and_tunneling)*
  通常情况下，服务器和/或客户端是处于内网的，对外网隐藏真实 IP 地址。因此 HTTP 请求就要通过代理越过这个网络屏障。但并非所有的代理都是 HTTP 代理。例如，SOCKS协议的代理就运作在更底层，一些像 FTP 这样的协议也能够被它们处理。
- *会话* 
  使用HTTP Cookies允许你用一个服务端的状态发起请求，这就创建了会话。虽然基本的HTTP是无状态协议。这很有用，不仅是因为这能应用到像购物车这样的电商业务上，更是因为这使得任何网站都能轻松为用户定制展示内容了。

----

## [HTTP 流](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Overview#http_流)

当客户端想要和服务端进行信息交互时（服务端是指最终服务器，或者是一个中间代理），过程表现为下面几步：

1. 打开一个TCP连接：TCP连接被用来发送一条或多条请求，以及接受响应消息。客户端可能打开一条新的连接，或重用一个已经存在的连接，或者也可能开几个新的TCP连接连向服务端。

2. 发送一个HTTP报文：HTTP报文（在HTTP/2之前）是语义可读的。在HTTP/2中，这些简单的消息被封装在了帧中，这使得报文不能被直接读取，但是原理仍是相同的。

   ```http
   GET / HTTP/1.1
   Host: developer.mozilla.org
   Accept-Language: fr
   ```

3. 读取服务端返回的报文信息：

   ```http
   HTTP/1.1 200 OK
   Date: Sat, 09 Oct 2010 14:28:02 GMT
   Server: Apache
   Last-Modified: Tue, 01 Dec 2009 20:18:22 GMT
   ETag: "51142bc1-7449-479b075b2891b"
   Accept-Ranges: bytes
   Content-Length: 29769
   Content-Type: text/html
   
   <!DOCTYPE html... (here comes the 29769 bytes of the requested web page)
   ```

4. 关闭连接或者为后续请求重用连接。

当HTTP流水线启动时，后续请求都可以不用等待第一个请求的成功响应就被发送。然而HTTP流水线已被证明很难在现有的网络中实现，因为现有网络中有很多老旧的软件与现代版本的软件共存。因此，HTTP流水线已被在有多请求下表现得更稳健的HTTP/2的帧所取代。

---

## [HTTP 报文](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Overview#http_报文)

HTTP/1.1以及更早的HTTP协议报文都是语义可读的。在HTTP/2中，这些报文被嵌入到了一个新的二进制结构，帧。帧允许实现很多优化，比如报文头部的压缩和复用。即使只有原始HTTP报文的一部分以HTTP/2发送出来，每条报文的语义依旧不变，客户端会重组原始HTTP/1.1请求。因此用HTTP/1.1格式来理解HTTP/2报文仍旧有效。

有两种HTTP报文的类型，请求与响应，每种都有其特定的格式。

### [请求](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Overview#请求)

HTTP请求的一个例子：

![A basic HTTP request](https://mdn.mozillademos.org/files/13687/HTTP_Request.png)

请求由以下元素组成：

- 一个HTTP的[method](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)，经常是由一个动词像[`GET`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/GET), [`POST`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/POST) 或者一个名词像[`OPTIONS`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/OPTIONS)，[`HEAD`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/HEAD)来定义客户端的动作行为。通常客户端的操作都是获取资源（GET方法）或者发送[HTML form](https://developer.mozilla.org/zh-CN/docs/Learn/Forms)表单（POST方法），虽然在一些情况下也会有其他操作。
- 要获取的资源的路径，通常是上下文中就很明显的元素资源的URL，它没有[protocol](https://developer.mozilla.org/zh-CN/docs/Glossary/Protocol) （`http://`），[domain](https://developer.mozilla.org/zh-CN/docs/Glossary/Domain)（`developer.mozilla.org`），或是TCP的[port (en-US)](https://developer.mozilla.org/en-US/docs/Glossary/Port)（HTTP一般在80端口）。
- HTTP协议版本号。
- 为服务端表达其他信息的可选头部[headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)。
- 对于一些像POST这样的方法，报文的body就包含了发送的资源，这与响应报文的body类似。

### [响应](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Overview#响应)

HTTP响应的一个例子：

![img](https://mdn.mozillademos.org/files/13691/HTTP_Response.png)

响应报文包含了下面的元素：

- HTTP协议版本号。
- 一个状态码（[status code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)），来告知对应请求执行成功或失败，以及失败的原因。
- 一个状态信息，这个信息是非权威的状态码描述信息，可以由服务端自行设定。
- HTTP [headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)，与请求头部类似。
- 可选项，比起请求报文，响应报文中更常见地包含获取的资源body。

---

## [基于HTTP的APIs](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Overview#基于http的apis)


基于HTTP的最常用API是[`XMLHttpRequest`](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest) API，可用于在[user agent](https://developer.mozilla.org/zh-CN/docs/Glossary/User_agent)和服务器之间交换数据。 现代[`Fetch API`](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API)提供相同的功能，具有更强大和灵活的功能集。

另一种API，即服务器发送的事件，是一种单向服务，允许服务器使用HTTP作为传输机制向客户端发送事件。 使用[`EventSource`](https://developer.mozilla.org/zh-CN/docs/Web/API/EventSource)接口，客户端打开连接并建立事件句柄。 客户端浏览器自动将到达HTTP流的消息转换为适当的[`Event`](https://developer.mozilla.org/zh-CN/docs/Web/API/Event)对象，并将它们传递给专门处理这类[`type`](https://developer.mozilla.org/zh-CN/docs/Web/API/Event/type)事件的句柄，如果有这么个句柄的话。但如果相应的事件处理句柄根本没有建立，那就交给[`onmessage` (en-US)](https://developer.mozilla.org/en-US/docs/Web/API/EventSource/message_event)事件处理程序处理。

---

# HTTP消息

HTTP消息是服务器和客户端之间交换数据的方式。有两种类型的消息︰ 请求（requests）--由客户端发送用来触发一个服务器上的动作；响应（responses）--来自服务器的应答。

HTTP消息由采用ASCII编码的多行文本构成。在HTTP/1.1及早期版本中，这些消息通过连接公开地发送。在HTTP/2中，为了优化和性能方面的改进，曾经可人工阅读的消息被分到多个HTTP帧中。

Web 开发人员或网站管理员，很少自己手工创建这些原始的HTTP消息︰ 由软件、浏览器、 代理或服务器完成。他们通过配置文件（用于代理服务器或服务器），API （用于浏览器）或其他接口提供HTTP消息。

![From a user-, script-, or server- generated event, an HTTP/1.x msg is generated, and if HTTP/2 is in use, it is binary framed into an HTTP/2 stream, then sent.](https://mdn.mozillademos.org/files/13825/HTTPMsg2.png)

HTTP/2二进制框架机制被设计为不需要改动任何API或配置文件即可应用︰ 它大体上对用户是透明的。

HTTP 请求和响应具有相似的结构，由以下部分组成︰

1. 一行起始行用于描述要执行的请求，或者是对应的状态，成功或失败。这个起始行总是单行的。
2. 一个可选的HTTP头集合指明请求或描述消息正文。
3. 一个空行指示所有关于请求的元数据已经发送完毕。
4. 一个可选的包含请求相关数据的正文 (比如HTML表单内容), 或者响应相关的文档。 正文的大小有起始行的HTTP头来指定。

起始行和 HTTP 消息中的HTTP 头统称为**请求头**，而其有效负载被称为**消息正文**。

![Requests and responses share a common structure in HTTP](https://mdn.mozillademos.org/files/13827/HTTPMsgStructure2.png)

---

## [HTTP 请求](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Messages#http_请求)

### [起始行](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Messages#起始行)

HTTP请求是由客户端发出的消息，用来使服务器执行动作。*起始行 (start-line)* 包含三个元素：

1. 一个 *[HTTP 方法](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)*，一个动词 (像 [`GET`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/GET), [`PUT`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/PUT) 或者 [`POST`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/POST)) 或者一个名词 (像 [`HEAD`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/HEAD) 或者 [`OPTIONS`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/OPTIONS)), 描述要执行的动作. 例如, `GET` 表示要获取资源，`POST` 表示向服务器推送数据 (创建或修改资源, 或者产生要返回的临时文件)。

2. 请求目标 (request target)，

   通常是一个

    

   URL

   ，或者是协议、端口和域名的绝对路径，通常以请求的环境为特征。请求的格式因不同的 HTTP 方法而异。它可以是：

   - 一个绝对路径，末尾跟上一个 ' ? ' 和查询字符串。这是最常见的形式，称为 *原始形式 (origin form)*，被 GET，POST，HEAD 和 OPTIONS 方法所使用。
     `POST / HTTP/1.1GET /background.png HTTP/1.0HEAD /test.html?query=alibaba HTTP/1.1OPTIONS /anypage.html HTTP/1.0`
   - 一个完整的URL，被称为 *绝对形式 (absolute form)*，主要在使用 `GET` 方法连接到代理时使用。
     `GET http://developer.mozilla.org/en-US/docs/Web/HTTP/Messages HTTP/1.1`
   - 由域名和可选端口（以`':'`为前缀）组成的 URL 的 authority component，称为 *authority form*。 仅在使用 `CONNECT` 建立 HTTP 隧道时才使用。
     `CONNECT developer.mozilla.org:80 HTTP/1.1`
   - *星号形式 (asterisk form)*，一个简单的星号(`'*'`)，配合 `OPTIONS` 方法使用，代表整个服务器。
     `OPTIONS * HTTP/1.1`

3. *HTTP 版本 (HTTP version*)*，*定义了剩余报文的结构，作为对期望的响应版本的指示符。

### [Headers](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Messages#headers)

来自请求的 [HTTP headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers) 遵循和 HTTP header 相同的基本结构：不区分大小写的字符串，紧跟着的冒号 `(':')` 和一个结构取决于 header 的值。 整个 header（包括值）由一行组成，这一行可以相当长。

有许多请求头可用，它们可以分为几组：

- *General headers，*例如 [`Via`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Via)，适用于整个报文。
- *Request headers，*例如 [`User-Agent`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/User-Agent)，[`Accept-Type`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Accept-Type)，通过进一步的定义(例如 [`Accept-Language`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Accept-Language))，或者给定上下文(例如 [`Referer`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Referer))，或者进行有条件的限制 (例如 [`If-None`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/If-None)) 来修改请求。
- *Entity headers，*例如 [`Content-Length`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Length)，适用于请求的 body。显然，如果请求中没有任何 body，则不会发送这样的头文件。

![Example of headers in an HTTP request](https://mdn.mozillademos.org/files/13821/HTTP_Request_Headers2.png)

### [Body](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Messages#body)

请求的最后一部分是它的 body。不是所有的请求都有一个 body：例如获取资源的请求，GET，HEAD，DELETE 和 OPTIONS，通常它们不需要 body。 有些请求将数据发送到服务器以便更新数据：常见的的情况是 POST 请求（包含 HTML 表单数据）。

Body 大致可分为两类：

- Single-resource bodies，由一个单文件组成。该类型 body 由两个 header 定义： [`Content-Type`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Type) 和 [`Content-Length`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Length).
- [Multiple-resource bodies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types#multipartform-data)，由多部分 body 组成，每一部分包含不同的信息位。通常是和  [HTML Forms](https://developer.mozilla.org/en-US/docs/Learn/Forms) 连系在一起。

---

## [HTTP 响应](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Messages#http_响应)

### [状态行](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Messages#状态行)

HTTP 响应的起始行被称作 *状态行* *(status line)*，包含以下信息：

1. *协议版本*，通常为 `HTTP/1.1。`
2. *状态码 (**status code)*，表明请求是成功或失败。常见的状态码是 [`200`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/200)，[`404`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/404)，或 [`302`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/302)。
3. *状态文本 (status text)*。一个简短的，纯粹的信息，通过状态码的文本描述，帮助人们理解该 HTTP 消息。

一个典型的状态行看起来像这样：`HTTP/1.1 404 Not Found`。

### [Headers](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Messages#headers_2)

响应的  [HTTP headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers) 遵循和任何其它 header 相同的结构：不区分大小写的字符串，紧跟着的冒号 (`':'`) 和一个结构取决于 header 类型的值。 整个 header（包括其值）表现为单行形式。

有许多响应头可用，这些响应头可以分为几组：

- *General headers，*例如 [`Via`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Via)，适用于整个报文。
- *Response headers，*例如 [`Vary`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Vary) 和 [`Accept-Ranges`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Accept-Ranges)，提供其它不符合状态行的关于服务器的信息。
- *Entity headers*，例如 [`Content-Length`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Length)，适用于请求的 body。显然，如果请求中没有任何 body，则不会发送这样的头文件。

![Example of headers in an HTTP response](https://mdn.mozillademos.org/files/13823/HTTP_Response_Headers2.png)

### [Body](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Messages#body_2)

响应的最后一部分是 body。不是所有的响应都有 body：具有状态码 (如 [`201`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/201) 或 [`204`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/204)) 的响应，通常不会有 body。

Body 大致可分为三类：

- Single-resource bodies，由**已知**长度的单个文件组成。该类型 body 由两个 header 定义：[`Content-Type`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Type) 和 [`Content-Length`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Length)。
- Single-resource bodies，由**未知**长度的单个文件组成，通过将 [`Transfer-Encoding`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Transfer-Encoding) 设置为 `chunked `来使用 chunks 编码。
- [Multiple-resource bodies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types#multipartform-data)，由多部分 body 组成，每部分包含不同的信息段。但这是比较少见的。

---

## [HTTP/2 帧](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Messages#http2_帧)

HTTP/1.x 报文有一些性能上的缺点：

- Header 不像 body，它不会被压缩。
- 两个报文之间的 header 通常非常相似，但它们仍然在连接中重复传输。
- 无法复用。当在同一个服务器打开几个连接时：TCP 热连接比冷连接更加有效。

HTTP/2 引入了一个额外的步骤：它将 HTTP/1.x 消息分成帧并嵌入到流 (stream) 中。数据帧和报头帧分离，这将允许报头压缩。将多个流组合，这是一个被称为 *多路复用 (multiplexing)* 的过程，它允许更有效的底层 TCP 连接。

![HTTP/2 modify the HTTP message to divide them in frames (part of a single stream), allowing for more optimization.](https://mdn.mozillademos.org/files/13819/Binary_framing2.png)

HTTP 帧现在对 Web 开发人员是透明的。在 HTTP/2 中，这是一个在  HTTP/1.1 和底层传输协议之间附加的步骤。Web 开发人员不需要在其使用的 API 中做任何更改来利用 HTTP 帧；当浏览器和服务器都可用时，HTTP/2 将被打开并使用。

---

# 典型的 HTTP 会话

在像 HTTP 这样的Client-Server（客户端-服务器）协议中，会话分为三个阶段：

1. 客户端建立一条 TCP 连接（如果传输层不是 TCP，也可以是其他适合的连接）。
2. 客户端发送请求并等待应答。
3. 服务器处理请求并送回应答，回应包括一个状态码和对应的数据。

从 HTTP/1.1 开始，连接在完成第三阶段后不再关闭，客户端可以再次发起新的请求。这意味着第二步和第三步可以连续进行数次。

---

## [建立连接](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Session#建立连接)

在客户端-服务器协议中，连接是由客户端发起建立的。在HTTP中打开连接意味着在底层传输层启动连接，通常是 TCP。

使用 TCP 时，HTTP 服务器的默认端口号是 80，另外还有 8000 和 8080 也很常用。页面的 URL 会包含域名和端口号，但当端口号为 80 时可以省略。前往 [标识互联网上的内容](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web) 获取更多内容。

> **注意:** 客户端-服务器模型不允许服务器在没有显式请求时发送数据给客户端。为了解决这个问题，Web 开发者们使用了许多技术：例如，使用 [`XMLHTTPRequest`](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest) 或 [`Fetch`](https://developer.mozilla.org/zh-CN/docs/Web/API/fetch) API 周期性地请求服务器，使用 HTML [WebSockets API](https://developer.mozilla.org/en-US/WebSockets)，或其他类似协议。

---

## [发送客户端请求](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Session#发送客户端请求)

一旦连接建立，用户代理就可以发送请求 (用户代理通常是 Web 浏览器，但也可以是其他的（例如爬虫）。客户端请求由一系列文本指令组成，并使用 CRLF 分隔，它们被划分为三个块：

1. 第一行包括请求方法及请求参数：
   - 文档路径，不包括协议和域名的绝对路径 URL
   - 使用的 HTTP 协议版本
2. 接下来的行每一行都表示一个 HTTP 首部，为服务器提供关于所需数据的信息（例如语言，或 MIME 类型），或是一些改变请求行为的数据（例如当数据已经被缓存，就不再应答）。这些 HTTP 首部组成以一个空行结束的一个块。
3. 最后一块是可选数据块，包含更多数据，主要被 POST 方法所使用。

---

### [请求示例](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Session#请求示例)

访问 developer.mozilla.org 的根页面，即 [http://developer.mozilla.org/](https://developer.mozilla.org/)，并告诉服务器用户代理倾向于该页面使用法语展示：

```http
GET / HTTP/1.1
Host: developer.mozilla.org
Accept-Language: fr
```

注意最后的空行，它把首部与数据块分隔开。由于在 HTTP 首部中没有 `Content-Length`，数据块是空的，所以服务器可以在收到代表首部结束的空行后就开始处理请求。

例如，发送表单的结果：

```http
POST /contact_form.php HTTP/1.1
Host: developer.mozilla.org
Content-Length: 64
Content-Type: application/x-www-form-urlencoded

name=Joe%20User&request=Send%20me%20one%20of%20your%20catalogue
```

### [请求方法](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Session#请求方法)

HTTP 定义了一组 [请求方法](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods) 用来指定对目标资源的行为。它们一般是名词，但这些请求方法有时会被叫做 HTTP 动词。最常用的请求方法是 `GET` 和 `POST`：

- [`GET`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/GET) 方法请求指定的资源。`GET` 请求应该只被用于获取数据。
- [`POST`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/POST) 方法向服务器发送数据，因此会改变服务器状态。这个方法常在 [HTML 表单](https://developer.mozilla.org/en-US/docs/Learn/Forms) 中使用。

---

## [服务器响应结构](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Session#服务器响应结构)

当收到用户代理发送的请求后，Web 服务器就会处理它，并最终送回一个响应。与客户端请求很类似，服务器响应由一系列文本指令组成, 并使用 CRLF 分隔，它们被划分为三个不同的块：

1. 第一行是 *`状态行`，*包括使用的 HTTP 协议版本，状态码和一个状态描述（可读描述文本）。
2. 接下来每一行都表示一个 HTTP 首部，为客户端提供关于所发送数据的一些信息（如类型，数据大小，使用的压缩算法，缓存指示）。与客户端请求的头部块类似，这些 HTTP 首部组成一个块，并以一个空行结束。
3. 最后一块是数据块，包含了响应的数据 （如果有的话）。

### [响应示例](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Session#响应示例)

成功的网页响应：

```http
HTTP/1.1 200 OK
Date: Sat, 09 Oct 2010 14:28:02 GMT
Server: Apache
Last-Modified: Tue, 01 Dec 2009 20:18:22 GMT
ETag: "51142bc1-7449-479b075b2891b"
Accept-Ranges: bytes
Content-Length: 29769
Content-Type: text/html

<!DOCTYPE html... (这里是 29769 字节的网页HTML源代码)
```

请求资源已被永久移动的网页响应：

```http
HTTP/1.1 301 Moved Permanently
Server: Apache/2.2.3 (Red Hat)
Content-Type: text/html; charset=iso-8859-1
Date: Sat, 09 Oct 2010 14:30:24 GMT
Location: https://developer.mozilla.org/ (目标资源的新地址, 服务器期望用户代理去访问它)
Keep-Alive: timeout=15, max=98
Accept-Ranges: bytes
Via: Moz-Cache-zlb05
Connection: Keep-Alive
X-Cache-Info: caching
X-Cache-Info: caching
Content-Length: 325 (如果用户代理无法转到新地址，就显示一个默认页面)

<!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML 2.0//EN">
<html><head>
<title>301 Moved Permanently</title>
</head><body>
<h1>Moved Permanently</h1>
<p>The document has moved <a href="https://developer.mozilla.org/">here</a>.</p>
<hr>
<address>Apache/2.2.3 (Red Hat) Server at developer.mozilla.org Port 80</address>
</body></html>
```

请求资源不存在的网页响应：

```http
HTTP/1.1 404 Not Found
Date: Sat, 09 Oct 2010 14:33:02 GMT
Server: Apache
Last-Modified: Tue, 01 May 2007 14:24:39 GMT
ETag: "499fd34e-29ec-42f695ca96761;48fe7523cfcc1"
Accept-Ranges: bytes
Content-Length: 10732
Content-Type: text/html

<!DOCTYPE html... (包含一个站点自定义404页面, 帮助用户找到丢失的资源)
```

### [响应状态码](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Session#响应状态码)

[HTTP 响应状态码](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) 用来表示一个 HTTP 请求是否成功完成。响应被分为 5 种类型：信息型响应，成功响应，重定向，客户端错误和服务端错误。

- [`200`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/200): OK. 请求成功。
- [`301`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/301): Moved Permanently. 请求资源的 URI 已被改变。
- [`404`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/404): Not Found. 服务器无法找到请求的资源。

---

# HTTP/1.x 的连接管理

连接管理是一个 HTTP 的关键话题：打开和保持连接在很大程度上影响着网站和 Web 应用程序的性能。在 HTTP/1.x 里有多种模型：*短连接*, *长连接*, 和 *HTTP 流水线。*

HTTP 的传输协议主要依赖于 TCP 来提供从客户端到服务器端之间的连接。在早期，HTTP 使用一个简单的模型来处理这样的连接。这些连接的生命周期是短暂的：每发起一个请求时都会创建一个新的连接，并在收到应答时立即关闭。

这个简单的模型对性能有先天的限制：打开每一个 TCP 连接都是相当耗费资源的操作。客户端和服务器端之间需要交换好些个消息。当请求发起时，网络延迟和带宽都会对性能造成影响。现代浏览器往往要发起很多次请求(十几个或者更多)才能拿到所需的完整信息，证明了这个早期模型的效率低下。

有两个新的模型在 HTTP/1.1 诞生了。首先是长连接模型，它会保持连接去完成多次连续的请求，减少了不断重新打开连接的时间。然后是 HTTP 流水线模型，它还要更先进一些，多个连续的请求甚至都不用等待立即返回就可以被发送，这样就减少了耗费在网络延迟上的时间。

![Compares the performance of the three HTTP/1.x connection models: short-lived connections, persistent connections, and HTTP pipelining.](https://mdn.mozillademos.org/files/13727/HTTP1_x_Connections.png)

HTTP/2 新增了其它连接管理模型。

要注意的一个重点是 HTTP 的连接管理适用于两个连续节点之间的连接，如 [hop-by-hop](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers#hbh)，而不是 [end-to-end](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers#e2e)。当模型用于从客户端到第一个代理服务器的连接和从代理服务器到目标服务器之间的连接时(或者任意中间代理)效果可能是不一样的。HTTP 协议头受不同连接模型的影响，比如 [`Connection`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Connection) 和 [`Keep-Alive`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Keep-Alive)，就是 [hop-by-hop](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers#hbh) 协议头，它们的值是可以被中间节点修改的。

一个相关的话题是HTTP连接升级，在这里，一个HTTP/1.1 连接升级为一个不同的协议，比如TLS/1.0，Websocket，甚至明文形式的HTTP/2。更多细节参阅[协议升级机制](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Protocol_upgrade_mechanism)。
