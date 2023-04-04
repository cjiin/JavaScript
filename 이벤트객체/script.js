const btnE1 = document.querySelector("button");
btnE1.addEventListener("click", function(e) {
    console.log("버튼이 눌러졌습니다." + e);
    // console.log("X 좌표 : " + e.clientX);
    // console.log("Y 좌표 : " + e.clientY);
    // console.log("마우스가 클릭된 x좌표 : " + e.pageX);
    // console.log("마우스가 클릭된 y좌표 : " + e.pageY);
    // console.log("모니터의 왼쪽 모서리 기준으로 마우스가 클릭된 x축 좌표 : " + e.screenX);
    // console.log("모니터의 왼쪽 모서리 기준으로 마우스가 클릭된 y축 좌표 : " + e.screenY);
});

const inputE1 = document.querySelector("input");
inputE1.addEventListener("keydown", function(event) {
    console.log(`keyCode : ${event.keyCode}`);
    console.log(`ctrlKey : ${event.ctrlKey}`);
    console.log(`altKey : ${event.altkey}`);
    console.log(`shiftKey : ${event.shiftKey}`);
});

// 이벤트 취소하기 : HTMl 태그 중 일부는 기본으로 이벤트가 적용되어 있습니다.
// 대표적으로 a태그와 form 태그가 해당됩니다.
// target 속성은 이벤트가 발생한 요소를 나타냅니다. (리액트에서 확인할 예정)
// preventDefalt()메서드를 사용하면 태그에 기본으로 연결된 이벤트를 취소
const aEls = document.querySelectorAll("a");
for(let e of aEls) {
    e.addEventListener("click", function(e){
        // 기본 이벤트 취소
        e.preventDefault();
    });
}

const form = document.getElementById("myForm");
form.addEventListener("submit", function(e) {
    // 기본 이벤트 취소
    // e.preventDefault();

});