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

  // 처음부터 존재했던 ".package-button-area" DOM을 통해서
  // 새롭게 생성된 "p.white-color" 에게 click 이벤트를 할당한다.
  $(".package-button-area").on("click", "p.white-color", function () {
    alert($(this).text());
  });
  // $(".package-button-area")
  //   .find("p")
  //   .on("click", function () {
  //     alert($(this).text());
  //   });

  $(".package-green-button").on("click", function () {
    // var vacationPrice = $(this).parent().parent().parent().data("price");
    var vacationPrice = $(this).closest(".package").data("price");
    var price = $("<p>");
    price.text("From $" + vacationPrice);
    // price.on("click", function () {
    //   alert($(this).text());
    // });

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
