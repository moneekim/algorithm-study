// Q. 배열 한 개로 스택 세 개 구현하기

// i. 고정 크기 할당 방식
// 배열을 세 부분으로 나누어 각 부분을 각각의 스택으로 사용
// 각 스택의 시작 인덱스와 크기를 추적하여, 각 스택에 대한 push, pop, 그리고 peek 연산을 구현

class TripleStack {
    constructor(stackSize) {
        this.stackSize = stackSize;
        this.array = new Array(stackSize * 3).fill(null);
        this.sizes = [0, 0, 0]; // 각 스택의 현재 크기를 추적
    }

    push(stackNum, value) {
        if (this.sizes[stackNum] < this.stackSize) {
            this.array[stackNum * this.stackSize + this.sizes[stackNum]] = value;   
            /* 
            stackNum * this.stackSize: 이 부분은 각 스택의 시작 인덱스를 계산합니다. 
            stackNum은 0부터 시작하여 각각의 스택을 나타냅니다 (예: 0은 첫 번째 스택, 1은 두 번째 스택, 2는 세 번째 스택). 
            this.stackSize는 각 스택의 최대 크기입니다. 
            따라서, stackNum * this.stackSize는 현재 스택의 시작 포인트를 배열 내에서의 인덱스로 변환합니다.

            + this.sizes[stackNum]: 이 부분은 현재 스택의 크기(즉, 스택에 저장된 요소의 수)를 현재 스택의 시작 인덱스에 추가하여, 
            새로운 요소를 추가할 정확한 위치를 결정합니다. 
            this.sizes 배열은 각 스택에 저장된 요소의 수를 추적합니다.
            
            = value: 계산된 위치에 value 값을 할당합니다. 
            이는 새로운 요소를 스택의 최상단에 추가하는 것과 동일합니다.*/

            this.sizes[stackNum]++;
        } else {
            throw new Error("Stack is full");
        }
    }

    pop(stackNum) {
        if (this.sizes[stackNum] === 0) {
            throw new Error("Stack is empty");
        } else {
            const topIndex = stackNum * this.stackSize + this.sizes[stackNum] - 1;
            const value = this.array[topIndex];
            this.array[topIndex] = null; // 요소 제거
            this.sizes[stackNum]--;
            return value;
        }
    }

    peek(stackNum) {
        if (this.sizes[stackNum] === 0) {
            throw new Error("Stack is empty");
        } else {
            return this.array[stackNum * this.stackSize + this.sizes[stackNum] - 1];
        }
    }

    isEmpty(stackNum) {
        return this.sizes[stackNum] === 0;
    }
}

const tripleStack = new TripleStack(5); // 각 스택의 크기를 5로 설정
tripleStack.push(0, 1);
tripleStack.push(1, 2);
tripleStack.push(2, 3);

console.log(tripleStack.pop(0)); // 첫 번째 스택에서 요소 제거 및 반환
console.log(tripleStack.peek(1)); // 두 번째 스택의 최상단 요소 확인
console.log(tripleStack.isEmpty(2)); // 세 번째 스택이 비었는지 확인
