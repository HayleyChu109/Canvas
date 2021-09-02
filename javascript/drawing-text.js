class DrawingText extends PaintFunction {
  constructor(contextReal, contextDraft){
      super();
      this.contextReal = contextReal;
      this.contextDraft = contextDraft;
      this.origX = [];
      this.origY = [];
      var imgReady = false;
  }
  
  onMouseDown(coord,event){
      this.origX.push(coord[0]);
      this.origY.push(coord[1]);
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

      if (event.key == "Enter") {
        let text = $("#inputText").val();
        this.contextReal.fillText(text, coord[0], coord[1]);
        $("#inputText").css("display", "none");
        $("#inputText").val("");

      var imgReady = true;
      history(this.contextReal, `${imgReady}`);
      }
    });
    reset = () => {
      $("#inputText").css({
        display: "none",
        transform: "translateY(" + `${this.origY - 15}` + "px) translateX(" + `${this.origX}` + "px)",
      });
      $("#inputText").val("");
      this.origX = [];
      console.log(this.origX);
      this.origY = [];
      this.contextReal.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    }
  }

  onDragging() {}
  onMouseMove() {}
  onMouseUp() {}
  onMouseLeave() {}
  onMouseEnter() {}
}