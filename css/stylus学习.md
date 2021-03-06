# **安装与使用**

## 安装

```sh
npm install stylus -g
```

```
Usage: stylus [options] [command] [< in [> out]]
              [file|dir ...]
Commands:
  help <prop>     Opens help info for <prop> in
                  your default browser. (OS X only)
Options:

  -u, --use <path>        Utilize the stylus plugin at <path>
  -i, --interactive       Start interactive REPL
  -w, --watch             Watch file(s) for changes and re-compile
  -o, --out <dir>         Output to <dir> when passing files
  -C, --css <src> [dest]  Convert CSS input to Stylus
  -I, --include <path>    Add <path> to lookup paths
  -c, --compress          Compress CSS output
  -d, --compare           Display input along with output
  -f, --firebug           Emits debug infos in the generated css that
                          can be used by the FireStylus Firebug plugin
  -l, --line-numbers      Emits comments in the generated CSS
                          indicating the corresponding Stylus line
  -V, --version           Display the version of Stylus
  -h, --help              Display help information  
```

富于表现力、动态的、健壮的 CSS

`Stylus` 是一个CSS的预处理框架，2010年产生，来自Node.js社区，主要用来给Node项目进行CSS预处理支持，所以 `Stylus` 是一种新型语言，可以创建健壮的、动态的、富有表现力的CSS。比较年轻，其本质上做的事情与 `SASS`/`LESS` 等类似，应该是有很多借鉴，所以近似脚本的方式去写CSS代码。

`Stylus`默认使用 `.styl` 的作为文件扩展名，支持多样性的CSS语法。

`Stylus`功能上更为强壮，和js联系更加紧密。

## 生成CSS

### 命令行中

建立一个`stylusExample/`，再在里面建立 `src` 目录专门存放 `stylus` 文件，在里面建立 `example.styl` 文件。然后在 `stylusExample` 目录下面执行下面命令

```sh
$ stylus --compress src/
```

输出`compiled src/example.css` ，这个时候表示你生成成功了，带上`--compress`参数表示你生成压缩的CSS文件。

```sh
`$ stylus --css css/example.css css/out.styl` CSS转换成styl
`$ stylus help box-shadow` CSS属性的帮助
`$ stylus --css test.css` 输出基本名一致的.styl文件
```

# **Stylus的特性**

```
冒号可有可无、分号可有可无、逗号可有可无、括号可有可无、变量、插值（Interpolation）、混合（Mixin）、数学计算、强制类型转换、动态引入、条件表达式、迭代、嵌套选择器、父级引用、Variable、function、calls、词法作用域、内置函数（超过、60、个）、语法内函数（In-language、functions）、压缩可选、图像内联可选、Stylus、可执行程序、健壮的错误报告、单行和多行注释、CSS、字面量、字符转义、TextMate、捆绑、以及更多！
```

# Stylus选择器

## 缩进

Stylus 语法是 “python 式”的 （即，基于缩进）。**空格很重要**，所以我们使用_缩进_和_突出_来代替 `{` 和 `}`，如下所示：

```stylus
body
	color white
	background-color #34212b
```

编译为

```css
body{color:#fff;background-color:#34212b}
```

如果喜欢，可以使用冒号来分隔属性和值：

```stylus
div
	color:red
```

## 规则集

和 CSS 一样，Stylus 允许通过逗号分隔，一次为多个选择器定义属性。

```stylus
h2,p
	border 1px solid #ccc
```

也可以通过换行书写来实现：

```stylus
h2
p
	border 1px solid #ccc
```

都会编译为

```css
h2,p{border:1px solid #ccc}
```

此规则的唯一例外是看起来像属性的选择器。例如，以下 foo bar baz 可能是属性或选择器：

```stylus
foo bar baz
> input
  border 1px solid
```

由于上述原因（或者只是喜欢如此），我们可在末尾添加一个逗号：

```stylus
foo bar baz,
form input,
> a
  border 1px solid
```

## 父级引用

`&` 符号代表父级选择器。下面的例子中，（`textarea`和`input`）两个选择器的伪类`:hover`都会改变 `color` 属性。

```stylus
textarea
input
	color #A707A7
	&:hover
		color #002110
```

编译为：

```css
textarea,input{color:#a707a7}textarea:hover,input:hover{color:#002110}
```

下面的例子中，在`混入(mixin)`中使用父级引用为 IE 浏览器中的元素加了一个简单的 `2px` 的边框。

```stylus
box-shadow()
	-webkit-box-shadow arguments
	-moz-box-shadow arguments
	box-shadow arguments
	html.ie8 &,
	html.ie7 &,
	html.ie6 &
		border 2px solid arguments[length(arguments) - 1]

body
	#login
		box-shadow 1px 1px 3px #eee
```

```css
body #login{-webkit-box-shadow:1px 1px 3px #eee;-moz-box-shadow:1px 1px 3px #eee;box-shadow:1px 1px 3px #eee}html.ie8 body #login,html.ie7 body #login,html.ie6 body #login{border:2px solid #eee}
```

如果需要在选择器中单纯地使用`&`符，不使用其父级引用的功能，可以通过转义符`\`来转义：

```stylus
.foo[title*='\&']
// => .foo[title*='&']
```

## 消除歧义

类似`padding - n`的表达式可能既被解释成减法运算，也可能被释义成一元负号属性。为了避免这种歧义，用括号包裹表达式：

```stylus
pad(n)
  padding (- n)
body
  pad(5px)
```

```css
body{padding:-5px}
```

然而，只有在函数中才会这样（因为函数同时用返回值扮演混合或回调）。

例如，下面这个就是OK的（产生与上面相同的结果）：

```stylus
body
  padding -5px
```

有Stylus无法处理的属性值？`unquote()`可以帮你：

```stylus
filter unquote('progid:DXImageTransform.Microsoft.BasicImage(rotation=1)')
```

```css
filter progid:DXImageTransform.Microsoft.BasicImage(rotation=1)
```

# Stylus变量

## 变量

我们可以指定表达式为变量，然后在我们的样式中贯穿使用：

```stylus
font-size = 14px
body
	font font-size Arial,sans-seri
```

```css
body{font:14px Arial,sans-seri}
```

变量甚至可以组成一个表达式列表：

```stylus
font-size = 14px
font = font-size "Lucida Grande", Arial
body
	font font sans-serif sans-seri
```

```css
body{font:14px "Lucida Grande",Arial sans-serif sans-seri}
```

标识符（变量名，函数等），也可能包括`$`字符。例如：

```stylus
$font-size = 14px
body
	font $font-size Arial,sans-seri
```

## 属性查找

Stylus有另外一个很酷的独特功能，不需要分配值给变量就可以定义引用属性。下面是个很好的例子，元素水平垂直居中对齐（典型的方法是使用百分比和margin负值），如下：

```stylus
#logo
	position absolute
	background-color gray
	top 50%
	left 50%
	width w=150px
	height h=80px
	margin-left -(w/2)
	margin-top -(h/2)
```

```css
#logo{position:absolute;background-color:#808080;top:50%;left:50%;width:150px;height:80px;margin-left:-75px;margin-top:-40px}
```

我们不使用这里的变量`w`和`h`, 而是**简单地前置`@`字符在属性名前来访问该属性名对应的值**：

```stylus
#logo
	position absolute
	background-color gray
	top 50%
	left 50%
	width w=150px
	height h=80px
	margin-left -(@width/2)
	margin-top -(@height/2)
```

另外使用案例是基于其他属性有条件地定义属性。在下面这个例子中，我们默认指定`z-index`值为`1`，但是，**只有在`z-index`之前未指定的时候才这样**：

```stylus
position()
	position:arguments
	z-index 1 unless @z-index
#logo1
	position absolute
	z-index 20
#logo2
	position absolute
```

```css
#logo1{position:absolute;z-index:20}
#logo2{position:absolute;z-index:1}
```

属性会“向上冒泡”查找堆栈直到被发现，或者返回`null`（如果属性搞不定）。下面这个例子，`@color`被弄成了`blue`.

```stylus
body
  color: red
  ul
    li
      color: blue
      a
        background-color: @color
```

# Stylus 插值 

## 插值

Stylus支持通过使用`{}`字符包围表达式来插入值，其会变成标识符的一部分。例如，`-webkit-{'border' + '-radius'}`等同于`-webkit-border-radius`.

比较好的例子就是私有前缀属性扩展：

```stylus
vendor(prop,args)
	-webkit-{prop} args
	-moz-{prop} args
	{prop} args
border-radius()
	vendor("border-radius",arguments)
box-shadow()
	vendor("box-shadow",arguments)
button
	border-radius 1px 2px / 3px 4px
```

```css
button{-webkit-border-radius:1px 2px/3px 4px;-moz-border-radius:1px 2px/3px 4px;border-radius:1px 2px/3px 4px}
```

## 选择器插值

插值也可以在选择器上起作用。例如，我们可以指定表格前5行的高度，如下：

```stylus
table
	for row in 1 2 3 4 5
		tr:nth-child({row})
			height 10px \* row
```

```css
table tr:nth-child(1){height:10px * 1}table tr:nth-child(2){height:10px * 2}table tr:nth-child(3){height:10px * 3}table tr:nth-child(4){height:10px * 4}table tr:nth-child(5){height:10px * 5}
```

# Stylus 运算符

## 运算符优先级

下表运算符优先级，从最高到最低：

```
[]
! ~ + -
is defined
** * / %
+ -
... ..
<= >= < >
in
== is != is not isnt
is a
&& and || or
?:
= := ?= += -= *= /= %=
not
if unless
```

## 一元运算符

以下一元运算符可用，`!`, `not`, `-`, `+`, 以及`~`.

```stylus
!0
// => true
!!0
// => false
!1
// => false
!!5px
// => true
-5px
// => -5px
--5px
// => 5px
not true
// => false
not not true
// => true
```

逻辑运算符`not`的优先级较低，因此，下面这个例子可以替换：

```stylus
a = 0
b = 1
!a and !b
// => false
// 解析为: (!a) and (!b)

