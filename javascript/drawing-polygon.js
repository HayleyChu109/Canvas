class DrawingPolygon extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
    this.sides = 5;
    resetDrawing = false;
  }

  onMouseDown(coord, event) {
    this.contextReal.lineWidth = 5;
    this.contextReal.fillStyle = `${pickrColorFill}`;
    this.contextReal.strokeStyle = `${pickrColorStroke}`;
    this.contextReal.lineJoin = "miter";
    this.sides = 5;

    // resetDrawing = false;
  }

  onDragging(coord, event) {}

  onMouseMove(coord, event) {}

  onMouseUp(coord, event) {
    if (resetDrawing == false) {
      this.size = Math.sqrt(
        (coord[0] - this.origX) ** 2 + (coord[1] - this.origY) ** 2
      );
      function arcctg(x) {
        return Math.PI / 2 - Math.atan(x);
      }
      if (coord[1] - this.origY >= 0) {
        this.theta = arcctg((coord[0] - this.origX) / (coord[1] - this.origY));
      } else {
        this.theta =
          Math.PI + arcctg((coord[0] - this.origX) / (coord[1] - this.origY));
      }

      this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
      this.contextReal.beginPath();
      this.contextReal.moveTo(coord[0], coord[1]);
      for (let i = 1; i <= this.sides; i++) {
        this.contextReal.lineTo(
          this.origX +
            this.size * Math.cos(this.theta + (i * 2 * Math.PI) / this.sides),
          this.origY +
            this.size * Math.sin(this.theta + (i * 2 * Math.PI) / this.sides)
        );
      }

      if (fillStyle) {
        this.contextReal.fill();
      } else {
        this.contextReal.stroke();
      }
      saveState();
    }
  }

  onMouseLeave() {}
  onMouseEnter() {}

  //   reset() {
  //     this.click = 0;
  //     this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
  //   }

  //   draw(x, y) {
  //     this.contextReal.lineTo(x, y);
  //     this.contextReal.moveTo(x, y);
  //     this.contextReal.closePath();
  //     this.contextReal.stroke();
  //   }
}
