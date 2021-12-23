

## **FED1** **直角三角形**

请补全JavaScript代码，要求在页面上渲染出一个直角三角形，三角形换行要求使用"br"实现。

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
    </head>
    <body>
        <div class='triangle'></div>

        <script>
            var triangle = document.querySelector('.triangle');
            // 补全代码
            let str="*<br/>**<br/>***";
            triangle.innerHTML=str;
            
            var str = ''
            for (var i = 1; i < 4; i++) {
                for (var j = 0; j < i; j++) {
                    str += '*'
                }
                str += '<br />'
            }
        </script>
    </body>
</html>
```

## **FED2** **文件扩展名**

请补全JavaScript代码，要求以字符串的形式返回文件名扩展名，文件名参数为"filename"。

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
    </head>
    <body>
        
        <script>
            const _getExFilename = (filename) => {
                // 补全代码
                let result=filename.split(".");
                return "."+result[result.length-1];
            }
            const  _getExFilename = (filename) => {
                let index = filename.lastIndexOf('.')
                return filename.slice(0, index) && index !== -1 ? filename.slice(index) : ''
            }
        </script>
    </body>
</html>
```

## **FED3** **分隔符**

请补全JavaScript代码，要求返回参数数字的千分位分隔符字符串。

```js
function _comma(number) {
    // 补全代码
    let str=Math.abs(number).toString();
    let count=0;
    let result="";
    for (let i = str.length-1; i>=0; i--) {
        count++;
        result=str[i]+result;
        if (count===3 && i!==0) {
            result=","+result;
            count=0;
        }
    }
    return number>0 ? result : "-"+result;
}

let test=-1234567;
let result=_comma(test);
console.log(result);
```

## **FED4** **单向绑定**

请补全JavaScript代码，要求每当id为"input"的输入框值发生改变时触发id为"span"的标签内容同步改变。
注意：
\1. 必须使用DOM0级标准事件（onchange）

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset=utf-8>
    </head>
    <body>
        <input id="input" type="text" />
        <span id="span"></span>

        <script type="text/javascript">
            // 补全代码
            let input_e=document.getElementById("input");
            let span_e=document.getElementById("span");
            input_e.onchange=function(){
                span_e.innerText=input_e.value;
            }

            input_e.onchange=function(){
                span_e.innerText=this.value;
            }
        </script>
    </body>
</html>
```

## **FED5** **创建数组**

请补全JavaScript代码，要求返回一个长度为参数值并且每一项值都为参数值的数组。
注意：
\1. 请勿直接使用for/while

```js
 const _createArray = (number) => {
    // 补全代码
    return Array(number).fill(number);
}

let test=12;
let result=_createArray(test);
console.log(result);
```

## **FED6** **判断版本**

请补全JavaScript代码，该函数接收两个参数分别为旧版本、新版本，当新版本高于旧版本时表明需要更新，返回true，否则返回false。
注意：
\1. 版本号格式均为"X.X.X"
\2. X∈[0,9]
\3. 当两个版本号相同时，不需要更新

```js
const _shouldUpdate = (oldVersion, newVersion) => {
    // 补全代码
    oldVersion=oldVersion.split(".");
    newVersion=newVersion.split(".");
      for (let i = 1; i < 3; i++) {
         if (Number(newVersion[i]>oldVersion[i])) {
            return true;
         }
      }
      return false;
}

let str1="12.3.5";
let str2="12.6.5";
let result=_shouldUpdate(str1,str2);
console.log(result);

const _shouldUpdate = (oldVersion, newVersion) => {
    // 补全代码
      return newVersion>oldVersion;
}
```

## **JS7** **无重复数组**



请补全JavaScript代码，实现一个函数，要求如下：
\1. 根据输入的数字范围[start,end]和随机数个数"n"生成随机数
\2. 生成的随机数存储到数组中，返回该数组
\3. 返回的数组不能有相同元素
注意：
\1. 不需要考虑"n"大于数字范围的情况

```js
const _getUniqueNums = (start,end,n) => {
    // 补全代码
    let newArr=[];
    let temp;
     for (let i = 0; i < n; i++) {
         do{
            temp=Math.floor(Math.random()*(end-start+1))+start;
         }while(newArr.includes(temp));
         newArr.push(temp);
         
     }
   return newArr;
}

