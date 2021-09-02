$(".item-tool").click(function (e) {
  $(".item-tool").removeClass("item-active");
  $(this).addClass("item-active");
});

$(".item-utility").click(function (e) {
  $(this).addClass("item-active");
  setTimeout(() => {
    $(this).removeClass("item-active");
  }, 120);
});
