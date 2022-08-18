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

### 举例让抽象问题具体化

### 分解让复杂问题简单化



---

## 优化时间和空间效率

### 时间效率

### 时间与空间效率的平衡

改用更加高效的算法

用空间交换时间

---

## 面试中的各项能力

### 沟通能力和学习能力

#### 沟通能力

介绍项目经验还是介绍解题思路时，都需要逻辑清晰明了，语言详略得当，表述的时候重点突出、观点明确。

#### 学习能力

#### 善于提问



### 知识迁移能力



### 抽象建模能力

建模的第一步是选择合理的数据结构来表述问题。

建模的第二部是分析模型中内在的规律，并用编程语言表述这种规律。



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

## 20.  表示数值的字符串(*)

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

## 29-1. 排序的循环链表

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

##  29-2. 顺时针打印矩阵

输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字。

**模拟**

使用一个与输入矩阵大小相同的辅助矩阵 visited，其中的每个元素表示该位置是否被访问过。当一个元素被访问时，将 visited 中的对应位置的元素设为已访问。

```
var spiralOrder = function(matrix) {
    if (!matrix.length || !matrix[0].length) {
        return [];
    }
    const rows = matrix.length, columns = matrix[0].length;
    const visited = new Array(rows).fill(0).map(() => new Array(columns).fill(false));
    const total = rows * columns;
    const order = new Array(total).fill(0);

    let directionIndex = 0, row = 0, column = 0;
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    for (let i = 0; i < total; i++) { 
        order[i] = matrix[row][column];
        visited[row][column] = true;
        const nextRow = row + directions[directionIndex][0], nextColumn = column + directions[directionIndex][1];
        if (!(0 <= nextRow && nextRow < rows && 0 <= nextColumn && nextColumn < columns && !(visited[nextRow][nextColumn]))) {
            directionIndex = (directionIndex + 1) % 4;
        }
        row += directions[directionIndex][0];
        column += directions[directionIndex][1];
    }
    return order;
};

```

**按层模拟**

可以将矩阵看成若干层，首先打印最外层的元素，其次打印次外层的元素，直到打印最内层的元素。

