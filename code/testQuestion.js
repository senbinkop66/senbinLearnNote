/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * 返回表达式的值
 * @param s string字符串 待计算的表达式
 * @return int整型
 */
function solve( s ) {
    // write code here
    s = s.replace(/\s/, "");
    const nums = [];
    const ops = [];
    //设定运算符优先级
    const m = new Map([["(", -1], ["+", 1], ["-", 1], ["*", 2]]);
    
    
}

let s = "(2*(3-4))*5";

module.exports = {
    solve : solve
};