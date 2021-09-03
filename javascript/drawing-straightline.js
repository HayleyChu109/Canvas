class DrawingStraightLine extends PaintFunction {

  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
    var imgReady = false;
  }

  onMouseDown(coord, e) {
    this.contextReal.strokeStyle = `${pickrColorStroke}`;
    this.contextReal.lineJoin = "round";
    this.contextReal.lineCap = "round";
    this.contextReal.lineWidth = `${strokeWeight}`;
    
    this.origX = coord[0];
    this.origY = coord[1];
  }

  onDragging(coord, e) {

    this.endX = coord[0];
    this.endY = coord[1];
    this.contextDraft.strokeStyle = `${pickrColorStroke}`;
    this.contextDraft.lineJoin = "round";
    this.contextDraft.lineCap = "round";
    this.contextDraft.lineWidth = `${strokeWeight}`;
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextDraft.beginPath();

    this.contextDraft.moveTo(this.origX, this.origY);
    this.contextDraft.lineTo(this.endX, this.endY);
    this.contextDraft.stroke();
    imgReady = true;
  }

  onMouseUp(coord, e) {
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextReal.beginPath();
    this.contextReal.moveTo(this.origX, this.origY);
    this.draw(this.endX, this.endY);
    this.endX = undefined;
    this.endY = undefined;

    history(this.contextReal, imgReady);
    imgReady = false;
  }

  draw(x, y) {

    this.contextReal.lineTo(x, y);
    this.contextReal.stroke();
  }

}