![fig1](https://assets.leetcode-cn.com/solution-static/jianzhi_29/jianzhi_29_fig1.png)

```js
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if (!matrix.length || !matrix[0].length) {
        return [];
    }

    const ans = [];
    const rows = matrix.length, columns = matrix[0].length;

    let left = 0, right = columns - 1, top = 0, bottom = rows - 1;
    while (left <= right && top <= bottom) {
        for (let col = left; col <= right; col++) {
            // 左到右
            ans.push(matrix[top][col])
        }
        for (let row = top + 1; row <= bottom; row++) {
            // 上到下
            ans.push(matrix[row][right]);
        }
        if (left < right && top < bottom) {
            for (let col = right - 1; col > left; col--) {
                // 右到左
                ans.push(matrix[bottom][col]);
            }
            for (let row = bottom; row > top; row--) {
                // 下到上
                ans.push(matrix[row][left]);
            }
        }
        [left, right, top, bottom] = [left + 1, right - 1, top + 1, bottom - 1];
    }
    return ans;
};

let matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]];
console.log(spiralOrder(matrix));
```



----

## 30. 包含min函数的栈

定义栈的数据结构，请在该类型中实现一个能够得到栈的最小元素的 min 函数在该栈中，调用 min、push 及 pop 的时间复杂度都是 O(1)。

```js
/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = [];
    this.stackofMin = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x);
    if (this.stackofMin.length) {
        this.stackofMin.push(Math.min(x, this.stackofMin[this.stackofMin.length - 1]));
    } else {
        this.stackofMin.push(x);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop();
    this.stackofMin.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.min = function() {
    return this.stackofMin[this.stackofMin.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */
```



---

## 31. 栈的压入、弹出序列

输入两个整数序列，第一个序列表示栈的压入顺序，请判断第二个序列是否为该栈的弹出顺序。假设压入栈的所有数字均不相等。例如，序列 {1,2,3,4,5} 是某栈的压栈序列，序列 {4,5,3,2,1} 是该压栈序列对应的一个弹出序列，但 {4,3,5,1,2} 就不可能是该压栈序列的弹出序列。

```js
/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    if (pushed.length === 0) {
        return true;
    }
    const stack = [];
    let n = pushed.length;
    let j = 0;
    for (let i = 0; i < n; i++) {
        stack.push(pushed[i]);
        while (stack.length && stack[stack.length - 1] === popped[j]) {
            stack.pop();
            j++;
        }
    }
    return stack.length === 0;
};

let pushed = [1,2,3,4,5], popped = [4,5,3,2,1];

console.log(validateStackSequences(pushed, popped));
```



---

## 32 - I. 从上到下打印二叉树

从上到下打印出二叉树的每个节点，同一层的节点按照从左到右的顺序打印。

等价于层次遍历

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
 * @return {number[]}
 */
var levelOrder = function(root) {
    if (root === null) {
        return [];
    }
    const ans = [];
    const arr = [root];
    while (arr.length > 0) {
        let node = arr.shift();
        ans.push(node.val);
        if (node.left !== null) {
            arr.push(node.left);
        }
        if (node.right !== null) {
            arr.push(node.right);
        }
    }
    return ans;
};
```



----

## 32 - II. 从上到下打印二叉树 II

从上到下按层打印二叉树，同一层的节点按从左到右的顺序打印，每一层打印到一行。

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
 * @return {number[]}
 */
var levelOrder = function(root) {
    if (root === null) {
        return [];
    }
    const ans = [];
    const arr = [root];
    while (arr.length > 0) {
        let n = arr.length;
        let temp = [];
        while (n > 0) {
            let node = arr.shift();
            temp.push(node.val);
            if (node.left !== null) {
                arr.push(node.left);
            }
            if (node.right !== null) {
                arr.push(node.right);
            }
            n--;
        }
        ans.push(temp);
    }
    return ans;
};
```



----

##  32 - III. 从上到下打印二叉树 III

请实现一个函数按照之字形顺序打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右到左的顺序打印，第三行再按照从左到右的顺序打印，其他行以此类推。

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
 * @return {number[]}
 */
var levelOrder = function(root) {
    if (root === null) {
        return [];
    }
    const ans = [];
    const arr = [root];
    let isOrderLeft = true;
    while (arr.length > 0) {
        let n = arr.length;
        let temp = [];
        while (n > 0) {
            let node = arr.shift();
            // 偶数行从右向左放就行
            if (isOrderLeft) {
                temp.push(node.val);
            } else {
                temp.unshift(node.val);
            }

            if (node.left !== null) {
                arr.push(node.left);
            }
            if (node.right !== null) {
                arr.push(node.right);
            }
            n--;
        }
        ans.push(temp);
        isOrderLeft = !isOrderLeft;
    }
    return ans;
};
```



----

## 33. 二叉搜索树的后序遍历序列

输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历结果。如果是则返回 `true`，否则返回 `false`。假设输入的数组的任意两个数字都互不相同。

```js
/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function(postorder) {
    if (postorder.length < 1) {
        return true;
    }
    let n = postorder.length;
    return dfs(postorder, 0, n - 1);
};

const dfs = (postorder, i, j) => {
    if (j - i < 2) {
        return true;
    }
    let root = postorder[j];
    let left = i;  // 左子树
    while (left < j) {
        // 左子树元素一定小于根节点
        if (postorder[left] > root) {
            break;
        }
        left++;
    }
    let right = left;  // 右子树
    while (right < j) {
        if (postorder[right] < root) {
            // 右子树元素一定大于根节点
            return false;
        }
        right++;
    }
    // console.log(left, right);
    return dfs(postorder, i, left - 1) && dfs(postorder, left, j - 1);

}

let postorder = [4, 8, 6, 12, 16, 14, 10];
console.log(verifyPostorder(postorder));
```



----

## 34. 二叉树中和为某一值的路径

给你二叉树的根节点 root 和一个整数目标和 targetSum ，找出所有 从根节点到叶子节点 路径总和等于给定目标和的路径。

叶子节点 是指没有子节点的节点。

递归

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number[][]}
 */
var pathSum = function(root, target) {
    const ans = [];
    const path = [];

    const dfs = (root, res) => {
        if (root === null) {
            return;
        }
        path.push(root.val);
        res -= root.val;
        if (root.left === null && root.right === null && res === 0) {
            ans.push([...path]); // 这里记得解构，不然传入的是地址
        }
        dfs(root.left, res);
        dfs(root.right, res);
        path.pop();
    }
    dfs(root, target);
    return ans;
};

```

广度优先搜索

```

```



----

## 35. 复杂链表的复制

请实现 copyRandomList 函数，复制一个复杂链表。在复杂链表中，每个节点除了有一个 next 指针指向下一个节点，还有一个 random 指针指向链表中的任意节点或者 null。

**提示：**

- `-10000 <= Node.val <= 10000`
- `Node.random` 为空（null）或指向链表中的节点。
- 节点数目不超过 1000 。

**回溯 + 哈希表**

本题要求我们对一个特殊的链表进行深拷贝。如果是普通链表，我们可以直接按照遍历的顺序创建链表节点。而本题中因为随机指针的存在，当我们拷贝节点时，「当前节点的随机指针指向的节点」可能还没创建，因此我们需要变换思路。一个可行方案是，我们利用回溯的方式，让每个节点的拷贝操作相互独立。对于当前节点，我们首先要进行拷贝，然后我们进行「当前节点的后继节点」和「当前节点的随机指针指向的节点」拷贝，拷贝完成后将创建的新节点的指针返回，即可完成当前节点的两指针的赋值。

具体地，我们用哈希表记录每一个节点对应新节点的创建情况。遍历该链表的过程中，我们检查「当前节点的后继节点」和「当前节点的随机指针指向的节点」的创建情况。如果这两个节点中的任何一个节点的新节点没有被创建，我们都立刻递归地进行创建。当我们拷贝完成，回溯到当前层时，我们即可完成当前节点的指针赋值。注意一个节点可能被多个其他节点指向，因此我们可能递归地多次尝试拷贝某个节点，为了防止重复拷贝，我们需要首先检查当前节点是否被拷贝过，如果已经拷贝过，我们可以直接从哈希表中取出拷贝后的节点的指针并返回即可。

在实际代码中，我们需要特别判断给定节点为空节点的情况。

```javascript
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    
    let cachedNode = new Map();
    const dfs = (head) => {
        if (head === null) {
            return null;
        }
        if (!cachedNode.has(head)) {
            cachedNode.set(head, {val: head.val});
            Object.assign(cachedNode.get(head), {next: dfs(head.next), random: dfs(head.random)})
        }
        return cachedNode.get(head);
    }
    return dfs(head);
};
```



**迭代 + 节点拆分**

![复制复杂链表](E:\pogject\学习笔记\image\leetcode\复制复杂链表.png)

```js
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    if (head === null) {
        return null;
    }
    for (let node = head; node !== null; node = node.next.next) {
        const newNode = new Node(node.val, node.next, null);
        node.next = newNode;
    }
    for (let node = head; node !== null; node = node.next.next) {
        const newNode = node.next;
        //可以直接找到每一个拷贝节点 S' 的随机指针应当指向的节点，即为其原节点 S 的随机指针指向的节点 T 的后继节点 T'
        newNode.random = (node.random !== null) ? node.random.next : null;
    }

    const newHead = head.next;
    for (let node = head; node !== null; node = node.next) {
        const newNode = node.next;
        node.next = node.next.next;
        newNode.next = (newNode.next !== null) ? newNode.next.next : null;
    }
    return newHead;
};
```



----

## 36. 二叉搜索树与双向链表

输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的循环双向链表。要求不能创建任何新的节点，只能调整树中节点指针的指向。

**递归**

```js
/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function(root) {
    if (root === null) {
        return null;
    }

    let tail = null, head = null;
    dfs(root);
    // 头尾指针
    head.left = tail;
    tail.right = head;

    return head;

    function dfs(curr){
        if (curr === null) {
            return;
        }
        dfs(curr.left);
        
        if (tail === null) {
            head = curr;
        } else {
            tail.right = curr;
            curr.left = tail;
        }
        tail = curr;
        dfs(curr.right);
    }
};
```



----

## 37. 序列化二叉树

请实现两个函数，分别用来序列化和反序列化二叉树。

你需要设计一个算法来实现二叉树的序列化与反序列化。这里不限定你的序列 / 反序列化算法执行逻辑，你只需要保证一个二叉树可以被序列化为一个字符串并且将这个字符串反序列化为原始的树结构。

提示：输入输出格式与 LeetCode 目前使用的方式一致，详情请参阅 LeetCode 序列化二叉树的格式。你并非必须采取这种方式，你也可以采用其他的方法解决这个问题。

先序遍历+深度优先搜索

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    return rserialize(root, "");
};

