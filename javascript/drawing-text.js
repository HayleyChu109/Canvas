var imgReady = false;
var textBox = false;
var origArray = [];
var transArray = [];

class DrawingText extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
    this.origX;
    this.origY;
  }

  onMouseDown(coord, event) {
    if (textBox === false) {
      origArray.push(coord[0], coord[1]);
      transArray.push(coord[0], coord[1] - 15);
      this.contextReal.font = `${fontSize}px Arial`;
      this.contextReal.fillStyle = `${pickrColorStroke}`;
      console.log(`Origin Array: ${origArray}`);
      console.log(`Trans Array: ${transArray}`);
      textBox = true;

      $("#inputText").css({
        display: "block",
        position: "absolute",
        transform:
          "translateY(" +
          transArray[1] +
          "px) translateX(" +
          transArray[0] +
          "px)",
        font: `${fontSize}px Arial`,
        fontColor: `${pickrColorStroke}`,
        width: "30vw",
        padding: 0,
      });

      $("#inputText").keydown((event) => {
        origArray = [];
        if (event.key == "Enter") {
          let text = $("#inputText").val();
          this.contextReal.fillText(text, transArray[0], transArray[1]);
          console.log(`Trans Array: ${transArray}`);
          transArray = [];
          $("#inputText").css("display", "none");
          $("#inputText").val("");
          textBox = false;

          imgReady = true;
          history(this.contextReal, imgReady);
          imgReady = false;
        }
      });
    } else if (textBox === true) {
      console.log("clear textbox");
      $("#inputText").css("display", "none");
      $("#inputText").val("");
      origArray = [];
      transArray = [];
      textBox = false;
      return;
    }

    $(".tool-panel").click(() => {
      $("#inputText").css("display", "none");
      $("#inputText").val("");
      origArray = [];
      transArray = [];
      textBox = false;
      return;
    });

    // reset = () => {
    //   $("#inputText").css({
    //     display: "none",
    //     transform:
    //       "translateY(" +
    //       `${this.origY - 15}` +
    //       "px) translateX(" +
    //       `${this.origX}` +
    //       "px)",
    //   });
    //   $("#inputText").val("");
    //   this.origX = [];
    //   console.log(this.origX);
    //   this.origY = [];
    //   this.contextReal.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    // };
  }

  onMouseUp() {}
  onDragging() {}
  onMouseMove() {}
  onMouseLeave() {}
  onMouseEnter() {}
}
