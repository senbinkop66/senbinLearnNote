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



