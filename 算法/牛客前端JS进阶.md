

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

### **FED3** **分隔符**

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
