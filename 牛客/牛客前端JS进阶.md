

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

```js
const _rank = array => {
    // 补全代码
    array.sort((a,b)=>(b.chinese+b.math+b.english)-(a.chinese+a.math+a.english));
    return array;
}
let str1=[
    {chinese:67,math:89,english:90},
    {chinese:65,math:90,english:91},
    {chinese:73,math:90,english:89},
];

let result=_rank(str1);
console.log(result);
```

## **JS17** **子字符串频次**

请补全JavaScript代码，该函数接受两个参数分别为字符串、子字符串，要求返回子字符串在字符串中出现的频次。

```js
const _searchStrIndexOf = (str, target) =>{
    // 补全代码
    let count=0;
    let index=str.indexOf(target);
    while(index!==-1){
        count++;
        index=str.indexOf(target,index+1);
    }
    return count;
}

let str1="dsdafewdsfedswf";
let str2="dsda"

let result=_searchStrIndexOf(str1,str2);
console.log(result);
```

## **JS18** **继承**

请补全JavaScript代码，实现以下功能：
\1. 给"Human"构造函数的原型对象添加"getName"方法，返回当前实例"name"属性
\2. 将"Chinese"构造函数继承于"Human"构造函数
\3. 给"Chinese"构造函数的原型对象添加"getAge"方法，返回当前实例"age"属性

```js
function Human(name) {
    this.name = name
    this.kingdom = 'animal'
    this.color = ['yellow', 'white', 'brown', 'black']
}

function Chinese(name,age) {
        Human.call(this,name)
        this.age = age
        this.color = 'yellow'
}

// 补全代码
Human.prototype.getName=function(){
    return this.name;
}
// 原型链继承
Chinese.prototype=new Human();
//Chinese.prototype.__proto__ = Human.prototype;

Chinese.prototype.getAge=function(){
    return this.age;
}
```

## **JS19** **判断斐波那契数组**

请补全JavaScript代码，要求以Boolean的形式返回参数数组是否为斐波那契数列。在数学上，斐波那契数列以如下方法定义：F(0)=0，F(1)=1, F(n)=F(n - 1)+F(n - 2)（n ≥ 2，n ∈ N）
注意：
\1. [0,1,1]为最短有效斐波那契数列

```js
const _isFibonacci = array => {
    if(array.length<3){return false;}
    let i=2;
    while (i<array.length){
        if(array[i]!==array[i-1]+array[i-2]){
            return false;
        }
        i++;
    }
    return true;
}

let str1=[0,1,1,2,3,5,8];
let result=_isFibonacci(str1);
console.log(result);
```

## **JS20** **数组扁平化**

请补全JavaScript代码，要求将数组参数中的多维数组扩展为一维数组并返回该数组。
注意：
\1. 数组参数中仅包含数组类型和数字类型

输入：

```
[1,[2,[3,[4]]]]
```

输出：

```
[1,2,3,4]
```

```json
const _flatten = arr => {
    // 补全代码
    let newArr=[];
    for (let i=0;i<arr.length;i++){
        if (arr[i] instanceof Array) {
            newArr=newArr.concat(_flatten(arr[i]));
        }else{
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

let str1=[1,[2,[3,[4]]]];
let result=_flatten(str1);
console.log(result);
```

## **JS21** **数组过滤**

