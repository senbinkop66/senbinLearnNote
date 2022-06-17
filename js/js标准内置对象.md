# escape()

> **已废弃:** 该特性已经从 Web 标准中删除，虽然一些浏览器目前仍然支持它，但也许会在未来的某个时间停止支持，请尽量不要使用该特性。

废弃的 `**escape()**` 方法生成新的由十六进制转义序列替换的字符串。使用 [`encodeURI`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/encodeURI) 或 [`encodeURIComponent`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent) 代替。

## [语法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/escape#syntax)

```
escape(str)
```

### [参数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/escape#parameters)

- `str`

  待编码的字符串。

## [描述](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/escape#description)

`escape` 函数是全局对象的属性。特色字符如：`@*_+-./` 被排除在外。

字符的 16 进制格式值，当该值小于等于 0xFF 时，用一个 2 位转义序列: `%xx` 表示。大于的话则使用 4 位序列：%**u**xxxx 表示。

## [示例](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/escape#示例)

```js
escape("abc123");     // "abc123"
escape("äöü");        // "%E4%F6%FC"
escape("ć");          // "%u0107"

// special characters
escape("@*_+-./");    // "@*_+-./"
```

---

# unescape()

已废弃的`**unescape()**` 方法计算生成一个新的字符串，其中的十六进制转义序列将被其表示的字符替换。上述的转义序列就像[`escape`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/escape)里介绍的一样。**因为 `unescape` 已经废弃**，建议使用 [`decodeURI`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/decodeURI)或者[`decodeURIComponent`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent) 替代本方法。

> **备注：**不要使用`unescape`去解码 URLS，使用`decodeURI`或`decodeURIComponent`替代。

## [语法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/unescape#语法)

```
unescape(str)
```

### [参数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/unescape#参数)

- `str`

  被编码过的字符串。

### [返回值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/unescape#返回值)

一个未被转义的新字符串。

## [描述](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/unescape#描述)

`unescape`函数是*全局对象*的一个属性。

## [示例](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/unescape#示例)

```js
unescape('abc123');     // "abc123"
unescape('%E4%F6%FC');  // "äöü"
unescape('%u0107');     // "ć"
```

----

# encodeURI()

`encodeURI()` 函数通过将特定字符的每个实例替换为一个、两个、三或四转义序列来对统一资源标识符 (URI) 进行编码 (该字符的 UTF-8 编码仅为四转义序列) 由两个 "代理" 字符组成)。

## [语法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/encodeURI#语法)

```
encodeURI(URI)
```

### [参数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/encodeURI#参数)

- `URI`

  一个完整的 URI。

### [返回值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/encodeURI#返回值)

一个新字符串，表示提供的字符串编码为统一资源标识符 (URI)。

## [描述](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/encodeURI#描述)

假定一个 URI 是完整的 URI，那么无需对那些保留的并且在 URI 中有特殊意思的字符进行编码。

```js
`http://username:password@www.example.com:80/path/to/file.php?foo=316&bar=this+has+spaces#anchor`
```

`encodeURI` 会替换所有的字符，但不包括以下字符，即使它们具有适当的 UTF-8 转义序列：

| 类型         | 包含                                          |
| :----------- | :-------------------------------------------- |
| 保留字符     | `;` `,` `/` `?` `:` `@` `&` `=` `+` `$`       |
| 非转义的字符 | 字母 数字 `-` `_` `.` `!` `~` `*` `'` `(` `)` |
| 数字符号     | `#`                                           |

请注意，`encodeURI` 自身*无法*产生能适用于 HTTP GET 或 POST 请求的 URI，例如对于 XMLHTTPRequests，因为 "&", "+", 和 "=" 不会被编码，然而在 GET 和 POST 请求中它们是特殊字符。然而[`encodeURIComponent`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent)这个方法会对这些字符编码。

另外，如果试图编码一个非高 - 低位完整的代理字符，将会抛出一个 [`URIError`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/URIError) 错误，例如：

```js
// 编码高 - 低位完整字符 ok
console.log(encodeURI('\uD800\uDFFF'));

// 编码单独的高位字符抛出 "Uncaught URIError: URI malformed"
console.log(encodeURI('\uD800'));

// 编码单独的低位字符抛出 "Uncaught URIError: URI malformed"
console.log(encodeURI('\uDFFF'));
```

