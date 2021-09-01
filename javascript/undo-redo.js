class History extends PaintFunction {
  constructor(contextReal) {
    super();
    this.contextReal = contextReal;
  }
}

globalThis.historyArray = [];
globalThis.historyIndex = -1;

globalThis.redoArray = [];
globalThis.redoIndex = -1;

const undo = () => {
  if (historyIndex < 0) {
    contextReal.clearRect(0, 0, canvasReal.width, canvasReal.height);
    historyIndex = -1;
  } else if (historyIndex == 0) {
    console.log("Undo");
    contextReal.clearRect(0, 0, canvasReal.width, canvasReal.height);
    historyIndex -= 1;
    redoArray.push(historyArray.pop());
    redoIndex += 1;
    console.log(redoArray);
    console.log(`Current History Index: ${historyIndex}`);
    console.log(`Current Redo Index: ${redoIndex}`);
  } else if (historyIndex > 0) {
    console.log("Undo");
    historyIndex -= 1;
    redoArray.push(historyArray.pop());
    redoIndex += 1;
    contextReal.putImageData(historyArray[historyIndex], 0, 0);
    console.log(redoArray);
    console.log(`Current History Index: ${historyIndex}`);
    console.log(`Current Redo Index: ${redoIndex}`);
  } else {
    console.log(`ERROR in undo, Index# ${historyIndex}`);
  }
};

const redo = () => {
  if (redoIndex < 0) {
    redoIndex = -1;
    return;
  } else if (redoIndex == 0) {
    console.log("Redo");
    contextReal.putImageData(redoArray[redoIndex], 0, 0);
    historyArray.push(redoArray.pop());
    redoIndex -= 1;
    historyIndex += 1;
    console.log(redoArray);
    console.log(`Current History Index: ${historyIndex}`);
    console.log(`Current Redo Index: ${redoIndex}`);
  } else if (redoIndex > 0) {
    console.log("Redo");
    contextReal.putImageData(redoArray[redoIndex], 0, 0);
    redoIndex -= 1;
    historyArray.push(redoArray.pop());
    historyIndex += 1;
    console.log(redoArray);
    console.log(`Current History Index: ${historyIndex}`);
    console.log(`Current Redo Index: ${redoIndex}`);
  } else {
    console.log(`ERROR in redo, Index# ${redoIndex}`);
  }
};

const history = (context, imgReady) => {
  if ((imgReady = true)) {
    historyArray.push(
      context.getImageData(0, 0, canvasReal.width, canvasReal.height)
    );
    historyIndex += 1;
    console.log(`Current History Index : ${historyIndex}`);
  } else {
    return;
  }
};
