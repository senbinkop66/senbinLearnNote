# 介绍

Node.js是运行在服务端的JavaScript。

Node.js是一个基于Chrome JavaScript运行时建立的一个平台。

Node.js是一个事件驱动I/O服务端JavaScript环境，基于Google的V8引擎，V8引擎执行Javascript的速度非常快，性能非常好。

## Node.js 简介

Node.js 是一个开源与跨平台的 JavaScript 运行时环境。 它是一个可用于几乎任何项目的流行工具！

Node.js 在浏览器外运行 V8 JavaScript 引擎（Google Chrome 的内核）。 这使 Node.js 表现得非常出色。

Node.js 应用程序运行于单个进程中，无需为每个请求创建新的线程。 Node.js 在其标准库中提供了一组异步的 I/O 原生功能（用以防止 JavaScript 代码被阻塞），并且 Node.js 中的库通常是使用非阻塞的范式编写的（从而使阻塞行为成为例外而不是规范）。

当 Node.js 执行 I/O 操作时（例如从网络读取、访问数据库或文件系统），Node.js 会在响应返回时恢复操作，而不是阻塞线程并浪费 CPU 循环等待。

这使 Node.js 可以在一台服务器上处理数千个并发连接，而无需引入管理线程并发的负担（这可能是重大 bug 的来源）。

Node.js 具有独特的优势，因为为浏览器编写 JavaScript 的数百万前端开发者现在除了客户端代码之外还可以编写服务器端代码，而无需学习完全不同的语言。

在 Node.js 中，可以毫无问题地使用新的 ECMAScript 标准，因为不必等待所有用户更新其浏览器，你可以通过更改 Node.js 版本来决定要使用的 ECMAScript 版本，并且还可以通过运行带有标志的 Node.js 来启用特定的实验中的特性。

## Node.js 与浏览器的区别

浏览器和 Node.js 均使用 JavaScript 作为其编程语言。

构建运行于浏览器中的应用程序与构建 Node.js 应用程序完全不同。

尽管都是 JavaScript，但一些关键的差异使体验相当不同。

从广泛使用 JavaScript 的前端开发者的角度来看，Node.js 应用程序具有巨大的优势：使用单一语言轻松编程所有一切（前端和后端）。

你会拥有巨大的机会，因为全面、深入地学习一门编程语言并通过使用同一语言完成 web（无论是在客户端还是在服务器）上的所有工作是非常困难的，你会处于独特的优势地位。

不同的还有生态系统。

在浏览器中，大多数时候做的是与 DOM 或其他 Web 平台 API（例如 Cookies）进行交互。 当然，那些在 Node.js 中是不存在的。 没有浏览器提供的 document、window、以及所有其他的对象。

而且在浏览器中，不存在 Node.js 通过其模块提供的所有不错的 API，例如文件系统访问功能。

另一个很大的不同是，在 Node.js 中，可以控制运行环境。 除非构建的是任何人都可以在任何地方部署的开源应用程序，否则你能知道会在哪个版本的 Node.js 上运行该应用程序。 与浏览器环境（你无法选择访客会使用的浏览器）相比起来，这非常方便。

这意味着可以编写 Node.js 版本支持的所有现代的 ES6-7-8-9 JavaScript。

由于 JavaScript 发展的速度非常快，但是浏览器发展得慢一些，并且用户的升级速度也慢一些，因此有时在 web 上，不得不使用较旧的 JavaScript / ECMAScript 版本。

可以使用 Babel 将代码转换为与 ES5 兼容的代码，再交付给浏览器，但是在 Node.js 中，则不需要这样做。

另一个区别是 Node.js 使用 CommonJS 模块系统，而在浏览器中，则还正在实现 ES 模块标准。

在实践中，这意味着在 Node.js 中使用 require()，而在浏览器中则使用 import。



## V8 JavaScript 引擎

### **V8**

V8 是为 Google Chrome 提供支持的 JavaScript 引擎的名称。 当使用 Chrome 进行浏览时，它负责处理并执行 JavaScript。

V8 提供了执行 JavaScript 的运行时环境。 DOM 和其他 Web 平台 API 则由浏览器提供。

很酷的是，JavaScript 引擎独立于托管它的浏览器。 此关键的特性推动了 Node.js 的兴起。 V8 于 2009 年被选为为 Node.js 提供支持的引擎，并且随着 Node.js 的爆炸性发展，V8 成为了现在为大量的服务器端代码（使用 JavaScript 编写）提供支持的引擎。

Node.js 的生态系统非常庞大，得益于此，V8 还为桌面应用程序（通过 Electron 等项目）提供支持。



### **其他 JS 引擎**

其他浏览器也有自己的 JavaScript 引擎：

