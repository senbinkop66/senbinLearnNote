## 数据结构

### 数组

### 字符串

### 链表

### 树

前序遍历

中序遍历

后序遍历

宽度优先遍历

二叉搜索树

堆

红黑树

### 栈和队列

---

## 算法与数据操作

### 递归和循环



### 查找与排序

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



---

### 回溯法

### 动态规划和贪婪算法

### 位运算

与、或、异或、左移、右移



----

## 高质量的代码

### 代码的规范性

清晰的书写

清晰的布局

合理的命名



### 代码的完整性

功能测试(完成基本功能)

边界测试(考虑边界条件)

负面测试(做好错误处理)



三种错误处理的方法

- 函数用**返回值**来告知调用者是否出错
- 当错误发生的时候设置一个**全局变量**
- 抛出异常

|   方法   |                         优点                         |                      缺点                      |
| :------: | :--------------------------------------------------: | :--------------------------------------------: |
|  返回值  |                   和系统的API一致                    |             不能方便的使用计算结果             |
| 全局变量 |                能够方便的使用计算结果                |           用户可能会忘记检查全局变量           |
|   异常   | 可以为不同的出错原因定义不同的异常类型，逻辑清晰明了 | 有些语言不支持异常，抛出异常时对性能有负面影响 |



### 代码的鲁棒性

容错性

采取防御性编程

处理无效的输入



----

## 解决面试题的思路



### 画图让抽象问题形象化



----



----

## 3. 数组中重复的数字

找出数组中重复的数字。


在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
    let set = new Set();
    for (let i = 0; i < nums.length; i++) {
        if(set.has(nums[i])) {
            return nums[i];
        }
        set.add(nums[i]);
    }
};

let nums = [2, 3, 1, 0, 2, 5, 3];
console.log(findRepeatNumber(nums));
```

```js
// O(1)的空间查找重复元素

/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        while (nums[i] !== i) {
            if (nums[i] === nums[nums[i]]) {
                return nums[i];
            }
            let temp = nums[i];
            nums[i] = nums[temp];
            nums[temp] = temp;

        }
    }
    return false;
};

let nums = [2, 3, 1, 0, 2, 5, 3];
console.log(findRepeatNumber(nums));
```



---

## 4. 二维数组中的查找

在一个 n * m 的二维数组中，每一行都按照**从左到右递增**的顺序排序，**每一列都按照从上到下递增的顺序排序**。请完成一个高效的函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

**线性查找**
由于给定的二维数组具备每行从左到右递增以及每列从上到下递增的特点，当访问到一个元素时，可以排除数组中的部分元素。

从二维数组的右上角开始查找。如果当前元素等于目标值，则返回 true。如果当前元素大于目标值，则移到左边一列。如果当前元素小于目标值，则移到下边一行。

可以证明这种方法不会错过目标值。如果当前元素大于目标值，说明当前元素的下边的所有元素都一定大于目标值，因此往下查找不可能找到目标值，往左查找可能找到目标值。如果当前元素小于目标值，说明当前元素的左边的所有元素都一定小于目标值，因此往左查找不可能找到目标值，往下查找可能找到目标值。

```js
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function(matrix, target) {
    if (matrix === null || matrix.length === 0 || matrix[0].length === 0) {
        return false;
    }
    let m = matrix.length, n = matrix[0].length;
    let row = 0, col = n - 1;
    while (row < m && col >= 0) {
        let num = matrix[row][col];
        if (num === target) {
            return true;
        } else if (num > target) {
            col--;
        } else {
            row++;
        }
    }
    return false;
};

let nums = [
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
];
let target = 5;
console.log(findNumberIn2DArray(nums, target));
```



----

## 5. 替换空格

请实现一个函数，把字符串 s 中的每个空格替换成"%20"。

```js
/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function(s) {
    return s.replace(/\s/g, "%20")
};

let s = "We are happy.";
console.log(replaceSpace(s));
```



----

## 6. 从尾到头打印链表

输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。

使用栈或递归

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function(head) {
    let ans = [];
    while (head !== null) {
        ans.unshift(head.val);
        head = head.next;
    }
    return ans;
};
```



---

## 7. 重建二叉树

输入某二叉树的前序遍历和中序遍历的结果，请构建该二叉树并返回其根节点。

假设输入的前序遍历和中序遍历的结果中都不含重复的数字。

递归

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorderorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    let n = preorder.length;
    return buildTreeCore(preorder, inorder, 0, n - 1, 0, n - 1);
};

const buildTreeCore = (preorder, inorder, preorder_left, preorder_right, inorder_left, inorder_right) => {
    if (preorder_left > preorder_right) {
        return null;
    }
    // 前序遍历中的第一个节点就是根节点
    let preorder_root = preorder_left;
    // 在中序遍历中定位根节点
    let inorder_root = inorder.indexOf(preorder[preorder_root]);
    // 先把根节点建立出来
    let root = new TreeNode(preorder[preorder_root]);
    // 得到左子树中的节点数目
    let size_left_subtree = inorder_root - inorder_left;
    // 递归地构造左子树，并连接到根节点
    // 先序遍历中「从 左边界+1 开始的 size_left_subtree」个元素就对应了中序遍历中「从 左边界 开始到 根节点定位-1」的元素
    root.left = buildTreeCore(preorder, inorder, preorder_left + 1, preorder_left + size_left_subtree, inorder_left, inorder_root - 1);
    // 递归地构造右子树，并连接到根节点
    // 先序遍历中「从 左边界+1+左子树节点数目 开始到 右边界」的元素就对应了中序遍历中「从 根节点定位+1 到 右边界」的元素
    root.right = buildTreeCore(preorder, inorder, preorder_left + size_left_subtree + 1, preorder_right, inorder_root + 1, inorder_right);
    return root;
}
```

迭代

```
class Solution {
    public TreeNode buildTree(int[] preorder, int[] inorder) {
        if (preorder == null || preorder.length == 0) {
            return null;
        }
        TreeNode root = new TreeNode(preorder[0]);
        Deque<TreeNode> stack = new LinkedList<TreeNode>();
        stack.push(root);
        int inorderIndex = 0;
        for (int i = 1; i < preorder.length; i++) {
            int preorderVal = preorder[i];
            TreeNode node = stack.peek();
            if (node.val != inorder[inorderIndex]) {
                node.left = new TreeNode(preorderVal);
                stack.push(node.left);
            } else {
                while (!stack.isEmpty() && stack.peek().val == inorder[inorderIndex]) {
                    node = stack.pop();
                    inorderIndex++;
                }
                node.right = new TreeNode(preorderVal);
                stack.push(node.right);
            }
        }
        return root;
    }
}


```



---

## 8. 二叉树的下一个节点

给定一个二叉树和其中的一个结点，请找出**中序遍历**顺序的下一个结点并且返回 。注意，树中的结点不仅包含左右子结点，同时包含指向父结点的指针。

```js
var getNext = function(p) {
    if (p === null) {
        return null;
    }

    let pNext = null;
    if (p.right !== null) {
        //有右子树
        // 如果一个节点的右子树不为空，那么该节点的下一个节点是右子树的最左节点
        let pRight = p.right;
        while (pRight.left !== null) {
            pRight = pRight.left;
        }
        pNext = pRight;
    } else if (p.parent !== null) {
        // 无右子树
        // 否则，向上找第一个左链接指向的树包含该节点的祖先节点
        let pCurrent = p;
        let pParent = p.parent;
        while (parent !== null && pCurrent === pParent.right) {
            pCurrent = pParent;
            pParent = pParent.parent;
        }
        pNext = pParent;
    }
    return pNext;
}
```



----

## 9. 1两个栈实现队列

用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，分别完成在队列尾部插入整数和在队列头部删除整数的功能。(若队列中没有元素，deleteHead 操作返回 -1 )

 ```js
 var CQueue = function() {
     this.stack1 = [];
     this.stack2 = [];
 };
 
 /** 
  * @param {number} value
  * @return {void}
  */
 CQueue.prototype.appendTail = function(value) {
     this.stack1.push(value)
 };
 
 /**
  * @return {number}
  */
 CQueue.prototype.deleteHead = function() {
     if (this.stack2.length === 0) {
            while(this.stack1.length) {
                this.stack2.push(this.stack1.pop())
            }
    }
    if (this.stack2.length) {
        return this.stack2.pop();
    } else {
        return -1;
    }
 };
 
 /**
  * Your CQueue object will be instantiated and called as such:
  * var obj = new CQueue()
  * obj.appendTail(value)
  * var param_2 = obj.deleteHead()
  */
 ```

##     9.2两个队列实现栈

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

## 10- I. 斐波那契数列

写一个函数，输入 n ，求斐波那契（Fibonacci）数列的第 n 项（即 F(N)）。斐波那契数列的定义如下：

F(0) = 0,   F(1) = 1
F(N) = F(N - 1) + F(N - 2), 其中 N > 1.
斐波那契数列由 0 和 1 开始，之后的斐波那契数就是由之前的两数相加而得出。

答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。

```js
var fib = (n) => {
    const MOD = 1000000007;
    if (n < 2) {
        return n;
    }
    let p = 0, q = 0, r = 1;
    for (let i = 2; i <= n; i++) {
        p = q;
        q = r;
        r = (p + q) % MOD;
    }
    return r;
}

