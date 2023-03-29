// 응모자 수를 입력 받아 당첨자를 발표하는 프로그램 작성
// 응모자 수 : 30, input 창으로 입력 받기
// 당첨자 발표 : 응모자 수 사이에서 당첨자를 선택(랜덤 함수 이용)
    function radomFunc() {
        let cnt = document.getElementById("seed").value;
        let pick = Math.floor((Math.random() * seed) + 1);
    }
        document.getElementById("cnt").innerHTML = cnt;
        document.getElementById("result").innerHTML = pick;