请补全JavaScript代码，要求根据下拉框选中的条件变换重新渲染列表中展示的商品，且只展示符合条件的商品。
注意：
\1. 必须使用DOM0级标准事件（onchange）
\2. 建议使用ES6的filter方法

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
    </head>
    <body>
        <select name="" id="">
            <option value="0">请选择价格范围</option>
            <option value="1">&lt100</option>
            <option value="2">100~500</option>
            <option value="3">&gt500</option>
        </select>
        <ul>
            <li>牛客logo马克杯</li>
            <li>无盖星空杯</li>
            <li>老式茶杯</li>
            <li>欧式印花杯</li>
        </ul>

        <script>
            var cups = [
                { type: 1, price: 100, color: 'black', sales: 60, name: '牛客logo马克杯' },
                { type: 2, price: 40, color: 'blue', sales: 100, name: '无盖星空杯' },
                { type: 4, price: 60, color: 'green', sales: 200, name: '老式茶杯' },
                { type: 3, price: 50, color: 'green', sales: 600, name: '欧式印花杯' }
            ]
            var select = document.querySelector('select');
            var ul = document.querySelector('ul');
            // 补全代码
            let newArr=[...cups];
            select.onchange=function(){
                let val=Number(select.value);
                switch (val){
                    case 1:
                        newArr=cups.filter((item)=>item.sales<100);
                        break;
                    case 2:
                        newArr=cups.filter((item)=>item.sales>=100 && item.sales<=500);
                        break;
                    case 3:
                        newArr=cups.filter((item)=>item.sales>500);
                        break;
                }
                update();
            };
            function update(){
                while(ul.firstChild){
                    ul.removeChild(ul.firstChild);
                }
                newArr.forEach(item=>{
                    let li=document.createElement("li");
                    li.innerHTML=item.name;
                    ul.append(li);
                });
            }
        </script>
    </body>
</html>
```

## **JS22** **判断质数**

请补全JavaScript代码，要求在Number对象的原型对象上添加"_isPrime"函数，该函数判断调用的对象是否为一个质数，是则返回true，否则返回false。

```js
Number.prototype._isPrime=function(){
    let number=Number(this);
    if (number<2) {return false;}
    let n=2;
    while (n<=Math.sqrt(number)){
        if (number%n===0) {return false;}
        n++;
    }
    return true;
};

let str1=37;
let result=str1._isPrime();
console.log(result);
```

## **JS23** **验证是否是身份证**

请补全JavaScript代码，要求以Boolean的形式返回字符串参数是否符合身份证标准。
注意：
\1. 无需考虑地区信息、出生日期、顺序码与校验码的验证

输入：

```
_isCard('21062319980907888X')
```

输出：

```
true
```

```js
const _isCard = number => {
    // 补全代码
    //身份证是18位
    if (number.length===18) {
        return /[0-9]{17}[0-9X]{1}/.test(number);
        //return /^[\d]{17}[X\d]{1}$/.test(number+'');
    }else{
        return false;
    }
};

let str1='21062319980907888X';
let result=_isCard(str1);
console.log(result);
```

## **JS24** **Symbol**

请补全JavaScript代码，要求以键/值对的对象形式返回参数数组。要求如下：
\1. 键名的数据类型为Symbol
\2. 键值为当前数组项
\3. Symbol的描述为当前数组项
\4. 返回普通对象

```js
const _symbolKey = array => {
    // 补全代码
    let obj={};
    array.forEach((item)=>{
        obj[Symbol(item)]=item;
    })
    return obj;
};

let str1=[1,2,3];
let result=_symbolKey(str1);
console.log(result);
```

## **JS25** **相同的Set**

请补全JavaScript代码，要求以boolean的形式返回两个Set对象参数是否一样，是则返回true，否则返回false。

```js
const _isSameSet = (s1, s2) => {
    // 补全代码
    if(s1.length!==s2.length){return false;}

    s2.forEach((item)=>{
        if(!s1.has(item)){
            return false;
        }
    });
    return true;

};

let str1=new Set(['a', 'b', 'c']);
let str2=new Set(['a', 'c', 'b']);
let result=_isSameSet(str1,str2);
console.log(result);
```

## **JS26** **Getter**

请补全JavaScript代码，完成名为"Rectangle"的矩形类。要求如下：
\1. 构造函数只包含两个参数，依次为"height"、"width"
\2. 设置Getter，当获取该对象的"area"属性时，返回该对象"height"与"width"属性的乘积

输入：

```
new Rectangle(12,12).area
```

输出：

```
144
```

```js
class Rectangle {
    // 补全代码
    constructor(height,width){
        this.height=height;
        this.width=width;
    }
    get area(){
        return this.width*this.height;
    }

};