console.log(fib(10));
```

----

## 10- II. 青蛙跳台阶问题

一只青蛙一次可以跳上1级台阶，也可以跳上2级台阶。求该青蛙跳上一个 n 级的台阶总共有多少种跳法。

答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。

```js
/**
 * @param {number} n
 * @return {number}
 */
var numWays = function(n) {
    const MOD = 1000000007;
    if (n < 2) {
        return 1;
    }
    let p = 1, q = 1, r = 0;
    for (let i = 2; i <= n; i++) {
        r = (p + q) % MOD;
        p = q;
        q = r;
    }
    return r;
}

console.log(numWays(10));
```



----

## 11. 旋转数组的最小数字

把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。

给你一个可能存在 重复 元素值的数组 numbers ，它原来是一个升序排列的数组，并按上述情形进行了一次旋转。请返回旋转数组的最小元素。例如，数组 [3,4,5,1,2] 为 [1,2,3,4,5] 的一次旋转，该数组的最小值为 1。  

注意，数组 [a[0], a[1], a[2], ..., a[n-1]] 旋转一次 的结果为数组 [a[n-1], a[0], a[1], a[2], ..., a[n-2]] 。

**二分查找**

```js
/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function(numbers) {
    let n = numbers.length;
    let left = 0;
    let right = n - 1;
    let mid = 0;
    while(numbers[left] >= numbers[right]) {
        if (right - left === 1) {
            mid = right;
            break;
        }
        mid = left + Math.floor((right - left) / 2);
        // 如果left,right, mid指向的三个数字相等，只能顺序查找
        if (numbers[left] === numbers[right] && numbers[left] === numbers[mid]) {
            return minInOrder(numbers, left, right);
        }

        if (numbers[mid] >= numbers[left]) {
            left = mid;
        } else if (numbers[mid] <= numbers[right]) {
            right = mid;
        }
    }
    return numbers[mid];
}

const minInOrder = (numbers, left, right) => {
    let result = numbers[left];
    for (let i = left + 1; i <= right; ++i) {
        if (result > numbers[i]) {
            result = numbers[i];
        }
    }
    return result;
}

let numbers = [1, 0, 1, 1, 1];
// let numbers = [3, 4, 5, 1, 2];
console.log(minArray(numbers, 5));
```

```js
var minArray = function(numbers) {
    let low = 0;
    let high = numbers.length - 1;
    while (low < high) {
        const pivot = low + Math.floor((high - low) / 2);
        if (numbers[pivot] < numbers[high]) {
            high = pivot;
        } else if (numbers[pivot] > numbers[high]) {
            low = pivot + 1;
        } else {
            high -= 1;
        }
    }
    return numbers[low];
};

```



---

## 12. 矩阵中的路径

给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。如果 word 存在于网格中，返回 true ；否则，返回 false 。

单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。

例如，在下面的 3×4 的矩阵中包含单词 "ABCCED"（单词中的字母已标出）。

![img](https://assets.leetcode.com/uploads/2020/11/04/word2.jpg)

```js
//回溯法

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const h = board.length, w = board[0].length;
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    const visited = new Array(h);
    for (let i = 0; i < h; i++) {
        visited[i] = new Array(w).fill(false);
    }

    const check = (i, j, s, k) => {
        if (board[i][j] !== s.charAt(k)) {
            return false;
        } else if (k === s.length - 1) {
            return true;
        }
        visited[i][j] = true;
        let result = false;
        for (const [dx, dy] of directions) {
            let x = i + dx, y = j + dy;
            if (x >= 0 && x < h && y >= 0 && y < w) {
                if (!visited[x][y]) {
                    const flag = check(x, y, s, k + 1);
                    if (flag) {
                        result = true;
                        break;
                    }
                }
            }
        }
        visited[i][j] = false;
        return result;
    }
    for (let i = 0; i < h; i++){
        for (let j = 0; j < w; j++) {
            const flag = check(i, j, word, 0);
            if (flag) {
                return true;
            }
        }
    }
    return false;
};

