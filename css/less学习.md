

Less （Leaner Style Sheets 的缩写） 是一门向后兼容的 CSS 扩展语言。



## 安装

通过 [npm](https://www.npmjs.org/) 安装

在 Node.js 环境中使用 Less ：

```bash
npm install -g less

lessc styles.less styles.css
```

`-g` 参数表示将 `lessc` 命令安装到全局环境。对于特定版本（或 tag），你可以在软件包（package）名称后面添加 `@VERSION` ，例如 `npm install less@2.7.1 -g`。

### 针对 Node Development 配置段安装 Less

或者，如果你不想将编译器安装到全局环境，则可以

```bash
npm i less --save-dev
```

这将在项目文件夹中安装 lessc 的最新正式版本，并将其添加到 `package.json` 文件中的 `devDependencies` 配置段中。

## 服务器端和命令行用法

该仓库中包含的二进制文件 `bin/lessc` 能够在 *nix、OS X 和 Windows 平台上的 [Node.js](http://nodejs.org/) 上运行。

**用法**： `lessc [option option=parameter ...] <source> [destination]`

### 命令行用法

```bash
lessc [option option=parameter ...] <source> [destination]
```

如果 source 设置为 `-` （破折号或连字符减号），则从 stdin 读取输入。

#### 示例

将 bootstrap.less 编译为 bootstrap.css

```bash
lessc bootstrap.less bootstrap.css
```



在浏览器环境中使用 Less ：

```html
<link rel="stylesheet/less" type="text/css" href="styles.less" />
<script src="https://cdn.jsdelivr.net/npm/less@4" ></script>
```





