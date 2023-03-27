// 함수 선언문 : function 키워드로 선언하며 함수 이름을 가짐. 호이스팅의 영향을 받음
// 호이스팅 : 함수나 변수가 해당 스코프의 최상단으로 끌어 올려진 것 같은 현상을 말한다.
// 호이스팅의 영향을 받는다는 건 함수가 선언된 위치에 상관 없이 호출하여 실행할 수 있음을 의미함


// let sum1 = sum(21,24);
// let sum2 = sum(100,200); // 호이스팅 적용


function sum(p1, p2) {
    let sum = p1 + p2;
    return sum;
}

// console.log(sum1, sum2); 

// 예제 
// 함수와 switch 문 사용
// console.log("덧셈 : " + calculator(10,20,"+"));
// console.log("뺄셈 : " + calculator(10,20,"-"));
// console.log("곱셈 : " + calculator(10,20,"*"));
// console.log("나눗셈 : " + calculator(10,20,"/"));


function calculator() {
    const num1 = Number(document.getElementById("num1").value);
    const op = document.getElementById("operator").value;
    const num2 = Number(document.getElementById("num2").value);
    let result;

    switch(op) {
        case "+" : 
            result = add(num1, num2); 
            break;
        case "-" : 
            result = sub(num1, num2); 
            break;
        case "*" : 
            result = mul(num1, num2);
            break;
        case "/" : 
            result = div(num1, num2);
            break;
    }
    document.getElementById("result").innerHTML = `Result : ${result}`;
}
function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}
function mul(a, b) {
    return a * b;
}
function div(a, b) {
    return a / b ;
}