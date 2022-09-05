/**
 * @param {number} capacity
 */
var LFUCache = function(capacity) {
    this.capacity = capacity;
    // 缓存存储
    this.values = new Map();  // key:value
    this.times = new Map();  // key:次数

    // 找到当前次数最小的 key
    // useMap 更新的逻辑，其实 vue 的响应式依赖管理很像
    this.useMap = new Map();  // 次数：set(key)
    this.min = 0;  // 最小次数是多少
};

LFUCache.prototype.updateContent = function(key) {
    let time = this.times.get(key);
    let useSet = this.useMap.get(time);

    if (this.min === time && useSet.size === 1) {
        //当前次数是最小值 并且 这个次数set集合只有一个 key
        this.min += 1;
    }
    time += 1;
    useSet.delete(key);
    useSet = this.useMap.get(time) || new Set();
    useSet.add(key);

    this.useMap.set(time, useSet);
    this.times.set(key, time);
};

/** 
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function(key) {
    if (this.values.has(key)) {
        // 更新计数
        this.updateContent(key);
        return this.values.get(key);
    }
    return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function(key, value) {
    // 缓存空间为 0，不操作
    if (this.capacity === 0) {
        return;
    }
    if (this.values.has(key)) {
        // key值存在，不需要淘汰
        this.values.set(key, value);
        this.updateContent(key);
    } else {
        // key值不存在，判断是否超过缓存 size 
        if (this.capacity === this.values.size) {
            // 满了需要淘汰掉 次数最少的、最长时间未访问的
            let minSet = this.useMap.get(this.min);
            let minKey = minSet.keys().next().value;
            minSet.delete(minKey);
            this.values.delete(minKey);
            this.times.delete(minKey);
        }

        // 加入缓存
        this.values.set(key, value);
        // 这个数据出现了 1 次
        let useSet = this.useMap.get(1) || new Set();
        useSet.add(key);
        this.useMap.set(1, useSet);
        this.times.set(key, 1);
        this.min = 1;
    }
};

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */