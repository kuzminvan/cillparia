let stackStart = [];
let stack = stackStart;

// Operations that modify the stack
stack.push(1);
stack.push(2);
console.log(stack); // Output: [1, 2]

// Resetting the stack
stack = stackStart;
console.log(stack); // Output: []
