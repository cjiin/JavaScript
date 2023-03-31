
//자바스크립트 문법
let colorBtn = document.getElementById("colorButton");
let colors = ["red", "orange", "yellow", "green", "blue","indigo","violet"];
let colorInx = 0;

colorBtn.addEventListener("click", function() {
    document.body.style.backgroundColor = colors[colorInx];
    colorInx = (colorInx + 1) % colors.length;
});




//제이쿼리 문법
$(document).ready(function() {
    let colors = ["red", "orange", "yellow", "green", "blue", "purple"];
    let colorIndex = 0;
  
    $("#colorButton").click(function() {
      $("body").css("background-color", colors[colorIndex]);
      colorIndex = (colorIndex + 1) % colors.length;
    });
  });