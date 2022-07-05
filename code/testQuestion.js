var MyCalendar = function() {
    this.tree = new Set();
    this.lazy = new Set();
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function(start, end) {
    if (this.query(start, end - 1, 0, 1000000000, 1)) {
        return false;
    }
    this.update(start, end - 1, 0, 1000000000, 1);
    return true;
};

MyCalendar.prototype.query = function(start, end, l, r, idx) {
    if (start > r || end < l) {
        return false;
    }
    /* 如果该区间已被预订，则直接返回 */
    if (this.lazy.has(idx)) {
        return true;
    }
    if (start <= l && r <= end) {
        return this.tree.has(idx);
    } else {
        const mid = (l + r) >> 1;
        if (end <= mid) {
            return this.query(start, end, l, mid, 2 * idx);
        } else if (start > mid) {
            return this.query(start, end, mid +1, r, 2 * idx + 1);
        } else {
            return this.query(start, end, l, mid, 2 * idx) | this.query(start, end, mid + 1, r, 2 * idx + 1);
        }
    }
}

MyCalendar.prototype.update = function(start, end, l, r, idx) {
    if (r < start || end < l) {
        return;
    }
    if (start <= l && r <= end) {
        this.tree.add(idx);
        this.lazy.add(idx);
    } else {
        const mid = (l + r) >> 1;
        this.update(start, end, l, mid, 2 * idx);
        this.update(start, end, mid + 1, r, 2 * idx + 1);
        this.tree.add(idx);
    }
}