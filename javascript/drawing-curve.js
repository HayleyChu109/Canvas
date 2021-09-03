class DrawingCurve extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
    this.click = 0;
    var imgReady = false;
  }

  onMouseDown(coord, event) {
    if (this.click == 0) {
      this.contextDraft.strokeStyle = `${pickrColorStroke}`;
      this.contextDraft.lineJoin = "round";
      this.contextDraft.lineCap = "round";
      this.contextDraft.lineWidth = `${strokeWeight}`;
      this.contextReal.strokeStyle = `${pickrColorStroke}`;
      this.contextReal.lineJoin = "round";
      this.contextReal.lineCap = "round";
      this.contextReal.lineWidth = `${strokeWeight}`;

      this.origX = coord[0];
      this.origY = coord[1];
    }
  }

  onDragging(coord, event) {
    if (this.click == 0) {
      this.endX = coord[0];
      this.endY = coord[1];

      this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
      this.contextDraft.beginPath();
      this.contextDraft.moveTo(this.origX, this.origY);
      this.contextDraft.quadraticCurveTo(
        this.origX,
        this.origY,
        this.endX,
        this.endY
      );
      this.contextDraft.stroke();
      // Start and end points
      this.contextDraft.fillStyle = "blue";
      this.contextDraft.beginPath();
      this.contextDraft.arc(this.origX, this.origY, 5, 0, 2 * Math.PI); // Start point
      this.contextDraft.arc(this.endX, this.endY, 5, 0, 2 * Math.PI); // End point
      this.contextDraft.fill();
    } else if (this.click == 1) {
      this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
      this.contextDraft.beginPath();
      this.contextDraft.moveTo(this.origX, this.origY);
      this.contextDraft.quadraticCurveTo(
        coord[0],
        coord[1],
        this.endX,
        this.endY
      );
      this.contextDraft.stroke();
      // Start and end points
      this.contextDraft.fillStyle = "blue";
      this.contextDraft.beginPath();
      this.contextDraft.arc(this.origX, this.origY, 5, 0, 2 * Math.PI); // Start point
      this.contextDraft.arc(this.endX, this.endY, 5, 0, 2 * Math.PI); // End point
      this.contextDraft.fill();
      // Control point
      this.contextDraft.fillStyle = "red";
      this.contextDraft.beginPath();
      this.contextDraft.arc(coord[0], coord[1], 5, 0, 2 * Math.PI);
      this.contextDraft.fill();
    }
  }

  onMouseUp(coord, event) {
    if (this.click == 0) {
      this.click++;
    } else if (this.click == 1) {
      this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
      this.contextReal.beginPath();
      this.contextReal.moveTo(this.origX, this.origY);
      this.contextReal.quadraticCurveTo(
        coord[0],
        coord[1],
        this.endX,
        this.endY
      );
      this.contextReal.stroke();
      this.click = 0;
      this.endX = undefined;
      this.endY = undefined;

      imgReady = true;
      history(this.contextReal, imgReady);
      imgReady = false;
    }
  }

  onMouseLeave() {}
  onMouseEnter() {}
}
