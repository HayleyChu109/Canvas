// Font size value
let fontSize = 28;

$("#font-size").change(function () {
  fontSize = $("#font-size").val();
  $("#font-size-number").html(fontSize);
});

// Stroke weight value
let strokeWeight = 10;

$("#stroke-weight").change(function () {
  strokeWeight = $("#stroke-weight").val();
  $("#stroke-weight-number").html(strokeWeight);
});

// Polygon sides
let sideOfPolygon = 5;

$("#polygonSide").change(function () {
  sideOfPolygon = $("#polygonSide").val();
  $("#side-of-polygon").html(sideOfPolygon);
  $("#drawing-polygon").click();
});
