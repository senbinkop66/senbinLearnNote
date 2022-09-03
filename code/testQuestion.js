/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * 计算两个数之和
 * @param s string字符串 表示第一个整数
 * @param t string字符串 表示第二个整数
 * @return string字符串
 */
function solve( s ,  t ) {
    // write code here
    let ans = [];

    s = s.split("").reverse();
    t = t.split("").reverse();
    if (s.length > t.length) {
    //确保s是短的一个数字
    [s, t] = [t, s];
    }
    const n = s.length;
    const m = t.length;

    let ret = 0;
    let sum = 0;
    for (let i = 0; i < m; i++) {
        let a = 0;
        if (i < n) {
            a = Number(s[i]);
        }
        let b = Number(t[i]);
        sum = a + b + ret;
        ret = sum > 9 ? 1 : 0;
        sum %= 10;
        ans .unshift(sum);
    }
    if (ret > 0) {
        ans.unshift(1);
    }

    return ans.join("");
}
// let s = "9", t = "99999999999999999999999999999999999999999999999999999999999994";
// console.log(solve(s, t));

module.exports = {
    solve : solve
};