- Firefox 具有 [**SpiderMonkey**](https://developer.mozilla.org/en-US/docs/Mozilla/Projects/SpiderMonkey)
- Safari 具有 [**JavaScriptCore**](https://developer.apple.com/documentation/javascriptcore)（又称为 Nitro）
- Edge 最初基于 [**Chakra**](https://github.com/Microsoft/ChakraCore)，但最近使用 [Chromium 和 V8 引擎进行了重建](https://support.microsoft.com/en-us/help/4501095/download-the-new-microsoft-edge-based-on-chromium)。

还有很多其他的。

所有这些引擎都实现了 [ECMA ES-262 标准](https://www.ecma-international.org/publications/standards/Ecma-262.htm)（又称为 ECMAScript），这是 JavaScript 使用的标准。

 

### **对性能的追求**

V8 使用 C++ 编写，并且不断地被改进。 它是可移植的，且可运行于 Mac、Windows、Linux 和其他一些系统。

在此 V8 的介绍中，省略了 V8 的实现细节：可以去更具权威性的网站（例如 [V8 官方网站](https://v8.dev/)）上查看。

与其他 JavaScript 引擎一样，V8 也在不断地发展以加速 Web 和 Node.js 的生态系统。

在 web 上，性能竞赛一直持续了很多年，作为用户和开发者从这场竞争中受益匪浅，因为年复一年地获得了更快、更优化的机器。

### **编译**

JavaScript 通常被认为是一门解释型的语言，但是现代的 JavaScript 引擎不再只是解释 JavaScript，也会对其进行编译。

这从 2009 年开始就一直在发生，当时 SpiderMonkey JavaScript 编译器被添加到 Firefox 3.5 中，所有人都跟进了这个想法。

JavaScript 是由 V8 在其内部编译的，使用了**即时**（JIT）**编译**以加快执行速度。

自 2004 年 Google 地图的引入以来，JavaScript 已经从一门通常执行几十行代码的语言演变为能在浏览器中运行具有成千上万行代码的完整的应用程序。

现在，应用程序可以在浏览器中运行数小时，而不仅仅是一些表单验证规则或简单的脚本。

在这个新世界中，编译 JavaScript 非常有意义，因为尽管可能需要多花费一点时间来为 JavaScript 做准备，但是一旦完成，则它会比纯解释型的代码具有更高的性能。

----

# 安装

## Node.js 安装配置

Node.js 安装包及源码下载地址为：https://nodejs.org/en/download/。

## 查看版本

```bash
$ node -v
v16.14.2
```

## 配置sublime text运行node.js

```json
nodejs.sublime-build
{
	"cmd": ["node", "$file"],
	"selector": "source.js"
}
```



## 运行Node.js程序

### 脚本模式

以下是我们的第一个Node.js程序：

```js
console.log("Hello World");
```

保存该文件，文件名为helloworld.js，并通过node命令来执行：

```bash
node helloworld.js
```

程序执行后，正常的话，就会在终端输出Hello World。

### 交互模式

打开终端，键入node进入命令交互模式，可以输入一条代码语句后立即执行并显示结果，例如：

```bash
$ node
> console.log('Hello World!');
Hello World!
```

### linux安装Node.js

```bash
直接使用已编译好的包
Node 官网已经把 linux 下载版本更改为已编译好的版本了，我们可以直接下载解压后使用：

wget https://nodejs.org/download/release/v16.19.1/node-v16.19.1-linux-x64.tar.xz    // 下载
tar xf  node-v16.19.1-linux-x64.tar.xz       // 解压
cd node-v16.19.1-linux-x64/
// 进入解压目录
./bin/node -v                               // 执行node命令 查看版本
v16.19.1

解压文件的 bin 目录底下包含了 node、npm 等命令，我们可以使用 ln 命令来设置软连接：

ln -s /usr/local/node/bin/npm   /usr/local/bin/ 
ln -s /usr/local/node/bin/node   /usr/local/bin/
```

使用npm全局安装 forever

```
 npm i forever -g
```

创建软连接

```
ln -s /usr/local/node/lib/node_modules/forever/bin/forever   /usr/local/bin
```



```bash
下载源码
cd /usr/local/src/
wget https://nodejs.org/dist/v18.15.0/node-v18.15.0.tar.gz
解压源码
tar zxvf node-v18.15.0.tar.gz
编译安装
cd node-v18.15.0.tar.gz
./configure --prefix=/usr/local/node/18.15.0
make
make install

配置NODE_HOME，进入profile编辑环境变量
vim /etc/profile
设置 nodejs 环境变量，在 export PATH USER LOGNAME MAIL HOSTNAME HISTSIZE HISTCONTROL 一行的上面添加如下内容:
#set for nodejs
export NODE_HOME=/usr/local/node18.15.0
export PATH=$NODE_HOME/bin:$PATH
:wq保存并退出，编译/etc/profile 使配置生效

source /etc/profile
验证是否安装配置成功

node -v

```



---

# Node.js 创建第一个应用

Node.js 非常强大，只需动手写几行代码就可以构建出整个HTTP服务器。事实上，我们的Web应用以及对应的Web服务器基本上是一样的。

在我们创建Node.js第一个"Hello, World!"应用前，让我们先了解下Node.js应用是由哪几部分组成的：

1. 引入模块(required)：我们可以使用require指令来载入Node.js模块。
2. **创建服务器：**服务器可以监听客户端的请求，类似于Apache 、Nginx等HTTP服务器。
3. **接收请求与响应请求**：服务器很容易创建，客户端可以使用浏览器或终端发送HTTP请求，服务器接收请求后返回响应数据。

```js
//server.js的文件代码如下

//我们使用require指令来载入http模块，并将实例化的HTTP赋值给变量http
const http=require("http");

/*接下来我们使用http.createServer()方法创建服务器，并使用listen方法绑定8888端口。 函数通过request, response参数来接收和响应数据。*/

http.createServer(function(request,response){
	// 发送 HTTP 头部 
	// HTTP 状态值: 200 : OK
	// 内容类型: text/plain
	response.writeHead(200,{'Content-Type':'text/plain'});
	// 发送响应数据 "Hello World"
	response.end("Hello World!");
}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');
```

以上代码我们完成了一个可以工作的HTTP服务器。

**分析Node.js的HTTP服务器：**

- 第一行请求（require）Node.js自带的 http 模块，并且把它赋值给http变量。
- 接下来我们调用http模块提供的函数：createServer 。这个函数会返回 一个对象，这个对象有一个叫做listen的方法，这个方法有一个数值参数，指定这个HTTP服务器监听的端口号。

之后在执行下面的命令既可：

```bash
$ node test1.js
Server running at http://127.0.0.1:8888/
```

接下来，打开浏览器访问http://127.0.0.1:8888/，你会看到一个写着"Hello World"的网页。

----

# npm 包管理器

## **npm 包管理器简介**

**npm 简介**

npm 是 Node.js 标准的软件包管理器。

在 2017 年 1 月时，npm 仓库中就已有超过 350000 个软件包，这使其成为世界上最大的单一语言代码仓库，并且可以确定几乎有可用于一切的软件包。

它起初是作为下载和管理 Node.js 包依赖的方式，但其现在也已成为前端 JavaScript 中使用的工具。

npm 有很多功能。

[**Yarn**](https://yarnpkg.com/en/) *是 npm 的一个替代选择。*



NPM是随同NodeJS一起安装的包管理工具，能解决NodeJS代码部署上的很多问题，常见的使用场景有以下几种：

- 允许用户从NPM服务器下载别人编写的第三方包到本地使用。
- 允许用户从NPM服务器下载并安装别人编写的命令行程序到本地使用。
- 允许用户将自己编写的包或命令行程序上传到NPM服务器供别人使用。

由于新版的nodejs已经集成了npm，所以之前npm也一并安装好了。同样可以通过输入**`npm -v`**来测试是否成功安装。命令如下，出现版本提示表示安装成功:

```bash
$ npm -v
8.5.5
```

如果你安装的是旧版本的 npm，可以很容易得通过 npm 命令来升级，命令如下：

```bash
$ sudo npm install npm -g
/usr/local/bin/npm -> /usr/local/lib/node_modules/npm/bin/npm-cli.js
npm@2.14.2 /usr/local/lib/node_modules/npm
```

如果是 Window 系统使用以下命令即可：

```bash
$ npm install npm -g

removed 6 packages, changed 69 packages, and audited 202 packages in 5s

11 packages are looking for funding
  run `npm fund` for details

```

> 使用淘宝镜像的命令：
>
> ```bash
> npm install -g cnpm --registry=https://registry.npm.taobao.org
> ```

## 安装模块

npm 可以管理项目依赖的下载。

### **安装所有依赖**

如果项目具有 package.json 文件，则通过运行：

```bash
$ npm install
```

它会在 node_modules 文件夹（如果尚不存在则会创建）中安装项目所需的所有东西。

### 使用 npm 命令安装模块

npm 安装 Node.js 模块语法格式如下：

```bash
$ npm install <Module Name>
```

以下实例，我们使用 npm 命令安装常用的 Node.js web框架模块 express:

```bash
$ npm install express
```

安装好之后，express 包就放在了工程目录下的 node_modules 目录中，因此在代码中只需要通过 require('express') 的方式就好，无需指定第三方包路径。

```js
var express = require('express');
```

### 安装单个软件包

也可以通过运行以下命令安装特定的软件包：

```bash
npm install <package-name>
```

通常会在此命令中看到更多标志：

- --save 安装并添加条目到 package.json 文件的     dependencies。
- --save-dev 安装并添加条目到 package.json 文件的     devDependencies。

区别主要是，**devDependencies 通常是开发的工具**（例如测试的库），**而 dependencies 则是与生产环境中的应用程序相关**。

### 全局安装与本地安装 

npm 的包安装分为本地安装（local）、全局安装（global）两种，从敲的命令行来看，差别只是有没有-g而已，比如

```bash
npm install express          # 本地安装
npm install express -g   # 全局安装
```

如果出现以下错误：

```bash
npm err! Error: connect ECONNREFUSED 127.0.0.1:8087 
```

解决办法为：

```bash
$ npm config set proxy null
```

#### 本地安装

- 将安装包放在 ./node_modules 下（运行 npm 命令时所在的目录），如果没有 node_modules 目录，会在当前执行 npm 命令的目录下生成 node_modules 目录。
- 可以通过 require() 来引入本地安装的包。

#### 全局安装

- 将安装包放在 /usr/local 下或者你 node 的安装目录。
- 可以直接在命令行里使用。

如果你希望具备两者功能，则需要在两个地方安装它或使用 npm link。

接下来我们使用全局方式安装 express

```bash
$ cnpm install express -g
```

安装过程输出如下内容，第一行输出了模块的版本号及安装位置。

```bash
$ cnpm install express -g
Downloading express to C:\Users\1111\AppData\Roaming\npm\node_modules\express_tmp
Copying C:\Users\1111\AppData\Roaming\npm\node_modules\express_tmp\_express@4.18.1@express to C:\Users\1111\AppData\Roaming\npm\node_modules\express
Installing express's dependencies to C:\Users\1111\AppData\Roaming\npm\node_modules\express/node_modules
[1/31] array-flatten@1.1.1 installed at node_modules\_array-flatten@1.1.1@array-flatten
[2/31] content-type@~1.0.4 installed at node_modules\_content-type@1.0.4@content-type
[3/31] cookie-signature@1.0.6 installed at node_modules\_cookie-signature@1.0.6@cookie-signature

```

### 查看安装信息

你可以使用以下命令来查看所有全局安装的模块：

```bash
$ npm list -g
C:\Users\1111\AppData\Roaming\npm
├── @angular/cli@13.3.0
├── cnpm@7.1.1
├── express@4.18.1
├── gulp-cli@2.3.0
├── npm@8.8.0
└── typescript@4.6.3

```

如果要查看某个模块的版本号，可以使用命令如下：

```bash
$ npm list express
nodejs@ E:\pogject\nodejs
└── express@4.18.1

1111@DESKTOP-RE2QT69 MINGW64 /e/pogject/nodejs (master)
$ npm list express -g
C:\Users\1111\AppData\Roaming\npm
└── express@4.18.1

```

## 使用 package.json

package.json 位于模块的目录下，用于定义包的属性。接下来让我们来看下 express 包的 package.json 文件，位于 node_modules/express/package.json 内容：

```json
{
  "name": "express",
  "description": "Fast, unopinionated, minimalist web framework",
  "version": "4.18.1",
  "author": "TJ Holowaychuk <tj@vision-media.ca>",
  "contributors": [
    "Aaron Heckmann <aaron.heckmann+github@gmail.com>",
    "Ciaran Jessup <ciaranj@gmail.com>",
    "Douglas Christopher Wilson <doug@somethingdoug.com>",
    "Guillermo Rauch <rauchg@gmail.com>",
    "Jonathan Ong <me@jongleberry.com>",
    "Roman Shtylman <shtylman+expressjs@gmail.com>",
    "Young Jae Sim <hanul@hanul.me>"
  ],
    ...
 }
```

### Package.json 属性说明

- name - 包名。
- version - 包的版本号。
- description - 包的描述。
- homepage - 包的官网 url 。
- author - 包的作者姓名。
- contributors - 包的其他贡献者姓名。
- dependencies - 依赖包列表。如果依赖包没有安装，npm 会自动将依赖包安装在 node_module 目录下。
- repository - 包代码存放的地方的类型，可以是 git 或 svn，git 可在 Github 上。
- main - main 字段指定了程序的主入口文件，require('moduleName') 就会加载这个文件。这个字段的默认值是模块根目录下面的 index.js。
- keywords - 关键字

## 卸载模块

我们可以使用以下命令来卸载 Node.js 模块。

```bash
$ npm uninstall express
```

卸载后，你可以到 /node_modules/ 目录下查看包是否还存在，或者使用以下命令查看：

```bash
$ npm ls
nodejs@ E:\pogject\nodejs
├── echarts@5.3.2
├── express@4.18.1
└── lodash@4.17.21
```

## 更新模块

我们可以使用以下命令更新模块：

```bash
$ npm update express
```

通过运行以下命令，更新也变得很容易：

```bash
npm update
```

npm 会检查所有软件包是否有满足版本限制的更新版本。

也可以指定单个软件包进行更新：

```bash
npm update <package-name>
```



## 搜索模块

使用以下来搜索模块：

```bash
$ npm search express
```

## 创建模块

创建模块，package.json 文件是必不可少的。我们可以使用 NPM 生成 package.json 文件，生成的文件包含了基本的结果。

```bash
$ npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (nodejs) senbin
version: (1.0.0)
description: test
entry point: (test1.js)
test command: make test
git repository: (https://github.com/senbinkop66/nodejs.git)
keywords: kop
author: senbinkop66
license: (ISC)
About to write to E:\pogject\nodejs\package.json:

{
  "dependencies": {
    "echarts": "^5.3.2",
    "express": "^4.18.1",
    "lodash": "^4.17.21"
  },
  "name": "senbin",
  "version": "1.0.0",
  "description": "test",
  "main": "test1.js",
  "devDependencies": {},
  "scripts": {
    "test": "make test"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/senbinkop66/nodejs.git"
  },
  "keywords": [
    "kop"
  ],
  "author": "senbinkop66",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/senbinkop66/nodejs/issues"
  },
  "homepage": "https://github.com/senbinkop66/nodejs#readme"
}


Is this OK? (yes) yes

```

以上的信息，你需要根据你自己的情况输入。在最后输入 "yes" 后会生成 package.json 文件。

接下来我们可以使用以下命令在 npm 资源库中注册用户（使用邮箱注册）：

```bash
$ npm adduser
npm notice Log in on https://registry.npmjs.org/
Username: senbinkop66
Password: ....
Email: (this IS public) @qq.com
npm notice Please check your email for a one-time password (OTP)
Enter one-time password: 66666666
Logged in as senbinkop66 on https://registry.npmjs.org/.

```

接下来我们就用以下命令来发布模块：

```bash
$ npm publish
npm notice
npm notice 📦  senbin@1.0.0
npm notice === Tarball Contents ===
npm notice 168B  data/test1.txt
npm notice 34B   data/test2.txt
npm notice 23B   data/text2.txt
npm notice 578B  package.json
npm notice 664B  test1.js
npm notice 1.8kB testAsyncandAwait.js
npm notice 822B  testBuffer.js
npm notice 463B  testEventloop.js
npm notice 1.4kB testEvents.js
npm notice 666B  testExports.js
npm notice 4.8kB testFile.js
npm notice 440B  testGetArgFromCommendLine.js
npm notice 2.7kB testHttpServer.js
npm notice 89B   testNPM.js
npm notice 1.3kB testOS.js
npm notice 999B  testOutput.js
npm notice 2.5kB testPromise.js
npm notice 3.2kB testStream.js
npm notice 543B  testTypeScript.ts
npm notice === Tarball Details ===
npm notice name:          senbin
npm notice version:       1.0.0
npm notice filename:      senbin-1.0.0.tgz
npm notice package size:  8.2 kB
npm notice unpacked size: 23.2 kB
npm notice shasum:        d3025f4451235e2018852727777c0e7b0774b322
npm notice integrity:     sha512-voqXL1QkgT2wM[...]xSsqBA/JkuIog==
npm notice total files:   19
npm notice
npm notice Publishing to https://registry.npmjs.org/
+ senbin@1.0.0

```

如果你以上的步骤都操作正确，你就可以跟其他模块一样使用 npm 来安装。

使用

```bash
npm unpublish <package>@<version>
```

可以撤销发布自己发布过的某个版本代码。

## 版本号

使用NPM下载和发布代码时都会接触到版本号。NPM使用语义版本号来管理代码，这里简单介绍一下。

语义版本号分为X.Y.Z三位，分别代表主版本号、次版本号和补丁版本号。当代码变更时，版本号按以下原则更新。

- 如果只是修复bug，需要更新Z位。
- 如果是新增了功能，但是向下兼容，需要更新Y位。
- 如果有大变动，向下不兼容，需要更新X位。

版本号有了这个保证后，在申明第三方包依赖时，除了可依赖于一个固定版本号外，还可依赖于某个范围的版本号。例如"argv": "0.0.x"表示依赖于0.0.x系列的最新版argv。

NPM支持的所有版本号范围指定方式可以查看[官方文档](https://npmjs.org/doc/files/package.json.html#dependencies)。

## NPM 常用命令

除了本章介绍的部分外，NPM还提供了很多功能，package.json里也有很多其它有用的字段。

除了可以在[npmjs.org/doc/](https://npmjs.org/doc/)查看官方文档外，这里再介绍一些NPM常用命令。

NPM提供了很多命令，例如install和publish，使用npm help可查看所有命令。

- NPM提供了很多命令，例如install和publish，使用npm help可查看所有命令。
- 使用npm help <command>可查看某条命令的详细帮助，例如npm help install。
- 在package.json所在目录下使用npm install . -g可先在本地安装当前命令行程序，可用于发布前的本地测试。
- 使用npm update <package>可以把当前目录下node_modules子目录里边的对应模块更新至最新版本。
- 使用npm update <package> -g可以把全局安装的对应命令行程序更新至最新版。
- 使用npm cache clear可以清空NPM本地缓存，用于对付使用相同版本号发布新版本代码的人。
- 使用npm unpublish <package>@<version>可以撤销发布自己发布过的某个版本代码。

## **版本控制**

除了简单的下载外，npm 还可以管理版本控制，因此可以指定软件包的任何特定版本，或者要求版本高于或低于所需版本。

很多时候，一个库仅与另一个库的主版本兼容。或者，一个库的最新版本中有一个缺陷（仍未修复）引起了问题。

指定库的显式版本还有助于使每个人都使用相同的软件包版本，以便整个团队运行相同的版本，直至 package.json 文件被更新。

在所有这些情况中，版本控制都有很大的帮助，npm 遵循语义版本控制标准。

## **运行任务**

package.json 文件支持一种用于指定命令行任务（可通过使用以下方式运行）的格式：

```bash
npm run <task-name>
```

例如：

```json
{"scripts":{"start-dev":"node lib/server-development","start":"node lib/server-production"},}
```

使用此特性运行 Webpack 是很常见的：

```js
{"scripts":{"watch":"webpack --watch --progress --colors --config webpack.conf.js","dev":"webpack --progress --colors --config webpack.conf.js","prod":"NODE_ENV=production webpack -p --config webpack.conf.js",},}
```

因此可以运行如下，而不是输入那些容易忘记或输入错误的长命令：

```bash
$ npm run watch
 $ npm run dev
 $ npm run prod
```



## **npm 将软件包安装到哪里**

当使用 npm 安装软件包时，可以执行两种安装类型：

- 本地安装
- 全局安装

默认情况下，当输入 npm install 命令时，例如：

```
npm install lodash
```

软件包会被安装到当前文件树中的 node_modules 子文件夹下。

在这种情况下，npm 还会在当前文件夹中存在的 package.json 文件的 dependencies 属性中添加 lodash 条目。

使用 -g 标志可以执行全局安装：

```
npm install-g lodash
```

在这种情况下，npm 不会将软件包安装到本地文件夹下，而是使用全局的位置。

全局的位置到底在哪里？

npm root -g 命令会告知其在计算机上的确切位置。

```bash
$ npm root -g
C:\Users\1111\AppData\Roaming\npm\node_modules
```

但是，如果使用 nvm 管理 Node.js 版本，则该位置会有所不同。

例如，使用 nvm，则软件包的位置可能为 /Users/joe/.nvm/versions/node/v8.9.0/lib/node_modules。

----

# Node.js REPL(交互式解释器)

Node.js REPL(Read Eval Print Loop:交互式解释器) 表示一个电脑的环境，类似 Window 系统的终端或 Unix/Linux shell，我们可以在终端中输入命令，并接收系统的响应。

REPL 的交互式的编程环境可以实时的验证你所编写的代码，非常适合于验证 Node.js 和 JavaScript 的相关 API。

Node 自带了交互式解释器，可以执行以下任务：

- **读取** - 读取用户输入，解析输入了Javascript 数据结构并存储在内存中。
- **执行** - 执行输入的数据结构
- **打印** - 输出结果
- **循环** - 循环操作以上步骤直到用户两次按下 **ctrl-c** 按钮退出。

Node 的交互式解释器可以很好的调试 Javascript 代码。

开始学习 REPL

我们可以输入以下命令来启动 Node 的终端：

```bash
$ node
Welcome to Node.js v16.14.2.
Type ".help" for more information.
>

```

这时我们就可以在 > 后输入简单的表达式，并按下回车键来计算结果。

## REPL 命令

- **ctrl + c** - 退出当前终端。
- **ctrl + c 按下两次** - 退出 Node REPL。
- **ctrl + d** - 退出 Node REPL.
- **向上/向下 键** - 查看输入的历史命令
- **tab 键** - 列出当前命令
- **.help** - 列出使用命令
- **.break** - 退出多行表达式
- **.clear** - 退出多行表达式
- **.save \*filename\*** - 保存当前的 Node REPL 会话到指定文件
- **.load \*filename\*** - 载入当前 Node REPL 会话的文件内容。

```bash
> .help
.break    Sometimes you get stuck, this gets you out
.clear    Alias for .break
.editor   Enter editor mode
.exit     Exit the REPL
.help     Print this help message
.load     Load JS from a file into the REPL session
.save     Save all evaluated commands in this REPL session to a file

Press Ctrl+C to abort current expression, Ctrl+D to exit the REPL

```

## 停止 REPL

前面我们已经提到按下两次 **ctrl + c** 建就能退出 REPL:

---

# Node.js 回调函数

Node.js 异步编程的直接体现就是回调。

异步编程依托于回调来实现，但不能说使用了回调后程序就异步化了。

回调函数在完成任务后就会被调用，Node 使用了大量的回调函数，Node 所有 API 都支持回调函数。

例如，我们可以一边读取文件，一边执行其他命令，在文件读取完成后，我们将文件内容作为回调函数的参数返回。这样在执行代码时就没有阻塞或等待文件 I/O 操作。这就大大提高了 Node.js 的性能，可以处理大量的并发请求。

回调函数一般作为函数的最后一个参数出现：

```js
function foo1(name, age, callback) { }
function foo2(value, callback1, callback2) { }
```

## 阻塞代码实例

创建一个文件input.txt ，内容如下：

```
Node.js 异步编程的直接体现就是回调
```

创建 main.js 文件, 代码如下：

```js
const fs=require("fs");

var data=fs.readFileSync("./data/input.txt");

console.log(data.toString());
console.log("程序执行结束!");
```

```
$ node main.js
Node.js 异步编程的直接体现就是回调
程序执行结束!
```

## 非阻塞代码实例

创建 main.js 文件, 代码如下：

```js
const fs=require("fs");

fs.readFile("./data/input.txt",function(err,data){
	if (err) {
		console.error(err);
	}
	console.log(data.toString());
});

console.log("程序执行结束!");
```

```bash
$ node main.js
程序执行结束!
Node.js 异步编程的直接体现就是回调
```

以上两个实例我们了解了阻塞与非阻塞调用的不同。第一个实例在文件读取完后才执行完程序。 第二个实例我们呢不需要等待文件读取完，这样就可以在读取文件时同时执行接下来的代码，大大提高了程序的性能。

因此，阻塞按是按顺序执行的，而非阻塞是不需要按顺序的，所以如果需要处理回调函数的参数，我们就需要写在回调函数内。

----

# Node.js 事件循环

Node.js 是单进程单线程应用程序，但是通过事件和回调支持并发，所以性能非常高。

Node.js 的每一个 API 都是异步的，并作为一个独立线程运行，使用异步函数调用，并处理并发。

Node.js 基本上所有的事件机制都是用设计模式中**观察者模式**实现。

Node.js 单线程类似进入一个while(true)的事件循环，直到没有事件观察者退出，每个异步事件都生成一个事件观察者，如果有事件发生就调用该回调函数.

## 事件驱动程序

Node.js 使用事件驱动模型，当web server接收到请求，就把它关闭然后进行处理，然后去服务下一个web请求。

当这个请求完成，它被放回处理队列，当到达队列开头，这个结果被返回给用户。

这个模型非常高效可扩展性非常强，因为webserver一直接受请求而不等待任何读写操作。（这也被称之为非阻塞式IO或者事件驱动IO）

在事件驱动模型中，会生成一个主循环来监听事件，当检测到事件时触发回调函数。



![img](E:\pogject\学习笔记\image\js\Node.js 事件循环)

整个事件驱动的流程就是这么实现的，非常简洁。有点类似于观察者模式，事件相当于一个主题(Subject)，而所有注册到这个事件上的处理函数相当于观察者(Observer)。

Node.js 有多个内置的事件，我们可以通过引入 events 模块，并通过实例化 EventEmitter 类来绑定和监听事件，如下实例：

Node.js 有多个内置的事件，我们可以通过引入 events 模块，并通过实例化 EventEmitter 类来绑定和监听事件，如下实例：

```js
// 引入 events 模块
var events = require('events');
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();
```

以下程序绑定事件处理程序：

```js
// 绑定事件及事件的处理程序
eventEmitter.on('eventName', eventHandler);
```

我们可以通过程序触发事件：

```js
// 触发事件
eventEmitter.emit('eventName');
```

### 实例

```js
// 引入 events 模块
const events=require("events");

// 创建 eventEmitter 对象
var eventEmitter=new events.EventEmitter();

// 创建事件处理程序
var connectHandler=function(){
	console.log("连接成功！");
	// 触发 data_received 事件 
	eventEmitter.emit("data_received");
}

// 绑定 connection 事件处理程序
eventEmitter.on("connection",connectHandler);

// 使用匿名函数绑定 data_received 事件
eventEmitter.on("data_received",function(){
	console.log("数据接收成功！");
});

// 触发 connection 事件 
eventEmitter.emit('connection');

console.log("程序执行完毕。");
```

```bash
$ node main.js
连接成功！
数据接收成功！
程序执行完毕。
```



## Node 应用程序是如何工作的？

在 Node 应用程序中，执行异步操作的函数将回调函数作为最后一个参数， 回调函数接收错误对象作为第一个参数。

接下来让我们来重新看下前面的实例，创建一个 input.txt ,文件内容如下：

```
Node.js 异步编程的直接体现就是回调
```

创建 main.js 文件，代码如下：

```js
const fs=require("fs");

fs.readFile("./data/input.txt",function(err,data){
	if (err) {
		console.error(err.stack);
		return;
	}
	console.log(data.toString());
});

console.log("程序执行结束!");
```

以上程序中 fs.readFile() 是异步函数用于读取文件。 如果在读取文件过程中发生错误，错误 err 对象就会输出错误信息。

如果没发生错误，readFile 跳过 err 对象的输出，文件内容就通过回调函数输出。

执行以上代码，执行结果如下：

```bash
$ node main.js
程序执行结束!
Node.js 异步编程的直接体现就是回调

```

接下来我们更改为 input2.txt 文件，执行结果如下所示：

```bash
$ node main.js
程序执行结束!
Error: ENOENT: no such file or directory, open 'E:\pogject\nodejs\data\input2.txt'
```

---

# Node.js EventEmitter

Node.js 所有的异步 I/O 操作在完成时都会发送一个事件到事件队列。

Node.js 里面的许多对象都会分发事件：一个net.Server对象会在每次有新连接时分发一个事件， 一个fs.readStream对象会在文件被打开的时候发出一个事件。 所有这些产生事件的对象都是 events.EventEmitter 的实例。 

## EventEmitter 类

events 模块只提供了一个对象： events.EventEmitter。EventEmitter 的核心就是**事件触发**与**事件监听器**功能的封装。

你可以通过require("events");来访问该模块。

```js
// 引入 events 模块
var events = require('events');
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();
```

EventEmitter 对象如果在实例化时发生错误，会触发 error 事件。

事件监听器返回及使用以下事件：

- 当监听器被添加时返回 `newListener`。
- 当监听器被移除时返回 `removeListener`。

下面我们用一个简单的例子说明 EventEmitter 的用法：

```js
// 引入 events 模块
const events=require("events");

// 创建 eventEmitter 对象
var eventEmitter=new events.EventEmitter();


// 绑定事件处理程序
eventEmitter.on("some_event",function(){
	console.log("some_event 事件触发");
});

setTimeout(function(){
	eventEmitter.emit("some_event");
},1000);

console.log("程序运行结束！");
```

执行结果如下：

运行这段代码，1 秒后控制台输出了 'some_event 事件触发'。其原理是 event 对象注册了事件 some_event 的一个监听器，然后我们通过 setTimeout 在 1000 毫秒以后向 event 对象发送事件 some_event，此时会调用some_event 的监听器。

```bash
$ node main.js
程序运行结束！
some_event 事件触发
```

EventEmitter 的每个事件由一个事件名和若干个参数组成，事件名是一个字符串，通常表达一定的语义。对于每个事件，EventEmitter 支持 若干个事件监听器。

当事件触发时，注册到这个事件的事件监听器被依次调用，事件参数作为回调函数参数传递。

让我们以下面的例子解释这个过程：

```js
// 引入 events 模块
const events=require("events");

// 创建 eventEmitter 对象
var eventEmitter=new events.EventEmitter();


// 绑定事件处理程序
eventEmitter.on("some_event",function(arg1,arg2){
	console.log("listener1",arg1,arg2);
});
eventEmitter.on("some_event",function(arg1,arg2){
	console.log("listener2",arg1,arg2);
});

eventEmitter.emit("some_event","参数1","参数2");

```

执行以上代码，运行的结果如下：

```bash
$ node main.js
listener1 参数1 参数2
listener2 参数1 参数2

```

以上例子中，emitter 为事件 someEvent 注册了两个事件监听器，然后触发了 someEvent 事件。

运行结果中可以看到两个事件监听器回调函数被先后调用。 这就是EventEmitter最简单的用法。

EventEmitter 提供了多个属性，如 on 和 emit。on 函数用于绑定事件函数，emit 属性用于触发一个事件。接下来我们来具体看下 EventEmitter 的属性介绍。

## 常用的方法

### addListener(event, listener)

为指定事件添加一个监听器到监听器数组的尾部。`emitter.on()` 的别名。

### on(event, listener)

为指定事件注册一个监听器，接受一个字符串 event 和一个回调函数。

### emit(event, [arg1], [arg2], [...])

触发事件。 按照事件被注册的顺序同步地调用每个事件监听器。如果事件有注册监听返回 true，否则返回 false。

### `emitter.eventNames()`

返回字符串（表示在当前 `EventEmitter` 对象上注册的事件）数组

### `emitter.getMaxListeners()`

获取可以添加到 `EventEmitter` 对象的监听器的最大数量（默认为 10，但可以使用 `setMaxListeners()` 进行增加或减少）。

### `emitter.setMaxListeners()`

默认情况下， EventEmitters 如果你添加的监听器超过 10 个就会输出警告信息。 setMaxListeners 函数用于改变监听器的默认限制的数量。。

```js
door.setMaxListeners(50)
```

### `emitter.listenerCount()`

获取作为参数传入的事件监听器的计数：

```js
door.listenerCount('open')

events.EventEmitter.listenerCount(emitter, eventName) //已废弃，不推荐
events.emitter.listenerCount(eventName) //推荐
```

### `emitter.listeners(event)`

返回指定事件的监听器数组。获取作为参数传入的事件监听器的数组：

```js
door.listeners('open')
```

### `emitter.off()`

`emitter.removeListener()` 的别名，新增于 Node.js 10。

### `emitter.removeListener()`

移除特定的监听器。 可以通过将回调函数保存到变量中（当添加时），以便以后可以引用它：

```js
const doSomething = () => {}
door.on('open', doSomething)
door.removeListener('open', doSomething)
```

### `emitter.removeAllListeners()`

移除指定事件的某个监听器，监听器必须是该事件已经注册过的监听器。

它接受两个参数，第一个是事件名称，第二个是回调函数名称

```js
door.removeAllListeners('open')
```

### `emitter.once()`

为指定事件注册一个单次监听器，即 监听器最多只会触发一次，触发后立刻解除该监听器。 该回调只会被调用一次，不会再被调用。

```js
const EventEmitter = require('events')
const ee = new EventEmitter()
ee.once('my-event', () => {  
    //只调用一次回调函数。
})
```

### `emitter.prependListener()`

当使用 `on` 或 `addListener` 添加监听器时，监听器会被添加到监听器队列中的最后一个，并且最后一个被调用。 使用 `prependListener` 则可以在其他监听器之前添加并调用。

### `emitter.prependOnceListener()`

当使用 `once` 添加监听器时，监听器会被添加到监听器队列中的最后一个，并且最后一个被调用。 使用 `prependOnceListener` 则可以在其他监听器之前添加并调用。

---

```js
//以下实例通过 connection（连接）事件演示了 EventEmitter 类的应用。

// 引入 events 模块
const events=require("events");

// 创建 eventEmitter 对象
var eventEmitter=new events.EventEmitter();

// 监听器 #1
var listener1=function (){
	console.log("监听器 listener1 执行");
}
// 监听器 #2
var listener2=function (){
	console.log("监听器 listener2 执行");
}

// 绑定 connection 事件，处理函数为 listener1 
eventEmitter.on("connection",listener1);
// 绑定 connection 事件，处理函数为 listener2 
eventEmitter.on("connection",listener2);

var eventListeners=eventEmitter.listenerCount("connection");
console.log(eventListeners + " 个监听器监听连接事件。");

// 处理 connection 事件 
eventEmitter.emit('connection');

// 移除监绑定的 listener1 函数
eventEmitter.removeListener("connection",listener1);

console.log("listener1 不再受监听。");

// 触发连接事件
eventEmitter.emit('connection');

eventListeners = eventEmitter.listenerCount('connection');
console.log(eventListeners + " 个监听器监听连接事件。");

console.log("程序执行完毕。");
```

```bash
$ node main.js
2 个监听器监听连接事件。
监听器 listener1 执行
监听器 listener2 执行
listener1 不再受监听。
监听器 listener2 执行
1 个监听器监听连接事件。
程序执行完毕。

```

---

## error 事件

EventEmitter 定义了一个特殊的事件 error，它包含了错误的语义，我们在遇到 异常的时候通常会触发 error 事件。

当 error 被触发时，EventEmitter 规定如果没有响 应的监听器，Node.js 会把它当作异常，退出程序并输出错误信息。

我们一般要为会触发 error 事件的对象设置监听器，避免遇到错误后整个程序崩溃。例如：

```js
// 引入 events 模块
const events=require("events");

// 创建 eventEmitter 对象
var eventEmitter=new events.EventEmitter();

eventEmitter.emit("error");
```

运行时会显示以下错误：

```bash
$ node main.js
node:events:517
    throw err; // Unhandled 'error' event
    ^

Error [ERR_UNHANDLED_ERROR]: Unhandled error. (undefined)
?[90m    at new NodeError (node:internal/errors:371:5)?[39m
?[90m    at EventEmitter.emit (node:events:515:17)?[39m
    at Object.<anonymous> (E:\pogject\nodejs\main.js:7:14)
?[90m    at Module._compile (node:internal/modules/cjs/loader:1103:14)?[39m
?[90m    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1157:10)?[39m
?[90m    at Module.load (node:internal/modules/cjs/loader:981:32)?[39m
?[90m    at Function.Module._load (node:internal/modules/cjs/loader:822:12)?[39m
?[90m    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12)?[39m
?[90m    at node:internal/main/run_main_module:17:47?[39m {
  code: ?[32m'ERR_UNHANDLED_ERROR'?[39m,
  context: ?[90mundefined?[39m
}

```



## 继承 EventEmitter

大多数时候我们不会直接使用 EventEmitter，而是在对象中继承它。包括 fs、net、 http 在内的，**只要是支持事件响应的核心模块都是 EventEmitter 的子类。**

为什么要这样做呢？原因有两点：

- 首先，具有某个实体功能的对象实现事件符合语义， 事件的监听和发生应该是一个对象的方法。
- 其次 JavaScript 的对象机制是基于原型的，支持 部分多重继承，继承 EventEmitter 不会打乱对象原有的继承关系。

----

# Node.js Buffer(缓冲区)

JavaScript 语言自身只有字符串数据类型，没有二进制数据类型。

但在处理像TCP流或文件流时，必须使用到二进制数据。因此在 Node.js中，定义了一个 Buffer 类，该类用来创建一个专门存放二进制数据的缓存区。

在 Node.js 中，Buffer 类是随 Node 内核一起发布的核心库。Buffer 库为 Node.js 带来了一种存储原始数据的方法，可以让 Node.js 处理二进制数据，每当需要在 Node.js 中处理I/O操作中移动的数据时，就有可能使用 Buffer 库。原始数据存储在 Buffer 类的实例中。一个 Buffer 类似于一个整数数组，但它对应于 V8 堆内存之外的一块原始内存。

>  在v6.0之前创建Buffer对象直接使用new Buffer()构造函数来创建对象实例，但是Buffer对内存的权限操作相比很大，可以直接捕获一些敏感信息，所以在v6.0以后，官方文档里面建议使用 Buffer.from() 接口去创建Buffer对象。

## Buffer 与字符编码

Buffer 实例一般用于表示编码字符的序列，比如 UTF-8 、 UCS2 、 Base64 、或十六进制编码的数据。 通过使用显式的字符编码，就可以在 Buffer 实例与普通的 JavaScript 字符串之间进行相互转换。

```js
const buf=Buffer.from("senbinkop66","ascii");

console.log(buf.toString("hex"));  //73656e62696e6b6f703636
console.log(buf.toString("base64"));  //c2VuYmlua29wNjY=
```

Node.js 目前支持的字符编码包括：

- ascii - 仅支持 7 位 ASCII 数据。如果设置去掉高位的话，这种编码是非常快的。
- utf8 - 多字节编码的 Unicode 字符。许多网页和其他文档格式都使用 UTF-8 。
- utf16le - 2 或 4 个字节，小字节序编码的 Unicode 字符。支持代理对（U+10000 至 U+10FFFF）。
- ucs2 - utf16le 的别名。
- base64 - Base64 编码。
- latin1 - 一种把 Buffer 编码成一字节编码的字符串的方式。
- binary - latin1 的别名。
- hex - 将每个字节编码为两个十六进制字符。

## 创建 Buffer 类

Buffer 提供了以下 API 来创建 Buffer 类：

- Buffer.alloc(size[, fill[, encoding]])： 返回一个指定大小的 Buffer 实例，如果没有设置 fill，则默认填满 0
- Buffer.allocUnsafe(size)： 返回一个指定大小的 Buffer 实例，但是它不会被初始化，所以它可能包含敏感的数据
- Buffer.allocUnsafeSlow(size)
- Buffer.from(array)： 返回一个被 array 的值初始化的新的 Buffer 实例（传入的 array 的元素只能是数字，不然就会自动被 0 覆盖）
- Buffer.from(arrayBuffer[, byteOffset[, length]])： 返回一个新建的与给定的 ArrayBuffer 共享同一内存的 Buffer。
- Buffer.from(buffer)： 复制传入的 Buffer 实例的数据，并返回一个新的 Buffer 实例
- Buffer.from(string[, encoding])： 返回一个被 string 的值初始化的新的 Buffer 实例

```js
// 创建一个长度为 10、且用 0 填充的 Buffer。
const buf1 = Buffer.alloc(10);  

// 创建一个长度为 10、且用 0x1 填充的 Buffer。 
const buf2 = Buffer.alloc(10, 1);

// 创建一个长度为 10、且未初始化的 Buffer。
// 这个方法比调用 Buffer.alloc() 更快，
// 但返回的 Buffer 实例可能包含旧数据，
// 因此需要使用 fill() 或 write() 重写。
const buf3 = Buffer.allocUnsafe(10);

// 创建一个包含 [0x1, 0x2, 0x3] 的 Buffer。
const buf4 = Buffer.from([1, 2, 3]);

// 创建一个包含 UTF-8 字节 [0x74, 0xc3, 0xa9, 0x73, 0x74] 的 Buffer。
const buf5 = Buffer.from('tést');

// 创建一个包含 Latin-1 字节 [0x74, 0xe9, 0x73, 0x74] 的 Buffer。
const buf6 = Buffer.from('tést', 'latin1');
```

## 写入缓冲区

语法

写入 Node 缓冲区的语法如下所示：

```
buf.write(string[, offset[, length]][, encoding])
```

参数

参数描述如下：

- string - 写入缓冲区的字符串。
- offset - 缓冲区开始写入的索引值，默认为 0 。
- length - 写入的字节数，默认为 buffer.length
- encoding - 使用的编码。默认为 'utf8' 。

根据 encoding 的字符编码写入 string 到 buf 中的 offset 位置。 length 参数是写入的字节数。 如果 buf 没有足够的空间保存整个字符串，则只会写入 string 的一部分。 

返回值

返回实际写入的大小。如果 buffer 空间不足， 则只会写入部分字符串。

实例

```js
const buf = Buffer.alloc(256);

let len=buf.write("senbinkop66")

console.log("写入字节数："+len);  //写入字节数：11
```

## 从缓冲区读取数据

语法

读取 Node 缓冲区数据的语法如下所示：

```
buf.toString([encoding[, start[, end]]])
```

参数

参数描述如下：

- encoding - 使用的编码。默认为 'utf8' 。
- start - 指定开始读取的索引位置，默认为 0。
- end - 结束位置，默认为缓冲区的末尾。

返回值

解码缓冲区数据并使用指定的编码返回字符串。

实例

```js
buf = Buffer.alloc(26);
for (var i = 0 ; i < 26 ; i++) {
  buf[i] = i + 97;
}

console.log( buf.toString('ascii'));       // 输出: abcdefghijklmnopqrstuvwxyz
console.log( buf.toString('ascii',0,5));   //使用 'ascii' 编码, 并输出: abcde
console.log( buf.toString('utf8',0,5));    // 使用 'utf8' 编码, 并输出: abcde
console.log( buf.toString(undefined,0,5)); // 使用默认的 'utf8' 编码, 并输出: abcde
console.log(buf.toString("hex",0,5));  	 	//使用 'hex' 编码, 并输出:  6162636465
```

## 将 Buffer 转换为 JSON 对象

语法

将 Node Buffer 转换为 JSON 对象的函数语法格式如下：

```
buf.toJSON()
```

当字符串化一个 Buffer 实例时，[JSON.stringify()](https://www.runoob.com/js/javascript-json-stringify.html) 会隐式地调用该 toJSON()。

返回值

返回 JSON 对象。

实例

```js
const buf = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5]);

let json=JSON.stringify(buf);
console.log(json);  //{"type":"Buffer","data":[1,2,3,4,5]}

const copy=JSON.parse(json,(key,value)=>{
	return value && value.type==="Buffer" ? Buffer.from(value.data) : value;
});

console.log(copy);  //<Buffer 01 02 03 04 05>
```

## 缓冲区合并

语法

Node 缓冲区合并的语法如下所示：

```
Buffer.concat(list[, totalLength])
```

参数

参数描述如下：

- list - 用于合并的 Buffer 对象数组列表。
- totalLength - 指定合并后Buffer对象的总长度。

返回值

返回一个多个成员合并的新 Buffer 对象。

实例

```js
const buf1 = Buffer.from("senbin");
const buf2 = Buffer.from("kop66");

const buf3 = Buffer.concat([buf1,buf2]);

console.log(buf3.toString());  //senbinkop66

```

## 缓冲区比较

语法

Node Buffer 比较的函数语法如下所示, 该方法在 Node.js v0.12.2 版本引入：

```
buf.compare(otherBuffer);
```

参数

参数描述如下：

- otherBuffer - 与 buf 对象比较的另外一个 Buffer 对象。

返回值

返回一个数字，表示 buf 在 otherBuffer 之前，之后或相同。

实例

```js
const buf1 = Buffer.from("senbin");
const buf2 = Buffer.from("senbinkop66");

let result = buf1.compare(buf2);

if (result<0) {
	console.log(buf1+" 在 "+buf2+" 之前");
}else if (result===0){
	console.log(buf1+" 与 "+buf2+" 相同");
}else{
	console.log(buf1+" 在 "+buf2+" 之后");
}

//senbin 在 senbinkop66 之前
```

## 拷贝缓冲区

语法

Node 缓冲区拷贝语法如下所示：

```
buf.copy(targetBuffer[, targetStart[, sourceStart[, sourceEnd]]])
```

参数

参数描述如下：

- targetBuffer - 要拷贝的 Buffer 对象。
- targetStart - 数字, 可选, 默认: 0
- sourceStart - 数字, 可选, 默认: 0
- sourceEnd - 数字, 可选, 默认: buffer.length

返回值

没有返回值。

实例

```js
const buf1 = Buffer.from("senbin");
const buf2 = Buffer.from("kop66");

//将 buf2 插入到 buf1 指定位置上
buf2.copy(buf1,3);

console.log(buf1.toString());  //senkop
```

## 缓冲区裁剪

Node 缓冲区裁剪语法如下所示：

```
buf.slice([start[, end]])
```

参数

参数描述如下：

- start - 数字, 可选, 默认: 0
- end - 数字, 可选, 默认: buffer.length

返回值

返回一个新的缓冲区，它和旧缓冲区指向同一块内存，但是从索引 start 到 end 的位置剪切。

实例

```js
const buf1 = Buffer.from("senbinkop66");

const buf2 = buf1.slice(0,6);

console.log(buf2.toString());  //senbin
```

## 缓冲区长度

语法

Node 缓冲区长度计算语法如下所示：

```
buf.length;
```

返回值

返回 Buffer 对象所占据的内存长度。

实例

```js
const buf1 = Buffer.from("senbinkop66");

console.log(buf1.length);  //11
```

更多方法参考 https://nodejs.org/dist/latest-v16.x/docs/api/buffer.html

----

# Node.js Stream(流)

Stream 是 Node.js 中非常重要的一个模块，应用广泛。它们是一种以高效的方式处理读/写文件、网络通信、或任何类型的端到端的信息交换。

Stream 是一个抽象接口，Node 中有很多对象实现了这个接口。例如，对http 服务器发起请求的request 对象就是一个 Stream，还有stdout（标准输出）。

该抽象接口是可读、可写或是既可读又可写的，通过这些接口，我们可以和磁盘文件、套接字、HTTP请求来交互，实现数据从一个地方流动到另一个地方的功能。

Node.js，Stream 有四种流类型：

- `Readable`: 可以通过管道读取、但不能通过管道写入的流（可以接收数据，但不能向其发送数据）。 当推送数据到可读流中时，会对其进行缓冲，直到使用者开始读取数据为止。
- `Writable`: 可以通过管道写入、但不能通过管道读取的流（可以发送数据，但不能从中接收数据）。
- `Duplex`: 可以通过管道写入和读取的流，基本上相对于是可读流和可写流的组合。
- `Transform`: 类似于双工流、但其输出是其输入的转换的转换流。

所有的 Stream 对象都是 EventEmitter 的实例。常用的事件有：

- **data** - 当有数据可读时触发。
- **end** - 没有更多的数据可读时触发。
- **error** - 在接收和写入过程中发生错误时触发。
- **finish** - 所有数据已被写入到底层系统时触发。

## 为什么是流

相对于使用其他的数据处理方法，流基本上提供了两个主要优点：

- **内存效率**: 无需加载大量的数据到内存中即可进行处理。
- **时间效率**: 当获得数据之后即可立即开始处理数据，这样所需的时间更少，而不必等到整个数据有效负载可用才开始。

## 从流中读取数据

```js
const fs=require("fs");

var data="";

//创建可读流
var readerStream=fs.createReadStream("./data/input.txt");

// 设置编码为 utf8
readerStream.setEncoding("UTF8");

// 处理流事件 --> data, end, and error
readerStream.on("data",function(chunk){
	data+=chunk;
});

readerStream.on("end",function(){
	console.log(data);
});

readerStream.on("error",function(err){
	console.log(err.stack);
});

console.log("程序执行结束！");
```

```bash
$ node main.js
程序执行结束！
senbinkop66
```

## 写入流

```js
const fs=require("fs");

var data="测试写入流666";

// 创建一个可以写入的流，写入到文件 output.txt 中
var writeStream=fs.createWriteStream("./data/ouput.txt");

// 使用 utf8 编码写入数据
writeStream.write(data,"UTF8");

// 标记文件末尾
writeStream.end();

// 处理流事件 --> data, end, and error
writeStream.on("finish",function(){
	console.log("写入完成");
});

writeStream.on("error",function(err){
	console.log(err.stack);
});

console.log("程序执行结束！");
```

```bash
$ cat ./data/ouput.txt
测试写入流666
```

## 管道流

管道提供了一个输出流到输入流的机制。通常我们用于从一个流中获取数据并将数据传递到另外一个流中。

以下实例我们通过读取一个文件内容并将内容写入到另外一个文件中。

```js
const fs=require("fs");

//创建可读流
var readerStream=fs.createReadStream("./data/input.txt");

// 创建一个可以写入的流
var writeStream=fs.createWriteStream("./data/ouput.txt");

// 管道读写操作
// 读取 input.txt 文件内容，并将内容写入到 output.txt 文件中
readerStream.pipe(writeStream);

console.log("程序执行结束！");
```

```bash
$ cat ./data/ouput.txt
senbinkop66
管道流操作实例
```

## 链式流

链式是通过连接输出流到另外一个流并创建多个对个流操作链的机制。**链式流一般用于管道操作**。

接下来我们就是用管道和链式来压缩和解压文件。

创建 compress.js 文件, 代码如下：

```js
const fs=require("fs");
const zlib=require("zlib");

// 压缩 input.txt 文件为 input.txt.gz
fs.createReadStream("./data/input.txt")
	.pipe(zlib.createGzip())
	.pipe(fs.createWriteStream("./data/input.txt.gz"));

console.log("文件压缩完成！");
```

```bash
$ ls -l data
total 5
-rw-r--r-- 1 1111 197121 34 May  2 22:19 input.txt
-rw-r--r-- 1 1111 197121 57 May  2 22:24 input.txt.gz
-rw-r--r-- 1 1111 197121 34 May  2 22:20 ouput.txt
-rw-r--r-- 1 1111 197121 34 Oct  3  2021 test2.txt
-rw-r--r-- 1 1111 197121 23 Oct  3  2021 text2.txt

```

执行完以上操作后，我们可以看到当前目录下生成了 input.txt 的压缩文件 input.txt.gz。

接下来，让我们来解压该文件，创建 decompress.js 文件，代码如下：

```js
const fs=require("fs");
const zlib=require("zlib");

// 解压 input.txt.gz 文件为 input.txt
fs.createReadStream("./data/input.txt.gz")
	.pipe(zlib.createGunzip())
	.pipe(fs.createWriteStream("./data/input2.txt"));

console.log("文件解压完成！");
```

```bash
$ cat data/input2.txt
senbinkop66
管道流操作实例
```

----

# Node.js 模块系统

为了让Node.js的文件可以相互调用，Node.js提供了一个简单的模块系统。

模块是Node.js 应用程序的基本组成部分，文件和模块是一一对应的。换言之，一个 Node.js 文件就是一个模块，这个文件可能是[JavaScript](https://www.w3cschool.cn/javascript/js-tutorial.html) 代码、[JSON](https://www.w3cschool.cn/json/json-tutorial.html) 或者编译过的C/C++ 扩展。

## 创建模块

在 Node.js 中，创建一个模块非常简单，如下我们创建一个 'main.js' 文件，代码如下:

```js
var hello = require('./hello');
hello.world();
```

以上实例中，代码 require('./hello') 引入了当前目录下的hello.js文件（./ 为当前目录，node.js默认后缀为js）。

Node.js 提供了exports 和 require 两个对象，其中 exports 是模块公开的接口，require 用于从外部获取一个模块的接口，即所获取模块的 exports 对象。

接下来我们就来创建hello.js文件，代码如下：

```js
exports.world = function() {
  console.log('Hello World');
}
```

在以上示例中，hello.js 通过 exports 对象把 world 作为模块的访 问接口，在 main.js 中通过 require('./hello') 加载这个模块，然后就可以直接访 问hello.js 中 exports 对象的成员函数了。

有时候我们只是想把一个对象封装到模块中，格式如下：

```js
module.exports = function() {
  // ...
}
```

例如:

```js
//hello.js 
function Hello(){
	var name;
	this.setName=function(_name){
		name=_name;
	};
	this.sayHello=function(){
		console.log("Hello "+name);
	};
}

module.exports=Hello;
```

这样就可以直接获得这个对象了：

```js
//main.js 
const Hello=require("./hello");

var hello=new Hello();

hello.setName("senbin");

hello.sayHello();
```

模块接口的唯一变化是使用 module.exports = Hello 代替了exports.world = function(){}。 在外部引用该模块时，其接口对象就是要输出的 Hello 对象本身，而不是原先的 exports。

## 服务端的模块放在哪里

也许你已经注意到，我们已经在代码中使用了模块了。像这样：

```
var http = require("http");

...

http.createServer(...);
```

Node.js中自带了一个叫做"http"的模块，我们在我们的代码中请求它并把返回值赋给一个本地变量。

这把我们的本地变量变成了一个拥有所有 http 模块所提供的公共方法的对象。

Node.js 的 require方法中的文件查找策略如下：

由于Node.js中存在4类模块（原生模块和3种文件模块），尽管require方法极其简单，但是内部的加载却是十分复杂的，其加载优先级也各自不同。如下图所示：

![nodejs-require](E:\pogject\学习笔记\image\js\require方法中的文件查找策略)

### 从文件模块缓存中加载

尽管原生模块与文件模块的优先级不同，但是都不会优先于从文件模块的缓存中加载已经存在的模块。

### 从原生模块加载

**原生模块的优先级仅次于文件模块缓存的优先级**。require 方法在解析文件名之后，优先检查模块是否在原生模块列表中。以 http 模块为例，尽管在目录下存在一个http/http.js/http.node/http.json文件，require("http") 都不会从这些文件中加载，而是从原生模块中加载。

原生模块也有一个缓存区，同样也是优先从缓存区加载。如果缓存区没有被加载过，则调用原生模块的加载方式进行加载和执行。

### 从文件加载

当文件模块缓存中不存在，而且不是原生模块的时候，Node.js会解析require方法传入的参数，并从文件系统中加载实际的文件，加载过程中的包装和编译细节在前一节中已经介绍过，这里我们将详细描述查找文件模块的过程，其中，也有一些细节值得知晓。

require方法接受以下几种参数的传递：

- http、fs、path等，原生模块。
- ./mod或../mod，相对路径的文件模块。
- /pathtomodule/mod，绝对路径的文件模块。
- mod，非原生模块的文件模块。

在路径 Y 下执行 require(X) 语句执行顺序：

```tex
1. 如果 X 是内置模块
   a. 返回内置模块
   b. 停止执行
2. 如果 X 以 '/' 开头
   a. 设置 Y 为文件根路径
3. 如果 X 以 './' 或 '/' or '../' 开头
   a. LOAD_AS_FILE(Y + X)
   b. LOAD_AS_DIRECTORY(Y + X)
4. LOAD_NODE_MODULES(X, dirname(Y))
5. 抛出异常 "not found"

LOAD_AS_FILE(X)
1. 如果 X 是一个文件, 将 X 作为 JavaScript 文本载入并停止执行。
2. 如果 X.js 是一个文件, 将 X.js 作为 JavaScript 文本载入并停止执行。
3. 如果 X.json 是一个文件, 解析 X.json 为 JavaScript 对象并停止执行。
4. 如果 X.node 是一个文件, 将 X.node 作为二进制插件载入并停止执行。

LOAD_INDEX(X)
1. 如果 X/index.js 是一个文件,  将 X/index.js 作为 JavaScript 文本载入并停止执行。
2. 如果 X/index.json 是一个文件, 解析 X/index.json 为 JavaScript 对象并停止执行。
3. 如果 X/index.node 是一个文件,  将 X/index.node 作为二进制插件载入并停止执行。

LOAD_AS_DIRECTORY(X)
1. 如果 X/package.json 是一个文件,
   a. 解析 X/package.json, 并查找 "main" 字段。
   b. let M = X + (json main 字段)
   c. LOAD_AS_FILE(M)
   d. LOAD_INDEX(M)
2. LOAD_INDEX(X)

LOAD_NODE_MODULES(X, START)
1. let DIRS=NODE_MODULES_PATHS(START)
2. for each DIR in DIRS:
   a. LOAD_AS_FILE(DIR/X)
   b. LOAD_AS_DIRECTORY(DIR/X)

NODE_MODULES_PATHS(START)
1. let PARTS = path split(START)
2. let I = count of PARTS - 1
3. let DIRS = []
4. while I >= 0,
   a. if PARTS[I] = "node_modules" CONTINUE
   b. DIR = path join(PARTS[0 .. I] + "node_modules")
   c. DIRS = DIRS + DIR
   d. let I = I - 1
5. return DIRS
```

> exports 和 module.exports 的使用如果要对外暴露属性或方法，就用 exports 就行，要暴露对象(类似class，包含了很多属性和方法)，就用 module.exports。

----

# Node.js 函数

在JavaScript中，一个函数可以作为另一个函数接收一个参数。我们可以先定义一个函数，然后传递，也可以在传递参数的地方直接定义函数。

Node.js中函数的使用与Javascript类似，举例来说，你可以这样做：

```js
function say(word) {
  console.log(word);
}

function execute(someFunction, value) {
  someFunction(value);
}

execute(say, "Hello");
```

以上代码中，我们把 say 函数作为execute函数的第一个变量进行了传递。这里返回的不是 say 的返回值，而是 say 本身！

这样一来， say 就变成了execute 中的本地变量 someFunction ，execute可以通过调用 someFunction() （带括号的形式）来使用 say 函数。

当然，因为 say 有一个变量， execute 在调用 someFunction 时可以传递这样一个变量。

## 匿名函数

我们可以把一个函数作为变量传递。但是我们不一定要绕这个"先定义，再传递"的圈子，我们可以直接在另一个函数的括号中定义和传递这个函数：

```js
function execute(someFunction, value) {
  someFunction(value);
}

execute(function(word){ console.log(word) }, "Hello");
```

我们在 execute 接受第一个参数的地方直接定义了我们准备传递给 execute 的函数。

用这种方式，我们甚至不用给这个函数起名字，这也是为什么它被叫做匿名函数 。

## 函数传递是如何让HTTP服务器工作的

带着这些知识，我们再来看看我们简约而不简单的[HTTP](https://www.w3cschool.cn/http/u9ktefmo.html)服务器：

```js
var http = require("http");

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}).listen(8888);
```

现在它看上去应该清晰了很多：我们向 createServer 函数传递了一个匿名函数。

用这样的代码也可以达到同样的目的：

```js
var http = require("http");

function onRequest(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}

http.createServer(onRequest).listen(8888);
```

---

# Node.js 路由

我们要为路由提供请求的URL和其他需要的GET及POST参数，随后路由需要根据这些数据来执行相应的代码。

因此，我们需要查看HTTP请求，从中提取出请求的URL以及GET/POST参数。这一功能应当属于路由还是服务器（甚至作为一个模块自身的功能）确实值得探讨，但这里暂定其为我们的HTTP服务器的功能。

我们需要的所有数据都会包含在request对象中，该对象作为onRequest()回调函数的第一个参数传递。但是为了解析这些数据，我们需要额外的Node.JS模块，它们分别是url和querystring模块。

```
       url.parse(string).query
                                           |
           url.parse(string).pathname      |
                       |                   |
                       |                   |
                     ------ -------------------
http://localhost:8888/start?foo=bar&hello=world
                                ---       -----
                                 |          |
                                 |          |
              querystring(string)["foo"]    |
                                            |
                         querystring(string)["hello"]
```

当然我们也可以用querystring模块来解析POST请求体中的参数，稍后会有演示。

现在我们来给onRequest()函数加上一些逻辑，用来找出浏览器请求的URL路径：

```js
var http = require("http");
var url = require("url");

function start() {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start;
```

好了，我们的应用现在可以通过请求的URL路径来区别不同请求了--这使我们得以使用路由（还未完成）来将请求以URL路径为基准映射到处理程序上。

在我们所要构建的应用中，这意味着来自/start和/upload的请求可以使用不同的代码来处理。稍后我们将看到这些内容是如何整合到一起的。

现在我们可以来编写路由了，建立一个名为router.js的文件，添加以下内容：

```js
function route(pathname) {
  console.log("About to route a request for " + pathname);
}
exports.route = route;
```

如你所见，这段代码什么也没干，不过对于现在来说这是应该的。在添加更多的逻辑以前，我们先来看看如何把路由和服务器整合起来。

我们的服务器应当知道路由的存在并加以有效利用。我们当然可以通过硬编码的方式将这一依赖项绑定到服务器上，但是其它语言的编程经验告诉我们这会是一件非常痛苦的事，因此我们将使用依赖注入的方式较松散地添加路由模块。

首先，我们来扩展一下服务器的 start() 函数，以便将路由函数作为参数传递过去，server.js 文件代码如下

```js
var http = require("http");
var url = require("url");
 
function start(route) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");
 
    route(pathname);
 
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
  }
 
  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}
 
exports.start = start;
```

同时，我们会相应扩展main.js，使得路由函数可以被注入到服务器中：

```js
var server = require("./server");
var router = require("./router");

server.start(router.route);
```

在这里，我们传递的函数依旧什么也没做。

如果现在启动应用（node main.js，始终记得这个命令行），随后请求一个URL，你将会看到应用输出相应的信息，这表明我们的HTTP服务器已经在使用路由模块了，并会将请求的路径传递给路由：

```
$ node main.js
Server has started.
Request for / received.
About to route a request for /
Request for /favicon.ico received.
About to route a request for /favicon.ico
```

浏览器访问 http://127.0.0.1:8888/

----

# Node.js 全局对象

JavaScript 中有一个特殊的对象，称为全局对象（Global Object），它及其所有属性都可以在程序的任何地方访问，即全局变量。

在浏览器 JavaScript 中，通常 window 是全局对象， 而 Node.js 中的全局对象是 global，所有全局变量（除了 global 本身以外）都是 global 对象的属性。

在 Node.js 我们可以直接访问到 global 的属性，而不需要在应用中包含它。

## 全局对象与全局变量

global 最根本的作用是**作为全局变量的宿主**。按照 ECMAScript 的定义，满足以下条件的变量是全局变量：

- 在最外层定义的变量；
- 全局对象的属性；
- 隐式定义的变量（未定义直接赋值的变量）。

当你定义一个全局变量时，这个变量同时也会成为全局对象的属性，反之亦然。需要注 意的是，在Node.js 中你不可能在最外层定义变量，因为所有用户代码都是属于当前模块的， 而模块本身不是最外层上下文。

**注意：** **永远使用var 定义变量以避免引入全局变量**，因为全局变量会污染 命名空间，提高代码的耦合风险。

```js
name="senbin"
console.log(global.name);  //senbin
```

```js
var name="senbin"
console.log(global.name);  //undefined
```

## __filename

__filename 表示**当前正在执行的脚本的文件名**。它将输出文件所在位置的绝对路径，且和命令行参数所指定的文件名不一定相同。 如果在模块中，返回的值是模块文件的路径。

```js
// 输出全局变量 __filename 的值
console.log(__filename);  // E:\pogject\nodejs\main.js
```

## __dirname

__dirname 表示当前执行脚本所在的目录。

```js
// 输出全局变量 __dirname 的值
console.log(__dirname);  // E:\pogject\nodejs
```

## setTimeout(cb, ms)

setTimeout(cb, ms) 全局函数在指定的毫秒(ms)数后执行指定函数(cb)。：setTimeout() 只执行一次指定函数。

返回一个代表定时器的句柄值。

```js
function printHello(){
   console.log( "Hello, World!");
}
// 两秒后执行以上函数
setTimeout(printHello, 2000);
```

## clearTimeout(t)

clearTimeout( t ) 全局函数用于停止一个之前通过 setTimeout() 创建的定时器。 参数 t 是通过 setTimeout() 函数创建的定时器。

```js
function printHello(){
   console.log( "Hello, World!");
}
// 两秒后执行以上函数
var t = setTimeout(printHello, 2000);

// 清除定时器
clearTimeout(t);
```

## setInterval(cb, ms)

setInterval(cb, ms) 全局函数在指定的毫秒(ms)数后执行指定函数(cb)。

返回一个代表定时器的句柄值。可以使用 clearInterval(t) 函数来清除定时器。

setInterval() 方法会不停地调用函数，直到 clearInterval() 被调用或窗口被关闭。

```js
function printHello(){
   console.log( "Hello, World!");
}
// 两秒后执行以上函数
setInterval(printHello, 2000);
```

## console

console 用于提供控制台标准输出，它是由 Internet Explorer 的 JScript 引擎提供的调试工具，后来逐渐成为浏览器的实施标准。

Node.js 沿用了这个标准，提供与习惯行为一致的 console 对象，用于向标准输出流（stdout）或标准错误流（stderr）输出字符。

### `console.log([data][, ...])`

向标准输出流打印字符并以换行符结束。该方法接收若干 个参数，如果只有一个参数，则输出这个参数的字符串形式。如果有多个参数，则 以类似于C 语言 printf() 命令的格式输出。

```js
console.log("5","1");  //5 1
```

### `console.info([data][, ...])`

该命令的作用是返回信息性消息，这个命令与console.log差别并不大，除了在chrome中只会输出文字外，其余的会显示一个**蓝色**的惊叹号。

```js
console.info("5","1");  //5 1
```

### `console.error([data][, ...])`

输出错误消息的。控制台在出现错误时会显示是**红色**的叉子。

```js
console.error("123");  // 123
```

### `console.warn([data][, ...])`

输出警告消息。控制台出现有**黄色**的惊叹号。

```js
console.warn("123");  // 123
```

### `console.dir(obj[, options])`

用来对一个对象进行检查（inspect），并以易于阅读和打印的格式显示。

```js
let obj={
	a:10,
	b:20
};
console.warn(obj);  // { a: 10, b: 20 }
```

### `console.time(label)`

输出时间，表示计时开始。

### `console.timeEnd(label)`

结束时间，表示计时结束。

```js

console.time("t1");

setTimeout(()=>{
	console.timeEnd("t1");
},2000);

//t1: 2.005s
```

### `console.trace(message[, ...])`

当前执行的代码在堆栈中的调用路径，这个测试函数运行很有帮助，只要给想测试的函数里面加入 console.trace 就行了。

```js
console.time("t1");

setTimeout(()=>{
	console.timeEnd("t1");
	console.trace("end");
},2000);

/*
t1: 2.015s
Trace: end
    at Timeout._onTimeout (E:\pogject\nodejs\main.js:6:10)
    at listOnTimeout (node:internal/timers:559:17)
    at processTimers (node:internal/timers:502:7)
*/
```



### `console.assert(value[, message][, ...])`

用于判断某个表达式或变量是否为真，接收两个参数，第一个参数是表达式，第二个参数是字符串。只有当第一个参数为false，才会输出第二个参数，否则不会有任何结果。

```js
let a=1;
console.assert(a===undefined,"a已经定义");
//Assertion failed: a已经定义
```

----

## process

process 是一个全局变量，即 global 对象的属性。

它用于描述当前Node.js 进程状态的对象，提供了一个与操作系统的简单接口。通常在你写本地命令行程序的时候，少不了要 和它打交道。下面将会介绍 process 对象的一些最常用的成员方法。

### exit

当进程准备退出时触发。

### beforeExit

当 node 清空事件循环，并且没有其他安排时触发这个事件。通常来说，当没有进程安排时 node 退出，但是 'beforeExit' 的监听器可以异步调用，这样 node 就会继续执行。

### uncaughtException 

当一个异常冒泡回到事件循环，触发这个事件。如果给异常添加了监视器，默认的操作（打印堆栈跟踪信息并退出）就不会发生。

### Signal 事件

当进程接收到信号时就触发。信号列表详见标准的 POSIX 信号名，如 SIGINT、SIGUSR1 等。

```js
process.on("exit",function(code){
	// 以下代码永远不会执行
	setTimeout(function() {
		console.log("该代码不会执行");
	}, 0);

	console.log('退出码为:', code);
});

console.log("程序运行结束");
```

```bash
$ node main.js
程序运行结束
退出码为: 0
```

### Process 属性

Process 提供了很多有用的属性，便于我们更好的控制系统的交互：

```json
> process
process {
  version: 'v16.14.2',
  versions: {
    node: '16.14.2',
    v8: '9.4.146.24-node.20',
    uv: '1.43.0',
    zlib: '1.2.11',
    brotli: '1.0.9',
    ares: '1.18.1',
    modules: '93',
    nghttp2: '1.45.1',
    napi: '8',
    llhttp: '6.0.4',
    openssl: '1.1.1n+quic',
    cldr: '40.0',
    icu: '70.1',
    tz: '2021a3',
    unicode: '14.0',
    ngtcp2: '0.1.0-DEV',
    nghttp3: '0.1.0-DEV'
  },
  arch: 'x64',
  platform: 'win32',
  release: {
    name: 'node',
    lts: 'Gallium',
    sourceUrl: 'https://nodejs.org/download/release/v16.14.2/node-v16.14.2.tar.gz',
    headersUrl: 'https://nodejs.org/download/release/v16.14.2/node-v16.14.2-headers.tar.gz',
    libUrl: 'https://nodejs.org/download/release/v16.14.2/win-x64/node.lib'
  },
...
```

### Process方法

Process 提供了很多有用的方法，便于我们更好的控制系统的交互

---

```js
// 输出当前目录
console.log('当前目录: ' + process.cwd());

// 输出当前版本
console.log('当前版本: ' + process.version);

// 输出内存使用情况
console.log(process.memoryUsage());
```

----

# Node.js 常用工具util

util 是一个Node.js 核心模块，提供常用函数的集合，用于弥补核心 JavaScript 的功能 过于精简的不足。

使用方法如下：

```js
const util = require('util');
```

## util.callbackify

util.callbackify(original) 将 async 异步函数（或者一个返回值为 Promise 的函数）转换成遵循异常优先的回调风格的函数，例如将 (err, value) => ... 回调作为最后一个参数。 在回调函数中，第一个参数为拒绝的原因（如果 Promise 解决，则为 null），第二个参数则是解决的值。

```js
const util=require("util");

async function fn(){
	return "Hello World!";
}

const callbackFunction=util.callbackify(fn);

callbackFunction((err,ret)=>{
	if (err) {
		throw err;
	}
	console.log(ret);  //Hello World!
});
```

回调函数是异步执行的，并且有异常堆栈错误追踪。 如果回调函数抛出一个异常，进程会触发一个 'uncaughtException' 异常，如果没有被捕获，进程将会退出。

null 在回调函数中作为一个参数有其特殊的意义，如果回调函数的首个参数为 Promise 拒绝的原因且带有返回值，且值可以转换成布尔值 false，这个值会被封装在 Error 对象里，**可以通过属性 reason 获取**。

```js
const util=require("util");

async function fn(){
	return Promise.reject(null);
}

const callbackFunction=util.callbackify(fn);

callbackFunction((err,ret)=>{
	if (err) {
		console.error(err.reason);  // null
		return;
        // 当 Promise 被以 `null` 拒绝时，它被包装为 Error 并且原始值存储在 `reason` 中。
		err && err.hasOwnProperty('reason') && err.reason === null;  // true
		//throw err;
	}
	console.log(ret);  //
});
```

original 为 async 异步函数。该函数返回传统回调函数。

## util.inherits

util.inherits(constructor, superConstructor) 是一个实现对象间原型继承的函数。

JavaScript 的面向对象特性是基于原型的，与常见的基于类的不同。JavaScript 没有提供对象继承的语言级别特性，而是通过原型复制来实现的。

在这里我们只介绍 util.inherits 的用法，示例如下：

```js
const util=require("util");

function Base(){
	this.name="base";
	this.base=1991;
	this.sayHello=function(){
		console.log("Hello "+this.name);
	};
}
Base.prototype.showName=function(){
	console.log(this.name);
};

function Sub(){
	this.name="sub";
}

util.inherits(Sub,Base);

var objBase=new Base();
objBase.showName();
objBase.sayHello();
console.log(objBase);

var objSub=new Sub();
objSub.showName();
//objSub.sayHello();  //TypeError: objSub.sayHello is not a function
console.log(objSub);

```

我们定义了一个基础对象 Base 和一个继承自 Base 的 Sub，Base 有三个在构造函数内定义的属性和一个原型中定义的函数，通过util.inherits 实现继承。运行结果如下：

```bash
$ node main.js
base
Hello base
Base { name: 'base', base: 1991, sayHello: [Function (anonymous)] }
sub
Sub { name: 'sub' }

```

注意：**Sub 仅仅继承了Base 在原型中定义的函数**，而构造函数内部创造的 base 属 性和 sayHello 函数都没有被 Sub 继承。

同时，在原型中定义的属性不会被 console.log 作 为对象的属性输出。如果我们去掉 objSub.sayHello(); 这行的注释，将会看到：

```js
objSub.sayHello();  //TypeError: objSub.sayHello is not a function
```

## util.inspect

util.inspect(object,[showHidden],[depth],[colors]) 是一个将任意对象转换 为字符串的方法，通常用于调试和错误输出。它至少接受一个参数 object，即要转换的对象。

showHidden 是一个可选参数，如果值为 true，将会输出更多隐藏信息。

depth 表示最大递归的层数，如果对象很复杂，你可以指定层数以控制输出信息的多 少。**如果不指定depth，默认会递归 2 层**，指定为 null 表示将不限递归层数完整遍历对象。 如果 colors 值为 true，输出格式将会以 ANSI 颜色编码，通常用于在终端显示更漂亮 的效果。

特别要指出的是，util.inspect 并不会简单地直接把对象转换为字符串，即使该对 象定义了 toString 方法也不会调用。

```js
const util=require("util");

function Person(){
	this.name="base";
	this.toString=function(){
		return this.name;
	}
}

var obj=new Person();
console.log(util.inspect(obj));

console.log(util.inspect(obj,true));

```

运行结果是：

```bash
$ node main.js
Person { name: 'base', toString: [Function (anonymous)] }
Person {
  name: 'base',
  toString: <ref *1> [Function (anonymous)] {
    [length]: 0,
    [name]: '',
    [arguments]: null,
    [caller]: null,
    [prototype]: { [constructor]: [Circular *1] }
  }
}

```

## util.isArray(object)

如果给定的参数 "object" 是一个数组返回 true，否则返回 false。

```js
var util = require('util');

util.isArray([])
  // true
util.isArray(new Array)
  // true
util.isArray({})
  // false
```

## util.isRegExp(object)

如果给定的参数 "object" 是一个正则表达式返回true，否则返回false。

```js
var util = require('util');

util.isRegExp(/some regexp/)
  // true
util.isRegExp(new RegExp('another regexp'))
  // true
util.isRegExp({})
  // false
```

## util.isDate(object)

如果给定的参数 "object" 是一个日期返回true，否则返回false。

```js
var util = require('util');

util.isDate(new Date())
  // true
util.isDate(Date())
  // false (without 'new' returns a String)
util.isDate({})
  // false
```

----

# Node.js 文件系统

Node.js 提供一组类似 UNIX（POSIX）标准的文件操作API。 Node 导入文件系统模块(fs)语法如下所示：

```js
var fs = require("fs")
```

## 异步和同步

Node.js 文件系统（fs 模块）模块中的方法均有异步和同步版本，例如读取文件内容的函数有异步的 fs.readFile() 和同步的 fs.readFileSync()。

异步的方法函数最后一个参数为回调函数，回调函数的第一个参数包含了错误信息(error)。

建议大家使用异步方法，比起同步，异步方法性能更高，速度更快，而且没有阻塞。

```js
const fs=require("fs");

// 异步读取
fs.readFile("./data/input.txt",function(err,data){
	if (err) {
		console.error(err);
	}
	console.log(data.toString());
});

// 同步读取
var data = fs.readFileSync('input.txt');
console.log("同步读取: " + data.toString());

console.log("程序执行结束!");
```

## 打开文件

语法

以下为在异步模式下打开文件的语法格式：

```js
fs.open(path, flags[, mode], callback)
```

参数

参数使用说明如下：

- path - 文件的路径。
- flags - 文件打开的行为。具体值详见下文。
- mode - 设置文件模式(权限)，文件创建默认权限为 0666(可读，可写)。
- callback - 回调函数，带有两个参数如：callback(err, fd)。

flags 参数可以是以下值：

| Flag | 描述                                                   |
| ---- | ------------------------------------------------------ |
| r    | 以读取模式打开文件。如果文件不存在抛出异常。           |
| r+   | 以读写模式打开文件。如果文件不存在抛出异常。           |
| rs   | 以同步的方式读取文件。                                 |
| rs+  | 以同步的方式读取和写入文件。                           |
| w    | 以写入模式打开文件，如果文件不存在则创建。             |
| wx   | 类似 'w'，但是如果文件路径存在，则文件写入失败。       |
| w+   | 以读写模式打开文件，如果文件不存在则创建。             |
| wx+  | 类似 'w+'， 但是如果文件路径存在，则文件读写失败。     |
| a    | 以追加模式打开文件，如果文件不存在则创建。             |
| ax   | 类似 'a'， 但是如果文件路径存在，则文件追加失败。      |
| a+   | 以读取追加模式打开文件，如果文件不存在则创建。         |
| ax+  | 类似 'a+'， 但是如果文件路径存在，则文件读取追加失败。 |

实例

接下来我们创建 file.js 文件，并打开 input.txt 文件进行读写，代码如下所示：

```js
const fs=require("fs");

//异步打开文件
console.log("准备打开文件！");
fs.open("./data/input.txt","r+",function(err,fd){
	if (err) {
		return console.error(err);
	}
	console.log("文件打开成功！");
});
```

## 获取文件信息

以下为通过异步模式获取文件信息的语法格式：

```
fs.stat(path, callback)
```

参数使用说明如下：

- path - 文件路径。
- callback - 回调函数，带有两个参数如：(err, stats), stats 是 fs.Stats 对象。

fs.stat(path)执行后，会将stats类的实例返回给其回调函数。可以通过stats类中的提供方法判断文件的相关属性。例如判断是否为文件：

```js
const fs=require("fs");


fs.stat("./data/input.txt","r+",function(err,stats){
	console.log(stats);
	console.log(stats.isFile());  //true
});
/*
Stats {
  dev: 2811908584,
  mode: 33206,
  nlink: 1,
  uid: 0,
  gid: 0,
  rdev: 0,
  blksize: 4096,
  ino: 562949953432560,
  size: 34,
  blocks: 0,
  atimeMs: 1651501172864.2075,
  mtimeMs: 1651501172864.2075,
  ctimeMs: 1651501172864.2075,
  birthtimeMs: 1648114041983.8635,
  atime: 2022-05-02T14:19:32.864Z,
  mtime: 2022-05-02T14:19:32.864Z,
  ctime: 2022-05-02T14:19:32.864Z,
  birthtime: 2022-03-24T09:27:21.984Z
}
*/
```

stats类中的方法有：

| 方法                      | 描述                                                         |
| ------------------------- | ------------------------------------------------------------ |
| stats.isFile()            | 如果是文件返回 true，否则返回 false。                        |
| stats.isDirectory()       | 如果是目录返回 true，否则返回 false。                        |
| stats.isBlockDevice()     | 如果是块设备返回 true，否则返回 false。                      |
| stats.isCharacterDevice() | 如果是字符设备返回 true，否则返回 false。                    |
| stats.isSymbolicLink()    | 如果是软链接返回 true，否则返回 false。                      |
| stats.isFIFO()            | 如果是FIFO，返回true，否则返回 false。FIFO是UNIX中的一种特殊类型的命令管道。 |
| stats.isSocket()          | 如果是 Socket 返回 true，否则返回 false。                    |

## 写入文件

以下为异步模式下写入文件的语法格式：

```
fs.writeFile(file, data[, options], callback)
```

writeFile 直接打开文件默认是 w 模式，所以如果文件存在，该方法写入的内容会覆盖旧的文件内容。

参数使用说明如下：

- file - 文件名或文件描述符。
- data - 要写入文件的数据，可以是 String(字符串) 或 Buffer(缓冲) 对象。
- options - 该参数是一个对象，包含 {encoding, mode, flag}。默认编码为 utf8, 模式为 0666 ， flag 为 'w'
- callback - 回调函数，回调函数只包含错误信息参数(err)，在写入失败时返回。

```js
const fs=require("fs");

console.log("准备写入文件");
fs.writeFile("./data/input.txt","通过fs.writeFile 写入文件的内容",function(err){
	if (err) {
       return console.error(err);
   }
   console.log("数据写入成功！");
   console.log("--------我是分割线-------------")
   console.log("读取写入的数据！");
   fs.readFile("./data/input.txt",function(err,data){
   	if (err) {
   		return console.error(err);
   	}
   	console.log("异步读取文件数据: " + data.toString());
   });
});
```

## 读取文件

以下为异步模式下读取文件的语法格式：

```
fs.read(fd, buffer, offset, length, position, callback)
```

该方法使用了文件描述符来读取文件。

参数使用说明如下：

- fd - 通过 fs.open() 方法返回的文件描述符。
- buffer - 数据写入的缓冲区。
- offset - 缓冲区写入的写入偏移量。
- length - 要从文件中读取的字节数。
- position - 文件读取的起始位置，如果 position 的值为 null，则会从当前文件指针的位置读取。
- callback - 回调函数，有三个参数err, bytesRead, buffer，err 为错误信息， bytesRead 表示读取的字节数，buffer 为缓冲区对象。

```js
const fs=require("fs");

var buf=new Buffer.alloc(1024);

console.log("准备打开已存在的文件！");
fs.open("./data/input.txt","r+",function(err,fd){
	if (err) {
       return console.error(err);
   }
   console.log("文件打开成功！");
   console.log("准备读取文件：");
   fs.read(fd,buf,0,buf.length,0,function(err,bytes){
   	if (err) {
   		return console.error(err);
   	}
   	console.log(bytes + "  字节被读取");
    // 仅输出读取的字节
    if (bytes>0) {
    	console.log(buf.slice(0,bytes).toString());
    }
   });
});
```

## 关闭文件

以下为异步模式下关闭文件的语法格式：

```
fs.close(fd, callback)
```

该方法使用了文件描述符来读取文件。

参数使用说明如下：

- fd - 通过 fs.open() 方法返回的文件描述符。
- callback - 回调函数，没有参数。

```js
const fs=require("fs");

var buf=new Buffer.alloc(1024);

console.log("准备打开已存在的文件！");
fs.open("./data/input.txt","r+",function(err,fd){
	if (err) {
       return console.error(err);
   }
   console.log("文件打开成功！");
   console.log("准备读取文件：");
   fs.read(fd,buf,0,buf.length,0,function(err,bytes){
   	if (err) {
   		return console.error(err);
   	}
   	console.log(bytes + "  字节被读取");
    // 仅输出读取的字节
    if (bytes>0) {
    	console.log(buf.slice(0,bytes).toString());
    }
    //关闭文件
    fs.close(fd,function(err){
    	if (err) {
   			return console.error(err);
   		}
   		console.log("文件关闭成功");
    });
   });
});
```

## 截取文件

以下为异步模式下截取文件的语法格式：

```
fs.ftruncate(fd, len, callback)
```

该方法使用了文件描述符来读取文件。

参数使用说明如下：

- fd - 通过 fs.open() 方法返回的文件描述符。
- len - 文件内容截取的长度。
- callback - 回调函数，没有参数。

```js
const fs=require("fs");

var buf=new Buffer.alloc(1024);

console.log("准备打开已存在的文件！");
fs.open("./data/input.txt","r+",function(err,fd){
	if (err) {
       return console.error(err);
   }
   console.log("文件打开成功！");
   console.log("截取10字节内的文件内容，超出部分将被去除。");
   // 截取文件
   fs.truncate(fd,10,function(err){
   	if (err) {
   		return console.error(err);
   	}
   	 console.log("文件截取成功。");
      console.log("读取相同的文件"); 
	   fs.read(fd,buf,0,buf.length,0,function(err,bytes){
	   	if (err) {
	   		return console.error(err);
	   	}
	   	console.log(bytes + "  字节被读取");
	    // 仅输出读取的字节
	    if (bytes>0) {
	    	console.log(buf.slice(0,bytes).toString());
	    }
	    //关闭文件
	    fs.close(fd,function(err){
	    	if (err) {
	   			return console.error(err);
	   		}
	   		console.log("文件关闭成功");
	    });
	  });
    });
});
```

## 删除文件

以下为删除文件的语法格式：

```
fs.unlink(path, callback)
```

参数使用说明如下：

- path - 文件路径。
- callback - 回调函数，没有参数。

```js
const fs=require("fs");

console.log("准备删除文件！");

fs.unlink("./data/input.txt",function(err){
	if (err) {
       return console.error(err);
   }
   console.log("文件删除成功");
});

```

## 创建目录

以下为创建目录的语法格式：

```
fs.mkdir(path[, options], callback)
```

参数使用说明如下：

- path - 文件路径。
- options 参数可以是：recursive - 是否以递归的方式创建目录，默认为 false。mode - 设置目录权限，默认为 0777。
- callback - 回调函数，没有参数

```js
const fs=require("fs");

// data 目录必须存在
console.log("创建目录 /data/test/");

fs.mkdir("./data/test/",function(err){
	if (err) {
       return console.error(err);
   }
   console.log("目录创建成功");
});

//可以添加 recursive: true 参数，不管创建的目录是否存在：
fs.mkdir("./data/my/test",{recursive:true},(err)=>{
	if (err) {
       return console.error(err);
   }
   console.log("目录创建成功");
});
```

```bash
$ ls data
input.txt.gz  input2.txt  ouput.txt  test/  test2.txt  text2.txt
```

## 读取目录

以下为读取目录的语法格式：

```
fs.readdir(path, callback)
```

参数使用说明如下：

- path - 文件路径。
- callback - 回调函数，回调函数带有两个参数err, files，err 为错误信息，files 为 目录下的文件数组列表。

```js
const fs=require("fs");

console.log("查看 /data 目录");

fs.readdir("./data/",function(err,files){
	if (err) {
       return console.error(err);
   }
   files.forEach((file)=>{
   	console.log(file);
   });
});

```

## 删除目录

以下为删除目录的语法格式：

```
fs.rmdir(path, callback)
```

参数使用说明如下：

- path - 文件路径。
- callback - 回调函数，没有参数。

```js
const fs=require("fs");

console.log("准备删除目录 /data/my");

fs.rmdir("./data/my",function(err){
	if (err) {
       return console.error(err);
   }
   console.log("删除目录成功");
});

```

---

# Node.js GET/POST请求

在很多场景中，我们的服务器都需要跟用户的浏览器打交道，如表单提交。

表单提交到服务器一般都使用 GET/POST 请求。

## 获取GET请求内容

由于GET请求直接被嵌入在路径中，URL是完整的请求路径，包括了?后面的部分，因此你可以手动解析后面的内容作为GET请求的参数。

node.js 中 url 模块中的 parse 函数提供了这个功能。

```js
const http=require("http");
const url=require("url");
const util=require("util");

http.createServer((req,res)=>{
	res.writeHead(200,{"Content-Type":"text/plain;charset=utf-8"});
	res.end(util.inspect(url.parse(req.url,true)));
}).listen(3000);

// http://localhost:3000/user?name=senbin&age=10
```

```
Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: '?name=senbin&age=10',
  query: [Object: null prototype] { name: 'senbin', age: '10' },
  pathname: '/user',
  path: '/user?name=senbin&age=10',
  href: '/user?name=senbin&age=10'
}
```

### 获取 URL 的参数

我们可以使用 url.parse 方法来解析 URL 中的参数，代码如下：

```js
const http=require("http");
const url=require("url");
const util=require("util");

http.createServer((req,res)=>{
	res.writeHead(200,{"Content-Type":"text/plain;charset=utf-8"});
	//解析url参数
	var params=url.parse(req.url,true).query;
	res.write("网站名: "+params.name);
	res.write("\n");
	res.write("网站URL: "+params.url);
	res.end();
}).listen(3000);

// http://localhost:3000/user?name=senbin&age=10
```

```
网站名: senbin
网站URL: undefined
```

## 获取 POST 请求内容

POST 请求的内容全部的都在请求体中，http.ServerRequest 并没有一个属性内容为请求体，原因是等待请求体传输可能是一件耗时的工作。

比如上传文件，而很多时候我们可能并不需要理会请求体的内容，恶意的POST请求会大大消耗服务器的资源，所以 node.js 默认是不会解析请求体的，当你需要的时候，需要手动来做。

基本语法结构说明

```js
const http=require("http");
const querystring=require("querystring");
const util=require("util");

http.createServer((req,res)=>{
	// 定义了一个post变量，用于暂存请求体的信息
	var post="";

	// 通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中
	req.on("data",(chunk)=>{
		post+=chunk;
	});

	// 在end事件触发后，通过querystring.parse将post解析为真正的POST请求格式，然后向客户端返回。
	req.on("end",()=>{
		post=querystring.parse(post);
		res.end(util.inspect(post));
	});
}).listen(3000);
```

以下实例表单通过 POST 提交并输出数据：

```js
const http=require("http");
const querystring=require("querystring");
const util=require("util");

var postHTML = `
  <html><head><meta charset="utf-8"><title>编程狮 Node.js 实例</title></head>
  <body>
  <form method="post">
  网站名： <input name="name"><br>
  网站 URL： <input name="url"><br>
  <input type="submit">
  </form>
  </body></html>`;

http.createServer((req,res)=>{
	// 定义了一个post变量，用于暂存请求体的信息
	var post="";

	// 通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中
	req.on("data",(chunk)=>{
		post+=chunk;
	});

	// 在end事件触发后，通过querystring.parse将post解析为真正的POST请求格式，然后向客户端返回。
	req.on("end",()=>{
		// 解析参数
		post=querystring.parse(post);
		// 设置响应头部信息及编码
		res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
		if (post.name && post.url) {
			res.write("网站名：" + post.name);
			res.write("\n");
			res.write("网站 URL：" + post.url);
		}else{
			res.write(postHTML);
		}
		res.end();
	});
}).listen(3000);

// http://localhost:3000/
```



----

# Node.js Web 模块

## 什么是 Web 服务器？

Web服务器一般指网站服务器，是指驻留于因特网上某种类型计算机的程序。

Web服务器的基本功能就是提供Web信息浏览服务。它只需支持HTTP协议、HTML文档格式及URL，与客户端的网络浏览器配合。

大多数web服务器都支持服务端的脚本语言（php、python、ruby）等，并通过脚本语言从数据库获取数据，将结果返回给客户端浏览器。

目前最主流的三个Web服务器是Apache、Nginx、IIS。

## Web 应用架构

![Web 应用架构](https://atts.w3cschool.cn/attachments/image/web_architecture.jpg)

- **Client** - 客户端，一般指浏览器，浏览器可以通过HTTP协议向服务器请求数据。
- **Server** - 服务端，一般指Web服务器，可以接收客户端请求，并向客户端发送响应数据。
- **Business** - 业务层， 通过Web服务器处理应用程序，如与数据库交互，逻辑运算，调用外部程序等。
- **Data** - 数据层，一般由数据库组成。

## 使用 Node 创建 Web 服务器

Node.js提供了http模块，http模块主要用于搭建HTTP服务端和客户端，如果要使用HTTP服务器或客户端功能，则必须调用http模块，代码如下：

```js
var http = require('http');
```

以下是演示一个最基本的HTTP服务器架构(使用8081端口)，创建server.js文件，代码如下所示：

```js
const http = require('http');
const fs = require('fs');
const url = require('url');


// 创建服务器
http.createServer( function (request, response) {  
   // 解析请求，包括文件名
   var pathname = url.parse(request.url).pathname;
   
   // 输出请求的文件名
   console.log("Request for " + pathname + " received.");
   
   // 从文件系统中读取请求的文件内容
   fs.readFile(pathname.substr(1), function (err, data) {
      if (err) {
         console.log(err);
         // HTTP 状态码: 404 : NOT FOUND
         // Content Type: text/plain
         response.writeHead(404, {'Content-Type': 'text/html'});
      }else{	         
         // HTTP 状态码: 200 : OK
         // Content Type: text/plain
         response.writeHead(200, {'Content-Type': 'text/html'});	
         
         // 响应文件内容
         response.write(data.toString());		
      }
      //  发送响应数据
      response.end();
   });   
}).listen(8081);

// 控制台会输出以下信息
console.log('Server running at http://127.0.0.1:8081/');

//在浏览器中输入并打开地址：http://127.0.0.1:8081/index.html
```

接下来我们在该目录下创建一个index.html文件，代码如下：

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>test</title>
</head>
<body>
	Hello World!
</body>
</html>
```

```bash
$ node main.js
Server running at http://127.0.0.1:8081/
Request for /index.html received.
Request for /favicon.ico received.
[Error: ENOENT: no such file or directory, open 'E:\pogject\nodejs\favicon.ico'] {
  errno: -4058,
  code: 'ENOENT',
  syscall: 'open',
  path: 'E:\\pogject\\nodejs\\favicon.ico'
}
```

## 使用 Node 创建 Web 客户端

使用Node创建Web客户端需要引入http模块，创建client.js文件，代码如下所示：

```js
const http=require("http");

//用于请求的选项
var options={
	host:"localhost",
	port:"8081",
	path:"/index.html"
};

// 处理响应的回调函数
var callback=function(response){
	// 不断更新数据
	var body="";
	response.on("data",(data)=>{
		body+=data;
	});
	response.on("end",()=>{
		// 数据接收完成
		console.log(body);
	});
}

// 向服务端发送请求
var req=http.request(options,callback);
req.end();
```

```bash
$ node main.js
Server running at http://127.0.0.1:8081/
Request for /index.html received.
```

```bash
$ node client.js

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>test</title>
</head>
<body>
	Hello World!
</body>
</html>
```

----

# Node.js Express 框架

## Express 简介

Express是一个简洁而灵活的node.js Web应用框架, 提供了一系列强大特性帮助你创建各种Web应用，和丰富的HTTP工具。

使用Express可以快速地搭建一个完整功能的网站。

Express 框架核心特性包括：

- 可以设置中间件来响应HTTP请求。
- 定义了路由表用于执行不同的HTTP请求动作。
- 可以通过向模板传递参数来动态渲染HTML页面。

## 安装 Express

安装Express并将其保存到依赖列表中：

```bash
$ npm install express --save
```

以上命令会将Express框架安装在当期目录的**node_modules**目录中， **node_modules**目录下会自动创建express目录。以下几个重要的模块是需要与express框架一起安装的：

- **body-parser** - node.js中间件，用于处理JSON, Raw, Text和URL编码的数据。
- **cookie-parser** - 这就是一个解析Cookie的工具。通过req.cookies可以取到传过来的cookie，并把它们转成对象。
- **multer** - node.js中间件，用于处理enctype="multipart/form-data"（设置表单的MIME编码）的表单数据。

```bash
$ npm install body-parser --save
$ npm install cookie-parser --save
$ npm install multer --save
```

## Express 框架实例

接下来我们使用Express框架来输出"Hello World"。

以下实例中我们引入了express模块，并在客户端发起请求后，响应"Hello World"字符串。

创建express_demo.js文件，代码如下所示：

```js
const express=require("express");

var app=express();

app.get("/",(req,res)=>{
	res.send("Hello World");
});

var server=app.listen(8081,function(){
	var host=server.address().address;
	var port=server.address().port;
	console.log("应用实例，访问地址为 http:\/\/%s:%s", host, port);
});
```

```bash
$ node main.js
应用实例，访问地址为 http://:::8081
```

在浏览器中访问http://127.0.0.1:8081

## 请求和响应

Express应用使用回调函数的参数： **request**和**response**对象来处理请求和响应的数据。

```
app.get('/', function (req, res) {
   // --
})
```

**request**和**response**对象的具体介绍：

**Request 对象** - request对象表示HTTP请求，包含了请求查询字符串，参数，内容，HTTP头部等属性。常见属性有：

1. req.app：当callback为外部文件时，用req.app访问express的实例
2. req.baseUrl：获取路由当前安装的URL路径
3. req.body / req.cookies：获得「请求主体」/ Cookies
4. req.fresh / req.stale：判断请求是否还「新鲜」
5. req.hostname / req.ip：获取主机名和IP地址
6. req.originalUrl：获取原始请求URL
7. req.params：获取路由的parameters
8. req.path：获取请求路径
9. req.protocol：获取协议类型
10. req.query：获取URL的查询参数串
11. req.route：获取当前匹配的路由
12. req.subdomains：获取子域名
13. req.accpets（）：检查请求的Accept头的请求类型
14. req.acceptsCharsets / req.acceptsEncodings / req.acceptsLanguages
15. req.get（）：获取指定的HTTP请求头
16. req.is（）：判断请求头Content-Type的MIME类型

**Response 对象** - response对象表示HTTP响应，即在接收到请求时向客户端发送的HTTP响应数据。常见属性有：

1. res.app：同req.app一样
2. res.append（）：追加指定HTTP头
3. res.set（）在res.append（）后将重置之前设置的头
4. res.cookie（name，value [，option]）：设置Cookie
5. opition: domain / expires / httpOnly / maxAge / path / secure / signed
6. res.clearCookie（）：清除Cookie
7. res.download（）：传送指定路径的文件
8. res.get（）：返回指定的HTTP头
9. res.json（）：传送JSON响应
10. res.jsonp（）：传送JSONP响应
11. res.location（）：只设置响应的Location HTTP头，不设置状态码或者close response
12. res.redirect（）：设置响应的Location HTTP头，并且设置状态码302
13. res.send（）：传送HTTP响应
14. res.sendFile（path [，options] [，fn]）：传送指定路径的文件 -会自动根据文件extension设定Content-Type
15. res.set（）：设置HTTP头，传入object可以一次设置多个头
16. res.status（）：设置HTTP状态码
17. res.type（）：设置Content-Type的MIME类型

## 路由

我们已经了解了HTTP请求的基本应用，而路由决定了由谁(指定脚本)去响应客户端请求。

在HTTP请求中，我们可以通过路由提取出请求的URL以及GET/POST参数。

接下来我们扩展Hello World，添加一些功能来处理更多类型的HTTP请求。

创建express_demo2.js文件，代码如下所示：

```js
const express=require("express");

var app=express();

//  主页输出 "Hello World"
app.get("/",(req,res)=>{
	console.log("主页 GET 请求");
	res.send("Hello GET");
});

//  POST 请求
app.post("/",(req,res)=>{
	console.log("主页 POST 请求");
	res.send('Hello POST');
});

//  /del_user 页面响应
app.delete("/del_user",(req,res)=>{
	console.log("/del_user 响应 DELETE 请求");
	res.send('删除页面');
});

//  /list_user 页面 GET 请求
app.get("/list_user",(req,res)=>{
	console.log("/list_user GET 请求");
	res.send('用户列表页面');
});

// 对页面 abcd, abxcd, ab123cd, 等响应 GET 请求
app.get("/ab*cd",(req,res)=>{
	console.log("/ab*cd GET 请求");
	res.send('正则匹配');
});


var server=app.listen(8081,function(){
	var host=server.address().address;
	var port=server.address().port;
	console.log("应用实例，访问地址为 http:\/\/%s:%s", host, port);
});
```

```
在浏览器中访问http://127.0.0.1:8081/list_user
http://127.0.0.1:8081/abgcd
```

## 静态文件

Express提供了内置的中间件**express.static**来设置静态文件如：图片，CSS, JavaScript等。

你可以使用**express.static**中间件来设置静态文件路径。例如，如果你将图片， CSS, JavaScript文件放在public目录下，你可以这么写：

```js
app.use(express.static('public'));
```

我们可以到public/images目录下放些图片,如下所示：

```bash
$ ls public/images/
bg1.jpg  bg2.jpg  bg3.png  img1.png  img2.png  img3.png
```

让我们再修改下"Hello Word"应用添加处理静态文件的功能。

创建express_demo3.js文件，代码如下所示：

```js
const express=require("express");

var app=express();
app.use(express.static("public"));

//  主页输出 "Hello World"
app.get("/",(req,res)=>{
	console.log("主页 GET 请求");
	res.send("Hello GET");
});

var server=app.listen(8081,function(){
	var host=server.address().address;
	var port=server.address().port;
	console.log("应用实例，访问地址为 http:\/\/%s:%s", host, port);
});
```

```
http://127.0.0.1:8081/images/img1.png
```

## GET 方法

以下实例演示了在表单中通过GET方法提交两个参数，我们可以使用server.js文件内的**process_get**路由器来处理输入：

index.html文件代码如下：

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>test</title>
</head>
<body>
	<form action="http://127.0.0.1:8081/process_get" method="get">
		First Name: <input type="text" name="first_name">  <br>
		Last Name: <input type="text" name="last_name"><br>
		<input type="submit" value="Submit">
	</form>
</body>
</html>
```

server.js文件代码如下:

```js
const express=require("express");

var app=express();
app.use(express.static("public"));


app.get("/index.html",(req,res)=>{
	res.sendFile(__dirname+"/"+"index.html");
});

app.get("/process_get",(req,res)=>{
	// 输出 JSON 格式
	var response={
		first_name:req.query.first_name,
		last_name:req.query.last_name
	};
	console.log(response);
	res.end(JSON.stringify(response));
});

var server=app.listen(8081,function(){
	var host=server.address().address;
	var port=server.address().port;
	console.log("应用实例，访问地址为 http:\/\/%s:%s", host, port);
});

//http://127.0.0.1:8081/index.html
```

```bash
$ node main.js
应用实例，访问地址为 http://:::8081
{ first_name: 'senbin', last_name: 'kop' }
```

## POST 方法

以下实例演示了在表单中通过POST方法提交两个参数，我们可以使用server.js文件内的**process_post**路由器来处理输入：

index.html文件代码修改如下：

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>test</title>
</head>
<body>
	<form action="http://127.0.0.1:8081/process_post" method="post">
		First Name: <input type="text" name="first_name">  <br>
		Last Name: <input type="text" name="last_name">
		<input type="submit" value="Submit">
	</form>
</body>
</html>
```

server.js文件代码修改如下:

```js
const express=require("express");
const bodyParser=require("body-parser");

var app=express();
app.use(express.static("public"));

// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser=bodyParser.urlencoded({extended:true});


app.get("/index.html",(req,res)=>{
	res.sendFile(__dirname+"/"+"index.html");
});

app.post("/process_post",urlencodedParser,(req,res)=>{
	// 输出 JSON 格式
	var response={
		first_name:req.body.first_name,
		last_name:req.body.last_name
	};
	console.log(response);
	res.end(JSON.stringify(response));
});

var server=app.listen(8081,function(){
	var host=server.address().address;
	var port=server.address().port;
	console.log("应用实例，访问地址为 http:\/\/%s:%s", host, port);
});

// http://127.0.0.1:8081/index.html
```

```bash
$ node main.js
应用实例，访问地址为 http://:::8081
{ first_name: 'senbin', last_name: 'kop' }
```

---

## 文件上传

以下我们创建一个用于上传文件的表单，使用POST方法，表单enctype属性设置为multipart/form-data。

index.html文件代码修改如下：

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>test</title>
</head>
<body>
	<h3>文件上传：</h3>
	选择一个文件上传: <br />
	<form action="/file_upload" method="post" enctype="multipart/form-data">
		<input type="file" name="img" size="50">  <br>
		<input type="submit" value="upload">
	</form>
</body>
</html>
```

server.js文件代码修改如下:

```js
const fs=require("fs");
const express=require("express");
const multer=require("multer");
const pathLib=require("path");
const bodyParser=require("body-parser");

var app=express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:false}));
app.use(multer({dest:"/tmp/"}).any());



app.get("/index.html",(req,res)=>{
	res.sendFile(__dirname+"/"+"index.html");
});

app.post("/file_upload",(req,res)=>{
	console.log(req.files[0]);  // 上传的文件信息
	
	var des_file = __dirname + "/" + req.files[0].originalname;
	fs.readFile( req.files[0].path, function (err, data) {
        fs.writeFile(des_file, data, function (err) {
         if( err ){
              console.log( err );
         }else{
               response = {
                   message:'File uploaded successfully', 
                   filename:req.files[0].originalname
              };
          }
          console.log( response );
          res.end( JSON.stringify( response ) );
       });
   });
});
var server=app.listen(8081,function(){
	var host=server.address().address;
	var port=server.address().port;
	console.log("应用实例，访问地址为 http:\/\/%s:%s", host, port);
});
```

```bash
$ node main.js
应用实例，访问地址为 http://:::8081
{
  fieldname: 'img',
  originalname: 'bg3.png',
  encoding: '7bit',
  mimetype: 'image/png',
  destination: '/tmp/',
  filename: '8835bfd5046985703e9e88897ce2dbbb',
  path: '\\tmp\\8835bfd5046985703e9e88897ce2dbbb',
  size: 49367
}
{ message: 'File uploaded successfully', filename: 'bg3.png' }

```

## Cookie 管理

我们可以使用中间件向Node.js服务器发送cookie信息，以下代码输出了客户端发送的cookie信息：

```js
const fs=require("fs");
const express=require("express");
const cookieParser=require("cookie-parser");

var app=express();
app.use(cookieParser);


app.get("/",(req,res)=>{
	console.log("Cookies:"+req.cookies);
});

app.listen(8081);

// http://127.0.0.1:8081 
```

可以访问 http://127.0.0.1:8081 并查看终端信息的输出

```bash
$ node main.js
Cookies:  [Object: null prototype] {}

```

---

# Node.js RESTful API

## 什么是 REST？

REST中文解释为，表述性状态传递（英文：Representational State Transfer，简称REST），是Roy Fielding博士在2000年他的博士论文中提出来的一种软件架构风格。

表述性状态转移是一组架构约束条件和原则。满足这些约束条件和原则的应用程序或设计就是RESTful。

需要注意的是，REST是设计风格而不是标准。REST通常基于使用HTTP，URI和XML（标准通用标记语言下的一个子集）以及[HTML](https://www.w3cschool.cn/html/html-intro.html)（标准通用标记语言下的一个应用）这些现有的广泛流行的协议和标准。REST通常使用JSON数据格式。

### HTTP 方法

以下为REST基本架构的四个方法：

- **GET** - 用于获取数据。
- **PUT** - 用于添加数据。
- **DELETE** - 用于删除数据。
- **POST** - 用于更新或添加数据。

## RESTful Web Services

Web service是一个平台独立的，低耦合的，自包含的、基于可编程的web的应用程序，可使用开放的XML（标准通用标记语言下的一个子集）标准来描述、发布、发现、协调和配置这些应用程序，用于开发分布式的互操作的应用程序。

RESTful是基于REST架构的Web Services。

由于轻量级以及通过HTTP直接传输数据的特性，Web服务的RESTful方法已经成为最常见的替代方法。可以使用各种语言（比如，Java程序、Perl、Ruby、Python、PHP和Javascript[包括Ajax]）实现客户端。

RESTful Web服务通常可以通过自动客户端或代表用户的应用程序访问。但是，这种服务的简便性让用户能够与之直接交互，使用它们的Web浏览器构建一个GET URL并读取返回的内容。

更多介绍，可以查看：[RESTful 架构详解](https://www.w3cschool.cn/w3cnote/restful-architecture.html)

## 创建 RESTful

首先，创建一个json数据资源文件users.json，内容如下：

```json
{
   "user1" : {
      "name" : "mahesh",
	  "password" : "password1",
	  "profession" : "teacher",
	  "id": 1
   },
   "user2" : {
      "name" : "suresh",
	  "password" : "password2",
	  "profession" : "librarian",
	  "id": 2
   },
   "user3" : {
      "name" : "ramesh",
	  "password" : "password3",
	  "profession" : "clerk",
	  "id": 3
   }
}
```

基于以上数据，我们创建以下RESTful API：

| 序号 | URI        | HTTP 方法 | 发送内容    | 结果             |
| :--- | :--------- | :-------- | :---------- | :--------------- |
| 1    | listUsers  | GET       | 空          | 显示所有用户列表 |
| 2    | addUser    | POST      | JSON 字符串 | 添加新用户       |
| 3    | deleteUser | DELETE    | JSON 字符串 | 删除用户         |
| 4    | :id        | GET       | 空          | 显示用户详细信息 |

### 获取用户列表：

以下代码，我们创建了RESTful API **listUsers**，用于读取用户的信息列表， server.js文件代码如下所示：

```js
const fs=require("fs");
const express=require("express");

var app = express()

app.get('/listUsers', function(req, res) {
	fs.readFile(__dirname+"/"+"users.json","utf8",(err,data)=>{
		console.log(data);
		res.end(data);
	})
})

var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("应用实例，访问地址为 http:\/\/%s:%s", host, port)
});

// 在浏览器中访问 http://127.0.0.1:8081/listUsers
```

```bash
$ node main.js
应用实例，访问地址为 http://:::8081
{
   "user1" : {
      "name" : "mahesh",
          "password" : "password1",
          "profession" : "teacher",
          "id": 1
   },
   "user2" : {
      "name" : "suresh",
          "password" : "password2",
          "profession" : "librarian",
          "id": 2
   },
   "user3" : {
      "name" : "ramesh",
          "password" : "password3",
          "profession" : "clerk",
          "id": 3
   }
}

```

### 添加用户

如果要添加新的用户数据，可以通过创建RESTful API **addUser实现**，server.js文件代码如下所示：

```js
const fs=require("fs");
const express=require("express");

var app = express()

app.get('/listUsers', function(req, res) {
	fs.readFile(__dirname+"/"+"users.json","utf8",(err,data)=>{
		console.log(data);
		res.end(data);
	})
});

//添加的新用户数据
var user = {
   "user4" : {
      "name" : "mohit",
      "password" : "password4",
      "profession" : "teacher",
      "id": 4
   }
}
app.get("/addUser",(req,res)=>{
	// 读取已存在的数据
	fs.readFile(__dirname+"/"+"users.json","utf8",(err,data)=>{
		data=JSON.parse(data);
		data["user4"]=users["users4"];
		console.log(data);
		res.end(JSON.stringify(data));
	});
})

var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("应用实例，访问地址为 http:\/\/%s:%s", host, port)
});

// http://127.0.0.1:8081 
```

### 显示用户详情

以下代码，我们创建了RESTful API **:id（用户id）**， 用于读取指定用户的详细信息，server.js文件代码如下所示：

```js
const fs=require("fs");
const express=require("express");

var app = express()

app.get('/:id', function(req, res) {
	// 首先我们读取已存在的用户
	fs.readFile(__dirname+"/"+"users.json","utf8",(err,data)=>{
		data=JSON.parse(data);
		var user=data["user"+req.params.id];
		console.log(user);
		res.end(JSON.stringify(user));
	})
});


var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("应用实例，访问地址为 http:\/\/%s:%s", host, port)
});

// http://127.0.0.1:8081/2
```

### 删除用户

以下代码，我们创建了RESTful API **deleteUser**， 用于删除指定用户的详细信息，以下实例中，用户id为2，server.js文件代码如下所示：

```js
const fs=require("fs");
const express=require("express");

var app = express()

var id=2;

app.get('/deleteUser', function(req, res) {
	// 首先我们读取已存在的用户
	fs.readFile(__dirname+"/"+"users.json","utf8",(err,data)=>{
		data=JSON.parse(data);
		delete data["user"+2];
		console.log(data);
		res.end(JSON.stringify(data));
	})
});


var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("应用实例，访问地址为 http:\/\/%s:%s", host, port)
});

// http://127.0.0.1:8081/2
```

----

# Node.js 多进程

Node.js本身是以单线程的模式运行的，但它使用的是事件驱动来处理并发，这样有助于我们在多核 cpu 的系统上创建多个子进程，从而提高性能。

每个子进程总是带有三个流对象：child.stdin, child.stdout和child.stderr。他们可能会共享父进程的stdio流，或者也可以是独立的被导流的流对象。

Node提供了child_process模块来创建子进程，方法有：

- **exec** - child_process.exec使用子进程执行命令，缓存子进程的输出，并将子进程的输出以回调函数参数的形式返回。
- **spawn** - child_process.spawn使用指定的命令行参数创建新进程。
- **fork** - child_process.fork是spawn()的特殊形式，用于在子进程中运行的模块，如fork('./son.js')相当于spawn('node', ['./son.js']) 。与spawn方法不同的是，fork会在父进程与子进程之间，建立一个通信管道，用于进程之间的通信。

## exec() 方法

child_process.exec使用子进程执行命令，缓存子进程的输出，并将子进程的输出以回调函数参数的形式返回。

语法如下所示：

```
child_process.exec(command[, options], callback)
```

参数说明如下：

**command：** 字符串， 将要运行的命令，参数使用空格隔开

**options ：对象，可以是：**

- cwd，字符串，子进程的当前工作目录
- env，对象，环境变量键值对
- encoding，字符串，字符编码（默认： 'utf8'）
- shell，字符串，将要执行命令的Shell（默认: 在UNIX中为`/bin/sh`， 在Windows中为`cmd.exe`， Shell应当能识别`-c`开关在UNIX中，或`/s /c`在 Windows中。 在Windows中，命令行解析应当能兼容`cmd.exe`）
- timeout，数字，超时时间（默认： 0）
- maxBuffer，数字， 在stdout或stderr中允许存在的最大缓冲（二进制），如果超出那么子进程将会被杀死（默认: 200*1024）
- killSignal，字符串，结束信号（默认：'SIGTERM'）
- uid，数字，设置用户进程的ID
- gid，数字，设置进程组的ID

**callback ：**回调函数，包含三个参数error, stdout和stderr。

exec()方法返回最大的缓冲区，并等待进程结束，一次性返回缓冲区的内容。

让我们创建两个js文件support.js和master.js。

support.js文件代码：

```js
console.log("进程 " + process.argv[2] + " 执行。" );
```

master.js文件代码：

```js
const fs=require("fs");
const child_process=require("child_process");

for (let i=0;i<3;i++){
	var workProcess=child_process.exec("node support.js "+i,(error,stdout,stderr)=>{
		if (error) {
			console.log(error.stack);
			console.log("Error code: "+error.code);
			console.log("Signal received: "+error.signal);
		}
		console.log("stdout: "+stdout);
		console.log("stderr: "+stderr);
	});
	workProcess.on("exit",(code)=>{
		console.log("子进程已退出，退出码 "+code);
	});
}
```

```bash
$ node master.js
子进程已退出，退出码 0
stdout: 进程 0 执行。

stderr:
子进程已退出，退出码 0
stdout: 进程 1 执行。

stderr:
子进程已退出，退出码 0
stdout: 进程 2 执行。

stderr:

```

## spawn() 方法

child_process.spawn使用指定的命令行参数创建新进程，语法格式如下：

```
child_process.spawn(command[, args][, options])
```

参数说明如下：

**command：** 将要运行的命令

**args：** Array字符串参数数组

**options Object**

- cwd：String，子进程的当前工作目录
- env：Object，环境变量键值对
- stdio：Array|String，子进程的stdio配置
- detached：Boolean，这个子进程将会变成进程组的领导
- uid：Number，设置用户进程的ID
- gid：Number，设置进程组的ID

spawn()方法返回流 (stdout & stderr)，在进程返回大量数据时使用。进程开始执行spawn()时就开始接收响应。

```js
const fs=require("fs");
const child_process=require("child_process");

for (let i=0;i<3;i++){
	var workProcess=child_process.spawn("node",["support.js",i]);
	workProcess.stdout.on("data",(data)=>{
		console.log("stdout: "+data);
	});
	workProcess.stderr.on("data",(data)=>{
		console.log("stderr: "+data);
	});
	workProcess.on("close",(code)=>{
		console.log("子进程已退出，退出码 "+code);
	});
}
```

```bash
$ node master.js
stdout: 进程 0 执行。

stdout: 进程 1 执行。

子进程已退出，退出码 0
子进程已退出，退出码 0
stdout: 进程 2 执行。

子进程已退出，退出码 0

```

## fork 方法

child_process.fork是spawn()方法的特殊形式，用于创建进程，语法格式如下：

```
child_process.fork(modulePath[, args][, options])
```

参数

参数说明如下：

**modulePath**： String，将要在子进程中运行的模块

**args**： Array，字符串参数数组

**options**：Object

- cwd：String，子进程的当前工作目录
- env：Object，环境变量键值对
- execPath：String，创建子进程的可执行文件
- execArgv：Array，子进程的可执行文件的字符串参数数组（默认： process.execArgv）
- silent：Boolean，如果为`true`，子进程的`stdin`，`stdout`和`stderr`将会被关联至父进程，否则，它们将会从父进程中继承。（默认为：`false`）
- uid：Number，设置用户进程的ID
- gid：Number，设置进程组的ID

返回的对象除了拥有ChildProcess实例的所有方法，还有一个内建的通信信道。

```js
const fs=require("fs");
const child_process=require("child_process");

for (let i=0;i<3;i++){
	var workProcess=child_process.fork("support.js",[i]);
	
	workProcess.on("close",(code)=>{
		console.log("子进程已退出，退出码 "+code);
	});
}
```

```bash
$ node master.js
进程 0 执行。
进程 1 执行。
子进程已退出，退出码 0
进程 2 执行。
子进程已退出，退出码 0
子进程已退出，退出码 0

```

---

# Node.js 连接 MySQL

### 安装

```bash
$ cnpm i mysql
√ Installed 1 packages
√ Linked 5 latest versions
√ Run 0 scripts
√ All packages installed (3 packages installed from npm registry, used 1s(network 1s), speed 198.29KB/s, json 3(18.86KB), tarball 224.24KB, manifests cache hit 2, etag hit 2 / miss 0)
```

### 连接数据库

在以下实例中根据你的实际配置修改数据库用户名、及密码及数据库名：

```js
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'test'
});
 
connection.connect();
 
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
```

