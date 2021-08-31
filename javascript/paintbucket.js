class PaintBucket extends PaintFunction {
  constructor(contextReal) {
    super();
    this.contextReal = contextReal;
    // this.canvasReal = canvasReal;
  }

  onMouseDown(coord, event) {
    // var pixelStack = [[coord[0], coord[1]]];
    // var colorLayerData = context.getImageData(
    //   0,
    //   0,
    //   canvasReal.width,
    //   canvasReal.height
    // );
    // console.log(`pixelStack = ${pixelStack}`);
    // while (pixelStack.length) {
    //   var newPos = pixelStack.pop();
    //   var x = newPos[0];
    //   var y = newPos[1];
    //   var pixelPos = (y * canvasReal.width + x) * 4;
    //   while (y-- >= 0 && matchStartColor(pixelPos)) {
    //     pixelPos -= canvasReal.width * 4;
    //   }
    //   pixelPos += canvasReal.width * 4;
    //   y++;
    //   reachLeft = false;
    //   reachRight = false;
    //   while (y++ < canvasReal.height - 1 && matchStartColor(pixelPos)) {
    //     colorPixel(pixelPos);
    //     if (x > 0) {
    //       if (matchStartColor(pixelPos - 4)) {
    //         if (!reachLeft) {
    //           pixelStack.push([x - 1, y]);
    //           reachLeft = true;
    //         }
    //       } else if (reachLeft) {
    //         reachLeft = false;
    //       }
    //     }
    //     if (x < canvasReal.width - 1) {
    //       if (matchStartColor(pixelPos + 4)) {
    //         if (!reachRight) {
    //           pixelStack.push([x + 1, y]);
    //           reachRight = true;
    //         }
    //       } else if (reachRight) {
    //         reachRight = false;
    //       }
    //     }
    //     pixelPos += canvasReal.width * 4;
    //   }
    // }
    // context.putImageData(contextReal, 0, 0);
    // function matchStartColor(pixelPos) {
    //   var r = colorLayerData.data[pixelPos];
    //   var g = colorLayerData.data[pixelPos + 1];
    //   var b = colorLayerData.data[pixelPos + 2];
    //   return r == startR && g == startG && b == startB;
    // }
    // function colorPixel(pixelPos) {
    //   colorLayerData.data[pixelPos] = `${pickrColorFill}`.eq(0);
    //   colorLayerData.data[pixelPos + 1] = `${pickrColorFill}`.eq(1);
    //   colorLayerData.data[pixelPos + 2] = `${pickrColorFill}`.eq(2);
    //   colorLayerData.data[pixelPos + 3] = `${pickrColorFill}`.eq(3);
    // }
  }

  onMouseUp() {
    // historyArray.push(
    //   this.contextReal.getImageData(0, 0, canvasReal.width, canvasReal.height)
    // );
    // historyIndex += 1;
    // console.log(`Current History Index : ${historyIndex}`);
  }

  onDragging() {}
  onMouseMove() {}
  onMouseLeave() {}
  onMouseEnter() {}
}
