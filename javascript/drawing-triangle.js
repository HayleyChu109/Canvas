/* Drawing triangle Functionality
 * This class extends the PaintFunction class, which you can find in canvas-common
 https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/clearRect
*/

class DrawingTriangle extends PaintFunction {
  //error: DrawingRectangle has already be defined
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
    var imgReady = false;
  }

  onMouseDown(coord, event) {
    // or e
    // this.contextDraft.beginPath();  //wrong contextReal
    this.contextReal.strokeStyle = `${pickrColorStroke}`;
    this.contextReal.lineJoin = "round";
    this.contextReal.lineWidth = `${strokeWeight}`;
    // this.contextReal.stroke();
    this.origX = coord[0];
    this.origY = coord[1];
  }

  onDragging(coord, event) {
    // Manipulating the context draft
    this.contextDraft.fillStyle = `${pickrColorFill}`;
    this.contextDraft.lineJoin = "round";
    this.contextDraft.lineWidth = `${strokeWeight}`;
    // Allows you to actually draw out your squares
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    // Pass in the original x and y coordinates, followed by the new coordinates that we get for position x and y
    this.x = Math.abs(this.origX - [coord[0] - this.origX]); //wrong:var, otherwise only this function can access to x y
    this.y = Math.abs(this.origY - [coord[1] - this.origY]); //wrong:var
    // wrong: Math.abs(coord[1] - this.origY)
    this.contextDraft.beginPath();
    this.contextDraft.moveTo(this.origX, this.origY); //must assign into ( this.origX, this.origY
    this.contextDraft.lineTo(coord[0], coord[1]);
    this.contextDraft.lineTo(this.x, coord[1]);
    this.contextDraft.closePath();
    this.contextDraft.stroke();
    /*
    this.contextDraft.fillRect(   fillRect=fill rectangle
      this.origX,
      this.origY,
      coord[0] - this.origX,
      coord[1] - this.origY
    );
    */
  }

  // Commit that drawing to context real
  // Without this commit, it won't actually draw
  onMouseUp(coord, event) {
    // Clearing the path first
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    /*************************** */
    this.contextReal.strokeStyle = `${pickrColorStroke}`; //outer
    this.contextReal.lineJoin = "round";
    this.contextReal.lineWidth = `${strokeWeight}`;
    this.contextReal.fillStyle = `${pickrColorFill}`;

    // draw(coord[0], coord[1]); // move the whole draw function here
    this.contextReal.beginPath();
    this.contextReal.moveTo(this.origX, this.origY); //shouldn't out in onMouseDown
    this.contextReal.lineTo(coord[0], coord[1]); //should not x,y, same coordinate with the next line can't draw a line
    //also, (coord[0], coord[1]) means the current coordinates
    this.contextReal.lineTo(this.x, coord[1]); //not x,y
    this.contextReal.closePath(); //should be b4 stroke, otherwise, not close path
    this.contextReal.stroke();
    this.contextReal.fill();
    // this.contextReal.fillStyle.fill(); //need to split
    var imgReady = true;
    history(this.contextReal, `${imgReady}`);
    /*************************** */
    /*this.contextReal.fillRect(  //this is for rectangle, otherwise fill color of rectangle
      this.origX,
      this.origY,
      coord[0] - this.origX,
      coord[1] - this.origY
    ); 
    */
    //should not put here, otherwise,
    // this.contextReal.fillStyle = "#f44";
    // this.contextReal.fillStyle.fill();
  }
  onMouseLeave() {} //no need
  onMouseEnter() {} //no need
  onMouseMove() {} //no need
}
