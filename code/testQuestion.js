/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.pos = new Map();
    for (let i = 0; i < nums.length; ++i) {
        if (!this.pos.has(nums[i])) {
            this.pos.set(nums[i], []);
        }
        
        this.pos.get(nums[i]).push(i);
    }
};

/** 
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function(target) {
    const indices = this.pos.get(target);
    return indices[Math.floor(Math.random() * indices.length)];
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */