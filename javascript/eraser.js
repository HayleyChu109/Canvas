class Eraser extends PaintFunction {
  constructor(contextReal) {
    super();
    this.contextReal = contextReal;
    var imgReady = false;
  }

  onMouseDown(coord, event) {
    this.contextReal.globalCompositeOperation = "destination-out";
    this.contextReal.strokeStyle = "#000";
    this.contextReal.lineJoin = "round";
    this.contextReal.lineCap = "round";
    this.contextReal.beginPath();
    this.draw(coord[0], coord[1]);
  }

  onDragging(coord, event) {
    this.draw(coord[0], coord[1]);
    imgReady = true;
  }

  onMouseMove() {}

  onMouseUp(coord, event) {
    this.contextReal.globalCompositeOperation = "source-over";
    history(this.contextReal, imgReady);
    imgReady = false;
  }

  onMouseLeave() {}
  onMouseEnter() {}

  draw(x, y) {
    this.contextReal.lineWidth = `${strokeWeight}`;
    this.contextReal.lineTo(x, y);
    this.contextReal.stroke();
  }
}
