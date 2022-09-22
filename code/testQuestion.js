function solution(num) {
    num = num.toString();
    const n = num.length;
    const s = new Set();
    let ans = 0;

    const dfs = (startIndex, sum) => {
        if (startIndex === n) {
            return;
        }
        sum = sum * 10 + Number(num[startIndex]);

        if (sum > 0 && sum % 3 === 0) {
            if (!s.has(sum)) {
                ans++;
                s.add(sum);
            }
        }
        
        for (let i = startIndex + 1; i < n; i++) {
            dfs(i, sum);
        }
    }

    for (let i = 0; i < n; i++) {
        if (i > 0 && num[i] === num[i - 1]) {
            continue;
        }
        dfs(i, 0);
    }
    if (Number(num) % 3 === 0) {
        ans--;
    }
    console.log(s)
    return ans;
}

let num = 3320032;
console.log(solution(num));