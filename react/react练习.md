# 扩展图片

```jsx
import React, {useState} from 'react';
import "./index.css"


export default function TestDemo() {
	const [imgArr, setImgArr] = useState([
		{id: "001", name: "Explore The World", active: true, url: "https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=8"},
		{id: "002", name: "Wild Forest", active: false, url: "https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"},
		{id: "003", name: "Sunny Beach", active: false, url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80"},
		{id: "004", name: "City on Winter", active: false, url: "https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"},
		{id: "005", name: "Mountains - Clouds", active: false, url: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"}
	]);
	const [id, setId] = useState("001");

	const expandCard = (newId) => {
		if (id !== newId) {
			imgArr.forEach((item, index) => {
				if (item.id === newId) {
					imgArr[index].active = true;
				}
				if (item.id === id) {
					imgArr[index].active = false;
				}
			});
			setImgArr([...imgArr]);
			setId(newId);
		}
	};
	return (
		<div className='container'>
			{
				imgArr.map((item, index) => {
					return (
						<div onClick={() => expandCard(item.id)} className={"panel" + (item.active ? " active" : "")} key={item.id} style={{backgroundImage: `url(${item.url})`}}>
							<h3>{item.name}</h3>
						</div>
					)
				})
			}
		</div>
	)
}

```

```css
* {
	box-sizing: border-box;
}
body {
	font-family: 'Muli' sans-serif;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
	overflow: hidden;
	margin: 0;
}
.container {
	display: flex;
	width: 98vw;
}
.panel {
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	height: 80vh;
	border-radius: 50px;
	color: #fff;
	cursor: pointer;
	flex: 0.5;
	margin: 10px;
	position: relative;
	-webkit-transition: all 700ms ease-in;
}
.panel h3 {
	font-size: 28px;
	position: absolute;
	bottom: 20px;
	left: 20px;
	margin: 0;
	opacity: 0;
}
.panel.active {
	flex: 5;
}
.panel.active h3 {
	opacity: 1;
	transition: opacity 0.3s ease-in 0.4s;
}
@media (max-width: 480px) {
	.container {
		width: 100vw;
	}
	.panel:nth-of-type(4),
	.panel:nth-of-type(5) {
		display: none;
	}
}
```



----

# 隐藏搜索框

```

```

