// createElement() : 요소 노드를 생성
const aEl = document.createElement("div");

// <기준노드>.appendCild(추가할 자식노드);
document.body.appendChild(aEl);
aEl.innerText = "Test";

// div 태그를 생성하고 하위에 메뉴 리스트 추가하기 (5개 이상) (ul와 li 태그 사용)
// 메뉴 리스트
// - 돈까스 - 오므라이스 -짜장면 



let menuList = document.createElement("ul");
let menuItem1 = document.createElement("li");
let menuItem2 = document.createElement("li");
let menuItem3 = document.createElement("li");
let menuItem4 = document.createElement("li");
menuItem1.innerText = "돈까스";
menuItem2.innerText = "오므라이스";
menuItem3.innerText = "짜장면";
menuItem4.innerText = "짬뽕";

menuList.appendChild(menuItem1);
menuList.appendChild(menuItem2);
menuList.appendChild(menuItem3);
menuList.appendChild(menuItem4);


let menuEl = document.querySelector("#menu");
menuEl.appendChild(menuList);


function deleteMenu() {
    menuList.removeChild(menuItem1);
    menuList.removeChild(menuItem2);
    menuList.removeChild(menuItem3);
    menuList.removeChild(menuItem4);
}

