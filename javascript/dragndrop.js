var imgReady = false;
var selectDone = false;
var firstMove = false;
var firstDrag = false;
var done = false;
var selectArray = [];
var selectEndPosArray = [];
var dxdyArray = [];

class DragNDrop extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
  }

  onMouseDown(coord, event) {
    if (selectDone === false && firstDrag === false && firstMove === false) {
      //Target not selected, code to set the selection
      this.origX = coord[0];
      this.origY = coord[1];
      this.contextDraft.setLineDash([5]);
      this.contextDraft.lineWidth = 1;
      this.contextDraft.lineColor = "#000";
    }

    if (selectDone === true && firstDrag === false && firstMove === false) {
      //Target selected, code to check mousedown pos
      if (
        //User click outside the target
        coord[0] < this.origX ||
        coord[1] < this.origY ||
        coord[0] > selectEndPosArray[0] ||
        coord[1] > selectEndPosArray[1]
      ) {
        clearSelect();
        this.contextDraft.clearRect(
          0,
          0,
          canvasDraft.width,
          canvasDraft.height
        );
      } else {
        //User click on target
        this.contextReal.clearRect(
          this.origX,
          this.origY,
          selectEndPosArray[0] - this.origX,
          selectEndPosArray[1] - this.origY
        );
        var dx = coord[0] - this.origX;
        var dy = coord[1] - this.origY;
        dxdyArray.push(dx, dy);
      }
    }

    if (selectDone === true && firstDrag === true && firstMove === true) {
      if (
        //User click outside the target
        coord[0] < this.origX ||
        coord[1] < this.origY ||
        coord[0] > selectEndPosArray[0] ||
        coord[1] > selectEndPosArray[1]
      ) {
        this.contextDraft.clearRect(
          0,
          0,
          canvasDraft.width,
          canvasDraft.height
        );
        this.contextReal.putImageData(
          selectArray[0],
          selectEndPosArray[0] - dxdyArray[0],
          selectEndPosArray[1] - dxdyArray[1]
        );
        clearSelect();
        this.origX = undefined;
        this.origY = undefined;
        done = true;
      }
    }
  }

  onDragging(coord, event) {
    if (selectDone === false && firstDrag === false && firstMove === false) {
      //Drag to select the target range
      this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
      this.contextDraft.strokeRect(
        this.origX,
        this.origY,
        coord[0] - this.origX,
        coord[1] - this.origY
      );
      done = false;
    }

    if (selectDone === true && firstMove === false) {
      //Drag to move the target
      console.log("Drag draft target");
      var dragPointX = coord[0];
      var dragPointY = coord[1];
      this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
      this.contextDraft.putImageData(
        selectArray[0],
        dragPointX - dxdyArray[0],
        dragPointY - dxdyArray[1]
      );
      firstDrag = true;
    }
  }

  onMouseUp(coord, event) {
    if (
      selectDone === false &&
      firstDrag === false &&
      firstMove === false &&
      done === false
    ) {
      if (coord[0] < this.origX || coord[1] < this.origY) {
        //Return if user drag to the top/left
        this.contextDraft.clearRect(
          0,
          0,
          canvasDraft.width,
          canvasDraft.height
        );
        return;
      } else {
        //User drag to bottom right
        selectArray.push(
          this.contextReal.getImageData(
            this.origX,
            this.origY,
            coord[0] - this.origX,
            coord[1] - this.origY
          )
        );
        this.contextDraft.putImageData(selectArray[0], this.origX, this.origY);
        selectDone = true;
        firstDrag === true;
        console.log("select:T, Drag:T");
      }
    }

    if (selectDone === true && firstMove === false) {
      var selectEndX = coord[0];
      var selectEndY = coord[1];
      selectEndPosArray = [];
      selectEndPosArray.push(selectEndX, selectEndY);
      console.log(selectEndPosArray);
    }

    if (selectDone === true && firstDrag === true) {
      firstMove = true;
      console.log("select:T, Drag:T, Move:T");
    }

    if (
      selectDone === false &&
      firstDrag === false &&
      firstMove === false &&
      done === true
    ) {
      var imgReady = true;
      history(this.contextReal, `${imgReady}`);
    }
  }

  onMouseEnter() {}
  onMouseLeave() {}
}

const clearSelect = () => {
  selectDone = false;
  firstMove = false;
  firstDrag = false;
  selectArray = [];
  selectEndPosArray = [];
  dxdyArray = [];
  console.log("Reset: clear select");
};
