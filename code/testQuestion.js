/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    if (amount < 1) {
        return 0;
    }
    const count = new Array(amount).fill(0);

    const dfs = (coins, rem, count) => {
        if (rem < 0) {
            return -1;
        }
        if (rem === 0) {
            return 0;
        }
        if (count[rem - 1] !== 0) {
            return count[rem - 1];
        }
        let min = Number.MAX_SAFE_INTEGER;
        for (let i = 0; i < coins.length; i++) {
            let res = coinChange(coins, rem - coins[i], count);
            if (res >= 0 && res < min) {
                min = 1 + res;
            }
        }
        count[rem - 1] = (min === Number.MAX_SAFE_INTEGER) ? -1 : min;
        return count[rem - 1];
    }
    return dfs(coins, amount, count);
};

let coins = [2], amount = 3;
console.log(coinChange(coins, amount));