const rserialize = (root, str) => {
    if (root === null) {
        str += "$,";
    } else {
        str += root.val + ",";
        str = rserialize(root.left, str);
        str = rserialize(root.right, str);
    }
    return str;
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    const dataArray = data.split(",");
    return rdeserialize(dataArray);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

const rdeserialize = (dataList) => {
    if (dataList[0] === "$") {
        dataList.shift();
        return null;
    }
    const root = new TreeNode(parseInt(dataList[0]));
    dataList.shift();
    root.left = rdeserialize(dataList);
    root.right = rdeserialize(dataList);

    return root;
}
```



----

##  38. 字符串的排列

输入一个字符串，打印出该字符串中字符的所有排列。

 你可以以任意顺序返回这个字符串数组，但里面不能有重复元素。

**回溯**

```js
var permutation = function(s) {
    const rec = [], vis = [];
    const n = s.length;
    const arr = Array.from(s).sort();
    const perm = [];
    const backtrack = (arr, i, n, perm) => {
        if (i === n) {
            rec.push(perm.toString());
            return;
        }
        for (let j = 0; j < n; j++) {
            if (vis[j] || (j > 0 && !vis[j - 1] && arr[j - 1] === arr[j])) {
                continue;
            }
            vis[j] = true;
            perm.push(arr[j]);
            backtrack(arr, i + 1, n, perm);
            perm.pop();
            vis[j] = false;
        }
    }

    backtrack(arr, 0, n, perm);
    const size = rec.length;
    const recArr = new Array(size).fill(0);
    for (let i = 0; i < size; i++) {
        recArr[i] = rec[i].split(',').join('');
    }
    return recArr;
};

```



**下一个排列**

具体地，我们首先对给定的字符串中的字符进行排序，即可得到当前字符串的第一个排列，然后我们不断地计算当前字符串的字典序中下一个更大的排列，直到不存在更大的排列为止即可。

这个方案的优秀之处在于，我们得到的所有排列都不可能重复，这样我们就无需进行去重的操作。同时因为无需使用回溯法，没有栈的开销，算法时间复杂度的常数较小。

```js
var permutation = function(s) {
    const ret = [];
    const arr = Array.from(s).sort();

    const nextPermutation = (arr) => {
        let i = arr.length - 2;
        while (i >= 0 && arr[i] >= arr[i + 1]) {
            i--;
        }
        if (i < 0) {
            return false;
        }
        let j = arr.length - 1;
        while (j >= 0 && arr[i] >= arr[j]) {
            j--;
        }
        swap(arr, i, j);
        reverse(arr, i + 1);
        return true;
    }

    const swap = (arr, i, j) => {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    const reverse = (arr, start) => {
        let left = start, right = arr.length - 1;
        while (left < right) {
            swap(arr, left, right);
            left++;
            right--;
        }
    }

    do {
        ret.push(arr.join(''));
    } while (nextPermutation(arr));
    const size = ret.length;
    const retArr = new Array(size).fill(0);
    for (let i = 0; i < size; i++) {
        retArr[i] = ret[i];
    }
    return retArr;
};

```



----

## 39. 数组中出现次数超过一半的数字

数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。

 你可以假设数组是非空的，并且给定的数组总是存在多数元素。

**计数**

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    if (nums.length === 0) {
        return false;
    }
    let count = 0;
    let ans;
    let n = nums.length;
    for (let i = 0; i < n; i++) {
        if (count === 0) {
            ans = nums[i];
        }
        count += (nums[i] === ans) ? 1 : -1;
    }
    return ans;
};

let nums = [1, 2, 3, 2, 2, 2, 5, 4, 2];
console.log(majorityElement(nums));
```

**排序**

```js
var majorityElement = function(nums) {
    nums.sort((a, b) => a - b);
    return nums[nums.length >> 1];
};
```

**分治**

```java
class Solution {
    private int countInRange(int[] nums, int num, int lo, int hi) {
        int count = 0;
        for (int i = lo; i <= hi; i++) {
            if (nums[i] == num) {
                count++;
            }
        }
        return count;
    }

    private int majorityElementRec(int[] nums, int lo, int hi) {
        // base case; the only element in an array of size 1 is the majority
        // element.
        if (lo == hi) {
            return nums[lo];
        }

        // recurse on left and right halves of this slice.
        int mid = (hi - lo) / 2 + lo;
        int left = majorityElementRec(nums, lo, mid);
        int right = majorityElementRec(nums, mid + 1, hi);

        // if the two halves agree on the majority element, return it.
        if (left == right) {
            return left;
        }

        // otherwise, count each element and return the "winner".
        int leftCount = countInRange(nums, left, lo, hi);
        int rightCount = countInRange(nums, right, lo, hi);

        return leftCount > rightCount ? left : right;
    }

    public int majorityElement(int[] nums) {
        return majorityElementRec(nums, 0, nums.length - 1);
    }
}

```



----

## 40. 最小的k个数

输入整数数组 `arr` ，找出其中最小的 `k` 个数。例如，输入4、5、1、6、2、7、3、8这8个数字，则最小的4个数字是1、2、3、4。

**限制：**

- `0 <= k <= arr.length <= 10000`
- `0 <= arr[i] <= 10000`

**排序**

对原数组从小到大排序后取出前 *k* 个数即可。

```js
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function(arr, k) {
    if (k === 0 || arr.length === 0) {
        return [];
    }
    arr.sort((a, b) => a - b);
    return arr.slice(0, k);
};

let nums = [1, 2, 3, 2, 2, 2, 5, 4, 2];
console.log(getLeastNumbers(nums, 2));
```

**堆**

```js
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function(arr, k) {
    if (k === 0 || arr.length === 0) {
        return [];
    }

    let maxHeap = [Infinity];  // 最大堆
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        let item = arr[i];
        if (maxHeap.length - 1 < k) {
            // 构造最大堆
            insert(item, maxHeap);
        } else {
            // 如果当前元素比最大堆的最大值小，则将堆的最大值替换成此元素，然后再重新构造成最大堆
            if (item < maxHeap[1]) {
                addToTop(item, maxHeap);
            }
        }
    }

    function insert(item, heap) {
        heap.push(item);
        let index = heap.length - 1;
        while (heap[index] > heap[parseInt(index / 2)]) {
            let temp = heap[index];
            heap[index] = heap[parseInt(index / 2)];
            heap[parseInt(index / 2)] = temp;
            index = parseInt(index / 2);
        }
    }

    function addToTop(item, heap) {
        heap[1] = item;
        let index = 1;
        while (true) {
            if (heap[2 * index] === undefined) {
                break;
            }
            if (heap[2 * index + 1] === undefined) {
                if (heap[2 * index] < heap[index]) {
                    break;
                }
                let temp = heap[2 * index];
                heap[2 * index] = heap[index];
                heap[index] = temp;
                index = 2 * index;
            } else {
                if (heap[2 * index] < heap[index] && heap[2 * index + 1] < heap[index]) {
                    break;
                }
                if (heap[2 * index] > heap[2 * index + 1]) {
                    let temp = heap[2 * index];
                    heap[2 * index] = heap[index];
                    heap[index] = temp;
                    index = 2 * index;
                } else {
                    let temp = heap[2 * index + 1];
                    heap[2 * index + 1] = heap[index];
                    heap[index] = temp;
                    index = 2 * index + 1;
                }
            }
        }
    }
    maxHeap.shift();
    return maxHeap;
};

let nums = [1, 2, 3, 2, 2, 2, 5, 4, 2];
console.log(getLeastNumbers(nums, 2));
```

**快排思想**

```java
class Solution {
    int partition(vector<int>& nums, int l, int r) {
        int pivot = nums[r];
        int i = l - 1;
        for (int j = l; j <= r - 1; ++j) {
            if (nums[j] <= pivot) {
                i = i + 1;
                swap(nums[i], nums[j]);
            }
        }
        swap(nums[i + 1], nums[r]);
        return i + 1;
    }

    // 基于随机的划分
    int randomized_partition(vector<int>& nums, int l, int r) {
        int i = rand() % (r - l + 1) + l;
        swap(nums[r], nums[i]);
        return partition(nums, l, r);
    }

    void randomized_selected(vector<int>& arr, int l, int r, int k) {
        if (l >= r) {
            return;
        }
        int pos = randomized_partition(arr, l, r);
        int num = pos - l + 1;
        if (k == num) {
            return;
        } else if (k < num) {
            randomized_selected(arr, l, pos - 1, k);
        } else {
            randomized_selected(arr, pos + 1, r, k - num);
        }
    }

public:
    vector<int> getLeastNumbers(vector<int>& arr, int k) {
        srand((unsigned)time(NULL));
        randomized_selected(arr, 0, (int)arr.size() - 1, k);
        vector<int> vec;
        for (int i = 0; i < k; ++i) {
            vec.push_back(arr[i]);
        }
        return vec;
    }
};

```





----

## 41. 数据流中的中位数(no)

如何得到一个数据流中的中位数？如果从数据流中读出奇数个数值，那么中位数就是所有数值排序之后位于中间的数值。如果从数据流中读出偶数个数值，那么中位数就是所有数值排序之后中间两个数的平均值。

例如，

[2,3,4] 的中位数是 3

[2,3] 的中位数是 (2 + 3) / 2 = 2.5

设计一个支持以下两种操作的数据结构：

void addNum(int num) - 从数据流中添加一个整数到数据结构中。
double findMedian() - 返回目前所有元素的中位数。

**有序集合 + 双指针**

```js

```

**大顶堆+小顶堆**

```

```



----

## 42. 连续子数组的最大和

输入一个整型数组，数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。

要求时间复杂度为O(n)。

**提示：**

- `1 <= arr.length <= 10^5`
- `-100 <= arr[i] <= 100`

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let ans = nums[0];
    let sum = nums[0];
    let n = nums.length;
    for (let i = 1; i < n; i++) {
        sum = Math.max(sum + nums[i], nums[i]);
        ans = Math.max(ans, sum);
    }
    return ans;
};

let nums = [-2,1,-3,4,-1,2,1,-5,4];
console.log(maxSubArray(nums));
```



----

##  43. 1～n 整数中 1 出现的次数

输入一个整数 n ，求1～n这n个整数的十进制表示中1出现的次数。

例如，输入12，1～12这些整数中包含1 的数字有1、10、11和12，1一共出现了5次。



```js
/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function(n) {
    // mulk 表示 10^k
    // 在下面的代码中，可以发现 k 并没有被直接使用到（都是使用 10^k）
    // 但为了让代码看起来更加直观，这里保留了 k
    let mulk = 1;
    let ans = 0;
    for (let k = 0; n >= mulk; k++) {
        ans += (Math.floor(n / (mulk * 10))) * mulk + Math.min(Math.max(n % (mulk * 10) - mulk + 1, 0), mulk);
        mulk *= 10;
    }
    return ans;
};

let n = 1000;
console.log(countDigitOne(n));
```



----

## 44. 数字序列中某一位的数字

数字以0123456789101112131415…的格式序列化到一个字符序列中。在这个序列中，第5位（从下标0开始计数）是5，第13位是1，第19位是4，等等。

请写一个函数，求任意第n位对应的数字。

**限制：**

- `0 <= n < 2^31`

迭代

一位数、两位数、三位数...

10, 90 x 2 = 180, 900 x 3 = 2700, ...

```js
/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
    if (n < 0) {
        return -1;
    }
    let digits = 1;
    while (true) {
        let numbers = countOfIntegets(digits);
        if (n < numbers * digits) {
            // 找到属于几位数中
            return digitAtIndex(n, digits);
        }
        n -= numbers * digits;  // 减去位数小的数
        digits++;
    }
    return -1;
};

const countOfIntegets = (digits) => {
    //计算 几位数共有多少个数
    if (digits === 1) {
        return 10;
    }
    let count = Math.pow(10, digits - 1);
    return 9 * count;
}

const digitAtIndex = (n, digits) => {
    let number = beginNumber(digits) + Math.floor(n / digits);  // 定位开始的数字
    let indexFromRight = digits - n % digits;
    for (let i = 1; i < indexFromRight; i++) {
        // 找到数字位
        number = Math.floor(number / 10);
    }
    return number % 10;
}

const beginNumber = (digits) => {
    // 计算几位数开始的第一个数
    if (digits === 1) {
        return 0;
    }
    return Math.pow(10, digits - 1);
}


let n = 11;
console.log(findNthDigit(n));
```



----

## 45. 把数组排成最小的数

输入一个非负整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个。

提示:

0 < nums.length <= 100
说明:

输出结果可能非常大，所以你需要返回一个字符串而不是整数
拼接起来的数字可能会有前导 0，最后结果不需要去掉前导 0

```js
/**
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function(nums) {
    //利用js特性
    //字符串之间相减会像number一样正常减掉，会被转换成number
    //字符串之间相加会转换成两个字符串之间拼接，会被转换成string
    nums.sort((a, b) => `${a}${b}` - `${b}${a}`);
    return nums.join("");
};

let nums = [3,30,34,5,9];
console.log(minNumber(nums));
```



----

##  46. 把数字翻译成字符串

给定一个数字，我们按照如下规则把它翻译为字符串：0 翻译成 “a” ，1 翻译成 “b”，……，11 翻译成 “l”，……，25 翻译成 “z”。一个数字可能有多个翻译。请编程实现一个函数，用来计算一个数字有多少种不同的翻译方法。

 **动态规划**

```
/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function(num) {
    num = num.toString();
    let p = 0, q = 0, r = 1;
    let n = num.length;
    for (let i = 0; i < n; i++) {
        p = q;
        q = r;
        r = q;
        if (i === 0) {
            continue;
        }
        let pre = num.substring(i - 1, i + 1);
        if (num[i - 1] !== "0" && Number(pre) < 26 && Number(pre) >= 0) {
            // 注意前一位0的情况
            r += p;
        }
    }
    return r;
};

let num = 12258;
console.log(translateNum(num));
```



----

## 47. 礼物的最大价值

在一个 m*n 的棋盘的每一格都放有一个礼物，每个礼物都有一定的价值（价值大于 0）。你可以从棋盘的左上角开始拿格子里的礼物，并每次向右或者向下移动一格、直到到达棋盘的右下角。给定一个棋盘及其上面的礼物的价值，请计算你最多能拿到多少价值的礼物？

```
输入: 
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
输出: 12
解释: 路径 1→3→5→2→1 可以拿到最多价值的礼物
```

提示：

- `0 < grid.length <= 200`
- `0 < grid[0].length <= 200`

```js
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxValue = function(grid) {
    if (grid.length < 1 || grid[0].length < 1) {
        return 0;
    }
    const m = grid.length, n = grid[0].length;

    const maxValues = new Array(n).fill(0);
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let left = 0, top = 0;
            if (i > 0) {
                top = maxValues[j];
            }
            if (j > 0) {
                left = maxValues[j - 1];
            }
            maxValues[j] = Math.max(left, top) + grid[i][j];
        }
    }
    return maxValues[n - 1];
};

let grid = [
  [1,3,1],
  [1,5,1],
  [4,2,1]
];

console.log(maxValue(grid));
```



----

## 48. 最长不含重复字符的子字符串

请从字符串中找出一个最长的不包含重复字符的子字符串，计算该最长子字符串的长度。

提示：

- `s.length <= 40000`

哈希表

```js
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length === 0) {
        return 0;
    }

    let curLen = 0;  // 局部最长不重复
    let ans = 0;  //  全局最长不重复
    const position = new Map();
    let n = s.length;
    for (let i = 0; i < n; i++) {
        let preIndex = position.has(s[i]) ? position.get(s[i]) : -1;

        if (preIndex < 0 || i - preIndex > curLen) {
            curLen++;
        } else {
            ans = Math.max(ans, curLen);
            curLen = i - preIndex;  // 保持不重复
        }
        position.set(s[i], i);
    }
    ans = Math.max(ans, curLen);

    return ans;
};

let s = "abcabcbb";
console.log(lengthOfLongestSubstring(s));
```



----

## 49. 丑数

我们把只包含质因子 2、3 和 5 的数称作丑数（Ugly Number）。求按从小到大的顺序的第 n 个丑数。

**说明:** 

1. `1` 是丑数。
2. `n` **不超过**1690。



**逐个判断**，超时

```
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    if (n < 1) {
        return 0;
    }
    let num = 1;
    let count = 1;
    while (count < n) {
        num++;
        if (isUgly(num)) {
            count++;
        }
    }
    return num;
};

const isUgly = (num) => {
    while (num % 2 === 0) {
        num /= 2;
    }
    while (num % 3 === 0) {
        num /= 3;
    }
    while (num % 5 === 0) {
        num /= 5;
    }
    return num === 1;
}

console.log(nthUglyNumber(10));
```



**动态规划**

```js
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    if (n < 1) {
        return 0;
    }
    const dp = new Array(n + 1).fill(0);
    dp[1] = 1;
    let p2 = 1, p3 = 1, p5 = 1;
    for (let i = 2; i <= n; i++) {
        const num2 = dp[p2] * 2, num3 = dp[p3] * 3, num5 = dp[p5] * 5;
        dp[i] = Math.min(num2, num3, num5);
        if (dp[i] === num2) {
            p2++;
        }
        if (dp[i] === num3) {
            p3++;
        }
        if (dp[i] === num5) {
            p5++;
        }
    }
    return dp[n];
};


console.log(nthUglyNumber(10));
```



**最小堆**

```js
var nthUglyNumber = function(n) {
    const factors = [2, 3, 5];
    const seen = new Set();
    const heap = new MinHeap();
    seen.add(1);
    heap.insert(1);
    let ugly = 0;
    for (let i = 0; i < n; i++) {
        ugly = heap.pop();
        for (const factor of factors) {
            const next = ugly * factor;
            if (!seen.has(next)) {
                seen.add(next);
                heap.insert(next);
            }
        }
        
    }
    return ugly;
};

// 最小堆
class MinHeap {
    constructor() {
        this.heap = [];
    }

    getParentIndex(i) {
        return (i - 1) >> 1;
    }

    getLeftIndex(i) {
        return i * 2 + 1;
    }

    getRightIndex(i) {
        return i * 2 + 2;
    }

    shiftUp(index) {
        if(index === 0) { return; }
        const parentIndex = this.getParentIndex(index);
        if(this.heap[parentIndex] > this.heap[index]){
            this.swap(parentIndex, index);
            this.shiftUp(parentIndex);
        }  
    }

    swap(i1, i2) {
        const temp = this.heap[i1];
        this.heap[i1]= this.heap[i2];
        this.heap[i2] = temp;
    }

    insert(value) {
        this.heap.push(value);
        this.shiftUp(this.heap.length - 1);
    }

    pop() {
        this.heap[0] = this.heap.pop();
        this.shiftDown(0);
        return this.heap[0];
    }

    shiftDown(index) {
        const leftIndex = this.getLeftIndex(index);
        const rightIndex = this.getRightIndex(index);
        if (this.heap[leftIndex] < this.heap[index]) {
            this.swap(leftIndex, index);
            this.shiftDown(leftIndex);
        }
        if (this.heap[rightIndex] < this.heap[index]){
            this.swap(rightIndex, index);
            this.shiftDown(rightIndex);
        }
    }

    peek() {
        return this.heap[0];
    }

    size() {
        return this.heap.length;
    }
}

```



-----

## 50. 第一个只出现一次的字符

在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。

**使用哈希表存储频数**

```js
/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function(s) {
    let n = s.length;
    const alphaMap = new Map();
    for (let i = 0; i < n; i++) {
        if (alphaMap.has(s[i])) {
            alphaMap.set(s[i], -1);
        } else {
            alphaMap.set(s[i], 1);
        }
    }
    for (let i = 0; i < n; i++) {
        if (alphaMap.get(s[i]) === 1) {
            return s[i];
        }
    }
    return " ";
};

console.log(firstUniqChar("dddccdbba"));
```

**使用哈希表存储索引**

```js
/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function(s) {
    let n = s.length;
    const alphaMap = new Map();
    for (let i = 0; i < n; i++) {
        if (alphaMap.has(s[i])) {
            alphaMap.set(s[i], -1);
        } else {
            alphaMap.set(s[i], i);
        }
    }
    let first = n;

    for (let pos of alphaMap.values()) {
        if (pos !== -1) {
            first = Math.min(first, pos);
        }
    }
    return first === n ? " " : s[first];
};

console.log(firstUniqChar("dddccdbba"));
```





----

## 51. 数组中的逆序对

在数组中的两个数字，如果前面一个数字大于后面的数字，则这两个数字组成一个逆序对。输入一个数组，求出这个数组中的逆序对的总数。

**限制：**

0 <= 数组长度 <= 50000

**归并排序**

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function(nums) {
    const  n = nums.length;
    if (n < 2) {
        return 0;
    }
    const copy = [...nums];
    const temp = new Array(n);
    return dfs(copy, 0, n - 1, temp);
};

const dfs = (nums, left, right, temp) => {
    if (left === right) {
        return 0;
    }
    let mid = left + Math.floor((right - left) / 2);
    let leftPairs = dfs(nums, left, mid, temp);
    let rightPairs = dfs(nums, mid + 1, right, temp);

    if (nums[mid] <= nums[mid + 1]) {
        return leftPairs + rightPairs;
    }

    let crossPairs = mergeAndCount(nums, left, mid, right, temp);

    return leftPairs + rightPairs + crossPairs;
}

const mergeAndCount = (nums, left, mid, right, temp) => {
    for (let i = left; i <= right; i++) {
        temp[i] = nums[i];
    }
    let i = left;
    let j = mid + 1;
    let count = 0;
    for (let k = left; k <= right; k++) {
        if (i === mid + 1) {
            nums[k] === temp[j];
            j++;
        } else if (j === right + 1) {
            nums[k] = temp[i];
            i++;
        } else if (temp[i] <= temp[j]) {
            nums[k] = temp[i];
            i++;
        } else {
            nums[k] = temp[j];
            j++;
            count += (mid - i + 1);
        }
    }
    return count;
}

let nums = [7,5,6,4];

console.log(reversePairs(nums));
```





----

##  52. 两个链表的第一个公共节点

输入两个链表，找出它们的第一个公共节点。

注意：

如果两个链表没有交点，返回 null.
在返回结果后，两个链表仍须保持原有的结构。
可假定整个链表结构中没有循环。
程序尽量满足 O(n) 时间复杂度，且仅用 O(1) 内存。



```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let p = headA, q = headB;
    let lenA = 0, lenB = 0;
    while (p) {
        p = p.next;
        lenA++;
    }
    while (q) {
        q = q.next;
        lenB++;
    }
    if (lenA === 0 || lenB ===0) {
        return null;
    }
    p = headA;
    q = headB;
    if (lenA < lenB) {
        [p, q] = [q, p];
    }
    let diff = Math.abs(lenA - lenB);
    while (diff > 0) {
        p = p.next;
        diff--;
    }
    while(p) {
        if (p === q) {
            return p;
        }
        p = p.next;
        q = q.next;
    }
    return null;
};
```

**双指针**

![链表公共结点](E:\pogject\学习笔记\image\leetcode\链表公共结点.png)

```js
var getIntersectionNode = function(headA, headB) {
    if (headA === null || headB === null) {
        return null;
    }
    let pA = headA, pB = headB;
    while (pA !== pB) {
        pA = pA === null ? headB : pA.next;
        pB = pB === null ? headA : pB.next;
    }
    return pA;
};
```



----

## 53 - I. 在排序数组中查找数字 I

统计一个数字在排序数组中出现的次数。

提示：

0 <= nums.length <= 105
-109 <= nums[i] <= 109
nums 是一个非递减数组
-109 <= target <= 109



```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let ans = 0;
    const leftIndex = binarySearch(nums, target, true);
    const rightIndex = binarySearch(nums, target, false) - 1;
    if (leftIndex <= rightIndex && rightIndex < nums.length && nums[leftIndex] === target && nums[rightIndex] === target) {
        ans = rightIndex - leftIndex + 1;
    }
    return ans;
};

const binarySearch = (nums, target, lower) => {
    // 如果 lower 为 true，则查找第一个大于等于 target 的下标，否则查找第一个小于 target 的下标。
    let left = 0, right = nums.length - 1, ans = nums.length;
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        if (nums[mid] > target || (lower && nums[mid] >= target)) {
            right = mid - 1;
            ans = mid;
        } else {
            left = mid + 1;
        }
    }
    return ans;
}

let nums = [5,7,7,8,8,10], target = 8;
console.log(search(nums, target));
```



----

## 53 - II. 0～n-1中缺失的数字

一个长度为n-1的递增排序数组中的所有数字都是唯一的，并且每个数字都在范围0～n-1之内。在范围0～n-1内的n个数字中有且只有一个数字不在该数组中，请找出这个数字。

**限制：**

1 <= 数组长度 <= 10000



可根据数组中每个下标处的元素是否和下标相等，得到缺失的数字。

```js

var missingNumber = function(nums) {
    const n = nums.length + 1;
    for (let i = 0; i < n - 1; i++) {
        if (nums[i] !== i) {
            return i;
        }
    }
    return n - 1;
};
```

数学

```js
var missingNumber = function(nums) {
    const n = nums.length + 1;
    let total = Math.floor(n * (n - 1) / 2);
    let arrSum = 0;
    for (let i = 0; i < n - 1; i++) {
        arrSum += nums[i];
    }
    return total - arrSum;
};

```

二分法

```js

var missingNumber = function(nums) {
    if (nums.length < 1) {
        return -1;
    }
    const n = nums.length;
    let left = 0;
    let right = n;
    while (left < right) {
        const mid = left + Math.floor((right - left) / 2);
        if (nums[mid] > mid) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left === n ? n : nums[left] - 1;
};


let nums = [0, 1, 2, 3];
console.log(missingNumber(nums));
```



----

##  54. 二叉搜索树的第k大节点

给定一棵二叉搜索树，请找出其中第 `k` 大的节点的值。

**限制：**

- 1 ≤ k ≤ 二叉搜索树元素个数

右中左的中序遍历

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
 * @param {number} k
 * @return {number}
 */
