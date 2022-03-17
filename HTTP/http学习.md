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

