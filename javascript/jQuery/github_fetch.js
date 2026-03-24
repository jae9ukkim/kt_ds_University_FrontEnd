window.onload = function () {
  // ".load-git-users" 클릭하면 "https://api.github.com/users"을 fetch 로 호출
  $(".load-git-users").on("click", function () {
    var usersProm = fetch("https://api.github.com/users");
    usersProm
      .then(function (jsonResponse) {
        return jsonResponse.json();
      })
      .then(function (data) {
        //  반환되는 데이터를 console 로 출력
        console.log(data);
        // 반환되는 데이터 중 객체 한개 마다 ".posts"의 li로 추가합니다.
        for (var i = 0; i < data.length; i++) {
          var list = $("<li>");

          // 반환되는 데이터 중 "avatar_url" 의 값을 <img src="" /> 에 추가하고 이미지가 나오도록 합니다. (이미지는 완전한 동그라미로 나오도록 해보세요)
          var img = $("<img>");
          img
            .attr("src", function () {
              return data[i].avatar_url;
            })
            .css({ "border-radius": "50%" });
          list.append(img);

          // 반환되는 데이터 중 "login"의 값을 <div></div>에 추가하고 이름이 나오도록 합니다.
          var div = $("<div>");
          div.text(data[i].login);

          // 반횐되는 데이터 중 "html_url"의 값을 5에서 만든 div를 클릭했을 때 이동하도록 이벤트를 생성합니다.
          (function (url) {
            div.on("click", function () {
              location.href = url;
            });
          })(data[i].html_url);

          var div = $("<div>");
          div
            .text(data[i].login)
            .data("url", data[i].html_url)
            .on("click", function () {
              location.href = $(this).data("url");
            });

          $(".posts").append(list).append(div);
        }
      });
  });
};