var kthLargest = function(root, k) {
    let res = [];  //从大到小排序的数组
    //中序遍历 右中左
    const dfs = (root) => {
        if (root === null) {
            return;
        }
        dfs(root.right);
        res.push(root.val);
        dfs(root.left);
    }

    dfs(root);
    return res[k - 1];
};
```



----

## 55 - I. 二叉树的深度

输入一棵二叉树的根节点，求该树的深度。从根节点到叶节点依次经过的节点（含根、叶节点）形成树的一条路径，最长路径的长度为树的深度。

例如：

给定二叉树 [3,9,20,null,null,15,7]，

```
   3
  / \
  9  20
    /  \
   15   7
```

返回它的最大深度 3 。

 提示：

节点总数 <= 10000



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
 * @return {number}
 */
var maxDepth = function(root) {
    if (root === null) {
        return 0;
    }
    let leftDepth = maxDepth(root.left);
    let rightDepth = maxDepth(root.right);

    return Math.max(leftDepth, rightDepth) + 1;
};
```



----

##  55 - II. 平衡二叉树

输入一棵二叉树的根节点，判断该树是不是平衡二叉树。如果某二叉树中任意节点的左右子树的深度相差不超过1，那么它就是一棵平衡二叉树。

 **自底向上的递归**

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
var isBalanced = function(root) {
    return getHeight(root) >= 0;

};

