// 任意选数组中元素减k次x后最大值为多少
function solution(nums, n, k, x){
    if (n === 1) {
        return nums[0] - k * x;
    }
    nums.sort((a, b) => b - a);
    if (nums[0] - x <= nums[n - 1] && k <= n) {
        return nums[k - 1] - x;
    }
    while (k > 0) {
        k--;
        nums[0] -= x;
        let i = 1;
        while (i < n && nums[i] > nums[i - 1]) {
            [nums[i], nums[i - 1]] = [nums[i - 1], nums[i]];
            i++;
        }
    }
    return nums[0];
}


// console.log(solution([4,3,11,2,2,1], 5, 3, 5));

const [n, k, x] = readline().trim().split(" ").map(Number);
const nums = readline().trim().split(" ").map(Number);
console.log(solution(nums, n, k, x));