let board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED";
console.log(exist(board, word));

```



---

## 13. 机器人的运动范围

地上有一个m行n列的方格，从坐标 [0,0] 到坐标 [m-1,n-1] 。一个机器人从坐标 [0, 0] 的格子开始移动，它每次可以向左、右、上、下移动一格（不能移动到方格外），也不能进入行坐标和列坐标的数位之和大于k的格子。例如，当k为18时，机器人能够进入方格 [35, 37] ，因为3+5+3+7=18。但它不能进入方格 [35, 38]，因为3+5+3+8=19。请问该机器人能够到达多少个格子？

 回溯法

```js
/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function(m, n, k) {
    if (k < 0 || m <= 0 || n <= 0) {
        return 0;
    }
    let visited = new Array(m);
    for (let i = 0; i < m; i++) {
        visited[i] = new Array(n).fill(false);
    }

    let count = movingCountCore(m, n, k, 0, 0, visited);
    return count;
};

const movingCountCore = (m, n, k, row, col, visited) => {
    let count = 0;
    if (check(m, n, k, row, col, visited)) {
        visited[row][col] = true;
        count = 1 + movingCountCore(m, n, k, row + 1, col, visited) + movingCountCore(m, n, k, row, col + 1, visited); // 只需向右和向下运动
    }
    return count;
}

const check = (m, n, k, row, col, visited) => {
    if (row >= 0 && row < m && col >= 0 && col < n && (getDigitSum(row) + getDigitSum(col) <= k) && !visited[row][col]) {
        return true;
    }
    return false;
}

const getDigitSum = (number) => {
    let sum = 0;
    while(number > 0) {
        sum += number % 10;
        number = Math.floor(number/10);
    }
    return sum;
}

let m = 2, n = 3, k = 1;
console.log(movingCount(m, n, k));
```



----

## 14. 剪绳子

给你一根长度为 n 的绳子，请把绳子剪成整数长度的 m 段（m、n都是整数，n>1并且m>1），每段绳子的长度记为 k[0],k[1]...k[m-1] 。请问 k[0]*k[1]*...*k[m-1] 可能的最大乘积是多少？例如，当绳子的长度是8时，我们把它剪成长度分别为2、3、3的三段，此时得到的最大乘积是18。

**动态规划**

```js
/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function(n) {
    const dp = new Array(n + 1).fill(0);
    for (let i = 2; i <= n; i++) {
        let curMax = 0;
        for (let j = 1; j < i; j++) {
            curMax = Math.max(curMax, Math.max(j * (i - j), j * dp[i - j]));
        }
        dp[i] = curMax;
    }
    return dp[n];
};
```

**优化的动态规划**

计算dp[i]的值只需考虑j=2和j=3的情况

```js
/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function(n) {
    const dp = new Array(n + 1).fill(0);
    dp[2] = 1;
    for (let i = 3; i <= n; i++) {
        dp[i] = Math.max(Math.max(2 * (i - 2), 2 * dp[i - 2]), Math.max(3 * (i - 3), 3 * dp[i - 3]));
    }
    return dp[n];
};

console.log(cuttingRope(10));
```



**贪婪算法**

```js
/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function(n) {
    if (n < 4) {
        return n - 1;
    }
    let timesOf3 = Math.floor(n / 3);  //  尽可能多的得到长度为3的绳子
    // 当最后剩下长度为4的时候，不能再剪去长度为3，因为2x2 > 3x1
    if (n - timesOf3 * 3 === 1) {
        timesOf3 -= 1;
    }
    let timesOf2 = (n - timesOf3 * 3) / 2;
    return Math.pow(3, timesOf3) * Math.pow(2, timesOf2);
};

