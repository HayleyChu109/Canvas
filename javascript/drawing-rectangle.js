class DrawingRectangle extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
    var imgReady = false;
  }

  onMouseDown(coord, event) {
    this.contextReal.lineWidth = `${strokeWeight}`;
    this.contextReal.lineJoin = "miter";
    this.contextReal.fillStyle = `${pickrColorFill}`;
    this.origX = coord[0];
    this.origY = coord[1];
    this.contextReal.strokeStyle = `${pickrColorStroke}`;
    this.origX = coord[0];
    this.origY = coord[1];
  }

  onDragging(coord, event) {
    this.contextDraft.lineWidth = `${strokeWeight}`;
    this.contextDraft.fillStyle = `${pickrColorFill}`;
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextDraft.fillRect(
      this.origX,
      this.origY,
      coord[0] - this.origX,
      coord[1] - this.origY
    );
    this.contextDraft.strokeStyle = `${pickrColorStroke}`;
    this.contextDraft.strokeRect(
      this.origX,
      this.origY,
      coord[0] - this.origX,
      coord[1] - this.origY
    );
  }

  onMouseMove() {}

  onMouseUp(coord) {
    this.contextReal.lineWidth = `${strokeWeight}`;
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextReal.fillRect(
      this.origX,
      this.origY,
      coord[0] - this.origX,
      coord[1] - this.origY
    );

    this.contextReal.strokeRect(
      this.origX,
      this.origY,
      coord[0] - this.origX,
      coord[1] - this.origY
    );

    var imgReady = true;
    history(this.contextReal, `${imgReady}`);
  }

  onMouseLeave() {}
  onMouseEnter() {}
}
