// 클래스 속성 조작하기

const el = document.querySelector("#text");
// classList : 선택한 요소 노드의 class 속성을 지정할 때 사용 (add(), remove())
el.classList.add("active","blue-color"); // class 속성 추가
el.classList.remove("active"); // class 속성 제거

// 메소드 속성으로 조작하기 : 모든 속성을 전체적으로 변경할 수 있음
// .getAttribute("속성명") : 속성값을 가져옴
// .setAttribute("속성명","속성값") : 속성값을 설정
// .removeAttribute("속성명") : 속성을 삭제
const aEl = document.querySelector("a"); // a 태그를 선택
const href = aEl.getAttribute("href");
aEl.setAttribute("href", "https://kakao.com");
aEl.innerText="카카오";

// 노드 추가/삭제 하기 : DOM 트리에 새로운 노드를 생성하고 기존 DOM 트리에 연결
 