/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function(arr, k) {
    randomizedSelected(arr, 0, arr.length - 1, k);
    return arr.slice(0, k);
}

function randomizedSelected(arr, left, right, k) {
    if (left > right) {
        return;
    }
    const pos = randomizedPartition(arr, left, right);
    const num = pos - left + 1;
    if (k === num) {
        return;
    } else if (k < num) {
        //表示第 k 小的数在 pivot 的左侧
        randomizedSelected(arr, left, pos - 1, k);
    } else {
        // 表示第 k 小的数在 pivot 的右侧
        randomizedSelected(arr, pos + 1, right, k);
    }
}

function randomizedPartition(arr, left, right) {
    const pivotIndex = left + Math.floor(Math.random() * (right - left));
    swap(arr, right, pivotIndex);
    return partition(arr, left, right);
}

function partition(arr, left, right) {
    const pivot = arr[right];
    let i = left - 1;
    for (let j = left; j <= right - 1; j++) {
        if (arr[j] <= pivot) {
            i++;
            swap(arr, i, j);
        }
    }
    swap(arr, i + 1, right);
    return i + 1;
}

function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

let nums = [4, 5, 2, 7, 9, 1, 0, 3, 8, 6];
console.log(getLeastNumbers(nums, 5))