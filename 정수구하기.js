// 3개의 저웃 중 가장 큰 수와 가장 작은 수 구하기
let a, b, c, tmp;
let min, max;

tmp = prompt("첫번째 정수를 입력 하세요 : ","");
a = Number(tmp); //string으로 입력되므로 형변환 필요
tmp = prompt("두번째 정수를 입력 하세요 : ","");
b = Number(tmp);
tmp = prompt("세번째 정수를 입력 하세요 : ","");
c = Number(tmp);

if(a > b) {
    if(a > c) max = a;
    else max = c; 
}else {
    if(b > c) max = b;
    else max = c;
}
if(a > b) {
    if(b > c) min = c;
    else min = b;
} else {
    if(a > c) min = c;
    else min = a;
}

document.write("<h3>가장 큰 수 : " + max +"</h3>");
document.write("<h3>가장 작은 수 : "+ min + "</h3>")