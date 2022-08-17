var dicesProbability = function(n) {
    const dp = Array.from({ length: n + 1 }, x => Array(6 * n + 1).fill(0));
    let res = [];
    for (let i = 1; i <= 6; i++) {
        dp[1][i] = 1;
    }

    for (let i = 1; i <= n; i++) {
        for (let j = i; j <= 6 * n; j++) {
            for (let k = 1; k <= 6; k++) {
                if (dp[i - 1][j - k]) {
                    dp[i][j] += dp[i - 1][j - k];
                }
            }

            if (i === n) {
                res.push(dp[i][j] / 6 ** n);
            }
        }
    }

    return res;
};