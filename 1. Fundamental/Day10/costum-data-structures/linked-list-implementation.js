class Node {
    constructor(element) {
      this.element = element;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
  
    add(element) {
      let node = new Node(element);
      let current;
  
      if (this.head === null) {
        this.head = node;
      } else {
        current = this.head;
  
        while (current.next) {
          current = current.next;
        }
  
        current.next = node;
      }
  
      this.size = this.size + 1;
    }
  
    printList() {
      let current = this.head;
  
      while (current) {
        console.log(current.element);
        current = current.next;
      }
    }
  
    insertAt(element, index) {
      if (index < 0 || index > this.size) {
        return console.log("Please enter a valid index!");
      } else {
        const node = new Node(element);
        let current = this.head;
  
        if (index === 0) {
          node.next = this.head;
          this.head = node;
        } else {
          current = this.head;
          let prev;
  
          for (let i = 0; i < index; i++) {
            prev = current;
            current = current.next;
          }
  
          prev.next = node;
          node.next = current;
        }
  
        this.size = this.size + 1;
      }
    }
  
    removeAt(index) {
      if (index < 0 || index >= this.size) {
        return console.log("Please enter a valid index!");
      } else {
        let current = this.head;
        let prev = current;
  
        if (index === 0) {
          this.head = current.next;
        } else {
          for (let i = 0; i < index; i++) {
            prev = current;
            current = current.next;
          }
  
          prev.next = current.next;
        }
  
        this.size = this.size - 1;
        return current.element;
      }
    }
  
    removeElement(element) {
      let current = this.head;
      let prev = null;
  
      while (current !== null) {
        if (current.element === element) {
          if (prev === null) {
            this.head = current.next;
          } else {
            prev.next = current.next;
          }
  
          this.size = this.size - 1;
          return current.element;
        }
  
        prev = current;
        current = current.next;
      }
  
      return null;
    }
  
    indexOf(element) {
      let count = 0;
      let current = this.head;
  
      while (current !== null) {
        if (current.element === element) {
          return count;
        }
  
        count = count + 1;
        current = current.next;
      }
  
      return -1;
    }
  }
  
  // * Implementation
  const linkedList = new LinkedList();
  
  console.log(linkedList); // Output: LinkedList { head: null, size: 0 }
  
  linkedList.add("A");
  linkedList.add("B");
  linkedList.add("C");
  linkedList.add("D");
  
  console.log(linkedList); // Output: LinkedList { head: Node { element: 'A', next: Node { element: 'B', next: Node { element: 'C', next: Node { element: 'D', next: null } } } }, size: 4 }
  
  linkedList.insertAt("E", 2);
  linkedList.removeAt(1);
  
  console.log(linkedList.indexOf("D")); // Output: 3
  
  linkedList.printList(); // Output: A E C D