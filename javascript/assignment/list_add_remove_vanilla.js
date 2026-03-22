window.onload = function () {
  var listCnt =
    document.querySelector("#btn-add").parentElement.children[2].dataset
      .listcnt;

  document.querySelector("#btn-add").addEventListener("click", function () {
    if (listCnt === 10) {
      alert("더 이상 추가할 수 없습니다");
      return;
    }

    var listItem = document.createElement("li");
    listItem.className = "list-item";
    listItem.innerText = "아이템 목록 " + ++listCnt;

    this.parentElement.children[2].appendChild(listItem);

    this.parentElement.children[3].innerText =
      "총 " + listCnt + "개의 아이템이 등록되었습니다.";
  });

  document.querySelector("#btn-remove").addEventListener("click", function () {
    if (listCnt === 0) {
      alert("이미 모든 아이템이 제거되었습니다");
      return;
    }

    var listArray = this.parentElement.children[2].children;

    while (listArray.length > 0) {
      this.parentElement.children[2].removeChild(listArray[0]);
    }

    listCnt = 0;
    this.parentElement.children[3].innerText =
      "총 " + listCnt + "개의 아이템이 등록되었습니다.";
  });
};
