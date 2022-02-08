/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let m=new Map();
    for(let i=0;i<nums.length;i++){
        if (m.has(nums[i])) {
            if (Math.abs(m.get(nums[i])-i)<=k) {
                return true;
            }else{
                m.set(nums[i],i);
            }
        }else{
            m.set(nums[i],i);
        }
        //console.log(m);
    }
    return false;
};

let test=[1,0,1,1];
let result=containsNearbyDuplicate(test,1);
console.log(result);