const getHeight = (root) => {
    if (root === null) {
        return 0;
    }
    let leftHeight = getHeight(root.left);
    let rightHeight = getHeight(root.right);
    // 如果存在一棵子树不平衡，则整个二叉树一定不平衡。
    if (leftHeight === -1 || rightHeight === -1 || Math.abs(leftHeight - rightHeight) > 1) {
        return -1;
    } else {
        return Math.max(leftHeight, rightHeight) + 1;
    }
}
```



-----

## 56 - I. 数组中数字出现的次数

一个整型数组 `nums` 里除两个数字之外，其他数字都出现了两次。请写程序找出这两个只出现一次的数字。要求时间复杂度是O(n)，空间复杂度是O(1)。

**限制：**

- `2 <= nums.length <= 10000`

**分组异或**

```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumbers = function(nums) {
    let ret = 0;
    const n = nums.length;
    for (let i = 0; i < n; i++) {
        ret ^= nums[i];
    }
    let div = 1;
    while ((div & ret) === 0) {
        // 找到第一个 二进制位 1
        div <<= 1;
    }
    let a = 0, b = 0;
    for (let i = 0; i < n; i++) {
        if ((div & nums[i]) !== 0) {
            a ^= nums[i];
        } else {
            b ^= nums[i];
        }
    }
    return [a, b];
};

