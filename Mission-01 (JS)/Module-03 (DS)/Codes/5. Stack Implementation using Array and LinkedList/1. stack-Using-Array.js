class Stack {
  constructor() {
    this.items = [];
  }

  // O(1)
  push(value) {
    this.items.push(value);
  }

  // O(1)
  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items.pop();
  }

  // O(1)
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.items.length-1];
  }

  // O(1)
  isEmpty() {
    if (this.items.length == 0)
        return true;
    return false;
  }

  // O(n)
  print() {
    console.log(this.items);
  }
}


const stack = new Stack();

console.log(stack.pop());

console.log(stack.peek());

console.log(stack.isEmpty());

stack.push(20);
stack.push(40);
stack.push(70);

stack.print();

console.log(stack.pop());

stack.print();

