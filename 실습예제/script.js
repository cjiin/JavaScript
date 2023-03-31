function newRegister() {
    let newItem = document.createElement("li"); //ul 태그 아래에 추가할 요소노드 생성
    let subject = document.querySelector("#subject"); 
    // HTML 문서에 새로운 텍스트 노드를 만듦.
    let newText = document.createTextNode(subject.value);
    // 텍스트 노드를 요소 노드의 자식 노드로 추가
    newItem.appendChild(newText);

    let itemLIst = document.querySelector("#itemList");
    
    //insertBefore() :  DOM 요소를 특정 요소 이전에 삽입하는 메소드
    // 자식 노드 중 첫번째 노드 앞에 추가
    itemLIst.insertBefore(newItem, itemLIst.childNodes[0]);

    subject.value ="";
    let items = document.querySelectorAll("li");
    for(let e of items) {
        e.addEventListener("click", function() {
           if(this.parentNode) { // 클릭이벤트가 발생한 요소의 부모노드가 있으면 
                this.parentNode.removeChild(this); // 부모노드 기준으로 자식을 삭제
           }
        });
    }
}