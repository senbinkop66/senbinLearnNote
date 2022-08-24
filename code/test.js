/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
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
};

let version1 = "1.01", version2 = "1.001";
console.log(compareVersion(version1, version2));