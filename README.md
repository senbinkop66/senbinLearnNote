####  请问什么是函数防抖？什么是函数节流？

**函数防抖**(debounce)：触发高频事件后n秒内，函数只会执行一次，如果n秒内高频事件再次被触发，则重新计算时间

**函数节流**(throttle)：高频事件触发，但在n秒内只会执行一次，所以节流会稀释函数的执行频率

两者**都是为了限制函数的执行频次**，以优化函数触发频率过高导致的响应速度跟不上触发频率，出现延迟，假死或卡顿的现象

可结合下图对两者进行区分：

![img](https://uploadfiles.nowcoder.com/images/20211008/897353_1633667352451/6AF15ACD40C68A84BAD11D4A2F5981F6)

**防抖：**

实现思路：在事件被触发n秒后再执行回调函数，如果在这n秒内又被触发，则重新计时

特点：如果事件在规定的时间间隔内被不断的触发，则调用方法被不断的延迟，**当遇到不断触发但是仍然需要触发的情况，应该选用节流**

只有当高频事件停止，**最后一次事件触发的超时调用才能在wait时间后执行**

```js
function debounce(fn,wait){
	var timeout;  //用来存放定时器的返回值，一触发就重新计时
	return function(){
		var context=this;
		//把前一个 setTimeout clear 掉
		clearTimeout(timeout);
		//又创建一个新的 setTimeout,保障间隔时间内持续触发，不会执行fn函数
		timeout=setTimeout(function(){
			fn.apply(context);
		},wait);
	}
}
```

防抖 (debounce)

防抖，顾名思义，防止抖动，以免把一次事件误认为多次，敲键盘就是一个每天都会接触到的防抖操作。

特点：等待某种操作停止后，加以间隔进行操作

- 持续触发不执行
- 不触发的一段时间之后再执行

想要了解一个概念，必先了解概念所应用的场景。在 JS 这个世界中，有哪些防抖的场景呢

1. 登录、发短信等按钮避免用户点击太快，以致于发送了多次请求，需要防抖
2. 调整浏览器窗口大小时，resize 次数过于频繁，造成计算过多，此时需要一次到位，就用到了防抖
3. 文本编辑器实时保存，当无任何更改操作一秒后进行保存
4. `mousemove` 鼠标滑动事件
5. Select 去服务端动态搜索功能

代码如下，可以看出来**防抖重在清零 `clearTimeout(timer)`**

```javascript
function debounce (f, wait) {
  let timer
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      f(...args)
    }, wait)
  }
}
```

---

**节流：**（每隔一段时间发一次 Ajax 请求，用节流）

规定一个单位时间，**在这个单位时间内，只能有一次触发事件的回调函数执行**，如果在同一个单位时间内某事件被触发多次，只有一次能生效

实现思路：通过判断是否到达一定时间来触发函数，**若没到规定时间则使用计时器延后**，而下一次事件则会重新设定计时器

```js
function throttle(fn,delay){
	let canRun=true;  //通过闭包保存一个标记
	return function(){
		//在函数开头判断标记是否为true,不为true 则return
		if (!canRun) {
			return;
		}
		//立即设置为false
		canRun=false;
		//将外部传入的函数的执行放在setTimeout中
		setTimeout(()=>{
			//最后在setTimeout执行完毕后再把标记设置为true(关键)表示可以执行下一次循环了
			//当定时器没有执行的时候标记永远是false,在开头被return掉
			fn.apply(this,arguments);
			canRun=true;
		},delay);
	};
}
```

节流 (throttle)

节流，顾名思义，控制水的流量。控制事件发生的频率，如控制为1s发生一次，甚至1分钟发生一次。与服务端(server)及网关(gateway)控制的限流 (Rate Limit) 类似。

特点：每等待某种间隔后，进行操作

- 持续触发并不会执行多次
- 到一定时间 / 其它间隔 ( 如滑动的高度 )再去执行

1. `scroll` 事件，每隔一秒计算一次位置信息等
2. 浏览器播放事件，每隔一秒计算一次进度信息等
3. input 框实时搜索并发送请求展示下拉列表，没隔一秒发送一次请求 (也可做防抖)
4. 埋点场景。商品搜索列表、商品橱窗等，用户滑动时 定时 / 定滑动的高度 发送埋点请求
5. 运维系统查看应用运行日志时，每 n 秒刷新一次

代码如下，可以看出来**节流重在开关锁 `timer=null`**

```javascript
function throttle (f, wait) {
  let timer
  return (...args) => {
    if (timer) { return }
    timer = setTimeout(() => {
      f(...args)
      timer = null
    }, wait)
  }
}
```

