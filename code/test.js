// M 队列长度，N 传输通道数，P 每个通道大小
// Q 每个数据包大小，S 每个数据包传输时长
function  solution(M, N, P, Q, S) {
    if (N === 1) {
        return S.reduce((pre, cur) => pre + cur);
    }
    let minCost = 0;
    
    P = P.sort((a, b) => a - b);
    S = S.map((item, index) => [item, index]);
    S = S.sort((a, b) => b[0] - a[0]);
    console.log(S);

    const dp = new Array(N).fill(0);

    for (let i = 0; i < M; i++) {
        let flag = false;
        let minIndex = 0;
        for (let j = 0; j < N; j++) {
            if (!flag && P[j] >= Q[S[i][1]]) {
                flag = true;
                minIndex = j;
            }
            if (flag) {
                if (dp[j] === 0) {
                    minIndex = j;
                    // dp[j] += S[i][0];
                    // minCost = Math.max(minCost, dp[j]);
                    break;
                }
                if (dp[j] < dp[minIndex]) {
                    minIndex = j;
                }
            }
        }
        dp[minIndex] += S[i][0];
        minCost = Math.max(minCost, dp[minIndex]);
    }
    return minCost;
}

let [M, N] = [6, 3];
let P = [1, 2, 4];
let Q = [2, 3, 2, 4, 1, 3];
let S = [3, 4, 1, 5, 3, 2];

console.log(solution(M, N, P, Q, S));