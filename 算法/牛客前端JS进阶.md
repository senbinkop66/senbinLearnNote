

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

