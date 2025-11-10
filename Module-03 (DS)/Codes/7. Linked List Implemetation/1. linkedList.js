// -------- Creating a Node --------
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// ---------- Linked List Creation and Operations ----------
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);

    // if the linked list is Empty
    if ((this.head == null && this.tail == null) || this.length == 0) {
      this.head = newNode;
      this.tail = newNode;
    }
    // if the linked list is not Empty
    else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);

    // if the linked list is Empty
    if ((this.head == null && this.tail == null) || this.length == 0) {
      this.head = newNode;
      this.tail = newNode;
    }
    // if the linked list is not Empty
    else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  // linkedList index count starts from 0
  insert(value, index) {
    if (index < 0 || index > this.length) {
      console.log("Give a valid Index!");
      return undefined;
    }
    else {
      // If the insertion Index is the FIRST index
      if (index == 0) {
        this.prepend(value);
      }
      // If the insertion Index is the LAST index
      else if (index == this.length) {
        this.append(value);
      }
      // If the insertion Index is any of the the MIDDLE indexes
      else {
        const newNode = new Node(value); 
        
        const leadingNode = this._traverseToLeadingIndex(index);

        newNode.next = leadingNode.next;
        leadingNode.next = newNode;
      }
      this.length++;
    }
  }

  // linkedList index count starts from 0
  remove(index) {
    if (index < 0 || index >= this.length) {
      console.log("Give a valid Index!");
      return undefined;
    }
    else {
        // If the removal Index is the FIRST index
        if(index == 0) {
            if(this.head.next == null) {
                this.head = null;
                this.tail = null;
            }
            else {
                this.head = this.head.next;
            }
        }
        // If the removal Index is the LAST index
        else if(index == this.length-1) {
            const leadingNode = this._traverseToLeadingIndex(index);
            this.tail = leadingNode;
            leadingNode.next = null ;
        }
        // If the removal Index is any of the the MIDDLE indexes
        else {
            const leadingNode = this._traverseToLeadingIndex(index);
            const nodeToBeRemoved = leadingNode.next;
            leadingNode.next = nodeToBeRemoved.next;
        }
        this.length--;
    }
  }

  // private method, that should be used within the class
  _traverseToLeadingIndex(index) {
    let indexCount = 0;
    let leadingNode = this.head; 

    while(indexCount < (index-1)) {
        leadingNode = leadingNode.next;
        indexCount++;
    }

    return leadingNode;
  }

  print() {
    const arr = []; // Took the Array just to print it beautifully, nothing else.
    let currentNode = this.head;

    while (currentNode != null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(arr.join(" -> "), "-> NULL");
  }
}

const linkedList = new LinkedList();

linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.prepend(-1);
linkedList.prepend(-2);
linkedList.insert(-3, 0);
linkedList.insert(0, 3);
linkedList.insert(5000, 9);

linkedList.print();

linkedList.remove(0);
linkedList.remove(3);

linkedList.print();
