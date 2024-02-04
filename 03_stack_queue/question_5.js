// Q. 가장 작은 값이 위로 오도록 스택을 정렬하는 프로그램

function sortStack(stack) {
    let helperStack = []; // 두 번째 스택을 도우미 스택으로 사용

    while(stack.length > 0) {
        // 현재 스택에서 하나의 원소를 꺼냄
        let temp = stack.pop();
        
        // 도우미 스택에서 현재 원소보다 큰 원소들을 모두 원래 스택으로 옮김
        while(helperStack.length > 0 && helperStack[helperStack.length - 1] < temp) {
            stack.push(helperStack.pop());
        }
        
        // 도우미 스택에 현재 원소를 삽입
        helperStack.push(temp);
    }

    // 정렬된 도우미 스택의 원소들을 원래 스택으로 옮김
    while(helperStack.length > 0) {
        stack.push(helperStack.pop());
    }
}

// 사용 예
let stack = [34, 3, 31, 98, 92, 23];
sortStack(stack);
console.log("Sorted Stack:", stack);
