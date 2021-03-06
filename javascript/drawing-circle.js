imgReady = false;

class DrawingCircle extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
  }

  onMouseDown(coord, event) {
    this.contextReal.lineWidth = `${strokeWeight}`;
    this.contextDraft.fillStyle = `${pickrColorFill}`;
    this.contextReal.fillStyle = `${pickrColorFill}`;
    this.contextDraft.strokeStyle = `${pickrColorStroke}`;
    this.contextReal.strokeStyle = `${pickrColorStroke}`;
    this.origX = coord[0];
    this.origY = coord[1];
  }

  onDragging(coord, event) {
    this.contextDraft.lineWidth = `${strokeWeight}`;
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);

    let pointX = coord[0] - this.origX;
    let pointY = coord[1] - this.origY;
    let radius = Math.sqrt(pointX ** 2 + pointY ** 2);
    this.contextDraft.beginPath();
    this.contextDraft.arc(this.origX, this.origY, radius, 0, Math.PI * 2);
    this.contextDraft.fill();
    this.contextDraft.stroke();
    imgReady = true;
  }

  onMouseMove() {}

  onMouseUp(coord) {
    this.contextReal.lineWidth = `${strokeWeight}`;
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);

    let pointX = coord[0] - this.origX;
    let pointY = coord[1] - this.origY;
    let radius = Math.sqrt(pointX ** 2 + pointY ** 2);
    this.contextReal.beginPath();
    this.contextReal.arc(this.origX, this.origY, radius, 0, Math.PI * 2);
    this.contextReal.fill();
    this.contextReal.stroke();

    history(this.contextReal, imgReady);
    imgReady = false;
  }

  onMouseLeave() {}
  onMouseEnter() {}
}