let str1="12.3.5";
let str2="12.6.5";
let result=_getUniqueNums(1,10,5);
console.log(result);
```

## **JS8** **数组排序**



请补全JavaScript代码，根据预设代码中的数组，实现以下功能：
\1. 列表只展示数组中的name属性
\2. 实现点击"销量升序"按钮，列表内容按照销量升序重新渲染
\3. 实现点击"销量降序"按钮，列表内容按照销量降序重新渲染
注意：
\1. 必须使用DOM0级标准事件（onclick）

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
    </head>
    <body>
        <button class='up'>销量升序</button>
        <button class='down'>销量降序</button>
        <ul></ul>

        <script>
            var cups = [
                { type: 1, price: 100, color: 'black', sales: 3000, name: '牛客logo马克杯' },
                { type: 2, price: 40, color: 'blue', sales: 1000, name: '无盖星空杯' },
                { type: 4, price: 60, color: 'green', sales: 200, name: '老式茶杯' },
                { type: 3, price: 50, color: 'green', sales: 600, name: '欧式印花杯' }
            ]
            var ul = document.querySelector('ul');
            var upbtn = document.querySelector('.up');
            var downbtn = document.querySelector('.down');
            // 补全代码
            upbtn.onclick=function(){
                cups.sort((a,b)=>a.sales-b.sales);
                update();
            };
            downbtn.onclick=function(){
                cups.sort((a,b)=>b.sales-a.sales);
                update();
            };
            function update(){
                while(ul.firstChild){
                    ul.removeChild(ul.firstChild);
                }
                cups.forEach(item=>{
                    let li=document.createElement("li");
                    li.innerHTML=item.name;
                    ul.append(li);
                });
            }
        </script>
    </body>
</html>
```

## **JS9** **新数组**

请补全JavaScript代码，该函数接受两个参数分别为数组、索引值，要求在不改变原数组的情况下返回删除了索引项的新数组。

```js
const _delete = (array,index) => {
    // 补全代码
   return array.slice(0,index).concat(array.slice(index+1));

}

let str1=[1,2,3,4,5];
let str2="12.6.5";
let result=_delete(str1,2);
console.log(result);

const _delete = (array,index) => {
  // 补全代码
  const newArray = array.filter((_,i) => i !== index)
  return newArray
}
```

## **JS10** **计数器**

请补全JavaScript代码，要求每次调用函数"closure"时会返回一个新计数器。每当调用某个计数器时会返回一个数字且该数字会累加1。
注意：
\1. 初次调用返回值为1
\2. 每个计数器所统计的数字是独立的

```js
const closure = () => {
    // 补全代码
    let count=1;
    return function(){
      return count++;
    }
}

let str1=[1,2,3,4,5];
let str2="12.6.5";
let result=closure();
console.log(result());
```

## **JS11** **列表动态渲染**

请补全JavaScript代码，将预设代码中的"people"数组渲染在页面中。实现下面的列表：

- 牛油1号 20岁
- 牛油2号 21岁
- 牛油3号 19岁

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
    </head>
    <body>
        <ul></ul>

        <script>
            var people = [
                { name: '牛油1号', id: 1, age: 20 },
                { name: '牛油2号', id: 2, age: 21 },
                { name: '牛油3号', id: 3, age: 19 },
            ]
            var ul = document.querySelector('ul');
            // 补全代码
            people.forEach(item=>{
                let li=document.createElement("li");
                li.innerHTML=item.name+" "+item.age+"岁";
                //可以使用模板字符串
                //li.innerHTML=`${item.name} ${item.age}岁`;
                ul.append(li);
            });
        </script>
    </body>
