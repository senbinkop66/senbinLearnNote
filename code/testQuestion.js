/**
 * 
 * @param num int整型一维数组 
 * @return int整型二维数组
 */
function threeSum( nums ) {
    nums = nums.sort((a, b) => a - b);  //排序
    let n = nums.length;
    const ans = [];
    let sum = 0;
    //枚举第一个数字
    for (let first = 0; first < n; first++){
        // 需要和上一次枚举的数不相同
        if (nums[first] > 0) {
            //first元素大于0后，后面sum不可能等于0
            break;
        }
        if (first > 0 && nums[first] === nums[first - 1]){
            continue;
        }
        //第三个数对应的指针初始指向数组的最右端
        let third = n - 1;
        let target = -nums[first];
        for (let second = first + 1; second < n; second++){
            if (nums[second] > target) {
                //前两个元素和已经大于0，则再加第三个一定大于0;
                break;
            }
            // 需要和上一次枚举的数不相同
            if (second > first + 1 && nums[second] === nums[second - 1]) {
                continue;
            }
            // 需要保证 second 的指针在 third 的指针的左侧
            while(second < third && nums[second] + nums[third] > target){
                third--;
            }
            // 如果指针重合，随着 second 后续的增加
            // 就不会有满足 a+b+c = 0 并且 b<c 的 c 了，可以退出循环
            if (second === third) {
                break;
            }
            if (nums[second] + nums[third] === target) {
                ans.push([nums[first], nums[second], nums[third]]);
            }
        }
    }
    return ans;
}
module.exports  =  {
    threeSum : threeSum
};