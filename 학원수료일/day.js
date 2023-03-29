let lastDay = new Date("2023-07-25");
let now = new Date();

let toNow = now.getTime();
let toLast = lastDay.getTime();
let remainTime= toLast - toNow;

remainTime = Math.round(remainTime/(1000*60*60*24));
document.querySelector('#result').innerText = remainTime;
