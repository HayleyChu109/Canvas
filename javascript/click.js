$(() => {
    currentFunction = new DrawingLine(contextReal)
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
      currentFunction = new DrawingText(contextReal);
    });
    $("#drawing-filter").click(() => {
      filter();
    });
    //Sherman's eraser
    $("#eraser-cir").click(() => {
      currentFunction = new Eraser(contextReal);
    });
    //Sherman's empty
    $("#empty").click(() => {
      confirmEmpty();
    });
    //Sherman's undo
    $("#undo").click(() => {
      undo();
    });
    //Sherman's redo
    $("#redo").click(() => {
      redo();
    });
    //Sherman's save
    $("#save").click(() => {
      save();
    });
    $("#upload").click(() => {
      upload();
    });
    //Sherman's Paint Bucket
    $("#paintbucket").click(() => {
      currentFunction = new PaintBucket(contextReal);
    })
    //Sherman's Polygon
    $("#drawing-polygon").click(() => {
      currentFunction = new DrawingPolygon(contextReal, contextDraft);
    })
  })