const save = () => {
  console.log("hi im save");
  var image = canvasReal
    .toDataURL("image/png")
    .replace("image/png", "image/octet-stream");
  window.location.href = image;
};
