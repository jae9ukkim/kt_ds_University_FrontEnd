$().ready(function () {
  $("li").text("서울");

  // 클래스가 promo 인 것의 텍스트를 "부산"으로 변경한다.
  $(".promo").text("부산");

  // 아이디가 "destinations" 인 태그의
  // 자식 요소 중 두번째 li의 텍스트를 "경주"로 변경한다
  // #destinations > li:nth-child(2)
  $("#destinations > li:nth-child(2)").text("경주");
  // $("#destinations > li").eq(1).text("경주");
});

// window.onload = function () {
//   // 모든 li 태그를 가져와서 내용을 "서울"로 변경한다.
//   var listItems = document.querySelectorAll("li");
//   for (var i = 0; i < listItems.length; i++) {
//     listItems[i].innerText = "서울";
//   }
// };
