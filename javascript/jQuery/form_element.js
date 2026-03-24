// var runMode = "vanilla";
var runMode = "jquery";

$().ready(function () {
  if (runMode === "jquery") {
    // vanilla ==> input, select의 value를 get 하려면 element.value;
    // vanilla ==> input, select의 value를 set 하려면 element.value = 값;
    // jQuery ==> input, select의 value를 get 하려면 element.val();
    // jQuery ==> input, select의 value를 set 하려면 element.val(값);

    $("#checked-all").on("change", function () {
      $("input[type='checkbox'][name='favorate-genre']").prop(
        "checked",
        $(this).prop("checked"),
      );
    });

    $("input[type='checkbox'][name='favorate-genre']").on(
      "change",
      function () {
        // 체크박스의 개수 세기
        var checkbox = $("input[type='checkbox'][name='favorate-genre']");
        var checkboxCount = checkbox.length;

        // 체크한 체크박스의 개수 세기
        // $("input[type='checkbox'][name='favorate-genre']:checked").length
        // var checkedCount = $(
        //   "input[type='checkbox'][name='favorate-genre']",
        // ).filter(":checked").length;
        var checkedCount = checkbox.filter(":checked").length;

        $("#checked-all").prop("checked", checkboxCount === checkedCount);
      },
    );

    var email = $("#email");
    console.log(email.val());
    email.val("other@gmail.com");

    var jobs = $("#jobs");
    console.log(jobs.val());
    jobs.val(3);
    // jobs.val(999);
    // 사용자가 select 태그에서 option을 변경했을 때 해당 값 출력!
    jobs.on("change", function () {
      var seletedOpt = $(this).children("option").filter(":selected");
      console.log(seletedOpt.val(), seletedOpt.text());
    });

    // radio event (change) ==> radio가 선택될 때
    $("input[type='radio'][name='age']").on("change", function () {
      console.log($(this).val(), $(this).prop("checked"));
    });
  }
});

window.onload = function () {
  if (runMode === "vanilla") {
    // 모든 form tag 공통
    var email = document.querySelector("#email").value;
    console.log(email);

    document.querySelector("#email").value = "other@gmail.com";

    var jobs = document.querySelector("#jobs").value;
    console.log(jobs);

    // select 태그에서 option의 value가 3인 것을 선택해라!
    document.querySelector("#jobs").value = 3;

    // select 태그에서 option의 value가 999인 것을 선택해라!
    document.querySelector("#jobs").value = 999;

    // 사용자가 select 태그에서 option을 변경했을 때 해당 값 출력!
    document.querySelector("#jobs").addEventListener("change", function () {
      console.log(this.value);
      console.log(
        this.querySelector("option[value='" + this.value + "']").innerText,
      );
    });

    // radio event (click) ==> radio를 클릭 할 때
    var radios = document.querySelectorAll("input[type='radio'][name='age']");

    // for (var i = 0; i < radios.length; i++) {
    //   radios[i].addEventListener("click", function () {
    //     // 클릭한 radio의 선택 상태를 콘솔에 출력
    //     console.log(this.value, this.checked);
    //   });
    // }

    // radio event (change) ==> radio가 선택될 때
    for (var i = 0; i < radios.length; i++) {
      radios[i].addEventListener("change", function () {
        // 선택 상태가 변경된 radio의 선택 상태를 콘솔에 출력
        console.log(this.value, this.checked);
      });
    }

    var checkboxes = document.querySelectorAll(
      "input[type='checkbox'][name='favorate-genre']",
    );

    var checkedAll = document.querySelector("#checked-all");
    checkedAll.addEventListener("change", function () {
      for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = this.checked;
      }
    });

    for (var i in checkboxes) {
      if (!isNaN(i)) {
        // console.log(i, checkboxes[i]);
        checkboxes[i].addEventListener("change", function () {
          // 체크박스의 선택 상태가 변경될 때 마다 체크된 체크박스의 개수를 조회하여 출력.
          // checkboxes 다시 한 번 반복
          var checkedCount = 0;
          for (var index = 0; index < checkboxes.length; index++) {
            if (checkboxes[index].checked) {
              checkedCount++;
            }
          }
          console.log(checkedCount, "개의 체크박스가 선택됨.");

          checkedAll.checked = checkboxes.length === checkedCount;

          // 체크가 된 것만 출력을 한다. (value)
          if (this.checked) {
            console.log(this.value, this.checked);
          }
        });
      }
    }
  }
};
