

# 安装与配置

下载https://go.dev/dl/go1.19.windows-amd64.msi

**Sublime Text 3配置Go语言开发环境**

```
{ 
	"cmd": ["go", "run", "$file_name"], 
	"file_regex": "^[ ]*File \"(…*?)\", line ([0-9]*)", 
	"working_dir": "$file_path", 
	"selector": "source.go" 
}
```

**配置go路径**

Preferences -> package settings -> Golang Config -> Settings - Uesrs

```json
{
    "PATH": "C:/Go/bin",
    "GOPATH": "C:/Go"
}
```



----

# 基本结构与基本数据类型



## 文件名、关键字与标识符

### 文件名

Go 的源文件以 .go 为后缀名存储在计算机中，这些文件名均由小写字母组成，如 scanner.go 。**如果文件名由多个部分组成，则使用下划线 _ 对它们进行分隔**，如 scanner_test.go 。文件名不包含空格或其他特殊字符。

一个源文件可以包含任意多行的代码，Go 本身没有对源文件的大小进行限制。

你会发现在 Go 代码中的几乎所有东西都有一个名称或标识符。另外，Go 语言也是区分大小写的，这与 C 家族中的其它语言相同。有效的标识符必须以字符（可以使用任何 UTF-8 编码的字符或 _）开头，然后紧跟着 0 个或多个字符或 Unicode 数字，如：X56、group1、_x23、i、өԑ12。

以下是无效的标识符：

1ab（以数字开头）
case（Go 语言的关键字）
a+b（运算符是不允许的）
**_ 本身就是一个特殊的标识符，被称为空白标识符**。它可以像其他标识符那样用于变量的声明或赋值（任何类型都可以赋值给它），但任何赋给这个标识符的值都将被抛弃，因此这些值不能在后续的代码中使用，也不可以使用这个标识符作为变量对其它变量进行赋值或运算。

在编码过程中，你可能会遇到没有名称的变量、类型或方法。虽然这不是必须的，但有时候这样做可以极大地增强代码的灵活性，这些变量被统称为匿名变量。



### 关键字

下面列举了 Go 代码中会使用到的 25 个关键字或保留字：

`break	default	func	interface	select
case	defer	go	map	struct
chan	else	goto	package	switch
const	fallthrough	if	range	type
continue	for	import	return	var`

之所以刻意地将 Go 代码中的关键字保持的这么少，是为了简化在编译过程第一步中的代码解析。和其它语言一样，关键字不能够作标识符使用。



### 标识符

除了以上介绍的这些关键字，Go 语言还有 36 个预定义标识符，其中包含了基本类型的名称和一些基本的内置函数，它们的作用都将在接下来的章节中进行进一步地讲解。

`append	bool	byte	cap	close	complex	complex64	complex128	uint16
copy	false	float32	float64	imag	int	int8	int16	uint32
int32	int64	iota	len	make	new	nil	panic	uint64
print	println	real	recover	string	true	uint	uint8	uintptr`

程序一般由关键字、常量、变量、运算符、类型和函数组成。

程序中可能会使用到这些分隔符：括号 ()，中括号 [] 和大括号 {}。

程序中可能会使用到这些标点符号：.、,、;、: 和 …。

程序的代码通过语句来实现结构化。每个语句不需要像 C 家族中的其它语言一样以分号 ; 结尾，因为这些工作都将由 Go 编译器自动完成。

如果你打算将多个语句写在同一行，它们则必须使用 ; 人为区分，但在实际开发中我们并不鼓励这种做法。



----

## Go 程序的基本结构和要素

```go
//hello_world.go
package main

import "fmt"

func main() {
    fmt.Println("hello, world")
}
```



### 包的概念、导入与可见性

包是结构化代码的一种方式：每个程序都由包（通常简称为 pkg）的概念组成，可以使用自身的包或者从其它包中导入内容。

如同其它一些编程语言中的类库或命名空间的概念，每个 Go 文件都属于且仅属于一个包。一个包可以由许多以 .go 为扩展名的源文件组成，因此文件名和包名一般来说都是不相同的。

你必须在源文件中非注释的第一行指明这个文件属于哪个包，如：package main。package main 表示一个可独立执行的程序，每个 Go 应用程序都包含一个名为 main 的包。

**一个应用程序可以包含不同的包，而且即使你只使用 main 包也不必把所有的代码都写在一个巨大的文件里**：你可以用一些较小的文件，并且在每个文件非注释的第一行都使用 package main 来指明这些文件都属于 main 包。如果你打算编译包名不是为 main 的源文件，如 pack1，编译后产生的对象文件将会是 pack1.a 而不是可执行程序。另外要注意的是，**所有的包名都应该使用小写字母**。

**标准库**

在 Go 的安装文件里包含了一些可以直接使用的包，即标准库。在 Windows 下，标准库的位置在 Go 根目录下的子目录 pkg\windows_386 中；在 Linux 下，标准库在 Go 根目录下的子目录 pkg\linux_amd64 中（如果是安装的是 32 位，则在 linux_386 目录中）。一般情况下，标准包会存放在 $GOROOT/pkg/$GOOS_$GOARCH/ 目录下。

Go 的标准库包含了大量的包（如：fmt 和 os），但是你也可以创建自己的包（第 9 章）。

如果想要构建一个程序，则包和包内的文件都必须以正确的顺序进行编译。包的依赖关系决定了其构建顺序。

**属于同一个包的源文件必须全部被一起编译，一个包即是编译时的一个单元**，因此根据惯例，每个目录都只包含一个包。

如果对一个包进行更改或重新编译，所有引用了这个包的客户端程序都必须全部重新编译。

Go 中的包模型采用了显式依赖关系的机制来达到快速编译的目的，编译器会从后缀名为 .go 的对象文件（需要且只需要这个文件）中提取传递依赖类型的信息。

如果 A.go 依赖 B.go，而 B.go 又依赖 C.go：

编译 C.go, B.go, 然后是 A.go.
为了编译 A.go, 编译器读取的是 B.o 而不是 C.o.
这种机制对于编译大型的项目时可以显著地提升编译速度。

每一段代码只会被编译一次

**一个 Go 程序是通过 import 关键字将一组包链接在一起。**

import "fmt" 告诉 Go 编译器这个程序需要使用 fmt 包（的函数，或其他元素），fmt 包实现了格式化 IO（输入 / 输出）的函数。包名被封闭在半角双引号 "" 中。如果你打算从已编译的包中导入并加载公开声明的方法，不需要插入已编译包的源代码。

如果需要多个包，它们可以被分别导入：

```go
import "fmt"
import "os"
```

或：

```go
import "fmt"; import "os"
```

但是还有更短且更优雅的方法（被称为**因式分解关键字**，该方法同样适用于 const、var 和 type 的声明或定义）：

```go
import (
   "fmt"
   "os"
)
```

它甚至还可以更短的形式，但使用 gofmt 后将会被强制换行：

```go
import ("fmt"; "os")
```

当你导入多个包时，**最好按照字母顺序排列包名**，这样做更加清晰易读。

如果包名不是以 . 或 / 开头，如 "fmt" 或者 "container/list"，则 Go 会在全局文件进行查找；

如果包名以 ./ 开头，则 Go 会在相对目录中查找；如果包名以 / 开头（在 Windows 下也可以这样使用），则会在系统的绝对路径中查找。



导入包即等同于包含了这个包的所有的代码对象。

除了符号 `_`，**包中所有代码对象的标识符必须是唯一的**，以避免名称冲突。但是相同的标识符可以在不同的包中使用，因为可以使用包名来区分它们。

包通过下面这个被编译器强制执行的规则来决定是否将自身的代码对象暴露给外部文件：

**可见性规则**

当标识符（包括常量、变量、类型、函数名、结构字段等等）以一个**大写字母开头**，如：Group1，那么使用这种形式的标识符的对象就可以被外部包的代码所使用（客户端程序需要先导入这个包），这被称为**导出**（像面向对象语言中的 **public**）；

标识符如果以**小写字母开头**，则对包外是**不可见的**，但是他们在整个包的内部是可见并且可用的（像面向对象语言中的 **private** ）。

（大写字母可以使用任何 Unicode 编码的字符，比如希腊文，不仅仅是 ASCII 码中的大写字母）。

因此，在导入一个外部包后，能够且只能够访问该包中导出的对象。

假设在包 pack1 中我们有一个变量或函数叫做 Thing（以 T 开头，所以它能够被导出），那么在当前包中导入 pack1 包，Thing 就可以像面向对象语言那样使用点标记来调用：pack1.Thing（pack1 在这里是不可以省略的）。

**因此包也可以作为命名空间使用，帮助避免命名冲突**（名称冲突）：两个包中的同名变量的区别在于他们的包名，例如 pack1.Thing 和 pack2.Thing。

**你可以通过使用包的别名来解决包名之间的名称冲突**，或者说根据你的个人喜好对包名进行重新设置，如：import fm "fmt"。下面的代码展示了如何使用包的别名：

```go
package main

import fm "fmt"

func main() {
	fm.Println("hello, world")
}
```

> 注意事项
>
> 如果你导入了一个包却没有使用它，则会在构建程序时引发错误，如 imported and not used: os，**这正是遵循了 Go 的格言：“没有不必要的代码**！“。

**包的分级声明和初始化**

你可以在使用 import 导入包之后定义或声明 0 个或多个常量（const）、变量（var）和类型（type），这些对象的作用域都是全局的（在本包范围内），所以可以被本包中所有的函数调用（如 gotemplate.go 源文件中的 c 和 v），然后声明一个或多个函数（func）。



----

### 函数

这是定义一个函数最简单的格式：

```go
func functionName()
```

你可以在括号 () 中写入 0 个或多个函数的参数（使用逗号 , 分隔），每个参数的名称后面必须紧跟着该参数的类型。

**main 函数是每一个可执行程序所必须包含的，一般来说都是在启动后第一个执行的函数**（如果有 init () 函数则会先执行该函数）。

如果你的 main 包的源代码没有包含 main 函数，则会引发构建错误 undefined: main.main。

**main 函数既没有参数，也没有返回类型**（与 C 家族中的其它语言恰好相反）。如果你不小心为 main 函数添加了参数或者返回类型，将会引发构建错误：

```
func main must have no arguments and no return values results.
```

在程序开始执行并完成初始化后，**第一个调用（程序的入口点）的函数是 main.main()**（如：C 语言），该函数一旦返回就表示程序已成功执行并立即退出。

函数里的代码（函数体）使用大括号 {} 括起来。

**左大括号 { 必须与方法的声明放在同一行**，这是编译器的强制规定，否则你在使用 gofmt 时就会出现错误提示：

```
build-error: syntax error: unexpected semicolon or newline before {
```

（这是因为编译器会产生 func main() ; 这样的结果，很明显这错误的）

Go 语言虽然看起来不使用分号作为语句的结束，**但实际上这一过程是由编译器自动完成**，因此才会引发像上面这样的错误

**右大括号 } 需要被放在紧接着函数体的下一行**。如果你的函数非常简短，你也可以将它们放在同一行：

```go
func Sum(a, b int) int { return a + b }
```

对于大括号 {} 的使用规则在任何时候都是相同的（如：if 语句等）。

因此符合规范的函数一般写成如下的形式：

```go
func functionName(parameter_list) (return_value_list) {
   …
}
```

其中：

parameter_list 的形式为 (param1 type1, param2 type2, …)
return_value_list 的形式为 (ret1 type1, ret2 type2, …)

**只有当某个函数需要被外部包调用的时候才使用大写字母开头，并遵循 Pascal 命名法**；否则就遵循骆驼命名法，即第一个单词的首字母小写，其余单词的首字母大写。

```go
package main

import fm "fmt"

func add(a, b int) int {
	return a + b
}

func main() {
	fm.Println("hello, world")
	fm.Println(add(2, 3))
}
```

下面这一行调用了 fmt 包中的 Println 函数，可以将字符串输出到控制台，并在最后自动增加换行字符 \n：

```go
fmt.Println（"hello, world"）
```

使用 fmt.Print("hello, world\n") 可以得到相同的结果。

**Print 和 Println 这两个函数也支持使用变量**，如：fmt.Println(arr)。如果没有特别指定，它们会以默认的打印格式将变量 arr 输出到控制台。

单纯地打印一个字符串或变量甚至可以使用预定义的方法来实现，如：print、println：print("ABC")、println("ABC")、println(i)（带一个变量 i）。

**这些函数只可以用于调试阶段，在部署程序的时候务必将它们替换成 fmt 中的相关函数。**

当被调用函数的代码执行到结束符 } 或返回语句时就会返回，然后程序继续执行调用该函数之后的代码。

**程序正常退出的代码为 0** 即 Program exited with code 0；**如果程序因为异常而被终止，则会返回非零值**，如：1。这个数值可以用来测试是否成功执行一个程序。



---

### 注释

```go
package main

import "fmt" // Package implementing formatted I/O.

func main() {
   fmt.Printf("Καλημέρα κόσμε; or こんにちは 世界\n")
}
```

上面这个例子通过打印 Καλημέρα κόσμε; or こんにちは 世界 展示了如何在 Go 中使用国际化字符，以及如何使用注释。

注释不会被编译，但可以通过 godoc 来使用。

**单行注释是最常见的注释形式**，你可以在任何地方使用以 // 开头的单行注释。

多行注释也叫块注释，均已以 /* 开头，并以 */ 结尾，且不可以嵌套使用**，多行注释一般用于包的文档描述或注释成块的代码片段**。

**每一个包应该有相关注释**，在 package 语句之前的块注释将被默认认为是这个包的文档说明，其中应该提供一些相关信息并对整体功能做简要的介绍。一个包可以分散在多个文件中，但是只需要在其中一个进行注释说明即可。当开发人员需要了解包的一些情况时，自然会用 godoc 来显示包的文档说明，在首行的简要注释之后可以用成段的注释来进行更详细的说明，而不必拥挤在一起。另外，在多段注释之间应以空行分隔加以区分。

示例：

```go
// Package superman implements methods for saving the world.
//
// Experience has shown that a small number of procedures can prove
// helpful when attempting to save the world.
package superman
```

几乎所有全局作用域的类型、常量、变量、函数和被导出的对象都应该有一个合理的注释。如果这种注释（称为文档注释）出现在函数前面，例如函数 Abcd，则要以 "Abcd..." 作为开头。

示例：

```go
// enterOrbit causes Superman to fly into low Earth orbit, a position
// that presents several possibilities for planet salvation.
func enterOrbit() error {
   ...
}
```

godoc 工具会收集这些注释并产生一个技术文档。



----

### 类型

可以包含数据的变量（或常量），可以使用不同的数据类型或类型来保存数据。使用 var 声明的变量的值会自动初始化为该类型的零值。类型定义了某个变量的值的集合与可对其进行操作的集合。

类型可以是**基本类型**，如：int、float、bool、string；

**结构化的（复合的）**，如：struct、array、slice、map、channel；

只**描述类型的行为**的，如：interface。



结构化的类型没有真正的值，它使用 **nil** 作为默认值（在 Objective-C 中是 nil，在 Java 中是 null，在 C 和 C++ 中是 NULL 或 0）。值得注意的是，**Go 语言中不存在类型继承**。

函数也可以是一个确定的类型，就是以函数作为返回类型。这种类型的声明要写在函数名和可选的参数列表之后，例如：

```go
func FunctionName (a typea, b typeb) typeFunc
```

你可以在函数体中的某处返回使用类型为 typeFunc 的变量 var：

```go
return var
```

一个函数可以拥有多返回值，返回类型之间需要使用逗号分割，并使用小括号 () 将它们括起来，如：

```go
func FunctionName (a typea, b typeb) (t1 type1, t2 type2)
```

示例： 函数 Atoi ：

```go
func Atoi(s string) (i int, err error)
```

返回的形式：

```go
return var1, var2
```

这种多返回值一般用于判断某个函数是否执行成功（true/false）或与其它返回值一同返回错误消息（详见之后的并行赋值）。

**使用 type 关键字可以定义你自己的类型**，你可能想要定义一个结构体，但是也可以定义一个已经存在的类型的别名，如：

```go
type IZ int
```

这里**并不是真正意义上的别名**，因为使用这种方法定义之后的类型可以拥有更多的特性，**且在类型转换时必须显式转换**。

然后我们可以使用下面的方式声明变量：

```go
var a IZ = 5
```

这里我们可以看到 int 是变量 a 的底层类型，这也使得它们之间存在相互转换的可能。

如果你有多个类型需要定义，可以使用因式分解关键字的方式，例如：

```go
type (
   IZ int
   FZ float64
   STR string
)
```

每个值都必须在经过编译后属于某个类型（**编译器必须能够推断出所有值的类型**），因为 **Go 语言是一种静态类型语言**。



----

### Go 程序的一般结构

下面的程序可以被顺利编译但什么都做不了，不过这很好地展示了一个 Go 程序的首选结构。这种结构并没有被强制要求，**编译器也不关心 main 函数在前还是变量的声明在前**，但使用统一的结构能够在从上至下阅读 Go 代码时有更好的体验。

所有的结构将在这一章或接下来的章节中进一步地解释说明，但总体思路如下：

- 在完成包的 import 之后，开始对常量、变量和类型的定义或声明。
- 如果存在 init 函数的话，则对该函数进行定义（这是一个特殊的函数，每个含有该函数的包都会首先执行这个函数）。
- 如果当前包是 main 包，则定义 main 函数。
- 然后定义其余的函数，首先是类型的方法，接着是按照 main 函数中先后调用的顺序来定义相关函数，如果有很多函数，则可以按照字母顺序来进行排序。

```go
// 示例 4.4 gotemplate.go

package main

import (
   "fmt"
)

const c = "C"

var v int = 5

type T struct{}

func init() { // initialization of package
}

func main() {
   var a int
   Func1()
   // ...
   fmt.Println(a)
}

func (t T) Method1() {
   //...
}

func Func1() { // exported function Func1
   //...
}
```

Go 程序的执行（程序启动）顺序如下：

- 按顺序导入所有被 main 包引用的其它包，然后在每个包中执行如下流程：

- 如果该包又导入了其它的包，则从第一步开始递归执行，但是每个包只会被导入一次。
- 然后以相反的顺序在每个包中初始化常量和变量，如果该包含有 init 函数的话，则调用该函数。
- 在完成这一切之后，main 也执行同样的过程，最后调用 main 函数开始执行程序。



---

### 类型转换

在必要以及可行的情况下，一个类型的值可以被转换成另一种类型的值。由于 Go 语言不存在隐式类型转换，因此**所有的转换都必须显式说明**，就像调用一个函数一样（类型在这里的作用可以看作是一种函数）：

```go
valueOfTypeB = typeB(valueOfTypeA)
```

**类型 B 的值 = 类型 B (类型 A 的值)**

示例：

```go
a := 5.0
b := int(a)
```

**但这只能在定义正确的情况下转换成功**，例如从一个取值范围较小的类型转换到一个取值范围较大的类型（例如将 int16 转换为 int32）。

当从一个取值范围较大的转换到取值范围较小的类型时（例如将 int32 转换为 int16 或将 float32 转换为 int），**会发生精度丢失**（截断）的情况。

**当编译器捕捉到非法的类型转换时会引发编译时错误，否则将引发运行时错误。**

具有相同底层类型的变量之间可以相互转换：

```go
var a IZ = 5
c := int(a)
d := IZ(c)
```



----

### Go 命名规范

干净、可读的代码和简洁性是 Go 追求的主要目标。**通过 gofmt 来强制实现统一的代码风格**。

Go 语言中对象的命名也应该是简洁且有意义的。像 Java 和 Python 中那样使用混合着大小写和下划线的冗长的名称会严重降低代码的可读性。

名称不需要指出自己所属的包，因为在调用的时候会使用包名作为限定符。

返回某个对象的函数或方法的名称一般都是使用名词，没有 Get... 之类的字符，如果是用于修改某个对象，则使用 SetName。有必须要的话可以使用大小写混合的方式，如 MixedCaps 或 mixedCaps，而不是使用下划线来分割多个名称。



---

##  常量

常量使用关键字 const 定义，用于存储不会改变的数据。

存储在常量中的数据类型只可以是布尔型、数字型（整数型、浮点型和复数）和字符串型。

常量的定义格式：const identifier [type] = value，例如：

```go
const Pi = 3.14159
```

在 Go 语言中，**你可以省略类型说明符 [type]，因为编译器可以根据常量的值来推断其类型**。

显式类型定义： const b string = "abc"
隐式类型定义： const b = "abc"

一个没有指定类型的常量被使用时，会根据其使用环境而推断出它所需要具备的类型**。换句话说，未定义类型的常量会在必要时刻根据上下文来获得相关类型。**



```go
var n int
f(n + 5) // 无类型的数字型常量 “5” 它的类型在这里变成了 int
```

**常量的值必须是能够在编译时就能够确定的**；你可以在其赋值表达式中涉及计算过程，但是所有用于计算的值必须在编译期间就能获得。

正确的做法：

```go
const c1 = 2/3
```

错误的做法：

```go
const c2 = getNumber() // 引发构建错误: getNumber() used as value
```

**因为在编译期间自定义函数均属于未知，因此无法用于常量的赋值，但内置函数可以使用**，如：len ()。



**数字型的常量是没有大小和符号的，并且可以使用任何精度而不会导致溢出**：

```go
const Ln2= 0.693147180559945309417232121458\
            176568075500134360255254120680009
const Log2E= 1/Ln2 // this is a precise reciprocal
const Billion = 1e9 // float constant
const hardEight = (1 << 100) >> 97
```

根据上面的例子我们可以看到，**反斜杠 \ 可以在常量表达式中作为多行的连接符使用**。(此处的反斜杠已经**不能**作为多行的连接符使用了)

与各种类型的数字型变量相比，你无需担心常量之间的类型转换问题，因为它们都是非常理想的数字。

