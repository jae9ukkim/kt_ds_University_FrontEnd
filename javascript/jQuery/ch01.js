// window.onload에 대응되는 코드
// jQuery(document).ready(function () {
//   alert("렌더링 준비 끝!");
// });

// Shorten 표현식
// $(document).ready(function () {
//   alert("렌더링 준비 끝!");
// });

// 비어있으면 document로 자동으로 채워준다
// $().ready(function () {
//   alert("렌더링 준비 끝!");
// });

// $(function () {
//   alert("렌더링 준비 끝!");
// });

$().ready(function () {
  // var h1 = document.querySelector("h1");
  var h1 = $("h1");
  // console.log(h1.innerText);
  console.log(h1.text());
  // h1.innerText = "changed!";
  h1.text("changed!");

  // p태그의 내용을 가져와서 alert로 출력
  var p = $("p");
  alert(p.text());

  // p태그의 내용을 "다음 여행을 계획해보세요." 라고 변경한다.
  p.text("다음 여행을 계획해보세요.");
});

// window.onload = function () {
//   var h1 = document.querySelector("h1");
//   console.log(h1.innerText);
//   h1.innerText = "changed!";
// };
