/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let n=height.length;
    const container=[];
    let min;
    let maxContainer=0;
    let area=0;
    for (let i=0;i<n-1;i++){
        for(let j=1;j<n;j++){
            area=(j-i)*Math.min(height[i],height[j]);
            maxContainer=area>maxContainer ? area : maxContainer;
        }
    }
    return maxContainer;
};

let height=[1,8,6,2,5,4,8,3,7];
let result=maxArea(height);
console.log(result);