不过需要注意的是，当常量赋值给一个精度过小的数字型变量时，可能会因为无法正确表达常量所代表的数值而导致溢出，这会在编译期间就引发错误。另外，常量也允许使用并行赋值的形式：

```go
const beef, two, c = "eat", 2, "veg"
const Monday, Tuesday, Wednesday, Thursday, Friday, Saturday = 1, 2, 3, 4, 5, 6
const (
    Monday, Tuesday, Wednesday = 1, 2, 3
    Thursday, Friday, Saturday = 4, 5, 6
)
```

常量还可以用作枚举：

```go
const (
    Unknown = 0
    Female = 1
    Male = 2
)
```

现在，数字 0、1 和 2 分别代表未知性别、女性和男性。这些枚举值可以用于测试某个变量或常量的实际值，比如使用 switch/case 结构 .

在这个例子中，iota 可以被用作枚举值：

```go
const (
    a = iota
    b = iota
    c = iota
)
```

第一个 iota 等于 0，**每当 iota 在新的一行被使用时，它的值都会自动加 1**；所以 a=0, b=1, c=2 可以简写为如下形式：

```go
const (
    a = iota
    b
    c
)
```

（ 译者注：关于 iota 的使用涉及到非常复杂多样的情况，这里作者解释的并不清晰，因为很难对 iota 的用法进行直观的文字描述。如希望进一步了解，请观看视频教程 《Go 编程基础》 第四课：常量与运算符 ）

**iota 也可以用在表达式中**，如：iota + 50。**在每遇到一个新的常量块或单个常量声明时， iota 都会重置为 0**（ 简单地讲，每遇到一次 const 关键字，iota 就重置为 0 ）。

**当然，常量之所以为常量就是恒定不变的量，因此我们无法在程序运行过程中修改它的值**；如果你在代码中试图修改常量的值则会引发编译错误。

引用 time 包中的一段代码作为示例：一周中每天的名称。

```go
const (
    Sunday = iota
    Monday
    Tuesday
    Wednesday
    Thursday
    Friday
    Saturday
)
```

你也可以使用某个类型作为枚举常量的类型：

```go
type Color int

const (
    RED Color = iota // 0
    ORANGE // 1
    YELLOW // 2
    GREEN // ..
    BLUE
    INDIGO
    VIOLET // 6
)
```



----

## 变量

### 声明变量

声明变量的一般形式是使用 var 关键字：**var identifier type**。

需要注意的是，Go 和许多编程语言不同，**它在声明变量时将变量的类型放在变量的名称之后**。Go 为什么要选择这么做呢？

首先，它是为了避免像 C 语言中那样含糊不清的声明形式，例如：int* a, b;。在这个例子中，只有 a 是指针而 b 不是。如果你想要这两个变量都是指针，则需要将它们分开书写（你可以在 Go 语言的声明语法 页面找到有关于这个话题的更多讨论）。

**而在 Go 中，则可以很轻松地将它们都声明为指针类型**：

```go
var a, b *int
```

其次，这种语法能够按照从左至右的顺序阅读，使得代码更加容易理解。

示例：

```go
var a int
var b bool
var str string
```

你也可以改写成这种形式：

```go
var (
    a int
    b bool
    str string
)
```

这种因式分解关键字的写法一般用于声明全局变量。

**当一个变量被声明之后，系统自动赋予它该类型的零值**：int 为 0，float 为 0.0，bool 为 false，string 为空字符串，指针为 nil。记住，所有的内存在 Go 中都是经过初始化的。

**变量的命名规则遵循骆驼命名法**，即首个单词小写，每个新单词的首字母大写，例如：numShips 和 startDate。

但如果**你的全局变量希望能够被外部包所使用，则需要将首个单词的首字母也大写**。



一个变量（常量、类型或函数）在程序中都有一定的作用范围，称之为**作用域**。如果一个变量在函数体外声明，则被认为是**全局变量**，可以在整个包甚至外部包（被导出后）使用，不管你声明在哪个源文件里或在哪个源文件里调用该变量。

在函数体内声明的变量称之为**局部变量**，它们的作用域只在函数体内，**参数和返回值变量也是局部变量**。在第 5 章，我们将会学习到像 if 和 for 这些控制结构，而在这些结构中声明的变量的作用域只在相应的代码块内。一般情况下，局部变量的作用域可以通过代码块（用大括号括起来的部分）判断。

尽管变量的标识符必须是唯一的，但你可以在某个代码块的内层代码块中使用相同名称的变量，**则此时外部的同名变量将会暂时隐藏**（结束内部代码块的执行后隐藏的外部同名变量又会出现，而内部同名变量则被释放），**你任何的操作都只会影响内部代码块的局部变量**。

变量可以编译期间就被赋值，赋值给变量使用运算符等号 =，当然你也可以在运行时对变量进行赋值操作。

示例：

```go
a = 15
b = false
```

**一般情况下，当变量 a 和变量 b 之间类型相同时，才能进行如 a = b 的赋值。**

声明与赋值（初始化）语句也可以组合起来。

示例：

```go
var identifier [type] = value
var a int = 15
var i = 5
var b bool = false
var str string = "Go says hello to the world!"
```

但是 Go 编译器的智商已经高到可以根据变量的值来自动推断其类型，这有点像 Ruby 和 Python 这类动态语言，只不过它们是在运行时进行推断**，而 Go 是在编译时就已经完成推断过程**。因此，你还可以使用下面的这些形式来声明及初始化变量：

```go
var a = 15
var b = false
var str = "Go says hello to the world!"
```

或：

```go
var (
    a = 15
    b = false
    str = "Go says hello to the world!"
    numShips = 50
    city string
)
```

**不过自动推断类型并不是任何时候都适用的**，当你想要给变量的类型并不是自动推断出的某种类型时，你还是需要显式指定变量的类型，例如：

```go
var n int64 = 2
```

然而，var a 这种语法是不正确的，因为编译器没有任何可以用于自动推断类型的依据。变量的类型也可以在运行时实现自动推断，例如：

```go
var (
    HOME = os.Getenv("HOME")
    USER = os.Getenv("USER")
    GOROOT = os.Getenv("GOROOT")
)
```

这种写法主要用于声明包级别的全局变量，**当你在函数体内声明局部变量时，应使用简短声明语法 :=**，例如：

```go
a := 1
```

下面这个例子展示了如何通过 runtime 包在运行时获取所在的操作系统类型，以及如何通过 os 包中的函数 os.Getenv() 来获取环境变量中的值，并保存到 string 类型的局部变量 path 中。

```go
package main

import (
	"fmt"
	"runtime"
	"os"
)

func main() {
	var goos string = runtime.GOOS;
	fmt.Printf("The operating system is: %s\n", goos)  // The operating system is: windows
	path := os.Getenv("PATH")
	fmt.Printf("Path is: %s\n", path)  // Path is: C:\Program Files\Common Files\Oracle\Java\javapath;...
}
```

如果你在 Windows 下运行这段代码，则会输出 The operating system is: windows 以及相应的环境变量的值；如果你在 Linux 下运行这段代码，则会输出 The operating system is: linux 以及相应的的环境变量的值。

这里用到了 Printf 的格式化输出的功能（第 4.4.3 节）。

----

### 值类型和引用类型

程序中所用到的内存在计算机中使用一堆箱子来表示（这也是人们在讲解它的时候的画法），**这些箱子被称为 “字”**。根据不同的处理器以及操作系统类型，所有的字都具有 32 位（4 字节）或 64 位（8 字节）的相同长度；所有的字都使用相关的内存地址来进行表示（以十六进制数表示）。

所有像 int、float、bool 和 string 这些基本类型都属于**值类型**，使用这些类型的变量直接指向存在内存中的值