</html>
```

## **JS12** **模板字符串**

请补全JavaScript代码，实现以下功能：
\1. 根据已有的person对象的注册时间求出距离当前时间的天数（天数向下取整）。
\2. 将获得的天数和person数据拼接成字符串，作为h2标签的内容。
注意：使用模板字符串进行字符串拼接，字符串最终内容如：尊贵的牛客网2级用户小丽您好，您已经注册牛客网3天啦~

```js
new Date() // 当前日期和时间
new Date(milliseconds)
//返回从 1970 年 1 月 1 日至今的毫秒数
new Date(dateString)
new Date(year, month, day, hours, minutes, seconds, milliseconds)
```

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
    </head>
    <body>
        <h2></h2>

        <script>
            var person = {
                level: '2',
                name: '小丽',
                registTime: '2021-11-01',
            }
            var h2 = document.querySelector('h2');
            // 补全代码
            let now=new Date();
            let time=new Date(person.registTime);
            let days=Math.floor((now-time)/(24*60*60*1000));
            h2.innerText=`尊贵的牛客网${person.level}级用户${person.name}您好，您已经注册牛客网${days}天啦~`
        </script>
    </body>
</html>
```

## **JS13** **类继承**

请补全JavaScript代码，完成类的继承。要求如下：
\1. "Chinese"类继承于"Human"类
\2. "Human"类实现一个函数"getName"，返回该实例的"name"属性
\3. "Chinese"类构造函数有两个参数，分别为"name"、"age"
\4. "Chinese"类实现一个函数"getAge"，返回该实例的"age"属性

```js
class Human {
    constructor(name) {
        this.name = name
        this.kingdom = 'animal'
        this.color = ['yellow', 'white', 'brown', 'black']
    }
    // 补全代码
    getName(){
      return this.name;
    }
}

// 补全代码
class Chinese extends Human{
    constructor(name,age){
      super(name);
      this.age=age;
    }
    getAge(){
      return this.age;
    }
}
```

## **JS14** **参数解析器**

请补全JavaScript代码，要求将字符串参数URL中的参数解析并以对象的形式返回。

输入：getParams`(https://nowcoder.com/online?id=1&salas=1000`)
输出：{id:1, salas: 100}

```js
const _getParams = (url) => {
    let index=url.indexOf("?");
    let obj={};
    if (index!==-1) {
      let newStr=url.slice(index+1);
      newStr=newStr.split("&");
      newStr.forEach((item)=>{
        item=item.split("=");
        obj[item[0]]=item[1];
      })
    }
    return obj;
}

let str1="https://nowcoder.com/online?id=1&salas=1000";
let result=_getParams(str1);
console.log(result);
```

使用内置对象

```js
const _getParams = (url) => {
    let myURL = new URL(url);
    let searchParams = new URLSearchParams(myURL.search);
    let obj={};
    searchParams.forEach((value,key)=>{
      obj[key]=value;
    });
    return obj;
}

let str1="https://scriptoj.com/problems?offset=100&limit=10";
let result=_getParams(str1);
console.log(result);
```

## **JS15** **生成页码**

请补全JavaScript代码，要求根据参数动态生成"li"标签页码并插入"ul"标签下。要求如下：
\1. "allItem"为总数据项个数，"pageItem"为每页的数据项个数
\2. "li"标签内容为当前页码数，页码从1开始

输入：_createPage(13,2)
输出："li"长度为7，"li"内容依次为"1","2","3","4","5","6","7"

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset=utf-8>
    </head>
    <body>
        <ul id="ul">
            
        </ul>
        <script type="text/javascript">
            const _createPage = (allItem, pageItem) => {
                // 补全代码
                var ul = document.querySelector('#ul');
                let pages=Math.ceil(allItem/pageItem);
                for (let i=1;i<=pages;i++){
                    let li=document.createElement("li");
                    li.innerHTML=i;
                    ul.append(li);
                }
            }
            _createPage(13,2);
        </script>
    </body>
</html>
```

## **JS16** **总成绩排名**

请补全JavaScript代码，要求将数组参数中的对象以总成绩(包括属性"chinese"、"math"、"english")从高到低进行排序并返回。

```

```

