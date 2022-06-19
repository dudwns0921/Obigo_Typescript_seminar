// 타입스크립트 에러 사전 방시 예시

// const Human = {
//     name: "Jun"
// }

// Human.sayHello();

// 타입스크립트 코드 가이드 및 자동완성 예시

// function sum(a:number, b:number): number {
//     return a + b;
//   }
//   var total = sum(10, 20);
//   total --> 자동완성 불가 보여주기

// 타입 & 인터페이스 예시

type BirdType = {
    wings: 2;
  };

type Owl = { nocturnal: true, bigEyes: true } & BirdType;

interface Chicken extends BirdType {
  colourful: false;
  flies: false;
}

interface Chicken {
    tasty: true;
}

// --> 타입과 인터페이스 재정의 부분 보여주기

let owl: Owl = { wings: 2, nocturnal: true };
let chicken: Chicken = { wings: 2, colourful: false, flies: false };

// owl = chicken;
// chicken = owl;