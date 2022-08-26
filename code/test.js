/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
	const n = nums.length;
	for (let i = 0; i < n; i++) {
		while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
			// 把1-n的元素放到对应的位置
			let temp = nums[nums[i] - 1];
			nums[nums[i] - 1] = nums[i];
			nums[i] = temp;
		}
	}

	for (let i = 0; i < n; i++) {
		if (nums[i] !== i + 1) {
			return i + 1;
		}
	}
	return n + 1;
};

let nums = [3,4,-1,1];
console.log(firstMissingPositive(nums));