/**
 * @param {string} code
 * @return {boolean}
 */
var isValid = function(code) {
    let n=code.length;
    const tags=[];  //存储开始标签
    let i=0;
    while (i<n){
        console.log(code[i]);
        if (code[i]==="<") {
            if (i===n-1) {
                //必需闭合
                return false;
            }
            if (code[i+1]==="/") {
                //闭合标签时
                let j=code.indexOf(">",i+2);
                if (j<0) {
                    return false;
                }
                let tagname=code.slice(i+2,j);  //闭合标签
                if (tags.length===0 || tags[tags.length-1]!==tagname){
                    return false;
                }
                //匹配则弹出栈顶元素
                tags.pop();
                i=j+1;
                if (tags.length===0 && i!==n) {
                    return false;
                }
            }else if(code[i+1]==="!"){
                //匹配<![CDATA[]]>
                if (tags.length===0) {
                    return false;
                }
                if (i+9>n) {
                    return false;
                }
                let cdata=code.slice(i+2,i+9);
                if (cdata!=="[CDATA[") {
                    return false;
                }
                let j=code.indexOf("]]>",i+9);
                if (j<0) {
                    return false;
                }
                i=j+1;
            }else{
                let j=code.indexOf(">",i+1);
                if (j<0) {
                    return false;
                }
                let tagname=code.slice(i+1,j);
                if (tagname.length<1 || tagname.length>9) {
                    return false;
                }
                for (let k=0;k<tagname.length;k++){
                    if (!(tagname[k]>="A" && tagname[k]<="Z")) {
                        return false;
                    }
                }
                tags.push(tagname);
                i=j+1;
            }
        }else{
            if (tags.length===0) {
                return false;
            }
            i++;
        }
    }
    console.log(tags)
    return tags.length===0;
};

let code= "<A><A>456</A>  <A> 123  !!  <![CDATA[]]>  123 </A>   <A>123</A></A>";
let result=isValid(code);
console.log(result);