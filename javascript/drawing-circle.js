class DrawingCircle extends PaintFunction {
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
  }
  