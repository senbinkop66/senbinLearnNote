/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length === 0) {
        return 0;
    }

    let curLen = 0;  // 局部最长不重复
    let ans = 0;  //  全局最长不重复
    const position = new Map();
    let n = s.length;
    for (let i = 0; i < n; i++) {
        let preIndex = position.has(s[i]) ? position.get(s[i]) : -1;

        if (preIndex < 0 || i - preIndex > curLen) {
            curLen++;
        } else {
            ans = Math.max(ans, curLen);
            curLen = i - preIndex;  // 保持不重复
        }
        position.set(s[i], i);
    }
    ans = Math.max(ans, curLen);

    return ans;
};

let s = "abcabcbb";
console.log(lengthOfLongestSubstring(s));