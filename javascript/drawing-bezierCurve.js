class DrawingBezierCurve extends PaintFunction {
    constructor(contextReal, contextDraft) {
      super();
      this.contextReal = contextReal;
      this.contextDraft = contextDraft;
      this.click = 0;
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
        this.contextDraft.bezierCurveTo(this.origX, this.origY, this.endX, this.endY, this.endX, this.endY);
        this.contextDraft.stroke();
        // Start and end points
        this.contextDraft.fillStyle = 'blue';
        this.contextDraft.beginPath();
        this.contextDraft.arc(this.origX, this.origY, 5, 0, 2 * Math.PI); // Start point
        this.contextDraft.arc(this.endX, this.endY, 5, 0, 2 * Math.PI); // End point
        this.contextDraft.fill();

      } else if (this.click == 1) {
        this.cp1x = coord[0];
        this.cp1y = coord[1];

        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.contextDraft.beginPath();
        this.contextDraft.moveTo(this.origX, this.origY);
        this.contextDraft.bezierCurveTo(this.cp1x, this.cp1y, this.endX, this.endY, this.endX, this.endY);
        this.contextDraft.stroke();
        // Start and end points
        this.contextDraft.fillStyle = 'blue';
        this.contextDraft.beginPath();
        this.contextDraft.arc(this.origX, this.origY, 5, 0, 2 * Math.PI); // Start point
        this.contextDraft.arc(this.endX, this.endY, 5, 0, 2 * Math.PI); // End point
        this.contextDraft.fill();
        // Control point
        this.contextDraft.fillStyle = 'red';
        this.contextDraft.beginPath();
        this.contextDraft.arc(this.cp1x, this.cp1y, 5, 0, 2 * Math.PI);
        this.contextDraft.fill();

      } else if (this.click == 2) {
        this.cp2x = coord[0];
        this.cp2y = coord[1];

        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.contextDraft.beginPath();
        this.contextDraft.moveTo(this.origX, this.origY);
        this.contextDraft.bezierCurveTo(this.cp1x, this.cp1y, this.cp2x, this.cp2y, this.endX, this.endY);
        this.contextDraft.stroke();
        // Start and end points
        this.contextDraft.fillStyle = 'blue';
        this.contextDraft.beginPath();
        this.contextDraft.arc(this.origX, this.origY, 5, 0, 2 * Math.PI); // Start point
        this.contextDraft.arc(this.endX, this.endY, 5, 0, 2 * Math.PI); // End point
        this.contextDraft.fill();
        // Control point
        this.contextDraft.fillStyle = 'red';
        this.contextDraft.beginPath();
        this.contextDraft.arc(this.cp2x, this.cp2y, 5, 0, 2 * Math.PI);
        this.contextDraft.fill();
      }
    }
  
    onMouseUp(coord, event) {
      if (this.click == 0) { 
        this.click++;

      } else if (this.click == 1) {
        this.cp1x = coord[0];
        this.cp1y = coord[1];

        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.contextDraft.beginPath();
        this.contextDraft.moveTo(this.origX, this.origY);
        this.contextDraft.bezierCurveTo(this.cp1x, this.cp1y, this.endX, this.endY, this.endX, this.endY);
        this.contextDraft.stroke();
        this.click++;

      } else if (this.click == 2) {
        this.cp2x = coord[0];
        this.cp2y = coord[1];

        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.contextReal.beginPath();
        this.contextReal.moveTo(this.origX, this.origY);
        this.contextReal.bezierCurveTo(this.cp1x, this.cp1y, this.cp2x, this.cp2y, this.endX, this.endY);
        this.contextReal.stroke();
        this.click = 0;
      }
      
      historyArray.push(
        this.contextReal.getImageData(0, 0, canvasReal.width, canvasReal.height)
      );
      historyIndex += 1;
      console.log(`Current History Index : ${historyIndex}`);
    }

    onMouseLeave() {}
    onMouseEnter() {}
  }
  