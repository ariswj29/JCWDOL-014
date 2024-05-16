class Stack {
    #maxSize;
    #container = [];
  
    constructor(maxSize = 10) {
      this.#maxSize = maxSize;
    }
  
    #isFull() {
      return this.#container.length === this.#maxSize;
    }
  
    #Empty() {
      return this.#container.length === 0;
    }
  
    push(element) {
      if (this.#isFull()) {
        console.log("Stack overflow!");
        return;
      }
  
      this.#container.push(element);
    }
  
    pop() {
      if (this.#Empty()) {
        console.log("Stack underflow!");
        return;
      }
  
      this.#container.pop();
    }
  
    getElements() {
      return this.#container;
    }
  }
  
  // * Implementation
  const stack = new Stack(5);
  
  stack.push(1);
  stack.push(2);
  stack.push(3);
  stack.push(4);
  stack.push(5);
  stack.push(6); // Stack overflow!
  
  stack.pop();
  stack.pop();
  stack.pop();
  stack.pop();
  stack.pop();
  stack.pop(); // Stack underflow!
  
  console.log(stack.getElements()); // []