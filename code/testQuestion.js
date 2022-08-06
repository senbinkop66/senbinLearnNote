/**
 * @param {number} n
 * @return {number}
 */
var numWays = function(n) {
    const MOD = 1000000007;
    if (n < 2) {
        return 1;
    }
    let p = 1, q = 1, r = 0;
    for (let i = 2; i <= n; i++) {
        r = (p + q) % MOD;
        p = q;
        q = r;
    }
    return r;
}

console.log(numWays(10));