let nums = [4,1,4,6];
console.log(singleNumbers(nums));
```



----

##  56 - II. 数组中数字出现的次数 II

在一个数组 `nums` 中除一个数字只出现一次之外，其他数字都出现了三次。请找出那个只出现一次的数字。

**限制：**

- `1 <= nums.length <= 10000`
- `1 <= nums[i] < 2^31`

使用位运算原理

```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    const bits = new Array(32).fill(0);
    const n = nums.length;
    for (let i = 0; i < n; i++) {
        let bitNum = nums[i].toString(2).split("").map(Number).reverse();
        for (let j = 0; j < bitNum.length; j++) {
            bits[j] += bitNum[j];
        }
    }
    // console.log(bits);
    // 如果某一位能被3整除，则目标值该二进制位为 0， 否则为 1
    for (let i = 0; i < 32; i++) {
        if (bits[i] % 3 === 0) {
            bits[i] = 0;
        } else {
            bits[i] = 1;
        }
    }
    // console.log(bits);
    return  Number("0b" + bits.reverse().join(""));
};

let nums = [3,4,3,3];
console.log(singleNumber(nums));
```



----

## 57 - I. 和为s的两个数字

输入一个递增排序的数组和一个数字s，在数组中查找两个数，使得它们的和正好是s。如果有多对数字的和等于s，则输出任意一对即可。

**限制：**

- `1 <= nums.length <= 10^5`
- `1 <= nums[i] <= 10^6`



```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const n = nums.length;
    if (n < 2) {
        return [];
    }
    let left = 0, right = n - 1;
    while (left < right) {
        if (nums[left] + nums[right] > target) {
            right--;
        } else if (nums[left] + nums[right] < target) {
            left++;
        } else {
            return [nums[left], nums[right]];
        }
    }
    return [];
};

let nums = [2,7,11,15], target = 9;
console.log(twoSum(nums, target));
```



----

## 57 - II. 和为s的连续正数序列

输入一个正整数 target ，输出所有和为 target 的连续正整数序列（至少含有两个数）。

序列内的数字由小到大排列，不同序列按照首个数字从小到大排列。

**限制：**

- `1 <= target <= 10^5`

**双指针**

```js
/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function(target) {
    const ans = [];
    const maxNumber = (target + 1) >> 1;
    let left = 1, right = 2;
    let temp = [left, right];
    let sum = 3;
    while (left < right) {
        if (sum === target) {
            ans.push([...temp]);
            temp.shift();
            sum -= left;
            left++;

        } else if (sum < target) {
            right++;
            sum += right;
            temp.push(right)
        } else {
            sum -= left;
            left++;
            temp.shift();
        }
    }
    return ans;
};

