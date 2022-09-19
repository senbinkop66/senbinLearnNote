// M 生命, N 吊桥长度，K 缺失木板数，L 缺失编号
function solution(M, N, K, L) {
    const bridge = new Array(N + 2).fill(true);  // // 记录陷阱
    L.forEach((item) => {
        bridge[item] = false;
    });
    
    // dp[i][j]表示到达位置i，剩余生命值为j的方法数
    const dp = new Array(N + 2).fill(0).map((item) => new Array(M + 2).fill(0));
    // 初始化dp,在初始位置，剩余生命值为M
    dp[0][M] = 1;

    for (let i = 1; i < N + 2; i++) {
        for (let j = 1; j < M + 1; j++) {
            // 如果当前位置为陷阱，则需要上一位置多一条命，到当前位置扣一条命
            let k = bridge[i] === false ? (j + 1) : j;
            if (i === 1) {
                dp[i][j] = dp[i - 1][k];
            } else if (i === 2) {
                dp[i][j] = dp[i - 1][k] + dp[i - 2][k];
            } else {
                dp[i][j] = dp[i - 1][k] + dp[i - 2][k] + dp[i - 3][k];
            }
        }
    }

    // dp[N+1][0~M]相加
    let ans = 0;
    for (let i = 0; i < M + 1; i++) {
        ans += dp[N + 1][i];
    }

    return ans;
}

let M = 3, N = 30, K = 8;
let L = [2, 3, 6, 8, 9, 12, 18, 26];

console.log(solution(M, N, K, L));