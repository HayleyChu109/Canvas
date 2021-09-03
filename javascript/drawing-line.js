class DrawingLine extends PaintFunction {
  constructor(contextReal) {
    super();
    this.contextReal = contextReal;
    var imgReady = false;
  }

  onMouseDown(coord, event) {
    this.contextReal.strokeStyle = `${pickrColorStroke}`;
    this.contextReal.lineCap = "round";
    this.contextReal.lineJoin = "round";
    this.contextReal.lineWidth = `${strokeWeight}`;
    this.contextReal.beginPath();
  }

  onDragging(coord, event) {
    this.draw(coord[0], coord[1]);
    imgReady = true;
  }

  onMouseMove() {}

  onMouseUp() {
    history(this.contextReal, imgReady);
    imgReady = false;
  }

  onMouseLeave() {}
  onMouseEnter() {}

  draw(x, y) {
    this.contextReal.lineTo(x, y);
    this.contextReal.stroke();
  }
}
