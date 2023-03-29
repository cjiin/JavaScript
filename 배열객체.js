// shift() : 첫번째 요소를 제거하고 값을 반환합니다.
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift(); // "Banana"를 fruits 배열에서 제거하고, 반환

// unshift() : 배열의 맨 앞에 요소를 추가하고, 배열의 길이를 반환
let fruits2 = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon"); // "Lemon"을 fruits 배열 맨 앞에 추가하고 배열의 길이를 반환

// 배열 요소의 변경
let fruits3 = ["Banana", "Orange", "Apple", "Mango"];
fruits3[0] = "Kiwi";
console.log(fruits3);

// 2개 이상의 배열을 하나로 결합 : concat()
let arr5 = ["사과", "딸기", "참외"];
let arr6 = ["포도", "수박", "바나나"];
let arr7 = ["키위", "망고", "오렌지"];
let arr8 = ["복숭아", "자두", "멜론"];
let totFruits = arr5.concat(arr6, arr7, arr8);
console.log(totFruits);

// slice() : 시작 인덱스부터 종료 인덱스 미만까지의 배열의 요소를 잘라냄
let fruits10 = ["Banana", "Orange", "Apple", "Mango", "Lemon"];
let slice1 = fruits10.slice(3); // 3번째 요소부터 끝까지 (망고, 레몬 출력)
let slice2 = fruits10.slice(1,3); // 1번 인덱스에서 3번 인덱스 미만의 요소를 잘라냄 (1,2 출력)
console.log(slice2);

// sort() : 오름차순 정렬
fruits10.sort();
console.log(fruits10);

// 내림차순 정렬 
console.log(fruits10.reverse());

// filter() : 배열에서 특정 조건을 만족하는 배열의 요소만을 찾아서 새로운 배열 생성
let persons = [
    {
        name : "유재석",
        point : 78,
        city : "서울"
    },
    {
        name : "김종국",
        point : 92,
        city : "서울"
    },
    {
        name : "양세찬",
        point : 76,
        city : "제주"
    },
    {
        name : "하하",
        point : 81,
        city : "인천"
    }
];

let pass = persons.filter(e => e.point > 80);
console.log(pass);

// 날짜와 시간을 다루는 Date 객체
const date = new Date();
console.log(date);

// 인스턴스 만들기

// 월은 0부터 시작, GMT 기준 시간으로 설정됨
const date1 = new Date(2022, 11, 27, 18, 30, 50);
console.log(date1);

// 원하는 달로 입력 됨
const date2 = new Date("2022-12-25");
const date3 = new Date("2022/12/25/18:30:50"); 
console.log(date3);

// Date 객체의 메소드
let myDate = new Date();
console.log(myDate.getFullYear()); // 현재 연도 출력
console.log(myDate.getMonth()+1); // 현재 월 출력 (0부터 시작)
console.log(myDate.getDate()); // 현재 일 출력
console.log(myDate.getDay()); // 현재 요일 출력
console.log(myDate.getHours()); // 현재 시간 출력
console.log(myDate.getMinutes()); // 현재 분 출력
console.log(myDate.getSeconds()); // 현재 초 출력
console.log(myDate.getTime()); // 1970년 1월 1일 자정부터 경과한 시간 출력

// Map 개게 : 자바스크립트에서 제공하는 데이터 구조 중 하나로 key-value 쌍으로 데이터를 저장하고 관리
// Map은 객체와 유사하지만 객체와는 다르게 키에 다양한 자료형을 사용할 수 있음.

let map = new Map();
map.set("name", "유나");
map.set("email", "yuna@gmail.com");
map.set("addr", "경기도 수원시");

console.log(map.size);
console.log(map.get("name"));
console.log(map.has("email"));

// map.forEach(function (item) {
//     console.log(item);
// });

map.forEach((item)=> {
    console.log(item);
});

// 수학 연산을 다루는 Math 객체 (자바랑 똑같음)
console.log(Math.abs(-5)); // 출력: 5
console.log(Math.ceil(1.1)); // 출력: 2
console.log(Math.floor(1.9)); // 출력: 1
console.log(Math.round(1.4)); // 출력: 1
console.log(Math.max(1, 2, 3)); // 출력: 3
console.log(Math.min(1, 2, 3)); // 출력: 1
console.log(Math.pow(2, 3)); // 출력: 8
console.log(Math.sqrt(9)); // 출력: 3 (제곱근)
console.log(Math.random()); // 출력: 0 이상 1 미만의 임의의 숫자형 값 반환
console.log(Math.floor(Math.random() * 10)); // 0에서 9 사이의 정수값 만환

let ran = Math.floor(Math.random()*10);
console.log(ran);

let ran2 = parseInt((Math.random() * 10) + 1); // 1~10 사이 
console.log(ran2);

