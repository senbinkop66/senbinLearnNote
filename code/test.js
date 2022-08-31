/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param A string字符串 
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome  =  function(s) {
    const n = s.length;
    if (n < 2) {
        return s;
    }

    let maxLen = 1;
    let begin = 0;
    const dp = new Array(n).fill(0).map(() => new Array(n).fill(false));
    //dp[i][j] 表示 s[i..j] 是否是回文串
    for (let i = 0; i < n; i++){
        /// 初始化：所有长度为 1 的子串都是回文串
        dp[i][i] = true;
    }

    // 递推开始, 先枚举子串长度
    for(let L = 2; L <= n; L++){
        // 枚举左边界，左边界的上限设置可以宽松一些
        for(let i = 0; i < n; i++){
            // 由 L 和 i 可以确定右边界，即 j - i + 1  =  L 得
            let j = L + i - 1;
            if (j >= n) {
                // 如果右边界越界，就可以退出当前循环
                break;
            }
            if (s[i] !== s[j]) {
                dp[i][j] = false;
            } else {
                if (j - i < 3) {
                    dp[i][j] = true;
                } else {
                    dp[i][j] = dp[i + 1][j - 1];
                }
            }
            // 只要 dp[i][L]  =  =  true 成立，就表示子串 s[i..L] 是回文，此时记录回文长度和起始位置
            if (dp[i][j] && j - i + 1 > maxLen) {
                maxLen = j - i + 1;
                begin = i;
            }
        }
    }

    return s.slice(begin, begin + maxLen);
};


let str1  =  "babad";
let result = longestPalindrome(str1);
console.log(result);
module.exports  =  {
    getLongestPalindrome : getLongestPalindrome
};