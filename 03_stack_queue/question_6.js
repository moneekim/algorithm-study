/* 
Q. 먼저 들어온 동물이 먼저 나가는 동물 보호소(animal shelter)가 있다고 하자. 
이 보호소는 개와 고양이만 수용한다. 
사람들은 보호소에서 가장 오래된 동물부터 입양할 수 있는데, 개와 고양이 중 어떤 동물 을 데려갈지 선택할 수 있다. 
하지만 특정한 동물을 지정해 데려갈 수는 없다. 
이 시스템을 자료구조로 구현하라. 
이 자료구조는 enqueue,dequeueAny, dequeueDog , dequeueCat의 연산을 제공해야 한다. 기본적으로 탑재되어 있 는 LinkedList 자료구조를 사용해도 좋다.
*/

class AnimalShelter {
    constructor() {
        this.dogs = [];
        this.cats = [];
        this.order = 0; // 모든 동물의 순서를 추적
    }

    enqueue(animal) {
        // 동물의 타입과 들어온 순서를 저장
        animal.order = this.order++;
        if (animal.type === 'dog') {
            this.dogs.push(animal);
        } else if (animal.type === 'cat') {
            this.cats.push(animal);
        }
    }

    dequeueAny() {
        // 개와 고양이 중 더 오래된 동물을 반환
        if (this.dogs.length === 0) {
            return this.dequeueCat();
        }
        if (this.cats.length === 0) {
            return this.dequeueDog();
        }
        const dog = this.dogs[0];
        const cat = this.cats[0];
        if (dog.order < cat.order) {
            return this.dequeueDog();
        } else {
            return this.dequeueCat();
        }
    }

    dequeueDog() {
        return this.dogs.shift();
    }

    dequeueCat() {
        return this.cats.shift();
    }
}

class Animal {
    constructor(name, type) {
        this.name = name;
        this.type = type;
        this.order = null;
    }
}
