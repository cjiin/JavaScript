let menu =[]; //빈 배열 생성
let tmp;
tmp = prompt("버거1 가격 입력해주세요 : ","");
menu[0] = Number(tmp);
tmp = prompt("버거2 가격 입력해주세요 : ","");
menu[1] = Number(tmp);
tmp = prompt("버거3 가격을 입력해주세요 : ","");
menu[2] = Number(tmp);
tmp = prompt("사이다 가격을 입력해주세요 : ","");
menu[3] = Number(tmp);
tmp = prompt("콜라 가격을 입력해주세요 : ","");
menu[4] = Number(tmp);


let minBurger = menu[0];
let minDrink = menu[3];
for(let i = 0; i <menu.length; i++) {
    if(i < 3 && minBurger > menu[i]) minBurger = menu[i];
    if(i > 2 && minDrink > menu[i]) minDrink = menu[i];
}

document.getElementById("value").innerHTML = (minDrink + minBurger - 50) + "원";