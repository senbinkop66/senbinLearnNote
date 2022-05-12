/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
*/
var findKthLargest = function(nums, k) {
    return quickSelect(nums, 0, nums.length - 1, nums.length - k);
};


var quickSelect=(arr, left, right, index)=>{
    let q = randomPartition(arr, left, right);  //基准
    if (q === index) {
        return arr[q];
    }else{
        if (q < index) {
            return quickSelect(arr, q + 1, right, index);
        }else{
            return quickSelect(arr, left, q - 1, index);
        }
    }
}

//
var randomPartition=(arr,left,right)=>{
    let i = Math.floor(Math.random() * (right - left + 1)) + left;
    swap(arr, i, right);
    return partition(arr, left, right);
}

var partition=(arr, left, right)=>{
    let datum = arr[right];
    let i = left - 1;
    for (let j = left; j < right; j++){
        if (arr[j] <= datum) {
            swap(arr ,++i, j);
        }
    }
    swap(arr, i+1, right);
    return i+1;
}

//交换元素
var swap=(arr,i,j)=>{
    let temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
}

let test=[3,2,3,1,2,4,5,5,6];

console.log(findKthLargest(test,4));  //