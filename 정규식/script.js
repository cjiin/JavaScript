// 정규 표현식(regular expression) : 문자열에 포함된 특정 문자 조합을 찾기 위해 사용되는 패턴
// 정규식 만드는 두가지 방법
// const regexp = /World/;
// const regexp = new RegExp("World");

let str = "Hello World! World!";
const re = /World/;
console.log(re.test(str)); // 해당 문자열의 포함 여부 확인
console.log(str.search(re)); // 히당 문자열의 시작 위치를 반환

// exec() 메소드 : 인수로 전달된 문자열에서 특정 패턴을 검색하여, 패턴과 일치하는 문자열 반환
// 만약에 패턴과 일치하는 문자열이 없으면 null 반환
let targetStr = "가장 큰 실수는 포기, 가장 어리석은 일은 남의 결점 찾기, 가장 좋은 선물은 용서";
let firstRst = /가장+/.exec(targetStr); // 패턴과 일치하는 문자열이 여러개인 경우
let secondRst = /가장큰+/.exec(targetStr);// 패턴과 일치하는 문자열이 하나도 없는 경우
console.log(firstRst); // 가장 맨 처음으로 일치하는 문자열 반환
console.log(secondRst);

// test() 메소드 : 인수로 전달된 문자열에서 특정 패턴과 일치하는 문자열이 있는지 검사
// 문자열이 있으면 true, 없으면 flase
let targetStr2 = "가장 큰 실수는 포기, 가장 어리석은 일은 남의 결점 찾기, 가장 좋은 선물은 용서";
let firstResult = /가장+/.test(targetStr);    // 패턴과 일치하는 문자열이 여러 개인 경우
let secondResult = /가장큰+/.test(targetStr); // 패턴과 일치하는 문자열이 하나도 없는 경우
console.log(firstResult);  // true 
console.log(secondResult); // false

// 전화번호 검사 
// \d 는 숫자를 의미하고, {}의 숫자는 개수를 의미
let inputNum = "010-5006-4146";
const regex = /\d{3}-\d{4}-\d{4}$/;
let rst = regex.test(inputNum); // true
console.log(rst); //true

// 전화번호 추출하기 : match() : 주어진 문자열의 처음부터 패턴 매칭을 수행
const inputText = "안녕하세요. 제 번호는 010-5006-4146 입니다. 연락 주세요.";
const regex2 = /\d{3}-\d{4}-\d{4}/;
let regNumber = inputText.match(regex2);
console.log(regNumber[0]);

// 전화번호 여러개 추출하기 (g)
// \d{2,3} : 숫자 2 ~3개로 시작
// g : 매칭되는 모든 항목 찾기
const inputText2 = "안녕하세요. 제 번호는 010-1234-5678 031-987-5432 입니다."
const regex3 = /\d{2,3}-\d{3,4}-\d{4}/g;
let regNumber2 = inputText2.match(regex3);
console.log(regNumber2);
// 또는 
for(let num of regNumber2) {
    console.log(num);
}

// 정규식 주요 패턴 사용 예제
const regex4 = /오늘의/; // 단순 글자 1개 찾기
const regex5 = /010/g; // 모두 찾기
const regex6 = /[0-9]/g; // 모든 숫자 찾기
const regex7 = /[a-zA-Z]/g;  // 모든 알파벳 대소문자 찾기
const regex8 = /[^0-9]/g; // 숫자가 아닌 것 모두 찾기
const regex9 = /[ㄱ-ㅎ가-힣]/g; // 문자만 모두 찾기
const inputText3 = "abc안녕하세요. 제 번호는 010-1234-5678 031-987-5432 입니다.";
let rst1 = inputText3.match(regex9);
console.log(rst1);

// 웹사이트 주소 정규식 검사하기
// http:// 또는 https://로 시작하고, 알파벳, 언더스코어(_), 하이픈(-), dot(.)으로 이루어져 있음.
// /https?:\/\/[\w\-\.]+/g
const text = "구입문의는 : http://gogumarket.com https://google.com 010-1234-5678 입니다."
const regex10 = /https?:\/\/[\w\-\.]+/g;  // s? : s가 있거나 없음
let rst2 = text.match(regex10);
console.log(rst2);