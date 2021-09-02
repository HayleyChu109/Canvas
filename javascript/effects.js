var blurClick = 1;
var dropShadowClick = 1;

const effectBlur = () => {
  if (blurClick % 2 !== 0) {
    contextReal.filter = "blur(3px)";
    $("#effect-blur").html("Blur (ON)");
    blurClick++;
  } else if (blurClick % 2 == 0) {
    contextReal.filter = "none";
    $("#effect-blur").html("Blur (OFF)");
    blurClick++;
  }
};
