/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
	nums.sort((a, b) => a -b);  // 排序
	const n = nums.length;
	const ans = [];
	const visited = new Array(n).fill(false);

	const backtrack = (idx, perm) => {
		// 所有数都填完了
		if (idx === n) {
			ans.push([...perm]);
			return;
		}
		for (let i = 0; i < n; i++) {
			if (visited[i] || (i > 0 && nums[i] === nums[i -1] && !visited[i - 1])) {
				continue;
			}
			perm.push(nums[i]);
			visited[i] = true;
			// 继续递归填下一个数
			backtrack(idx + 1, perm);
			// 撤销操作
			visited[i] = false;
			perm.pop();
		}
	}
	backtrack(0, []);

	return ans;
};

let nums = [3,4,1,1];
console.log(permute(nums));