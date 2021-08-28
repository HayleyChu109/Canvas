class EraserCircle extends PaintFunction {
  constructor(contextReal) {
    super();
    this.contextReal = contextReal;
  }

  onMouseDown(coord, event) {
    this.contextReal.globalCompositeOperation = "destination-out";
    this.contextReal.strokeStyle = "#000";
    this.contextReal.beginPath();
    this.contextReal.arc(coord[0], coord[1], 10, 0, Math.PI * 2);
    this.contextReal.fill();
  }

  onDragging(coord, event) {
    this.contextReal.globalCompositeOperation = "destination-out";
    this.contextReal.strokeStyle = "#000";
    this.contextReal.beginPath();
    this.contextReal.arc(coord[0], coord[1], 10, 0, Math.PI * 2);
    this.contextReal.fill();
  }
}
