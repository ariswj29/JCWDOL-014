class Queue {
    #container = [];

    enqueue(value) {
        this.#container.push(value);
    }

    dequeue() {
        this.#container.shift();
    }

    getElements() {
        return this.#container;
    }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log('Queue:', queue.getElements()); // 1, 2, 3