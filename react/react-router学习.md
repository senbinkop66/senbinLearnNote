## 安装

本文档描述了人们通过 React 生态系统中的各种工具使用 React Router 的最常见方式。

### 基本安装

大多数现代 React 项目使用像[npm](https://www.npmjs.com/)或[Yarn](https://yarnpkg.com/)这样的包管理器来管理它们的依赖项。要将 React Router 添加到现有项目，您应该做的第一件事是使用您选择的工具安装必要的依赖项：

npm

```bash
npm i react-router
npm install react-router-dom@6
```

yarn

```
yarn add react-router-dom@6
```

pnpm

```
 pnpm add react-router-dom@6
```

### Create React App

按照[React 文档中的说明使用 Create React App 设置一个新项目](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app)，然后按照[上面的安装说明](https://reactrouter.com/docs/en/v6/getting-started/installation#basic-installation)在您的项目中安装 React Router。

设置好项目并将 React Router 作为依赖项安装后，`src/index.js`在文本编辑器中打开。`BrowserRouter`从文件顶部附近导入`react-router-dom`并将您的应用程序包装在`<BrowserRouter>`：

```jsx
import * as React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
```

现在您可以在应用程序的任何地方使用 React Router！举个简单的例子，打开`src/App.js`并用一些路由替换默认标记：

```jsx
import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}
```

现在，仍然在 中`src/App.js`，创建您的路由组件：

```jsx
// App.js
function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}
```

继续通过运行来启动您的应用程序，当您的应用程序开始运行时`npm start`，您应该会看到`Home`路线。点击“关于”链接查看您的`<About>`路线，瞧！您已经使用 Create React App 成功设置了 React Router！🥳

当需要将您的应用程序部署到生产环境时，请务必按照[Create React App 的说明](https://create-react-app.dev/docs/deployment#serving-apps-with-client-side-routing)使用 React Router 进行部署，以确保您的服务器配置正确。

----

## 教程

React Router 是一个用于 React 的全功能客户端和服务器端路由库，它是一个用于构建用户界面的 JavaScript 库。React Router 可以在任何 React 运行的地方运行；在 web 上，在带有 node.js 的服务器上，以及在 React Native 上。

### 链接URL

首先，我们希望将您的应用程序连接到浏览器的 URL：导入`BrowserRouter`并在整个应用程序周围呈现它。

```jsx
// src/main.jsx
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

您的应用程序没有任何变化，但现在我们已准备好开始处理 URL。

----

### 添加一些Link

打开`src/App.js`，导入`Link`并添加一些全局导航。旁注：在本教程中不要太认真地对待样式，我们只是为了方便而使用内联样式，为您的应用程序设置您想要的样式。

```jsx
// src/App.js
import { Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>Bookkeeper</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
    </div>
  );
}
```

继续并单击链接和后退/前进按钮（如果您使用的是 StackBlitz，则需要单击内联浏览器工具栏中的“在新窗口中打开”按钮）。React Router 现在正在控制 URL！

我们还没有在 URL 更改时呈现的任何路由，但 Link 正在更改 URL 而不会导致整个页面重新加载。

### 添加一些Route

添加几个新文件：

- `src/routes/invoices.jsx`
- `src/routes/expenses.jsx`

（文件的位置无关紧要，但是当您决定为此应用程序需要自动后端 API、服务器渲染、代码拆分捆绑程序等时，以这种方式命名您的文件可以轻松将此应用程序移植到我们的另一个项目，[Remix](https://remix.run/)😉）

现在用一些代码填充它们：

```jsx
//  src/routes/expenses.jsx
export default function Expenses() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Expenses</h2>
    </main>
  );
}

