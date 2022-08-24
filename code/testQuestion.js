/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 比较版本号
 * @param version1 string字符串 
 * @param version2 string字符串 
 * @return int整型
 */
function compare( version1 ,  version2 ) {
    // write code here
    const n = version1.length, m = version2.length;
    let i = 0, j = 0;
    while (i < n || j < m) {
        let x = 0;
        for (; i < n && version1[i] !== "."; i++) {
            x = x * 10 + version1[i].charCodeAt() - '0'.charCodeAt();
        }
        ++i;  // 跳过点号
        let y = 0;
        for (; j < m && version2[j] !== "."; j++) {
            y = y * 10 + version2[j].charCodeAt() - '0'.charCodeAt();
        }
        ++j;  // 跳过点号
        if (x !== y) {
            return x > y ? 1 : -1;
        }
    }
    return 0;
}

module.exports = {
    compare : compare
};