并且需要注意，如果 URL 需要遵循较新的[RFC3986](https://tools.ietf.org/html/rfc3986)标准，那么方括号是被保留的 (给 IPv6)，因此对于那些没有被编码的 URL 部分 (例如主机)，可以使用下面的代码：

```js
function fixedEncodeURI (str) {
    return encodeURI(str).replace(/%5B/g, '[').replace(/%5D/g, ']');
}
```

----

# decodeURI()

`decodeURI()` 函数能解码由[`encodeURI`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/encodeURI) 创建或其它流程得到的统一资源标识符（URI）。

```js
const uri = 'https://mozilla.org/?x=шеллы';
const encoded = encodeURI(uri);
console.log(encoded);
// expected output: "https://mozilla.org/?x=%D1%88%D0%B5%D0%BB%D0%BB%D1%8B"

try {
  console.log(decodeURI(encoded));
  // expected output: "https://mozilla.org/?x=шеллы"
} catch (e) { // catches a malformed URI
  console.error(e);
}

```

## [语法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/decodeURI#语法)

```
decodeURI(encodedURI)
```

### [参数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/decodeURI#参数)

- `encodedURI`

  一个完整的编码过的 URI

### [返回值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/decodeURI#返回值)

返回一个给定编码统一资源标识符 (URI) 的未编码版本的新字符串。

### [异常](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/decodeURI#异常)

当`*encodedURI*` 包含无效字符序列时，引发[`URIError`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/URIError)（“格式错误的 URI 序列”）异常。

## [描述](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/decodeURI#描述)

将已编码 URI 中所有能识别的转义序列转换成原字符，但不能解码那些不会被 [`encodeURI`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/encodeURI) 编码的内容（例如 "`#`"）。

## [示例](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/decodeURI#示例)

### [解码一个西里尔字母（Cyrillic）URL](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/decodeURI#解码一个西里尔字母（cyrillic）url)

```js
decodeURI("https://developer.mozilla.org/ru/docs/JavaScript_%D1%88%D0%B5%D0%BB%D0%BB%D1%8B");
// "https://developer.mozilla.org/ru/docs/JavaScript_шеллы"
```

### [捕捉异常](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/decodeURI#捕捉异常)

```js
try {
  var a = decodeURI('%E0%A4%A');
} catch(e) {
  console.error(e);
}

// URIError: malformed URI sequence
```

----

# encodeURIComponent()

`encodeURIComponent()` 函数通过将一个，两个，三个或四个表示字符的 UTF-8 编码的转义序列替换某些字符的每个实例来编码 [URI](https://developer.mozilla.org/zh-CN/docs/Glossary/URI)（对于由两个“代理”字符组成的字符而言，将仅是四个转义序列）。

```js
// encodes characters such as ?,=,/,&,:
console.log(`?x=${encodeURIComponent('test?')}`);
// expected output: "?x=test%3F"

console.log(`?x=${encodeURIComponent('шеллы')}`);
// expected output: "?x=%D1%88%D0%B5%D0%BB%D0%BB%D1%8B"
```

## [语法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent#语法)

```
encodeURIComponent(str);
```

### [参数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent#参数)

- `uriComponent`

  一个 string、number、boolean、null，undefined 或者任何 object。**在编码之前，uriComponent 参数会被转化为字符串。**

### 返回值

原字串作为 URI 组成部分被被编码后的新字符串。

## [描述](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent#描述)

`encodeURIComponent` 转义除了如下所示外的所有字符：

```js
不转义的字符：
    A-Z a-z 0-9 - _ . ! ~ * ' ( )
```

`encodeURIComponent()` 和 **`encodeURI`** 有以下几个不同点：

```js
var set1 = ";,/?:@&=+$";  // 保留字符
var set2 = "-_.!~*'()";   // 不转义字符
var set3 = "#";           // 数字标志
var set4 = "ABC abc 123"; // 字母数字字符和空格

console.log(encodeURI(set1)); // ;,/?:@&=+$
console.log(encodeURI(set2)); // -_.!~*'()
console.log(encodeURI(set3)); // #
console.log(encodeURI(set4)); // ABC%20abc%20123 (空格被编码为 %20)

console.log(encodeURIComponent(set1)); // %3B%2C%2F%3F%3A%40%26%3D%2B%24
console.log(encodeURIComponent(set2)); // -_.!~*'()
console.log(encodeURIComponent(set3)); // %23
console.log(encodeURIComponent(set4)); // ABC%20abc%20123 (the space gets encoded as %20)
```

注意，如果试图编码一个非高 - 低位完整的代理字符，将会抛出一个 [`URIError`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/URIError) 错误，例如：

```js
// 高低位完整
alert(encodeURIComponent('\uD800\uDFFF'));

// 只有高位，将抛出"URIError: malformed URI sequence"
alert(encodeURIComponent('\uD800'));

// 只有低位，将抛出"URIError: malformed URI sequence"
alert(encodeURIComponent('\uDFFF')); 
```

**为了避免服务器收到不可预知的请求，对任何用户输入的作为 URI 部分的内容你都需要用 encodeURIComponent 进行转义**。比如，一个用户可能会输入"`Thyme &time=again`"作为`comment`变量的一部分。如果不使用 encodeURIComponent 对此内容进行转义，服务器得到的将是`comment=Thyme%20&time=again`。请注意，"&"符号和"="符号产生了一个新的键值对，所以服务器得到两个键值对（一个键值对是`comment=Thyme`，另一个则是`time=again`），而不是一个键值对。

对于 [`application/x-www-form-urlencoded`](https://www.whatwg.org/specs/web-apps/current-work/multipage/association-of-controls-and-forms.html#application/x-www-form-urlencoded-encoding-algorithm) (POST) **这种数据方式，空格需要被替换成 '+'**，所以通常使用 `encodeURIComponent` 的时候还会把 "%20" 替换为 "+"。

为了更严格的遵循 [RFC 3986](https://datatracker.ietf.org/doc/html/rfc3986)（它保留 !, ', (, ), 和 *），即使这些字符并没有正式划定 URI 的用途，下面这种方式是比较安全的：

```js
function fixedEncodeURIComponent (str) {
  return encodeURIComponent(str).replace(/[!'()*]/g, function(c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}
```



## [示例](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent#示例)

下面这个例子提供了 UTF-8 下 [`Content-Disposition`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Disposition) 和 [`Link`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Link) 的服务器响应头信息的参数（例如 UTF-8 文件名)：

```js
var fileName = 'my file(2).txt';
var header = "Content-Disposition: attachment; filename*=UTF-8''"
             + encodeRFC5987ValueChars(fileName);

console.log(header);
// 输出 "Content-Disposition: attachment; filename*=UTF-8''my%20file%282%29.txt"


function encodeRFC5987ValueChars (str) {
    return encodeURIComponent(str).
        // 注意，尽管 RFC3986 保留 "!"，但 RFC5987 并没有
        // 所以我们并不需要过滤它。
        replace(/['()]/g, escape). // i.e., %27 %28 %29
        replace(/\*/g, '%2A').
            // 下面的并不是 RFC5987 中 URI 编码必须的
            // 所以对于 |`^ 这 3 个字符我们可以稍稍提高一点可读性
        replace(/%(?:7C|60|5E)/g, unescape);
}

// 以下是上述功能的替换方案
function encodeRFC5987ValueChars2(str) {
  return encodeURIComponent(str).
    // 注意，尽管 RFC3986 保留 "!"，但 RFC5987 并没有，
    // 所以我们并不需要过滤它。
    replace(/['()*]/g, c => "%" + c.charCodeAt(0).toString(16)). // i.e., %27 %28 %29 %2a (请注意，"*" 的有效编码是 %2A
                                                                 // 这需要调用 toUpperCase() 方法来正确编码)
    // 以下并不是 RFC5987 编码所必须的，
    // 这样我们可以让 |`^ 在网络上获取更好的可读性
    replace(/%(7C|60|5E)/g, (str, hex) => String.fromCharCode(parseInt(hex, 16)));
}
```

---

# decodeURIComponent()

`decodeURIComponent()` 方法用于解码由 [`encodeURIComponent`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent) 方法或者其它类似方法编码的部分统一资源标识符（URI）。

## [语法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent#语法)

```
decodeURIComponent(encodedURI)
```

### [参数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent#参数)

- `encodedURI`

  编码后的部分 URI

### [返回值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent#返回值)

一个解码后的统一资源标识符（URI）字符串，处理前的 URI 经过了给定格式的编码。

### [异常](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent#异常)

当该方法使用不当时，将会抛出一个[`URIError`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/URIError)（“格式错误的 URI 序列”）异常。

## [描述](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent#描述)

将已编码 URI 中所有能识别的转义序列转换成原字符。

## [示例](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent#示例)

### [解码一个西里尔字母的 URL](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent#解码一个西里尔字母的_url)

```js
decodeURIComponent("JavaScript_%D1%88%D0%B5%D0%BB%D0%BB%D1%8B");
// "JavaScript_шеллы"
```

### [捕捉异常](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent#捕捉异常)

```js
try {
  var a = decodeURIComponent('%E0%A4%A');
} catch(e) {
  console.error(e);
}

// URIError: malformed URI sequence
```