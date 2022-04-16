# RegExp(正则表达式)

**`RegExp`** 对象用于将文本与一个模式匹配。

## [描述](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp#描述)

### [字面量和构造函数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp#字面量和构造函数)

有两种方法可以创建一个 `RegExp` 对象：一种是字面量，另一种是构造函数。

- 字面量

  由斜杠(/)包围而不是引号包围。

- 构造函数的字符串参数

  由引号而不是斜杠包围。

以下三种表达式都会创建相同的正则表达式：

```js
/ab+c/i; //字面量形式
new RegExp('ab+c', 'i'); // 首个参数为字符串模式的构造函数
new RegExp(/ab+c/, 'i'); // 首个参数为常规字面量的构造函数
```

当表达式被赋值时，**字面量形式提供正则表达式的编译（compilation）状态**，当正则表达式保持为常量时使用字面量。例如当你在循环中使用字面量构造一个正则表达式时，正则表达式不会在每一次迭代中都被重新编译（recompiled）。

而正则表达式对象的构造函数，如 `new RegExp('ab+c')` 提供了正则表达式**运行时编译**（runtime compilation）。如果你知道正则表达式模式将会改变，或者你事先不知道什么模式，而是从另一个来源获取，如用户输入，这些情况都可以使用构造函数。

### [构造函数中的标志参数(flags)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp#构造函数中的标志参数flags)

从 ECMAScript 6 开始，当第一个参数为正则表达式而第二个标志参数存在时，`new RegExp(/ab+c/, 'i')` 不再抛出 [`TypeError`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError) （`"从另一个RegExp构造一个RegExp时无法提供标志"`）的异常，取而代之，将使用这些参数创建一个新的正则表达式。

当使用构造函数创造正则对象时，**需要常规的字符转义规则**（在前面加反斜杠 `\`）。

比如，以下是等价的：

```js
var re = new RegExp("\\w+");
var re = /\w+/;
```

### [Perl-like RegExp 属性](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp#perl-like_regexp_属性)

请注意，[`RegExp`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp)属性有长名称和短名称（类似Perl）。两个名称总是引用同一个值。（Perl是JavaScript为其正则表达式建模的编程语言）。另请参见[不推荐使用的RegExp属性。](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp_properties)

## [构造函数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp#构造函数)

- [`RegExp()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/RegExp)

  创建一个新的 `RegExp` 对象。

## [静态属性](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp#静态属性)

- [`get RegExp[@@species\]`]species)

  该构造函数用于创建派生对象。

- [`RegExp.lastIndex`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex)

  该索引表示从哪里开始下一个匹配

## [实例属性](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp#实例属性)

- [`RegExp.prototype.flags`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/flags)

  含有 `RegExp` 对象 flags 的字符串。

- [`RegExp.prototype.dotAll`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/dotAll)

  `.` 是否要匹配新行（newlines）。

- [`RegExp.prototype.global`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global)

  针对字符串中所有可能的匹配项测试正则表达式，还是仅针对第一个匹配项。

- [`RegExp.prototype.ignoreCase`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase)

  匹配文本的时候是否忽略大小写。

- [`RegExp.prototype.multiline`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline)

  是否进行多行搜索。

- [`RegExp.prototype.source`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/source)

  正则表达式的文本。

- [`RegExp.prototype.sticky`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky)

  搜索是否是 sticky。

- [`RegExp.prototype.unicode`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode)

  Unicode 功能是否开启。

## [实例方法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp#实例方法)

- [`RegExp.prototype.compile()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/compile)

  运行脚本的期间（重新）编译正则表达式。

- [`RegExp.prototype.exec()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec)

  在该字符串中执行匹配项的搜索。

- [`RegExp.prototype.test()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)

  该正则在字符串里是否有匹配。

- `RegExp.prototype[@@match]()`

  对给定字符串执行匹配并返回匹配结果。

- `RegExp.prototype[@@matchAll]()`

  对给定字符串执行匹配，返回所有匹配结果。

- `RegExp.prototype[@@replace]()`

  给定新的子串，替换所有匹配结果。

- `RegExp.prototype[@@search]()`

  在给定字符串中搜索匹配项，并返回在字符串中找到字符索引。

- `RegExp.prototype[@@split]()`

  通过将给定字符串拆分为子字符串，并返回字符串形成的数组。

- `RegExp.prototype.toString()`

  返回表示指定对象的字符串。重写[`Object.prototype.toString()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toString)方法。

## [示例](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp#syntax)

### [使用正则改变数据结构](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp#using_a_regular_expression_to_change_data_format)

下例使用 [`String`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String) 的 [`replace()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace) 方法去匹配姓名 *first last* 输出新的格式 *last*, *first*。

在替换的文本中，脚本中使用 `$1` 和 `$2` 指明括号里先前的匹配.

```js
let re = /(\w+)\s(\w+)/;
let str = "John Smith";
let newstr = str.replace(re, "$2, $1");
console.log(newstr);
```

这将显示 "Smith, John".

### [使用正则来划分带有多种行结束符和换行符的文本](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp#使用正则来划分带有多种行结束符和换行符的文本)

对于不同的平台（Unix，Windows等等），其默认的行结束符是不一样的. 而下面的划分方式适用于所有平台。

```js
let text = 'Some text\nAnd some more\r\nAnd yet\rThis is the end'
let lines = text.split(/\r\n|\r|\n/)
console.log(lines) // logs [ 'Some text', 'And some more', 'And yet', 'This is the end' ]
```

注意：**在正则表达式中，以竖线分割的子模式的顺序会影响匹配结果**。

### [在多行文本中使用正则表达式](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp#在多行文本中使用正则表达式)

```js
let s = "Please yes\nmake my day!";

s.match(/yes.*day/);
// Returns null

s.match(/yes[^]*day/);
// Returns 'yes\nmake my day'
```

### [使用带有 sticky 标志的正则表达式](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp#using_a_regular_expression_with_the_sticky_flag)

带有[`sticky`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky)标志的正则表达式将会从源字符串的[`RegExp.prototype.lastIndex`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex)位置开始匹配，也就是进行“粘性匹配”。

```js
let str = '#foo#'
let regex = /foo/y

regex.lastIndex = 1
regex.test(str)      // true
regex.lastIndex = 5
regex.test(str)      // false (lastIndex is taken into account with sticky flag)
regex.lastIndex      // 0 (reset after match failure)
```

### [ sticky 标志和 global 标志的不同点](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp#sticky_标志和_global_标志的不同点)

如果正则表达式有粘性 `y` 标志，下一次匹配一定在 `lastIndex` 位置开始；如果正则表达式有全局 `g` 标志，下一次匹配可能在 `lastIndex` 位置开始，也可能在这个位置的后面开始。

```js
re = /\d/y;
while (r = re.exec("123 456")) console.log(r, "AND re.lastIndex", re.lastIndex);

// [ '1', index: 0, input: '123 456', groups: undefined ] AND re.lastIndex 1
// [ '2', index: 1, input: '123 456', groups: undefined ] AND re.lastIndex 2
// [ '3', index: 2, input: '123 456', groups: undefined ] AND re.lastIndex 3
//   ... and no more match.
```

**如果使用带有全局标志`g`的正则表达式`re`，就会捕获字符串中的所有6个数字**，而非3个

### [使用正则表达式和 Unicode 字符](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp#browser_compatibility)

正如上面表格提到的，`\w` 或 `\W` 只会匹配基本的 ASCII 字符；如 `a` 到 `z`、 `A` 到 `Z`、 `0` 到 `9` 及 `_`。

为了匹配其他语言中的字符，如西里尔（Cyrillic）或 希伯来语（Hebrew），要使用 `\uhhhh`，`hhhh` 表示以十六进制表示的字符的 Unicode 值。

下例展示了怎样从一个单词中分离出 Unicode 字符。

```js
let text = "Образец text на русском языке";
let regex = /[\u0400-\u04FF]+/g;

let match = regex.exec(text);
console.log(match[1]);  // prints "Образец"
console.log(regex.lastIndex);  // prints "7"

let match2 = regex.exec(text);
console.log(match2[1]);  // prints "на" [did not print "text"]
console.log(regex.lastIndex);  // prints "15"

// and so on
```

[Unicode属性转义特性](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions/Unicode_Property_Escapes)引入了一种解决方案，它允许使用像\p{scx=Cyrl}这样简单的语句。这里有一个外部资源，用来获取 Unicode 中的不同区块范围：[Regexp-unicode-block](http://kourge.net/projects/regexp-unicode-block)

### [从 URL 中提取子域名](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp#从_url_中提取子域名)

```js
var url = "http://xxx.domain.com";
console.log(/[^.]+/.exec(url)[0].substr(7)); // logs "xxx"
```



# 正则表达式

正则表达式是用于匹配字符串中字符组合的模式。在 JavaScript中，正则表达式也是对象。这些模式被用于 [`RegExp`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp) 的 [`exec`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) 和 [`test`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test) 方法, 以及 [`String`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String) 的 [`match`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/match)、[`matchAll`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll)、[`replace`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace)、[`search`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/search) 和 [`split`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/split) 方法。本章介绍 JavaScript 正则表达式。

## [创建一个正则表达式](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions#创建一个正则表达式)

你可以使用以下两种方法构建一个正则表达式：

使用一个正则表达式字面量，其由包含在斜杠之间的模式组成，如下所示：

```js
var re = /ab+c/;
```

脚本加载后，正则表达式字面量就会被编译。**当正则表达式保持不变时，使用此方法可获得更好的性能**。

或者调用`RegExp`对象的构造函数，如下所示：

```js
var re = new RegExp("ab+c");
```

在脚本运行过程中，用构造函数创建的正则表达式会被编译。**如果正则表达式将会改变，或者它将会从用户输入等来源中动态地产生，就需要使用构造函数来创建正则表达式。**

## [编写一个正则表达式的模式](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions#编写一个正则表达式的模式)

一个正则表达式模式是由简单的字符所构成的，比如 `/abc/`；或者是简单和特殊字符的组合，比如 `/ab*c/` 或 `/Chapter (\d+)\.\d*/`。最后的例子中用到了括号，它在正则表达式中常用作记忆设备。即这部分所匹配的字符将会被记住以备后续使用，例如[使用括号的子字符串匹配](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions#使用括号的子字符串匹配)。

### [使用简单模式](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions#使用简单模式)

简单模式是由你想直接找到的字符构成。比如，`/abc/` 这个模式就能且仅能匹配 "abc" 字符按照顺序同时出现的情况。例如在 "Hi, do you know your abc's?" 和 "The latest airplane designs evolved from slabcraft." 中会匹配成功。在上述两个例子中，匹配的子字符串是 "abc"。但是在 "Grab crab" 中会匹配失败，因为它虽然包含子字符串 "ab c"，但并不是准确的 "abc"。

### [使用特殊字符](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions#使用特殊字符)

当你需要匹配一个不确定的字符串时，比如寻找一个或多个 "b"，或者寻找空格，可以在模式中使用特殊字符。比如，你可以使用 `/ab*c/` 去匹配一个单独的 "a" 后面跟了零个或者多个 "b"，同时后面跟着 "c" 的字符串：`*`的意思是前一项出现零次或者多次。在字符串 "cbbabbbbcdebc" 中，这个模式匹配了子字符串 "abbbbc"。

下面的页面与表格列出了一个正则表达式中可以利用的特殊字符的完整列表和描述。

- [断言（Assertions）](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions)

  表示一个匹配在某些条件下发生。断言包含**先行断言**、**后行断言**和**条件表达式**。

- [字符类（Character Classes）](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes)

  区分不同类型的字符，例如区分字母和数字。

- [组和范围（Groups and Ranges）](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges)

  表示表达式字符的分组和范围。

- [量词（Quantifiers）](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers)

  表示匹配的字符或表达式的数量。

- [Unicode 属性转义（Unicode Property Escapes）](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions/Unicode_Property_Escapes)

  基于 unicode 字符属性区分字符。例如大写和小写字母、数学符号和标点。

#### \

依照下列规则匹配：

**在非特殊字符之前的反斜杠表示下一个字符是特殊字符，不能按照字面理解**。例如，前面没有 "\" 的 "b" 通常匹配小写字母 "b"，即字符会被作为字面理解，无论它出现在哪里。但如果前面加了 "\"，它将不再匹配任何字符，而是表示一个[字符边界](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions#note)。

**在特殊字符之前的反斜杠表示下一个字符不是特殊字符，应该按照字面理解**。详情请参阅下文中的 "转义（Escaping）" 部分。

如果你想将字符串传递给 RegExp 构造函数，不要忘记在字符串字面量中反斜杠是转义字符。**所以为了在模式中添加一个反斜杠，你需要在字符串字面量中转义它**。`/[a-z]\s/i` 和 `new RegExp("[a-z]\\s", "i")` 创建了相同的正则表达式：一个用于搜索后面紧跟着空白字符（`\s` 可看后文）并且在 a-z 范围内的任意字符的表达式。为了通过字符串字面量给 RegExp 构造函数创建包含反斜杠的表达式，你需要在字符串级别和正则表达式级别都对它进行转义。例如 `/[a-z]:\\/i` 和 `new RegExp("[a-z]:\\\\","i")` 会创建相同的表达式，即匹配类似 `"C:\"` 字符串。

```js
let reg1=/[a-z]:\\/i;

let reg2=new RegExp("[a-z]:\\\\","i");

let str=`C:\\`;

console.log(str.match(reg1));    //[ 'C:\\', index: 0, input: 'C:\\', groups: undefined ]
console.log(str.match(reg2));   //[ 'C:\\', index: 0, input: 'C:\\', groups: undefined ]

```

#### ^

匹配输入的开始。**如果多行标志被设置为 true，那么也匹配换行符后紧跟的位置**。

例如，`/^A/` 并不会匹配 "an A" 中的 'A'，但是会匹配 "An E" 中的 'A'。

当 '`^`' 作为第一个字符出现在一个字符集合模式时，它将会有不同的含义。[反向字符集合](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions#special-negated-character-set) 一节有详细介绍和示例。

```js
let reg1=/^A/;

let reg2=new RegExp("^A");

let str1="an A";
let str2="An a";

console.log(str1.match(reg1));  //null
console.log(str2.match(reg2));  //[ 'A', index: 0, input: 'An a', groups: undefined ]

```

#### $

匹配输入的结束。如果多行标志被设置为 true，那么也匹配换行符前的位置。

例如，`/t$/` 并不会匹配 "eater" 中的 't'，但是会匹配 "eat" 中的 't'。

```js
let reg1=/t$/;

let reg2=new RegExp("t$");

let str1="eat";
let str2="later";

console.log(str1.match(reg1));  //[ 't', index: 2, input: 'eat', groups: undefined ]
console.log(str2.match(reg2));  //null

```

#### *

匹配前一个表达式 0 次或多次。等价于 `{0,}`。

例如，`/bo*/` 会匹配 "A ghost boooooed" 中的 'booooo' 和 "A bird warbled" 中的 'b'，但是在 "A goat grunted" 中不会匹配任何内容。

```js
let reg1=/bo*/;

let reg2=new RegExp("bo*");

let str1="A ghost boooooed";
let str2="A bird warbled";

console.log(str1.match(reg1));  //[ 'booooo', index: 8, input: 'A ghost boooooed', groups: undefined ]
console.log(str2.match(reg2));  //[ 'b', index: 2, input: 'A bird warbled', groups: undefined ]

```

#### +

匹配前面一个表达式 1 次或者多次。等价于 `{1,}`。

例如，`/a+/` 会匹配 "candy" 中的 'a' 和 "caaaaaaandy" 中所有的 'a'，但是在 "cndy" 中不会匹配任何内容。

```js
let reg1=/a+/;

let reg2=new RegExp("a+");

let str1="candy";
let str2="caaaaaaandy";

console.log(str1.match(reg1));  //[ 'a', index: 1, input: 'candy', groups: undefined ]
console.log(str2.match(reg2));  //[ 'aaaaaaa', index: 1, input: 'caaaaaaandy', groups: undefined ]

```

#### ?

匹配前面一个表达式 0 次或者 1 次。等价于 `{0,1}`。

例如，`/e?le?/` 匹配 "angel" 中的 'el'、"angle" 中的 'le' 以及 "oslo' 中的 'l'。

如果**紧跟在任何量词 \*、 +、? 或 {} 的后面**，将会使量词变为**非贪婪**（匹配尽量少的字符），和缺省使用的**贪婪模式**（匹配尽可能多的字符）正好相反。例如，对 "123abc" 使用 `/\d+/` 将会匹配 "123"，而使用 `/\d+?/` 则只会匹配到 "1"。

还用于先行断言中，如本表的 `x(?=y)` 和 `x(?!y)` 条目所述。

```js
let reg1=/\d+/;

let reg2=new RegExp("\\d+?");

let str1="123abc";
let str2="caaaaaaandy";

console.log(str1.match(reg1));  //[ '123', index: 0, input: '123abc', groups: undefined ]  贪婪模式（匹配尽可能多的字符）
console.log(str1.match(reg2));  //[ '1', index: 0, input: '123abc', groups: undefined ]  非贪婪（匹配尽量少的字符）

```

#### .

（小数点）默认匹配除换行符之外的任何单个字符。

例如，`/.n/` 将会匹配 "nay, an apple is on the tree" 中的 'an' 和 'on'，但是不会匹配 'nay'。

如果 `s` ("dotAll") 标志位被设为 true，它也会匹配换行符。

```js
let reg1=/.n/g;

let reg2=new RegExp(".n");

let str1="nay";
let str2="caaaaaaandy";

console.log(str1.match(reg1));  //null
console.log(str2.match(reg2));  //[ 'an', index: 7, input: 'caaaaaaandy', groups: undefined ]

```

#### (x)

像下面的例子展示的那样，它会匹配 'x' 并且记住匹配项。其中括号被称为***捕获括号***。

模式 `/(foo) (bar) \1 \2/` 中的 '`(foo)`' 和 '`(bar)`' 匹配并记住字符串 "foo bar foo bar" 中前两个单词。模式中的 `\1` 和 `\2` 表示第一个和第二个被捕获括号匹配的子字符串，即 `foo` 和 `bar`，匹配了原字符串中的后两个单词。

注意 `\1`、`\2`、...、`\n` 是用在正则表达式的**匹配环节**，详情可以参阅后文的 [\n](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions#special-backreference) 条目。而在正则表达式的**替换环节**，则要使用像 `$1`、`$2`、...、`$n` 这样的语法，例如，`'bar foo'.replace(/(...) (...)/, '$2 $1')`。`$&` 表示整个用于匹配的原字符串。

```js
let reg1=/(foo) (bar) \1 \2/;

let reg2=new RegExp("(foo) (bar)");

let str1="foo bar foo bar baz";
let str2="caaaaaaandy";

console.log(str1.match(reg1)[0]);  //foo bar foo bar
console.log(str1.replace(reg2,"$2 $1"));  //bar foo foo bar

```

#### (?:x)

匹配 'x' 但是**不记住匹配项**。这种括号叫作***非捕获括号***，使得你能够定义与正则表达式运算符一起使用的子表达式。看看这个例子 `/(?:foo){1,2}/`。如果表达式是 `/foo{1,2}/`，`{1,2}` 将只应用于 'foo' 的最后一个字符 'o'。如果使用非捕获括号，则 `{1,2}` 会应用于整个 'foo' 单词。更多信息，可以参阅下文的 [Using parentheses](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#Using_parentheses) 条目.

```js
let reg2=new RegExp("(?:foo) (bar)","g");
let str1="foo bar foo bar baz";
console.log(str1.replace(reg2,"$2 $1"))  //$2 bar $2 bar baz


let reg1=/fao{1,2}/;

let reg2=new RegExp("(?:fao){1,2}");

let str1="faoo bar foo bar baz";
let str2="caaaaaaandy";

console.log(str1.match(reg1)[0]);  //faoo
console.log(str1.match(reg2)[0]);  //fao

```

#### x(?=y)

匹配'x'仅仅当'x'后面跟着'y'.这种叫做**先行断言**。

例如，/Jack(?=Sprat)/会匹配到'Jack'仅当它后面跟着'Sprat'。/Jack(?=Sprat|Frost)/匹配‘Jack’仅当它后面跟着'Sprat'或者是‘Frost’。**但是‘Sprat’和‘Frost’都不是匹配结果的一部分。**

```js
let reg1=/foo(?=bar|baz)/g;

let reg2=new RegExp("foo(?=bar|baz)","g");

let str1="foo bar foobar foobaz";
let str2="caaaaaaandy";

console.log(str1.match(reg1));  //[ 'foo', 'foo' ]
console.log(str1.replace(reg2,"FOO"));  //foo bar FOObar FOObaz

```

#### (?<=y)x

匹配'x'仅当'x'前面是'y'.这种叫做**后行断言**。

例如，/(?<=Jack)Sprat/会匹配到' Sprat '仅仅当它前面是' Jack '。/(?<=Jack|Tom)Sprat/匹配‘ Sprat ’仅仅当它前面是'Jack'或者是‘Tom’。**但是‘Jack’和‘Tom’都不是匹配结果的一部分。**

```js
let reg1=/(?<=bar|baz)foo/g;

let reg2=new RegExp("(?<=bar|baz)foo","g");

let str1="bar foo barfoo bazfoo";
let str2="";

console.log(str1.match(reg1));  //[ 'foo', 'foo' ]
console.log(str1.replace(reg2,"FOO"));  //bar foo barFOO bazFOO

```

#### x(?!y)

仅仅当'x'后面不跟着'y'时匹配'x'，这被称为**正向否定查找**。

例如，仅仅当这个数字后面没有跟小数点的时候，/\d+(?!\.)/ 匹配一个数字。正则表达式/\d+(?!\.)/.exec("3.141")匹配‘141’而不是‘3.141’

```js
let reg1=/foo(?!bar|baz)/g;

let reg2=new RegExp("foo(?!bar|baz)","g");

let str1="foo bar foobar foobaz";
let str2="";

console.log(str1.match(reg1));  //[ 'foo' ]
console.log(str1.replace(reg2,"FOO"));  //FOO bar foobar foobaz

```

#### (?<!y)x

仅仅当'x'前面不是'y'时匹配'x'，这被称为**反向否定查找**。

例如, 仅仅当这个数字前面没有负号的时候，`/(?<!-)\d+/` 匹配一个数字。
`/(?<!-)\d+/.exec('3')` 匹配到 "3".
`/(?<!-)\d+/.exec('-3')` 因为这个数字前有负号，所以没有匹配到。

```js
let reg1=/(?<!bar|baz)foo/g;

let reg2=new RegExp("(?<!bar|baz)foo","g");

let str1="bar foo barfoo bazfoo";
let str2="";

console.log(str1.match(reg1));  //[ 'foo' ]
console.log(str1.replace(reg2,"FOO"));  //bar FOO barfoo bazfoo

```

#### x!y

匹配‘x’或者‘y’。

例如，/green|red/匹配“green apple”中的‘green’和“red apple”中的‘red’

```js
let reg1=/bar|baz/g;

let reg2=new RegExp("bar|baz","g");

let str1="bar foo barfoo bazfoo";
let str2="";

console.log(str1.match(reg1));  //[ 'bar', 'bar', 'baz' ]
console.log(str1.replace(reg2,"XX"));  //XX foo XXfoo XXfoo

```

#### {n}

n 是一个正整数，匹配了前面一个字符**刚好出现了 n 次**。
比如， /a{2}/ 不会匹配“candy”中的'a',但是会匹配“caandy”中所有的 a，以及“caaandy”中的前两个'a'。

```js
let reg1=/a{2}/g;

let reg2=new RegExp("a{2}","g");

let str1="candy";
let str2="caandy";

console.log(str1.match(reg1));  //null
console.log(str2.replace(reg2,"XX"));  //cXXndy

```

#### {n,}

n是一个正整数，匹配前一个字符**至少出现了n次**。

例如, /a{2,}/ 匹配 "aa", "aaaa" 和 "aaaaa" 但是不匹配 "a"。

```js
let reg1=/a{2,}/g;

let reg2=new RegExp("a{2,}","g");

let str1="candy caandy caaandy";
let str2="";

console.log(str1.match(reg1));  //[ 'aa', 'aaa' ]
console.log(str1.replace(reg2,"XX"));  //candy cXXndy cXXndy

```

#### {n,m}

n 和 m 都是整数。匹配前面的字符**至少n次，最多m次**。如果 n 或者 m 的值是0， 这个值被忽略。

例如，/a{1, 3}/ 并不匹配“cndy”中的任意字符，匹配“candy”中的a，匹配“caandy”中的前两个a，也匹配“caaaaaaandy”中的前三个a。注意，当匹配”caaaaaaandy“时，匹配的值是“aaa”，即使原始的字符串中有更多的a。

```js
let reg1=/a{2,3}/g;

let reg2=new RegExp("a{2,3}","g");

let str1="candy caandy caaaaandy";
let str2="";

console.log(str1.match(reg1));  //[ 'aa', 'aaa', 'aa' ]
console.log(str1.replace(reg2,"XX"));  //candy cXXndy cXXXXndy

```

#### [xyz]

一个字符集合。**匹配方括号中的任意字符**，包括[转义序列](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Grammar_and_types)。你可以使用破折号（-）来指定一个字符范围。对于点（.）和星号（*）这样的特殊符号在一个字符集中没有特殊的意义。他们**不必进行转义**，不过转义也是起作用的。

例如，[abcd] 和[a-d]是一样的。他们都匹配"brisket"中的‘b’,也都匹配“city”中的‘c’。/[a-z.]+/ 和/[\w.]+/与字符串“test.i.ng”匹配。

```js
let reg1=/[a-h.]/g;

let reg2=new RegExp("[a-h.*]","g");

let str1="baz";
let str2="baz.foo*";

console.log(str1.match(reg1));  //[ 'b', 'a'
console.log(str2.replace(reg2,"X"));  //XXzXXooX

```

#### [^xyz]

一个**反向字符集**。也就是说， 它**匹配任何没有包含在方括号中的字符**。你可以使用破折号（-）来指定一个字符范围。任何普通字符在这里都是起作用的。

例如，`[^abc] `和 `[^a-c] `是一样的。他们匹配"brisket"中的‘r’，也匹配“chop”中的‘h’。

```js
let reg1=/[^a-h.]/g;

let reg2=new RegExp("[^a-h.*]","g");

let str1="baz";
let str2="baz.foo*";

console.log(str1.match(reg1));  //[ 'z' ]
console.log(str2.replace(reg2,"X"));  //baX.fXX*

```

#### [\b]

匹配一个**退格**(U+0008，`\u0008`)。（不要和\b混淆了。）

```js
let reg1=/[\b]/g;

let reg2=new RegExp("[\\b]","g");

let str1="baz\u0008foo";
let str2=" baz foo\u0008";

console.log(str1.match(reg1));  //[ '\b' ]
console.log(str2.replace(reg2,"X"));  // baz fooX

```

#### \b

**匹配一个词的边界**。一个词的边界就是一个词不被另外一个“字”字符跟随的位置或者前面跟其他“字”字符的位置，例如在字母和空格之间。注意，匹配中不包括匹配的字边界。换句话说，**一个匹配的词的边界的内容的长度是0。**（不要和[\b]混淆了）

使用"moon"举例：
/\bm/匹配“moon”中的‘m’；
/oo\b/并不匹配"moon"中的'oo'，因为'oo'被一个“字”字符'n'紧跟着。
/oon\b/匹配"moon"中的'oon'，因为'oon'是这个字符串的结束部分。这样他没有被一个“字”字符紧跟着。
/\w\b\w/将不能匹配任何字符串，**因为在一个单词中间的字符永远也不可能同时满足没有“字”字符跟随和有“字”字符跟随两种情况**。

> **备注：** JavaScript的正则表达式引擎将[特定的字符集](https://www.ecma-international.org/ecma-262/5.1/#sec-15.10.2.6)定义为“字”字符。不在该集合中的任何字符都被认为是一个断词。这组字符相当有限：它只包括大写和小写的罗马字母，十进制数字和下划线字符。不幸的是，重要的字符，例如“é”或“ü”，被视为断词。

```js
let reg1=/foo\b/g;

let reg2=new RegExp("\\b(ba)","g");

let str1="baz foot foo";
let str2=" baz foo aba";

console.log(str1.match(reg1));  //[ 'foo' ]
console.log(str2.replace(reg2,"X"));  // Xz foo aba

```

#### \B

**匹配一个非单词边界**。匹配如下几种情况：

- 字符串第一个字符为非“字”字符
- 字符串最后一个字符为非“字”字符
- 两个单词字符之间
- 两个非单词字符之间
- 空字符串

例如，/\B../匹配"noonday"中的'oo', 而/y\B../匹配"possibly yesterday"中的’yes‘

```js
let reg1=/\B../g;

let reg2=new RegExp("\\B(ba)","g");

let str1="baz foot foo";
let str2=" baz foo aba";

console.log(str1.match(reg1));  //[ 'az', 'oo', 't ', 'oo' ]
console.log(str2.replace(reg2,"X"));  // baz foo aX

```

