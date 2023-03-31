//이벤트 등록하기 : 이벤트가 발생할 때 어떤 작업을 할 것인지 자바스크립트 코드로 작성하는 것

function clickEvent() {
    alert("인라인 방식으로 구현된 함수가 호출 되었습니다.");
}

function focusEvent() {
    let inputBox = document.querySelector("#input_box");
    inputBox.style.background = "orange";
}
function blurEvent(){
    let inputBox = document.querySelector("#input_box");
    inputBox.style.background = "green";
}

// 프로퍼티 리스너 방식으로 이벤트 등록하기
const btnEl = document.getElementById("prt_btn");
btnEl.onclick = () => alert("프로포티 방식으로 구현된 함수 호출");

//이벤트 등록 메소드로 이벤트 등록하기
// <노드>.addEventListner("이벤트 타입", 함수);
let regBtnEl = document.getElementById("reg_btn");
regBtnEl.addEventListener("click",eventFunc);

function eventFunc() {
    alert("이벤트 등록 메소드로 구현된 함수 호출");
}