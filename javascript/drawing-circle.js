class DrawingCircle extends PaintFunction {
<<<<<<< HEAD
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
    var imgReady = false;
=======
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
    }
  
    onMouseDown(coord, event) {
        this.contextDraft.strokeStyle = `${pickrColorStroke}`;
        this.contextReal.strokeStyle = `${pickrColorStroke}`;
        this.contextDraft.lineWidth = `${strokeWeight}`;
        this.contextReal.lineWidth = `${strokeWeight}`;
        this.origX = coord[0];
        this.origY = coord[1];
    }
  
    onDragging(coord, event) {
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);

        let pointX = coord[0] - this.origX;
        let pointY = coord[1] - this.origY;
        let radius = Math.sqrt(pointX ** 2 + pointY ** 2);
        this.contextDraft.beginPath();
        this.contextDraft.arc(
            this.origX,
            this.origY,
            radius,
            0,
            Math.PI * 2,
        );
        this.contextDraft.stroke();
    }
  
    onMouseMove() {}
  
    onMouseUp(coord) {
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        
        let pointX = coord[0] - this.origX;
        let pointY = coord[1] - this.origY;
        let radius = Math.sqrt(pointX ** 2 + pointY ** 2);
        this.contextReal.beginPath();
        this.contextReal.arc(
            this.origX,
            this.origY,
            radius,
            0,
            Math.PI * 2,
        );
        this.contextReal.stroke();

        historyArray.push(
            this.contextReal.getImageData(0, 0, canvasReal.width, canvasReal.height)
          );
          historyIndex += 1;
          console.log(`Current History Index : ${historyIndex}`);
    }

    onMouseLeave() {}
    onMouseEnter() {}
>>>>>>> Hayley/Canvas
  }

  onMouseDown(coord, event) {
    //Sher: Below added - line width & fill style
    this.contextReal.lineWidth = 5;
    this.contextDraft.fillStyle = `${pickrColorFill}`;
    this.contextReal.fillStyle = `${pickrColorFill}`;
    //Sher: Above added
    this.contextDraft.strokeStyle = `${pickrColorStroke}`;
    this.contextReal.strokeStyle = `${pickrColorStroke}`;
    this.origX = coord[0];
    this.origY = coord[1];
  }

  onDragging(coord, event) {
    this.contextDraft.lineWidth = 5;
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);

    let pointX = coord[0] - this.origX;
    let pointY = coord[1] - this.origY;
    let radius = Math.sqrt(pointX ** 2 + pointY ** 2);
    this.contextDraft.beginPath();
    this.contextDraft.arc(this.origX, this.origY, radius, 0, Math.PI * 2);
    //Sher: Below added fill
    this.contextDraft.fill();
    //Sher: Above added
    this.contextDraft.stroke();
  }

  onMouseMove() {}

  onMouseUp(coord) {
    this.contextReal.lineWidth = 5;
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);

    let pointX = coord[0] - this.origX;
    let pointY = coord[1] - this.origY;
    let radius = Math.sqrt(pointX ** 2 + pointY ** 2);
    this.contextReal.beginPath();
    this.contextReal.arc(this.origX, this.origY, radius, 0, Math.PI * 2);
    //Sher: Below added fill
    this.contextReal.fill();
    //Sher: Above edited
    this.contextReal.stroke();

    var imgReady = true;
    history(this.contextReal, `${imgReady}`);
  }

  onMouseLeave() {}
  onMouseEnter() {}
}
