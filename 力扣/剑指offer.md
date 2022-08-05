## 查找与排序

顺序查找

二分查找

哈希表查找

二叉树查找



插入排序

冒泡排序

归并排序

快速排序

```js
const partition = (nums, n, start, end) => {
    if (n <= 0 || start < 0 || end >= n) {
        return;
    }
    let index = randomInRange(start, end);
    swap(nums, index, end);

    let small = start - 1;
    for (index = start; index < end; ++index) {
        //这部思路还不理解
        if (nums[index] < nums[end]) {
            ++small;
            if (small !== index) {
                swap(nums, index, small);
            }
        }
    }
    ++small;
    swap(nums, small, end);
    return small;
}

const quickSort = (nums, n, start, end) => {
    if (start === end) {
        return;
    }
    let index = partition(nums, n, start, end);
    if (index > start) {
        quickSort(nums, n, start, index - 1);
    }
    if (index < end) {
        quickSort(nums, n, index + 1, end);
    }
}

const swap = (nums, i, j) => {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}

const randomInRange = (start, end) => {
    return start + Math.floor(Math.random() * (end - start));
}

let nums = [1, 3, 9, 5, 7, 8, 4, 2, 6];
quickSort(nums, 9, 0, 8);
console.log(nums)
```



## 9. 两个栈实现队列

 ```js
    // 两个栈实现队列
    function Queue() {
        this.stack1 = [];
        this.stack2 = [];
    }
    
    Queue.prototype.appendTail = function(value) {
        this.stack1.push(value)
    }
    
    Queue.prototype.deleteHead = function() {
        if (this.stack2.length === 0) {
            while(this.stack1.length) {
                this.stack2.push(this.stack1.pop())
            }
        }
        if (this.stack2.length) {
            return this.stack2.pop();
        } else {
            throw new Error("queue is empty");
        }
    }
    
 
 ```

##     9.两个队列实现栈

```js
   //两个队列实现栈
   function Stack() {
       this.queue1 = [];
       this.queue2 = [];
   }
   
   Stack.prototype.push = function(value){
       this.queue1.push(value);
   }
   
   Stack.prototype.pop = function(){
       while(this.queue1.length > 1) {
           this.queue2.push(this.queue1.shift());
       }
       if (this.queue1.length) {
           let top = this.queue1.shift();
           let temp = this.queue1;
           this.queue1 = this.queue2;
           this.queue2 = temp;
           return top;
       } else {
           throw new Error("stack is empty");
       }
       
   }
   
   let stack = new Stack();
   stack.push(2);
   stack.push(3);
   stack.push(4);
   console.log(stack.pop())
   stack.push(5);
   console.log(stack)
```



----

## 11. 旋转数组的最小数字

```js
const minNums = (nums, n) => {
    let left = 0;
    let right = n - 1;
    let mid = 0;
    while(nums[left] >= nums[right]) {
        if (right - left === 1) {
            mid = right;
            break;
        }
        mid = left + Math.floor((right - left) / 2);
        // 如果left,right, mid指向的三个数字相等，只能顺序查找
        if (nums[left] === nums[right] && nums[left] === nums[mid]) {
            return minInOrder(nums, left, right);
        }

        if (nums[mid] >= nums[left]) {
            left = mid;
        } else if (nums[mid] <= nums[right]) {
            right = mid;
        }
    }
    return nums[mid];
}

const minInOrder = (nums, left, right) => {
    let result = nums[left];
    for (let i = left + 1; i <= right; ++i) {
        if (result > nums[i]) {
            result = nums[i];
        }
    }
    return result;
}

let nums = [1, 0, 1, 1, 1];
// let nums = [3, 4, 5, 1, 2];
console.log(minNums(nums, 5));
```



----

## 29. 排序的循环链表

给定循环单调非递减列表中的一个点，写一个函数向这个列表中插入一个新元素 insertVal ，使这个列表仍然是循环升序的。

给定的可以是这个列表中任意一个顶点的指针，并不一定是这个列表中最小元素的指针。

如果有多个满足条件的插入位置，可以选择任意一个位置插入新的值，插入后整个列表仍然保持有序。

如果列表为空（给定的节点是 null），需要创建一个循环有序列表并返回这个节点。否则。请返回原先给定的节点。

```js
/**
 * // Definition for a Node.
 * function Node(val, next) {
 *     this.val = val;
 *     this.next = next;
 * };
 */

/**
 * @param {Node} head
 * @param {number} insertVal
 * @return {Node}
 */
var insert = function(head, insertVal) {
    const node = new Node(insertVal);
    if (!head) {
        // 没有结点
        node.next = node;
        return node;
    }
    if (head.next === head) {
        // 只有一个结点
        head.next = node;
        node.next = head;
        return head;
    }

    let curr = head, next = head.next;
    while (next !== head) {
        if (insertVal >= curr.val && insertVal <= next.val) {
            break;
        }
        if (curr.val > next.val) {
            //尾结点
            if (insertVal > curr.val || insertVal < next.val) {
                break;
            }
        }
        curr = curr.next;
        next = next.next;
    }
    curr.next = node;
    node.next = next;
    return head;
};
```



