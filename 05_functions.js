window.onload = function () {
  function calc(num1, num2) {
    console.log(arguments);
    return num1 + num2;
  }

  var result = calc(10, 30);
  console.log(result); // 40

  var result = calc(10, 30, 100);
  console.log(result); // 40

  var result = calc(10, 30, 100, 1000);
  console.log(result); // 40

  var result = calc(10);
  console.log(result); // NaN

  var result = calc();
  console.log(result); // NaN
};
