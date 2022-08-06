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
