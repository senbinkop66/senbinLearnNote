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

```jsx
import React, {useState} from 'react';
import "./index.css"


export default function TestDemo() {
	const [show, setShow] = useState(true);
	return (
		<div className='container'>
			<div className={'search' + (show ? ' active' : "")}>
				<input type="text" className="input" placeholder="search..."/>
				<button className="btn" onClick={() => setShow(!show)}>
					<i className="fas fa-search"></i>
				</button>
			</div>
		</div>
	)
}

```

```css

@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css');
.container {
  background-image: linear-gradient(90deg, #7d5fff, #7158e2);
  font-family: 'Roboto', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10vh;
  overflow: hidden;
  margin: 0;
}
.search {
	position: relative;
	height: 50px;
}
.search .input {
	background-color: #fff;
	border: 0;
	font-size: 18px;
	padding: 15px;
	height: 50px;
	width: 50px;
	transition: width 0.3s ease;
}
.btn {
	background-color: #fff;
	border: 0;
	cursor: pointer;
	font-size: 24px;
	position: absolute;
	top: 0;
	left: 0;
	width: 50px;
	height: 50px;
	transition: transform  0.3s ease;
}
.btn:focus, .input:focus {
	outline: none;
}
.search.active .input {
	width: 200px;
}
.search.active .btn {
	transform: translateX(198px);
}
```



----

# 模糊加载



```jsx
import React, {useState, useEffect, useRef} from 'react';
import "./index.css"


export default function TestDemo() {
	const [load, setLoad] = useState(0);
	let interval = useRef();

	useEffect(() => {
		if(load < 100) {
			interval.current = setInterval(() => {
				setLoad(pre => pre + 1);
			}, 30);
		} else {
			clearInterval(interval.current);
		}
		return () => clearInterval(interval.current);
	}, [load]);

	const scale = (num, in_min, in_max, out_min, out_max) => {
		return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
	}

	return (
		<div className='container'>
			<section className='bg'  style={{filter: `blur(${scale(load, 0, 100, 30, 0)}px)`}}></section>
			<div className='loading-text' style={{opacity: scale(load, 0, 100, 1, 0)}}>
				{load}%
			</div>
		</div>
	)
}

```

```css
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css');
@import url('https://fonts.googleapis.com/css?family=Ubuntu');

.container {
  font-family: 'Ubuntu', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
}
.bg {
  background: url('https://images.unsplash.com/photo-1576161787924-01bb08dad4a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2104&q=80')
    no-repeat center center/cover;
  position: absolute;
  top: -30px;
  left: -30px;
  width: calc(100vw + 60px);
  height: calc(100vh + 60px);
  z-index: -1;
  filter: blur(0px);
}
.loading-text {
  font-size: 50px;
  color: #fff;
}
```



----

