
var MyStack = function() {
    this.queue = [];
};

MyStack.prototype.push = function(x) {
    this.queue.push(x);
};

MyStack.prototype.pop = function() {
    let n = this.queue.length;
    for(let i = 0; i < n - 1; i++){
        this.queue.push(this.queue.shift());
    }
    return this.queue.shift();
};

MyStack.prototype.top = function() {
    let n = this.queue.length;
    for(let i = 0; i < n - 1; i++){
        this.queue.push(this.queue.shift());
    }
    let lastElement = this.queue.shift();
    this.queue.push(lastElement);

return lastElement; 
};

MyStack.prototype.empty = function() {
    return this.queue.length === 0;
};

// var MyStack = function() {
//     this.q1 = [];
//     this.q2 = [];
// };

// MyStack.prototype.push = function(x) {
//     this.q1.push(x);
// };

// MyStack.prototype.pop = function() {
//     let n = this.q1.length;
//     for(let i = 0; i < n - 1; i++){
//         this.q2.push(this.q1.shift());
//     }
//     let lastElement = this.q1.shift();

// let temp = this.q1;
// this.q1 = this.q2;
// this.q2 = temp;

// return lastElement;
// };

// MyStack.prototype.top = function() {
//     let n = this.q1.length;
//     for(let i = 0; i < n - 1; i++){
//         this.q2.push(this.q1.shift());
//     }
//     let lastElement = this.q1.shift();
//     this.q2.push(lastElement);

// let temp = this.q1;
// this.q1 = this.q2;
// this.q2 = temp;

// return lastElement; 
// };

// MyStack.prototype.empty = function() {
//     return this.q1.length === 0;
// };

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */