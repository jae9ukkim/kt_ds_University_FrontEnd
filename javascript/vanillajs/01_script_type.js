// 브라우저가 파일을 모두 읽어서 모든 태그의 DOM 생성을 완료한 이후!
// 브라우저에 화면을 그리기 직전!
window.onload = function () {
  // External Script(JS)
  // 클래스가 clickable-button인 태그를 클릭하면 콘솔에 "버튼을 클릭했습니다!" 라고 출력.
  // 브라우저 메모리에서 클래스의 이름이 clickable-button인 것을 가지고 와라
  // 브라우저 메모리에 있는 DOM 객체를 가지고 온다.
  var button = document.querySelector(".clickable-button");
  console.log(button);
  // button에 event를 준다
  button.addEventListener("click", function () {
    console.log("버튼을 클릭했습니다!");
  });

  // 클래스가 clickable-box인 태그를 클릭하면 "박스를 클릭했습니다!" 라고 경고를 생성.
  var box = document.querySelector(".clickable-box");
  console.log(box);
  box.addEventListener("click", function () {
    alert("박스를 클릭했습니다!");
  });
};
