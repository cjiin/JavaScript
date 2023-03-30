// 폼 요소의 시작은 항상 form 태그 입니다.
// 폼 요소는 input, select, button 태그 등이 있다.
// 폼 요소를 선택할 떄는 elememts 속성이나 name 속성을 사용

// document.frm.id.value = '곰돌이사육사';
// document.frm.pw.value = 'sphb8250';

function inputCall() {
    let id =document.frm.id.value;
    // console.log(id);
    let pwd =document.frm.pw.value;
    // console.log(pwd);
    let desc = document.frm.desc.value;
//     console.log(desc);
}

// 체크박스 다루기 : 체크박스도 value 속성으로 값을 가져올 수 있음
const checkEl = document.querySelectorAll("[type='checkbox']");
for(let e of checkEl) {
    if(e.value === "orange") e.checked = true;
    console.log(e.value);
}

// 콤보박스 다루기
const optionEl = document.querySelectorAll("option");
for(let e of optionEl) {
    if(e.value === "banana") e.selected = true;
}

// 파일 업로드
function upload() {
    const filePath = document.frm.upload.files;
    console.log(filePath);

}
