class DrawingPolygon extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
    this.sides = 8;
    var imgReady = false;
  }

  onMouseDown(coord, event) {
    this.contextReal.lineWidth = 5;
    //Sher: Below added - draft fill style
    this.contextDraft.fillStyle = `${pickrColorFill}`;
    //Sher: Above added
    this.contextReal.fillStyle = `${pickrColorFill}`;
    this.contextReal.strokeStyle = `${pickrColorStroke}`;
    this.contextReal.lineJoin = "miter";
    this.origX = coord[0];
    this.origY = coord[1];
  }

  onDragging(coord, event) {
    this.contextDraft.lineWidth = 5;
    this.contextDraft.strokeStyle = `${pickrColorStroke}`;
    this.contextDraft.fillStyle = `${pickrColorFill}`;
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    var radius = Math.sqrt(
      Math.pow(coord[0] - this.origX, 2) + Math.pow(coord[1] - this.origY, 2)
    );

    const arcctg = (x) => {
      return Math.PI / 2 - Math.atan(x);
    };

    if (coord[1] - this.origY >= 0) {
      this.angle = arcctg((coord[0] - this.origX) / (coord[1] - this.origY));
    } else {
      this.angle =
        Math.PI + arcctg((coord[0] - this.origX) / (coord[1] - this.origY));
    }
    this.contextDraft.beginPath();
    this.contextDraft.moveTo(coord[0], coord[1]);
    for (let i = 1; i < this.sides; i++) {
      this.contextDraft.lineTo(
        this.origX +
          radius * Math.cos(this.angle + (i * 2 * Math.PI) / this.sides),
        this.origY +
          radius * Math.sin(this.angle + (i * 2 * Math.PI) / this.sides)
      );
    }
    this.contextDraft.closePath();
    //Sher: Below added fill
    this.contextDraft.fill();
    //Sher: Above added
    this.contextDraft.stroke();
  }

  onMouseMove() {}

  onMouseUp(coord, event) {
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextReal.lineWidth = 5;
    this.contextReal.strokeStyle = `${pickrColorStroke}`;
    this.contextReal.fillStyle = `${pickrColorFill}`;
    var radius = Math.sqrt(
      Math.pow(coord[0] - this.origX, 2) + Math.pow(coord[1] - this.origY, 2)
    );

    const arcctg = (x) => {
      return Math.PI / 2 - Math.atan(x);
    };

    if (coord[1] - this.origY >= 0) {
      this.angle = arcctg((coord[0] - this.origX) / (coord[1] - this.origY));
    } else {
      this.angle =
        Math.PI + arcctg((coord[0] - this.origX) / (coord[1] - this.origY));
    }

    this.contextReal.beginPath();
    this.contextReal.moveTo(coord[0], coord[1]);
    for (let i = 1; i < this.sides; i++) {
      this.contextReal.lineTo(
        this.origX +
          radius * Math.cos(this.angle + (i * 2 * Math.PI) / this.sides),
        this.origY +
          radius * Math.sin(this.angle + (i * 2 * Math.PI) / this.sides)
      );
    }
    this.contextReal.closePath();
    //Sher: Below added fill
    this.contextReal.fill();
    //Sher: Above added
    this.contextReal.stroke();

    var imgReady = true;
    history(this.contextReal, `${imgReady}`);
  }

  onMouseLeave() {}
  onMouseEnter() {}
}
