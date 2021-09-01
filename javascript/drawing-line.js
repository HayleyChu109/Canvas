/**********************************************
 * Drawing Line Functionality
 * ==================================
 * This class extends the PaintFunction class, which you can find in canvas-common
 * Remember, order matters
 ***********************************************/
class DrawingLine extends PaintFunction {
  // This class extends the PaintFunction class
  // You are only passing one instance here

  constructor(contextReal) {
    super();
    this.contextReal = contextReal;
    var imgReady = false;
  }

  // On mouse down, ensure that the pen has these features
  onMouseDown(coord, event) {
    // Fill in the color
    this.contextReal.strokeStyle = `${pickrColorStroke}`;
    // End cap of line
    this.contextReal.lineCap = "round";
    // Kind of line
    this.contextReal.lineJoin = "round";
    // Width of line
    this.contextReal.lineWidth = 15;
    // Drawing the line here
    this.contextReal.beginPath();
    // this.context.moveTo(coord[0], coord[1]);
    // this.draw(coord[0], coord[1]);
  }
  // Clicking and removing your mouse
  onDragging(coord, event) {
    this.draw(coord[0], coord[1]);
  }

  onMouseMove() {}

  onMouseUp() {
    var imgReady = true;
    history(this.contextReal, `${imgReady}`);
  }

  onMouseLeave() {}
  onMouseEnter() {}

  draw(x, y) {
    //
    this.contextReal.lineTo(x, y);
    // this.context.moveTo(x, y);
    // this.context.closePath();
    // Draw the line onto the page
    this.contextReal.stroke();
  }
}
