// 문자열 길이 체크 : length
const pw= "124";
if(pw.length < 4){
console.log("비밀번호는 최소 4자리 이상 입력해 주세요.");
}

// 특정 문자열 포함 여부 확인 : includes, indexOf
const email= "test!naver.com";
if(email.includes("@") === false){
console.log("올바른 이메일 형식이 아닙니다.");
}
const email2= "test!naver.com";
if(email2.indexOf("@") === -1){
console.log("올바른 이메일 형식이 아닙니다.");
}

// lastIndexOf(): 찾고자 하는 문자열이 둘 이상 발견되면 마지막에 발견된 문자열의 인덱스 반환
const email3 = '@test@gamil.xom@';
console.log(email3.lastIndexOf("@"));

// slice() : 시작 위치와 종료 위치를 주면, 문자열에서 해당 부분을 잘라내서 반환 (원본 손상하지 않음. 불변성 원칙 적용)
let str = "Apple, Banana, Kiwi";
let res = str.slice(7, 13);
console.log(res); // Banana 출력

// substring() : slice와 동일하지만 음수 허용 안함
let str2 = "Apple, Banana, Kiwi";
let res2 = str.substring(7, 13);
console.log(res);

// replace() : 문자열 내의 특정 문자열을 지정한 문자열로 바꾸는 함수
let str3 = "지구오락실, 이영지, 안유진, 미미, 이은지, 안유진";
let newStr = str3.replace("안유진", "나영석");
console.log(n);

// replaceAll() : 문자열 내의 특정 문자열을 지정한 문자열로 모두 바꾸는 함수
let newStr2 = str3.replaceAll("안유진", "나영석");
console.log(newStr);

// 문자열을 모두 대문자 및 소문자로 변경
let alpha = "Better late than never";
console.log(alpha.toUpperCase());
console.log(alpha.toLowerCase());

// concat() : 2개 이상의 문자열을 하나의 문자열로 합치는 함수
// 기존 문자열을 변경하지 않고 합쳐진 새로운 문자열을 생성 (불변성)
let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" ", text2);
console.log(text3);

// trim() : 문자열의 앞, 뒤 공백을 제거
let str10 = " Hello World! ";
console.log(str10.trim()); // Hello World!

// padStart(), padEnd() : 문자열 앞과 뒤에 지정된 길이 만큼 추가하는 함수
let str11 = "55";
str = str.padStart(4,0); // 0055 , 총 길이, 자리가 비는 경우 0으로 채움
console.log(str11);

// chatAt() : 문자열에서 특정 인덱스에 해당하는 문자 하나를 반환하는 함수
let addr = "서울시 강남구 역삼동 KH정보교육원";
console.log(addr.charAt(5)); // 남

// charCodeAt() : 문자열에서 특정 인덱스에 해당하는 문자 하나의 유니코드값을 반환
let unicode = "HELLO WORLD";
console.log(unicode.charCodeAt(0)); //72

// split() : 특정 문자 기준으로 문자열을 잘라 새로운 문자열로 이루어진 배열 생성
let birthday = "1997-06-12";
let arr2 = birthday.split("-"); // 하이픈(-)을 기준으로 문자열을 분리해서 배열로 
console.log(arr2); // ["1997","06","02"]



