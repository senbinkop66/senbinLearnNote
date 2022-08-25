/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    // write code here
    const n = nums.length;
    return quickSelect(nums, 0, n - 1, n - k);
}

const quickSelect = (nums, left, right, index) => {
    const q = randomPartition(nums, left, right);
    // console.log(q, nums)
    if (q === index) {
        // 我们会对子数组进行划分，如果划分得到的 qq 正好就是我们需要的下标，就直接返回 a[q]a[q]
        return nums[q];
    } else if (q < index){
        // 否则，如果 qq 比目标下标小，就递归右子区间
        return quickSelect(nums, q + 1, right, index);
    } else {
        // 否则递归左子区间
        return quickSelect(nums, left, q - 1, index);
    }
}

const randomPartition = (nums, left, right) => {
    const randomIndex = left + Math.floor(Math.random() * (right - left));
    swap(nums, randomIndex, right);
    return partition(nums, left, right);
}

const partition = (nums, left, right) => {
    const x = nums[right];
    let i = left - 1;
    for (let j = left; j < right; j++) {
        if (nums[j] <= x) {
            // 把小于等基准值的移到左边
            swap(nums, ++i, j);
        }
    }
    swap(nums, i + 1, right);
    return i + 1;
}

const swap = (nums, i, j) => {
    [nums[i], nums[j]] = [nums[j], nums[i]];
}

let nums = [3,2,1,5,6,4], k = 2;
console.log(findKthLargest(nums, k));
