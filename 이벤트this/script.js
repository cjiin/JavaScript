const pE1s = document.querySelectorAll("p");

// for(let el of pEls)
pE1s.forEach((el) => {
    el.addEventListener("click", function(){
        if(this.style.color == "red") {
        this.style.color = "black";
     } else {
        this.style.color = "red";
     }
    });
});

// 화살표 함수 버전
pE1s.forEach((el) => {
    el.addEventListener("click", ()=> {
      if(el.style.color == "red") {
        el.style.color = "black";
     } else {
        el.style.color = "red";
     }
    });
});