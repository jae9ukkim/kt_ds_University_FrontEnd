$().ready(function () {
  // contact 클릭
  $(".contact").on("click", function () {
    // 이전 형제태그(.package)의 자식 중
    // ".package-deal-comment" 태그의 내용을 출력
    // console.log($(this).prev().find(".package-deal-comment").text());
    $(this)
      .prev()
      .find(".package-deal-comment")
      .each(function () {
        console.log($(this).text());
      });
  });

  $(".package-green-button").on("click", function () {
    // var vacationPrice = $(this).parent().parent().parent().data("price");
    var vacationPrice = $(this).closest(".package").data("price");
    var price = $("<p>");
    price.text("From $" + vacationPrice);

    // 새롭게 만든 p 태그에게 inline style을 부여한다.
    // price.css({ color: "white" });

    // 새롭게 만든 p 태그에게 ".white-color" 클래스를 부여한다.
    price.addClass("white-color");

    $(this).after(price);

    // 브라우저 메모리에서 해당 DOM을 완전 제거
    $(this).remove();
    // 브라우저 메모리는 삭제하지 않고 화면에서 제거
    //   $(".package-green-button").detach();
  });
});
