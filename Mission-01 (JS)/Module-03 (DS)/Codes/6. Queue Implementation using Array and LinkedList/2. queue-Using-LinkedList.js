class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  // O(1)
  enqueue(value) {
    const newNode = new Node(value);

    // If the Queue is Empty
    if (this.isEmpty()) {
      this.first = newNode;
      this.last = newNode;
    } 
    // If the Queue is not Empty
    else {
        this.last.next = newNode;
        this.last = newNode;
    }
    this.length++;
  }

  // O(1)
  dequeue() {
    if(this.isEmpty()) {
        console.log("This Queue is already Empty!");
        return undefined;
    }
    else if(this.length == 1) {
        this.first = null ;
        this.last = null ;
        this.length = 0 ;
    }
    else {
        let nodeToBeRemoved = this.first;
        this.first = nodeToBeRemoved.next ;
        this.length--;
    }
  }

  // O(1)
  peek() {
    if(this.isEmpty()) {
        console.log("This Queue is Empty");
        return undefined;
    }
    else {
        console.log("The Peek value is:", this.first.value);
    }
  }

  isEmpty() {
    if ((this.first == null && this.last == null) || this.length == 0) {
      return true;
    }
    return false;
  }

  size() {
    console.log("Size: ", this.length);
  }

  print() {
    let arr = [];
    let currentNode = this.first;
    while(currentNode != null) {
        arr.push(currentNode.value);
        currentNode = currentNode.next;
    }

    console.log(arr.slice().reverse().join(" <- "));
  }
}


const queue = new Queue();

queue.enqueue(100);
queue.enqueue(2);
queue.enqueue(530);
queue.enqueue(4);
queue.print();

queue.dequeue();
queue.dequeue();
queue.print();

queue.enqueue(400);

queue.print();

queue.peek();
queue.size();