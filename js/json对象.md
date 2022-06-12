# JSON

**`JSON`**对象包含两个方法：用于解析 [JavaScript Object Notation](http://json.org/) ([JSON](https://developer.mozilla.org/zh-CN/docs/Glossary/JSON)) 的 `parse()` 方法，以及将对象/值转换为 JSON 字符串的 `stringify()` 方法。除了这两个方法，JSON 这个对象本身并没有其他作用，也不能被调用或者作为构造函数调用。

## [描述](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON#description)

### [JavaScript Object Notation](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON#javascript_object_notation)

**JSON** 是一种语法，用来序列化对象、数组、数值、字符串、布尔值和 [`null`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/null) 。它基于 JavaScript 语法，但与之不同：**JavaScript 不是 JSON，JSON 也不是 JavaScript**。

JavaScript 与 JSON 的区别

| JavaScript 类型 | JSON 的不同点                                                |
| :-------------- | :----------------------------------------------------------- |
| 对象和数组      | 属性名称必须是双引号括起来的字符串；**最后一个属性后不能有逗号。** |
| 数值            | 禁止出现前导零（ JSON.stringify 方法自动忽略前导零，而在 JSON.parse 方法中将会抛出 SyntaxError）；**如果有小数点，则后面至少跟着一位数字。** |
| 字符串          | 只有有限的一些字符可能会被转义；禁止某些控制字符； Unicode 行分隔符（[U+2028](https://unicode-table.com/cn/2028/)）和段分隔符（[U+2029](https://unicode-table.com/cn/2029/)）被允许 ; **字符串必须用双引号括起来**。请参考下面的示例，可以看到 [`JSON.parse()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) 能够正常解析，但将其当作 JavaScript 解析时会抛出 [`SyntaxError`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError) 错误 |

```js
let code = '"\u2028\u2029"';
JSON.parse(code);  // 正常

eval(code);  // 错误
```

完整的 JSON 语法定义如下：

```js
JSON = null
    or true or false
    or JSONNumber
    or JSONString
    or JSONObject
    or JSONArray

JSONNumber = - PositiveNumber
          or PositiveNumber
PositiveNumber = DecimalNumber
              or DecimalNumber . Digits
              or DecimalNumber . Digits ExponentPart
              or DecimalNumber ExponentPart
DecimalNumber = 0
             or OneToNine Digits
ExponentPart = e Exponent
            or E Exponent
Exponent = Digits
        or + Digits
        or - Digits
Digits = Digit
      or Digits Digit
Digit = 0 through 9
OneToNine = 1 through 9

JSONString = ""
          or " StringCharacters "
StringCharacters = StringCharacter
                or StringCharacters StringCharacter
StringCharacter = any character
                  except " or \ or U+0000 through U+001F
               or EscapeSequence
EscapeSequence = \" or \/ or \\ or \b or \f or \n or \r or \t
              or \u HexDigit HexDigit HexDigit HexDigit
HexDigit = 0 through 9
        or A through F
        or a through f

JSONObject = { }
          or { Members }
Members = JSONString : JSON
       or Members , JSONString : JSON

JSONArray = [ ]
         or [ ArrayElements ]
ArrayElements = JSON
             or ArrayElements , JSON
```

在`JSONNumber`（数字内部不允许包含空格）或`JSONString`（字符串内部的空格被解释为相应的字符，否则就有问题了）之外的任何位置可以有多余的空白字符。JSON 只支持这些空白字符： 制表符（[U+0009](https://unicode-table.com/en/0009/)），回车（[U+000D](https://unicode-table.com/en/000D/)），换行（[U+00](https://unicode-table.com/en/0020/)0A）以及空格（[U+0020](https://unicode-table.com/en/0020/)）。

## [方法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON#methods)

- [`JSON.parse()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)

  解析 JSON 字符串并返回对应的值，可以额外传入一个转换函数，用来将生成的值和其属性，在返回之前进行某些修改。

- [`JSON.stringify()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)

  返回与指定值对应的 JSON 字符串，可以通过额外的参数，控制仅包含某些属性，或者以自定义方法来替换某些 key 对应的属性值。

## [Polyfill](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON#polyfill)

`JSON`对象可能不被老版本的浏览器支持。可以将下面的代码放到 JS 脚本最开始的位置，这样就可以在没有原生支持 JSON 对象的浏览器（如 IE6）中使用 `JSON`对象。

以下算法是对原生`JSON`对象的模仿：

```js
if (!window.JSON) {
  window.JSON = {
    parse: function(sJSON) { return eval('(' + sJSON + ')'); },
    stringify: (function () {
      var toString = Object.prototype.toString;
      var isArray = Array.isArray || function (a) { return toString.call(a) === '[object Array]'; };
      var escMap = {'"': '\\"', '\\': '\\\\', '\b': '\\b', '\f': '\\f', '\n': '\\n', '\r': '\\r', '\t': '\\t'};
      var escFunc = function (m) { return escMap[m] || '\\u' + (m.charCodeAt(0) + 0x10000).toString(16).substr(1); };
      var escRE = /[\\"\u0000-\u001F\u2028\u2029]/g;
      return function stringify(value) {
        if (value == null) {
          return 'null';
        } else if (typeof value === 'number') {
          return isFinite(value) ? value.toString() : 'null';
        } else if (typeof value === 'boolean') {
          return value.toString();
        } else if (typeof value === 'object') {
          if (typeof value.toJSON === 'function') {
            return stringify(value.toJSON());
          } else if (isArray(value)) {
            var res = '[';
            for (var i = 0; i < value.length; i++)
              res += (i ? ', ' : '') + stringify(value[i]);
            return res + ']';
          } else if (toString.call(value) === '[object Object]') {
            var tmp = [];
            for (var k in value) {
              if (value.hasOwnProperty(k))
                tmp.push(stringify(k) + ': ' + stringify(value[k]));
            }
            return '{' + tmp.join(', ') + '}';
          }
        }
        return '"' + value.toString().replace(escRE, escFunc) + '"';
      };
    })()
  };
}

```

# JSON.parse()

`JSON.parse()` 方法用来解析 JSON 字符串，构造由字符串描述的 JavaScript 值或对象。提供可选的 **reviver** 函数用以在返回之前对所得到的对象执行变换 (操作)。

## [语法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#语法)

```
JSON.parse(text[, reviver])
```

### [参数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#参数)

- `text`

  要被解析成 JavaScript 值的字符串，关于 JSON 的语法格式，请参考：[`JSON`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON)。

- `reviver` 可选

  转换器，如果传入该参数 (函数)，可以用来修改解析生成的原始值，调用时机在 parse 函数返回之前。

### [返回值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#返回值)

[`Object`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object) 类型，**对应给定 JSON 文本的对象/值**。

### [异常](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#异常)

若传入的字符串不符合 JSON 规范，则会抛出 [`SyntaxError`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError) 异常。

## [示例](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#示例)

### [使用 `JSON.parse()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#使用_json.parse)

```js
console.log(JSON.parse("{}"));  // {}
console.log(typeof JSON.parse("true"));  // boolean
console.log(JSON.parse('"foo"'));  //  foo
console.log(JSON.parse('[1, 2, 3, "false"]'));  // [ 1, 2, 3, 'false' ]
console.log(JSON.parse("null"));  // null
```

### [使用 `reviver` 函数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#使用_reviver_函数)

**如果指定了 `reviver` 函数，则解析出的 JavaScript 值（解析值）会经过一次转换后才将被最终返回（返回值）**。更具体点讲就是：解析值本身以及它所包含的所有属性，会按照一定的顺序（从最最里层的属性开始，一级级往外，最终到达顶层，也就是解析值本身）分别的去调用 `reviver` 函数，**在调用过程中，当前属性所属的对象会作为 `this` 值**，当前属性名和属性值会分别作为第一个和第二个参数传入 `reviver` 中。如果 `reviver` 返回 `undefined`，则当前属性会从所属对象中删除，如果返回了其他值，则返回的值会成为当前属性新的属性值。

当遍历到最顶层的值（解析值）时，传入 `reviver` 函数的参数会是空字符串 `""`（因为此时已经没有真正的属性）和当前的解析值（有可能已经被修改过了），当前的 `this` 值会是 `{"": 修改过的解析值}`，在编写 `reviver` 函数时，要注意到这个特例。（**这个函数的遍历顺序依照：从最内层开始，按照层级顺序，依次向外遍历**）

```js
let obj = JSON.parse('{"p": 5, "a": 3}', function(k, v) {
  if (k === "") {
    return v;  // 如果到了最顶层，则直接返回属性值，
  }
  return v * 2;
});

console.log(obj);  // { p: 10, a: 6 }
```

```js
let obj = JSON.parse('{"1": 1, "2": 2,"3": {"4": 4, "5": {"6": 6}}}', function(k, v) {
  console.log(k);  //输出当前的属性名，从而得知遍历顺序是从内向外的，最后一个属性名会是个空字符串。

  return v;  //返回原始属性值，相当于没有传递 reviver 参数。
});

console.log(obj);  // { '1': 1, '2': 2, '3': { '4': 4, '5': { '6': 6 } } }
/*
1
2
4
6
5
3
""
*/
```

### [`JSON.parse()` 不允许用逗号作为结尾](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#json.parse_不允许用逗号作为结尾)

```js
// both will throw a SyntaxError
JSON.parse("[1, 2, 3, 4, ]");
JSON.parse('{"foo" : 1, }');
```

## [Polyfill](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#polyfill)

```js
// From https://github.com/douglascrockford/JSON-js/blob/master/json2.js
if (typeof JSON.parse !== "function") {
    var rx_one = /^[\],:{}\s]*$/;
    var rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;
    var rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
    var rx_four = /(?:^|:|,)(?:\s*\[)+/g;
    var rx_dangerous = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
    JSON.parse = function(text, reviver) {

        // The parse method takes a text and an optional reviver function, and returns
        // a JavaScript value if the text is a valid JSON text.

        var j;

        function walk(holder, key) {

            // The walk method is used to recursively walk the resulting structure so
            // that modifications can be made.

            var k;
            var v;
            var value = holder[key];
            if (value && typeof value === "object") {
                for (k in value) {
                    if (Object.prototype.hasOwnProperty.call(value, k)) {
                        v = walk(value, k);
                        if (v !== undefined) {
                            value[k] = v;
                        } else {
                            delete value[k];
                        }
                    }
                }
            }
            return reviver.call(holder, key, value);
        }


        // Parsing happens in four stages. In the first stage, we replace certain
        // Unicode characters with escape sequences. JavaScript handles many characters
        // incorrectly, either silently deleting them, or treating them as line endings.

        text = String(text);
        rx_dangerous.lastIndex = 0;
        if (rx_dangerous.test(text)) {
            text = text.replace(rx_dangerous, function(a) {
                return (
                    "\\u" +
                    ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
                );
            });
        }

        // In the second stage, we run the text against regular expressions that look
        // for non-JSON patterns. We are especially concerned with "()" and "new"
        // because they can cause invocation, and "=" because it can cause mutation.
        // But just to be safe, we want to reject all unexpected forms.

        // We split the second stage into 4 regexp operations in order to work around
        // crippling inefficiencies in IE's and Safari's regexp engines. First we
        // replace the JSON backslash pairs with "@" (a non-JSON character). Second, we
        // replace all simple value tokens with "]" characters. Third, we delete all
        // open brackets that follow a colon or comma or that begin the text. Finally,
        // we look to see that the remaining characters are only whitespace or "]" or
        // "," or ":" or "{" or "}". If that is so, then the text is safe for eval.

        if (
            rx_one.test(
                text
                .replace(rx_two, "@")
                .replace(rx_three, "]")
                .replace(rx_four, "")
            )
        ) {

            // In the third stage we use the eval function to compile the text into a
            // JavaScript structure. The "{" operator is subject to a syntactic ambiguity
            // in JavaScript: it can begin a block or an object literal. We wrap the text
            // in parens to eliminate the ambiguity.

            j = eval("(" + text + ")");

            // In the optional fourth stage, we recursively walk the new structure, passing
            // each name/value pair to a reviver function for possible transformation.

            return (typeof reviver === "function") ?
                walk({
                    "": j
                }, "") :
                j;
        }

        // If the text is not JSON parseable, then a SyntaxError is thrown.

        throw new SyntaxError("JSON.parse");
    };
}
```

# JSON.stringify()

`JSON.stringify()` 方法将一个 JavaScript 对象或值转换为 JSON 字符串，如果指定了一个 replacer 函数，则可以选择性地替换值，或者指定的 replacer 是数组，则可选择性地仅包含数组指定的属性。

## [语法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#syntax)

```js
JSON.stringify(value[, replacer [, space]])
```

### [参数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#parameters)

- `value`

  将要序列化成 一个 JSON 字符串的值。

- `replacer` 可选

  如果该参数是一个函数，则在序列化过程中，**被序列化的值的每个属性都会经过该函数的转换和处理**；

  如果该参数是一个数组，则**只有包含在这个数组中的属性名才会被序列化到最终的 JSON 字符串中**；

  如果该参数为 null 或者未提供，**则对象所有的属性都会被序列化**。

- `space` 可选

  指定缩进用的空白字符串，用于美化输出（pretty-print）；

  如果参数是个数字，**它代表有多少的空格**；上限为 10。该值若小于 1，则意味着没有空格；

  如果该参数为字符串（当字符串长度超过 10 个字母，取其前 10 个字母），**该字符串将被作为空格**；

  如果该参数没有提供（或者为 null），**将没有空格**。

### [返回值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#返回值)

一个表示给定值的 JSON 字符串。

### [异常](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#异常)

- 当在循环引用时会抛出异常[`TypeError`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError) ("cyclic object value")（循环对象值）
- 当尝试去转换 [`BigInt`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/BigInt) 类型的值会抛出[`TypeError`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError) ("BigInt value can't be serialized in JSON")（BigInt 值不能 JSON 序列化）.

## [描述](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#描述)

`JSON.stringify()`将值转换为相应的 JSON 格式：

- 转换值如果有 toJSON() 方法，该方法定义什么值将被序列化。
- 非数组对象的属性不能保证以特定的顺序出现在序列化后的字符串中。
- 布尔值、数字、字符串的包装对象在序列化过程中会自动转换成对应的原始值。
- `undefined`、任意的函数以及 symbol 值，**在序列化过程中会被忽略**（出现在非数组对象的属性值中时）或者**被转换成 `null`**（出现在数组中时）。
- 函数、undefined 被**单独转换时，会返回 undefined**，如`JSON.stringify(function(){})` or `JSON.stringify(undefined)`.
- 对包含**循环引用**的对象（对象之间相互引用，形成无限循环）执行此方法，**会抛出错误**。
- 所有**以 symbol 为属性键的属性都会被完全忽略掉**，即便 `replacer` 参数中强制指定包含了它们。
- Date 日期调用了 toJSON() 将其转换为了 string 字符串（同 Date.toLocalString()），因此会被当做字符串处理。
- **NaN 和 Infinity 格式的数值及 null 都会被当做 null。**
- 其他类型的对象，包括 Map/Set/WeakMap/WeakSet，**仅会序列化可枚举的属性**。

## [示例](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#示例)

### [使用 JSON.stringify](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#使用_json.stringify)

```js
JSON.stringify({});                        // '{}'
JSON.stringify(true);                      // 'true'
JSON.stringify("foo");                     // '"foo"'
JSON.stringify([1, "false", false]);       // '[1,"false",false]'
JSON.stringify({ x: 5 });                  // '{"x":5}'

JSON.stringify({x: 5, y: 6});
// "{"x":5,"y":6}"

JSON.stringify([new Number(1), new String("false"), new Boolean(false)]);
// '[1,"false",false]'

JSON.stringify({x: undefined, y: Object, z: Symbol("")});
// '{}'

JSON.stringify([undefined, Object, Symbol("")]);
// '[null,null,null]'

JSON.stringify({[Symbol("foo")]: "foo"});
// '{}'

JSON.stringify({[Symbol.for("foo")]: "foo"}, [Symbol.for("foo")]);
// '{}'

JSON.stringify(
    {[Symbol.for("foo")]: "foo"},
    function (k, v) {
        if (typeof k === "symbol"){
            return "a symbol";
        }
    }
);


// undefined

// 不可枚举的属性默认会被忽略：
JSON.stringify(
    Object.create(
        null,
        {
            x: { value: 'x', enumerable: false },
            y: { value: 'y', enumerable: true }
        }
    )
);

// "{"y":"y"}"


console.log(JSON.stringify(null));  //  null
console.log(JSON.stringify(undefined));  //  undefined
console.log(JSON.stringify(function() {}));  //  undefined

console.log(JSON.stringify(NaN));  //  null
console.log(JSON.stringify(Infinity));  //  null

```

### [`replacer` 参数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#replacer_参数)

replacer 参数可以是一个函数或者一个数组。作为函数，它有两个参数，键（key）和值（value），它们都会被序列化。

在开始时，`replacer` 函数会被传入一个空字符串作为 `key` 值，代表着要被 `stringify` 的这个对象。随后每个对象或数组上的属性会被依次传入。 

函数应当返回 JSON 字符串中的 value, 如下所示：

- 如果返回一个 [`Number`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number), 转换成相应的字符串作为属性值被添加入 JSON 字符串。
- 如果返回一个 [`String`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String), 该字符串作为属性值被添加入 JSON 字符串。
- 如果返回一个 [`Boolean`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Boolean), "true" 或者 "false" 作为属性值被添加入 JSON 字符串。
- 如果返回任何其他对象，该对象递归地序列化成 JSON 字符串，对每个属性调用 replacer 方法。**除非该对象是一个函数，这种情况将不会被序列化成 JSON 字符串。**
- 如果返回 undefined，该属性值不会在 JSON 字符串中输出。

**注意：** 不能用 replacer 方法，从数组中移除值（values），如若返回 undefined 或者一个函数，将会被 null 取代。

#### 例子 (function)

```js
function replacer(key, value) {
  if (typeof value === "string") {
    return undefined;
  }
  return value;
}

var foo = {foundation: "Mozilla", model: "box", week: 45, transport: "car", month: 7};
var jsonString = JSON.stringify(foo, replacer);

console.log(jsonString);  //  {"week":45,"month":7}
```

#### 例子 (array)

如果 `replacer` 是一个数组，数组的值代表将被序列化成 JSON 字符串的属性名。

```js
JSON.stringify(foo, ['week', 'month']);

// '{"week":45,"month":7}', 只保留 “week” 和 “month” 属性值。
```

### [`space` 参数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#space_参数)

`space `参数**用来控制结果字符串里面的间距**。如果是一个数字，则在字符串化时每一级别会比上一级别缩进多这个数字值的空格（最多 10 个空格）；如果是一个字符串，则每一级别会比上一级别多缩进该字符串（或该字符串的前 10 个字符）。

```js
let obj = JSON.stringify({ a: 2, b: 3, c:"foo"}, null, " ");  
console.log(obj);  //
/*
{
 "a": 2,
 "b": 3,
 "c": "foo"
}
*/
```

使用制表符（\t）来缩进：

```js
let obj = JSON.stringify({ a: 2, b: 3, c:"foo"}, null, '\t')
console.log(obj);  //
/*
{
  "a": 2,
  "b": 3,
  "c": "foo"
}
*/
```

### [toJSON 方法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#tojson_方法)

如果一个被序列化的对象拥有 `toJSON` 方法，**那么该 `toJSON` 方法就会覆盖该对象默认的序列化行为**：不是该对象被序列化，而是调用 `toJSON` 方法后的返回值会被序列化，例如：

```js
var obj = {
  foo: 'foo',
  toJSON: function () {
    return 'bar';
  }s
};
console.log(JSON.stringify(obj));      // '"bar"'
console.log(JSON.stringify({x: obj})); // '{"x":"bar"}'
```

### [`JSON.stringify`用作 JavaScript](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#json.stringify用作_javascript)

注意 JSON 不是 JavaScript 严格意义上的子集，在 JSON 中不需要省略两条终线（Line separator 和 Paragraph separator），但在 JavaScript 中需要被省略。因此，如果 JSON 被用作 JSONP 时，下面方法可以使用：

```js
function jsFriendlyJSONStringify (s) {
    return JSON.stringify(s).
        replace(/\u2028/g, '\\u2028').
        replace(/\u2029/g, '\\u2029');
}

var s = {
    a: String.fromCharCode(0x2028),
    b: String.fromCharCode(0x2029)
};
try {
    eval('(' + JSON.stringify(s) + ')');
} catch (e) {
    console.log(e); // "SyntaxError: unterminated string literal"
}

// No need for a catch
eval('(' + jsFriendlyJSONStringify(s) + ')');

// console.log in Firefox unescapes the Unicode if
//   logged to console, so we use alert
alert(jsFriendlyJSONStringify(s)); // {"a":"\u2028","b":"\u2029"}
```

### [使用 JSON.stringify 结合 localStorage 的例子](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#使用_json.stringify_结合_localstorage_的例子)

一些时候，你想存储用户创建的一个对象，并且，即使在浏览器被关闭后仍能恢复该对象。下面的例子是 `JSON.stringify` 适用于这种情形的一个样板：

```js
// 创建一个示例数据
var session = {
    'screens' : [],
    'state' : true
};
session.screens.push({"name":"screenA", "width":450, "height":250});
session.screens.push({"name":"screenB", "width":650, "height":350});
session.screens.push({"name":"screenC", "width":750, "height":120});
session.screens.push({"name":"screenD", "width":250, "height":60});
session.screens.push({"name":"screenE", "width":390, "height":120});
session.screens.push({"name":"screenF", "width":1240, "height":650});

// 使用 JSON.stringify 转换为 JSON 字符串
// 然后使用 localStorage 保存在 session 名称里
localStorage.setItem('session', JSON.stringify(session));

// 然后是如何转换通过 JSON.stringify 生成的字符串，该字符串以 JSON 格式保存在 localStorage 里
var restoredSession = JSON.parse(localStorage.getItem('session'));

// 现在 restoredSession 包含了保存在 localStorage 里的对象
console.log(restoredSession);
```