// src/routes/invoice.jsx
export default function Invoices() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Invoices</h2>
    </main>
  );
}
```

最后，让我们通过在 main.jsx 或 index.js 中创建我们的第一个“路由配置”来教 React Router 如何在不同的 URL 上渲染我们的应用程序。

```jsx
// main.js
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import Expenses from "./routes/expenses";
import Invoices from "./routes/invoices";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="expenses" element={<Expenses />} />
      <Route path="invoices" element={<Invoices />} />
    </Routes>
  </BrowserRouter>
);
```

注意`"/"`它呈现`<App>`. 在`"/invoices"`它呈现`<Invoices>`. 干得好！

----

### 嵌套路由

`App`单击布局消失的链接时，您可能已经注意到。重复共享布局是一件令人头疼的事情。我们了解到，大多数 UI 都是一系列嵌套布局，几乎总是映射到 URL 的片段，因此这个想法直接融入了 React Router。

让我们通过做两件事来获得一些自动的、持久的布局处理：

1. 将路由嵌套在 App 路由中
2. 渲染Outlet

首先让我们嵌套路由。现在费用和发票路由是应用程序的兄弟，我们想让它们成为应用程序路由的*子*路由：

```jsx
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import Expenses from "./routes/expenses";
import Invoices from "./routes/invoices";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
```

当路由有孩子时，它会做两件事：

1. 它嵌套了 URL (`"/" + "expenses"`和`"/" + "invoices"`)
2. 当子路由匹配时，它将嵌套 UI 组件以进行共享布局：

但是，在 (2) 起作用之前，我们需要`Outlet`在`App.jsx`“父”路由中渲染一个。

```jsx
import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>Bookkeeper</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet />
    </div>
  );
}
```

现在再次单击。父路由 ( `App.js`)`<Outlet>`在两个子路由 (`<Invoices>`和`<Expenses>`) 之间交换时仍然存在！

正如我们稍后将看到的，这适用于路由层次结构的*任何级别*，并且非常强大。

-----

### 列出Invoices

通常你会从某处的服务器获取数据，但在本教程中，让我们硬编码一些虚假的东西，这样我们就可以专注于路由。

在此处创建一个文件`src/data.js`并将其复制/粘贴到那里：

```js
// src/data/js
let invoices = [
  {
    name: "Santa Monica",
    number: 1995,
    amount: "$10,800",
    due: "12/05/1995",
  },
  {
    name: "Stankonia",
    number: 2000,
    amount: "$8,000",
    due: "10/31/2000",
  },
  {
    name: "Ocean Avenue",
    number: 2003,
    amount: "$9,500",
    due: "07/22/2003",
  },
  {
    name: "Tubthumper",
    number: 1997,
    amount: "$14,000",
    due: "09/01/1997",
  },
  {
    name: "Wide Open Spaces",
    number: 1998,
    amount: "$4,600",
    due: "01/27/1998",
  },
];

export function getInvoices() {
  return invoices;
}
```

现在我们可以在发票路由中使用它。让我们还添加一些样式来进行侧边栏导航布局。随意复制/粘贴所有这些，但要特别注意`<Link>`elements 属性`to`：

```jsx
import { Link } from "react-router-dom";
import { getInvoices } from "../data";

