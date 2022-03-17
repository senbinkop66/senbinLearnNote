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

