/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var repeatedStringMatch = function(a, b) {
    //首先只要b中有字母不在a中,则不可能b为a的子串
    let len_a=a.length;
    let len_b=b.length;

    let set=new Set();
    for (let i=0;i<len_a;i++){
        set.add(a[i]);
    }
    for (let i=0;i<len_b;i++){
        if (!set.has(b[i])) {
            return -1;
        }
    }
    let newStr=a;
    //判断b与a的长度，a当重复后长度最多超过b长度的2倍，如果2倍长度没有找到则返回-1
    let n=len_b%len_a===0 ? len_b/len_a : Math.floor(len_b/len_a)+1;
    if (len_a>=len_b) {
        //当a长时，返回值最多为2
        if (newStr.indexOf(b)!==-1) {
            return 1;
        }else{
            newStr+=a;
            if (newStr.indexOf(b)!==-1) {
                return 2;
            }else{
                return -1;
            }
        }
    }else{
        //当b长时，a长度最多增加到b的2倍
        for (let i=0;i<n-1;i++){
            newStr+=a;
        }
        while (newStr.length<2*len_b){
            if (newStr.indexOf(b)!==-1) {
                return n;
            }else{
                newStr+=a;
                n++;
            }
        }
        if (newStr.indexOf(b)!==-1) {
            return n;
        }else{
            return -1;
        }
        
    }
    return 0;
};


let str1 = "abc";
let str2="cabcabca";

let result=repeatedStringMatch(str1,str2);
console.log(result);