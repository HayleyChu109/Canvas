class DrawingText extends PaintFunction {
    constructor(contextReal){
        super();
        this.contextReal = contextReal;
        var imgReady = false;
    }
    
    onMouseDown(coord,event){
        this.origX = coord[0];
        this.origY = coord[1];
        this.contextReal.font = `${fontSize}px Arial`;
        this.contextReal.fillStyle = `${pickrColorStroke}`;

        $("#inputText").css({
            display: "block",
            position: "absolute",
            transform: "translateY(" + `${this.origY - 15}` + "px) translateX(" + `${this.origX}` + "px)",
            font: `${fontSize}px Arial`,
            fontColor: `${pickrColorStroke}`,
            width: "30vw",
            padding: 0,
        });

    $("#inputText").keydown((event) => {
      if (coord[0] === this.origX) {
        console.log("Inside",coord[0])
        console.log("X",this.origX)
      if (event.key == "Enter") {
        let text = $("#inputText").val();
        this.contextReal.fillText(text, coord[0], coord[1]);
        $("#inputText").css("display", "none");
        $("#inputText").val("");

        var imgReady = true;
        history(this.contextReal, `${imgReady}`);
      }
    }
    });
  }

  onDragging() {}
  onMouseMove() {}
  onMouseUp() {}
  onMouseLeave() {}
  onMouseEnter() {}
}
