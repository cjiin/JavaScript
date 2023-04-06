// open()메소드
// const xhr = new XMLHttpRequest(); //객체 생성
// xhr.open("POST","URL 경로"); // IP주소, port 번호, 백앤드가 수신할 컨트롤러 
// xhr.setRequestHeader("contents-type", "application/json");
// const data = {
//     id : 100,
//     title : "비동기 통신 연습하기",
//     author : "곰돌이사육사"
// };
// xhr.send(JSON.stringify(data));

// 응답 처리
const xhr = new XMLHttpRequest(); // XMLHttpRequest 객체 생성
xhr.open("POST", "https://jsonplaceholder.typicode.com/posts"); 
xhr.setRequestHeader("content-type", "application/json"); // 헤더 값 중 content-type 정의
const data = {
    id : "jks2024",
    pwd : "sphb8250",
    name : "곰돌이사육사",
    adddr : "경기도 수원시"

}

xhr.send(JSON.stringify(data)); // XMLHttpRequest 객체를 사용하여 서버로 HTTP 요청을 보내는 메서드
// XMLHttpRequest객체를 사용하여 서버로부터 HTTP 응답을 받았을 때 호출되는 콜백 함수를 설정하는 프로퍼티
xhr.onload = () => { 
    if(xhr.status === 201) { // 정상적으로 응답되면 status가 200
        const res = JSON.parse(xhr.response); 
        // 응답 데이터를 JSON.parse 함수로 JSON 객체로 변경
        console.log(res); 
    } else { // 에러 발생
        console.error(xhr.status, xhr.statusText); // 응답 상태와 응답 메시지를 출력
    }
}
