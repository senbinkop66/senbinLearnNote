/**
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    this.capacity = k + 1;   // 队列容量
    this.elements = new Array(this.capacity).fill(0);
    this.front = 0;  // 头指针
    this.rear = 0;  // 尾指针
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if (this.isFull()) {
        return false;
    }
    this.elements[this.rear] = value;
    this.rear = (this.rear + 1) % this.capacity;
    return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if (this.isEmpty()) {
        return false;
    }
    this.front = (this.front + 1) % this.capacity;
    return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    if (this.isEmpty()) {
        return -1;
    }
    return this.elements[this.front];
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    if (this.isEmpty()) {
        return -1;
    }
    return this.elements[(this.rear - 1 + this. capacity) % this.capacity];
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return this.rear === this.front;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    return ((this.rear + 1) % this.capacity) === this.front;
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */