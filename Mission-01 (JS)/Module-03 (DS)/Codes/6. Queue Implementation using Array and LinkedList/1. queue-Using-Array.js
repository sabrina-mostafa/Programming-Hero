
class Queue {
    constructor() {
        this.items = [];
    }

    // O(1)
    enqueue(value) {
        this.items.push(value);
    }

    // O(n)
    dequeue() {
        if(this.isEmpty()) {
            return undefined;
        }
        return this.items.shift(); // <-- O(n)
    }

    // O(1)
    peek() {
        if(this.isEmpty()) {
            return undefined;
        }
        return this.items[0];
    }

    // O(1)
    isEmpty() {
        return this.items.length === 0;
    }

    print() {
        console.log(this.items);
    }
}


const queue = new Queue();

console.log(queue.peek());
console.log(queue.isEmpty());

queue.enqueue(30);
queue.enqueue(50);
queue.enqueue(70);
queue.enqueue(80);
queue.print();

queue.dequeue();

queue.print();

