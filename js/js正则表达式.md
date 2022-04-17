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

#### \cX

**当X是处于A到Z之间的字符的时候，匹配字符串中的一个控制符**。

例如，`/\cM/` 匹配字符串中的 control-M (U+000D)。

```js
let reg1=/\cM/g;

let reg2=new RegExp("\\cM","g");

let str1="baz\u000Dfoo";
let str2=" baz foo\u000D";

console.log(str1.match(reg1));  //[ '\r' ]
console.log(str2.replace(reg2,"X"));  // baz fooX

```

#### \d

**匹配一个数字**`。``等价于[0-9]`。

例如， `/\d/` 或者 `/[0-9]/` 匹配"B2 is the suite number."中的'2'。

```js
let reg1=/\d/g;

let reg2=new RegExp("\\d","g");

let str1="12baz234foo";
let str2=" 43baz4 5foo44";

console.log(str1.match(reg1));  //[ '1', '2', '2', '3', '4' ]
console.log(str2.replace(reg2,"X"));  // XXbazX XfooXX

```

#### \D

**匹配一个非数字字符**`。``等价于[^0-9]`。

例如， `/\D/` 或者 `/[^0-9]/` 匹配"B2 is the suite number."中的'B' 。

```js
let reg1=/\D/g;

let reg2=new RegExp("\\D","g");

let str1="12baz234foo";
let str2=" 43baz4 5foo44";

console.log(str1.match(reg1));  //[ 'b', 'a', 'z', 'f', 'o', 'o' ]
console.log(str2.replace(reg2,"X"));  //X43XXX4X5XXX44

```

#### \f

匹配一个换页符 (U+000C)。

#### \n

匹配一个换行符 (U+000A)。

\r

匹配一个回车符 (U+000D)。

```js
let reg1=/[\r\n\f]/g;

let reg2=new RegExp("[\\r\\n\\f]","g");

let str1="abc \u000a def \u000c ghi \u000d";
let str2="";

console.log(str1.match(reg1));  //[ '\n', '\f', '\r' ]
console.log(str1.replace(reg2,"X"));  //abc X def X ghi X

```

#### \s

**匹配一个空白字符**，包括空格、制表符、换页符和换行符。等价于[ \f\n\r\t\v\u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]。

例如, `/\s\w*/` 匹配"foo bar."中的' bar'。

经测试，\s不匹配"[\u180e](https://unicode-table.com/cn/180E/)"，在当前版本Chrome(v80.0.3987.122)和Firefox(76.0.1)控制台输入/\s/.test("\u180e")均返回false。

```js
let reg1=/\s/g;

let reg2=new RegExp("\\s","g");

let str1="abc\u000adef\u000cghi\u000d ";
let str2="";

console.log(str1.match(reg1));  //[ '\n', '\f', '\r',
console.log(str1.replace(reg2,"X"));  //abcXdefXghiXX

```

#### \S

 **匹配一个非空白字符**。等价于 `[^ `\f\n\r\t\v\u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff`]`。例如，`/\S\w*/` 匹配"foo bar."中的'foo'。

```js
let reg1=/\S/g;

let reg2=new RegExp("\\S","g");

let str1="a\u000a\u000c\u000db ";
let str2="";

console.log(str1.match(reg1));  //[ 'a', 'b' ]
console.log(str1.replace(reg2,"X"));  //XX 

```

#### \t

匹配一个水平制表符 (U+0009)。

#### \v

匹配一个垂直制表符 (U+000B)。

#### \w

**匹配一个单字字符**（字母、数字或者下划线）。等价于 `[A-Za-z0-9_]`。

例如, `/\w/` 匹配 "apple," 中的 'a'，"$5.28,"中的 '5' 和 "3D." 中的 '3'。

#### \W

**匹配一个非单字字符**。等价于 `[^A-Za-z0-9_]`。

例如, `/\W/` 或者 `/[^A-Za-z0-9_]/` 匹配 "50%." 中的 '%'。

```js
let reg1=/\w/g;

let reg2=new RegExp("\\W","g");

let str1="a_b.* ";
let str2="";

console.log(str1.match(reg1));  //[ 'a', '_', 'b' ]
console.log(str1.replace(reg2,"X"));  //a_bXXX

```

#### \n

在正则表达式中，它返回最后的第n个子捕获匹配的子字符串(捕获的数目以左括号计数)。

比如 `/apple(,)\sorange\1/` 匹配"apple, orange, cherry, peach."中的'apple, orange,' 。

```js
let reg1=/apple(,)\sorange\1/g;

let reg2=new RegExp("apple(,)\\sorange\\1","g");

let str1="apple, orange, cherry, peach.";
let str2="";

console.log(str1.match(reg1));  //[ 'apple, orange,' ]
console.log(str1.replace(reg2,"X"));  //X cherry, peach.

```

#### \0

匹配 NULL（U+0000）字符， 不要在这后面跟其它小数，因为 `\0<digits>` 是一个八进制转义序列。

```js
let reg1=/\0/g;

let reg2=new RegExp("\\0","g");

let str1="abc\u0000abc";
let str2="";

console.log(str1.match(reg1));  //[ '\x00' ]
console.log(str1.replace(reg2,"X"));  //abcXabc

```

#### \xhh

匹配一个两位十六进制数（\x00-\xFF）表示的字符。

#### \uhhhh

匹配一个四位十六进制数表示的 UTF-16 代码单元。

#### \u{hhhh}或\u{hhhhh}

（仅当设置了u标志时）匹配一个十六进制数表示的 Unicode 字符。

```js
let reg1=/\xhh/g;

let reg2=new RegExp("\\uhhhh","g");

let str1="abc\xaa \ufd12 abc";
let str2="";

console.log(str1.match(reg1));  //null
console.log(str1.replace(reg2,"X"));  //abcª ﴒ abc

```



### [Escaping](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions#escaping)

如果你需要使用任何特殊字符的字面值（例如，搜索字符'*'），**你必须通过在它前面放一个反斜杠来转义它**。 例如，要搜索'a'后跟'*'后跟'b'，你应该使用`/a\*b/`- 反斜杠“转义”字符'*'，使其成为文字而非特殊符号。

类似地，如果您正在编写正则表达式文字并且需要匹配斜杠（'/'），那么需要转义它（否则，斜杠是正则终止符）。 例如，要搜索字符串“/ example /”后跟一个或多个字母字符，您需要使用`/\/example\/[a-z]+/i`——**每个斜杠之前使用反斜杠使它们成为普通字符**。

**要匹配文本符号反斜杠，您需要转义反斜杠**。 例如，要匹配字符串“C:\”，其中“C”可以是任何字母，您将使用`/[A-Z]:\\/` —— 第一个反斜杠转义后面的那个反斜杠，因此表达式搜索单个普通字符反斜杠。

如果将RegExp构造函数与字符串文字一起使用，请记住反斜杠是字符串文字中的转义，因此要在正则表达式中使用它，**您需要在字符串文字级别转义它**。 `/a\*b/` 和`new RegExp("a\\*b")`创建的表达式是相同的，搜索“a”后跟文字“*”后跟“b”。

将用户输入转义为正则表达式中的一个字面字符串, 可以通过简单的替换来实现：

```js
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  //$&表示整个被匹配的字符串
}
```

正则表达式后的"g"是一个表示全局搜索选项或标记，将在整个字符串查找并返回所有匹配结果。这将在下面的[通过标志进行高级搜索](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions#通过标志进行高级搜索)详述。

为什么这个没有内建在JavaScript中？之前有计划在RegExp对象中添加一个Function，但在[TC39](https://github.com/benjamingr/RegExp.escape/issues/37)中被否决了。

### [使用插入语](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions#使用插入语)

任何正则表达式的插入语都会使这部分匹配的副字符串被记忆。一旦被记忆，这个副字符串就可以被调用于其它用途，如同 [使用括号的子字符串匹配](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions#使用括号的子字符串匹配)之中所述。

比如， `/Chapter (\d+)\.\d*/` 解释了额外转义的和特殊的字符，并说明了这部分pattern应该被记忆。它精确地匹配后面跟着一个以上数字字符的字符 'Chapter ' (`\d` 意为任何数字字符，`+ 意为1次以上`)，跟着一个小数点（在这个字符中本身也是一个特殊字符；小数点前的 \ 意味着这个pattern必须寻找字面字符 '.')，跟着任何数字字符0次以上。 (`\d` 意为数字字符， `*` 意为0次以上)。另外，**插入语也用来记忆第一个匹配的数字字符。**

此模式可以匹配字符串"Open Chapter 4.3, paragraph 6"，**并且'4'将会被记住**。此模式并不能匹配"Chapter 3 and 4"，因为在这个字符串中'3'的后面没有点号'.'。

**括号中的"?:"，这种模式匹配的子字符串将不会被记住**。比如，(?:\d+)匹配一次或多次数字字符，但是不能记住匹配的字符。

## [使用正则表达式](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions#使用正则表达式)

正则表达式可以被用于 `RegExp` 的 [`exec`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) 和 [test (en-US)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test) 方法以及 [`String`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String) 的 [match (en-US)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match)、[`replace`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace)、[search (en-US)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search) 和 [split (en-US)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) 方法。这些方法在 [JavaScript 手册](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference)中有详细的解释。

| 方法                                                         | 描述                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [`exec`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) | 一个在字符串中执行查找匹配的RegExp方法，它返回一个数组（未匹配到则返回 null）。 |
| [`test`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test) | 一个在字符串中测试是否匹配的RegExp方法，它返回 true 或 false。 |
| [`match`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/match) | 一个在字符串中执行查找匹配的String方法，它返回一个数组，在未匹配到时会返回 null。 |
| [`matchAll`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll) | 一个在字符串中执行查找所有匹配的String方法，它返回一个迭代器（iterator）。 |
| [`search`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/search) | 一个在字符串中测试匹配的String方法，它返回匹配到的位置索引，或者在失败时返回-1。 |
| [`replace`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace) | 一个在字符串中执行查找匹配的String方法，并且使用替换字符串替换掉匹配到的子字符串。 |
| [`split`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/split) | 一个使用正则表达式或者一个固定字符串分隔一个字符串，并将分隔后的子字符串存储到数组中的 `String` 方法。 |

当你想要知道在一个字符串中的一个匹配是否被找到，你可以使用 test 或 search 方法；想得到更多的信息（但是比较慢）则可以使用 exec 或 match 方法。如果你使用exec 或 match 方法并且匹配成功了，那么这些方法将返回一个数组并且更新相关的正则表达式对象的属性和预定义的正则表达式对象（详见下）。如果匹配失败，那么 exec 方法返回 null（也就是false）。

在接下来的例子中，脚本将使用exec方法在一个字符串中查找一个匹配。

```js
var myRe = /d(b+)d/g;
var myArray = myRe.exec("cdbbdbsbz");
```

如果你不需要访问正则表达式的属性，这个脚本通过另一个方法来创建myArray：

```js
var myArray = /d(b+)d/g.exec("cdbbdbsbz");
// 和 "cdbbdbsbz".match(/d(b+)d/g); 相似。
// 但是 "cdbbdbsbz".match(/d(b+)d/g) 输出数组 [ "dbbd" ]，
// 而 /d(b+)d/g.exec('cdbbdbsbz') 输出数组 [ "dbbd", "bb", index: 1, input: "cdbbdbsbz" ].
```

如果你想通过一个字符串构建正则表达式，那么这个脚本还有另一种方法：

```js
var myRe = new RegExp("d(b+)d", "g");
var myArray = myRe.exec("cdbbdbsbz");
```

通过这些脚本，匹配成功后将返回一个数组并且更新正则表达式的属性，如下表所示。

```js
let reg1=/\d/g;

let str1="1a2b3c";

console.log(reg1.exec(str1));  //[ '1', index: 0, input: '1a2b3c', groups: undefined ]
console.log(reg1.test(str1));  //true

console.log(str1.match(reg1));  //[ '1', '2', '3' ]
console.log(str1.matchAll(reg1));  //Object [RegExp String Iterator] {}

console.log(str1.search(reg1));  //0
console.log(str1.split(reg1));  //[ '', 'a', 'b', 'c' ]
console.log(str1.replace(reg1,"X"));  //XaXbXc
console.log(reg1.lastIndex);  //0
```

正则表达式执行后的返回信息

| 对象      | 属性或索引                                     | 描述                                                         | 在例子中对应的值 |
| :-------- | :--------------------------------------------- | :----------------------------------------------------------- | :--------------- |
| `myArray` |                                                | 匹配到的字符串和所有被记住的子字符串。                       | `["dbbd", "bb"]` |
| `index`   | 在输入的字符串中匹配到的以0开始的索引值。      | `1`                                                          |                  |
| `input`   | 初始字符串。                                   | `"cdbbdbsbz"`                                                |                  |
| `[0]`     | 最近一个匹配到的字符串。                       | `"dbbd"`                                                     |                  |
| `myRe`    | `lastIndex`                                    | 开始下一个匹配的起始索引值。（这个属性只有在使用g参数时可用在 [通过参数进行高级搜索](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions#.E9.80.9A.E8.BF.87.E5.8F.82.E6.95.B0.E8.BF.9B.E8.A1.8C.E9.AB.98.E7.BA.A7.E6.90.9C.E7.B4.A2) 一节有详细的描述.) | `5`              |
| `source`  | 模式字面文本。在正则表达式创建时更新，不执行。 | `"d(b+)d"`                                                   |                  |

如这个例子中的第二种形式所示，你可以使用对象初始器创建一个正则表达式实例，但不分配给变量。如果你这样做，那么，每一次使用时都会创建一个新的正则表达式实例。因此，如果你不把正则表达式实例分配给一个变量，你以后将不能访问这个正则表达式实例的属性。例如，假如你有如下脚本：

```js
var myRe = /d(b+)d/g;
var myArray = myRe.exec("cdbbdbsbz");
console.log("The value of lastIndex is " + myRe.lastIndex);
```

这个脚本输出如下：

```js
The value of lastIndex is 5
```

然而，如果你有如下脚本：

```js
var myArray = /d(b+)d/g.exec("cdbbdbsbz");
console.log("The value of lastIndex is " + /d(b+)d/g.lastIndex);
```

它显示为：

```js
The value of lastIndex is 0
```

当发生/d(b+)d/g使用两个不同状态的正则表达式对象，lastIndex属性会得到不同的值。**如果你需要访问一个正则表达式的属性，则需要创建一个对象初始化生成器，你应该首先把它赋值给一个变量。**

### [使用括号的子字符串匹配](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions#使用括号的子字符串匹配_2)

一个正则表达式模式使用括号，将导致相应的子匹配被记住。例如，/a(b)c /可以匹配字符串“abc”，并且记得“b”。回调这些括号中匹配的子串，使用数组元素[1],……[n]。

**使用括号匹配的子字符串的数量是无限的**。返回的数组中保存所有被发现的子匹配。下面的例子说明了如何使用括号的子字符串匹配。

下面的脚本使用replace()方法来转换字符串中的单词。在匹配到的替换文本中，脚本使用替代的$ 1,$ 2表示第一个和第二个括号的子字符串匹配。

```js
var re = /(\w+)\s(\w+)/;
var str = "John Smith";
var newstr = str.replace(re, "$2, $1");
console.log(newstr);
```

这个表达式输出 "Smith, John"。

### [通过标志进行高级搜索](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions#通过标志进行高级搜索)

正则表达式有六个可选参数 (`flags`) 允许全局和不分大小写搜索等。这些参数既可以单独使用也能以任意顺序一起使用, 并且被包含在正则表达式实例中。

| 标志 | 描述                                                      |
| :--- | :-------------------------------------------------------- |
| `g`  | 全局搜索。                                                |
| `i`  | 不区分大小写搜索。                                        |
| `m`  | 多行搜索。                                                |
| `s`  | 允许 `.` 匹配换行符。                                     |
| `u`  | 使用unicode码的模式进行匹配。                             |
| `y`  | 执行“粘性(`sticky`)”搜索,匹配从目标字符串的当前位置开始。 |

为了在正则表达式中包含标志，请使用以下语法：

```js
var re = /pattern/flags;
```

或者

```js
var re = new RegExp("pattern", "flags");
```

值得注意的是，**标志是一个正则表达式的一部分**，它们**在接下来的时间将不能添加或删除**。

例如，re = /\w+\s/g 将创建一个查找一个或多个字符后有一个空格的正则表达式，或者组合起来像此要求的字符串。

```js
var re = /\w+\s/g;
var str = "fee fi fo fum";
var myArray = str.match(re);
console.log(myArray);

// ["fee ", "fi ", "fo "]
```

这段代码将输出 ["fee ", "fi ", "fo "]。在这个例子中，你可以将：

```js
var re = /\w+\s/g;
```

替换成：

```js
var re = new RegExp("\\w+\\s", "g");
```

并且能获取到相同的结果。

使用`.exec()`方法时，与'`g`'标志关联的行为是不同的。 （“class”和“argument”的作用相反：在`.match()`的情况下，字符串类（或数据类型）拥有该方法**，而正则表达式只是一个参数，而在`.exec()`的情况下，它是拥有该方法的正则表达式，其中字符串是参数**。对比*`str.match(re)`*与*`re.exec(str)`* ), '`g`'标志与`.exec()`方法一起使用获得迭代进展。

```js
var xArray; 
while(xArray = re.exec(str)) console.log(xArray);
// produces:
// ["fee ", index: 0, input: "fee fi fo fum"]
// ["fi ", index: 4, input: "fee fi fo fum"]
// ["fo ", index: 7, input: "fee fi fo fum"]
```

m标志用于指定多行输入字符串应该被视为多个行。**如果使用m标志，^和$匹配的开始或结束输入字符串中的每一行，而不是整个字符串的开始或结束。**



## [例子](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions#例子)

以下例子说明了一些正则表达式的用途。

### [改变输入字符串的顺序](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions#改变输入字符串的顺序)

以下例子解释了正则表达式的构成和 `string.split()` 以及 `string.replace()`的用途。它会整理一个只有粗略格式的含有全名（名字首先出现）的输入字符串，这个字符串被空格、换行符和一个分号分隔。最终，它会颠倒名字顺序（姓氏首先出现）和list的类型。

```js
// 下面这个姓名字符串包含了多个空格和制表符，
// 且在姓和名之间可能有多个空格和制表符。
var names = "Orange Trump ;Fred Barney; Helen Rigby ; Bill Abel ; Chris Hand ";

var output = ["---------- Original String\n", names + "\n"];

// 准备两个模式的正则表达式放进数组里。
// 分割该字符串放进数组里。

// 匹配模式：匹配一个分号及紧接其前后所有可能出现的连续的不可见符号。
var pattern = /\s*;\s*/;

// 把通过上述匹配模式分割的字符串放进一个叫做nameList的数组里面。
var nameList = names.split(pattern);

// 新建一个匹配模式：匹配一个或多个连续的不可见字符及其前后紧接着由
// 一个或多个连续的基本拉丁字母表中的字母、数字和下划线组成的字符串
// 用一对圆括号来捕获该模式中的一部分匹配结果。
// 捕获的结果稍后会用到。
pattern = /(\w+)\s+(\w+)/;

// 新建一个数组 bySurnameList 用来临时存放正在处理的名字。
var bySurnameList = [];

// 输出 nameList 的元素并且把 nameList 里的名字
// 用逗号接空格的模式把姓和名分割开来然后存放进数组 bySurnameList 中。
//
// 下面的这个替换方法把 nameList 里的元素用 $2, $1 的模式
// （第二个捕获的匹配结果紧接着一个逗号一个空格然后紧接着第一个捕获的匹配结果）替换了
// 变量 $1 和变量 $2 是上面所捕获的匹配结果。

output.push("---------- After Split by Regular Expression");

var i, len;
for (i = 0, len = nameList.length; i < len; i++) {
  output.push(nameList[i]);
  bySurnameList[i] = nameList[i].replace(pattern, "$2, $1");
}

// 输出新的数组
output.push("---------- Names Reversed");
for (i = 0, len = bySurnameList.length; i < len; i++){
  output.push(bySurnameList[i]);
}

// 根据姓来排序，然后输出排序后的数组。
bySurnameList.sort();
output.push("---------- Sorted");
for (i = 0, len = bySurnameList.length; i < len; i++){
  output.push(bySurnameList[i]);
}

output.push("---------- End");

console.log(output.join("\n"));
```

### [用特殊字符检验输入](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions#用特殊字符检验输入)

在以下例子中，我们期望用户输入一个电话号码。当用户点击“Check”按钮，我们的脚本开始检查这些数字是否合法。如果数字合法（匹配正则表达式所规定的字符序列），脚本显示一条感谢用户的信息并确认该数字。如果这串数字不合法，脚本提示用户电话号码不合法。.

包含非捕获括号 `(?:` 这个正则表达式寻找三个数字字符`\d{3}` 或者 `|` 一个左半括号`\(`跟着三位数字`\d{3}`, 跟着一个封闭括号 `\)`, (结束非捕获括号 `)`)， 后跟着一个短破折号或正斜杠或小数点，随后跟随三个数字字符，当记忆字符 `([-\/\.])捕获并记住，后面跟着三位小数` `\d{3}，再后面跟随记住的破折号、正斜杠或小数点` `\1，最后跟着四位小数` `\d{4}。`

当用户按下 Enter 设置 RegExp.input，这些变化也能被激活。

```html
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
    <meta http-equiv="Content-Script-Type" content="text/javascript">
    <script type="text/javascript">
      var re = /(?:\d{3}|\(\d{3}\))([-\/\.])\d{3}\1\d{4}/;
      function testInfo(phoneInput) {
        var OK = re.exec(phoneInput.value);
        if (!OK)
          window.alert(phoneInput.value + ' isn\'t a phone number with area code!');
        else
          window.alert('Thanks, your phone number is ' + OK[0]);
      }
    </script>
  </head>
  <body>
    <p>Enter your phone number (with area code) and then click "Check".
        <br>The expected format is like ###-###-####.</p>
    <form action="#">
      <input id="phone"><button onclick="testInfo(document.getElementById('phone'));">Check</button>
    </form>
  </body>
</html>
```

