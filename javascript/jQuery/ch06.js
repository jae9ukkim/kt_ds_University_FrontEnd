$().ready(function () {
  $(".mouse-over-evetn-exam")
    .css({
      padding: "10px",
      color: "white",
    })
    .on("mouseover", function () {
      var listItem = $("<li>");
      listItem.text($(this).children("ul").children("li").length + 1);

      $(this).children("ul").append(listItem);
    })
    .on("mouseout", function () {
      $(this).children("ul").children("li").last().remove();
    });

  $(".vacation-title")
    .children("img")
    .on("mouseenter", function () {
      $(".ticket").show();
    })
    .on("mouseleave", function () {
      $(".ticket").hide();
    });
});
