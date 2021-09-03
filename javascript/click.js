$(() => {
  currentFunction = new DrawingLine(contextReal);
  $("#drawing-line").click(() => {
    currentFunction = new DrawingLine(contextReal);
  });
  $("#drawing-curve").click(() => {
    currentFunction = new DrawingCurve(contextReal, contextDraft);
  });
  $("#drawing-beziercurve").click(() => {
    currentFunction = new DrawingBezierCurve(contextReal, contextDraft);
  });
  $("#drawing-rectangle").click(() => {
    currentFunction = new DrawingRectangle(contextReal, contextDraft);
  });
  $("#drawing-circle").click(() => {
    currentFunction = new DrawingCircle(contextReal, contextDraft);
  });
  $("#drawing-triangle").click(() => {
    currentFunction = new DrawingTriangle(contextReal, contextDraft);
  });
  $("#drawing-text").click(() => {
    currentFunction = new DrawingText(contextReal, contextDraft);
  });
  $("#drawing-filter").click(() => {
    //
  });
  $("#eraser-cir").click(() => {
    currentFunction = new Eraser(contextReal);
  });
  $("#empty").click(() => {
    confirmEmpty();
  });
  $("#undo").click(() => {
    undo();
  });
  $("#redo").click(() => {
    redo();
  });
  $("#save").click(() => {
    save();
  });
  $("#upload").click(() => {
    upload();
  });
  $("#paintbucket").click(() => {
    currentFunction = new PaintBucket(contextReal);
  });
  $("#drawing-polygon").click(() => {
    currentFunction = new DrawingPolygon(contextReal, contextDraft);
  });
  $("#drawing-straightline").click(() => {
    currentFunction = new DrawingStraightLine(contextReal, contextDraft);
  });
  $("#dragndrop").click(() => {
    currentFunction = new DragNDrop(contextReal, contextDraft);
  });
  $("#zoomIn").click(() => {
    currentFunction = new ZoomIn(contextReal, contextDraft);
  });
  $("#zoomOut").click(() => {
    currentFunction = new ZoomOut(contextReal, contextDraft);
  });
});
