var quickSort=(arr)=>{
    quick(arr, 0, arr.length - 1);
}

var quick=(arr,left,right)=>{
    let index;
    if (left < right) {
        //划分数组
        index=partition(arr, left, right);
        if (left < index - 1) {
            quick(arr, left, index - 1);
        }
        if (index < right) {
            quick(arr, index, right);
        }
    }
}

// 一次快排
var partition=(arr,left,right)=>{
    //取中间项为基准
    let datum=arr[Math.floor(Math.random() * (right - left + 1)) + left];
    let i=left;
    let j=right;
    // 开始调整
    while (i <= j){
        //左指针右移
        while(arr[i] < datum){
            i++;
        }
        // 右指针左移
        while(arr[j] > datum){
            j--;
        }
        //交换
        if (i <= j) {
            swap(arr, i, j);
            i += 1;
            j -= 1;
        }
    }
    return i;
}

//交换元素
var swap=(arr,i,j)=>{
    let temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
}

let test=[3,2,3,1,2,4,5,5,6];
quickSort(test);
console.log(test);  //