console.log(cuttingRope(10));
```



----

## 15.  二进制中1的个数

编写一个函数，输入是一个无符号整数（以二进制串的形式），返回其二进制表达式中数字位数为 '1' 的个数（也被称为 汉明重量).）。

 提示：

请注意，在某些语言（如 Java）中，没有无符号整数类型。在这种情况下，输入和输出都将被指定为有符号整数类型，并且不应影响您的实现，因为无论整数是有符号的还是无符号的，其内部的二进制表示形式都是相同的。
在 Java 中，编译器使用 二进制补码 记法来表示有符号整数。因此，在上面的 示例 3 中，输入表示有符号整数 -3。

**循环检查二进制位**

```js
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let ans = 0;
    for (let i = 0; i < 32; i++) {
        if ((n & (1 << i)) !== 0) {
            ans++;
        }
    }
    return ans;
};

let n = 11;
console.log(hammingWeight(n));
```

**位运算优化**

```js
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let ans = 0;
    while (n) {
        n &= (n - 1);
        ans++;
    }
    return ans;
};

let n = 11;
console.log(hammingWeight(n));
```



---

## 16.  数值的整数次方

实现 [pow(*x*, *n*)](https://www.cplusplus.com/reference/valarray/pow/) ，即计算 x 的 n 次幂函数（即，xn）。不得使用库函数，同时不需要考虑大数问题。

**快速幂 + 递归**

```js
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    return n >= 0 ? quickMul(x, n) : 1.0 / quickMul(x, -n);
};

const quickMul = (x, n) => {
    if (n === 0) {
        return 1;
    }
    let ans = quickMul(x, Math.floor(n / 2));
    ans *= ans;
    return n % 2 === 0 ? ans : ans * x;
}

console.log(myPow(8.95371, -1));

```

**快速幂 + 迭代**

```js
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    return n >= 0 ? quickMul(x, n) : 1.0 / quickMul(x, -n);
};

const quickMul = (x, n) => {
    
    let ans = 1;
    // 贡献的初始值为 x
    let x_contribute = x;
    // 在对 N 进行二进制拆分的同时计算答案
    while (n > 0) {
        if (n % 2 === 1) {
            // 如果 N 二进制表示的最低位为 1，那么需要计入贡献
            ans *= x_contribute;
        }
        // 将贡献不断地平方
        x_contribute *= x_contribute;
        // 舍弃 N 二进制表示的最低位，这样我们每次只要判断最低位即可
        n = Math.floor(n / 2);
    }
    return ans;
}

console.log(myPow(8.95371, -1));

```



----

## 17.  打印从1到最大的n位数

输入数字 `n`，按顺序打印出从 1 到最大的 n 位十进制数。比如输入 3，则打印出 1、2、3 一直到最大的 3 位数 999。

说明：

- 用返回一个整数列表来代替打印
- n 为正整数

```js
/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function(n) {
    // 考虑大数溢出问题，使用字符串存储大数
    let end = Math.pow(10, n);
    let ans = new Array(n - 1);
    for (let i = 1; i < end; i++) {
        ans[i - 1] = i;
    }
    return ans;
};

console.log(printNumbers(3));

```



----

## 18-1.  删除链表的节点



给定单向链表的头指针和一个要删除的节点的值，定义一个函数删除该节点。

返回删除后的链表的头节点。

**注意：**此题对比原题有改动

**说明：**

- 题目保证链表中节点的值互不相同
- 若使用 C 或 C++ 语言，你不需要 `free` 或 `delete` 被删除的节点



```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function(head, val) {
    let cur = new ListNode(null);
    cur.next = head;
    let prev = cur;  // 确保头结点
    while (head) {
        if (head.val === val) {
            break;
        }
        head = head.next;
        cur = cur.next;
    }
    if (cur.next) {
        cur.next = cur.next.next;
    }
    return prev.next;
};
```



## 18-2. 在O(1)时间内删除链表节点

给定单向链表的头指针和一个要删除的节点，定义一个函数删除该节点。

返回删除后的链表的头节点。

**和下一个节点交换**

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function(head, deleteNode) {
    if (!head || !deleteNode) {
        return null;
    }
    
    if (deleteNode.next !== null) {
        // 要删除的节点不是尾节点
        deleteNode.val = deleteNode.next.val;  // 把下一节点值赋值到要删除的节点
        deleteNode.next = deleteNode.next.next;   // 删除下一结点
    } else if (head.next === null && head === deleteNode) {
        // 链表只有一个几点，删除头结点，也是尾节点
        head = null;
        deleteNode = null;
    } else {
        // 链表有多个节点，要删除的是尾节点
        let p = head;
        // 遍历到最后节点
        while (p.next !== deleteNode) {
            p = p.next;
        }
        p.next = null;
        deleteNode = null;
    }
    return head;
};
```



