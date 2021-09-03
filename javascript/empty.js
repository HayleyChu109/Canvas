const confirmEmpty = () => {
  let confirmAlert = confirm("Confirm to empty canvas?");

  if (confirmAlert) {
    contextReal.clearRect(0, 0, canvasReal.width, canvasReal.height);
    contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    historyArray = [];
    historyIndex = -1;
    redoArray = [];
    redoIndex = -1;
  } else {
    return;
  }
};
