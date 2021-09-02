let blur_value = 4;
let brightness_value = 80;
let contrast_value = 160;
let filterClick = false;

$("#blur").change(function () {
  blur_value = $("#blur").val();
  filterClick = false;
  $("#drawing-filter").click();
  filterClick = true;
});

$("#brightness").change(function () {
  brightness_value = $("#brightness").val();
  filterClick = false;
  $("#drawing-filter").click();
  filterClick = true;
});

$("#contrast").change(function () {
  contrast_value = $("#contrast").val();
  filterClick = false;
  $("#drawing-filter").click();
  filterClick = true;
});

resetFilter = () => {
  contextReal.canvas.style.filter = "blur(0px) brightness(100%) contrast(100%)";
};

filter = () => {
  contextReal.canvas.style.filter = `blur(${blur_value}px) brightness(${brightness_value}%) contrast(${contrast_value}%)`;
};

$("#drawing-filter").click(() => {
  if (filterClick === false) {
    filter();
    $(".item-filter").addClass("item-active");
    filterClick = true;
  } else if (filterClick === true) {
    resetFilter();
    $(".item-filter").removeClass("item-active");
    filterClick = false;
  }
});
