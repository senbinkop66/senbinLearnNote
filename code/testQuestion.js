const minNums = (nums, n) => {
    let left = 0;
    let right = n - 1;
    let mid = 0;
    while(nums[left] >= nums[right]) {
        if (right - left === 1) {
            mid = right;
            break;
        }
        mid = left + Math.floor((right - left) / 2);
        // 如果left,right, mid指向的三个数字相等，只能顺序查找
        if (nums[left] === nums[right] && nums[left] === nums[mid]) {
            return minInOrder(nums, left, right);
        }

        if (nums[mid] >= nums[left]) {
            left = mid;
        } else if (nums[mid] <= nums[right]) {
            right = mid;
        }
    }
    return nums[mid];
}

const minInOrder = (nums, left, right) => {
    let result = nums[left];
    for (let i = left + 1; i <= right; ++i) {
        if (result > nums[i]) {
            result = nums[i];
        }
    }
    return result;
}

let nums = [1, 0, 1, 1, 1];
// let nums = [3, 4, 5, 1, 2];
console.log(minNums(nums, 5));