// class DropShadow extends PaintFunction {
//   constructor(contextReal) {
//     super();
//     this.contextReal = contextReal;
//   }
// }

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

const effectDropShadow = () => {
  if (dropShadowClick % 2 !== 0) {
    contextReal.filter = `drop-shadow(16px 16px 20px ${pickrColorStroke})`;
    $("#effect-drop-shadow").html("Drop Shadow (ON)");
    dropShadowClick++;
  } else if (dropShadowClick % 2 == 0) {
    contextReal.filter = "drop-shadow(0 0 0)";
    $("#effect-drop-shadow").html("Drop Shadow (OFF)");
    dropShadowClick++;
  }
};
