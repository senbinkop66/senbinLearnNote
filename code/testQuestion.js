/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function(arr, k) {
    if (k === 0 || arr.length === 0) {
        return [];
    }

    let maxHeap = [Infinity];  // 最大堆
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        let item = arr[i];
        if (maxHeap.length - 1 < k) {
            // 构造最大堆
            insert(item, maxHeap);
        } else {
            // 如果当前元素比最大堆的最大值小，则将堆的最大值替换成此元素，然后再重新构造成最大堆
            if (item < maxHeap[1]) {
                addToTop(item, maxHeap);
            }
        }
    }

    function insert(item, heap) {
        heap.push(item);
        let index = heap.length - 1;
        while (heap[index] > heap[parseInt(index / 2)]) {
            let temp = heap[index];
            heap[index] = heap[parseInt(index / 2)];
            heap[parseInt(index / 2)] = temp;
            index = parseInt(index / 2);
        }
    }

    function addToTop(item, heap) {
        heap[1] = item;
        let index = 1;
        while (true) {
            if (heap[2 * index] === undefined) {
                break;
            }
            if (heap[2 * index + 1] === undefined) {
                if (heap[2 * index] < heap[index]) {
                    break;
                }
                let temp = heap[2 * index];
                heap[2 * index] = heap[index];
                heap[index] = temp;
                index = 2 * index;
            } else {
                if (heap[2 * index] < heap[index] && heap[2 * index + 1] < heap[index]) {
                    break;
                }
                if (heap[2 * index] > heap[2 * index + 1]) {
                    let temp = heap[2 * index];
                    heap[2 * index] = heap[index];
                    heap[index] = temp;
                    index = 2 * index;
                } else {
                    let temp = heap[2 * index + 1];
                    heap[2 * index + 1] = heap[index];
                    heap[index] = temp;
                    index = 2 * index + 1;
                }
            }
        }
    }
    maxHeap.shift();
    return maxHeap;
};

let nums = [1, 2, 3, 2, 2, 2, 5, 4, 2];
console.log(getLeastNumbers(nums, 2));