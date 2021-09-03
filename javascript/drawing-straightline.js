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
    this.contextReal.lineCap = "round"; //Sher 2/Sep: added cap of line
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
    this.endX = coord[0]; //Sher 3/Sep: set coord to variable for future reset
    this.endY = coord[1]; //            and to prevent dots appear without proper drag
    this.contextDraft.strokeStyle = `${pickrColorStroke}`;
    this.contextDraft.lineJoin = "round";
    this.contextDraft.lineCap = "round";
    this.contextDraft.lineWidth = `${strokeWeight}`;
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextDraft.beginPath();
    // this.contextDraft.moveTo(this.origX, this.origY); //must assign into ( this.origX, this.origY
    this.contextDraft.moveTo(this.origX, this.origY);
    this.contextDraft.lineTo(this.endX, this.endY); // Not  x,y
    this.contextDraft.stroke();
    imgReady = true;
  }

  onMouseUp(coord, e) {
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    // this.contextReal.strokeStyle = `${pickrColorStroke}`; // Fill in the color
    // this.contextReal.lineJoin = "round"; // Kind of line
    // this.contextReal.lineCap = "round";
    // this.contextReal.lineWidth = `${strokeWeight}`; // Width of line
    this.contextReal.beginPath(); // Drawing the line here
    this.contextReal.moveTo(this.origX, this.origY); //wrong coord[0], coord[1]
    this.draw(this.endX, this.endY);
    this.endX = undefined; //Sher 3/Sep: clear this.end, prevent extra lines on click
    this.endY = undefined;

    history(this.contextReal, imgReady);
    imgReady = false;
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
