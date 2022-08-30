/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
	if (amount === 0) {
		return 0;
	}
	const dp = new Array(amount + 1).fill(Infinity);
	dp[0] = 0;
	const n = coins.length;
	for (let i = 0; i < coins.length; i++) {
		for (let j = coins[i]; j <= amount; j++) {
			dp[j] = Math.min(dp[j - coins[i]] + 1, dp[j]);
		}
	}

	return dp[amount] === Infinity ? -1 : dp[amount];
}