let target = 12;
console.log(findContinuousSequence(target));
```



-----

## 58 - I. 翻转单词顺序

输入一个英文句子，翻转句子中单词的顺序，但单词内字符的顺序不变。为简单起见，标点符号和普通字母一样处理。例如输入字符串"I am a student. "，则输出"student. a am I"。

**说明：**

- 无空格字符构成一个单词。
- 输入字符串可以在前面或者后面包含多余的空格，但是反转后的字符不能包括。



```js
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s.trim().replace(/\s{2,}/g, " ").split(" ").reverse().join(" ");
};

let s = " the   sky  is blue ";
console.log(reverseWords(s));
```



----

##  58 - II. 左旋转字符串

字符串的左旋转操作是把字符串前面的若干个字符转移到字符串的尾部。请定义一个函数实现字符串左旋转操作的功能。比如，输入字符串"abcdefg"和数字2，该函数将返回左旋转两位得到的结果"cdefgab"。

**限制：**

- `1 <= k < s.length <= 10000`



```js
/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function(s, n) {
    return s.slice(n) + s.slice(0, n);
};

let s = "abcdefg", k = 2;
console.log(reverseLeftWords(s, k));
```



----

## 59 - I. 滑动窗口的最大值

给定一个数组 `nums` 和滑动窗口的大小 `k`，请找出所有滑动窗口里的最大值。

你可以假设 *k* 总是有效的，在输入数组 **不为空** 的情况下，`1 ≤ k ≤ nums.length`。

**双端队列**

```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    const ans = [];
    const queue = [];
    const n = nums.length;
    for (let i = 0; i < k; i++) {
        while (queue.length && nums[i] >= nums[queue[queue.length - 1]]) {
            queue.pop();
        }
        queue.push(i);
    }
    ans.push(nums[queue[0]]);
    for (let i = k; i < n; i++) {
        /*为了保持队列的性质，我们会不断地将新的元素与队尾的元素相比较，如果前者大于等于后者，
        那么队尾的元素就可以被永久地移除，我们将其弹出队列。我们需要不断地进行此项操作，直到队列为空或者新的元素小于队尾的元素。*/
        while (queue.length && nums[i] >= nums[queue[queue.length - 1]]) {
            queue.pop();
        }
        // 当滑动窗口向右移动时，我们需要把一个新的元素放入队列中
        queue.push(i);
        /* 但与方法一中相同的是，此时的最大值可能在滑动窗口左边界的左侧，并且随着窗口向右移动，
        它永远不可能出现在滑动窗口中了。因此我们还需要不断从队首弹出元素，直到队首元素在窗口中为止。*/
        while (queue[0] <= i - k) {
            queue.shift();
        }
        // 由于队列中下标对应的元素是严格单调递减的，因此此时队首下标对应的元素就是滑动窗口中的最大值。
        ans.push(nums[queue[0]]);
    }
    return ans;
};

let nums = [1,3,-1,-3,5,3,6,7], k = 3;
console.log(maxSlidingWindow(nums, k));
```



----

## 59 - II. 队列的最大值

请定义一个队列并实现函数 max_value 得到队列里的最大值，要求函数max_value、push_back 和 pop_front 的均摊时间复杂度都是O(1)。

若队列为空，pop_front 和 max_value 需要返回 -1

**限制：**

- `1 <= push_back,pop_front,max_value的总操作数 <= 10000`
- `1 <= value <= 10^5`



```js
var MaxQueue = function() {
    this.queue = [];
    this.maxValueindex = [];
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function() {
    if (this.maxValueindex.length) {
        return this.maxValueindex[0];
    } else {
        return -1;
    }
};

/** 
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function(value) {
    while(this.maxValueindex.length && this.maxValueindex[this.maxValueindex.length - 1] < value) {
        this.maxValueindex.pop();
    }
    this.maxValueindex.push(value);
    this.queue.push(value);
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function() {
    if (!this.queue.length) {
        return -1;
    }
    if (this.queue[0] === this.maxValueindex[0]) {
        this.maxValueindex.shift();
    }
    return this.queue.shift();
};

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */
```





----

## 60. n个骰子的点数

把n个骰子扔在地上，所有骰子朝上一面的点数之和为s。输入n，打印出s的所有可能的值出现的概率。

 你需要用一个浮点数数组返回答案，其中第 i 个元素代表这 n 个骰子所能掷出的点数集合中第 i 小的那个的概率。



态规划 + 背包问题

```js
var dicesProbability = function(n) {
    const dp = new Array(n + 1);
    for (let i = 0; i <= n; i++) {
        dp[i] = new Array(6 * n + 1).fill(0);
    }
    for (let i = 1; i <=6; i++) {
        dp[1][i] = 1;
    }
    let ans = [];

    for (let i = 1; i <= n; i++) {
        for (let j = i; j <= 6 * n; j++) {
            for (let k = 1; k <= 6; k++) {
                if (dp[i - 1][j - k]) {
                    dp[i][j] += dp[i - 1][j - k];
                }
            }
            if (i === n) {
                ans.push(dp[i][j] / 6 ** n);
            }
        }
    }

    return ans;
};

console.log(dicesProbability(6));
```



----

##  61. 扑克牌中的顺子

从若干副扑克牌中随机抽 5 张牌，判断是不是一个顺子，即这5张牌是不是连续的。2～10为数字本身，A为1，J为11，Q为12，K为13，而大、小王为 0 ，可以看成任意数字。A 不能视为 14。

**限制：**

数组长度为 5 

数组的数取值为 [0, 13] .



```js
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function(nums) {
    nums.sort((a, b) => a - b);
    let zeroSize = 0;
    let diff = 0;
    for (let i = 0; i < 5; i++) {
        if (nums[i] === 0) {
            zeroSize++;
        }
        if (i > 0 && nums[i - 1] !== 0) {
            if (nums[i] === nums[i - 1]) {
                return false;
            }
            diff += nums[i] - nums[i - 1] - 1;
        }
    }
    return zeroSize >= diff;
};

let nums = [0,0,1,2,5];
console.log(isStraight(nums));
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

```js
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