----

## 19.  正则表达式匹配

请实现一个函数用来匹配包含'. '和'*'的正则表达式。模式中的字符'.'表示任意一个字符，而'*'表示它前面的字符可以出现任意次（含0次）。在本题中，匹配是指字符串的所有字符匹配整个模式。例如，字符串"aaa"与模式"a.a"和"ab*ac*a"匹配，但与"aa.a"和"ab*a"均不匹配。

**动态规划**

```js
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    let m = s.length;
    let n = p.length;

    const dp = new Array(m +1);
    for (let i = 0; i <= m; i++) {
        dp[i] = new Array(n + 1).fill(false);
    }
    dp[0][0] = true;

    for (let i = 0; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (p[j - 1] === "*") {
                dp[i][j] = dp[i][j - 2];
                if (matchs(s, p, i, j - 1)) {
                    dp[i][j] = dp[i][j] || dp[i - 1][j];
                }
            } else {
                if (matchs(s, p, i, j)) {
                    dp[i][j] = dp[i - 1][j - 1];
                }
            }
        }
    }
    return dp[m][n];
};

const matchs = (s, p, i, j) => {
    if (i === 0) {
        return false;
    }
    if (p[j - 1] === ".") {
        return true;
    }
    return s[i - 1] === p[j - 1];
}

let s = "aaa", p = "ab*ac*a";
console.log(isMatch(s, p));
```



----

## 20.  表示数值的字符串*

请实现一个函数用来判断字符串是否表示数值（包括整数和小数）。

数值（按顺序）可以分成以下几个部分：

若干空格
一个 小数 或者 整数
（可选）一个 'e' 或 'E' ，后面跟着一个 整数
若干空格
小数（按顺序）可以分成以下几个部分：

（可选）一个符号字符（'+' 或 '-'）
下述格式之一：
至少一位数字，后面跟着一个点 '.'
至少一位数字，后面跟着一个点 '.' ，后面再跟着至少一位数字
一个点 '.' ，后面跟着至少一位数字
整数（按顺序）可以分成以下几个部分：

（可选）一个符号字符（'+' 或 '-'）
至少一位数字
部分数值列举如下：

["+100", "5e2", "-123", "3.1416", "-1E-16", "0123"]
部分非数值列举如下：

["12e", "1a3.14", "1.2.3", "+-5", "12e+5.4"]

**确定有限状态自动机**

![确定有限状态自动机](E:\pogject\学习笔记\image\leetcode\确定有限状态自动机.png)

