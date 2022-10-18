## 安装

`antd` 是基于 Ant Design 设计体系的 React UI 组件库，主要用于研发企业级中后台产品。

### 使用 npm 或 yarn 安装[#](https://ant.design/docs/react/introduce-cn#使用-npm-或-yarn-安装)

**我们推荐使用 npm 或 yarn 的方式进行开发**，不仅可在开发环境轻松调试，也可放心地在生产环境打包部署使用，享受整个生态圈和工具链带来的诸多好处。

```bash
$ npm install antd --save
$ yarn add antd
```

如果你的网络环境不佳，推荐使用 [cnpm](https://github.com/cnpm/cnpm)。



----

日期选择器

```jsx
import React, {useState} from 'react'

import {ConfigProvider, message, DatePicker, Alert} from 'antd';
import 'antd/dist/antd.css';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

export default function TestDemo() {
  const [date, setDate] = useState(null);
  const handleChange = value => {
    message.info(`您选择的日期是：${value ? value.format('YYYY年MM月DD日') : '未选择'}`);
    setDate(value);
  }
	return (
		<ConfigProvider locale={zhCN}>
      <div style={{width: 400, margin: '100px auto'}}>
        <DatePicker onChange={handleChange} />
        <div style={{ marginTop: 16}}>
          {/* 当前日期：{date ? date.format('YYYY年MM月DD日') : '未选择'} */}
          <Alert message="当前日期" description={date ? date.format('YYYY年MM月DD日') : '未选择'} />
        </div>
      </div>
    </ConfigProvider>
	)
}
```



----

