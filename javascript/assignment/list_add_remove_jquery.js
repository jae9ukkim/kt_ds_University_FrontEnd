$().ready(function () {
  var listCnt = $("#btn-add").closest("div").find("ul").data("listcnt");

  $("#btn-add").on("click", function () {
    if (listCnt === 10) {
      alert("더 이상 추가할 수 없습니다");
      return;
    }

    var listItem = $("<li>");
    listItem.text("아이템 목록 " + ++listCnt);
    listItem.addClass("list-item");

    $(this).closest("div").find("ul").append(listItem);
    $(this)
      .closest("div")
      .find("div")
      .text("총 " + listCnt + "개의 아이템이 등록되었습니다.");
  });

  $("#btn-remove").on("click", function () {
    if (listCnt === 0) {
      alert("이미 모든 아이템이 제거되었습니다");
      return;
    }

    listCnt = 0;

    $(this)
      .closest("div")
      .find("ul")
      .children("li")
      .each(function () {
        $(this).remove();
      });
    $(this)
      .closest("div")
      .find("div")
      .text("총 " + listCnt + "개의 아이템이 등록되었습니다.");
  });
});
