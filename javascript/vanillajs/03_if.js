window.onload = function () {
  var randomNumber = parseInt(Math.random() * 10);
  console.log(randomNumber); // 정수만 취하도록

  // 난수가 0이라면 "연산할 수 없는 숫자입니다."
  // 난수가 0보다 크면 "0보다 큰 값입니다."
  //   if (randomNumber == 0) {
  //     console.log("연산할 수 없는 숫자입니다.");
  //   } else {
  //     console.log("0보다 큰 값입니다.");
  //   }
  if (randomNumber) {
    console.log("0보다 큰 값입니다.");
  } else {
    console.log("연산할 수 없는 숫자입니다.");
  }

  var name = " ";
  if (name) {
    console.log("name의 값이 있습니다.");
  } else {
    console.log("name의 값이 없습니다.");
  }

  var age; //undefined
  if (age) {
    console.log("age의 값이 있습니다.");
  } else {
    console.log("age의 값이 없습니다.");
  }

  var address = null;
  if (address) {
    console.log("address의 값이 있습니다.");
  } else {
    console.log("address의 값이 없습니다.");
  }

  var arr = [];
  if (arr) {
    console.log("arr의 값이 있습니다.");
  } else {
    console.log("arr의 값이 없습니다.");
  }

  // 같다 비교.
  // Javascript의 값 동등비교 ==, ===
  // == 값만 비교
  // === 값과 type 비교
  console.log(1 == 1); // true
  console.log(1 == 1.0); // true
  console.log("1" == 1); // true
  console.log("a" == "a"); // true

  console.log(1 === 1, typeof 1); // true
  console.log(1 === 1.0, typeof 1, typeof 1.0); // true
  console.log("1" === 1, typeof "1", typeof 1); // false
  console.log("a" === "a", typeof "a"); // true

  var input = document.querySelector(".input");
  input.addEventListener("keyup", function () {
    var value = parseInt(this.value);
    if (!value) {
      console.log("숫자를 입력하세요!");
    } else {
      console.log(value * value);
    }
  });
};
