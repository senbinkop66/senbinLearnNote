/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
	if (nums.length === 0) {
		return 0;
	}
	const n = nums.length;
	const dp = new Array(n + 1).fill(0);
	let len = 1;
	dp[len] = nums[0];

	for (let i = 1; i < n; i++) {
		if (nums[i] > dp[len]) {
			dp[++len] = nums[i];
		} else {
			// 如果找不到说明所有的数都比 nums[i] 大，此时要更新 d[1]，所以这里将 pos 设为 0
			let left = 1, right = len, pos = 0;
			while (left <= right) {
				const mid = (left + right) >> 1;
				if (dp[mid] < nums[i]) {
					pos = mid;
					left = mid + 1;
				} else {
					right = mid - 1;
				}
			}
			dp[pos + 1] = nums[i];
		}
	}
	return len;
};

let nums = [10,9,2,5,3,7,101,18];
console.log(lengthOfLIS(nums))
