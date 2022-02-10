/**
 * @param {number} n
 * @return {string[]}
 */
var simplifiedFractions = function(n) {
    if(n===1){
        return [];
    }
    let result=[];
    for(let i=2;i<=n;i++){
        for(j=1;j<i;j++){
            if (gcd(i,j)===1) {
                result.push(j+"/"+i);
            }
        }
    }
    return result;
};
var gcd=function(a,b){
    //辗转相除获取最大公约数
    if (a%b===0) {
        return b;
    }
    return arguments.callee(b,a%b);
}
let test=5;
let result=simplifiedFractions(test);
console.log(result);