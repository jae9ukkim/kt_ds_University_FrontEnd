window.onload = function () {
  var array = [];

  var push = document.querySelector(".push");
  var pop = document.querySelector(".pop");
  var unshift = document.querySelector(".unshift");
  var shift = document.querySelector(".shift");

  push.addEventListener("click", function () {
    array.push(array.length + 1);
    console.log(array);
  });

  pop.addEventListener("click", function () {
    var value = array.pop();
    console.log(value, array);
  });

  unshift.addEventListener("click", function () {
    array.unshift(array.length + 1);
    console.log(array);
  });

  shift.addEventListener("click", function () {
    var value = array.shift();
    console.log(value, array);
  });
};
