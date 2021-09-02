var imageLoader = document.getElementById("inputImg");
imageLoader.addEventListener("change", upload, false);
var canvas = document.getElementById("canvas-real");
var ctx = canvas.getContext("2d");

function upload(e) {
  var reader = new FileReader();
  reader.onload = function (event) {
    var img = new Image();
    img.onload = function () {
      img.width = canvas.width;
      img.height = canvas.height;
      ctx.drawImage(
        img,
        0,
        0,
        contextReal.canvas.width,
        contextReal.canvas.height
      );
    };
    img.src = event.target.result;
  };
  reader.readAsDataURL(e.target.files[0]);
}

$("#upload").click(() => {
  $("#inputImg").click();
});
