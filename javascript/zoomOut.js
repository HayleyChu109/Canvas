class ZoomOut extends PaintFunction {    
    constructor(contextReal) {
      super();
      this.contextReal = contextReal;
      this.scale = 1.0;
      this.scaleMultiplier = 0.8;
      this.img = new Image();
      this.img.src = canvasReal.toDataURL()
      this.translatePos = {
        x: canvasReal.width / 2,
        y: canvasReal.height / 2
      };
    }
    
    draw(scale, event){
      this.contextReal.clearRect(0, 0, canvasReal.width, canvasReal.height);
      this.contextReal.save();
      this.contextReal.scale(this.scale, this.scale);
      this.contextReal.translate(event.clientX - this.translatePos.x, event.clientY - this.translatePos.y);
      this.contextReal.drawImage(this.img, 0, 0);
      this.contextReal.restore();
    }

    onMouseUp(coord, event) {
      this.scale *= this.scaleMultiplier;
      this.draw(this.scale, event);
    }

    onDragging(coord, event) {
      this.draw(this.scale, event);
    }
}