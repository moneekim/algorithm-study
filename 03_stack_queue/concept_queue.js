class Queue {
    constructor() {
        this.items = []; // 큐를 저장할 배열
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty()) {
            return "No elements in the Queue";
        }
        return this.items.shift();  // shift: 배열의 맨 앞에 값을 제거
    }

    isEmpty() {
        return this.items.length === 0;
    }

    peek() {
        if (this.isEmpty()) {
            return "No elements in the Queue";
        }
        return this.items[0];
    }

    // 큐의 모든 요소를 출력 (디버깅 목적)
    printQueue() {
        let str = "";
        for (let i = 0; i < this.items.length; i++) {
            str += this.items[i] + " ";
        }
        return str.trim();
    }
}

let queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
console.log(queue.printQueue()); // 10 20
console.log(queue.peek());       // 10
console.log(queue.dequeue());    // 10
console.log(queue.printQueue()); // 20