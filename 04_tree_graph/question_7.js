/**
Q. 프로젝트의 리스트와 프로젝트들 간의 종속 관계
(즉, 프로젝트 쌍이 리스트로 주어지면 각 프로젝트 쌍에서 
두번째 프로젝트가 첫 번째 프로젝트에 종속되어 있다는 뜻)가 주어졌을 때, 
프로젝트를 수행해 나가는 순서를 찾으라. 유효한 순서가 존재하지 않으면 에러를 반환한다.

입력:
- 프로젝트: a,b,c,d,e,f
- 종속 관계: (a,d),(f,b),(b,d),(f,a),(d,c)
출력: f,e,a,b,d,c
*/

function findOrder(projects, dependencies) {
  let adjList = new Map(); // 각 프로젝트의 종속성을 저장하는 인접 리스트
  let inDegree = new Map(); // 각 프로젝트의 진입 차수
  let order = []; // 수행 순서
  let queue = []; // 진입 차수가 0인 프로젝트를 저장하는 큐

  // 초기화
  projects.forEach((project) => {
    adjList.set(project, []);
    inDegree.set(project, 0);
  });

  // 인접 리스트와 진입 차수 업데이트
  dependencies.forEach(([u, v]) => {
    adjList.get(u).push(v);
    inDegree.set(v, inDegree.get(v) + 1);
  });

  // 진입 차수가 0인 프로젝트를 큐에 삽입
  for (let [project, degree] of inDegree) {
    if (degree === 0) queue.push(project);
  }

  // 위상 정렬
  while (queue.length) {
    let project = queue.shift();
    order.push(project);

    adjList.get(project).forEach((neighbour) => {
      inDegree.set(neighbour, inDegree.get(neighbour) - 1);
      if (inDegree.get(neighbour) === 0) {
        queue.push(neighbour);
      }
    });
  }

  // 모든 프로젝트가 순서에 포함되었는지 확인
  if (order.length === projects.length) {
    return order;
  } else {
    throw new Error("유효한 순서가 존재하지 않습니다.");
  }
}

// 예제 입력
const projects = ["a", "b", "c", "d", "e", "f"];
const dependencies = [
  ["a", "d"],
  ["f", "b"],
  ["b", "d"],
  ["f", "a"],
  ["d", "c"],
];

// 실행
try {
  const order = findOrder(projects, dependencies);
  console.log(order);
} catch (error) {
  console.error(error.message);
}
