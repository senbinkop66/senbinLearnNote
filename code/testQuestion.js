/**
 * @param {number[]} arr
 * @return {number[]}
 */
var pancakeSort = function(arr) {
    let result=[];
    let n=arr.length;
    while(n>1){
        let maxValueIndex=findMaxValueIndex(arr,n);
        if (maxValueIndex!==n-1) {
            if (maxValueIndex!==0) {
                result.push(maxValueIndex+1);
                swapArrSort(arr,maxValueIndex);
            }
            result.push(n);
            swapArrSort(arr,n-1);
        }
        n--;
        //console.log(arr);
    }
    return result;

};
var findMaxValueIndex=function(arr,n){
    for(let i=0;i<n;i++){
        if (arr[i]===n) {
            return i;
        }
    }
}
var swapArrSort=function(arr,n){
    let temp;
    for(let i=0,j=n;i<j;i++,j--){
        temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
    }
}


let test=[3,2,4,5,6,1];
let result=pancakeSort(test);
console.log(result);