----

## 41. 滑动窗口的平均值

给定一个整数数据流和一个窗口大小，根据该滑动窗口的大小，计算滑动窗口里所有数字的平均值。

实现 MovingAverage 类：

MovingAverage(int size) 用窗口大小 size 初始化对象。
double next(int val) 成员函数 next 每次调用的时候都会往滑动窗口增加一个整数，请计算并返回数据流中最后 size 个值的移动平均值，即滑动窗口里所有数字的平均值。



```js
/**
 * Initialize your data structure here.
 * @param {number} size
 */
var MovingAverage = function(size) {
	this.queue = [];
    this.size = size;
    this.sum = 0;
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
	if (this.queue.length === this.size) {
        this.sum -= this.queue.shift();
    }
    this.queue.push(val);
    this.sum += val;
    return this.sum / this.queue.length;
};

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */
```



----

## 91. 粉刷房子

假如有一排房子，共 n 个，每个房子可以被粉刷成红色、蓝色或者绿色这三种颜色中的一种，你需要粉刷所有的房子并且使其相邻的两个房子颜色不能相同。

当然，因为市场上不同颜色油漆的价格不同，所以房子粉刷成不同颜色的花费成本也是不同的。每个房子粉刷成不同颜色的花费是以一个 n x 3 的正整数矩阵 costs 来表示的。

例如，costs[0][0] 表示第 0 号房子粉刷成红色的成本花费；costs[1][2] 表示第 1 号房子粉刷成绿色的花费，以此类推。

请计算出粉刷完所有房子最少的花费成本。

提示:

costs.length == n
costs[i].length == 3
1 <= n <= 100
1 <= costs[i][j] <= 20

```js
/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCost = function(costs) {
    let n = costs.length;
    let dp = new Array(3).fill(0);
    for (let i = 0; i < 3; i++) {
        dp[i] = costs[0][i];
    }
    for (let i = 1; i < n; i++) {
        const newDp = new Array(3).fill(0);
        for (let j = 0; j < 3; j++) {
            newDp[j] = Math.min(dp[(j + 1) % 3], dp[(j +2) % 3]) + costs[i][j];
        }
        dp = newDp;
    }
    return Math.min(...dp);
};

let costs = [[17,2,17],[16,16,5],[14,3,19]];
console.log(minCost(costs));
```



---

## 114. 外星文字典

现有一种使用英语字母的外星文语言，这门语言的字母顺序与英语顺序不同。

给定一个字符串列表 words ，作为这门语言的词典，words 中的字符串已经 按这门新语言的字母顺序进行了排序 。

请你根据该词典还原出此语言中已知的字母顺序，并 按字母递增顺序 排列。若不存在合法字母顺序，返回 "" 。若存在多种可能的合法字母顺序，返回其中 任意一种 顺序即可。

字符串 s 字典顺序小于 字符串 t 有两种情况：

在第一个不同字母处，如果 s 中的字母在这门外星语言的字母顺序中位于 t 中字母之前，那么 s 的字典顺序小于 t 。
如果前面 min(s.length, t.length) 字母都相同，那么 s.length < t.length 时，s 的字典顺序也小于 t 。

提示：

1 <= words.length <= 100
1 <= words[i].length <= 100
words[i] 仅由小写英文字母组成

拓扑排序 + 深度优先搜索

```
/**
 * @param {string[]} words
 * @return {string}
 */
var alienOrder = function(words) {
    const VISITING = 1, VISITED = 2;
    let valid = true;
    const edges = new Map();
    const states = new Map();
    const length = words.length;
    for (const word of words) {
        const wordLength = word.length;
        for (let j = 0; j < wordLength; j++) {
            const c = word[j];
            if (!edges.has(c)) {
                edges.set(c, []);
            }
        }
    }

    const addEdge = (before, after) => {
        const length1 = before.length, length2 = after.length;
        const length = Math.min(length1, length2);
        let index = 0;
        while (index < length) {
            const c1 = before[index], c2 = after[index];
            if (c1 !== c2) {
                edges.get(c1).push(c2);
                break;
            }
            index++;
        }
        if (index === length && length1 > length2) {
            valid = false;
        }
    }

    const dfs = (u) => {
        states.set(u, VISITING);
        const adjacent = edges.get(u);
        for (const v of adjacent) {
            if (!states.has(v)) {
                dfs(v);
                if (!valid) {
                    return;
                }
            } else if (states.get(v) === VISITING) {
                valid = false;
                return;
            }
        }
        states.set(u, VISITED);
        order[index] = u;
        index--;
    }

    for (let i = 1; i < length && valid; i++) {
        addEdge(words[i - 1], words[i]);
    }
    const order = new Array(edges.size).fill(0);
    let index = edges.size - 1;
    const letterSet = edges.keys();
    for (const u of letterSet) {
        if (!states.has(u)) {
            dfs(u);
        }
    }
    if (!valid) {
        return "";
    }
    return order.join('');

    
};


let words = ["wrt","wrf","er","ett","rftt"];
let result = alienOrder(words);
console.log(result);
```

---