not a or b
// => false
// 解析为: not (a or b)
```

## 二元运算符

**下标运算符**`[]`允许我们通过索引获取表达式内部值。括号表达式可以充当元组（如`(15px 5px)`, `(1, 2, 3)`）。

下面这个例子使用错误处理的元组（并展示了该结构的多功能性）：

```stylus
add(a, b)
	if a is a 'unit' and b is a 'unit'
		a + b
	else
		(error 'a 和 b 必须是 units!')
body
	padding add(1,'5')
	// => padding: error "a 和 b 必须是 units";
	padding add(1,'5')[0]
	// => padding: error;
	padding add(1,'5')[0] == error
	// => padding: true;
	padding add(1,'5')[1]
	// => padding: "a 和 b 必须是 units";
```

这儿有个更复杂的例子。现在，我们调用内置的`error()`函数，当标识符（第一个值）等于`error`的时候返回错误信息。

```stylus
if (val = add(1,'5'))[0] == error
  error(val[1])
```

## 范围.. …

同时提供包含界线操作符(`..`)和范围操作符(`...`)，见下表达式：

```stylus
1..5
// => 1 2 3 4 5
1...5
// => 1 2 3 4
```

## 加减：+ -

二元加乘运算其单位会转化，或使用默认字面量值。例如，`5s - 2px`结果是`3s`.

```stylus
15px - 5px
// => 10px
5 - 2
// => 3
5in - 50mm
// => 3.031in
5s - 1000ms
// => 4s
20mm + 4in
// => 121.6mm
"foo " + "bar"
// => "foo bar"
"num " + 15
// => "num 15"
```

## 乘除：/ * %

```stylus
2000ms + (1s * 2)
// => 4000ms
5s / 2
// => 2.5s
4 % 2
// => 0
```

当在属性值内使用`/`时候，你必须用括号包住。否则`/`会根据其字面意思处理（支持CSS的`line-height`）。

```stylus
body
	font 14px/1.5
```

```css
body{font:14px/1.5}
```

但是，下面这个却等同于`14px` ÷ `1.5`:

```stylus
body
	font (14px/1.5)
```

```css
body{font:9.333333333333334px}
```

只有`/`操作符的时候需要这样。

## 指数：**

指数操作符：

```stylus
2 ** 8
// => 256
```

## 相等与关系运算：== != >= <= > <

相等运算符可以被用来等同单位、颜色、字符串甚至标识符。这是个强大的概念，甚至任意的标识符（例如`wahoo`）可以作为原子般使用。函数可以返回`yes`和`no`代替`true`和`false`（虽然不建议）。

```stylus
5 == 5
// => true
10 > 5
// => true
#fff == #fff
// => true
true == false
// => false
wahoo == yay
// => false
wahoo == wahoo
// => true
"test" == "test"
// => true
true is true
// => true
'hey' is not 'bye'
// => true
'hey' isnt 'bye'
// => true
(foo bar) == (foo bar)
// => true
(1 2 3) == (1 2 3)
// => true
(1 2 3) == (1 1 3)
// => false
```

只有精确值才匹配，例如，`0 == false`和`null == false`均返回`false`.

别名：

```stylus
==    is
!=    is not
!=    isnt
```

## 真与假

Stylus近乎一切都是`true`, 包括有后缀的单位，甚至`0%`, `0px`等都被认作`true`.

不过，`0`在算术上本身是`false`.

表达式（或“列表”）长度大于1被认为是真。

`true`例子：

```stylus
0% 
0px
1px 
-1
-1px
hey
'hey'
(0 0 0)
('' '')
```

`false`例子：

```stylus
0 
null
false
''
```

## 逻辑操作符：&& || 和 or

逻辑操作符`&&`和`||`别名是`and` / `or`。它们优先级相同。

```stylus
5 && 3
// => 3
0 || 5
// => 5
0 && 5
// => 0
#fff is a 'rgba' and 15 is a 'unit'
// => true
```

## 存在操作符：in

检查左边内容是否在右边的表达式中。

简单的例子：

```stylus
nums = 1 2 3
1 in nums
// => true
5 in nums
// => false
```

一些未定义标识符：

```stylus
words = foo bar baz
bar in words
// => true
HEY in words
// => false
```

元组同样适用：

```stylus
vals = (error 'one') (error 'two')
error in vals
// => false
(error 'one') in vals
// => true
(error 'two') in vals
// => true
(error 'something') in vals
// => false
```

混合书写适用例子：

```stylus
pad(types = padding, n=5px)
	if padding in types
		padding n
	if margin in types
		margin n

body
	pad()
body
	pad(margin)
body
	pad(padding margin, 10px)
