// 함수 표현식은 변수에 함수를 할당해서 사용하는 방식이다.
// 함수 표현식은 변수에 할당하는 함수에 식별자가 있으면 네이밍 함수, 없으면 익명 함수로 구분함.
// 호이스팅이 적용되지 않음
// const 변수명 = function(){} 



// gugudan은 변수가 아님 함수임!
const gugudan = function(){
    for(let i = 1; i < 10; i++) {
        console.log(`3 * ${i} = ${3 * i}`)
    }
}

console.log(gugudan());

// 화살표 함수로 정의하기
// 화살표 함수는 ES6 에서 추가된 새로운 함수 선언 방식이며, 함수 선언식보다 간결하고 가독성이 좋음

const hi = function() {
    return "안녕하세요";
}
console.log(hi());

const hi2 = () => "안녕하세요";
console.log(hi2());

// 화살표 함수에서 매개변수 정의
const sum = num1 => console.log(num1 * 100);
sum(100);

const sum2 = (num1, num2) => console.log(num1 * num2);
sum2(10, 20);

// 기본값 할당 : 디폴트 매개변수 값을 주는 방법 
// function sum3(a = 10, b = 20) {
//     console.log(a, b);
// }
const sum3 = (a = 10, b = 20, c) => console.log(a,b,c);
sum3();


// retrun문 : 함수 외부로 결과를 반환할 때 사용
console.log(sum4(100));
function sum4(a = 10, b = 20) {
    return a + b;
}

const sum5 =(num1, num2) => num1 + num2;
console.log("결과 : " + sum5(100,200));

// 함수 스코프 : 함수에서 정의한 블록문만 스코프의 유효 범위로 인정
// 블록 스코프 : {}로 구성된 블록문 기준으로 스코프의 유효 범위 (let, const)

let a = 10;
{
    let b = 20;
    console.log(`코드 블록 내부 a : ${a}`);
    console.log(`코드 블록 내부 b : ${b}`);
}
console.log(`코드 블록 외부 a : ${a}`);
// console.log(`코드 블록 외부 b : ${b}`); //이 부분만 에러


// var 키워드 : 블록 스코프를 따르지 않고 호이스팅이 발생함 (에러발생 x)
// var a = 10;
// {
//     var b = 20;
//     console.log(`코드 블록 내부 a : ${a}`);
//     console.log(`코드 블록 내부 b : ${b}`);
// }
// console.log(`코드 블록 외부 a : ${a}`);
// console.log(`코드 블록 외부 b : ${b}`); 



// 즉시 실행 함수 : 함수를 정의하자마자 바로 실행하는 것을 의미합니다.
(function() {
    let message = "Hello, world !!!";
    console.log(message);
})();

// Callback 함수 : 함수의 인자로 다른 함수를 전달하여 그 함수가 실행될 떄 호출되는 함수를 의미
// 또한 비동기적인 작업을 처리할 때 많이 사용됨.
// 함수 이름 넘기기
function cry(){
    console.log("cry");
}
function sing(){
    console.log("sing");
}
function dance(){
    console.log("dance");
}
function checkMood(mood) {
    if(mood === "good") sing();
    else cry();
}
checkMood("good");
checkMood("sad");

// 콜백 함수 (매개변수 자리에 함수를 넣은 형식)
function checkMoodCallback(mood, goodCall, babCall) {
    if(mood === "good") goodCall();
    else babCall();
}
checkMoodCallback("good",dance,cry);
checkMoodCallback("Not bad", dance, sing);

// 타이머 설정과 Callback 함수
let stopFlag = false;
function buyTobe(item, price, quantity, callback) {
    console.log(item + "상품을 " + quantity + "개 골라서 점원에게 주었습니다.");
    setTimeout(function() {
            console.log("계산이 필요 합니다.");
            let total = price * quantity;
            callback(total);
    }, 2000);
}

function pay(n) {
    console.log("지불할 금액은 " + n + "원 입니다.");
    stopFlag = true;
}

buyTobe("\'밤고구마\'",1000, 5, pay);
console.log("나는 나에게 주어진 일을 하고 있습니다.");
console.log("나는 나에게 주어진 일을 하고 있습니다.");
console.log("나는 나에게 주어진 일을 하고 있습니다.");


