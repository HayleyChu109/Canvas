class DrawingTriangle extends PaintFunction {

  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
    var imgReady = false;
  }

  onMouseDown(coord, event) {

    this.contextReal.strokeStyle = `${pickrColorStroke}`;
    this.contextReal.lineJoin = "round";
    this.contextReal.lineWidth = `${strokeWeight}`;

    this.origX = coord[0];
    this.origY = coord[1];
  }

  onDragging(coord, event) {
    this.endX = coord[0];
    this.endY = coord[1];

    this.contextDraft.fillStyle = `${pickrColorFill}`;

    this.contextDraft.strokeStyle = `${pickrColorStroke}`;
    this.contextDraft.lineJoin = "round";
    this.contextDraft.lineWidth = `${strokeWeight}`;

    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);

    this.x = Math.abs(this.origX - [this.endX - this.origX]);
    this.y = Math.abs(this.origY - [this.endY - this.origY]);

    this.contextDraft.beginPath();
    this.contextDraft.moveTo(this.origX, this.origY);
    this.contextDraft.lineTo(this.endX, this.endY);
    this.contextDraft.lineTo(this.x, this.endY);
    this.contextDraft.closePath();

    this.contextDraft.fill();
    this.contextDraft.stroke();
    imgReady = true;

  }

  onMouseUp(coord, event) {

    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);

    this.contextReal.fillStyle = `${pickrColorFill}`; 
    this.contextReal.strokeStyle = `${pickrColorStroke}`;
    this.contextReal.beginPath();
    this.contextReal.moveTo(this.origX, this.origY);
    this.contextReal.lineTo(this.endX, this.endY);
    this.contextReal.lineTo(this.x, this.endY);
    this.contextReal.closePath();
    this.contextReal.fill();
    this.contextReal.stroke();
    this.x = undefined;
    this.y = undefined;
    this.endX = undefined;
    this.endY = undefined;

    history(this.contextReal, imgReady);
    imgReady = false;

  }
  onMouseLeave() {}
  onMouseEnter() {}
  onMouseMove() {}
}