![fig1](https://assets.leetcode-cn.com/solution-static/jianzhi_20/jianzhi_20_fig1.png)

```go
type State int
type CharType int

const (
    STATE_INITIAL State = iota
    STATE_INT_SIGN
    STATE_INTEGER
    STATE_POINT
    STATE_POINT_WITHOUT_INT
    STATE_FRACTION
    STATE_EXP
    STATE_EXP_SIGN
    STATE_EXP_NUMBER
    STATE_END
)

const (
    CHAR_NUMBER CharType = iota
    CHAR_EXP
    CHAR_POINT
    CHAR_SIGN
    CHAR_SPACE
    CHAR_ILLEGAL
)

func toCharType(ch byte) CharType {
    switch ch {
    case '0', '1', '2', '3', '4', '5', '6', '7', '8', '9':
        return CHAR_NUMBER
    case 'e', 'E':
        return CHAR_EXP
    case '.':
        return CHAR_POINT
    case '+', '-':
        return CHAR_SIGN
    case ' ':
        return CHAR_SPACE
    default:
        return CHAR_ILLEGAL
    }
}

func isNumber(s string) bool {
    transfer := map[State]map[CharType]State{
        STATE_INITIAL: map[CharType]State{
            CHAR_SPACE:  STATE_INITIAL,
            CHAR_NUMBER: STATE_INTEGER,
            CHAR_POINT:  STATE_POINT_WITHOUT_INT,
            CHAR_SIGN:   STATE_INT_SIGN,
        },
        STATE_INT_SIGN: map[CharType]State{
            CHAR_NUMBER: STATE_INTEGER,
            CHAR_POINT:  STATE_POINT_WITHOUT_INT,
        },
        STATE_INTEGER: map[CharType]State{
            CHAR_NUMBER: STATE_INTEGER,
            CHAR_EXP:    STATE_EXP,
            CHAR_POINT:  STATE_POINT,
            CHAR_SPACE:  STATE_END,
        },
        STATE_POINT: map[CharType]State{
            CHAR_NUMBER: STATE_FRACTION,
            CHAR_EXP:    STATE_EXP,
            CHAR_SPACE:  STATE_END,
        },
        STATE_POINT_WITHOUT_INT: map[CharType]State{
            CHAR_NUMBER: STATE_FRACTION,
        },
        STATE_FRACTION: map[CharType]State{
            CHAR_NUMBER: STATE_FRACTION,
            CHAR_EXP:    STATE_EXP,
            CHAR_SPACE:  STATE_END,
        },
        STATE_EXP: map[CharType]State{
            CHAR_NUMBER: STATE_EXP_NUMBER,
            CHAR_SIGN:   STATE_EXP_SIGN,
        },
        STATE_EXP_SIGN: map[CharType]State{
            CHAR_NUMBER: STATE_EXP_NUMBER,
        },
        STATE_EXP_NUMBER: map[CharType]State{
            CHAR_NUMBER: STATE_EXP_NUMBER,
            CHAR_SPACE:  STATE_END,
        },
        STATE_END: map[CharType]State{
            CHAR_SPACE: STATE_END,
        },
    }
    state := STATE_INITIAL
    for i := 0; i < len(s); i++ {
        typ := toCharType(s[i])
        if _, ok := transfer[state][typ]; !ok {
            return false
        } else {
            state = transfer[state][typ]
        }
    }
    return state == STATE_INTEGER || state == STATE_POINT || state == STATE_FRACTION || state == STATE_EXP_NUMBER || state == STATE_END
}


```



----

## 21.  调整数组顺序使奇数位于偶数前面

输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有奇数在数组的前半部分，所有偶数在数组的后半部分。

 **双指针**

```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function(nums) {
    let left = 0, right = nums.length - 1;
    while (left < right) {
        while (left < right && !isEven(nums, left)) {
            left++;
        }
        while (left < right && isEven(nums, right)) {
            right--;
        }
        if (left < right) {
            let temp = nums[left];
            nums[left] = nums[right];
            nums[right] = temp;
        }
    }
    return nums;
};

const isEven = (nums, index) => {
    if (nums[index] % 2 === 0) {
        return true;
    }
}
```



----

##  22.  链表中倒数第k个节点

输入一个链表，输出该链表中倒数第k个节点。为了符合大多数人的习惯，本题从1开始计数，即链表的尾节点是倒数第1个节点。

例如，一个链表有 6 个节点，从头节点开始，它们的值依次是 1、2、3、4、5、6。这个链表的倒数第 3 个节点是值为 4 的节点。

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function(head, k) {
    if (head === null || k === 0) {
        return null;
    }
    let fast = head, slow = head;
    // fast在slow前k个节点
    for (let i = 0; i < k - 1; i++) {
        if (fast.next !== null) {
            // 确保链表中有k个节点
            fast = fast.next;
        } else {
            return null;
        }
    }
    while (fast.next !== null) {
        fast = fast.next;
        slow = slow.next;
    }
    return slow;
};
```



----

## 23. 链表中环的入口节点

给定一个链表，返回链表开始入环的第一个节点。 从链表的头节点开始沿着 next 指针进入环的第一个节点为环的入口节点。如果链表无环，则返回 null。

为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。注意，pos 仅仅是用于标识环的情况，并不会作为参数传递到函数中。

说明：不允许修改给定的链表。

思路:

找出环中任意一个节点

得到环中节点的数目

找到环的入口节点



![fig1](https://assets.leetcode-cn.com/solution-static/jianzhi_II_022/jianzhi_II_022_fig1.png)

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if (head === null) {
        return null;
    }
    let slow = head, fast = head;
    while (fast !== null) {
        slow = slow.next;
        if (fast.next !== null) {
            fast = fast.next.next;
        } else {
            return null;
        }
        if (slow === fast) {
            //有环
            let p = head;
            while (p !== slow) {
                p = p.next;
                slow = slow.next;
            }
            return p;
        }
    }
    return null;
};
```



----

## 24.  反转链表

定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。

**迭代**

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let prev = null;
    let cur = head;
    while (cur !== null) {
        let next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    return prev;
};
```

**递归**

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (head === null || head.next === null) {
        return head;
    }
    const newHead = reverseList(head.next);
    head.next.next = head;  // 关键
    head.next = null;
    
    return newHead;
};
```



----

##  25. 合并两个排序的链表

输入两个递增排序的链表，合并这两个链表并使新链表中的节点仍然是递增排序的。

**递归**

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if (l1 === null) {
        return l2;
    } else if (l2 === null) {
        return l1;
    } else if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
};
```

**迭代**

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    const preHead = new ListNode(-1);

    let prev = preHead;
    while (l1 !== null && l2 !== null) {
        if (l1.val <= l2.val) {
            prev.next = l1;
            l1 = l1.next;
        } else {
            prev.next = l2;
            l2 = l2.next;
        }
        prev = prev.next;
    }
    //  合并后 l1 和 l2 最多只有一个还未被合并完，我们直接将链表末尾指向未合并完的链表即可
    prev.next = l1 === null ? l2 : l1;
    return preHead.next;
};
```