![file](https://cdn.learnku.com/uploads/images/201805/12/23/DoULBXMAuI.png?imageView2/2/w/1240/h/0)

另外，像数组（第 7 章）和结构（第 10 章）这些复合类型也是值类型。

当使用等号 = 将一个变量的值赋值给另一个变量时，如：j = i，实际上是在内存中将 i 的值进行了拷贝：

![file](https://cdn.learnku.com/uploads/images/201805/12/23/Bb94TEHJHf.png?imageView2/2/w/1240/h/0)

你可以通过 &i 来获取变量 i 的内存地址（第 4.9 节），例如：0xf840000040（每次的地址都可能不一样）。**值类型的变量的值存储在栈中。**

内存地址会根据机器的不同而有所不同，甚至相同的程序在不同的机器上执行后也会有不同的内存地址。因为每台机器可能有不同的存储器布局，并且位置分配也可能不同。

**更复杂的数据通常会需要使用多个字，这些数据一般使用引用类型保存。**

一个引用类型的变量 r1 存储的是 r1 的值所在的内存地址（数字），或内存地址中第一个字所在的位置。

![file](https://cdn.learnku.com/uploads/images/201805/12/23/TjrUdiGZbh.png?imageView2/2/w/1240/h/0)

这个内存地址被称之为**指针**（你可以从上图中很清晰地看到，第 4.9 节将会详细说明），**这个指针实际上也被存在另外的某一个字中**。

同一个引用类型的指针指向的多个字可以是在连续的内存地址中（内存布局是连续的），这也是计算效率最高的一种存储形式；也可以将这些字分散存放在内存中，每个字都指示了下一个字所在的内存地址。

当使用赋值语句 r2 = r1 时，**只有引用（地址）被复制**。

如果 r1 的值被改变了，那么这个值的所有引用都会指向被修改后的内容，在这个例子中，r2 也会受到影响。

在 Go 语言中，**指针属于引用类型**，其它的引用类型还包括 slices（第 7 章），maps（第 8 章）和 channel（第 13 章）。被引用的变量会存储在堆中，以便进行垃圾回收，且比栈拥有更大的内存空间。



----

### 打印

函数 Printf 可以在 fmt 包外部使用，这是因为它以大写字母 P 开头，该函数主要用于打印输出到控制台。通常使用的格式化字符串作为第一个参数：

```go
func Printf(format string, list of variables to be printed)
```

在示例 4.5 中，格式化字符串为："The operating system is: %s\n"。

这个格式化字符串可以含有一个或多个的格式化标识符，例如：%..，其中 .. 可以被不同类型所对应的标识符替换，如 %s 代表字符串标识符、%v 代表使用类型的默认输出格式的标识符。这些标识符所对应的值从格式化字符串后的第一个逗号开始按照相同顺序添加，如果**参数超过 1 个则同样需要使用逗号分隔**。使用这些占位符可以很好地控制格式化输出的文本。

函数 fmt.Sprintf 与 Printf 的作用是完全相同的，不过前者将格式化后的字符串以返回值的形式返回给调用者，因此你可以在程序中使用包含变量的字符串，具体例子可以参见示例 15.4 simple_tcp_server.go。

```go
package main

import (
	"fmt"
)

func main() {
	var name = "kop"
	var age = 22
	fmt.Printf("your name is %s\n", name)  // your name is kop
	var res = fmt.Sprintf("your name is %s", name)
	fmt.Println(res)  // your name is kop

	fmt.Print(name, age, "\n")  // kop22
	fmt.Println(name, age)  // kop 22
}
```

函数 fmt.Print 和 fmt.Println 会自动使用格式化标识符 %v 对字符串进行格式化，**两者都会在每个参数之间自动增加空格**，而后者还会在字符串的最后加上一个换行符。例如：

```go
fmt.Print("Hello:", 23)
```

将输出：Hello: 23。



----

### 简短形式，使用 := 赋值操作符

我们知道可以在变量的初始化时省略变量的类型而由系统自动推断，而这个时候再在 Example 4.4.1 的最后一个声明语句写上 var 关键字就显得有些多余了，因此我们可以将它们简写为 a := 50 或 b := false。

a 和 b 的类型（int 和 bool）将由编译器自动推断。

**这是使用变量的首选形式，但是它只能被用在函数体内**，而不可以用于全局变量的声明与赋值。

使用操作符 := 可以高效地创建一个新的变量，称之为**初始化声明**。

注意事项

如果在相同的代码块中，**我们不可以再次对于相同名称的变量使用初始化声明**，例如：a := 20 就是不被允许的，编译器会提示错误 no new variables on left side of :=，但是 a = 20 是可以的，因为这是给相同的变量赋予一个新的值。

如果你在定义变量 a 之前使用它，则会得到编译错误 undefined: a。

如果你声明了一个局部变量却没有在相同的代码块中使用它，同样会得到编译错误，例如下面这个例子当中的变量 a：

```go
func main() {
   var a string = "abc"
   fmt.Println("hello, world")
}
```

尝试编译这段代码将得到错误 a declared and not used。

**此外，单纯地给 a 赋值也是不够的，这个值必须被使用**，所以使用 fmt.Println("hello, world", a) 会移除错误。

但是**全局变量是允许声明但不使用**。

其他的简短形式为：

同一类型的多个变量可以声明在同一行，如：

```go
var a, b, c int
```

(这是将类型写在标识符后面的一个重要原因)

多变量可以在同一行进行赋值，如：

```go
a, b, c = 5, 7, "abc"
```

上面这行假设了变量 a，b 和 c 都已经被声明，否则的话应该这样使用：

```go
a, b, c := 5, 7, "abc"
```

右边的这些值以相同的顺序赋值给左边的变量，所以 a 的值是 5， b 的值是 7，c 的值是 "abc"。

这被称为 **并行 或 同时 赋值**。



**如果你想要交换两个变量的值，则可以简单地使用 a, b = b, a**。

(在 Go 语言中，这样省去了使用交换变量的必要)

**空白标识符 _ 也被用于抛弃值**，如值 5 在：_, b = 5, 7 中被抛弃。

_ 实际上是一个**只写变量**，你不能得到它的值。这样做是因为 Go 语言中你必须使用所有被声明的变量，**但有时你并不需要使用从一个函数得到的所有返回值。**

并行赋值也被用于当一个函数返回多个返回值时，比如这里的 val 和错误 err 是通过调用 Func1 函数同时得到：val, err = Func1(var1)。



----

### init 函数

变量除了可以在全局声明中初始化，也可以在 init 函数中初始化。**这是一类非常特殊的函数**，它不能够被人为调用，**而是在每个包完成初始化后自动执行，并且执行优先级比 main 函数高。**

每个源文件都**只能包含一个 init 函数**。初始化总是以单线程执行，并且按照包的依赖关系顺序执行。

一个可能的用途是在开始执行程序之前对数据进行检验或修复，以保证程序状态的正确性。

示例 4.6 init.go:

```go
package trans

import "math"

var Pi float64

func init() {
   Pi = 4 * math.Atan(1) // init() function computes Pi
}
```

在它的 init 函数中计算变量 Pi 的初始值。

示例 4.7 user_init.go 中导入了包 trans（需要 init.go 目录为./trans/init.go）并且使用到了变量 Pi：
（此处应注意，自定义包的路径应处于 $GOPATH/src 目录下）

```go
package main

import (
   "fmt"
   "./trans"
)

var twoPi = 2 * trans.Pi

func main() {
   fmt.Printf("2*Pi = %g\n", twoPi) // 2*Pi = 6.283185307179586
}
```

init 函数也经常被用在当一个程序开始之前调用后台执行的 goroutine，如下面这个例子当中的 backend()：

```go
func init() {
   // setup preparations
   go backend()
}
```

练习 推断以下程序的输出，并解释你的答案，然后编译并执行它们。

练习 4.1 local_scope.go:

```go
package main

var a = "G"

func main() {
   n()
   m()
   n()
}

func n() { print(a) }

func m() {
   a := "O"
   print(a)
}
// GOG
```

练习 4.2 global_scope.go:

```go
package main

var a = "G"

func main() {
   n()
   m()
   n()
}

func n() {
   print(a)
}

func m() {
   a = "O"
   print(a)
}
// GOO
```

练习 4.3 function_calls_function.go

```go
package main

var a string

func main() {
   a = "G"
   print(a)
   f1()
}

func f1() {
   a := "O"
   print(a)
   f2()
}

func f2() {
   print(a)
}
// GOG
```



----

## 基本类型和运算符

我们将在这个部分讲解有关布尔型、数字型和字符型的相关知识。

表达式是一种特定的类型的值，它可以由其它的值以及运算符组合而成。每个类型都定义了可以和自己结合的运算符集合，如果你使用了不在这个集合中的运算符，则会在编译时获得编译错误。

一元运算符只可以用于一个值的操作（作为后缀），而二元运算符则可以和两个值或者操作数结合（作为中缀）。

**只有两个类型相同的值才可以和二元运算符结合**，另外要注意的是，Go 是强类型语言，因此不会进行隐式转换，任何不同类型之间的转换都必须显式说明。Go 不存在像 C 和 Java 那样的运算符重载，**表达式的解析顺序是从左至右**。

你可以在第 4.5.3 节找到有关运算符优先级的相关信息，优先级越高的运算符在条件相同的情况下将被优先执行。但是你可以通过使用括号将其中的表达式括起来，以人为地提升某个表达式的运算优先级。



----

### 布尔类型 bool

一个简单的例子：var b bool = true。

**布尔型的值只可以是常量 true 或者 false。**

两个类型相同的值可以使用相等 == 或者不等 != 运算符来进行比较并获得一个布尔型的值。

当相等运算符两边的值是完全相同的值的时候会返回 true，否则返回 false，**并且只有在两个的值的类型相同的情况下才可以使用**。

示例：

```go
var aVar = 10
aVar == 5 -> false
aVar == 10 -> true
```

当不等运算符两边的值是不同的时候会返回 true，否则返回 false。

示例：

```go
var aVar = 10
aVar != 5 -> true
aVar != 10 -> false
```

Go 对于值之间的比较有非常严格的限制，**只有两个类型相同的值才可以进行比较**，如果值的类型是接口，它们也必须都实现了相同的接口。如果其中一个值是常量，那么另外一个值的类型必须和该常量类型相兼容的。如果以上条件都不满足，则其中一个值的类型必须在被转换为和另外一个值的类型相同之后才可以进行比较。

布尔型的常量和变量也可以通过和逻辑运算符（非 !、和 &&、或 ||）结合来产生另外一个布尔值，**这样的逻辑语句就其本身而言，并不是一个完整的 Go 语句。**

逻辑值可以被用于条件结构中的条件语句（第 5 章），以便测试某个条件是否满足。另外，和 &&、或 || 与相等 == 或不等 != 属于二元运算符，而非 ! 属于一元运算符。在接下来的内容中，**我们会使用 T 来代表条件符合的语句，用 F 来代表条件不符合的语句**。

Go 语言中包含以下逻辑运算符：

非运算符：!

```go
!T -> false
!F -> true
```

非运算符用于取得和布尔值相反的结果。

和运算符：&&

```go
T && T -> true
T && F -> false
F && T -> false
F && F -> false
```

只有当两边的值都为 true 的时候，和运算符的结果才是 true。

或运算符：||

```go
T || T -> true
T || F -> true
F || T -> true
F || F -> false
```

只有当两边的值都为 false 的时候，或运算符的结果才是 false，其中任意一边的值为 true 就能够使得该表达式的结果为 true。

在 Go 语言中，**&& 和 || 是具有快捷性质的运算符**，当运算符左边表达式的值已经能够决定整个表达式的值的时候（&& 左边的值为 false，|| 左边的值为 true），运算符右边的表达式将不会被执行。**利用这个性质，如果你有多个条件判断，应当将计算过程较为复杂的表达式放在运算符的右侧以减少不必要的运算。**

利用括号同样可以升级某个表达式的运算优先级。

在格式化输出时，**你可以使用 %t 来表示你要输出的值为布尔型**。

布尔值（以及任何结果为布尔值的表达式）最常用在条件结构的条件语句中，例如：if、for 和 switch 结构（第 5 章）。

**对于布尔值而言，好的命名能够很好地提升代码的可读性**。例如以 is 或者 Is 开头的 isSorted、isFinished、isVisible，使用这样的命名能够在阅读代码的获得阅读正常语句一样的良好体验，例如标准库中的 unicode.IsDigit(ch)（第 4.5.5 节）。



----

### 数字类型

#### 整型 int 和浮点型 float

Go 语言支持整型和浮点型数字，并且原生支持复数，其中位的运算采用补码。

Go 也有基于架构的类型，例如：int、uint 和 uintptr。

这些类型的长度都是根据运行程序所在的操作系统类型所决定的：

int 和 uint 在 32 位操作系统上，它们均使用 32 位（4 个字节），在 64 位操作系统上，它们均使用 64 位（8 个字节）。
**uintptr 的长度被设定为足够存放一个指针即可。**

Go 语言中**没有 float 类型**。（Go 语言中只有 float32 和 float64）**没有 double 类型**。

与操作系统架构无关的类型都有固定的大小，并在类型的名称中就可以看出来：

整数：

```go
int8（-128 -> 127）
int16（-32768 -> 32767）
int32（-2,147,483,648 -> 2,147,483,647）
int64（-9,223,372,036,854,775,808 -> 9,223,372,036,854,775,807）
```

无符号整数：

```go
uint8（0 -> 255）
uint16（0 -> 65,535）
uint32（0 -> 4,294,967,295）
uint64（0 -> 18,446,744,073,709,551,615）
```

浮点型（IEEE-754 标准）：

```go
float32（+- 1e-45 -> +- 3.4 * 1e38）
float64（+- 5 1e-324 -> 107 1e308）
```

**int 型是计算最快的一种类型。**

整型的零值为 0，浮点型的零值为 0.0。

float32 精确到小数点后 7 位，float64 精确到小数点后 15 位。

**由于精确度的缘故，你在使用 == 或者 != 来比较浮点数时应当非常小心**。你最好在正式使用前测试对于精确度要求较高的运算。

**你应该尽可能地使用 float64**，因为 math 包中所有有关数学运算的函数都会要求接收这个类型。

你可以通过增加前缀 0 来表示 8 进制数（如：077），增加前缀 0x 来表示 16 进制数（如：0xFF），以及使用 e 来表示 10 的连乘（如： 1e3 = 1000，或者 6.022e23 = 6.022 x 1e23）。

你可以使用 a := uint64(0) 来同时完成类型转换和赋值操作，这样 a 的类型就是 uint64。

**Go 中不允许不同类型之间的混合使用**，但是对于常量的类型限制非常少，因此允许常量之间的混合使用，下面这个程序很好地解释了这个现象（该程序无法通过编译）：

示例 4.8 type_mixing.go

```go
package main

func main() {
    var a int
    var b int32
    a = 15
    b = a + a    // 编译错误
    b = b + 5    // 因为 5 是常量，所以可以通过编译
}
```

如果你尝试编译该程序，则将得到编译错误 cannot use a + a (type int) as type int32 in assignment。

同样地，int16 也不能够被隐式转换为 int32。

下面这个程序展示了通过显式转换来避免这个问题（第 4.2 节）。

示例 4.9 casting.go

```go
package main

import "fmt"

func main() {
    var n int16 = 34
    var m int32
    // compiler error: cannot use n (type int16) as type int32 in assignment
    //m = n
    m = int32(n)
    fmt.Printf("32 bit int is: %d\n", m)
    fmt.Printf("16 bit int is: %d\n", n)
}
```


输出：

```
32 bit int is: 34
16 bit int is: 34
```

**格式化说明符**

在格式化字符串里，%d 用于格式化整数（%x 和 %X 用于格式化 16 进制表示的数字），%g 用于格式化浮点型（%f 输出浮点数，%e 输出科学计数表示法），%0d 用于规定输出定长的整数，其中开头的数字 0 是必须的。

%n.mg 用于表示数字 n 并精确到小数点后 m 位，除了使用 g 之外，还可以使用 e 或者 f，例如：使用格式化字符串 %5.2e 来输出 3.4 的结果为 3.40e+00。

**数字值转换**

当进行类似 a32bitInt = int32(a32Float) 的转换时，小数点后的数字将被丢弃。**这种情况一般发生当从取值范围较大的类型转换为取值范围较小的类型时**，或者你可以写一个专门用于处理类型转换的函数来确保没有发生精度的丢失。下面这个例子展示如何安全地从 int 型转换为 int8：

```go
func Uint8FromInt(n int) (uint8, error) {
    if 0 <= n && n <= math.MaxUint8 { // conversion is safe
        return uint8(n), nil
    }
    return 0, fmt.Errorf("%d is out of the uint8 range", n)
}
```

或者安全地从 float64 转换为 int：

```go
func IntFromFloat64(x float64) int {
    if math.MinInt32 <= x && x <= math.MaxInt32 { // x lies in the integer range
        whole, fraction := math.Modf(x)
        if fraction >= 0.5 {
            whole++
        }
        return int(whole)
    }
    panic(fmt.Sprintf("%g is out of the int32 range", x))
}
```

不过如果你实际存的数字超出你要转换到的类型的取值范围的话，则会引发 panic（第 13.2 节）。

问题 4.1 int 和 int64 是相同的类型吗？



----

#### 复数

Go 拥有以下复数类型：

complex64 (32 位实数和虚数)
complex128 (64 位实数和虚数)

**复数使用 re+imI 来表示**，其中 re 代表实数部分，im 代表虚数部分，I 代表根号负 1。

示例：

```go
var c1 complex64 = 5 + 10i
fmt.Printf("The value is: %v", c1)
// 输出： 5 + 10i
```

如果 re 和 im 的类型均为 float32，那么类型为 complex64 的复数 c 可以通过以下方式来获得：

```go
c = complex(re, im)
```

**函数 real(c) 和 imag(c) 可以分别获得相应的实数和虚数部分。**

在使用格式化说明符时，可以使用 %v 来表示复数，但当你希望只表示其中的一个部分的时候需要使用 %f。

复数支持和其它数字类型一样的运算。当你使用等号 == 或者不等号 != 对复数进行比较运算时，注意对精确度的把握。cmath 包中包含了一些操作复数的公共方法。如果你对内存的要求不是特别高，最好使用 complex128 作为计算类型，因为相关函数都使用这个类型的参数。



----

#### 位运算

**位运算只能用于整数类型的变量**，且需当它们拥有等长位模式时。

%b 是用于表示位的格式化标识符。

##### **二元运算符**

**按位与 &**：

对应位置上的值经过和运算结果，具体参见和运算符，第 4.5.1 节，并将 T（true）替换为 1，将 F（false）替换为 0

```go
1 & 1 -> 1
1 & 0 -> 0
0 & 1 -> 0
0 & 0 -> 0
```

**按位或 |**：

对应位置上的值经过或运算结果，具体参见或运算符，第 4.5.1 节，并将 T（true）替换为 1，将 F（false）替换为 0

```go
1 | 1 -> 1
1 | 0 -> 1
0 | 1 -> 1
0 | 0 -> 0
```

**按位异或 ^**：

对应位置上的值根据以下规则组合：

```go
1 ^ 1 -> 0
1 ^ 0 -> 1
0 ^ 1 -> 1
0 ^ 0 -> 0
```

**位清除 &^**：将指定位置上的值设置为 0。



##### 一元运算符

**按位补足 ^**：

该运算符与异或运算符一同使用，即 m^x，对于无符号 x 使用 “全部位设置为 1”，对于有符号 x 时使用 m=-1。例如：

```go
^2 = ^10 = -01 ^ 10 = -11
```

**位左移 <<**：

用法：bitP << n。
bitP 的位向左移动 n 位，右侧空白部分使用 0 填充；如果 n 等于 2，则结果是 2 的相应倍数，即 2 的 n 次方。例如：

```go
1 << 10 // 等于 1 KB
1 << 20 // 等于 1 MB
1 << 30 // 等于 1 GB
```

**位右移 >>**：

用法：bitP >> n。
bitP 的位向右移动 n 位，左侧空白部分使用 0 填充；如果 n 等于 2，则结果是当前值除以 2 的 n 次方。

当希望把结果赋值给第一个操作数时，可以简写为 a <<= 2 或者 b ^= a & 0xffffffff。

位左移常见实现存储单位的用例

**使用位左移与 iota 计数配合可优雅地实现存储单位的常量枚举**：

```go
type ByteSize float64
const (
    _ = iota // 通过赋值给空白标识符来忽略值
    KB ByteSize = 1<<(10*iota)
    MB
    GB
    TB
    PB
    EB
    ZB
    YB
)
```

在通讯中使用位左移表示标识的用例

```go
type BitFlag int
const (
    Active BitFlag = 1 << iota // 1 << 0 == 1
    Send // 1 << 1 == 2
    Receive // 1 << 2 == 4
)

flag := Active | Send // == 3
```



----

#### 逻辑运算符

Go 中拥有以下逻辑运算符：==、!=（第 4.5.1 节）、<、<=、>、>=。

它们之所以**被称为逻辑运算符是因为它们的运算结果总是为布尔值 bool**。例如：

```go
b3:= 10 > 5 // b3 is true
```



----

#### 算术运算符

常见可用于整数和浮点数的二元运算符有 +、-、* 和 /。

（相对于一般规则而言，Go 在进行字符串拼接时允许使用对运算符 + 的重载，但 Go 本身不允许开发者进行自定义的运算符重载）

**/ 对于整数运算而言，结果依旧为整数**，例如：9 / 4 -> 2。

取余运算符只能作用于整数：9 % 4 -> 1。

**整数除以 0 可能导致程序崩溃**，将会导致运行时的恐慌状态（如果除以 0 的行为在编译时就能被捕捉到，则会引发编译错误）；第 13 章将会详细讲解如何正确地处理此类情况。

**浮点数除以 0.0 会返回一个无穷尽的结果，使用 +Inf 表示。**

练习 4.4 尝试编译 divby0.go。

```go
package main

func main() {
	a, b := 10, 0
	c := a / b // panic: runtime error: integer divide by zero

	print(c)
}
/*
panic: runtime error: integer divide by zero

goroutine 1 [running]:
main.main()
	E:/pogject/Go/test.go:5 +0x11
exit status 2
*/
```

你可以将语句 b = b + a 简写为 b+=a，同样的写法也可用于 -=、*=、/=、%=。

对于整数和浮点数，你可以使用一元运算符 ++（递增）和 --（递减），但只能用于后缀：

```go
i++ -> i += 1 -> i = i + 1
i-- -> i -= 1 -> i = i - 1
```

**同时，带有 ++ 和 -- 的只能作为语句**，而非表达式，因此 n = i++ 这种写法是无效的，其它像 f(i++) 或者 a[i]=b[i++] 这些可以用于 C、C++ 和 Java 中的写法**在 Go 中也是不允许的**。

**在运算时 溢出 不会产生错误，Go 会简单地将超出位数抛弃**。如果你需要范围无限大的整数或者有理数（意味着只被限制于计算机内存），你可以使用标准库中的 big 包，该包提供了类似 big.Int 和 big.Rat 这样的类型（第 9.4 节）。



----

#### 随机数

一些像游戏或者统计学类的应用需要用到随机数。rand 包实现了伪随机数的生成。

示例 4.10 random.go 演示了如何生成 10 个非负随机数：

```go
package main
import (
    "fmt"
    "math/rand"
    "time"
)

func main() {
    for i := 0; i < 10; i++ {
        a := rand.Int()
        fmt.Printf("%d / ", a)
    }
    for i := 0; i < 5; i++ {
        r := rand.Intn(8)
        fmt.Printf("%d / ", r)
    }
    fmt.Println()
    timens := int64(time.Now().Nanosecond())
    rand.Seed(timens)
    for i := 0; i < 10; i++ {
        fmt.Printf("%2.2f / ", 100*rand.Float32())
    }
}
```

可能的输出：

```
5577006791947779410 / 8674665223082153551 / 6129484611666145821 / 4037200794235010051 / 3916589616287113937 / 6334824724549167320 / 605394647632969758 / 1443635317331776148 / 894385949183117216 / 2775422040480279449 / 6 / 7 / 2 / 1 / 0 / 
10.50 / 94.26 / 2.22 / 22.15 / 17.73 / 51.12 / 61.93 / 11.52 / 69.21 / 18.83 / 
```

**函数 rand.Float32 和 rand.Float64 返回介于 [0.0, 1.0) 之间的伪随机数，其中包括 0.0 但不包括 1.0**。函数 rand.Intn 返回介于 [0, n) 之间的伪随机数。

你可以使用 Seed(value) 函数来提供伪随机数的生成种子，一般情况下都会使用当前时间的纳秒级数字（第 4.8 节）。



----

### 运算符与优先级

有些运算符拥有较高的优先级，**二元运算符的运算方向均是从左至右**。下表列出了所有运算符以及它们的优先级，由上至下代表优先级由高到低：

```go
优先级     运算符
 7      ^ !
 6      * / % << >> & &^
 5      + - | ^
 4      == != < <= >= >
 3      <-
 2      &&
 1      ||
```

当然，**你可以通过使用括号来临时提升某个表达式的整体运算优先级。**



----

### 类型别名

当你在使用某个类型时，你可以给它起另一个名字，然后你就可以在你的代码中使用新的名字（用于简化名称或解决名称冲突）。

在 type TZ int 中，TZ 就是 int 类型的新名称（用于表示程序中的时区），然后就可以使用 TZ 来操作 int 类型的数据。

示例 4.11 type.go

```go
package main
import "fmt"

type TZ int

func main() {
    var a, b TZ = 3, 4
    c := a + b
    fmt.Printf("c has the value: %d", c) // 输出：c has the value: 7
}
```

实际上，类型别名得到的新类型并非和原类型完全相同，新类型不会拥有原类型所附带的方法（第 10 章）；TZ 可以自定义一个方法用来输出更加人性化的时区信息。

练习 4.5 定义一个 string 的类型别名 Rope，并声明一个该类型的变量。

```go
package main
import "fmt"

type Rope string

func main() {
    var s Rope = "javascript"
    fmt.Printf("s has the value: %s", s) // s has the value: javascript
}
```



----

### 字符类型

严格来说，这并不是 Go 语言的一个类型，**字符只是整数的特殊用例**。byte 类型是 uint8 的别名，对于只占用 1 个字节的传统 ASCII 编码的字符来说，完全没有问题。例如：var ch byte = 'A'；**字符使用单引号括起来**。

在 ASCII 码表中，A 的值是 65，而使用 16 进制表示则为 41，所以下面的写法是等效的：

```go
var ch byte = 65 或 var ch byte = '\x41'
```

（\x 总是紧跟着长度为 2 的 16 进制数）

另外一种可能的写法是 \ 后面紧跟着长度为 3 的八进制数，例如：\377。

不过 Go 同样支持 Unicode（UTF-8），因此字符同样称为 Unicode 代码点或者 runes，并在内存中使用 int 来表示。在文档中，一般使用格式 U+hhhh 来表示，其中 h 表示一个 16 进制数。其实 rune 也是 Go 当中的一个类型，并且是 int32 的别名。

在书写 Unicode 字符时，需要在 16 进制数之前加上前缀 \u 或者 \U。

因为 Unicode 至少占用 2 个字节，所以我们使用 int16 或者 int 类型来表示。如果需要使用到 4 字节，则会加上 \U 前缀；前缀 \u 则总是紧跟着长度为 4 的 16 进制数，前缀 \U 紧跟着长度为 8 的 16 进制数。

示例 4.12 char.go

```go
var ch int = '\u0041'
var ch2 int = '\u03B2'
var ch3 int = '\U00101234'
fmt.Printf("%d - %d - %d\n", ch, ch2, ch3) // integer
fmt.Printf("%c - %c - %c\n", ch, ch2, ch3) // character
fmt.Printf("%X - %X - %X\n", ch, ch2, ch3) // UTF-8 bytes
fmt.Printf("%U - %U - %U", ch, ch2, ch3) // UTF-8 code point
```

输出：

```
65 - 946 - 1053236
A - β - r
41 - 3B2 - 101234
U+0041 - U+03B2 - U+101234
```

**格式化说明符 %c 用于表示字符**；当和字符配合使用时，%v 或 %d 会输出用于表示该字符的整数；%U 输出格式为 U+hhhh 的字符串（另一个示例见第 5.4.4 节）。

包 unicode 包含了一些针对测试字符的非常有用的函数（其中 ch 代表字符）：

- 判断是否为字母：unicode.IsLetter(ch)
- 判断是否为数字：unicode.IsDigit(ch)
- 判断是否为空白符号：unicode.IsSpace(ch)

这些函数返回一个布尔值。包 utf8 拥有更多与 rune 相关的函数。





----

## 字符串

字符串是 UTF-8 字符的一个序列（当字符为 ASCII 码时则占用 1 个字节，其它字符根据需要占用 2-4 个字节）。UTF-8 是被广泛使用的编码格式，是文本文件的标准编码，其它包括 XML 和 JSON 在内，也都使用该编码。由于该编码对占用字节长度的不定性，**Go 中的字符串也可能根据需要占用 1 至 4 个字节**（示例见第 4.6 节），这与其它语言如 C++、Java 或者 Python 不同（Java 始终使用 2 个字节）。Go 这样做的好处是不仅减少了内存和硬盘空间占用，同时也不用像其它语言那样需要对使用 UTF-8 字符集的文本进行编码和解码。

**字符串是一种值类型，且值不可变**，即创建某个文本后你无法再次修改这个文本的内容；更深入地讲，**字符串是字节的定长数组**。

Go 支持以下 2 种形式的字面值：

**解释字符串**：

该类字符串使用双引号括起来，其中的相关的转义字符将被替换，这些转义字符包括：

- \n：换行符

- \r：回车符
- \t：tab 键
- \u 或 \U：Unicode 字符
- \\：反斜杠自身

**非解释字符串**：

该类字符串使用反引号括起来，支持换行，例如：

```go
`This is a raw string \n` 中的 `\n\` 会被原样输出。
```

和 C/C++ 不一样，Go 中的字符串是根据长度限定，而非特殊字符 \0。

**string 类型的零值为长度为零的字符串，即空字符串 ""。**

一般的比较运算符（==、!=、<、<=、>=、>）通过在内存中按字节比较来实现字符串的对比。你可以通过函数 len() 来获取字符串所占的字节长度，例如：len(str)。

字符串的内容（纯字节）可以通过标准索引法来获取，在中括号 [] 内写入索引，索引从 0 开始计数：

- 字符串 str 的第 1 个字节：str[0]

- 第 i 个字节：str[i - 1]
- 最后 1 个字节：str[len(str)-1]

需要注意的是，这种转换方案只对纯 ASCII 码的字符串有效。

注意事项 **获取字符串中某个字节的地址的行为是非法的**，例如：&str[i]。

**字符串拼接符 +**

两个字符串 s1 和 s2 可以通过 s := s1 + s2 拼接在一起。

s2 追加在 s1 尾部并生成一个新的字符串 s。

你可以通过以下方式来对代码中多行的字符串进行拼接：

```go
str := "Beginning of the string " +
    "second part of the string"
```

由于编译器行尾自动补全分号的缘故，**加号 + 必须放在第一行**。

拼接的简写形式 += 也可以用于字符串：

```go
s := "hel" + "lo,"
s += "world!"
fmt.Println(s) //输出 “hello, world!”
```

在循环中使用加号 + 拼接字符串并不是最高效的做法，**更好的办法是使用函数 strings.Join()**（第 4.7.10 节），有没有更好地办法了？有！使用字节缓冲（bytes.Buffer）拼接更加给力（第 7.2.6 节）！

在第 7 章，我们会讲到通过将字符串看作是字节（byte）的切片（slice）来实现对其标准索引法的操作。会在第 5.4.1 节中讲到的 for 循环只会根据索引返回字符串中的纯字节，而在第 5.4.4 节（以及第 7.6.1 节的示例）将会展示如何使用 for-range 循环来实现对 Unicode 字符串的迭代操作。在下一节，我们会学习到许多有关字符串操作的函数和方法，同时 fmt 包中的 fmt.Sprint(x) 也可以格式化生成并返回你所需要的字符串（第 4.4.3 节）。

练习 4.6 count_characters.go

创建一个用于统计字节和字符（rune）的程序，并对字符串 asSASA ddd dsjkdsjs dk 进行分析，然后再分析 asSASA ddd dsjkdsjsこん dk，最后解释两者不同的原因（提示：使用 unicode/utf8 包）。

```go
package main

import (
	"fmt"
	"unicode/utf8"
)

func main() {
	// count number of characters:
	str1 := "asSASA ddd dsjkdsjs dk"
	fmt.Printf("The number of bytes in string str1 is %d\n", len(str1))
	fmt.Printf("The number of characters in string str1 is %d\n", utf8.RuneCountInString(str1))
	
    str2 := "asSASA ddd dsjkdsjsこん dk"
	fmt.Printf("The number of bytes in string str2 is %d\n", len(str2))
	fmt.Printf("The number of characters in string str2 is %d", utf8.RuneCountInString(str2))
}

/*
The number of bytes in string str1 is 22
The number of characters in string str1 is 22
The number of bytes in string str2 is 28
The number of characters in string str2 is 24
*/
```



----

## strings 和 strconv 包

作为一种基本数据结构，每种语言都有一些对于字符串的预定义处理函数。Go 中使用 `strings` 包来完成对字符串的主要操作。

###  前缀和后缀

HasPrefix 判断字符串 s 是否以 prefix 开头：

```go
strings.HasPrefix(s, prefix string) bool
```

HasSuffix 判断字符串 s 是否以 suffix 结尾：

```go
strings.HasSuffix(s, suffix string) bool
```

```go
package main

import (
	"fmt"
	"strings"
)

func main() {
	var str string = "this is an example of a string"
	fmt.Printf("T/F? Does the string \"%s\" have prefix %s? ", str, "Th")
	fmt.Printf("%t\n", strings.HasPrefix(str, "Th"))
	fmt.Printf("%t\n", strings.HasSuffix(str, "ing"))
}
```

### 字符串包含关系

`Contains` 判断字符串 `s` 是否包含 `substr`：

```php
strings.Contains(s, substr string) bool
```

```go
package main

import (
	"fmt"
	"strings"
)

func main() {
	var str string = "this is a good thing for you"
	fmt.Println(strings.Contains(str, "o"))  // true
	fmt.Println(strings.Contains(str, "b"))  // false
}
```



### 判断子字符串或字符在父字符串中出现的位置（索引）

Index 返回字符串 str 在字符串 s 中的索引（str 的第一个字符的索引），-1 表示字符串 s 不包含字符串 str：

```go
strings.Index(s, str string) int
```

LastIndex 返回字符串 str 在字符串 s 中最后出现位置的索引（str 的第一个字符的索引），-1 表示字符串 s 不包含字符串 str：

```go
strings.LastIndex(s, str string) int
```

如果 ch 是非 ASCII 编码的字符，建议使用以下函数来对字符进行定位：

```go
strings.IndexRune(s string, r rune) int
```



```go
package main

import (
	"fmt"
	"strings"
)

func main() {
	var str string = "this is a good thing for you"
	fmt.Println(strings.Index(str, "o"))  // 11
	fmt.Println(strings.Index(str, "b"))  // -1
	fmt.Println(strings.LastIndex(str, "o"))  // 26
}
```

### 字符串替换

Replace 用于将字符串 str 中的前 n 个字符串 old 替换为字符串 new，并返回一个新的字符串，如果 n = -1 则替换所有字符串 old 为字符串 new：

```go
strings.Replace(str, old, new string, n int) string
```

```go
package main

import (
	"fmt"
	"strings"
)

func main() {
	var str string = "this is a good thing for you"
	fmt.Println(strings.Replace(str, "o", "O", 2))  // this is a gOOd thing for you
	fmt.Println(strings.Replace(str, "o", "O", -1))  // this is a gOOd thing fOr yOu
}
```

### 统计字符串出现次数

`Count` 用于计算字符串 `str` 在字符串 `s` 中出现的非重叠次数：

```go
strings.Count(s, str string) int
```

```go
package main

import (
	"fmt"
	"strings"
)

func main() {
	var str string = "this is a good thing for you"
	fmt.Println(strings.Count(str, "o"))  // 4
	fmt.Println(strings.Count(str, "is"))  // 2
}
```

### 重复字符串

`Repeat` 用于重复 `count` 次字符串 `s` 并返回一个新的字符串：

```go
strings.Repeat(s, count int) string
```

```go
package main

import (
	"fmt"
	"strings"
)

func main() {
	var str string = "O"
	fmt.Println(strings.Repeat(str, 4))  // OOOO
}
```

### 修改字符串大小写

ToLower 将字符串中的 Unicode 字符全部转换为相应的小写字符：

```go
strings.ToLower(s) string
```

ToUpper 将字符串中的 Unicode 字符全部转换为相应的大写字符：

```go
strings.ToUpper(s) string
```

```go
package main

import (
	"fmt"
	"strings"
)

func main() {
	var str1 string = "this is a good thing for you"
	var str2 string = "How Old Are You"
	fmt.Println(strings.ToUpper(str1))  // THIS IS A GOOD THING FOR YOU
	fmt.Println(strings.ToLower(str2))  // how old are you
}
```

### 修剪字符串

你可以使用 strings.TrimSpace(s) 来剔除字符串开头和结尾的空白符号；

如果你想要剔除指定字符，则可以使用 strings.Trim(s, "cut") 来将开头和结尾的 cut 去除掉。

该函数的第二个参数可以包含任何字符，如果你只想剔除开头或者结尾的字符串，则可以使用 TrimLeft 或者 TrimRight 来实现。

```go
package main

import (
	"fmt"
	"strings"
)

func main() {
	var str1 string = "  this is a good thing for you "
	var str2 string = "how Old Are you oh"
	fmt.Println(strings.TrimSpace(str1))  // this is a good thing for you
	fmt.Println(strings.Trim(str2, "h"))  // ow Old Are you o
	fmt.Println(strings.TrimLeft(str2, "h"))  // ow Old Are you oh
	fmt.Println(strings.TrimRight(str2, "h"))  // how Old Are you o
}
```

### 分割字符串

strings.Fields(s) 利用空白作为分隔符将字符串分割为若干块，并返回一个 slice 。如果字符串只包含空白符号，返回一个长度为 0 的 slice 。

strings.Split(s, sep) 自定义分割符号对字符串分割，返回 slice 。

因为这 2 个函数都会返回 slice，所以习惯使用 for-range 循环来对其进行处理

```go
package main

import (
	"fmt"
	"strings"
)

func main() {
	var str1 string = "this is a good thing for you "
	fmt.Println(strings.Fields(str1))  // [this is a good thing for you]
	var str2 string = "abcabcabc"
	fmt.Println(strings.Split(str2, "b"))  // [a ca ca c]
}
```

### 拼接 slice 到字符串

Join 用于将元素类型为 string 的 slice 使用分割符号来拼接组成一个字符串：

```go
strings.Join(sl []string, sep string) string
```

```go
package main

import (
	"fmt"
	"strings"
)

func main() {
	str1 := "this is a good thing for you "
	str2 := strings.Fields(str1)
	fmt.Println(strings.Join(str2, "|"))  // this|is|a|good|thing|for|you
}
```

### 从字符串中读取内容

函数 strings.NewReader(str) 用于生成一个 Reader 并读取字符串中的内容，然后返回指向该 Reader 的指针，从其它类型读取内容的函数还有：

Read() 从 [] byte 中读取内容。
ReadByte() 和 ReadRune() 从字符串中读取下一个 byte 或者 rune。

```

```

### 字符串与其它类型的转换

与字符串相关的类型转换都是通过 strconv 包实现的。

该包包含了一些变量用于获取程序运行的操作系统平台下 int 类型所占的位数，如：strconv.IntSize。

任何类型 T 转换为字符串总是成功的。

针对从数字类型转换到字符串，Go 提供了以下函数：

strconv.Itoa(i int) string 返回数字 i 所表示的字符串类型的十进制数。
strconv.FormatFloat(f float64, fmt byte, prec int, bitSize int) string 将 64 位浮点型的数字转换为字符串，其中 fmt 表示格式（其值可以是 'b'、'e'、'f' 或 'g'），prec 表示精度，bitSize 则使用 32 表示 float32，用 64 表示 float64。
将字符串转换为其它类型 tp 并不总是可能的，可能会在运行时抛出错误 parsing "…": invalid argument。

针对从字符串类型转换为数字类型，Go 提供了以下函数：

strconv.Atoi(s string) (i int, err error) 将字符串转换为 int 型。
strconv.ParseFloat(s string, bitSize int) (f float64, err error) 将字符串转换为 float64 型。
利用多返回值的特性，这些函数会返回 2 个值，第 1 个是转换后的结果（如果转换成功），第 2 个是可能出现的错误，因此，我们一般使用以下形式来进行从字符串到其它类型的转换：

```go
val, err = strconv.Atoi(s)
```

```go
package main

import (
    "fmt"
    "strconv"
)

func main() {
    var orig string = "666"
    var an int
    var newS string

    fmt.Printf("The size of ints is: %d\n", strconv.IntSize)  // The size of ints is: 64

    an, _ = strconv.Atoi(orig)
    fmt.Printf("The integer is: %d\n", an)  // The integer is: 666
    an = an + 5
    newS = strconv.Itoa(an)
    fmt.Printf("The new string is: %s\n", newS)  // The new string is: 671
}
```



----

## 时间和日期

time 包为我们提供了一个数据类型 time.Time（作为值使用）以及显示和测量时间和日期的功能函数。

当前时间可以使用 time.Now() 获取，或者使用 t.Day()、t.Minute() 等等来获取时间的一部分；你甚至可以自定义时间格式化字符串，例如： fmt.Printf("%02d.%02d.%4d\n", t.Day(), t.Month(), t.Year()) 将会输出 21.07.2011。

Duration 类型表示两个连续时刻所相差的纳秒数，类型为 int64。Location 类型映射某个时区的时间，UTC 表示通用协调世界时间。

包中的一个预定义函数 func (t Time) Format(layout string) string 可以根据一个格式化字符串来将一个时间 t 转换为相应格式的字符串，你可以使用一些预定义的格式，如：time.ANSIC 或 time.RFC822。

一般的格式化设计是通过对于一个标准时间的格式化描述来展现的，这听起来很奇怪，但看下面这个例子你就会一目了然：

```
fmt.Println(t.Format("02 Jan 2006 15:04")) 
```

```go
package main
import (
    "fmt"
    "time"
)

var week time.Duration
func main() {
    t := time.Now()
    fmt.Println(t) // 2022-10-03 15:38:27.2238134 +0800 CST m=+0.003759901
    fmt.Printf("%02d.%02d.%4d\n", t.Day(), t.Month(), t.Year())
    // 03.10.2022
    t = time.Now().UTC()
    fmt.Println(t) // 2022-10-03 07:38:27.2384557 +0000 UTC
    fmt.Println(time.Now()) // 2022-10-03 15:38:27.2384557 +0800 CST m=+0.018402201
    // calculating times:
    week = 60 * 60 * 24 * 7 * 1e9 // must be in nanosec
    week_from_now := t.Add(week)
    fmt.Println(week_from_now) // 2022-10-10 07:38:27.2384557 +0000 UTC
    // formatting times:
    fmt.Println(t.Format(time.RFC822)) // 03 Oct 22 07:38 UTC
    fmt.Println(t.Format(time.ANSIC)) // Mon Oct  3 07:38:27 2022
    fmt.Println(t.Format("21 Dec 2011 08:52")) // 310 Dec 31010 08:273
    s := t.Format("20060102")
    fmt.Println(t, "=>", s)
    // 2022-10-03 07:38:27.2384557 +0000 UTC => 20221003
}
```



----

##  指针

不像 Java 和 .NET，Go 语言为程序员提供了控制数据结构的指针的能力；但是，你不能进行指针运算。通过给予程序员基本内存布局，Go 语言允许你控制特定集合的数据结构、分配的数量以及内存访问模式，这些对构建运行良好的系统是非常重要的：指针对于性能的影响是不言而喻的，而如果你想要做的是系统编程、操作系统或者网络应用，指针更是不可或缺的一部分。

由于各种原因，指针对于使用面向对象编程的现代程序员来说可能显得有些陌生，不过我们将会在这一小节对此进行解释，并在未来的章节中展开深入讨论。

程序在内存中存储它的值，每个内存块（或字）有一个地址，通常用十六进制数表示，如：0x6b0820 或 0xf84001d7f0。

**Go 语言的取地址符是 &**，放到一个变量前使用就会返回相应变量的内存地址。

下面的代码片段（示例 4.9 pointer.go）可能输出 An integer: 5, its location in memory: 0x6b0820（这个值随着你每次运行程序而变化）。

```go
package main
import (
    "fmt"
)

func main() {
    var i1 = 5
    fmt.Println(i1, &i1) // 5 0xc000014078
}
```

这个地址可以存储在一个叫做指针的特殊数据类型中，在本例中这是一个指向 int 的指针，即 i1：此处使用 *int 表示。如果我们想调用指针 intP，我们可以这样声明它：

```
var intP *int
```

然后使用 intP = &i1 是合法的，此时 intP 指向 i1。

（指针的格式化标识符为 %p）

intP 存储了 i1 的内存地址；它指向了 i1 的位置，它引用了变量 i1。

一个指针变量可以指向任何一个值的内存地址 它指向那个值的内存地址，在 32 位机器上占用 4 个字节，在 64 位机器上占用 8 个字节，并且与它所指向的值的大小无关。当然，可以声明指针指向任何类型的值来表明它的原始性或结构性；你可以在指针类型前面加上 * 号（前缀）来获取指针所指向的内容，这里的 * 号是一个类型更改器。使用一个指针引用一个值被称为间接引用。

当一个指针被定义后没有分配到任何变量时，它的值为 nil。

一个指针变量通常缩写为 ptr。

**注意事项**

在书写表达式类似 var p *type 时，切记在 * 号和指针名称间留有一个空格，因为 var p*type 是语法正确的，但是在更复杂的表达式中，它容易被误认为是一个乘法表达式！

符号 * 可以放在一个指针前，如 *intP，那么它将得到这个指针指向地址上所存储的值；这被称为**反引用**（或者内容或者间接引用）操作符；另一种说法是指针转移。

对于任何一个变量 var， 如下表达式都是正确的：var == *(&var)。

```go
package main
import "fmt"
func main() {
    var i1 = 5
    fmt.Printf("An integer: %d, its location in memory: %p\n", i1, &i1)
    var intP *int
    intP = &i1
    fmt.Printf("The value at memory location %p is %d\n", intP, *intP)
}

/*
An integer: 5, its location in memory: 0xc000014078
The value at memory location 0xc000014078 is 5
*/
```



展示了分配一个新的值给 *p 并且更改这个变量自己的值（这里是一个字符串）。

```go
package main
import "fmt"
func main() {
    s := "good bye"
    var p *string = &s
    *p = "ciao"
    fmt.Printf("Here is the pointer p: %p\n", p) // Here is the pointer p: 0xc000040250
    fmt.Printf("Here is the string *p: %s\n", *p) // Here is the string *p: ciao
    fmt.Printf("Here is the string s: %s\n", s) // Here is the string s: ciao
}
```

通过对 *p 赋另一个值来更改 “对象”，这样 s 也会随之更改。

注意事项

你不能得到一个文字或常量的地址，例如：

```go
const i = 5
ptr := &i //error: cannot take the address of i
ptr2 := &10 //error: cannot take the address of 10
```

所以说，Go 语言和 C、C++ 以及 D 语言这些低层（系统）语言一样，都有指针的概念。但是对于经常导致 C 语言内存泄漏继而程序崩溃的指针运算（所谓的指针算法，如：pointer+2，移动指针指向字符串的字节数或数组的某个位置）是不被允许的。Go 语言中的指针保证了内存安全，更像是 Java、C# 和 VB.NET 中的引用。

因此 c = *p++ 在 Go 语言的代码中是不合法的。

指针的一个高级应用是你可以传递一个变量的引用（如函数的参数），这样不会传递变量的拷贝。指针传递是很廉价的，只占用 4 个或 8 个字节。当程序在工作中需要占用大量的内存，或很多变量，或者两者都有，使用指针会减少内存占用和提高效率。被指向的变量也保存在内存中，直到没有任何指针指向它们，所以从它们被创建开始就具有相互独立的生命周期。

另一方面（虽然不太可能），由于一个指针导致的间接引用（一个进程执行了另一个地址），指针的过度频繁使用也会导致性能下降。

指针也可以指向另一个指针，并且可以进行任意深度的嵌套，导致你可以有多级的间接引用，但在大多数情况这会使你的代码结构不清晰。

如我们所见，在大多数情况下 Go 语言可以使程序员轻松创建指针，并且隐藏间接引用，如：自动反向引用。

**对一个空指针的反向引用是不合法的**，并且会使程序崩溃：

```go
package main
func main() {
    var p *int = nil
    *p = 0
}
//panic: runtime error: invalid memory address or nil pointer dereference
//[signal 0xc0000005 code=0x1 addr=0x0 pc=0x4bc8a2]
```



----

# 控制结构

##  if-else 结构

if 是用于测试某个条件（布尔型或逻辑型）的语句，如果该条件成立，则会执行 if 后由大括号括起来的代码块，否则就忽略该代码块继续执行后续的代码。

```go
if condition {
    // do something 
}
```

如果存在第二个分支，则可以在上面代码的基础上添加 else 关键字以及另一代码块，这个代码块中的代码只有在条件不满足时才会执行。if 和 else 后的两个代码块是相互独立的分支，只可能执行其中一个。

```go
if condition {
    // do something 
} else {
    // do something 
}
```

如果存在第三个分支，则可以使用下面这种三个独立分支的形式：

```go
if condition1 {
    // do something 
} else if condition2 {
    // do something else    
} else {
    // catch-all or default
}
```

else-if 分支的数量是没有限制的，但是为了代码的可读性，还是不要在 if 后面加入太多的 else-if 结构。如果你必须使用这种形式，则把尽可能先满足的条件放在前面。

即使当代码块之间只有一条语句时，大括号也不可被省略 (尽管有些人并不赞成，但这还是符合了软件工程原则的主流做法)。

**关键字 if 和 else 之后的左大括号 { 必须和关键字在同一行**，如果你使用了 else-if 结构，则前段代码块的右大括号 } 必须和 else-if 关键字在同一行。这两条规则都是被编译器强制规定的。

非法的 Go 代码:

```go
if x{
}
else {  // 无效的
}
```

要注意的是，在你使用 gofmt 格式化代码之后，每个分支内的代码都会缩进 4 个或 8 个空格，或者是 1 个 tab，并且右大括号与对应的 if 关键字垂直对齐。

在有些情况下，**条件语句两侧的括号是可以被省略的**；当条件比较复杂时，则可以使用括号让代码更易读。条件允许是符合条件，需使用 &&、|| 或！，你可以使用括号来提升某个表达式的运算优先级，并提高代码的可读性。

一种可能用到条件语句的场景是测试变量的值，在不同的情况执行不同的语句，不过将在第 5.3 节讲到的 switch 结构会更适合这种情况。

```go
package main
import "fmt"

func main() {
	flag := true
	if flag {
		fmt.Println("The value is true")
	} else {
		fmt.Println("The value is false")
	}
}
```

注意事项 这里不需要使用 if bool1 == true 来判断，因为 bool1 本身已经是一个布尔类型的值。

这种做法一般都用在测试 true 或者有利条件时，但你也可以使用取反 ! 来判断值的相反结果，如：if !bool1 或者 if !(condition)。后者的括号大多数情况下是必须的，如这种情况：if !(var1 == var2)。

当 if 结构内有 break、continue、goto 或者 return 语句时，Go 代码的常见写法是省略 else 部分。无论满足哪个条件都会返回 x 或者 y 时，一般使用以下写法：

```go
if condition {
    return x
}
return y
```

注意事项 不要同时在 if-else 结构的两个分支里都使用 return 语句，这将导致编译报错 function ends without a return statement（你可以认为这是一个编译器的 Bug 或者特性）。

这里举一些有用的例子：

判断一个字符串是否为空：

```go
if str == "" { ... }
if len(str) == 0 {...}
```

判断运行 Go 程序的操作系统类型，这可以通过常量 runtime.GOOS 来判断

```go
if runtime.GOOS == "windows"     {
    .   ..
} else { // Unix-like
    .   ..
}
```

这段代码一般被放在 init () 函数中执行。这儿还有一段示例来演示如何根据操作系统来决定输入结束的提示：

```go
var prompt = "Enter a digit, e.g. 3 "+ "or %s to quit."

func init() {
    if runtime.GOOS == "windows" {
        prompt = fmt.Sprintf(prompt, "Ctrl+Z, Enter")       
    } else { //Unix-like
        prompt = fmt.Sprintf(prompt, "Ctrl+D")
    }
}
```

函数 Abs() 用于返回一个整型数字的绝对值:

```go
func Abs(x int) int {
    if x < 0 {
        return -x
    }
    return x    
}
```

isGreater 用于比较两个整型数字的大小:

```go
func isGreater(x, y int) bool {
    if x > y {
        return true 
    }
    return false
}
```

在第四种情况中，if 可以包含一个初始化语句（如：给一个变量赋值）。这种写法具有固定的格式（在初始化语句后方必须加上分号）：

```go
if initialization; condition {
    // do something
}
```

例如:

```go
val := 10
if val > max {
    // do something
}
```

你也可以这样写:

```go
if val := 10; val > max {
    // do something
}
```

但要注意的是，使用简短方式 := 声明的变量的作用域只存在于 if 结构中（在 if 结构的大括号之间，如果使用 if-else 结构则在 else 代码块中变量也会存在）。如果变量在 if 结构之前就已经存在，那么在 if 结构中，该变量原来的值会被隐藏。**最简单的解决方案就是不要在初始化语句中声明变量**

```go
package main

import "fmt"

func main() {
    var first int = 10
    var cond int

    if first <= 0 {

        fmt.Printf("first is less than or equal to 0\n")
    } else if first > 0 && first < 5 {

        fmt.Printf("first is between 0 and 5\n")
    } else {

        fmt.Printf("first is 5 or greater\n")
    }
    if cond = 5; cond > 10 {

        fmt.Printf("cond is greater than 10\n")
    } else {

        fmt.Printf("cond is not greater than 10\n")
    }
}
```

下面的代码片段展示了如何通过在初始化语句中获取函数 process() 的返回值，并在条件语句中作为判定条件来决定是否执行 if 结构中的代码：

```go
if value := process(data); value > max {
    ...
}
```



----

## 测试多返回值函数的错误

**Go 语言的函数经常使用两个返回值来表示执行是否成功**：返回某个值以及 true 表示成功；返回零值（或 nil）和 false 表示失败。

当不使用 true 或 false 的时候，也可以使用一个 error 类型的变量来代替作为第二个返回值：成功执行的话，error 的值为 nil，否则就会包含相应的错误信息（Go 语言中的错误类型为 error: var err error，）。这样一来，就很明显需要用一个 if 语句来测试执行结果；由于其符号的原因，这样的形式又称之为 comma,ok 模式（pattern）。

string_conversion.go 中，函数 strconv.Atoi 的作用是将一个字符串转换为一个整数。之前我们忽略了相关的错误检查：

```
anInt, _ = strconv.Atoi(origStr)
```

如果 origStr 不能被转换为整数，anInt 的值会变成 0 而 _ 无视了错误，程序会继续运行。

这样做是非常不好的：程序应该在最接近的位置检查所有相关的错误，至少需要暗示用户有错误发生并对函数进行返回，甚至中断程序。

在第二个版本中对代码进行了改进：

```go
package main

import (
    "fmt"
    "strconv"
)

func main() {
    var orig string = "ABC"
    // var an int
    var newS string
    // var err error

    fmt.Printf("The size of ints is: %d\n", strconv.IntSize)      
    // anInt, err = strconv.Atoi(origStr)
    an, err := strconv.Atoi(orig)
    if err != nil {
        fmt.Printf("orig %s is not an integer - exiting with error\n", orig)
        return
    } 
    fmt.Printf("The integer is %d\n", an)
    an = an + 5
    newS = strconv.Itoa(an)
    fmt.Printf("The new string is: %s\n", newS)
}
```

这是测试 err 变量是否包含一个真正的错误（if err != nil）的习惯用法。如果确实存在错误，则会打印相应的错误信息然后通过 return 提前结束函数的执行。我们还可以使用携带返回值的 return 形式，例如 return err。这样一来，函数的调用者就可以检查函数执行过程中是否存在错误了。

**习惯用法**

```go
value, err := pack1.Function1(param1)
if err != nil {
    fmt.Printf("An error occured in pack1.Function1 with parameter %v", param1)
    return err
}
// 未发生错误，继续执行：
```

由于本例的函数调用者属于 main 函数，所以程序会直接停止运行。

如果我们想要在错误发生的同时终止程序的运行，我们可以使用 `os` 包的 `Exit` 函数：

**习惯用法**

```go
if err != nil {
    fmt.Printf("Program stopping with error %v", err)
    os.Exit(1)
}
```

有时候，你会发现这种习惯用法被连续重复地使用在某段代码中。

当没有错误发生时，代码继续运行就是唯一要做的事情，所以 if 语句块后面不需要使用 else 分支。

```go
f, err := os.Open(name)
if err != nil {
    return err
}
doSomething(f) // 当没有错误发生时，文件对象被传入到某个函数中
doSomething
```

可以将错误的获取放置在 if 语句的初始化部分：

```go
if err := file.Chmod(0664); err != nil {
    fmt.Println(err)
    return err
}
```

或者将 ok-pattern 的获取放置在 if 语句的初始化部分，然后进行判断：

```go
if value, ok := readData(); ok {
…
}
```

如果您像下面一样，没有为多返回值的函数准备足够的变量来存放结果：

```go
func mySqrt(f float64) (v float64, ok bool) {
    if f < 0 { return } // error case
    return math.Sqrt(f),true
}

func main() {
    t := mySqrt(25.0)
    fmt.Println(t)
}
```

您会得到一个编译错误：multiple-value mySqrt() in single-value context。

正确的做法是：

```go
t, ok := mySqrt(25.0)
if ok { fmt.Println(t) }
```

当您将字符串转换为整数时，且确定转换一定能够成功时，可以将 Atoi 函数进行一层忽略错误的封装：

```go
func atoi (s string) (n int) {
    n, _ = strconv.Atoi(s)
    return
}
```

实际上，fmt 包（第 4.4.3 节）最简单的打印函数也有 2 个返回值：

```
count, err := fmt.Println(x) // number of bytes printed, nil or 0, error
```

当打印到控制台时，可以将该函数返回的错误忽略；但当输出到文件流、网络流等具有不确定因素的输出对象时，应该始终检查是否有错误发生



----

## switch 结构

相比较 C 和 Java 等其它语言而言，Go 语言中的 switch 结构使用上更加灵活。它接受任意形式的表达式：

```go
switch var1 {
    case val1:
        ...
    case val2:
        ...
    default:
        ...
}
```

变量 var1 可以是任何类型，而 val1 和 val2 则可以是同类型的任意值。类型不被局限于常量或整数，但必须是相同的类型；或者最终结果为相同类型的表达式。前花括号 { 必须和 switch 关键字在同一行。

您可以同时测试多个可能符合条件的值，使用逗号分割它们，例如：case val1, val2, val3。

每一个 case 分支都是唯一的，从上至下逐一测试，直到匹配为止。（ Go 语言使用快速的查找算法来测试 switch 条件与 case 分支的匹配情况，直到算法匹配到某个 case 或者进入 default 条件为止。）

一旦成功地匹配到某个分支，在执行完相应代码后就会退出整个 switch 代码块，也就是说您不需要特别使用 break 语句来表示结束。

因此，程序也不会自动地去执行下一个分支的代码。如果在执行完每个分支的代码后，还希望继续执行后续分支的代码，可以使用 fallthrough 关键字来达到目的。

因此：

```go
switch i {
    case 0: // 空分支，只有当 i == 0 时才会进入分支
    case 1:
        f() // 当 i == 0 时函数不会被调用
}
```

并且：

```go
switch i {
    case 0: fallthrough
    case 1:
        f() // 当 i == 0 时函数也会被调用
}
```

在 case ...: 语句之后，您不需要使用花括号将多行语句括起来，但您可以在分支中进行任意形式的编码。当代码块只有一行时，可以直接放置在 case 语句之后。

您同样可以使用 return 语句来提前结束代码块的执行。当您在 switch 语句块中使用 return 语句，并且您的函数是有返回值的，您还需要在 switch 之后添加相应的 return 语句以确保函数始终会返回。

可选的 default 分支可以出现在任何顺序，但最好将它放在最后。它的作用类似与 if-else 语句中的 else，表示不符合任何已给出条件时，执行相关语句。

```go
package main
import "fmt"

func main() {
	num := 100
	switch num {
		case 98, 99:
			fmt.Println("It's equal to 98")
		case 100:
			fmt.Println("It's equal to 100")
		default:
			fmt.Println("It's not equal to 98 or 100")
	}
}
```

我们会使用 switch 语句判断从键盘输入的字符（详见第 12.2 节的 switch.go）。switch 语句的第二种形式是不提供任何被判断的值（实际上默认为判断是否为 true），然后在每个 case 分支中进行测试不同的条件。当任一分支的测试结果为 true 时，该分支的代码会被执行。这看起来非常像链式的 if-else 语句，但是在测试条件非常多的情况下，提供了可读性更好的书写方式。

```go
switch {
    case condition1:
        ...
    case condition2:
        ...
    default:
        ...
}
```

例如：

```go
switch {
    case i < 0:
        f1()
    case i == 0:
        f2()
    case i > 0:
        f3()
}
```

任何支持进行相等判断的类型都可以作为测试表达式的条件，包括 int、string、指针等。

```go
package main

import "fmt"

func main() {
    var num1 int = 7

    switch {
        case num1 < 0:
            fmt.Println("Number is negative")
        case num1 > 0 && num1 < 10:
            fmt.Println("Number is between 0 and 10")
        default:
            fmt.Println("Number is 10 or greater")
    }
}
```

switch 语句的第三种形式是包含一个初始化语句：

```go
switch initialization {
    case val1:
        ...
    case val2:
        ...
    default:
        ...
}
```

这种形式可以非常优雅地进行条件判断：

```go
switch result := calculate(); {
    case result < 0:
        ...
    case result > 0:
        ...
    default:
        // 0
}
```

在下面这个代码片段中，变量 a 和 b 被平行初始化，然后作为判断条件：

```go
switch a, b := x[i], y[j]; {
    case a < b: t = -1
    case a == b: t = 0
    case a > b: t = 1
}
```

switch 语句还可以被用于 type-switch来判断某个 interface 变量中实际存储的变量类型。



----

## for 结构



如果想要重复执行某些语句，Go 语言中您只有 for 结构可以使用。不要小看它，这个 for 结构比其它语言中的更为灵活。

**注意事项** 其它许多语言中也没有发现和 do while 完全对等的 for 结构，可能是因为这种需求并不是那么强烈。

### 基于计数器的迭代

文件 for1.go 中演示了最简单的基于计数器的迭代，基本形式为：

```go
for 初始化语句; 条件语句; 修饰语句 {}
```

```go
package main

import "fmt"

func main() {
    for i := 0; i < 5; i++ {
        fmt.Printf("This is the %d iteration\n", i)
    }
}
```

由花括号括起来的代码块会被重复执行已知次数，该次数是根据计数器（此例为 i）决定的。循环开始前，会执行且仅会执行一次初始化语句 i := 0;；这比在循环之前声明更为简短。紧接着的是条件语句 i < 5;，在每次循环开始前都会进行判断，一旦判断结果为 false，则退出循环体。最后一部分为修饰语句 i++，一般用于增加或减少计数器。

这三部分组成的循环的头部，它们之间使用分号 ; 相隔，但并不需要括号 () 将它们括起来。例如：for (i = 0; i < 10; i++) { }，这是无效的代码！

同样的，左花括号 { 必须和 for 语句在同一行，计数器的生命周期在遇到右花括号 } 时便终止。一般习惯使用 i、j、z 或 ix 等较短的名称命名计数器。

特别注意，永远不要在循环体内修改计数器，这在任何语言中都是非常差的实践！

您还可以在循环中同时使用多个计数器：

```go
for i, j := 0, N; i < j; i, j = i+1, j-1 {}
```

这得益于 Go 语言具有的平行赋值的特性（可以查看第 7 章 string_reverse.go 中反转数组的示例）。

您可以将两个 for 循环嵌套起来：

```go
for i:=0; i<5; i++ {
    for j:=0; j<10; j++ {
        println(j)
    }
}
```

如果您使用 for 循环迭代一个 Unicode 编码的字符串，会发生什么？

```go
package main

import "fmt"

func main() {
    str := "Go is a beautiful language!"
    fmt.Printf("The length of str is: %d\n", len(str))
    for ix :=0; ix < len(str); ix++ {
        fmt.Printf("Character on position %d is: %c \n", ix, str[ix])
    }
    str2 := "日本語"
    fmt.Printf("The length of str2 is: %d\n", len(str2))
    for ix :=0; ix < len(str2); ix++ {
        fmt.Printf("Character on position %d is: %c \n", ix, str2[ix])
    }
}
```

###  基于条件判断的迭代

for 结构的第二种形式是没有头部的条件判断迭代（类似其它语言中的 while 循环），基本形式为：for 条件语句 {}。

您也可以认为这是没有初始化语句和修饰语句的 for 结构，因此 ;; 便是多余的了。

```go
package main

import "fmt"

func main() {
    var i int = 5

    for i >= 0 {
        i = i - 1
        fmt.Printf("The variable i is now: %d\n", i)
    }
}
```

### 无限循环

条件语句是可以被省略的，如 i:=0; ; i++ 或 for { } 或 for ;; { }（;; 会在使用 gofmt 时被移除）：这些循环的本质就是无限循环。最后一个形式也可以被改写为 for true { }，但一般情况下都会直接写 for { }。

如果 for 循环的头部没有条件语句，那么就会认为条件永远为 true，因此循环体内必须有相关的条件判断以确保会在某个时刻退出循环。

想要直接退出循环体，可以使用 break 语句（第 5.5 节）或 return 语句直接返回（第 6.1 节）。

但这两者之间有所区别，break 只是退出当前的循环体，而 return 语句提前对函数进行返回，不会执行后续的代码。

无限循环的经典应用是服务器，用于不断等待和接受新的请求。

```go
for t, err = p.Token(); err == nil; t, err = p.Token() {
    ...
}
```

### for-range 结构

这是 Go 特有的一种的迭代结构，您会发现它在许多情况下都非常有用。它可以迭代任何一个集合（包括数组和 map，详见第 7 和 8 章）。语法上很类似其它语言中 foreach 语句，但您依旧可以获得每次迭代所对应的索引。一般形式为：for ix, val := range coll { }。

要注意的是，val 始终为集合中对应索引的值拷贝，因此它一般只具有只读性质，对它所做的任何修改都不会影响到集合中原有的值（译者注：如果 val 为指针，则会产生指针的拷贝，依旧可以修改集合中的原值）。一个字符串是 Unicode 编码的字符（或称之为 rune）集合，因此您也可以用它迭代字符串：

```go
for pos, char := range str {
...
}
```

每个 rune 字符和索引在 for-range 循环中是一一对应的。它能够自动根据 UTF-8 规则识别 Unicode 编码的字符。

```go
package main

import "fmt"

func main() {
    str := "Go is a beautiful language!"
    fmt.Printf("The length of str is: %d\n", len(str))
    for pos, char := range str {
        fmt.Printf("Character on position %d is: %c \n", pos, char)
    }
    fmt.Println()
    str2 := "Chinese: 日本語"
    fmt.Printf("The length of str2 is: %d\n", len(str2))
    for pos, char := range str2 {
        fmt.Printf("character %c starts at byte position %d\n", char, pos)
    }
    fmt.Println()
    fmt.Println("index int(rune) rune    char bytes")
    for index, rune := range str2 {
        fmt.Printf("%-2d      %d      %U '%c' % X\n", index, rune, rune, rune, []byte(string(rune)))
    }
}
```



----

## Break 与 continue

您可以使用 break 语句重写 for2.go 的代码：

```go
var i int = 5
for {
    i = i - 1
    fmt.Printf("The variable i is now: %d\n", i)
    if i < 0 {
        break
    }
}
```

因此每次迭代都会对条件进行检查（i < 0），以此判断是否需要停止循环。如果退出条件满足，则使用 break 语句退出循环。

一个 break 的作用范围为该语句出现后的最内部的结构，它可以被用于任何形式的 for 循环（计数器、条件判断等）。但在 switch 或 select 语句中（详见第 13 章），break 语句的作用结果是跳过整个代码块，执行后续的代码。

下面的示例中包含了嵌套的循环体（for4.go），break 只会退出最内层的循环：

```go
package main

func main() {
    for i:=0; i<3; i++ {
        for j:=0; j<10; j++ {
            if j>5 {
                break   
            }
            print(j)
        }
        print("  ")
    }
}
```

关键字 continue 忽略剩余的循环体而直接进入下一次循环的过程，但不是无条件执行下一次循环，执行之前依旧需要满足循环的判断条件。

```go
package main

func main() {
    for i := 0; i < 10; i++ {
        if i == 5 {
            continue
        }
        print(i)
        print(" ")
    }
}
```

另外，关键字 continue 只能被用于 for 循环中。



----

## 标签与 goto

for、switch 或 select 语句都可以配合标签（label）形式的标识符使用，即某一行第一个以冒号（`:`）结尾的单词（gofmt 会将后续代码自动移至下一行）。

（标签的名称是大小写敏感的，为了提升可读性，一般建议使用全部大写字母）

```go
package main

import "fmt"

func main() {

LABEL1:
    for i := 0; i <= 5; i++ {
        for j := 0; j <= 5; j++ {
            if j == 4 {
                continue LABEL1
            }
            fmt.Printf("i is: %d, and j is: %d\n", i, j)
        }
    }

}
```

本例中，continue 语句指向 LABEL1，当执行到该语句的时候，就会跳转到 LABEL1 标签的位置。

您可以看到当 j==4 和 j==5 的时候，没有任何输出：标签的作用对象为外部循环，因此 i 会直接变成下一个循环的值，而此时 j 的值就被重设为 0，即它的初始值。如果将 continue 改为 break，则不会只退出内层循环，而是直接退出外层循环了。另外，**还可以使用 goto 语句和标签配合使用来模拟循环。**

```go
package main

func main() {
    i:=0
    HERE:
        print(i)
        i++
        if i==5 {
            return
        }
        goto HERE
}
```

上面的代码会输出 01234。

使用逆向的 goto 会很快导致意大利面条式的代码，所以不应当使用而选择更好的替代方案。

特别注意 使用标签和 goto 语句是不被鼓励的：它们会很快导致非常糟糕的程序设计，而且总有更加可读的替代方案来实现相同的需求。

一个建议使用 goto 语句的示例会在第 15.1 章的 simple_tcp_server.go 中出现：示例中在发生读取错误时，使用 goto 来跳出无限读取循环并关闭相应的客户端链接。

定义但未使用标签会导致编译错误：label … defined and not used。

如果您必须使用 goto，应当只使用正序的标签（标签位于 goto 语句之后），但注意标签和 goto 语句之间不能出现定义新变量的语句，否则会导致编译失败。



```go
// compile error goto2.go:8: goto TARGET jumps over declaration of b at goto2.go:8
package main

import "fmt"

func main() {
        a := 1
        goto TARGET // compile error
        b := 9
    TARGET:  
        b += a
        fmt.Printf("a is %v *** b is %v", a, b)
}
```



----

# 函数

## 介绍

每一个程序都包含很多的函数：函数是基本的代码块。

Go 是编译型语言，所以函数编写的顺序是无关紧要的；鉴于可读性的需求，最好把 main() 函数写在文件的前面，其他函数按照一定逻辑顺序进行编写（例如函数被调用的顺序）。

编写多个函数的主要目的是将一个需要很多行代码的复杂问题分解为一系列简单的任务（那就是函数）来解决。而且，同一个任务（函数）可以被调用多次，有助于代码重用。

（事实上，好的程序是非常注意 DRY 原则的，即不要重复你自己（Don’t Repeat Yourself），意思是执行特定任务的代码只能在程序里面出现一次。）

当函数执行到代码块最后一行（} 之前）或者 return 语句的时候会退出，其中 return 语句可以带有零个或多个参数；这些参数将作为返回值（参考 第 6.2 节）供调用者使用。简单的 return 语句也可以用来结束 for 死循环，或者结束一个协程（goroutine）。

Go 里面有三种类型的函数：

- 普通的带有名字的函数

- 匿名函数或者 lambda 函数
- 方法（Methods）

除了 main ()、init () 函数外，其它所有类型的函数都可以有参数与返回值。函数参数、返回值以及它们的类型被统称为函数签名。

作为提醒，提前介绍一个语法：

这样是不正确的 Go 代码：

```
func g()
{
}
```

它必须是这样的：

```go
func g() {
}
```

函数被调用的基本格式如下：

```go
pack1.Function(arg1, arg2, …, argn)
```

Function 是 pack1 包里面的一个函数，括号里的是被调用函数的实参（argument）：这些值被传递给被调用函数的形参（parameter，参考 第 6.2 节）。函数被调用的时候，这些实参将被复制（简单而言）然后传递给被调用函数。函数一般是在其他函数里面被调用的，这个其他函数被称为调用函数（calling function）。函数能多次调用其他函数，这些被调用函数按顺序（简单而言）执行，理论上，函数调用其他函数的次数是无限制的（直到函数调用栈被耗尽）。

一个简单的函数调用其他函数的例子：

```go
package main

import "fmt"

func main() {
    fmt.Println("In main before calling greeting")
    greeting()
    fmt.Println("In main after calling greeting")
}

func greeting() {
    fmt.Println("hello world!")
}
```

函数可以将其他函数调用作为它的参数，只要这个被调用函数的返回值个数、返回值类型和返回值的顺序与调用函数所需求的实参是一致的，例如：

假设 f1 需要 3 个参数 f1(a, b, c int)，同时 f2 返回 3 个参数 f2(a, b int) (int, int, int)，就可以这样调用 f1：f1(f2(a, b))。

**函数重载**（function overloading）指的是可以编写多个同名函数，只要它们拥有不同的形参 / 或者不同的返回值，**在 Go 里面函数重载是不被允许的。这将导致一个编译错误**：

funcName redeclared in this book, previous declaration at lineno
Go 语言不支持这项特性的**主要原因是函数重载需要进行多余的类型匹配影响性能**；没有重载意味着只是一个简单的函数调度。所以你需要给不同的函数使用不同的名字，我们通常会根据函数的特征对函数进行命名。

如果需要申明一个在外部定义的函数，你只需要给出函数名与函数签名，不需要给出函数体：

```go
func flushICache(begin, end uintptr) // implemented externally
```

函数也可以以申明的方式被使用，作为一个函数类型，就像：

```go
type binOp func(int, int) int
```

在这里，不需要函数体 {}。

函数作为第一类值（first-class value）：可以赋值给变量，就像 add := binOp 一样。

这个变量知道自己保存的函数签名，给它赋值一个具有不同签名的函数值是不可能的。

**函数值（functions value）之间可以相互比较**：如果它们引用相同的函数或者都是 nil 的话，则认为它们是相同的函数。函数不能在其它函数里面声明（不能嵌套），不过我们可以通过使用匿名函数来破除这个限制。

目前 Go 没有泛型（generic）的概念，也就是说它不支持那种支持多种类型的函数。不过在大部分情况下可以通过接口（interface），特别是空接口与类型选择（type switch）与 / 或者通过使用反射（reflection）来实现相似的功能。使用这些技术将导致代码更为复杂、性能更为低下，所以在非常注意性能的场合，最好是为每一个类型单独创建一个函数，而且代码可读性更强。



----

## 函数参数与返回值

函数能够接收参数供自己使用，也可以返回零个或多个值（我们通常把返回多个值称为返回一组值）。相比于 C、C++、Java 和 C#，多值返回是 Go 的一大特性，为我们判断一个函数是否正常执行提供了方便。

我们通过 return 关键字返回一组值。事实上，任何一个有返回值（单个或多个）的函数都必须以 return 或 panic结尾。

在函数块里面，return 之后的语句都不会执行。如果一个函数需要返回值，那么这个函数里面的每一个代码分支（code-path）都要有 return 语句。

函数定义时，它的形参一般是有名字的，不过我们也可以定义没有形参名的函数，只有相应的形参类型，就像这样：func f(int, int, float64)。

没有参数的函数通常被称为 niladic 函数（niladic function），就像 main.main()。

###  按值传递（call by value） 按引用传递（call by reference）

Go 默认使用按值传递来传递参数，也就是传递参数的副本。函数接收参数副本之后，在使用变量的过程中可能对副本的值进行更改，但不会影响到原来的变量，比如 Function(arg1)。

如果你希望函数可以直接修改参数的值，而不是对参数的副本进行操作，你需要将参数的地址（变量名前面添加 & 符号，比如 &variable）传递给函数，这就是按引用传递，比如 Function(&arg1)，此时传递给函数的是一个指针。如果传递给函数的是一个指针，指针的值（一个地址）会被复制，但指针的值所指向的地址上的值不会被复制；我们可以通过这个指针的值来修改这个值所指向的地址上的值。（译者注：指针也是变量类型，有自己的地址和值，通常指针的值指向一个变量的地址。所以，按引用传递也是按值传递。）

几乎在任何情况下，传递指针（一个 32 位或者 64 位的值）的消耗都比传递副本来得少。

**在函数调用时，像切片（slice）、字典（map）、接口（interface）、通道（channel）这样的引用类型都是默认使用引用传递（即使没有显式的指出指针）。**

有些函数只是完成一个任务，并没有返回值。我们仅仅是利用了这种函数的副作用，就像输出文本到终端，发送一个邮件或者是记录一个错误等。

但是绝大部分的函数还是带有返回值的。

如下，simple_function.go 里的 MultiPly3Nums 函数带有三个形参，分别是 a、b、c，还有一个 int 类型的返回值（被注释的代码具有和未注释部分同样的功能，只是多引入了一个本地变量）：

```go
package main

import "fmt"

func main() {
    fmt.Println("Multiply 2 * 5 * 6 =", Multiply3Nums(2, 3, 4))
}

func Multiply3Nums(a int, b int, c int) int {
    return a * b * c;
}
```

如果一个函数需要返回四到五个值，我们可以传递一个切片给函数（如果返回值具有相同类型）或者是传递一个结构体（如果返回值具有不同的类型）。因为传递一个指针允许直接修改变量的值，消耗也更少。

### 命名的返回值

如下，multiple_return.go 里的函数带有一个 int 参数，返回两个 int 值；其中一个函数的返回值在函数调用时就已经被赋予了一个初始零值。

getX2AndX3 与 getX2AndX3_2 两个函数演示了如何使用非命名返回值与命名返回值的特性。当需要返回多个非命名返回值时，需要使用 () 把它们括起来，比如 (int, int)。

命名返回值作为结果形参（result parameters）被初始化为相应类型的零值，当需要返回的时候，我们只需要一条简单的不带参数的 return 语句。需要注意的是，即使只有一个命名返回值，也需要使用 () 括起来（参考 第 6.6 节的 fibonacci.go 函数）。

```go
package main

import "fmt"

var num int = 10
var numx2, numx3 int


func main() {
    numx2, numx3 = getX2AndX3(num)
    PrintValues()
    numx2, numx3 = getX2AndX3_2(num)
    PrintValues()
}

func PrintValues() {
    fmt.Printf("num = %d, 2x num = %d, 3x num = %d\n", num, numx2, numx3)
}

func getX2AndX3(input int) (int, int) {
    return 2 * input, 3 * input
}

func getX2AndX3_2(input int) (x2 int, x3 int) {
    x2 = 2 * input
    x3 = 3 * input
    //return x2, x3
    return
}
```

警告：

- **return 或 return var 都是可以的**。
- 不过 return var = expression（表达式） 会引发一个编译错误：syntax error: unexpected =, expecting semicolon or newline or }。

即使函数使用了命名返回值，你依旧可以无视它而返回明确的值。

任何一个非命名返回值（使用非命名返回值是很糟的编程习惯）在 return 语句里面都要明确指出包含返回值的变量或是一个可计算的值（就像上面警告所指出的那样）。

**尽量使用命名返回值：会使代码更清晰、更简短，同时更加容易读懂。**

###  空白符

空白符用来匹配一些不需要的值，然后丢弃掉，下面的 blank_identifier.go 就是很好的例子。

ThreeValues 是拥有三个返回值的不需要任何参数的函数，在下面的例子中，我们将第一个与第三个返回值赋给了 i1 与 f1。第二个返回值赋给了空白符 _，然后自动丢弃掉。

```go
package main

import "fmt"

func main() {
    var i1 int
    var f1 float32
    i1, _, f1 = ThreeValues()
    fmt.Printf("The int: %d, the float: %f \n", i1, f1)
}

func ThreeValues() (int, int, float32) {
    return 5, 6, 7.5
}
```

另外一个示例，函数接收两个参数，比较它们的大小，然后按小 - 大的顺序返回这两个数，示例代码为 minmax.go。

```go
package main

import "fmt"

func main() {
    var min, max int
    min, max = MinMax(78, 65)
    fmt.Printf("Minmium is: %d, Maximum is: %d\n", min, max)
}

func MinMax(a int, b int) (min int, max int) {
    if a < b {
        min = a
        max = b
    } else { // a = b or a > b
        min = b
        max = a
    }
    return
}
```

### 改变外部变量

传递指针给函数不但可以节省内存（因为没有复制变量的值），而且赋予了函数直接修改外部变量的能力，所以被修改的变量不再需要使用 return 返回。如下的例子，reply 是一个指向 int 变量的指针，通过这个指针，我们在函数内修改了这个 int 变量的数值。

```go
package main

import "fmt"

var num int = 10
var numx2, numx3 int


func main() {
    n := 0
    reply := &n
    Multiply(10, 5, reply)
    fmt.Println("Multiply:", *reply)  // Multiply: 50
    fmt.Println("Multiply:", n)  // Multiply: 50
}

func Multiply(a, b int, reply *int) {
    *reply = a * b
}

```

这仅仅是个指导性的例子，当需要在函数内改变一个占用内存比较大的变量时，性能优势就更加明显了。然而，如果不小心使用的话，传递一个指针很容易引发一些不确定的事，所以，我们要十分小心那些可以改变外部变量的函数，在必要时，需要添加注释以便其他人能够更加清楚的知道函数里面到底发生了什么。

----

## 传递变长参数

如果函数的最后一个参数是采用 ...type 的形式，那么这个函数就可以处理一个变长的参数，这个长度可以为 0，这样的函数称为变长函数。

```go
func myFunc(a, b, arg ...int) {}
```

这个函数接受一个类似某个类型的 slice 的参数，该参数可以通过第 5.4.4 节中提到的 for 循环结构迭代。

示例函数和调用：

```go
func Greeting(prefix string, who ...string)
Greeting("hello:", "Joe", "Anna", "Eileen")
```

在 Greeting 函数中，变量 who 的值为 []string{"Joe", "Anna", "Eileen"}。

如果参数被存储在一个 slice 类型的变量 slice 中，则可以通过 slice... 的形式来传递参数调用变参函数。

```go
package main

import "fmt"

var num int = 10
var numx2, numx3 int


func main() {
    x := min(1, 3, 2, 0)
    fmt.Printf("the minimun is: %d\n", x)
    slice := []int{7, 9, 3, 5, 1}
    x = min(slice...)
    fmt.Printf("The minimum in the slice is: %d\n", x)
}

func min(s ...int) int {
    if len(s) == 0 {
        return 0;
    }
    min := s[0]
    for _, v := range s {
        if v < min {
            min = v
        }
    }
    return min
}
```



----

## defer 和追踪

关键字 defer 允许我们推迟到函数返回之前（或任意位置执行 return 语句之后）一刻才执行某个语句或函数（为什么要在返回之后才执行这些语句？因为 return 语句同样可以包含一些操作，而不是单纯地返回某个值）。

关键字 defer 的用法类似于面向对象编程语言 Java 和 C# 的 finally 语句块，它一般用于释放某些已分配的资源。

```go
package main
import "fmt"

func main() {
    function1()
}

func function1() {
    fmt.Printf("In function1 at the top\n")
    defer function2()
    fmt.Printf("In function1 at the bottom!\n")
}

func function2() {
    fmt.Printf("function2: Deferred until the end of the calling function!")
}
// In function1 at the top
// In function1 at the bottom!
// function2: Deferred until the end of the calling function!
```

使用 defer 的语句同样可以接受参数，下面这个例子就会在执行 defer 语句时打印 `0`：

```go
package main
import "fmt"

func main() {
    a()
}

func a() {
    i := 0
    defer fmt.Println("defer", i)
    i++
    fmt.Println("i", i)
    return
}
// i 1
// defer 0
```

当有多个 defer 行为被注册时，它们会以逆序执行（类似栈，即后进先出）：

```go
package main
import "fmt"

func main() {
    a()
}

func a() {
    for i := 0; i < 5; i++ {
        defer fmt.Printf("%d ", i)
    }
}
// 4 3 2 1 0
```

关键字 defer 允许我们进行一些函数执行完成后的收尾工作，例如：

关闭文件流 

```go
// open a file  
defer file.Close()
```

解锁一个加锁的资源 

```go
mu.Lock()  
defer mu.Unlock() 
```

打印最终报告

```go
printHeader()  
defer printFooter()
```

关闭数据库链接

```go
// open a database connection  
defer disconnectFromDB()
```

合理使用 defer 语句能够使得代码更加简洁。

以下代码模拟了上面描述的第 4 种情况：

```go
package main

import "fmt"

func main() {
    doDBOperations()
}

func connectToDB() {
    fmt.Println("ok, connected to db")
}

func disconnectFromDB() {
    fmt.Println("ok, disconnected from db")
}

func doDBOperations() {
    connectToDB()
    fmt.Println("Defering the database disconnect.")
    defer disconnectFromDB() //function called here with defer
    fmt.Println("Doing some DB operations ...")
    fmt.Println("Oops! some crash or network error ...")
    fmt.Println("Returning from function here!")
    return //terminate the program
    // deferred function executed here just before actually returning, even if
    // there is a return or abnormal termination before
}
```

使用 defer 语句实现代码追踪

一个基础但十分实用的实现代码执行追踪的方案就是在进入和离开某个函数打印相关的消息，即可以提炼为下面两个函数：

```go
func trace(s string) { fmt.Println("entering:", s) }
func untrace(s string) { fmt.Println("leaving:", s) }
```

以下代码展示了何时调用两个函数：

```go
package main

import "fmt"

func trace(s string)   { fmt.Println("entering:", s) }
func untrace(s string) { fmt.Println("leaving:", s) }

func a() {
    trace("a")
    defer untrace("a")
    fmt.Println("in a")
}

func b() {
    trace("b")
    defer untrace("b")
    fmt.Println("in b")
    a()
}

func main() {
    b()
}
/*
entering: b
in b
entering: a
in a
leaving: a
leaving: b
*/
```

上面的代码还可以修改为更加简便的版本

```go
package main

import "fmt"

func trace(s string) string {
    fmt.Println("entering:", s)
    return s
}

func un(s string) {
    fmt.Println("leaving:", s)
}

func a() {
    defer un(trace("a"))
    fmt.Println("in a")
}

func b() {
    defer un(trace("b"))
    fmt.Println("in b")
    a()
}

func main() {
    b()
}
```

**使用 defer 语句来记录函数的参数与返回值**

下面的代码展示了另一种在调试时使用 defer 语句的手法

```go
package main

import (
    "io"
    "log"
)

func func1(s string) (n int, err error) {
    defer func() {
        log.Printf("func1(%q) = %d, %v", s, n, err)
    }()
    return 7, io.EOF
}

func main() {
    func1("Go")
}
```



----

## 内置函数

Go 语言拥有一些不需要进行导入操作就可以使用的内置函数。它们有时可以针对不同的类型进行操作，例如：len、cap 和 append，或必须用于系统级的操作，例如：panic。因此，它们需要直接获得编译器的支持。

以下是一个简单的列表，我们会在后面的章节中对它们进行逐个深入的讲解。

| 名称                | 说明                                                         |
| ------------------- | ------------------------------------------------------------ |
| close               | 用于管道通信                                                 |
| len、cap            | len 用于返回某个类型的长度或数量（字符串、数组、切片、map 和管道）；cap 是容量的意思，用于返回某个类型的最大容量（只能用于切片和 map） |
| new、make           | new 和 make 均是用于分配内存：new 用于值类型和用户定义的类型，如自定义结构，make 用于内置引用类型（切片、map 和管道）。它们的用法就像是函数，但是将类型作为参数：new (type)、make (type)。new (T) 分配类型 T 的零值并返回其地址，也就是指向类型 T 的指针。它也可以被用于基本类型：v := new(int)。make (T) 返回类型 T 的初始化之后的值，因此它比 new 进行更多的工作（new () 是一个函数，不要忘记它的括号 |
| copy、append        | 用于复制和连接切片                                           |
| panic、recover      | 两者均用于错误处理机制                                       |
| print、println      | 底层打印函数，在部署环境中建议使用 fmt 包                    |
| complex、real、imag | 用于创建和操作复数                                           |



----

## 递归函数

当一个函数在其函数体内调用自身，则称之为递归。最经典的例子便是计算斐波那契数列，即前两个数为 1，从第三个数开始每个数均为前两个数之和。

数列如下所示：

```
1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, …
```

下面的程序可用于生成该数列

```go
package main

import "fmt"

func main() {
    result := 0
    for i := 0; i <= 10; i++ {
        result = fibonacci(i)
        fmt.Printf("fibonacci(%d) is: %d\n", i, result)
    }
}

func fibonacci(n int) (res int) {
    if n <= 1 {
        res = 1
    } else {
        res = fibonacci(n-1) + fibonacci(n-2)
    }
    return
}
```

许多问题都可以使用优雅的递归来解决，比如说著名的快速排序算法。

在使用递归函数时经常会遇到的一个重要问题就是栈溢出：一般出现在大量的递归调用导致的程序栈内存分配耗尽。这个问题可以通过一个名为懒惰求值的技术解决，在 Go 语言中，我们可以使用管道（channel）和 goroutine（详见第 14.8 节）来实现。

Go 语言中也可以使用相互调用的递归函数：多个函数之间相互调用形成闭环。因为 Go 语言编译器的特殊性，这些函数的声明顺序可以是任意的。下面这个简单的例子展示了函数 odd 和 even 之间的相互调用

```go
package main

import (
    "fmt"
)

func main() {
    fmt.Printf("%d is even: is %t\n", 16, even(16)) // 16 is even: is true
    fmt.Printf("%d is odd: is %t\n", 17, odd(17))
    // 17 is odd: is true
    fmt.Printf("%d is odd: is %t\n", 18, odd(18))
    // 18 is odd: is false
}

func even(nr int) bool {
    if nr == 0 {
        return true
    }
    return odd(RevSign(nr) - 1)
}

func odd(nr int) bool {
    if nr == 0 {
        return false
    }
    return even(RevSign(nr) - 1)
}

func RevSign(nr int) int {
    if nr < 0 {
        return -nr
    }
    return nr
}
```

----

## 将函数作为参数

函数可以作为其它函数的参数进行传递，然后在其它函数内调用执行，一般称之为回调。下面是一个将函数作为参数的简单

```go
package main

import (
    "fmt"
)

func main() {
    callback(1, Add)
}

func Add(a, b int) {
    fmt.Printf("The sum of %d and %d is: %d\n", a, b, a+b)
}

func callback(y int, f func(int, int)) {
    f(y, 2) // this becomes Add(1, 2)
}
```

将函数作为参数的最好的例子是函数 strings.IndexFunc()：

该函数的签名是 func IndexFunc(s string, f func(c int) bool) int，它的返回值是在函数 f(c) 返回 true、-1 或从未返回时的索引值。

例如 strings.IndexFunc(line, unicode.IsSpace) 就会返回 line 中第一个空白字符的索引值。当然，您也可以书写自己的函数：

```go
func IsAscii(c int) bool {
    if c > 255 {
        return false
    }
    return true
}
```



----

## 闭包

当我们不希望给函数起名字的时候，可以使用匿名函数，例如：func(x, y int) int { return x + y }。

这样的一个函数不能够独立存在（编译器会返回错误：non-declaration statement outside function body），但可以被赋值于某个变量，即保存函数的地址到变量中：fplus := func(x, y int) int { return x + y }，然后通过变量名对函数进行调用：fplus(3,4)。

当然，您也可以直接对匿名函数进行调用：func(x, y int) int { return x + y } (3, 4)。

下面是一个计算从 1 到 1 百万整数的总和的匿名函数：

```go
func() {
    sum := 0
    for i := 1; i <= 1e6; i++ {
        sum += i
    }
}()
```

表示参数列表的第一对括号必须紧挨着关键字 func，因为匿名函数没有名称。花括号 {} 涵盖着函数体，最后的一对括号表示对该匿名函数的调用。

下面的例子展示了如何将匿名函数赋值给变量并对其进行调用（function_literal.go）：

```go
package main

import "fmt"

func main() {
    f()
}
func f() {
    for i := 0; i < 4; i++ {
        g := func(i int) { fmt.Printf("%d ", i) } //此例子中只是为了演示匿名函数可分配不同的内存地址，在现实开发中，不应该把该部分信息放置到循环中。
        g(i)
        fmt.Printf(" - g is of type %T and has value %v\n", g, g)
    }
}
/*
0  - g is of type func(int) and has value 0x5efa00
1  - g is of type func(int) and has value 0x5efa00
2  - g is of type func(int) and has value 0x5efa00
3  - g is of type func(int) and has value 0x5efa00
*/
```

我们可以看到变量 `g` 代表的是 `func(int)`，变量的值是一个内存地址。

所以我们实际上拥有的是一个函数值：匿名函数可以被赋值给变量并作为值使用。

以下示例并思考（return_defer.go）：函数 f 返回时，变量 ret 的值是什么？

```go
package main

import "fmt"

func f() (ret int) {
    defer func() {
        ret++
    }()
    return 1
}
func main() {
    fmt.Println(f())  // 2
}
```

变量 ret 的值为 2，因为 ret++ 是在执行 return 1 语句后发生的。

这可用于在返回语句之后修改返回的 error 时使用。

**defer 语句和匿名函数**

关键字 defer 经常配合匿名函数使用，它可以用于改变函数的命名返回值。

匿名函数还可以配合 go 关键字来作为 goroutine 使用。

匿名函数同样被称之为**闭包**（函数式语言的术语）：它们被允许调用定义在其它环境下的变量。闭包可使得某个函数捕捉到一些外部状态，例如：函数被创建时的状态。另一种表示方式为：一个闭包继承了函数所声明时的作用域。这种状态（作用域内的变量）都被共享到闭包的环境中，因此这些变量可以在闭包中被操作，直到被销毁，详见第 6.9 节中的示例。闭包经常被用作包装函数：它们会预先定义好 1 个或多个参数以用于包装，详见下一节中的示例。另一个不错的应用就是使用闭包来完成更加简洁的错误检查。

----

## 应用闭包：将函数作为返回值

在程序 function_return.go 中我们将会看到函数 Add2 和 Adder 均会返回签名为 func(b int) int 的函数：

```go
func Add2() (func(b int) int)
func Adder(a int) (func(b int) int)
```

函数 Add2 不接受任何参数，但函数 Adder 接受一个 int 类型的整数作为参数。

我们也可以将 Adder 返回的函数存到变量中（function_return.go）。

```go
package main

import "fmt"

func main() {
    // make an Add2 function, give it a name p2, and call it:
    p2 := Add2()
    fmt.Printf("Call Add2 for 3 gives: %v\n", p2(3))
    // make a special Adder function, a gets value 2:
    TwoAdder := Adder(2)
    fmt.Printf("The result is: %v\n", TwoAdder(3))
}

func Add2() func(b int) int {
    return func(b int) int {
        return b + 2
    }
}

func Adder(a int) func(b int) int {
    return func(b int) int {
        return a + b
    }
}
```

下例为一个略微不同的实现

```go
package main

import "fmt"

func main() {
    var f = Adder()
    fmt.Print(f(1), " - ")
    fmt.Print(f(20), " - ")
    fmt.Print(f(300))
}

func Adder() func(int) int {
    var x int
    return func(delta int) int {
        x += delta
        return x
    }
}
// 1 - 21 - 321
```

函数 Adder () 现在被赋值到变量 f 中（类型为 `func(int) int`）。

三次调用函数 f 的过程中函数 Adder () 中变量 delta 的值分别为：1、20 和 300。

我们可以看到，在多次调用中，变量 x 的值是被保留的，即 0 + 1 = 1，然后 1 + 20 = 21，最后 21 + 300 = 321：闭包函数保存并积累其中的变量的值，不管外部函数退出与否，它都能够继续操作外部函数中的局部变量。

这些局部变量同样可以是参数，例如之前例子中的 Adder(as int)。

这些例子清楚地展示了如何在 Go 语言中使用闭包。

在闭包中使用到的变量可以是在闭包函数体内声明的，也可以是在外部函数声明的：

```go
var g int
go func(i int) {
    s := 0
    for j := 0; j < i; j++ { s += j }
    g = s
}(1000) // Passes argument 1000 to the function literal.
```

这样闭包函数就能够被应用到整个集合的元素上，并修改它们的值。然后这些变量就可以用于表示或计算全局或平均值。

学习并理解以下程序的工作原理：

一个返回值为另一个函数的函数可以被称之为工厂函数，这在您需要创建一系列相似的函数的时候非常有用：书写一个工厂函数而不是针对每种情况都书写一个函数。下面的函数演示了如何动态返回追加后缀的函数：

```go
func MakeAddSuffix(suffix string) func(string) string {
    return func(name string) string {
        if !strings.HasSuffix(name, suffix) {
            return name + suffix
        }
        return name
    }
}
```

现在，我们可以生成如下函数：

```go
addBmp := MakeAddSuffix(".bmp")
addJpeg := MakeAddSuffix(".jpeg")
```

然后调用它们：

```go
addBmp("file") // returns: file.bmp
addJpeg("file") // returns: file.jpeg
```

可以返回其它函数的函数和接受其它函数作为参数的函数均被称之为高阶函数，是函数式语言的特点。我们已经在第 6.7 中得知函数也是一种值，因此很显然 Go 语言具有一些函数式语言的特性。闭包在 Go 语言中非常常见，常用于 goroutine 和管道操作（详见第 14.8-14.9 节）。在第 11.14 节的程序中，我们将会看到 Go 语言中的函数在处理混合对象时的强大能力。

----

## 使用闭包调试

当您在分析和调试复杂的程序时，无数个函数在不同的代码文件中相互调用，如果这时候能够准确地知道哪个文件中的具体哪个函数正在执行，对于调试是十分有帮助的。您可以使用 runtime 或 log 包中的特殊函数来实现这样的功能。包 runtime 中的函数 Caller() 提供了相应的信息，因此可以在需要的时候实现一个 where() 闭包函数来打印函数执行的位置：

```go
where := func() {
    _, file, line, _ := runtime.Caller(1)
    log.Printf("%s:%d", file, line)
}
where()
// some code
where()
// some more code
where()
```

您也可以设置 log 包中的 flag 参数来实现：

```go
log.SetFlags(log.Llongfile)
log.Print("")
```

或使用一个更加简短版本的 where 函数：

```go
var where = log.Print
func func1() {
where()
... some code
where()
... some code
where()
}
```

----

## 计算函数执行时间

有时候，能够知道一个计算执行消耗的时间是非常有意义的，尤其是在对比和基准测试中。最简单的一个办法就是在计算开始之前设置一个起始时候，再由计算结束时的结束时间，最后取出它们的差值，就是这个计算所消耗的时间。想要实现这样的做法，可以使用 time 包中的 Now() 和 Sub 函数：

```go
start := time.Now()
longCalculation()
end := time.Now()
delta := end.Sub(start)
fmt.Printf("longCalculation took this amount of time: %s\n", delta)
```

如果您对一段代码进行了所谓的优化，请务必对它们之间的效率进行对比再做出最后的判断。

----

##  通过内存缓存来提升性能

当在进行大量的计算时，提升性能最直接有效的一种方式就是避免重复计算。通过在内存中缓存和重复利用相同计算的结果，称之为内存缓存。最明显的例子就是生成斐波那契数列的程序（详见第 6.6 和 6.11 节）：

要计算数列中第 n 个数字，需要先得到之前两个数的值，但很明显绝大多数情况下前两个数的值都是已经计算过的。即每个更后面的数都是基于之前计算结果的重复计算，正如示例 6.11 fibonnaci.go 所展示的那样。

而我们要做就是将第 n 个数的值存在数组中索引为 n 的位置（详见第 7 章），然后在数组中查找是否已经计算过，如果没有找到，则再进行计算。

程序 Listing 6.17 - fibonacci_memoization.go 就是依照这个原则实现的，下面是计算到第 40 位数字的性能对比：

普通写法：4.730270 秒
内存缓存：0.001000 秒
内存缓存的优势显而易见，而且您还可以将它应用到其它类型的计算中，例如使用 map（详见第 7 章）而不是数组或切片

```go
package main

import (
    "fmt"
    "time"
)

const LIM = 41

var fibs [LIM]uint64

func main() {
    var result uint64 = 0
    start := time.Now()
    for i := 0; i < LIM; i++ {
        result = fibonacci(i)
        fmt.Printf("fibonacci(%d) is: %d\n", i, result)
    }
    end := time.Now()
    delta := end.Sub(start)
    fmt.Printf("longCalculation took this amount of time: %s\n", delta)
}
func fibonacci(n int) (res uint64) {
    // memoization: check if fibonacci(n) is already known in array:
    if fibs[n] != 0 {
        res = fibs[n]
        return
    }
    if n <= 1 {
        res = 1
    } else {
        res = fibonacci(n-1) + fibonacci(n-2)
    }
    fibs[n] = res
    return
}
```

内存缓存的技术在使用计算成本相对昂贵的函数时非常有用（不仅限于例子中的递归），譬如大量进行相同参数的运算。这种技术还可以应用于纯函数中，即相同输入必定获得相同输出的函数。



----

# 数组和切片

## 声明和初始化

### 概念

数组是具有相同 唯一类型 的一组以编号且长度固定的数据项序列（这是一种同构的数据结构）；这种类型可以是任意的原始类型例如整型、字符串或者自定义类型。数组长度必须是一个常量表达式，并且必须是一个非负整数。数组长度也是数组类型的一部分，所以 [5] int 和 [10] int 是属于不同类型的。数组的编译时值初始化是按照数组顺序完成的（如下）。

注意事项 如果我们想让数组元素类型为任意类型的话可以使用空接口作为类型。当使用值时我们必须先做一个类型判断。

数组元素可以通过 索引（位置）来读取（或者修改），索引从 0 开始，第一个元素索引为 0，第二个索引为 1，以此类推。（数组以 0 开始在所有类 C 语言中是相似的）。元素的数目，也称为长度或者数组大小必须是固定的并且在声明该数组时就给出（编译时需要知道数组长度以便分配内存）；数组长度最大为 2Gb。

声明的格式是：

```go
var identifier [len]type
```

例如：

```go
var arr1 [5]int
```

每个元素是一个整型值，当声明数组时所有的元素都会被自动初始化为默认值 0。

arr1 的长度是 5，索引范围从 0 到 len(arr1)-1。

第一个元素是 arr1[0]，第三个元素是 arr1[2]；总体来说索引 i 代表的元素是 arr1[i]，最后一个元素是 arr1[len(arr1)-1]。

对索引项为 i 的数组元素赋值可以这么操作：arr[i] = value，所以数组是 可变的。

只有有效的索引可以被使用，当使用等于或者大于 len(arr1) 的索引时：如果编译器可以检测到，会给出索引超限的提示信息；如果检测不到的话编译会通过而运行时会 panic:

```
runtime error: index out of range
```

由于索引的存在，遍历数组的方法自然就是使用 for 结构:

- 通过 for 初始化数组项
- 通过 for 打印数组元素
- 通过 for 依次处理元素

```go
package main

import "fmt"

func main() {
    var arr1 [5]int

    for i := 0; i < len(arr1); i++ {
        arr1[i] = i * 2
    }

    for i := 0; i < len(arr1); i++ {
        fmt.Printf("%d ", arr1[i])  // 0 2 4 6 8 
    }
}
```

for 循环中的条件非常重要：`i < len(arr1)`，如果写成 `i <= len(arr1)` 的话会产生越界错误。

也可以使用 for-range 的生成方式：

```go
package main

import "fmt"

func main() {
    var arr1 [5]int

    for i,_ := range arr1 {
        arr1[i] = i * 2
    }

    for i := 0; i < len(arr1); i++ {
        fmt.Printf("%d ", arr1[i])  // 0 2 4 6 8 
    }
}
```

在这里 i 也是数组的索引。当然这两种 for 结构对于切片（slices）来说也同样适用。

```go
package main

import "fmt"

func main() {
    a := [...]string{"a", "b", "c", "d"}
    for i := range a {
        fmt.Println("Array item", i, "is", a[i])
    }

}
```

Go 语言中的数组是一种 值类型（不像 C/C++ 中是指向首元素的指针），所以可以通过 new() 来创建： var arr1 = new([5]int)。

那么这种方式和 var arr2 [5]int 的区别是什么呢？arr1 的类型是 *[5]int，而 arr2 的类型是 [5]int。

这样的结果就是当把一个数组赋值给另一个时，需要再做一次数组内存的拷贝操作。例如：

```go
arr2 := *arr1
arr2[2] = 100
```

这样两个数组就有了不同的值，在赋值后修改 arr2 不会对 arr1 生效。

所以在函数中数组作为参数传入时，如 func1(arr2)，会产生一次数组拷贝，func1 方法不会修改原始的数组 arr2。

如果你想修改原数组，那么 arr2 必须通过 & 操作符以引用方式传过来，例如 func1 (&arr2），下面是一个例子

```go
package main

import "fmt"

func main() {
    var arr [3]int
    f(arr)  // [0 0 0]
    fp(&arr)  // &[0 0 0]
}
func f(a [3]int) { fmt.Println(a) }
func fp(a *[3]int) { fmt.Println(a) }
```

另一种方法就是生成数组切片并将其传递给函数

----

### 数组常量

如果数组值已经提前知道了，那么可以通过 **数组常量** 的方法来初始化数组，而不用依次使用 `[]=` 方法（所有的组成元素都有相同的常量语法）。

```go
package main

import "fmt"

func main() {
    // var arrAge = [5]int{32, 22, 19, 94, 44}
    // var arrLazy = [...]int{3, 2, 1, 9, 5}
    // var arrLazy2 = []int{3, 2, 1, 5, 6}
    // var arrKeyValue = [5]string{3: "fabi", 4: "virgil"}
    var arrKeyValue2 = []string{3: "fabi", 4: "virgil"}

    for i := 0; i < len(arrKeyValue2); i++ {
        fmt.Printf("Person at %d is %s\n", i, arrKeyValue2[i])
    }
}
/*
Person at 0 is 
Person at 1 is 
Person at 2 is 
Person at 3 is fabi
Person at 4 is virgil
*/
```

第一种变化：

```go
var arrAge = [5]int{18, 20, 15, 22, 16}
```

注意 [5]int 可以从左边起开始忽略：[10]int {1, 2, 3} : 这是一个有 10 个元素的数组，除了前三个元素外其他元素都为 0。

第二种变化：

```go
var arrLazy = [...]int{5, 6, 7, 8, 22}
```

... 可同样可以忽略，从技术上说它们其实变化成了切片。

第三种变化：key: value syntax

```go
var arrKeyValue = [5]string{3: "Chris", 4: "Ron"}
```

只有索引 3 和 4 被赋予实际的值，其他元素都被设置为空的字符串，所以输出结果为：

```
Person at 0 is
Person at 1 is
Person at 2 is
Person at 3 is Chris
Person at 4 is Ron
```

在这里数组长度同样可以写成 `...` 或者直接忽略。

你可以取任意数组常量的地址来作为指向新实例的指针。

```go
package main

import "fmt"

func fp(a *[3]int) {
    fmt.Println(a)
}

func main() {
    for i := 0; i < 3; i++ {
        fp(&[3]int{i, i * i, i * i * i})
    }
}
/*
&[0 0 0]
&[1 1 1]
&[2 4 8]
*/
```

几何点（或者数学向量）是一个使用数组的经典例子。为了简化代码通常使用一个别名：

```go
type Vector3D [3]float32
var vec Vector3D
```

----

### 多维数组

数组通常是一维的，但是可以用来组装成多维数组，例如：`[3][5]int`，`[2][2][2]float64`。

内部数组总是长度相同的。Go 语言的多维数组是矩形式的（唯一的例外是切片的数组)

```go
package main

import "fmt"

const (
    WIDTH = 1920
    HEIGHT = 1000
)

type pixel int

var screen [WIDTH][HEIGHT]pixel

func main() {
    for y := 0; y < HEIGHT; y++ {
        for x := 0; x < WIDTH; x++ {
            screen[x][y] = 0
        }
    }
}
```

----

### 将数组传递给函数

把一个大数组传递给函数会消耗很多内存。有两种方法可以避免这种现象：

- 传递数组的指针
- 使用数组的切片

接下来的例子阐明了第一种方法：

```go
package main
import "fmt"

func main() {
    arr := [3]float64{7.0, 8.3, 9.1}
    x := Sum(&arr)
    fmt.Println(x)  // 24.4
}

func Sum(a *[3]float64) (sum float64) {
    for _, v := range *a {
        sum += v
    }
    return
}
```

但这在 Go 中并不常用，通常使用切片

----

## 切片

###  概念

切片（slice）是对数组一个连续片段的引用（该数组我们称之为**相关数组**，通常是匿名的），所以切片是一个引用类型（因此更类似于 C/C++ 中的数组类型，或者 Python 中的 list 类型）。这个片段可以是整个数组，或者是由起始和终止索引标识的一些项的子集。需要注意的是，终止索引标识的项不包括在切片内。切片提供了一个相关数组的动态窗口。

**切片是可索引的，并且可以由 len() 函数获取长度。**

给定项的切片索引可能比相关数组的相同元素的索引小。和数组不同的是，切片的长度可以在运行时修改，最小为 0 最大为相关数组的长度：切片是一个 长度可变的数组。

切片提供了计算容量的函数 cap() 可以测量切片最长可以达到多少：它等于切片从第一个元素开始，到相关数组末尾的元素个数。如果 s 是一个切片，**cap(s) 就是从 s[0] 到数组末尾的数组长度**。切片的长度永远不会超过它的容量，**所以对于 切片 s 来说该不等式永远成立：0 <= len(s) <= cap(s)。**

多个切片如果表示同一个数组的片段，它们可以共享数据；因此一个切片和相关数组的其他切片是共享存储的，相反，不同的数组总是代表不同的存储。数组实际上是切片的构建块。

优点 因为切片是引用，所以它们不需要使用额外的内存并且比使用数组更有效率，所以在 Go 代码中 切片比数组更常用。

声明切片的格式是： var identifier []type（不需要说明长度）。

**一个切片在未初始化之前默认为 nil，长度为 0。**

切片的初始化格式是：

```go
var slice1 []type = arr1[start:end]
```



这表示 slice1 是由数组 arr1 从 start 索引到 end-1 索引之间的元素构成的子集（切分数组，start:end 被称为 slice 表达式）。所以 slice1[0] 就等于 arr1[start]。这可以在 arr1 被填充前就定义好。

如果某个人写：

```go
var slice1 []type = arr1[:] 
```

那么 slice1 就等于完整的 arr1 数组（所以这种表示方式是 arr1[0:len(arr1)] 的一种缩写）。另外一种表述方式是：

```go
slice1 = &arr1
```



arr1[2:] 和 arr1[2:len(arr1)] 相同，都包含了数组从第三个到最后的所有元素。

arr1[:3] 和 arr1[0:3] 相同，包含了从第一个到第三个元素（不包括第四个 / 不包含下标为三的元素）。

如果你想去掉 slice1 的最后一个元素，只要 slice1 = slice1[:len(slice1)-1]。

一个由数字 1、2、3 组成的切片可以这么生成：s := [3]int{1,2,3}[:] 甚至更简单的 s := []int{1,2,3}。

s2 := s[:] 是用切片组成的切片，拥有相同的元素，但是仍然指向相同的相关数组。

**一个切片 s 可以这样扩展到它的大小上限**：s = s[:cap(s)]，如果再扩大的话就会导致运行时错误。

对于每一个切片（包括 string），以下状态总是成立的：

```go
s == s[:i] + s[i:] // i是一个整数且: 0 <= i <= len(s)
len(s) <= cap(s)
```

切片也可以用类似数组的方式初始化：var x = []int{2, 3, 5, 7, 11}。这样就创建了一个长度为 5 的数组并且创建了一个相关切片。

切片在内存中的组织方式实际上是一个有 3 个域的结构体：**指向相关数组的指针，切片长度以及切片容量**。下图给出了一个长度为 2，容量为 4 的切片 y。

y[0] = 3 且 y[1] = 5。
切片 y[0:4] 由 元素 3，5，7, 11 组成。

```go
package main
import "fmt"

func main() {
    var arr1 [6]int
    var slice1 []int = arr1[2:5] // item at index 5 not included!

    // load the array with integers: 0,1,2,3,4,5
    for i := 0; i < len(arr1); i++ {
        arr1[i] = i
    }

    // print the slice
    for i := 0; i < len(slice1); i++ {
        fmt.Printf("Slice at %d is %d\n", i, slice1[i])
    }

    fmt.Printf("The length of arr1 is %d\n", len(arr1))
    fmt.Printf("The length of slice1 is %d\n", len(slice1))
    fmt.Printf("The capacity of slice1 is %d\n", cap(slice1))

    // grow the slice
    slice1 = slice1[0:4]
    for i := 0; i < len(slice1); i++ {
        fmt.Printf("Slice at %d is %d\n", i, slice1[i])
    }
    fmt.Printf("The length of slice1 is %d\n", len(slice1))
    fmt.Printf("The capacity of slice1 is %d\n", cap(slice1))

    // grow the slice beyond capacity
    //slice1 = slice1[0:7 ] // panic: runtime error: slice bound out of range
}
/*
Slice at 0 is 2
Slice at 1 is 3
Slice at 2 is 4
The length of arr1 is 6
The length of slice1 is 3
The capacity of slice1 is 4
Slice at 0 is 2
Slice at 1 is 3
Slice at 2 is 4
Slice at 3 is 5
The length of slice1 is 4
The capacity of slice1 is 4
*/
```

如果 s2 是一个 slice，你可以将 s2 向后移动一位 s2 = s2[1:]，但是末尾没有移动。切片只能向后移动，s2 = s2[-1:] 会导致编译错误。切片不能被重新分片以获取数组的前一个元素。

注意 绝对不要用指针指向 slice。切片本身已经是一个引用类型，所以它本身就是一个指针！！

----

### 将切片传递给函数

如果你有一个函数需要对数组做操作，你可能总是需要把参数声明为切片。当你调用该函数时，把数组分片，创建为一个 切片引用并传递给该函数。这里有一个计算数组元素和的方法:

```go
func sum(a []int) int {
    s := 0
    for i := 0; i < len(a); i++ {
        s += a[i]
    }
    return s
}

func main() {
    var arr = [5]int{0, 1, 2, 3, 4}
    sum(arr[:])
}
```

###  用 make () 创建一个切片

当相关数组还没有定义时，我们可以使用 make () 函数来创建一个切片 同时创建好相关数组：var slice1 []type = make([]type, len)。

也可以简写为 slice1 := make([]type, len)，这里 len 是数组的长度并且也是 slice 的初始长度。

所以定义 s2 := make([]int, 10)，那么 cap(s2) == len(s2) == 10。

make 接受 2 个参数：元素的类型以及切片的元素个数。

如果你想创建一个 slice1，它不占用整个数组，而只是占用以 len 为个数个项，那么只要：slice1 := make([]type, len, cap)。

make 的使用方式是：func make([]T, len, cap)，其中 cap 是可选参数。

所以下面两种方法可以生成相同的切片:

```go
make([]int, 50, 100)
new([100]int)[0:50]
```

```go
package main
import "fmt"

func main() {
    var slice1 []int = make([]int, 5)

    // load the array with integers: 0,1,2,3,4,5
    for i := 0; i < len(slice1); i++ {
        slice1[i] = i * 5
    }

    // print the slice
    for i := 0; i < len(slice1); i++ {
        fmt.Printf("Slice at %d is %d\n", i, slice1[i])
    }
    fmt.Printf("\nThe length of slice1 is %d\n", len(slice1))
    fmt.Printf("The capacity of slice1 is %d\n", cap(slice1))
}
/*
Slice at 0 is 0
Slice at 1 is 5
Slice at 2 is 10
Slice at 3 is 15
Slice at 4 is 20

The length of slice1 is 5
The capacity of slice1 is 5
*/
```

因为字符串是纯粹不可变的字节数组，它们也可以被切分成 切片。

----

### new () 和 make () 的区别

看起来二者没有什么区别，都在堆上分配内存，但是它们的行为不同，适用于不同的类型。

- new (T) 为每个新的类型 T 分配一片内存，初始化为 0 并且返回类型为 * T 的内存地址：这种方法 返回一个指向类型为 T，值为 0 的地址的指针，它适用于值类型如数组和结构体；它相当于 &T{}。

- make(T) 返回一个类型为 T 的初始值，它只适用于 3 种内建的引用类型：切片、map 和 channel。

```go
var p *[]int = new([]int) // *p == nil; with len and cap 0
p := new([]int)
```

在第二幅图中， `p := make([]int, 0)` ，切片 已经被初始化，但是指向一个空的数组。

以上两种方式实用性都不高。下面的方法：

```go
var v []int = make([]int, 10, 50)
```

或者

```go
v := make([]int, 10, 50)
```

这样分配一个有 50 个 int 值的数组，并且创建了一个长度为 10，容量为 50 的 切片 v，该 切片 指向数组的前 10 个元素。

----

### 多维切片

和数组一样，切片通常也是一维的，但是也可以由一维组合成高维。通过分片的分片（或者切片的数组），长度可以任意动态变化，所以 Go 语言的多维切片可以任意切分。而且，内层的切片必须单独分配（通过 make 函数）。

----

### bytes 包

类型 []byte 的切片十分常见，Go 语言有一个 bytes 包专门用来解决这种类型的操作方法。

bytes 包和字符串包十分类似。而且它还包含一个十分有用的类型 Buffer:

```go
import "bytes"

type Buffer struct {
    ...
}
```

这是一个长度可变的 bytes 的 buffer，提供 Read 和 Write 方法，因为读写长度未知的 bytes 最好使用 buffer。

Buffer 可以这样定义：

```go
var buffer bytes.Buffer
```

或者使用 new 获得一个指针：

```go
var r *bytes.Buffer = new(bytes.Buffer)
```

或者通过函数：

```go
func NewBuffer(buf []byte) *Buffer
```

创建一个 Buffer 对象并且用 buf 初始化好；NewBuffer 最好用在从 buf 读取的时候使用。

**通过 buffer 串联字符串**

类似于 Java 的 StringBuilder 类。

在下面的代码段中，我们创建一个 buffer，通过 buffer.WriteString(s) 方法将字符串 s 追加到后面，最后再通过 buffer.String() 方法转换为 string：

```go
var buffer bytes.Buffer
for {
    if s, ok := getNextString(); ok { //method getNextString() not shown here
        buffer.WriteString(s)
    } else {
        break
    }
}
fmt.Print(buffer.String(), "\n")
```

这种实现方式比使用 `+=` 要更节省内存和 CPU，尤其是要串联的字符串数目特别多的时候。

---

## For-range 结构

这种构建方法可以应用于数组和切片:

```go
for ix, value := range slice1 {
    ...
}
```

第一个返回值 ix 是数组或者切片的索引，第二个是在该索引位置的值；他们都是仅在 for 循环内部可见的局部变量。value 只是 slice1 某个索引位置的值的一个拷贝，不能用来修改 slice1 该索引位置的值。

```go
package main

import "fmt"

func main() {
    var slice1 []int = make([]int, 4)

    slice1[0] = 1
    slice1[1] = 2
    slice1[2] = 3
    slice1[3] = 4

    for ix, value := range slice1 {
        fmt.Printf("Slice at %d is: %d\n", ix, value)
    }
}
/*
Slice at 0 is: 1
Slice at 1 is: 2
Slice at 2 is: 3
Slice at 3 is: 4
*/
```

```go
package main
import "fmt"

func main() {
    seasons := []string{"Spring", "Summer", "Autumn", "Winter"}
    for ix, season := range seasons {
        fmt.Printf("Season %d is: %s\n", ix, season)
    }

    var season string
    for _, season = range seasons {
        fmt.Printf("%s\n", season)
    }
}
/*
Season 0 is: Spring
Season 1 is: Summer
Season 2 is: Autumn
Season 3 is: Winter
Spring
Summer
Autumn
Winter
*/
```

如果你只需要索引，你可以忽略第二个变量，例如：

```go
for ix := range seasons {
    fmt.Printf("%d", ix)
}
// Output: 0 1 2 3
```

如果你需要修改 `seasons[ix]` 的值可以使用这个版本。

**多维切片下的 for-range：**

通过计算行数和矩阵值可以很方便的写出如下的 for 循环来，例如

```go
for row := range screen {
    for column := range screen[row] {
        screen[row][column] = 1
    }
}
```

----

## 切片重组

我们已经知道切片创建的时候通常比相关数组小，例如：

```go
slice1 := make([]type, start_length, capacity)
```

其中 start_length 作为切片初始长度而 capacity 作为相关数组的长度。

这么做的好处是我们的切片在达到容量上限后可以扩容。改变切片长度的过程称之为切片重组 reslicing，做法如下：slice1 = slice1[0:end]，其中 end 是新的末尾索引（即长度）。

将切片扩展 1 位可以这么做：

```go
sl = sl[0:len(sl)+1]
```

切片可以反复扩展直到占据整个相关数组。

```go
package main
import "fmt"

func main() {
    slice1 := make([]int, 0, 10)
    // load the slice, cap(slice1) is 10:
    for i := 0; i < cap(slice1); i++ {
        slice1 = slice1[0:i+1]
        slice1[i] = i
        fmt.Printf("The length of slice is %d\n", len(slice1))
    }

    // print the slice:
    for i := 0; i < len(slice1); i++ {
        fmt.Printf("Slice at %d is %d\n", i, slice1[i])
    }
}
```

另一个例子：

```go
var ar = [10]int{0,1,2,3,4,5,6,7,8,9}
var a = ar[5:7] // reference to subarray {5,6} - len(a) is 2 and cap(a) is 5
```

将 a 重新分片：

```go
a = a[0:4] // ref of subarray {5,6,7,8} - len(a) is now 4 but cap(a) is still 5
```



----

## 切片的复制与追加

如果想增加切片的容量，我们必须创建一个新的更大的切片并把原分片的内容都拷贝过来。下面的代码描述了从拷贝切片的 copy 函数和向切片追加新元素的 append 函数。

```go
package main
import "fmt"

func main() {
    sl_from := []int{1, 2, 3}
    sl_to := make([]int, 10)

    n := copy(sl_to, sl_from)
    fmt.Println(sl_to)
    fmt.Printf("Copied %d elements\n", n) // n == 3

    sl3 := []int{1, 2, 3}
    sl3 = append(sl3, 4, 5, 6)
    fmt.Println(sl3)
}
```

func append(s[]T, x ...T) []T 其中 append 方法将 0 个或多个具有相同类型 s 的元素追加到切片后面并且返回新的切片；追加的元素必须和原切片的元素同类型。如果 s 的容量不足以存储新增元素，append 会分配新的切片来保证已有切片元素和新增元素的存储。因此，返回的切片可能已经指向一个不同的相关数组了。append 方法总是返回成功，除非系统内存耗尽了。

如果你想将切片 y 追加到切片 x 后面，只要将第二个参数扩展成一个列表即可：x = append(x, y...)。

**注意**： append 在大多数情况下很好用，但是如果你想完全掌控整个追加过程，你可以实现一个这样的 AppendByte 方法：

```go
func AppendByte(slice []byte, data ...byte) []byte {
    m := len(slice)
    n := m + len(data)
    if n > cap(slice) { // if necessary, reallocate
        // allocate double what's needed, for future growth.
        newSlice := make([]byte, (n+1)*2)
        copy(newSlice, slice)
        slice = newSlice
    }
    slice = slice[0:n]
    copy(slice[m:n], data)
    return slice
}
```

func copy(dst, src []T) int copy 方法将类型为 T 的切片从源地址 src 拷贝到目标地址 dst，覆盖 dst 的相关元素，并且返回拷贝的元素个数。源地址和目标地址可能会有重叠。拷贝个数是 src 和 dst 的长度最小值。如果 src 是字符串那么元素类型就是 byte。如果你还想继续使用 src，在拷贝结束后执行 src = dst。

----

## 字符串、数组和切片的应用

### 从字符串生成字节切片

假设 s 是一个字符串（本质上是一个字节数组），那么就可以直接通过 c := []byte(s) 来获取一个字节数组的切片 c。另外，您还可以通过 copy 函数来达到相同的目的：copy(dst []byte, src string)。

同样的，还可以使用 for-range 来获得每个元素（Listing 7.13—for_string.go）：

```go
package main

import "fmt"

func main() {
    s := "\u00ff\u754c"
    for i, c := range s {
        fmt.Printf("%d:%c ", i, c)  // 0:ÿ 2:界 
    }
}
```

我们知道，Unicode 字符会占用 2 个字节，有些甚至需要 3 个或者 4 个字节来进行表示。如果发现错误的 UTF8 字符，则该字符会被设置为 U+FFFD 并且索引向前移动一个字节。和字符串转换一样，您同样可以使用 c := []int32(s) 语法，这样切片中的每个 int 都会包含对应的 Unicode 代码，因为字符串中的每次字符都会对应一个整数。类似的，您也可以将字符串转换为元素类型为 rune 的切片：r := []rune(s)。

可以通过代码 len([]int32(s)) 来获得字符串中字符的数量，但使用 utf8.RuneCountInString(s) 效率会更高一点。

您还可以将一个字符串追加到某一个字符数组的尾部：

```go
var b []byte
var s string
b = append(b, s...)
```

###  获取字符串的某一部分

使用 substr := str[start:end] 可以从字符串 str 获取到从索引 start 开始到 end-1 位置的子字符串。同样的，str[start:] 则表示获取从 start 开始到 len(str)-1 位置的子字符串。而 str[:end] 表示获取从 0 开始到 end-1 的子字符串。

### 字符串和切片的内存结构

在内存中，一个字符串实际上是一个双字结构，即一个指向实际数据的指针和记录字符串长度的整数。因为指针对用户来说是完全不可见，因此我们可以依旧把字符串看做是一个值类型，也就是一个字符数组。

### 修改字符串中的某个字符

Go 语言中的字符串是不可变的，也就是说 str[index] 这样的表达式是不可以被放在等号左侧的。如果尝试运行 str[i] = 'D' 会得到错误：cannot assign to str[i]。

因此，您必须先将字符串转换成字节数组，然后再通过修改数组中的元素值来达到修改字符串的目的，最后将字节数组转换回字符串格式。

例如，将字符串 “hello” 转换为 “cello”：

```go
s := "hello"
c := []byte(s)
c[0] = 'c'
s2 := string(c) // s2 == "cello"
```

所以，您可以通过操作切片来完成对字符串的操作。

----

## 字节数组对比函数

下面的 `Compare` 函数会返回两个字节数组字典顺序的整数对比结果，即 `0 if a == b, -1 if a < b, 1 if a > b`。

```go
func Compare(a, b[]byte) int {
    for i:=0; i < len(a) && i < len(b); i++ {
        switch {
        case a[i] > b[i]:
            return 1
        case a[i] < b[i]:
            return -1
        }
    }
    // 数组的长度可能不同
    switch {
    case len(a) < len(b):
        return -1
    case len(a) > len(b):
        return 1
    }
    return 0 // 数组相等
}
```

### 搜索及排序切片和数组

标准库提供了 sort 包来实现常见的搜索和排序操作。您可以使用 sort 包中的函数 func Ints(a []int) 来实现对 int 类型的切片排序。例如 sort.Ints(arri)，其中变量 arri 就是需要被升序排序的数组或切片。为了检查某个数组是否已经被排序，可以通过函数 IntsAreSorted(a []int) bool 来检查，如果返回 true 则表示已经被排序。

类似的，可以使用函数 func Float64s(a []float64) 来排序 float64 的元素，或使用函数 func Strings(a []string) 排序字符串元素。

想要在数组或切片中搜索一个元素，该数组或切片必须先被排序（因为标准库的搜索算法使用的是二分法）。然后，您就可以使用函数 func SearchInts(a []int, n int) int 进行搜索，并返回对应结果的索引值。

当然，还可以搜索 float64 和字符串：

```go
func SearchFloat64s(a []float64, x float64) int
func SearchStrings(a []string, x string) int
```

您可以通过查看 官方文档 来获取更详细的信息。

这就是如何使用 sort 包的方法，我们会在第 11.6 节对它的细节进行深入，并实现一个属于我们自己的版本。

### append 函数常见操作

我们在第 7.5 节提到的 append 非常有用，它能够用于各种方面的操作：

将切片 b 的元素追加到切片 a 之后：a = append(a, b...)

复制切片 a 的元素到新的切片 b 上：

 b = make([]T, len(a))
 copy(b, a)
删除位于索引 i 的元素：a = append(a[:i], a[i+1:]...)

切除切片 a 中从索引 i 至 j 位置的元素：a = append(a[:i], a[j:]...)

为切片 a 扩展 j 个元素长度：a = append(a, make([]T, j)...)

在索引 i 的位置插入元素 x：a = append(a[:i], append([]T{x}, a[i:]...)...)

在索引 i 的位置插入长度为 j 的新切片：a = append(a[:i], append(make([]T, j), a[i:]...)...)

在索引 i 的位置插入切片 b 的所有元素：a = append(a[:i], append(b, a[i:]...)...)

取出位于切片 a 最末尾的元素 x：x, a = a[len(a)-1:], a[:len(a)-1]

将元素 x 追加到切片 a：a = append(a, x)

因此，您可以使用切片和 append 操作来表示任意可变长度的序列。

从数学的角度来看，切片相当于向量，如果需要的话可以定义一个向量作为切片的别名来进行操作。

如果您需要更加完整的方案，可以学习一下 Eleanor McHugh 编写的几个包：slices、chain 和 lists。

----

### 切片和垃圾回收

切片的底层指向一个数组，该数组的实际容量可能要大于切片所定义的容量。**只有在没有任何切片指向的时候，底层的数组内存才会被释放，这种特性有时会导致程序占用多余的内存。**

示例 函数 FindDigits 将一个文件加载到内存，然后搜索其中所有的数字并返回一个切片。

```go
var digitRegexp = regexp.MustCompile("[0-9]+")

func FindDigits(filename string) []byte {
    b, _ := ioutil.ReadFile(filename)
    return digitRegexp.Find(b)
}
```

这段代码可以顺利运行，但返回的 []byte 指向的底层是整个文件的数据。只要该返回的切片不被释放，垃圾回收器就不能释放整个文件所占用的内存。换句话说，一点点有用的数据却占用了整个文件的内存。

想要避免这个问题，可以通过拷贝我们需要的部分到一个新的切片中：

```go
func FindDigits(filename string) []byte {
   b, _ := ioutil.ReadFile(filename)
   b = digitRegexp.Find(b)
   c := make([]byte, len(b))
   copy(c, b)
   return c
}
```

事实上，上面这段代码只能找到第一个匹配正则表达式的数字串。要想找到所有的数字，可以尝试下面这段代码：

```go
func FindFileDigits(filename string) []byte {
   fileBytes, _ := ioutil.ReadFile(filename)
   b := digitRegexp.FindAll(fileBytes, len(fileBytes))
   c := make([]byte, 0)
   for _, bytes := range b {
      c = append(c, bytes...)
   }
   return c
}
```



----

# Map

map 是一种特殊的数据结构：一种元素对（pair）的无序集合，pair 的一个元素是 key，对应的另一个元素是 value，所以这个结构也称为关联数组或字典。这是一种快速寻找值的理想结构：给定 key，对应的 value 可以迅速定位。

map 这种数据结构在其他编程语言中也称为字典（Python）、hash 和 HashTable 等。

## 声明、初始化和 make

### 概念

map 是引用类型，可以使用如下声明：

```go
var map1 map[keytype]valuetype
var map1 map[string]int
```

（[keytype] 和 valuetype 之间允许有空格，但是 gofmt 移除了空格）

在声明的时候不需要知道 map 的长度，map 是可以动态增长的。

未初始化的 map 的值是 nil。

key 可以是任意可以用 == 或者！= 操作符比较的类型，比如 string、int、float。所以切片和结构体不能作为 key (译者注：含有数组切片的结构体不能作为 key，只包含内建类型的 struct 是可以作为 key 的），但是指针和接口类型可以。如果要用结构体作为 key 可以提供 Key() 和 Hash() 方法，这样可以通过结构体的域计算出唯一的数字或者字符串的 key。

value 可以是任意类型的；通过使用空接口类型，我们可以存储任意值，但是使用这种类型作为值时需要先做一次类型断言。

map 传递给函数的代价很小：在 32 位机器上占 4 个字节，64 位机器上占 8 个字节，无论实际上存储了多少数据。通过 key 在 map 中寻找值是很快的，比线性查找快得多，**但是仍然比从数组和切片的索引中直接读取要慢 100 倍**；所以如果你很在乎性能的话还是建议用切片来解决问题。

map 也可以用函数作为自己的值，这样就可以用来做分支结构：key 用来选择要执行的函数。

如果 key1 是 map1 的 key，那么 map1[key1] 就是对应 key1 的值，就如同数组索引符号一样（数组可以视为一种简单形式的 map，key 是从 0 开始的整数）。

key1 对应的值可以通过赋值符号来设置为 val1：map1[key1] = val1。

令 v := map1[key1] 可以将 key1 对应的值赋值给 v；如果 map 中没有 key1 存在，那么 v 将被赋值为 map1 的值类型的空值。

常用的 len(map1) 方法可以获得 map 中的 pair 数目，这个数目是可以伸缩的，因为 map-pairs 在运行时可以动态添加和删除。

```go
package main

import "fmt"

func main() {
    var mapList map[string]int
    var mapAssigned map[string]int

    mapList = map[string]int{"one":1, "two":2}
    mapCreated := make(map[string]float32)
    mapAssigned = mapList

    mapCreated["key1"] = 2.3
    mapCreated["key2"] = 4.1
    mapAssigned["two"] = 3

    fmt.Printf("Map literal at \"one\" is: %d\n", mapList["one"])
    fmt.Printf("Map created at \"key2\" is: %f\n", mapCreated["key2"])
    fmt.Printf("Map assigned at \"two\" is: %d\n", mapAssigned["two"])
    fmt.Printf("Map literal at \"ten\" is: %d\n", mapList["ten"])
}
/*
Map literal at "one" is: 1
Map created at "key2" is: 4.100000
Map assigned at "two" is: 3
Map literal at "ten" is: 0
*/
```

mapLit 说明了 map literals 的使用方法： map 可以用 {key1: val1, key2: val2} 的描述方法来初始化，就像数组和结构体一样。

map 是 引用类型 的： 内存用 make 方法来分配。

map 的初始化：var map1 = make(map[keytype]valuetype)。

或者简写为：map1 := make(map[keytype]valuetype)。

上面例子中的 mapCreated 就是用这种方式创建的：mapCreated := make(map[string]float32)。

相当于：mapCreated := map[string]float32{}。

mapAssigned 也是 mapLit 的引用，对 mapAssigned 的修改也会影响到 mapLit 的值。

**不要使用 new，永远用 make 来构造 map**

注意 如果你错误的使用 new () 分配了一个引用对象，你会获得一个空引用的指针，相当于声明了一个未初始化的变量并且取了它的地址：

```go
mapCreated := new(map[string]float32)
```

接下来当我们调用：mapCreated["key1"] = 4.5 的时候，编译器会报错：

```
invalid operation: mapCreated["key1"] (index of type *map[string]float32).
```

为了说明值可以是任意类型的，这里给出了一个使用 func() int 作为值的 map：

```go
package main

import "fmt"

func main() {
    mf := map[int]func() int {
        1: func() int { return 10 },
        2: func() int { return 20 },
        3: func() int { return 30 },
    }
    fmt.Println(mf)  // map[1:0xa0e7c0 2:0xa0e7e0 3:0xa0e800]
}
```

输出结果为：`map[1:0xa0e7c0 2:0xa0e7e0 3:0xa0e800]`: 整形都被映射到函数地址。

### map 容量

和数组不同，map 可以根据新增的 key-value 对动态的伸缩，因此它不存在固定长度或者最大限制。但是你也可以选择标明 map 的初始容量 capacity，就像这样：make(map[keytype]valuetype, cap)。例如：

```go
map2 := make(map[string]float32, 100)
```

当 map 增长到容量上限的时候，如果再增加新的 key-value 对，map 的大小会自动加 1。所以出于性能的考虑，对于大的 map 或者会快速扩张的 map，即使只是大概知道容量，也最好先标明。

这里有一个 map 的具体例子，即将音阶和对应的音频映射起来：

```go
noteFrequency := map[string]float32 {
    "C0": 16.35, "D0": 18.35, "E0": 20.60, "F0": 21.83,
    "G0": 24.50, "A0": 27.50, "B0": 30.87, "A4": 440}
```

### 用切片作为 map 的值

既然一个 key 只能对应一个 value，而 value 又是一个原始类型，那么如果一个 key 要对应多个值怎么办？例如，当我们要处理 unix 机器上的所有进程，以父进程（pid 为整型）作为 key，所有的子进程（以所有子进程的 pid 组成的切片）作为 value。通过将 value 定义为 []int 类型或者其他类型的切片，就可以优雅的解决这个问题。

这里有一些定义这种 map 的例子：

```go
mp1 := make(map[int][]int)
mp2 := make(map[int]*[]int)
```



---

## 测试键值对是否存在及删除元素

测试 map1 中是否存在 key1：

在例子 8.1 中，我们已经见过可以使用 val1 = map1[key1] 的方法获取 key1 对应的值 val1。如果 map 中不存在 key1，val1 就是一个值类型的空值。

这就会给我们带来困惑了：现在我们没法区分到底是 key1 不存在还是它对应的 value 就是空值。

为了解决这个问题，我们可以这么用：val1, isPresent = map1[key1]

**isPresent 返回一个 bool 值**：如果 key1 存在于 map1，val1 就是 key1 对应的 value 值，并且 isPresent 为 true；如果 key1 不存在，val1 就是一个空值，并且 isPresent 会返回 false。

如果你只是想判断某个 key 是否存在而不关心它对应的值到底是多少，你可以这么做：

```go
_, ok := map1[key1] // 如果key1存在则ok == true，否则ok为false
```

或者和 if 混合使用：

```go
if _, ok := map1[key1]; ok {
    // ...
}
```

从 map1 中删除 key1：

直接 `delete(map1, key1)` 就可以。

如果 key1 不存在，该操作不会产生错误。

```go
package main
import "fmt"

func main() {
    var value int
    var isPresent bool

    map1 := make(map[string]int)
    map1["New Delhi"] = 55
    map1["Beijing"] = 20
    map1["Washington"] = 25
    value, isPresent = map1["Beijing"]
    if isPresent {
        fmt.Printf("The value of \"Beijing\" in map1 is: %d\n", value)
    } else {
        fmt.Printf("map1 does not contain Beijing")
    }

    value, isPresent = map1["Paris"]
    fmt.Printf("Is \"Paris\" in map1 ?: %t\n", isPresent)
    fmt.Printf("Value is: %d\n", value)

    // delete an item:
    delete(map1, "Washington")
    value, isPresent = map1["Washington"]
    if isPresent {
        fmt.Printf("The value of \"Washington\" in map1 is: %d\n", value)
    } else {
        fmt.Println("map1 does not contain Washington")
    }
}
```

----

## for-range 的配套用法

可以使用 for 循环构造 map：

```go
for key, value := range map1 {
    ...
}
```

第一个返回值 key 是 map 中的 key 值，第二个返回值则是该 key 对应的 value 值；这两个都是仅 for 循环内部可见的局部变量。其中第一个返回值 key 值是一个可选元素。如果你只关心值，可以这么使用：

```go
for _, value := range map1 {
    ...
}
```

如果只想获取 key，你可以这么使用：

```go
for key := range map1 {
    fmt.Printf("key is: %d\n", key)
}
```

```go
package main
import "fmt"

func main() {
    map1 := make(map[int]float32)
    map1[1] = 1.0
    map1[2] = 2.0
    map1[3] = 3.0
    map1[4] = 4.0
    for key, value := range map1 {
        fmt.Printf("key is: %d - value is: %f\n", key, value)
    }
}
/*
key is: 3 - value is: 3.000000
key is: 4 - value is: 4.000000
key is: 1 - value is: 1.000000
key is: 2 - value is: 2.000000
*/
```

注意 map 不是按照 key 的顺序排列的，也不是按照 value 的序排列的。

----

## map 类型的切片

假设我们想获取一个 map 类型的切片，我们必须使用两次 `make()` 函数，第一次分配切片，第二次分配 切片中每个 map 元素.

```go
package main
import "fmt"

func main() {
    // Version A:
    items := make([]map[int]int, 5)
    for i:= range items {
        items[i] = make(map[int]int, 1)
        items[i][1] = 2
    }
    fmt.Printf("Version A: Value of items: %v\n", items)

    // Version B: NOT GOOD!
    items2 := make([]map[int]int, 5)
    for _, item := range items2 {
        item = make(map[int]int, 1) // item is only a copy of the slice element.
        item[1] = 2 // This 'item' will be lost on the next iteration.
    }
    fmt.Printf("Version B: Value of items: %v\n", items2)
}
```

需要注意的是，应当像 A 版本那样通过索引使用切片的 map 元素。在 B 版本中获得的项只是 map 值的一个拷贝而已，所以真正的 map 元素没有得到初始化。



----

## map 的排序

map 默认是无序的，不管是按照 key 还是按照 value 默认都不排序（详见第 8.3 节）。

如果你想为 map 排序，需要将 key（或者 value）拷贝到一个切片，再对切片排序（使用 sort 包，详见第 7.6.6 节），然后可以使用切片的 for-range 方法打印出所有的 key 和 value。

```go
// the telephone alphabet:
package main
import (
    "fmt"
    "sort"
)

var (
    barVal = map[string]int{"alpha": 34, "bravo": 56, "charlie": 23,
                            "delta": 87, "echo": 56, "foxtrot": 12,
                            "golf": 34, "hotel": 16, "indio": 87,
                            "juliet": 65, "kili": 43, "lima": 98}
)

func main() {
    fmt.Println("unsorted:")
    for k, v := range barVal {
        fmt.Printf("Key: %v, Value: %v / ", k, v)
    }
    keys := make([]string, len(barVal))
    i := 0
    for k, _ := range barVal {
        keys[i] = k
        i++
    }
    sort.Strings(keys)
    fmt.Println()
    fmt.Println("sorted:")
    for _, k := range keys {
        fmt.Printf("Key: %v, Value: %v / ", k, barVal[k])
    }
}
```

但是如果你想要一个排序的列表你最好使用结构体切片，这样会更有效：

```go
type name struct {
    key string
    value int
}
```

----

## 将 map 的键值对调

这里对调是指调换 key 和 value。如果 map 的值类型可以作为 key 且所有的 value 是唯一的，那么通过下面的方法可以简单的做到键值对调。

```go
package main
import (
    "fmt"
)

var (
    barVal = map[string]int{"alpha": 34, "bravo": 56, "charlie": 23,
                            "delta": 87, "echo": 56, "foxtrot": 12,
                            "golf": 34, "hotel": 16, "indio": 87,
                            "juliet": 65, "kili": 43, "lima": 98}
)

func main() {
    invMap := make(map[int]string, len(barVal))
    for k, v := range barVal {
        invMap[v] = k
    }
    fmt.Println("inverted:")
    for k, v := range invMap {
        fmt.Printf("Key: %v, Value: %v / ", k, v)
    }
}
```

如果原始 value 值不唯一那么这么做肯定会出错；为了保证不出错，当遇到不唯一的 key 时应当立刻停止，这样可能会导致没有包含原 map 的所有键值对！一种解决方法就是仔细检查唯一性并且使用多值 map，比如使用 `map[int][]string` 类型。



----

# 包
