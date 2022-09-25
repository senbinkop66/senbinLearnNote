// 环形字符串的最长相同字符子串
function solution(s) {
    const n = s.length;
    if (n < 2) {
        return n;
    }
    let maxLen = 1;
    let count = 1;
    for (let i = 1; i < n; i++) {
        if (s[i] === s[i - 1]) {
            count++;
        } else {
            maxLen = Math.max(maxLen, count);
            count = 1;
        }
    }
    maxLen = Math.max(maxLen, count);

    if (n === maxLen) {
        return maxLen;
    }

    if (s[0] === s[n - 1]) {
        count++;
        let i = 1;
        while (s[i] === s[i - 1]) {
            i++;
            count++;
        }
    }
    maxLen = Math.max(maxLen, count);

    return maxLen;
}

let s = 'abaaabaaaba';
console.log(solution(s))