let str1=new Set(['a', 'c', 'b']);
//let result=_isSameSet(str1);
console.log(new Rectangle(12,13).area);
```

## **JS27** **控制动画**

请补全代码，要求当滑动id为"range"的滑块控件时可以改变id为"rect"的矩形旋转速度。要求如下：
\1. id为"rect"的矩形初始动画周期为10秒
\2. id为"range"的滑块控件默认值为1、最小值为、最大值为10、滑动间隔为1
\3. 当滑动滑块值为1时，矩形动画周期为10秒、当...，为...、当滑动滑块值为10时，矩形动画周期为1秒
注意：
\1. 必须使用DOM0级标准事件（onchange）

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset=utf-8>
        <style type="text/css">
            #rect {
                width: 120px;
                height: 100px;
                background-color: black;
                /*补全代码*/
                animation: rect 10s linear infinite;
            }
            @keyframes rect {
                from {
                    transform: rotate(0deg);
                }
                to {
                    transform: rotate(360deg);
                }
            }
        </style>
    </head>
    <body>
        <!-- 补全代码 -->
        <div id="rect"></div>
        <input id="range" type="range" min="1" max="10" value="1" step="1" />
        
        <script type="text/javascript">
            // 补全代码
            let range=document.querySelector("#range");
            let rect=document.querySelector("#rect");
            range.onchange=function(){
                rect.style.animationDuration=11-range.value+'s';
            };

        </script>
    </body>
</html>
```

## **JS28** **Map保存节点**

请补全JavaScript代码，要求将页面中的"p"标签以键名的形式保存在Map对象中，键名所对应的键值为该"p"标签的文字内容。

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset=utf-8>
    </head>
    <body>
        <p>1</p>
        <script type="text/javascript">
            const _elementKey = () => {
                // 补全代码
                let p=document.getElementsByTagName("p")[0];
                let m=new Map([[p,p.innerText]]);
                return m;
            }
        </script>
    </body>
</html>
```

## **JS29** **全选**

请补全JavaScript代码，实现以下效果：
\1. 选中"全选"框，以下所有选项全部勾选。
\2. 把"全选"框从选中状态勾选成未选中状态，其他复选框全部取消选中效果。
\3. 当其他复选框全部选中，"全选框"为选中状态。
\4. 当其他复选框有一个未选中，"全选框"取消选中状态。
注意：
\1. 必须使用DOM0级标准事件（onchange）

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
    </head>
        <style>
            ul {
                list-style: none;
            }
        </style>
    <body>
        <ul>
            <li>全选<input type='checkbox' id='all'></li>
            <li>Java<input type='checkbox' class='item'></li>
            <li>javaScript<input type='checkbox' class='item'></li>
            <li>C++<input type='checkbox' class='item'></li>
            <li>python<input type='checkbox' class='item'></li>
            <li>.net<input type='checkbox' class='item'></li>
        </ul>

        <script>
            // 补全代码
            var all=document.querySelector("#all");
            var options=Array.from(document.querySelectorAll(".item"));
            all.onchange=function(){
                options.forEach((item)=>{
                    item.checked=all.checked;
                });
            }
            options.forEach((item)=>{
                item.onchange=function(){
                    let arr=options.filter(v=>v.checked===true);
                    all.checked=arr.length===5;
                }
            });
        </script>
    </body>
</html>
```

## **JS30** **回文字符串**

请补全JavaScript代码，要求以boolean的形式返回参数字符串是否为回文字符串。

```js
const _isPalindrome = string => {
    // 补全代码
    for (let i=0;i<string.length/2;i++){
        if (string[i]!==string[string.length-1-i]) {
            return false;
        }
    }
    return true;
}

let str1="dsferfre";
let result=_isPalindrome(str1);
console.log(result);
```

## **JS31** **Proxy计数器**

请补全JavaScript代码，请给参数对象添加拦截代理功能，并返回这个代理，要求每当通过代理调用该对象拥有的属性时，"count"值加1，否则减1。

```js
let count = 0
const _proxy = object => {
    // 补全代码
    let proxy=new Proxy(object,{
        get:function(target,propKey){
            if (propKey in target) {
                count++;
            }else{
                count--;
            }
        }
    });
    return proxy;
}
```

## **JS32** **Proxy拦截器**

请补全JavaScript代码，请给参数对象添加拦截代理功能并返回这个代理。要求如下：
\1. 该函数接收多个参数，首个参数为对象，从第二个参数（包括）往后皆是该对象的属性名
\2. 通过该函数给首个参数对象添加拦截器功能，每当该对象访问到该函数第二个参数（包括）往后的属性时，返回"noright"字符串，表示无权限。

