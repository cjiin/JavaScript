// 객체는 중괄호를 사용하여 만듬, 속성(property)과 값(value)의 쌍으로 이루어짐
// 리터럴 객체
// 리터럴 객체 안에 객체와 함수 다 넣을 수 있음

const person = {
    name : {
        firstName : "유진",
        lastName : "안"
    },
    age : 20,
    isAdult : true,
    printInfo:function() {
        return this.name;
    }
};

console.log(person.printInfo());
console.log(person.name);
console.log(person['isAdult']);

//객체의 속성 값 변경
person.name.firstName = "Youjin";
person.name.lastName = "An";
console.log(person.name);

//객체 속성 동적으로 추가하기
const carInfo = {};
carInfo.name = "Sonata";
carInfo.year = "2022/08/15";
carInfo.maxSpeed = "250km";
console.log(carInfo);

//객체 속성 동적으로 삭제하기
delete carInfo.year;
console.log(carInfo);

//객체 메소드
let person2 = {
    name: 'John',
    age: 30,
    sayHello: function() {
      console.log(`Hello, my name is ${this.name}.`);
    }
  };
  person2.sayHello(); // 출력: 'Hello, my name is John.'

  //객체 생성자 : 객체 생성자는 템플릿으로 사용하여 동일한 속성과 메소드를 가진 객체를 여러개 생성할 때 사용

  function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayHello = function() {
      console.log(`Hello, my name is ${this.name}.`);
    };
  }
  
  let person3 = new Person('사람3', 30);
  let person4 = new Person('사람4', 35);

  person3.sayHello();
  person4.sayHello();