```

```css
body{padding:5px}
body{margin:5px}
body{padding:10px;margin:10px}
```

## 条件赋值：?= :=

条件赋值操作符`?=`（别名`?:`）让我们无需破坏旧值（如果存在）定义变量。该操作符可以扩展成三元内`is defined`的二元操作。

例如，下面这些都是平起平坐的：

```stylus
color := white
color ?= white
color = color is defined ? color : white
```

如果我们使用等号`=`, 就只是简单地赋值。

```stylus
color = white
color = black
color
// => black
```

**但当使用`?=`，第二个相当就嗝屁了（**因为变量已经定义了）：

```stylus
color = white
color ?= black
color
// => white
```

## 实例检查：is a

Stylus提供一个二元运算符叫做`is a`, 用做类型检查。

```stylus
15 is a 'unit'
// => true
#fff is a 'rgba'
// => true
15 is a 'rgba'
// => false
```

另外，我们可以使用`type()`这个内置函数。

```stylus
type(#fff) == 'rgba'
// => true
```

**注意：`color`是唯一的特殊情况**，当左边是`RGBA`或者`HSLA`节点时，都为`true`.

## 变量定义：is defined

此伪二元运算符右边空荡荡，左边无计算。用来检查变量是否已经分配了值。

```stylus
foo is defined
// => false
foo = 15px
foo is defined
// => true
#fff is defined
// => 'invalid "is defined" check on non-variable #fff'
```

另外，我们可以使用内置**lookup(name)**方法做这个活动态查找。

```stylus
name = 'blue'
lookup('light-' + name)
// => null
light-blue = #80e2e9
lookup('light-' + name)
// => #80e2e9
```

该操作符必不可少，因为一个未定义的标识符仍是真值。如：

```stylus
body
  if ohnoes
    padding 5px
```

当未定义的时候，产生的是下面的CSS：

```css
body{padding:5px}
```

显然，**这不是我们想要的**，如下书写就安全了：

```stylus
body
  if ohnoes is defined
    padding 5px
```

## 三元

三元运算符的运作正如大部分语言里面的那样。三个操作对象的操作符（条件表达式、真表达式以及假表达式）。

```stylus
num = 15
num ? unit(num, 'px') : 20px
// => 15px
```

## 铸造

作为替代简洁的内置`unit()`函数，语法`(expr) unit`可用来强制后缀。

```stylus
body
  n = 5
  foo: (n)em
  foo: (n)%
  foo: (n + 5)%
  foo: (n \* 5)px
  foo: unit(n + 5, '%')
  foo: unit(5 + 180 / 2, deg)
```

## 颜色操作

颜色操作提供了一个简洁，富有表现力的方式来改变其组成。例如，我们可以对每个RGB：

```stylus
#0e0 + #0e0
// => #0f0
```

另外一个例子是**通过增加或减少百分值调整颜色亮度**。颜色亮，加；暗，则减。

```stylus
#888 + 50%
// => #c3c3c3
#888 - 50%
// => #444
```

我们也**可以通过增加或减去色度调整色调**。例如，红色增加`65deg`就变成了黄色。

```stylus
#f00 + 50deg
// => #ffd500
```

值适当固定。例如，我们可以"旋转"180度的色调，如果目前的值是`320deg`, 将变成`140deg`.

我们也可能一次调整几个值（包括alpha），通过使用`rgb()`, `rgba()`, `hsl()`, 或 `hsla()`:

```stylus
#f00 - rgba(100,0,0,0.5)
// => rgba(155,0,0,0.5)
```

## 格式化字符串

**格式化字符串模样的字符串`%`可以用来生成字面量值**，通过传参给内置`s()`方法。

```stylus
'X::Microsoft::Crap(%s)' % #fc0
// => X::Microsoft::Crap(#fc0)
多个值需要括起来：
'-webkit-gradient(%s, %s, %s)' % (linear (0 0) (0 100%))
// => -webkit-gradient(linear, 0 0, 0 100%)
```

# Stylus  Mixins

## 混入

混入和函数定义方法一致，但是应用却大相径庭。

例如，下面有定义的`border-radius(n)`方法，其却作为一个_mixin_（如，作为状态调用，而非表达式）调用。

当`border-radius()`选择器中调用时候，属性会被扩展并复制在选择器中。

```stylus
border-radius(n)
  -webkit-border-radius n
  -moz-border-radius n
  border-radius n
from input[type=button]
  border-radius(5px)
```

```css
from input[type=button]{-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px}
```

使用**混入书写**，你可以完全忽略括号，提供梦幻般私有属性的支持。

```stylus
border-radius(n)
  -webkit-border-radius n
  -moz-border-radius n
  border-radius n
from input[type=button]
  border-radius 5px
```

注意到我们混合书写中的`border-radius`当作了属性，而不是一个递归函数调用。

更进一步，我们可以**利用`arguments`这个局部变量**，传递可以包含多值的表达式。

```stylus
border-radius()
  -webkit-border-radius arguments
  -moz-border-radius arguments
  border-radius arguments
from input[type=button]
  border-radius 5px
```

现在，我们可以像这样子传值：`border-radius 1px 2px / 3px 4px`!

另外一个很赞的应用是特定的私有前缀支持——例如IE浏览器的透明度：

```stylus
support-for-ie ?= true

opacity(n)
  opacity n
  if support-for-ie
    filter unquote('progid:DXImageTransform.Microsoft.Alpha(Opacity=' + round(n * 100) + ')')

#logo
  background-color blue
  width 200px
  height 200px
  &:hover
    opacity 0.5
```

```css
#logo{background-color:#00f;width:200px;height:200px}#logo:hover{opacity:.5;filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=50)}
```

## 父级引用

混合书写可以利用父级引用字符`&`, 继承父业而不是自己筑巢。

例如，我们要用`stripe(even, odd)`创建一个条纹表格。`even`和`odd`均提供了默认颜色值，每行也指定了`background-color`属性。我们可以在`tr`嵌套中使用`&`来引用`tr`，以提供`even`颜色。

```stylus
stripe(even = #fff, odd = #eee)
  tr
    background-color odd
    &.even
    &:nth-child(even)
      background-color even

table
  stripe()
  td
    padding 4px 10px

table#users
  stripe(#303030, #494848)
  td
    color white
```

```css
table tr{background-color:#eee}table tr.even,table tr:nth-child(even){background-color:#fff}table td{padding:4px 10px}

table#users tr{background-color:#494848}table#users tr.even,table#users tr:nth-child(even){background-color:#303030}table#users td{color:#fff}
```

```html
<div>
	<table id="users">
		<tr><td>A</td><td>1</td></tr>
		<tr><td>A</td><td>2</td></tr>
		<tr><td>A</td><td>3</td></tr>
		<tr><td>A</td><td>4</td></tr>
		<tr><td>A</td><td>5</td></tr>
		<tr><td>A</td><td>6</td></tr>
	</table>
</div>
```

另外，`stripe()`的定义无需父引用：

```stylus
stripe(even = #fff, odd = #eee)
  tr
    background-color odd
  tr.even
  tr:nth-child(even)
    background-color even
```

如果你愿意，你可以把`stripe()`当作属性调用。

```stylus
stripe #fff #000
```

## 混合书写中的混合书写

自然，混合书写可以利用其它混合书写，建立在它们自己的属性和选择器上。

例如，下面我们创建内联`comma-list()`（通过`inline-list()`）以及逗号分隔的无序列表。

```stylus
inline-list()
  li
    display inline

comma-list()
  inline-list()
  li
    &:after
      content ", "
    &:last-child:after
      content ""

ul
  comma-list()
```

```css
ul li{display:inline}ul li:after{content:", "}ul li:last-child:after{content:""}
```

```html
<div>
	<ul>
		<li>A</li>
		<li>B</li>
		<li>C</li>
		<li>D</li>
	</ul>
</div>
```

# Stylus函数

## 函数

Stylus强大之处就在于其内置的语言函数定义。其定义与混入(mixins)一致；却可以返回值。

## 返回值

很简单的例子，两数值相加的方法：

```stylus
add(a, b)
  a + b
```

我们可以在特定条件下使用该方法，如在属性值中：

```stylus
body 
  padding add(10px, 5)
```

```css
body{padding:15px}
```

## 默认参数

可选参数往往有个默认的给定表达。在Stylus中，我们甚至可以**超越默认参数**。

```stylus
add(a,b=a)
  a+b

body
  padding add(10px,5)
  margin add(10px)
```

```css
body{padding:15px;margin:20px}
```

注意：因为参数默认是赋值，我们可可以使用函数调用作为默认值。

```stylus
add(a,b=unit(a,px))
  a+b

body
  padding add(10px,5)
  margin add(10)
```

## 函数体

我们可以把简单的`add()`方法更进一步。**通过内置`unit()`把单位都变成`px`**, 因为赋值在每个参数上，因此，我们可以无视单位换算。

```stylus
add(a,b=a)
  a=unit(a,px)
  b=unit(b,px)
  a+b

body
  padding add(15%,10deg)
  margin add(10em)
```

```css
body{padding:25px;margin:20px}
```

## 多个返回值

Stylus的函数可以返回多个值，就像你给变量赋多个值一样。

例如，下面就是一个有效赋值：

```stylus
sizes = 15px 10px
sizes[0]
// => 15px
```

类似的，我们可以在函数中返回多个值：

```stylus
sizes()
 15px 10px
sizes()[0]
// => 15px
```

有个小小的例外就是返回值是标识符。例如，下面看上去像一个属性赋值给Stylus（因为没有操作符）。

```stylus
swap(a, b)
  b a
```

为避免歧义，我们可以使用括号，或是`return`关键字。

```stylus
swap(a, b)
  (b a)
swap(a, b)
  return b a
```

## 条件

比方说，我们想要创建一个名为`stringish()`的函数，用来决定参数是否是字符串。我们检查`val`是否是字符串或缩进（类似字符）。如下，使用`yes`和`no`代替`true`和`false`.

```stylus
stringish(val)
  if val is a 'string' or val is a 'ident'
    yes
  else
    no

stringish('yay') == yes
// => true
stringish(yay) == yes
// => true
stringish(0) == no
// => true
```

注意：`yes`和`no`并不是布尔值。本例中，它们只是简单的未定义标识符。

另外一个例子：

```stylus
compare(a, b)
  if a > b
    higher
  else if a < b
    lower
  else
    equal

compare(5, 2)
// => higher
compare(1, 5)
// => lower
compare(10, 10)
// => equal
```

## 别名

给函数起个别名，和简单，直接等于就可以了。例如上面的`add()`弄个别名`plus()`, 如下：

```stylus
plus = add
plus(1, 2)
// => 3
```

## 变量函数

我们可以把函数当作变量传递到新的函数中。例如，`invoke()`接受函数作为参数，因此，我们可以传递`add()`以及`sub()`.

```stylus
invoke(a, b, fn)
  fn(a, b)
add(a, b)
  a + b
sub(a, b)
  a - b

body
  padding invoke(5, 10, add)
  padding invoke(5, 10, sub)
```

```css
body{padding:15;padding:-5}
```

## 参数

`arguments`是所有函数体都有的局部变量，包含传递的所有参数。

```stylus
sum()
  n=0
  for num in arguments
    n=n + num

body
  padding sum(1,2,3,4,5)
  margin sum(2,3,4)
```

```css
body{padding:15;margin:9}
```

## 哈希示例

下面，我们定义`get(hash, key)`方法，用来返回`key`值或`null`. 我们遍历每个键值对，如果键值匹配，返回对应的值。

```stylus
get(hash,key)
  return pair[1] if pair[0]==key for pair in hash

```

下面例子可以证明，语言函数模样的Stylus表达式具有更大的灵活性。

```stylus
get(hash,key)
  return pair[1] if pair[0]==key for pair in hash

hash=(one 1) (two 2) (three 3)
body
  padding get(hash,one) get(hash,two) get(hash,three) 5
  margin get(hash,one) get(hash,two) get(hash,three) 0
```

```css
body{padding:1 2 3 5;margin:1 2 3 0}
```

```stylus
get(hash, something)
// => null
```

# Stylus 关键字参数

Stylus支持关键字参数，或"kwargs". 允许你根据相关参数名引用参数。

下面这些例子功能上都是一样的。但是，我们可以在列表中的任何地方放置关键字参数。其余不键入参数将适用于尚未得到满足的参数。

```stylus
body {
  color: rgba(255, 200, 100, 0.5);
  color: rgba(red: 255, green: 200, blue: 100, alpha: 0.5);
  color: rgba(alpha: 0.5, blue: 100, red: 255, 200);
  color: rgba(alpha: 0.5, blue: 100, 255, 200);
}
```

```css
body{color:rgba(255,200,100,0.5);color:rgba(255,200,100,0.5);color:rgba(255,200,100,0.5);color:rgba(255,200,100,0.5)}
```

查看函数或混合书写中接受的参数，可以使用`p()`方法。

```stylus
p(rgba)
```

生成：

```stylus
inspect: rgba(red, green, blue, alpha)
```

# Stylus 内置方法

## 颜色方法

| 函数              | 作用                        | 例子                                              |
| ----------------- | --------------------------- | ------------------------------------------------- |
| red(color)        | 返回`color`中的红色比重。   | `red(#c00)` `// => 204`                           |
| green(color)      | 返回`color`中的绿色比重。   | `green(#0c0)` `// => 204`                         |
| blue(color)       | 返回`color`中的蓝色比重。   | `red(#00c)` `// => 204`                           |
| alpha(color)      | 返回`color`中的透明度比重。 | `alpha(#fff)` `// => 1`                           |
| dark(color)       | 检查`color`是否是暗色。     | `dark(black)` `// => true`                        |
| light(color)      | 检查`color`是否是亮色。     | `light(#00FF40)` `// => true`                     |
| hue(color)        | 返回给定`color`的色调。     | `hue(hsla(50deg, 100%, 80%))` `// => 50deg`       |
| saturation(color) | 返回给定`color`的饱和度。   | `saturation(hsla(50deg, 100%, 80%))` `// => 100%` |
| lightness(color)  | 返回给定`color`的亮度。     | `lightness(hsla(50deg, 100%, 80%))` `// => 80%`   |
|                   |                             |                                                   |
|                   |                             |                                                   |
|                   |                             |                                                   |
|                   |                             |                                                   |
|                   |                             |                                                   |
|                   |                             |                                                   |
|                   |                             |                                                   |
|                   |                             |                                                   |
|                   |                             |                                                   |
|                   |                             |                                                   |

## push(expr, args…)

后面推送给定的`args`给`expr`.  别名为`append()`.

```stylus
nums = 1 2
push(nums, 3, 4, 5)
nums
// => 1 2 3 4 5
```

## unshift(expr, args…)

起始位置插入给定的`args`给`expr`.  别名为`prepend()`.

```stylus
nums = 4 5
unshift(nums, 3, 2, 1)
nums
// => 1 2 3 4 5
```

## keys(pairs)

返回给定`pairs`中的键。

```stylus
pairs = (one 1) (two 2) (three 3)
keys(pairs)
// => one two three
```

## values(pairs)

返回给定`pairs`中的值。

```stylus
pairs = (one 1) (two 2) (three 3)
values(pairs)
// => 1 2 3
```

## typeof(node)

字符串形式返回`node`类型。 别名有`type-of`和`type`.

```stylus
type(12)
// => 'unit'
typeof(12)
// => 'unit'
typeof(#fff)
// => 'rgba'
type-of(#fff)
// => 'rgba'
```

## unit(unit[, type])

**返回`unit`类型的字符串或空字符串**，或者赋予`type`值而无需单位转换。

```stylus
unit(10)
// => ''
unit(15in)
// => 'in'
unit(15%, 'px')
// => 15px
unit(15%, px)
// => 15px
```

## match(pattern, string)

检测`string`是否匹配给定的`pattern`.

```stylus
match('^foo(bar)?', 'foo')
match('^foo(bar)?', 'foobar')
// => true
match('^foo(bar)?', 'bar')
// => false
```

## 数学方法

| 函数        | 作用           | 例子                                                     |
| ----------- | -------------- | -------------------------------------------------------- |
| abs(unit)   | 绝对值。       | `abs(-5px)` `// => 5px`                                  |
| ceil(unit)  | 向上取整。     | `ceil(5.5in)` `// => 6in`                                |
| floor(unit) | 向下取整。     | `floor(5.6px)` `// => 5px`                               |
| round(unit) | 四舍五入取整。 | `round(5.5px)` `// => 6px` `` `round(5.4px)` `// => 5px` |
| min(a, b)   | 取较小值。     | `min(1, 5)` `// => 1`                                    |
| max(a, b)   | 取较大值。     | `max(1, 5)` `// => 5`                                    |
| even(unit)  | 是否为偶数。   | `even(6px)` `// => true`                                 |
| add(unit)   | 是否为奇数。   | `odd(5mm)` `// => true`                                  |
| sum(nums)   | 求和。         | `sum(1 2 3)` `// => 6`                                   |
| avg(nums)   | 求平均数。     | `avg(1 2 3)` `// => 2`                                   |

## join(delim, vals…)

给定`vals`使用`delim`连接。

```stylus
join(' ', 1 2 3)
// => "1 2 3"
join(',', 1 2 3)
// => "1,2,3"
join(', ', foo bar baz)
// => "foo, bar, baz"
join(', ', foo, bar, baz)
// => "foo, bar, baz"
join(', ', 1 2, 3 4, 5 6)
// => "1 2, 3 4, 5 6"
```

## hsla(color | h,s,l,a)

转换给定`color`为`HSLA`节点，或h,s,l,a比重值。

```stylus
body
  color hsla(10deg, 50%, 30%, 0.5)
  background-color hsla(#ffcc00)
```

```css
body{color:rgba(115,51,38,0.5);background-color:#fc0}
```

## hsl(color | h,s,l)

转换给定`color`为`HSLA`节点，或h,s,l比重值。

```stylus
body
  color hsl(10, 50, 30)
  background-color hsl(#ffcc00)
  border-color rgba(#ffcc00, 0.5)
```

```css
body{color:#733326;background-color:#fc0;border-color:rgba(255,204,0,0.5)}
```



## rgba(color | r,g,b,a)

从r,g,b,a通道返回`RGBA`, 或提供`color`来调整透明度。

```stylus
body
  color rgba(255,0,0,0.5)
  background-color rgba(255,0,0,1)
  border-color rgba(#ffcc00, 0.5)
```

```css
body{color:rgba(255,0,0,0.5);background-color:#f00;border-color:rgba(255,204,0,0.5)}
```

另外，stylus支持`#rgba`以及`#rrggbbaa`符号。

```stylus
#fc08
// => rgba(255,204,0,0.5)
#ffcc00ee
// => rgba(255,204,0,0.9)
```

## rgb(color | r,g,b)

从r,g,b通道返回`RGBA`或生成一个`RGBA`节点。

```stylus
rgb(255,204,0)
// => #ffcc00
rgb(#fff)
// => #fff
```

## lighten(color, amount)

给定`color`增亮`amount`值。该方法单位敏感，例如，支持百分比，如下：

```stylus
body
  color lighten(#2c2c2c, 30)
  background-color lighten(#2c2c2c, 30%)
  border-color black
```

```css
body{color:#787878;background-color:#6b6b6b;border-color:#000}
```

## darken(color, amount)

给定`color`变暗`amount`值。该方法单位敏感，例如，支持百分比，如下：



```stylus
body
  color darken(#D62828, 30)
  background-color darken(#D62828, 30%)
  border-color black
```

```css
body{color:#551010;background-color:#961c1c;border-color:#000}
```

## desaturate(color, amount)

给定`color`饱和度减小`amount`.

```stylus
desaturate(#f00, 40%)
// => #c33
```

## saturate(color, amount)

给定`color`饱和度增加`amount`.

```stylus
body
  color saturate(#c33, 40%)
  background-color desaturate(#f00, 40%)
  border-color black
```

```css
body{color:#eb1414;background-color:#c33;border-color:#000}
```

## invert(color)

颜色反相。红绿蓝颜色反转，透明度不变。

```stylus
body
  color invert(#00eeff)
  background-color invert(#ff00ee)
  border-color black
```

```css
body{color:#f10;background-color:#0f1;border-color:#000}
```

## unquote(str | ident)

给定`str`引号去除，返回`Literal`节点。

```stylus
unquote("sans-serif")
// => sans-serif
unquote(sans-serif)
// => sans-serif
unquote('1px / 2px')
// => 1px / 2px
```

## s(fmt, …)

`s()`方法类似于`unquote()`，不过后者返回的是`Literal`节点，而这里起接受一个格式化的字符串，非常像C语言的`sprintf()`. **目前，唯一标识符是`%s`**.

```stylus
s('bar()');
// => bar()
s('bar(%s)', 'baz');
// => bar("baz")
s('bar(%s)', baz);
// => bar(baz)
s('bar(%s)', 15px);
// => bar(15px)
s('rgba(%s, %s, %s, 0.5)', 255, 100, 50);
// => rgba(255, 100, 50, 0.5)
s('bar(%Z)', 15px);
// => bar(%Z)
s('bar(%s, %s)', 15px);
// => bar(15px, null)
```

## operate(op, left, right)

在`left`和`right`操作对象上执行给定的`op`.

```stylus
op = '+'
operate(op, 15, 5)
// => 20
```

## length([expr])

括号表达式扮演元组，`length()`方法返回该表达式的长度。

```stylus
length((1 2 3 4))
// => 4
length((1 2))
// => 2
length((1))
// => 1
length(())
// => 0
length(1 2 3)
// => 3
length(1)
// => 1
length()
// => 0
```

## warn(msg)

使用给定的`error`警告，并不退出。

```stylus
warn("oh noes!")
```

## error(msg)

伴随着给定的错误`msg`退出。

```stylus
add(a, b)
  unless a is a 'unit' and b is a 'unit'
    error('add() expects units')
  a + b
```

## last(expr)

返回给定`expr`的最后一个值。

```stylus
nums = 1 2 3
last(nums)
last(1 2 3)
// => 3
list = (one 1) (two 2) (three 3)
last(list)
// => (three 3)
```

## p(expr)

```stylus
fonts = Arial, sans-serif
p('test')
p(123)
p((1 2 3))
p(fonts)
p(#fff)
p(rgba(0,0,0,0.2))
add(a, b)
  a + b
p(add)
```

标准输出：

```stylus
inspect: 'test'
inspect: 123
inspect: 1 2 3
inspect: (Arial), (sans-serif)
inspect: #fff
inspect: rgba(0,0,0,0.2)
inspect: add(a, b)
```

## opposite-position(positions)

返回给定`positions`相反内容。

```stylus
opposite-position(right)
// => left
opposite-position(top left)
// => bottom right
opposite-position('top' 'left')
// => bottom right
```

## image-size(path)

返回指定`path`图片的`width`和`height`. 向上查找路径的方法和`@import`一样，`paths`设置的时候改变。

```stylus
width(img)
  return image-size(img)\[0\]
height(img)
  return image-size(img)\[1\]
image-size('tux.png')
// => 405px 250px
image-size('tux.png')\[0\] == width('tux.png')
// => true
```

## add-property(name, expr)

使用给定的`expr`**为最近的块域添加属性`name`**。

```stylus
something()
  add-property('bar', 1 2 3)
  s('baz')

body
  foo: something()

```

```css
body{bar:1 2 3;foo:baz}
```

接下来，“神奇”的`current-property`局部变量将大放异彩，这个变量自动提供给函数体，且包含当前属性名和值的表达式。

例如，我们使用`p()`检查这个局部变量，我们可以得到：

```stylus
p(current-property)
// => "foo" (foo __CALL__ bar baz)
p(current-property[0])
// => "foo"
p(current-property[1])
// => foo __CALL__ bar baz
```

使用`current-property`我们可以让例子走得更远点，使用新值复制该属性，且确保功能的条件仅在属性值中使用。

```stylus
something(n)
  if current-property
    add-property(current-property[0], s('-webkit-something(%s)', n))
    add-property(current-property[0], s('-moz-something(%s)', n))
    s('something(%s)', n)
  else
    error('something() must be used within a property')
body {
  foo: something(15px) bar;
}
```

```css
body{foo:-webkit-something(15px);foo:-moz-something(15px);foo:something(15px) bar}
```

如果你注意上面这个例子，会发现`bar`只在一开始调用的时候出现，因为我们返回`something(15px)`, 其仍留在表达式里，然而，其他人并不重视其余的表达式。

更强大的解决方案如下，定义一个名为`replace()`的函数，其克隆表达式，以防止出现变化，用另外一个替换表达式的字符串值，并返回克隆的表达式。然后我们继续在表达式中替换`__CALL__`，表示循环调用`something()`.

```stylus
replace(expr, str, val)
  expr = clone(expr)
  for e, i in expr
    if str == e
      expr[i] = val
  expr
something(n)
  if current-property
    val = current-property[1]
    webkit = replace(val, '__CALL__', s('-webkit-something(%s)', n))
    moz = replace(val, '__CALL__', s('-moz-something(%s)', n))
    add-property(current-property[0], webkit)
    add-property(current-property[0], moz)
    s('something(%s)', n)
  else
    error('something() 必须在属性中使用')

body {
  foo: something(15px) bar baz;
}
```

```css
body{foo:-webkit-something(15px) bar baz;foo:-moz-something(15px) bar baz;foo:something(15px) bar baz}
```

无论是内部调用的使用还是调用的位置上，我们实现的方法现在是完全透明的了。这个强大概念有助于在一些私有属性使用时调用，例如渐变。

## 未定义方法

未定义方法一字面量形式输出。例如，我们可以在CSS中调用`rgba-stop(50%, #fff)`, 其会按照你所期望的显示，我们也可以使用这些内部助手。

下面这个例子中我们简单定义了方法`stop()`, 其返回了字面上`rgba-stop()`调用。

```stylus
stop(pos, rgba)
  rgba-stop(pos, rgba)
stop(50%, orange)
// => rgba-stop(50%, #ffa500)
```

# Stylus 其余参数

## 其余参数

Stylus支持`name...`形式的其余参数。这些参数可以消化传递给混写或函数的参数们。这在处理浏览器私有属性，如`-moz`或`-webkit`的时候很管用。

下面这个例子中，所有的参数们(1px, 2px, …)都被一个`args`参数给简单消化了：

```stylus
box-shadow(args...)
  -webkit-box-shadow args
  -moz-box-shadow args
  box-shadow args

#logo
  box-shadow 1px 2px 5px #eee
```

```css
#logo{-webkit-box-shadow:1px 2px 5px #eee;-moz-box-shadow:1px 2px 5px #eee;box-shadow:1px 2px 5px #eee}
```

我们想指定特定的参数，如`x-offset`，我们可以使用`args[0]`, 或者，我们可能希望重新定义混入。

```stylus
box-shadow(offset-x,args...)
  got-offset-x offset-x
  -webkit-box-shadow offset-x args
  -moz-box-shadow offset-x args
  box-shadow offset-x args

#logo
  box-shadow 1px 2px 5px #eee
```

```css
#logo{got-offset-x:1px;-webkit-box-shadow:1px 2px 5px #eee;-moz-box-shadow:1px 2px 5px #eee;box-shadow:1px 2px 5px #eee}
```

## 参数们

`arguments`变量可以实现表达式的精确传递，包括逗号等等。这可以弥补`args...`参数的一些不足，见下面的例子：

```stylus
box-shadow(args...)
  -webkit-box-shadow args
  -moz-box-shadow args
  box-shadow args
#login
  box-shadow #ddd 1px 1px, #eee 2px 2px 
```

结果

```css
#login{-webkit-box-shadow:#ddd 1px 1px,#eee 2px 2px;-moz-box-shadow:#ddd 1px 1px,#eee 2px 2px;box-shadow:#ddd 1px 1px,#eee 2px 2px}
```

我们现在使用`arguments`重新定义这个混合书写。

```stylus
box-shadow()
  -webkit-box-shadow arguments
  -moz-box-shadow arguments
  box-shadow arguments
body
  box-shadow #ddd 1px 1px, #eee 2px 2px
```

```css
body{-webkit-box-shadow:#ddd 1px 1px,#eee 2px 2px;-moz-box-shadow:#ddd 1px 1px,#eee 2px 2px;box-shadow:#ddd 1px 1px,#eee 2px 2px}
```

# Stylus 注释

## 注释

Stylus支持三种注释，单行注释，多行注释，以及多行缓冲注释。

## 单行注释

跟JavaScript一样，双斜杠，CSS中不输出。

```stylus
// 我是注释!
body
  padding 5px // 蛋疼的padding
```

```css
body{padding:5px}
```

## 多行注释

多行注释看起来有点像CSS的常规注释。然而，**它们只有在`compress`选项未启用的时候才会被输出。**

```stylus
/*
 * 多行注释,它们只有在compress选项未启用的时候才会被输出。
 */
add(a, b)
  a + b
body
  padding add(3,2)
```

```sh
 stylus --compress src/
```

```css
body{padding:5}
```

```bash
stylus src/
```

```css
/*
 * 多行注释,它们只有在compress选项未启用的时候才会被输出。
 */
body {
  padding: 5;
}

```

## 多行缓冲注释

跟多行注释类似，不同之处在于开始的时候，**这里是`/*!`. 这个相当于告诉Stylus压缩的时候这段无视直接输出。**

```stylus
/*!
 * 多行缓冲注释,告诉Stylus压缩的时候这段无视直接输出。
 */
add(a, b)
  a + b
body
  padding add(3,2)
```

```css
/*
 * 多行缓冲注释,告诉Stylus压缩的时候这段无视直接输出。
 */
body{padding:5}
```

# Stylus 条件 

## 条件

条件提供了语言的流控制，否则就是纯粹的静态语言。提供的条件有导入、混入、函数以及更多。

## if / else if / else

跟一般的语言一致，`if`表达式满足(`true`)的时候执行后面语句块，否则，继续后面的`else if`或`else`.

下面这个例子，根据overload的条件，决定是使用`padding`还是`margin`.

```stylus
overload-padding = true
if overload-padding
  padding(y, x)
    margin y x
body
  padding 5px 10px
```

另外的`box()`帮手：

```stylus
box(x, y, margin-only = false)
  if margin-only
    margin y x
  else
    padding y x
```

## 除非(unless)

熟悉Ruby程序语言的用户应该都知道`unless`条件，**其基本上与`if`相反**，本质上是`(!(expr))`.

下面这个例子中，如果`disable-padding-override`是`undefined`或`false`, `padding`将被干掉，显示`margin`代替之。但是，如果是`true`, `padding`将会如期继续输出`padding 5px 10px`.

```stylus
disable-padding-override = false
unless disable-padding-override is defined and disable-padding-override
  padding(x, y)
    margin y x
body
  padding 5px 10px
```

```css
body{margin:10px 5px}
```

## 后缀条件

Stylus支持后缀条件，这就意味着`if`和`unless`可以当作操作符；当右边表达式为真的时候执行左边的操作对象。

例如，我们定义`negative()`来执行一些基本的检查。下面我们使用块式条件：

```stylus
negative(n)
  unless n is a 'unit'
    error('无效数值')
  if n < 0
    yes
  else
    no
```

接下来，我们利用后缀条件让我们的方法简洁。

```stylus
negative(n)
  error('无效数值') unless n is a 'unit'
  return yes if n < 0
  no
```

当然，我们可以更进一步。如这个`n < 0 ? yes : no`可以用布尔代替：`n < 0`.

后缀条件适用于大多数的单行语句。如，`@import`, `@charset`, 混合书写等。当然，下面所示的属性也是可以的：

```stylus
pad(types = margin padding, n = 5px)
  padding unit(n, px) if padding in types
  margin unit(n, px) if margin in types
body
  pad()
body
  pad(margin)
body
  apply-mixins = true
  pad(padding, 10) if apply-mixins
```

```css
body{padding:5px;margin:5px}body{margin:5px}body{padding:10px}
```

# Stylus 迭代

## 迭代

Stylus允许你通过`for/in`对表达式进行迭代形式如下：

```
for <val-name> [, <key-name>] in <expression>
```

```stylus
body
  for num in 1 2 3
    foo num
```

```css
body{foo:1;foo:2;foo:3}
```

```stylus
body
  fonts = Impact Arial sans-serif
  for font, i in fonts
    foo i font
```

```css
body{foo:0 Impact;foo:1 Arial;foo:2 sans-serif}
```

## 混合书写(Mixins)

我们可以在混写中使用循环实现更强大的功能，例如，我们可以把表达式对作为使用插值和循环的属性。

下面，我们定义`apply()`, 利用所有的`arguments`，这样逗号分隔以及表达式列表都会支持。

```stylus
apply(props)
  props=arguments if length(arguments)>1
  for prop in props
    {prop[0]} prop[1]

body
  apply(one 1, two 2, three 3)
body
  list = (A 1) (B 2) (C 3)
  apply(list)
```

```css
body{one:1;two:2;three:3}
body{A:1;B:2;C:3}
```

## 函数(Functions)

Stylus函数同样可以包含for循环。下面就是简单使用示例：

```stylus
join(delim, args)
  buf = ''
  for arg, index in args
    if index
      buf += delim + arg
    else
      buf += arg
join(', ', foo bar baz)
// => "foo, bar, baz"
```

## 后缀(Postfix)

就跟`if`/`unless`可以利用后面语句一样，`for`也可以。如下后缀解析的例子：

```stylus
sum(nums)
  sum = 0
  sum += n for n in nums
join(delim, args)
  buf = ''
  buf += i ? delim + arg : arg for arg, i in args
```

我们也可以从循环返回，下例子就是`n % 2 == 0`为`true`的时候返回数值。

```stylus
first-even(nums)
  return n if n % 2 == 0 for n in nums
first-even(1 3 5 5 6 3 2)
// => 6
```

# Stylus @import

## 导入

Stylus支持字面@import CSS, 也支持其他Stylus样式的动态导入。

## 字面CSS

任何`.css`扩展的文件名将作为字面量。例如：

```stylus
@import "reset.css"
```

```css
@import "reset.css";
```

## Stylus导入

当使用@import没有`.css`扩展，会被认为是Stylus片段（如：`@import "mixins/border-radius"`）。

@import工作原理为：遍历目录队列，并检查任意目录中是否有该文件（类似node的`require.paths`）。该队列默认为单一路径，从`filename`选项的`dirname`衍生而来。 因此，如果你的文件名是`/tmp/testing/stylus/main.styl`，导入将显现为`/tmp/testing/stylus/`。

@import也支持索引形式。这意味着当你`@import blueprint`, 则会理解成`blueprint.styl`或`blueprint/index.styl`. 对于库而言，这很有用，既可以展示所有特征与功能，同时又能导入特征子集。

如下很常见的库结构：

```
./tablet
  |-- index.styl 
  |-- vendor.styl 
  |-- buttons.styl 
  |-- images.styl 
```

下面这个例子中，我们设置`paths`选项用来为Stylus提供额外路径。在`./test.styl`中，我们可以`@import "mixins/border-radius"`或`@import "border-radius"`（因为`./mixins` 暴露给了Stylus）。

```js
/**
  * 依赖模块
  */
var stylus = require('../')
  , str = require('fs').readFileSync(__dirname + '/test.styl', 'utf8');
var paths = [
    __dirname
  , __dirname + '/mixins'
];
stylus(str)
  .set('filename', __dirname + '/test.styl')
  .set('paths', paths)
  .render(function(err, css){
    if (err) throw err;
    console.log(css);
  });
```

## JavaScript导入API

当使用`.import(path)`方法，这些导入是被推迟的，直到赋值。

```js
var stylus = require('../')
  , str = require('fs').readFileSync(__dirname + '/test.styl', 'utf8');
stylus(str)
  .set('filename', __dirname + '/test.styl')
  .import('mixins/vendor')
  .render(function(err, css){
  if (err) throw err;
  console.log(css);
});
```

下面语句：

```stylus
@import 'mixins/vendor'
```

等同于：

```stylus
.import('mixins/vendor')
```

# Stylus @media

`@media`工作原理和在常规CSS中一样，但是，要使用Stylus的块状符号。

```stylus
@media print
  #header
  #footer
    display none
```

```css
@media print{#header,#footer{display:none}}
```

# Stylus @font-face

`@font-face`跟其在CSS中作用表现一样，在后面简单地添加个块状属性即可，类似下面：

```stylus
@font-face
  font-family Geo
  font-style normal
  src url(fonts/geo_sans_light/GensansLight.ttf)

.ingeo
  font-family Geo
```

```css
@font-face{font-family:Geo;font-style:normal;src:url("fonts/geo_sans_light/GensansLight.ttf")}.ingeo{font-family:Geo}
```

# Stylus @keyframes

## @keyframes

Stylus支持`@keyframes`规则，当编译的时候转换成`@-webkit-keyframes`：

```stylus
@keyframes pulse{
  0% {
    background-color red
    opacity 1.0
    -webkit-transform scale(1.0) rotate(0deg)
  }
  33% {
    background-color blue
    opacity 0.75
    -webkit-transform scale(1.1) rotate(-5deg)
  }
  67% {
    background-color green
    opacity 0.5
    -webkit-transform scale(1.1) rotate(5deg)
  }
  100% {
    background-color red
    opacity 1.0
    -webkit-transform scale(1.0) rotate(0deg)
  }
}
```

```css
@-moz-keyframes pulse{
	0%{background-color:#f00;opacity:1;-webkit-transform:scale(1) rotate(0deg)}
	33%{background-color:#00f;opacity:.75;-webkit-transform:scale(1.1) rotate(-5deg)}
	67%{background-color:#008000;opacity:.5;-webkit-transform:scale(1.1) rotate(5deg)}
	100%{background-color:#f00;opacity:1;-webkit-transform:scale(1) rotate(0deg)}}
@-webkit-keyframes pulse{0%{background-color:#f00;opacity:1;-webkit-transform:scale(1) rotate(0deg)}33%{background-color:#00f;opacity:.75;-webkit-transform:scale(1.1) rotate(-5deg)}67%{background-color:#008000;opacity:.5;-webkit-transform:scale(1.1) rotate(5deg)}100%{background-color:#f00;opacity:1;-webkit-transform:scale(1) rotate(0deg)}}
@-o-keyframes pulse{0%{background-color:#f00;opacity:1;-webkit-transform:scale(1) rotate(0deg)}33%{background-color:#00f;opacity:.75;-webkit-transform:scale(1.1) rotate(-5deg)}67%{background-color:#008000;opacity:.5;-webkit-transform:scale(1.1) rotate(5deg)}100%{background-color:#f00;opacity:1;-webkit-transform:scale(1) rotate(0deg)}}
@keyframes pulse{0%{background-color:#f00;opacity:1;-webkit-transform:scale(1) rotate(0deg)}33%{background-color:#00f;opacity:.75;-webkit-transform:scale(1.1) rotate(-5deg)}67%{background-color:#008000;opacity:.5;-webkit-transform:scale(1.1) rotate(5deg)}100%{background-color:#f00;opacity:1;-webkit-transform:scale(1) rotate(0deg)}}
```

## 扩展

使用`@keyframes`，通过`vendors`变量，会自动添加私有前缀(`webkit moz official`)。这意味着你可以子啊任意时候立即高效地做修改。

```stylus
@keyframes foo {
  from {
    color: black
  }
  to {
    color: white
  }
}
```

```css
@-moz-keyframes foo{from{color:#000}to{color:#fff}}@-webkit-keyframes foo{from{color:#000}to{color:#fff}}@-o-keyframes foo{from{color:#000}to{color:#fff}}@keyframes foo{from{color:#000}to{color:#fff}}
```

扩增两个默认前缀，官方解析：

```stylus
@-moz-keyframes foo {
  0% {
    color: #000;
  }
  100% {
    color: #fff;
  }
}
@-webkit-keyframes foo {
  0% {
    color: #000;
  }
  100% {
    color: #fff;
  }
}
@keyframes foo {
  0% {
    color: #000;
  }
  100% {
    color: #fff;
  }
}
```

如果我们只想有标准解析，很简单，修改`vendors`：

```stylus
vendors = official
@keyframes foo {
  from {
    color: black
  }
  to {
    color: white
  }
}
```

```css
@keyframes foo{from{color:#000}to{color:#fff}}
```

# Stylus @extend

## 继承

Stylus的@extend指令受 [SASS](https://www.axihe.com/edu/sass/edu/sass-tutorial.html) 的启发，基本一致，除了些轻微差异。此功能大大简化了继承其他语义规则集的语义规则集的维护。

## 混合书写下的“继承”

尽管你可以使用混写实现类似效果，但会导致重复的CSS. 典型的模式式定义如下的几个类名，然后归结到一个元素中，例如"warning message".

该技术实现是没什么问题，但是维护就比较麻烦了。

```stylus
message,
.warning {
  padding: 10px;
  border: 1px solid #eee;
}
.warning {
  color: #E2E21E;
}
```

```css
message,.warning{padding:10px;border:1px solid #eee}.warning{color:#e2e21e}
```

## 使用`__@extend__`

使用`__@extend__`得到同样的输出，只要把对应的选择器传给`@extend`即可。然后`.warning`选择器就会继承已经存在的`.message`规则。

```stylus
message{
  padding: 10px;
  border: 1px solid #eee;
}
.warning {
  @extends .message
  color: #E2E21E;
}
```

这儿是个更复杂的例子，演示了`__@extend__`如何级联。

```stylus
red = #E33E1E
yellow = #E2E21E
.message
  padding: 10px
  font: 14px Helvetica
  border: 1px solid #eee
.warning
  @extends .message
  border-color: yellow
  background: yellow + 70%
.error
  @extends .message
  border-color: red
  background: red + 70%
.fatal
  @extends .error
  font-weight: bold
  color: red
```

```css
.message,.warning,.error,.fatal{padding:10px;font:14px Helvetica;border:1px solid #eee}.warning{border-color:#e2e21e;background:#f6f6bc}.error,.fatal{border-color:#e33e1e;background:#f7c5bc}.fatal{font-weight:bold;color:#e33e1e}
```

目前**Stylus与SASS不同之处在于SASS不允许`__@extend__`嵌套选择器。**

```SAS
form
  button
    padding: 10px
a.button
  @extend form button 
Syntax error: Can't extend form button: can't extend nested selectors
// 解析错误： 无法继承自 button: 不能继承嵌套选择器
        on line 6 of standard input
  Use --trace for backtrace.
```

Stylus中，只要选择器匹配，就可以生效：

```stylus
form
 input[type=text]
   padding: 5px
   border: 1px solid #eee
   color: #ddd
textarea
 @extends form input[type=text]
 padding: 10px
```

```css
form input[type=text],textarea{padding:5px;border:1px solid #eee;color:#ddd}textarea{padding:10px}
```

# Stylus url() 函数

## 函数之url()

### 内联Data URI图像

Stylus捆绑了一个可选函数，名叫url()，其替换了字面上的url()调用（且使用base64 Data URIs有条件地内联它们）。

通过require(‘stylus’).url该函数本身是可用的，其接受一个options对象，当看到url()时候，返回Stylus内部调用的函数。

.define(name, callback)方法指定了一个可被调用的JavaScript函数。在这种情况下，因为我们图片在./css/images中，我们可以忽视paths选项（默认情况下，会查找相关要呈现的图像文件）。如果愿意，该行为时可以改变的。

```js
stylus(str)
  .set('filename', __dirname + '/css/test.styl')
  .define('url', stylus.url())
  .render(function(err, css){
  });
```

例如，想象图片在 `./public/images` , 我们想要使用 `url(images/tobi.png)` , 我们可以传递paths公共目录。这样，它就成为了向上查找进程的一部分。

同样，如果我们想替换为 `url(tobi.png)`, 我们可以传递 `paths: [__dirname + '/public/images']`.

```js
stylus(str)
  .set('filename', __dirname + '/css/test.styl')
  .define('url', stylus.url({ paths: [__dirname + '/public'] }))
  .render(function(err, css){
  });
```

### 选项(Options)

- limit 大小默认限制30Kb(30000)
- paths 图像解析路径

# Stylus CSS字面量

## 字面量CSS

不管什么原因，如果遇到Stylus搞不定的特殊需求，你可以使用`@css`使其作为CSS字面量解决之。

```stylus
@css{
  body{
    color:gray;
  }
}
```

```css
body{
  color:gray;
}

```

# Stylus CSS样式解析

## CSS样式

Stylus完全支持常规的CSS样式解析，这意味着你无需寻求其它解析器，或指定特别的文件使用特别的样式。

使用缩进方法的小样式：

```stylus
border-radius()
  -webkit-border-radius arguments
  -moz-border-radius arguments
  border-radius arguments
body a
  font 12px/1.4 "Lucida Grande", Arial, sans-serif
  background black
  color #ccc
form input
  padding 5px
  border 1px solid
  border-radius 5px
```

因为括号，冒号及分号都是可选的，因此上面的例子我们可以按照正常的CSS书写：

```stylus
border-radius() {
  -webkit-border-radius: arguments;
  -moz-border-radius: arguments;
  border-radius: arguments;
}
body a {
  font: 12px/1.4 "Lucida Grande", Arial, sans-serif;
  background: black;
  color: #ccc;
}
form input {
  padding: 5px;
  border: 1px solid;
  border-radius: 5px;
}
```

因为我们可以混合和匹配的两个变体，因此下面也是有效的：

```stylus
border-radius()
  -webkit-border-radius: arguments;
  -moz-border-radius: arguments;
  border-radius: arguments;
body a {
  font: 12px/1.4 "Lucida Grande", Arial, sans-serif;
  background: black;
  color: #ccc;
}
form input
  padding: 5px;
  border: 1px solid;
  border-radius: 5px;
```

Stylus支持的变量，函数，混写以及其他特征也可以使之按预期工作：

```stylus
main-color = white
main-hover-color = black
body a {
  color: main-color;
  &:hover { color: main-hover-color; }
}
body a { color: main-color; &:hover { color: main-hover-color; }}
```

```css
body a{color:#fff}body a:hover{color:#000}
body a{color:#fff}body a:hover{color:#000}
```

此规则有一些注意事项：因为这两种风格可以混合和匹配，一些缩进规则仍然适用。所以，虽然不是每一个普通的CSS样式零修改都起作用，此功能仍然允许那些喜欢CSS语法的同学们继续这样做，同时又可以利用Stylus的强大功能。

# Stylus 字符转码

## 转码

Stylus可以字符转码。这可以让字符变成标识符，或是渲染成字面量。

```stylus
body
  padding 1 \+ 2
```

```css
body{padding:1 + 2}
```

注意Stylus中`/`**当作为属性使用的时候需要用括号括起来**：

```stylus
body
  padding 14px/1.4
  font-size (14px/1.4)
```

```css
body{padding:14px/1.4;font-size:10px}
```

# Stylus 可执行性 

## Stylus可执行代码

正因有`stylus`可执行性，Stylus才能将自身转换成CSS.

```bash
$ stylus --help

  Usage: stylus [options] [command] [< in [> out]]
                [file|dir ...]

  Commands:

    help [<type>:]<prop> Opens help info at MDN for <prop> in
                         your default browser. Optionally
                         searches other resources of <type>:
                         safari opera w3c ms caniuse quirksmode

  Options:

    -i, --interactive       Start interactive REPL
    -u, --use <path>        Utilize the Stylus plugin at <path>
    -U, --inline            Utilize image inlining via data URI support
    -w, --watch             Watch file(s) for changes and re-compile
    -o, --out <dir>         Output to <dir> when passing files
    -C, --css <src> [dest]  Convert CSS input to Stylus
    -I, --include <path>    Add <path> to lookup paths
    -c, --compress          Compress CSS output
    -d, --compare           Display input along with output
    -f, --firebug           Emits debug infos in the generated CSS that
                            can be used by the FireStylus Firebug plugin
    -l, --line-numbers      Emits comments in the generated CSS
                            indicating the corresponding Stylus line
    -m, --sourcemap         Generates a sourcemap in sourcemaps v3 format
    -q, --quiet                                  Less noisy output
    --sourcemap-inline      Inlines sourcemap with full source text in base64 format
    --sourcemap-root <url>  "sourceRoot" property of the generated sourcemap
    --sourcemap-base <path> Base <path> from which sourcemap and all sources are relative
    -P, --prefix [prefix]   prefix all css classes
    -p, --print             Print out the compiled CSS
    --import <file>         Import stylus <file>
    --include-css           Include regular CSS on @import
         --ext                   Specify custom file extension for compiled file, default .css
    -D, --deps              Display dependencies of the compiled file
    --disable-cache         Disable caching
    --hoist-atrules         Move @import and @charset to the top
    -r, --resolve-url       Resolve relative urls inside imports
    --resolve-url-nocheck   Like --resolve-url but without file existence check
    -V, --version           Display the version of Stylus
    -h, --help              Display help information

```

## STDIO编译范例

`stylus`读取自_stdin_输出到_stdout_, 因此，如下例：

```bash
stylus --compress < some.styl > some.css
```

## 编译文件范例

`stylus`亦接受文件和目录。例如，一个目录名为`css`将在同一目录编译并输出`.css`文件。

```bash
stylus css
```

下面的将会输出到`./public/stylesheets`:

```bash
stylus css --out public/stylesheets
```

或一些文件：

```bash
stylus one.styl two.styl
```

为了开发的目的，你可以使用`linenos`选项发出指令在生成的CSS中显示Stylus文件名以及行数。

```bash
stylus --line-numbers <path>
```

或是`firebug`选项，如果你想使用firebug的 FireStylus扩展

```bash
stylus --firebug <path>
```

## 转换CSS

如果你想把CSS转换成简洁的Stylus语法，可以使用`--css`标志。

通过标准输入输出：

```bash
stylus --css < test.css > test.styl
```

输出基本名一致的`.styl`文件。

```bash
stylus --css test.css
```

输出特定的目标：

```bash
stylus --css test.css /tmp/out.styl
```

## CSS属性的帮助

在OS X上，`stylus help` 会打开你默认浏览器并显示给定的属性的帮助文档。

```bash
stylus help box-shadow
```

## 壳层交互(Interactive Shell)

Stylus REPL (Read-Eval-Print-Loop)或“壳层交互(Interactive Shell)”允许你直接在终端机上把玩Stylus的表达式。

注意只有表达式可以生效，而不是选择器之类。为了简单，我们添加`-i`或`--interactive`标志：

```bash
$ stylus -i
> color = white
=> #fff
> color - rgb(200,50,0)
=> #37cdff
> color
=> #fff
> color -= rgb(200,50,0)
=> #37cdff
> color
=> #37cdff
> rgba(color, 0.5)
=> rgba(55,205,255,0.5)
```

## 利用插件

本例我们将使用nibStylus插件来说明它的CLI使用。

假设我们有如下的Stylus, 其导入nib并使用nib的linear-gradient()方法：

```stylus
@import 'nib'
body
  background: linear-gradient(20px top, white, black)
```

我们是使用`stylus(1)`通过标准输入输出试图渲染的第一个东西可能就像下面这样：

```bash
$ stylus < ./src/example.styl
```

这可能会生成如下的错误，因为Stylus不知道去哪里找到nib.

```bash
$ stylus < ./src/example.styl
C:\Users\zhusenbin\AppData\Roaming\npm\node_modules\stylus\bin\stylus:615
      if (err) throw err;
               ^

Error: stdin:1:9
   1| @import 'nib'
--------------^
   2| body
   3|   background: linear-gradient(20px top, white, black)

failed to locate @import file nib.styl

```

对于简单应用Stylus API们的插件，我们可以添加查找路径。通过使用`--include`或`-I`标志：

```bash
stylus < ./src/example.styl --include ../nib/lib
```

现在生成内容如下。您可能注意到了，`gradient-data-uri()`以及`create-gradient-image()`以字面量形式输出了。这是因为，当插件提供JavaScript API的时候，光暴露插件的路径是不够的。但是，如果我们仅仅想要的是纯粹Stylus nib函数，则足够了。

```css
body {
  background: url(gradient-data-uri(create-gradient-image(20px, top)));
  background: -webkit-gradient(linear, left top, left bottom, color-stop(0, #fff), color-stop(1, #000));
  background: -webkit-linear-gradient(top, #fff 0%, #000 100%);
  background: -moz-linear-gradient(top, #fff 0%, #000 100%);
  background: linear-gradient(top, #fff 0%, #000 100%);
}
```

因此，我们需要做的是使用`--use`或`-u`标志。其会找寻node模块（有或者没有`.js`扩展名）路径，这里的`require()`模块或调用`style.use(fn())`来暴露该插件（定义js函数等）。

```bash
$ stylus < test.styl --use ../nib/lib/nib
```

生成为：

```css
body {
  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAUCAYAAABMDlehAAAABmJLR0QA/wD/AP+gvaeTAAAAI0lEQVQImWP4+fPnf6bPnz8zMH358oUBwkIjKJBgYGNj+w8Aphk4blt0EcMAAAAASUVORK5CYII=");
  background: -webkit-gradient(linear, left top, left bottom, color-stop(0, #fff), color-stop(1, #000));
  background: -webkit-linear-gradient(top, #fff 0%, #000 100%);
  background: -moz-linear-gradient(top, #fff 0%, #000 100%);
  background: linear-gradient(top, #fff 0%, #000 100%);
}
```

# Stylus 错误报告

## 错误报告

Stylus内置梦幻般的错误报告，针对语法、解析以及计算错误，完整的堆栈跟踪，行号和文件名。

## 解析错误

解析错误例子：

```stylus
body
  form input
    == padding 5px
```

```bash
C:\Users\sss\AppData\Roaming\npm\node_modules\stylus\bin\stylus:684
              throw err;
              ^
ParseError: src\example.styl:3:15
   1| body
   2|   form input
   3|     == padding 5px
--------------------^

illegal unary "==", missing left-hand operand

```

## 计算错误

这种“运行”或计算错误类似于传递字符串给`border-radius()`，而不是单位值。

```stylus
ensure(val, type)
  unless val is a type
    error('expected a ' + type + ', but got ' + typeof(val))
border-radius(n)
  ensure(n, 'unit')
  -webkit-border-radius n
  -moz-border-radius n
  border-radius n
body
  border-radius '5px'
```

```bash
[Error: src\example.styl:3:5
   1| ensure(val, type)
   2|   unless val is a type
   3|     error('expected a ' + type + ', but got ' + typeof(val))
----------^
   4| border-radius(n)
   5|   ensure(n, 'unit')
   6|   -webkit-border-radius n

expected a unit, but got string

```

# Stylus 连接中间件

## 连接中间件

有了连接中间件，无论Stylus片段什么时候改变，这些片段都能够自动编译。

## stylus.middleware(options)

## 选项

返回给定`options`下的连接中间件。

```bash
`serve`     Serve the stylus files from `dest` [true]
`force`     Always re-compile
`src`       Source directory used to find .styl files
`dest`      Destination directory used to output .css files
            when undefined defaults to `src`.
`compile`   Custom compile function, accepting the arguments
           `(str, path)`.
`compress`  Whether the output .css files should be 
            compressed
`firebug`   Emits debug infos in the generated css that can
            be used by the FireStylus Firebug plugin
`linenos`   Emits comments in the generated css indicating 
            the corresponding stylus line
```

```bash
`serve`     从 `dest` 提供stylus文件 [true]
`force`     总是重新编译
`src`       资源目录用来查找 .styl 文件
`dest`      `src`默认为undefined时，用来输出 .css 文件的目标目录
`compile`   自定义编译函数，接受参数`(str, path)`.
`compress`  是否输出的 .css 文件要被压缩
`firebug`   生成的CSS中发出调试信息，可被Firebug插件FireStylus使
            用
`linenos`   生成的CSS中发出注解，表明响应的stylus行
```

## 例子

从`./public`提供`.styl`文件。

```js
var app = connect();
app.middleware(__dirname + '/public');
```

改变`src`以及`dest`项来修改`.styl`文件哪里被加载，哪里被保存。

```js
var app = connect();
app.middleware({
  src: __dirname + '/stylesheets',
  dest: __dirname + '/public'
});
```

这里我们建立自定义的编译函数，这样，我们就能设置`compress`项，或是定义附加的函数。

默认情况下，编译函数是简单地设置`filename`以及渲染CSS. 在下面这个例子中，我们压缩输出内容，使用"nib"库插件，以及自动导入。

```js
function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .set('compress', true)
    .use(nib())
    .import('nib');
}
```

作为选项传递应该像这样：

```js
var app = connect();
app.middleware({
    src: __dirname
  , dest: __dirname + '/public'
  , compile: compile
})
```

# Stylus 自检API 

## 自检API

Stylus支持自我检测的API, 这允许混写以及函数反应调用者的相关性。

## 混写(mixin)

`mixin`这个局部变量在函数体内自动赋值。如果调用的函数在根级别，则`mixin`包含字符串`root`, 如果其他情况，则是`block`, 如果调用函数有返回值，最终为`false`.

下面这个例子中，我们定义`reset()`, 根据其是混入了根部，还是混入块状域，还是混入返回值中，来修改其值，并作为`foo`属性的值呈现：

```stylus
reset()
  if mixin == 'root'
    got
      root true
  else if mixin
    got 'a mixin'
  else
    'not a mixin'
reset()
body
  reset()
  foo reset()
```

```css
got{root:true}
body{got:'a mixin';foo:'not a mixin'}
```

# JavaScript API

## JavaScript API

`require`模块，用给定的Stylus代码字符串调用`render()`，以及（可选的）`optional`对象。

传递`filename`参数可以利用Stylus框架提供更好的错误报告。

```js
var stylus = require('stylus');
stylus.render(str, { filename: 'nesting.css' }, function(err, css){
  if (err) throw err;
  console.log(css);
});
```

我们可以用更渐进的方式实现做一样的事：

```js
var stylus = require('stylus');
stylus(str)
  .set('filename', 'nesting.css')
  .render(function(err, css){
    // logic
  });
```

## .set(setting, value)

应用诸如`filename`的设置，或导入`paths`:

```js
.set('filename', __dirname + '/test.styl')
 .set('paths', [__dirname, __dirname + '/mixins'])
```

## .include(path)

渐进替换`.set('paths',...)`的就是`.include()`. 当其他Stylus库（已暴露路径）暴露的时候，这个是理想的选择。

```js
stylus(str)
  .include(require('nib').path)
  .include(process.env.HOME + '/mixins')
  .render(...)
```

## .import(path)

推迟给定`path`导入，直到计算被执行。下面这个例子基本上跟在Stylus片段中执行`@import 'mixins/vendor'`一样：

```js
var stylus = require('../')
  , str = require('fs').readFileSync(__dirname + '/test.styl', 'utf8');
stylus(str)
  .set('filename', __dirname + '/test.styl')
  .import('mixins/vendor')
  .render(function(err, css){
  if (err) throw err;
  console.log(css);
});
```

## .define(name, node)

通过传递一个`Node`，我们可以定义一个全局变量。当库（该库依赖于其它库可用性）里面暴露某些条件特征的时候，这个就很有用。例如Nib扩展库条件支持node-canvas, 提供图片生成。

但这并不是一直可用的，因此Nib可以定义：

```js
.define('has-canvas', stylus.nodes.false);
 .define('some-setting', new stylus.nodes.String('some value'));
```

如果可能，Stylus也会转换JavaScript值为Stylus值。

```js
.define('string', 'some string')
 .define('number', 15.5)
 .define('some-bool', true)
 .define('list', [1,2,3])
 .define('list', [1,2,[3,4,[5,6]]])
 .define('list', { foo: 'bar', bar: 'baz' })
 .define('families', ['Helvetica Neue', 'Helvetica', 'sans-serif'])
```

下面是一些规则应用在js函数返回值上：

```js
.define('get-list', function(){
  return ['foo', 'bar', 'baz'];
})
```

## .define(name, fn)

该方法允许你未Stylus提供JavaScript定义的函数。正如想到JavaScript用C++绑定。当有一些事情无法用Stylus完成的时候，就在JavaScript中定义它。

下面这个例子，我们定义了4个函数：`add()`, `sub()`, `image-width()`, `image-height()`. 这些函数必须返回一个`Node`, 通过`stylus.nodes`该构造以及其它nodes都可以了。

```js
var stylus = require('../')
    , nodes = stylus.nodes
    , utils = stylus.utils
    , fs = require('fs');
  function add(a, b) {
    return a.operate('+', b);
  }
  function sub(a, b) {
    return a.operate('-', b);
  }
  function imageDimensions(img) {
    // 宣告 node (img) 是一个 String 节点, 
    // 为错误报告传递参数名
    utils.assertType(img, 'string', 'img');
    var path = img.val;
    // 得到尺寸有必要取得字节数
    // 如果这是真的，你会每种格式都处理下，
    // 而不是读取整个图片 :)
    var data = fs.readFileSync(__dirname + '/' + path);
    // GIF
    // 当然，你可以支持更多 :)
    if ('GIF' == data.slice(0, 3).toString()) {
      var w = data.slice(6, 8)
        , h = data.slice(8, 10);
      w = w[1] << 8 | w[0];
      h = h[1] << 8 | h[0];
    }
    return [w, h];
  }
  function imageWidth(img) {
    return new nodes.Unit(imageDimensions(img)[0]);
  }
  function imageHeight(img) {
    return new nodes.Unit(imageDimensions(img)[1]);
  }
  stylus(str)
    .set('filename', 'js-functions.styl')
    .define('add', add)
    .define('sub', sub)
    .define('image-width', imageWidth)
    .define('image-height', imageHeight)
    .render(function(err, css){
      if (err) throw err;
      console.log(css);
    });
```

为了进一步的参考（直到本文档全部结束），请看下面的文件：

- `lib/nodes/*`
- `lib/utils.js`

## .use(fn)

当被调用时，给定`fn`被渲染器调用，允许所有上面的方法被使用。这允许插件轻易地暴露自己，定义函数，路径等。

```js
var mylib = function(style){
  style.define('add', add);
  style.define('sub', sub);
};
stylus(str)
  .use(mylib)
  .render(...)
```