export default function Invoices() {
  let invoices = getInvoices();
  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        {invoices.map((invoice) => (
          <Link
            style={{ display: "block", margin: "1rem 0" }}
            to={`/invoices/${invoice.number}`}
            key={invoice.number}
          >
            {invoice.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
```

凉爽的！现在单击发票链接，看看会发生什么。

----

###  添加“未匹配”路由

这并没有像您预期的那样进行。如果您单击这些链接，页面将变为空白！那是因为我们定义的路由都不匹配我们链接到的 URL：`"/invoices/123"`。

在我们继续之前，最好总是处理这种“不匹配”的情况。返回到您的路线配置并添加以下内容：

```jsx
<Routes>
  <Route path="/" element={<App />}>
    <Route path="expenses" element={<Expenses />} />
    <Route path="invoices" element={<Invoices />} />
    <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
  </Route>
</Routes>
```

在这里`"*"`有特殊的含义。只有在没有其他路由匹配时才会匹配。

###  读取 URL 参数

好的，回到各个发票 URL。让我们为特定发票添加路由。我们刚刚访问了一些 URL，例如`"/invoices/1998"`和`"/invoices/2005"`，让我们创建一个新组件 at`src/routes/invoice.jsx`来呈现这些 URL：

```jsx
export default function Invoice() {
  return <h2>Invoice #???</h2>;
}
```

我们想呈现发票编号而不是`"???"`. 通常在 React 中，您会将其作为 prop: 传递`<Invoice invoiceId="123" />`，但您无法控制该信息，因为它来自 URL。

让我们定义一个匹配这些类型的 URL 的路由，并使我们能够从中获取发票编号。

在“发票”路线中创建一个新的`<Route>` *内部，如下所示：*

```jsx
<Routes>
  <Route path="/" element={<App />}>
    <Route path="expenses" element={<Expenses />} />
    <Route path="invoices" element={<Invoices />}>
      <Route path=":invoiceId" element={<Invoice />} />
    </Route>
    <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
  </Route>
</Routes>
```

有几点需要注意：

- 我们刚刚创建了一个与“/invoices/2005”和“/invoices/1998”等网址匹配的路由。路径的`:invoiceId`一部分是“URL 参数”，这意味着只要模式相同，它就可以匹配任何值。
- 匹配时添加第二`<Route>`层路由嵌套：`<App><Invoices><Invoice /></Invoices></App>`. 因为`<Route>`是嵌套的，所以 UI 也会嵌套。

好的，现在点击发票的链接，注意 URL 发生了变化，但新的发票组件尚未显示。你知道为什么吗？

这是正确的！我们需要为父布局路由添加一个出口（我们真的为你感到骄傲）。

```jsx
import { Link, Outlet } from "react-router-dom";
import { getInvoices } from "../data";

export default function Invoices() {
  let invoices = getInvoices();
  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        {invoices.map((invoice) => (
          <Link
            style={{ display: "block", margin: "1rem 0" }}
            to={`/invoices/${invoice.number}`}
            key={invoice.number}
          >
            {invoice.name}
          </Link>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}
```

好的，让我们在这里关闭圆圈。再次打开发票组件，让我们`:invoiceId`从 URL 中获取参数：

```jsx
import { useParams } from "react-router-dom";

export default function Invoice() {
  let params = useParams();
  return <h2>Invoice { params.invoiceId }</h2>;
}
```

注意`params`对象上的param的key和路由路径中的动态段是一样的：

```
:invoiceId -> params.invoiceId
```

让我们使用这些信息来构建一个更有趣的发票页面。打开`src/data.js`并添加一个新功能以按编号查找发票：

```js
export function getInvoices() {
  return invoices;
}

export function getInvoice(number) {
  return invoices.find((invoice) => invoice.number === number);
}
```

现在回到`invoice.jsx`我们使用参数来查找发票并显示更多信息：

```jsx
import { useParams } from "react-router-dom";
import { getInvoice } from "../assets/data.js"

export default function Invoice() {
  let params = useParams();
  let invoice = getInvoice(parseInt(params.invoiceId, 10))
  return (
    <main style={{ padding: "1rem" }}>
      <h2>Total Due: {invoice.amount}</h2>
      <p>
        {invoice.name}: {invoice.number}
      </p>
      <p>Due Date: {invoice.due}</p>
    </main>
  );
}
```

请注意，我们`parseInt`在参数周围使用。您的数据查找使用`number`类型很常见，但 URL 参数始终是`string`.

----

### 索引路由

索引路由可能是 React Router 中人们最难理解的概念。因此，如果您以前遇到过困难，我们希望这可以为您澄清。

现在，您可能正在查看其中一张发票。单击应用程序全局导航中的“发票”链接。请注意，主要内容区域变为空白！我们可以用“索引”路由来解决这个问题。

```jsx
<Routes>
  <Route path="/" element={<App />}>
    <Route path="expenses" element={<Expenses />} />
    <Route path="invoices" element={<Invoices />}>
      <Route
        index
        element={
          <main style={{ padding: "1rem" }}>
            <p>Select an invoice</p>
          </main>
        }
      />
      <Route path=":invoiceId" element={<Invoice />} />
    </Route>
    <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
  </Route>
</Routes>
```

甜的！现在索引路由填补了空白！

注意**它有`index`prop 而不是 a `path`**。那是因为索引路由共享父路径。这就是重点——**它没有路径**。

也许你还在摸不着头脑。我们尝试通过几种方式来回答“什么是索引路由？”这个问题。希望其中一根适合您：

- 索引路由在父路由路径的父路由出口中呈现。
- 当父路由匹配但其他子路由都不匹配时，索引路由匹配。
- **索引路由是父路由的默认子路由。**
- 当用户尚未单击导航列表中的一项时，会呈现索引路由。

---

### Active Link

将链接显示为用户正在查看的活动链接是很常见的，尤其是在导航列表中。让我们将这种处理方式换成`Link`.`NavLink`

```jsx
import { NavLink, Outlet } from "react-router-dom";
import { getInvoices } from "../data";

export default function Invoices() {
  let invoices = getInvoices();
  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        {invoices.map((invoice) => (
          <NavLink
            style={({ isActive }) => {
              return {
                display: "block",
                margin: "1rem 0",
                color: isActive ? "red" : "",
              };
            }}
            to={`/invoices/${invoice.number}`}
            key={invoice.number}
          >
            {invoice.name}
          </NavLink>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}
```

我们在那里做了三件事：

1. 我们换`Link`了`NavLink`。
2. 我们将它`style`从一个简单的对象更改为一个返回对象的函数。
3. 我们通过查看传递给样式函数的`isActive`值来更改链接的颜色。`NavLink`

你可以用`className`on做同样的事情`NavLink`：

```jsx
// normal string
<NavLink className="red" />

// function
<NavLink className={({ isActive }) => isActive ? "red" : "blue"} />
```

---

### Search Params

搜索参数类似于 URL 参数，但它们位于 URL 中的不同位置。它们不是位于由 分隔的普通 URL 段中`/`，而是位于 . 之后的末尾`?`。您已经在网络上看到过它们，例如`"/login?success=1"`或`"/shoes?brand=nike&sort=asc&sortby=price"`。

React Router 使使用`useSearchParams`. 它的工作原理很像`React.useState()`，但在 URL 搜索参数中而不是在内存中存储和设置状态。

让我们通过在发票导航列表上添加一个小过滤器来查看它的实际效果。

```jsx
import {
  NavLink,
  Outlet,
  useSearchParams,
} from "react-router-dom";
import { getInvoices } from "../data";

export default function Invoices() {
  let invoices = getInvoices();
  let [searchParams, setSearchParams] = useSearchParams();

  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        <input
          value={searchParams.get("filter") || ""}
          onChange={(event) => {
            let filter = event.target.value;
            if (filter) {
              setSearchParams({ filter });
            } else {
              setSearchParams({});
            }
          }}
        />
        {invoices
          .filter((invoice) => {
            let filter = searchParams.get("filter");
            if (!filter) return true;
            let name = invoice.name.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
          .map((invoice) => (
            <NavLink
              style={({ isActive }) => ({
                display: "block",
                margin: "1rem 0",
                color: isActive ? "red" : "",
              })}
              to={`/invoices/${invoice.number}`}
              key={invoice.number}
            >
              {invoice.name}
            </NavLink>
          ))}
      </nav>
      <Outlet />
    </div>
  );
}
```

看看这个，因为用户输入：

- `setSearchParams()`将`?filter=...`搜索参数放入 URL 并重新呈现路由器。
- `useSearchParams`现在返回 a作为其值之一[`URLSearchParams`](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams)。`"filter"`
- 我们将输入的值设置为过滤器搜索参数中的任何内容（就像`useState`但在 URLSearchParams 中！）
- 我们根据过滤器搜索参数过滤我们的发票列表。

---

###  自定义行为

如果您过滤列表然后单击一个链接，您会注意到列表不再被过滤，并且搜索参数从`<input>`URL 和 URL 中清除。你可能想要这个，你可能不想要！也许您希望过滤列表并将参数保留在 URL 中。

当我们单击链接时，我们可以通过将查询字符串添加到链接的 href 中来保留查询字符串。 我们将通过将来自 React Router 的 NavLink 和 useLocation 组合到我们自己的 QueryNavLink 中来做到这一点（也许有一个更好的名称，但这就是我们今天要使用的名称）。

```jsx
import { useLocation, NavLink } from "react-router-dom";

function QueryNavLink({ to, ...props }) {
  let location = useLocation();
  return <NavLink to={to + location.search} {...props} />;
}
```

您可以将该代码放在应用程序中您想要的任何位置，然后将您的`NavLink`in`src/routes/invoices.jsx`替换为`QueryNavLink`您就完成了。

Like `useSearchParams`，`useLocation`返回一个位置，告诉我们有关 URL 的信息。位置看起来像这样：

```json
{
  pathname: "/invoices",
  search: "?filter=sa",
  hash: "",
  state: null,
  key: "ae4cz2j"
}
```

有了这些信息，任务`QueryNavLink`就很简单了：把`location.search`加到`to`道具上。你可能会想，“天哪，看起来这应该是 React Router 的内置组件之类的？”。好吧，让我们看另一个例子。

如果您在电子商务网站上有这样的链接怎么办。

```jsx
<Link to="/shoes?brand=nike">Nike</Link>
<Link to="/shoes?brand=vans">Vans</Link>
```

然后，当 url 搜索参数与品牌匹配时，您想将它们设置为“活动”吗？您可以使用您在本教程中学到的东西制作一个非常快速的组件：

```jsx
function BrandLink({ brand, ...props }) {
  let [params] = useSearchParams();
  let isActive = params.getAll("brand").includes(brand);
  return (
    <Link
      style={{ color: isActive ? "red" : "" }}
      to={`/shoes?brand=${brand}`}
      {...props}
    />
  );
}
```

这将是活跃的`"/shoes?brand=nike"`以及`"/shoes?brand=nike&brand=vans"`。当只选择一个品牌时，也许您希望它处于活动状态：

```jsx
let brands = params.getAll("brand");
let isActive =
  brands.includes(brand) && brands.length === 1;
// ...
```

或者，也许您希望链接是*附加*的（单击 Nike，然后 Vans 将这两个品牌添加到搜索参数中）而不是替换品牌：

```jsx
function BrandLink({ brand, ...props }) {
  let [params] = useSearchParams();
  let isActive = params.getAll("brand").includes(brand);
  if (!isActive) {
    params.append("brand", brand);
  }
  return (
    <Link
      style={{ color: isActive ? "red" : "" }}
      to={`/shoes?${params.toString()}`}
      {...props}
    />
  );
}
```

或者，如果品牌尚不存在，您可能希望它添加品牌，如果再次单击，则将其删除！

```jsx
function BrandLink({ brand, ...props }) {
  let [params] = useSearchParams();
  let isActive = params.getAll("brand").includes(brand);
  if (!isActive) {
    params.append("brand", brand);
  } else {
    params = new URLSearchParams(
      Array.from(params).filter(
        ([key, value]) => key !== "brand" || value !== brand
      )
    );
  }
  return (
    <Link
      style={{ color: isActive ? "red" : "" }}
      to={`/shoes?${params.toString()}`}
      {...props}
    />
  );
}
```

如您所见，即使在这个相当简单的示例中，您也可能需要很多有效的行为。React Router 不会尝试直接解决我们听说过的所有用例。相反，我们为您提供组件和挂钩来组合您需要的任何行为。

---

###  编程式导航

好的，回到我们的应用程序。坚持住，你几乎完成了！

大多数情况下，URL 更改是为了响应用户单击链接。但有时您，程序员，想要更改 URL。一个非常常见的用例是在创建或删除记录等数据更新之后。

让我们添加一个将发票标记为已付款的按钮，然后导航到索引路径。

首先，您可以复制并粘贴此功能，该功能可从我们的虚假数据存储中删除发票：

```js
export function deleteInvoice(number) {
  invoices = invoices.filter(
    (invoice) => invoice.number !== number
  );
}
```

现在让我们添加删除按钮，调用我们的新函数，然后导航到索引路由：

```jsx
import {
  useParams,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { getInvoice, deleteInvoice } from "../data";

export default function Invoice() {
  let navigate = useNavigate();
  let location = useLocation();
  let params = useParams();
  let invoice = getInvoice(parseInt(params.invoiceId, 10));

  return (
    <main style={{ padding: "1rem" }}>
      <h2>Total Due: {invoice.amount}</h2>
      <p>
        {invoice.name}: {invoice.number}
      </p>
      <p>Due Date: {invoice.due}</p>
      <p>
        <button
          onClick={() => {
            deleteInvoice(invoice.number);
            navigate("/invoices" + location.search);
          }}
        >
          Delete
        </button>
      </p>
    </main>
  );
}
```

请注意，我们再次通过添加到导航链接来`useLocation`保存查询字符串。`location.search`

----

#  常见问题

以下是人们通常对 React Router v6 提出的一些问题：

## What happened to withRouter? I need it!

这个问题通常源于您使用的是不支持钩子的 React 类组件。在 React Router v6 中，我们完全接受了钩子并使用它们来共享所有路由器的内部状态。但这并不意味着您不能使用路由器。假设您实际上可以使用钩子（您使用的是 React 16.8+），您只需要一个包装器。

```jsx
import {
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }

  return ComponentWithRouterProp;
}
```

##  为什么`<Route>`有一个`element`prop 而不是`render`or `component`？

在 React Router v6 中，我们从使用 v5`<Route component>`和`<Route render>`API 切换到`<Route element>`. 这是为什么？

对于初学者，我们看到 React 本身在`<Suspense fallback={<Spinner />}>`API 方面处于领先地位。`fallback`prop 采用 React元素**，**而不是**组件**。这使您可以轻松地将所需的任何道具`<Spinner>`从呈现它的组件传递给您。

使用元素而不是组件意味着我们不必提供`passProps`-style API，因此您可以获得元素所需的道具。例如，在基于组件的 API 中，没有好的方法可以将 props 传递给匹配`<Profile>`时呈现的元素。`<Route path=":userId" component={Profile} />`大多数采用这种方法的 React 库最终要么使用类似 API，要么`<Route component={Profile} passProps={{ animate: true }} />`使用渲染道具或高阶组件。

此外，`Route`v5 中的渲染 API 相当大。当我们在 v4/5 上工作时，对话是这样的：

```jsx
// Ah, this is nice and simple!
<Route path=":userId" component={Profile} />

// But wait, how do I pass custom props to the <Profile> element??
// Hmm, maybe we can use a render prop in those situations?
<Route
  path=":userId"
  render={routeProps => (
    <Profile routeProps={routeProps} animate={true} />
  )}
/>

// Ok, now we have two ways to render something with a route. :/

// But wait, what if we want to render something when a route
// *doesn't* match the URL, like a Not Found page? Maybe we
// can use another render prop with slightly different semantics?
<Route
  path=":userId"
  children={({ match }) => (
    match ? (
      <Profile match={match} animate={true} />
    ) : (
      <NotFound />
    )
  )}
/>

// What if I want to get access to the route match, or I need
// to redirect deeper in the tree?
function DeepComponent(routeStuff) {
  // got routeStuff, phew!
}
export default withRouter(DeepComponent);

// Well hey, now at least we've covered all our use cases!
// ... *facepalm*
```

这种 API 蔓延的至少部分原因是 React 没有为我们提供任何方法来从`<Route>`路由元素获取信息，因此我们必须发明巧妙的方法来获取路由数据**和**您自己的自定义 props到你的元素：`component`，渲染道具，`passProps`高阶组件......直到**钩子**出现！

现在，上面的对话是这样的：

```jsx
// Ah, nice and simple API. And it's just like the <Suspense> API!
// Nothing more to learn here.
<Route path=":userId" element={<Profile />} />

// But wait, how do I pass custom props to the <Profile>
// element? Oh ya, it's just an element. Easy.
<Route path=":userId" element={<Profile animate={true} />} />

// Ok, but how do I access the router's data, like the URL params
// or the current location?
function Profile({ animate }) {
  let params = useParams();
  let location = useLocation();
}

// But what about components deep in the tree?
function DeepComponent() {
  // oh right, same as anywhere else
  let navigate = useNavigate();
}

// Aaaaaaaaand we're done here.
```

`element`在 v6 中使用 prop 的另一个重要原因是它`<Route children>`是为嵌套路由保留的。您可以在v6[入门指南](https://reactrouter.com/docs/en/v6/getting-started/overview#nested-routes)中阅读更多相关信息。

##  如何在 react-router v6 中添加不匹配 (404) 路由？

在 v4 中，我们只是将路径道具留在了路线之外。在 v5 中，我们会将 404 元素包装在 Route 中并使用`path="*"`. 在 v6 中使用新的 element 属性，`path="*"`改为传递：

```jsx
<Route path="*" element={<NoMatch />} />
```

## `<Route>` doesn't render? How do I compose?

在 v5 中，`<Route>`组件只是一个普通组件，就像`if`当 URL 匹配其路径时呈现的语句。在 v6 中，`<Route>`元素实际上不会渲染，它只是用于配置。

在 v5 中，由于路由只是组件，`MyRoute`因此将在路径为“/my-route”时呈现。

```jsx
let App = () => (
  <div>
    <MyRoute />
  </div>
);

let MyRoute = ({ element, ...rest }) => {
  return (
    <Route path="/my-route" children={<p>Hello!</p>} />
  );
};
```

然而，在 v6 中，`<Route>`仅用于其道具，因此以下代码将永远不会呈现`<p>Hello!</p>`，因为`<MyRoute>`没有`<Routes>`可以看到的路径：

```jsx
let App = () => (
  <Routes>
    <MyRoute />
  </Routes>
);

let MyRoute = () => {
  // won't ever render because the path is down here
  return (
    <Route path="/my-route" children={<p>Hello!</p>} />
  );
};
```

您可以通过以下方式获得相同的行为：

- 只渲染`<Route>`里面的元素`<Routes>`
- 将构图移动到`element`道具中

```jsx
let App = () => (
  <div>
    <Routes>
      <Route path="/my-route" element={<MyRoute />} />
    </Routes>
  </div>
);

let MyRoute = () => {
  return <p>Hello!</p>;
};
```

拥有静态可用的完整嵌套路由配置`<Routes>`将启用 中的许多功能`v6.x`，因此我们鼓励您将路由放在一个顶级配置中。如果您真的喜欢独立于任何其他组件匹配 URL 的组件的想法，您可以制作一个行为类似于 v5 的组件，`Route`如下所示：

```jsx
function MatchPath({ path, Comp }) {
  let match = useMatch(path);
  return match ? <Comp {...match} /> : null;
}

// Will match anywhere w/o needing to be in a `<Routes>`
<MatchPath path="/accounts/:id" Comp={Account} />;
```

##  如何在树的深处嵌套路由？

在 v5 中，您可以渲染 a`<Route>`或`<Switch>`您想要的任何位置。你可以继续做同样的事情，但你需要使用`<Routes>`（`<Route>`没有's'将不起作用）。我们称这些为“后裔`<Routes>`”。

在 v5 中可能看起来像这样

```jsx
// somewhere up the tree
<Switch>
  <Route path="/users" component={Users} />
</Switch>;

// and now deeper in the tree
function Users() {
  return (
    <div>
      <h1>Users</h1>
      <Switch>
        <Route path="/users/account" component={Account} />
      </Switch>
    </div>
  );
}
```

在 v6 中几乎相同：

- 请注意`*`祖先路由中的 ，以使其匹配更深的 URL，即使它没有直接子级
- 您不再需要知道整个子路由路径，您现在可以使用相对路由

```jsx
// somewhere up the tree
<Routes>
  <Route path="/users/*" element={<Users />} />
</Routes>;

// and now deeper in the tree
function Users() {
  return (
    <div>
      <h1>Users</h1>
      <Routes>
        <Route path="account" element={<Account />} />
      </Routes>
    </div>
  );
}
```

如果您在 v5 中有一个“浮动路线”（未包装在 a 中`<Switch>`），只需将其包装在 a 中即可`<Routes>`。

```jsx
// v5
<Route path="/contact" component={Contact} />

// v6
<Routes>
  <Route path="contact" element={<Contact />} />
</Routes>
```

##  Regexp 路由路径发生了什么？

删除 Regexp 路由路径有两个原因：

1. 路由中的正则表达式路径对 v6 的排名路由匹配提出了很多问题。您如何对正则表达式进行排名？
2. 我们能够摆脱整个依赖项（路径到正则表达式）并显着减少发送到用户浏览器的包重量。如果加回来，它将代表 React Router 页面权重的 1/3！

在查看了很多用例之后，我们发现我们仍然可以在没有直接正则表达式路径支持的情况下满足它们，因此我们做出权衡以显着减小包大小并避免围绕正则表达式路径排名的开放性问题。

大多数正则表达式路由一次只关注一个 URL 段并做以下两件事之一：

1. 匹配多个静态值
2. 以某种方式验证参数（是数字，不是数字等）

**匹配一般静态值**

我们看到的一个非常常见的路线是匹配多个语言代码的正则表达式：

```jsx
function App() {
  return (
    <Switch>
      <Route path={/(en|es|fr)/} component={Lang} />
    </Switch>
  );
}

function Lang({ params }) {
  let lang = params[0];
  let translations = I81n[lang];
  // ...
}
```

这些实际上都只是静态路径，因此在 v6 中您可以创建三个路由并将代码直接传递给组件。如果您有很多，请创建一个数组并将其映射到路由中以避免重复。

```jsx
function App() {
  return (
    <Routes>
      <Route path="en" element={<Lang lang="en" />} />
      <Route path="es" element={<Lang lang="es" />} />
      <Route path="fr" element={<Lang lang="fr" />} />
    </Routes>
  );
}

function Lang({ lang }) {
  let translations = I81n[lang];
  // ...
}
```

**进行某种参数验证**

另一个常见的情况是确保参数是整数。

```jsx
function App() {
  return (
    <Switch>
      <Route path={/users\/(\d+)/} component={User} />
    </Switch>
  );
}

function User({ params }) {
  let id = params[0];
  // ...
}
```

在这种情况下，您必须自己使用匹配组件中的正则表达式做一些工作：

```jsx
function App() {
  return (
    <Routes>
      <Route path="/users/:id" element={<ValidateUser />} />
      <Route path="/users/*" element={<NotFound />} />
    </Routes>
  );
}

function ValidateUser() {
  let params = useParams();
  let userId = params.id.match(/\d+/);
  if (!userId) {
    return <NotFound />;
  }
  return <User id={params.userId} />;
}

function User(props) {
  let id = props.id;
  // ...
}
```

在 v5 中，如果正则表达式不匹配，`<Switch>`则将继续尝试匹配下一个路由：

```jsx
function App() {
  return (
    <Switch>
      <Route path={/users\/(\d+)/} component={User} />
      <Route path="/users/new" exact component={NewUser} />
      <Route
        path="/users/inactive"
        exact
        component={InactiveUsers}
      />
      <Route path="/users/*" component={NotFound} />
    </Switch>
  );
}
```

查看此示例，您可能会担心在 v6 版本中，您的其他路由不会在其 URL 处呈现，因为该`:userId`路由可能首先匹配。但是，由于路线排名，情况并非如此。“新”和“非活动”路由将排名更高，因此在各自的 URL 处呈现：

```jsx
function App() {
  return (
    <Routes>
      <Route path="/users/:id" element={<ValidateUser />} />
      <Route path="/users/new" element={<NewUser />} />
      <Route
        path="/users/inactive"
        element={<InactiveUsers />}
      />
    </Routes>
  );
}
```

事实上，如果你的路由排序不*正确*，v5 版本会出现各种各样的问题。V6 完全消除了这个问题。

----

