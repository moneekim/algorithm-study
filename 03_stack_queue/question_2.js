// Q. 기본적인 push, pop 기능이 구현된 스택에서 최솟값을 반환하는 min 함수를 추가하기

// JS 기본 내장 함수 Math.min() 
// => 입력 배열의 크기에 따라 달라지며, 입력된 숫자의 개수에 선형적으로 비례하는 O(n) 시간 복잡도를 가진다.

class MinStack {
    constructor() {
        this.stack = []; // 실제 스택 데이터를 저장
        this.minStack = []; // 각 단계에서의 최솟값을 추적
    }

    push(element) {
        let currentMin = this.minStack.length === 0 ? element : this.minStack[this.minStack.length - 1];

        // 새로운 요소가 현재 최솟값보다 작거나 같으면, minStack에 추가
        if (element <= currentMin) {
            this.minStack.push(element);
        }
        this.stack.push({
            value: element,
            min: currentMin
        });
    }

    pop() {
        if (this.stack.length === 0) {
            return undefined;
        }
        let removedElement = this.stack.pop();
        if (removedElement.value === this.minStack[this.minStack.length - 1]) {
            this.minStack.pop();
        }
        return removedElement.value;
    }

    min() {
        return this.minStack.length === 0 ? undefined : this.minStack[this.minStack.length - 1];
    }
}
