// Q. 접시를 쌓다가 무더기 높이가 어느 정도 높아지면 새로운 무더기를 생성하는 식의 스택 SetOfStacks 만들기

class SetOfStacks {
    constructor(capacity) {
        this.stacks = []; // 스택들을 저장할 배열
        this.capacity = capacity; // 각 스택의 최대 용량
    }

    getLastStack() {
        if (this.stacks.length === 0) return null;
        return this.stacks[this.stacks.length - 1];
    }

    push(value) {
        let last = this.getLastStack();
        if (last !== null && last.length < this.capacity) {
            // 마지막 스택에 여전히 공간이 있는 경우
            last.push(value);
        } else {
            // 새 스택을 만들고 값 추가
            let newStack = [value];
            this.stacks.push(newStack);
        }
    }

    pop() {
        let last = this.getLastStack();
        if (last === null) throw new Error("EmptyStackException");
        let value = last.pop();
        if (last.length === 0) {
            // 마지막 스택이 비어있다면 스택 배열에서 제거
            this.stacks.pop();
        }
        return value;
    }

    popAt(index) {
        if (index < 0 || index >= this.stacks.length) {
            throw new Error("IndexOutOfBoundException");
        }
        if (this.stacks[index].length === 0) {
            throw new Error("EmptyStackException");
        }
        let value = this.stacks[index].pop();
        if (this.stacks[index].length === 0 && this.stacks.length > 1) {
            // 비어있는 스택 제거
            this.stacks.splice(index, 1); // index 위치로부터 1개 요소 제거
        }
        return value;
    }
}

const setOfStacks = new SetOfStacks(5);
setOfStacks.push(1);
setOfStacks.push(2);
setOfStacks.push(3);
setOfStacks.push(4);
setOfStacks.push(5);
setOfStacks.push(6); // 새로운 스택 생성 및 6 추가

console.log(setOfStacks.pop()); // 6 반환 및 마지막 스택에서 제거
console.log(setOfStacks.pop()); // 5 반환

console.log(setOfStacks.popAt(0)); // 첫 번째 스택에서 요소 제거
console.log(setOfStacks.pop()); // 마지막 스택에서 요소 제거