----

## 26. 树的子结构

输入两棵二叉树A和B，判断B是不是A的子结构。(约定空树不是任意一个树的子结构)

B是A的子结构， 即 A中有出现和B相同的结构和节点值。

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function(A, B) {
    let ans = false;
    if (A !== null && B !== null) {
        if (A.val === B.val) {
            ans = dfs(A, B);
        }
        if (!ans) {
            ans = isSubStructure(A.left, B);
        }
        if (!ans) {
            ans = isSubStructure(A.right, B);
        }
    }
    return ans;
};

const dfs = (root1, root2) => {
    if (root2 === null) {
        return true;
    }
    if (root1 === null) {
        return false;
    }
    if (root1.val !== root2.val) {
        return false;
    }
    return dfs(root1.left, root2.left) && dfs(root1.right, root2.right);
}
```



----

## 27. 二叉树的镜像

请完成一个函数，输入一个二叉树，该函数输出它的镜像。

递归

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function(root) {
    if (root === null) {
        return null;
    }
    const left = mirrorTree(root.left);
    const right = mirrorTree(root.right);
    root.left = right;
    root.right = left;
    return root;
};
```

迭代

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function(root) {
    if (root === null) {
        return null;
    }
    let arr = [root];
    while (arr.length) {
        let n = arr.length;
        while (n > 0) {
            n--;
            let node = arr.shift();
            let temp = node.left;
            node.left = node.right;
            node.right = temp;
            if (node.left !== null) {
                arr.push(node.left);
            }
            if (node.right !== null) {
                arr.push(node.right);
            }
        }
    }
    return root;
};
```



----

## 28. 对称的二叉树

请实现一个函数，用来判断一棵二叉树是不是对称的。如果一棵二叉树和它的镜像一样，那么它是对称的。

我们可以实现这样一个递归函数，通过「同步移动」两个指针的方法来遍历这棵树，p 指针和 q 指针一开始都指向这棵树的根，随后 p 右移时，q 左移，p 左移时，q 右移。每次检查当前 p 和 q 节点的值是否相等，如果相等再判断左右子树是否对称。

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    return check(root, root);
};

const check = (p, q) => {
    if (p === null && q === null) {
        return true;
    }
    if (p === null || q === null) {
        return false;
    }
    return p.val === q.val && check(p.left, q.right) && check(p.right, q.left);
}
```

用递归的方法实现了对称性的判断，那么如何用迭代的方法实现呢？首先我们引入一个队列，这是把递归程序改写成迭代程序的常用方法。初始化时我们把根节点入队两次。每次提取两个结点并比较它们的值（队列中每两个连续的结点应该是相等的，而且它们的子树互为镜像），然后将两个结点的左右子结点按相反的顺序插入队列中。当队列为空时，或者我们检测到树不对称（即从队列中取出两个不相等的连续结点）时，该算法结束。

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    return check(root, root);
};

const check = (p, q) => {
    const arr = [];
    arr.push(p);
    arr.push(q);

    while (arr.length) {
        let u = arr.shift();
        let v = arr.shift();
        if (u === null && v === null) {
            continue;
        }
        if ((u === null || v === null) || (u.val !== v.val)) {
            return false;
        }
        arr.push(u.left);
        arr.push(v.right);
        arr.push(u.right);
        arr.push(v.left);
    }
    return true;
}
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



