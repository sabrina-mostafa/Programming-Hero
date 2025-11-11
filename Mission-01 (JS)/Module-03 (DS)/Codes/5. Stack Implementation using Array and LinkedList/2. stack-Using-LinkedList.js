
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    push(value) {
        const newNode = new Node(value);

        if(this.isEmpty()) {
            this.bottom = newNode;
            this.top = newNode;
        }
        else {
            newNode.next = this.top;
            this.top = newNode;
        }
        this.length++;
    }

    pop() {
        if(this.isEmpty()) {
            console.log("Stack is Empty!!");
            return undefined;
        }
        else {
            let nodeToBeRemoved = this.top;
            this.top = nodeToBeRemoved.next;
            this.length--;
        }
    }

    peek() {
        console.log("The Peek value is:", this.top.value);
    }

    isEmpty() {
        return ((this.bottom==null && this.top==null) || this.length==0)
    }

    size() {
        console.log("\nSize:", this.length);
    }

    print() {
        const arr = [];
        let currentNode = this.top;

        while(currentNode != null) {
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(arr.slice().join("\n"));
    }
}

const stack = new Stack();

stack.push(30);
stack.push(40);
stack.push(50);

stack.print();
stack.size();
stack.peek();

stack.pop();
stack.print();
stack.size();

stack.peek();

