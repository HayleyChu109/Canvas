/* Drawing Line Functionality
 * This class extends the PaintFunction class, which you can find in canvas-common
 * Remember, order matters*/
class DrawingStraightLine extends PaintFunction {
  // This class extends the PaintFunction class
  // You are only passing one instance here

  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft; // added
    var imgReady = false;
  }

  // On mouse down, ensure that the pen has these features
  onMouseDown(coord, e) {
    this.contextReal.strokeStyle = `${pickrColorStroke}`; // Fill in the color
    this.contextReal.lineJoin = "round"; // Kind of line
    this.contextReal.lineWidth = `${strokeWeight}`; // Width of line
    // this.contextReal.beginPath(); // Drawing the line here
    // this.contextReal.moveTo(coord[0], coord[1]);
    this.origX = coord[0];
    this.origY = coord[1];
    // this.draw(coord[0], coord[1]);

    //as (coord[0], coord[1]) put in onMouseDown, it record the coord recorded
    //when the mouse touched down, so (coord[0], coord[1]) means the current coordinates
  }
  // Clicking and removing your mouse
  onDragging(coord, e) {
    // draw(coord[0], coord[1], this.contextDraft);
    this.contextDraft.strokeStyle = `${pickrColorStroke}`;
    this.contextDraft.lineJoin = "round";
    this.contextDraft.lineWidth = `${strokeWeight}`;
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextDraft.beginPath();
    this.contextDraft.moveTo(this.origX, this.origY); //must assign into ( this.origX, this.origY
    this.contextDraft.lineTo(coord[0], coord[1]); // Not  x,y
    this.contextDraft.stroke();
  }

  onMouseUp(coord, e) {
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextReal.strokeStyle = `${pickrColorStroke}`; // Fill in the color
    this.contextReal.lineJoin = "round"; // Kind of line
    this.contextReal.lineWidth = `${strokeWeight}`; // Width of line
    this.contextReal.beginPath(); // Drawing the line here
    this.contextReal.moveTo(this.origX, this.origY); //wrong coord[0], coord[1]
    this.draw(coord[0], coord[1]);

    var imgReady = true;
    history(this.contextReal, `${imgReady}`);
  }
  onMouseLeave() {} //no need for stright line &line
  onMouseEnter() {} //no need for stright line &line
  onMouseMove() {} //no need
  draw(x, y) {
    // this.contextReal.beginPath();
    // this.contextReal.moveTo(x, y);
    this.contextReal.lineTo(x, y);
    this.contextReal.stroke(); // Draw the line onto the page
  }
  /* alternative method 
  draw(x, y, context) {
    context.beginPath(); //need?????
    context.moveTo(x, y); //switch order??
    context.lineTo(x, y);
    // this.context.closePath(); // for polygon only 
    // Draw the line onto the page
    context.stroke();
  }   
  */
}
