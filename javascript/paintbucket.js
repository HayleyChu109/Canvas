class PaintBucket extends PaintFunction {
  constructor(contextReal) {
    super();
    this.contextReal = contextReal;
  }

  onMouseDown(coord, event) {
    let pixelStack = [[coord[0], coord[1]]];
    console.log(pixelStack);

    let imgData = this.contextReal.getImageData(
      0,
      0,
      canvasReal.width,
      canvasReal.height
    );
    console.log(imgData);

    function imagesdata(coord) {
      let color = contextReal.getImageData(coord[0], coord[1], 1, 1).data;
      return [color[0], color[1], color[2]];
    }
    let currentColor = imagesdata(coord);
    console.log("Current", currentColor);

    let c = `${pickrColorFill}`;
    let rgba = c.match(/\d+\.?\d*/g);
    console.log("RGBA", rgba);

    while (pixelStack.length) {
      let newPos = pixelStack.pop();
      let x = newPos[0];
      let y = newPos[1];
      let pixelPos = (y * canvasReal.width + x) * 4;

      while (y-- >= 0 && matchStartColor(pixelPos)) {
        pixelPos -= canvasReal.width * 4;
      }
      pixelPos += canvasReal.width * 4;
      y++;
      let reachLeft = false;
      let reachRight = false;

      while (y++ < canvasReal.height - 1 && matchStartColor(pixelPos)) {
        colorPixel(pixelPos);
        if (x > 0) {
          if (matchStartColor(pixelPos - 4)) {
            if (!reachLeft) {
              pixelStack.push([x - 1, y]);
              reachLeft = true;
            }
          } else if (reachLeft) {
            reachLeft = false;
          }
        }
        if (x < canvasReal.width - 1) {
          if (matchStartColor(pixelPos + 4)) {
            if (!reachRight) {
              pixelStack.push([x + 1, y]);
              reachRight = true;
            }
          } else if (reachRight) {
            reachRight = false;
          }
        }
        pixelPos += canvasReal.width * 4;
      }
    }
    this.contextReal.putImageData(imgData, 0, 0);

    function matchStartColor(pixelPos) {
      let r = imgData.data[pixelPos];
      let g = imgData.data[pixelPos + 1];
      let b = imgData.data[pixelPos + 2];

      if (
        r == currentColor[0] &&
        g == currentColor[1] &&
        b == currentColor[2]
      ) {
        return true;
      }
    }

    function colorPixel(pixelPos) {
      imgData.data[pixelPos] = parseInt(rgba[0]);
      imgData.data[pixelPos + 1] = parseInt(rgba[1]);
      imgData.data[pixelPos + 2] = parseInt(rgba[2]);
      imgData.data[pixelPos + 3] = parseInt(rgba[3] * 255);
    }
  }
  onMouseUp(coord) {
    var imgReady = true;
    history(this.contextReal, imgReady);
  }
}
