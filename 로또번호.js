// 중복 없는 로또 번호 만들기 (자바스크립트로 구현하고 html과 css를 이용해 출력)

function getLotto() {
    const numbers =[];
    const container = document.getElementById("container");
    container.innerHTML = ""; // 출력하기 전에 이전 출력 결과를 지우기
    
    while (numbers.length < 6) {
        const number = Math.floor(Math.random()* 45) + 1;
        if(!numbers.includes(number)) {
            numbers.push(number); // 포함되어 있지 않으면 배열에 넣기
        }
    }
    for(let num of numbers) {
        const div = document.createElement('div');
        div.classList.add('number'); // <div> 요소에 "number" 클래스를 추가
        div.textContent = num;
        container.appendChild(div); // container에 붙여주기
    }
}