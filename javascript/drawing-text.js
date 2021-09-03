class DrawingText extends PaintFunction {
  constructor(contextReal, contextDraft){
      super();
      this.contextReal = contextReal;
      this.contextDraft = contextDraft;
      // this.origX = [];
      // this.origY = [];
      var imgReady = false;
  }
  
  onMouseDown(coord,event){
    this.origX = coord[0];
    this.origY = coord[1];
      // this.origX.push(coord[0]);
      // console.log("First origX",this.origX);
      // this.origY.push(coord[1]);
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
     
      if (event.key === "Enter") {
        let text = $("#inputText").val();
        this.contextReal.fillText(text, this.origX, this.origY);
        // console.log("Second origX", coord[0]);
        console.log("Aaaaaaz", this.origX);
        $("#inputText").val("");
        $("#inputText").css("display", "none");
        // this.origX = [];
        // console.log("Third origX:", this.origX);
        // this.origY = [];

      var imgReady = true;
      history(this.contextReal, `${imgReady}`);
      }
    });
  }

  onDragging() {}
  onMouseMove() {}
  onMouseUp() {}
  onMouseLeave() {}
  onMouseEnter() {}
}