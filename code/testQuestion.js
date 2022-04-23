function mergeSort(arr){
    //归并排序
    let n=arr.length;
    if(n<2){
        return arr;
    }
    let middle=Math.floor(n/2);
    let left=arr.slice(0,middle);
    let right=arr.slice(middle);

    return merge(mergeSort(left),mergeSort(right));
}

function merge(left,right){
    let result=[];
    while(left.length && right.length){
        if (left[0]<=right[0]) {
            result.push(left.shift());
        }else{
            result.push(right.shift());
        }
    }
    while(left.length){
        result.push(left.shift());
    }
    while(right.length){
        result.push(right.shift());
    }
    return result;
}

let test=[2,4,1,6,5,8,9,3,7,0];
let result=mergeSort(test);
console.log(result);