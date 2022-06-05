/**
 * @param {number} radius
 * @param {number} x_center
 * @param {number} y_center
 */
var Solution = function(radius, x_center, y_center) {
    this.radius = radius;
    this.x_center = x_center;
    this.y_center = y_center;
};

/**
 * @return {number[]}
 */
Solution.prototype.randPoint = function() {
    while (true){
        let x = Math.random() * (this.radius * 2) - this.radius;
        let y = Math.random() * (this.radius * 2) - this.radius;
        if (x * x + y * y <= this.radius * this.radius) {
            return [this.x_center + x, this.y_center + y];
        }
    }
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(radius, x_center, y_center)
 * var param_1 = obj.randPoint()
 */