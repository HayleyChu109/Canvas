const confirmEmpty = () => {
  let confirmAlert = confirm("Are you sure to empty this canvas?");

  if (confirmAlert) {
    contextReal.clearRect(0, 0, canvasReal.width, canvasReal.height);
    historyArray = [];
    historyIndex = -1;
    redoArray = [];
    redoIndex = -1;
    // setTimeout(function () {
    //   alert("Canvas Emptied");
    // }, 10);
  } else {
    return;
  }
};
