class Eraser extends PaintFunction {
  constructor(contextReal) {
    super();
    this.contextReal = contextReal;
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
  }

  onMouseMove() {}

  onMouseUp(coord, event) {
    this.contextReal.globalCompositeOperation = "source-over";
    historyArray.push(
      this.contextReal.getImageData(0, 0, canvasReal.width, canvasReal.height)
    );
    historyIndex += 1;
    console.log(`Current History Index : ${historyIndex}`);
  }

  onMouseLeave() {}
  onMouseEnter() {}

  draw(x, y) {
    this.contextReal.lineWidth = 20;
    this.contextReal.lineTo(x, y);
    this.contextReal.stroke();
  }
}
