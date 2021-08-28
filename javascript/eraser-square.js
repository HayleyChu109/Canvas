class EraserSquare extends PaintFunction {
  constructor(contextReal) {
    super();
    this.contextReal = contextReal;
  }

  onMouseDown(coord, event) {
    this.contextReal.clearRect(coord[0], coord[1], 15, 15);
  }

  onDragging(coord, event) {
    this.contextReal.clearRect(coord[0], coord[1], 15, 15);
  }
}
