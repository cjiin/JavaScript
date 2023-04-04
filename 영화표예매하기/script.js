// - 메뉴는 [1]예매하기 [2]종료하기
// - 사용자로부터 좌석번호 (index)를 입력받아 예매하는 시스템이다. (좌석은 10개이다)
// - [V] [V] [V] [] [] [] [] [] [] []
// - 예매가 완료되면 해당 좌석 값을 1로 변경
// - 이미 예매가 완료된 좌석은 재구매 불가
// - 한 좌석 당 예매 가격은 12000원
// - 프로그램 종료 후 해당 영화관의 총 매출액 출력
const SEAT_COUNT = 10;
const SEAT_PRICE = 12000;
const seats = new Array(SEAT_COUNT).fill(0); // 10개의 배열을 0으로 채우면서(초기화) 생성
let total = 0; // 총 금액

function printSeats() {
    const seatsDiv = document.querySelector("#seats");
    seatsDiv.innerHTML = "";
    for(let i = 0 ; i < SEAT_COUNT; i ++) {
        const seat = document.createElement("div");
        seat.classList.add("seat");
        if(seats[i]===1) {
            seat.classList.add("booked");
        }
        seat.textContent = i + 1;
        seat.addEventListener("click", ()=> bookSeat(i));
        seatsDiv.appendChild(seat);
    }
}

function bookSeat(index) {
    if(seats[index]==1) {
        alert("이미 예매가 완료된 좌석입니다.");
    } else {
        seats[index] = 1;
        total += SEAT_PRICE;
        alert("예매가 완료되었습니다.");
        printSeats();
    }
}

function exitProgram() {
    alert(`총 매출액은 ${total}원 입니다.`);
    window.close();
}

document.addEventListener("DOMContentLoaded", () => {
    printSeats();
    const exitBtn = document.querySelector("#exitBtn");
    exitBtn.addEventListener("click", exitProgram);
});

