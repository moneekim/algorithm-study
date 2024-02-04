// Q. 스택 두 개로 큐 하나 구현하기

class TwoStackQueue {
    constructor() {
        this.stackNewest = []; // 새로운 원소를 저장하는 스택
        this.stackOldest = []; // 제거될 준비가 된 원소를 저장하는 스택
    }

    enqueue(value) {
        this.stackNewest.push(value);
    }

    shiftStacks() {
        if (this.stackOldest.length === 0) {
            while (this.stackNewest.length > 0) {
                this.stackOldest.push(this.stackNewest.pop());
            }
        }
    }

    dequeue() {
        this.shiftStacks();
        return this.stackOldest.pop();
    }

    peek() {
        this.shiftStacks();
        return this.stackOldest[this.stackOldest.length - 1]; // 큐의 Peek 반환 값은 가장 오래된 원소를 반환해야함(FIFO)
    }

    isEmpty() {
        return this.stackNewest.length === 0 && this.stackOldest.length === 0;
    }
}

// 테스트 코드
const queue = new TwoStackQueue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log("Peek:", queue.peek()); // 1, 큐의 맨 앞 원소 확인
console.log("Dequeue:", queue.dequeue()); // 1, 큐에서 원소 제거

console.log("Peek after dequeue:", queue.peek()); // 2, 제거 후 맨 앞 원소 확인
console.log("Queue is empty?", queue.isEmpty()); // false, 큐가 비어 있는지 확인

queue.enqueue(4);
console.log("Dequeue:", queue.dequeue()); // 2 -> stackOldest 길이가 0이 아니면 그냥 stackOldest 배열에서 pop
console.log("Dequeue:", queue.dequeue()); // 3
console.log("Peek:", queue.peek()); // 4

console.log("Dequeue:", queue.dequeue()); // 4, 마지막 원소 제거 후
console.log("Queue is empty?", queue.isEmpty()); // true, 큐가 다시 비어 있는지 확인


