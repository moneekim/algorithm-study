class Stack {
    constructor() {
      this.items = []; // 스택을 저장할 배열
    }
  
    push(element) {
      this.items.push(element);
    }
  
    pop() {
      if (this.isEmpty()) {
        return "No elements in the Stack";
      }
      return this.items.pop();
    }
  
      isEmpty() {
      return this.items.length === 0;
    }
  
    peek() {
      if (this.isEmpty()) {
        return "No elements in the Stack";
      }
      return this.items[this.items.length - 1];
    }
  
    // 스택의 모든 요소를 출력 (디버깅 목적)
    printStack() {
      let str = "";
      for (let i = 0; i < this.items.length; i++) {
        str += this.items[i] + " ";
      }
      return str.trim();
    }
  }
  
  let stack = new Stack();
  stack.push(1);
  stack.push(2);
  stack.push(3);
  console.log(stack.printStack()); // 1 2 3
  console.log(stack.peek());       // 3
  console.log(stack.pop());        // 3
  console.log(stack.printStack()); // 1 2