let treeHit = 0;
while(true) {
    treeHit++;
    document.write(`<p>나무를 ${treeHit} 번 찍었습니다. </p>`);
    if(treeHit == 10) {
        document.write("<p>나무가 넘어갑니다. </p>");
        break;
    }   
}


//do - while문 버전
let i =1;
do {
    console.log(i);
    i++
} while(i<=5); //참인 동안 수행


// while true 버전
while(true) {
    console.log(i);
    i++
    if(i > 5) break;
}