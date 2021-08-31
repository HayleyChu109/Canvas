class DrawingText extends PaintFunction {
    constructor(contextReal){
        super();
        this.contextReal = contextReal;

        this.contextReal.font = "60px Arial";
        this.contextReal.fillStyle = `${pickrColorStroke}`;
    }
    
    onMouseDown(coord,event){
        this.origX = coord[0];
        this.origY = coord[1];

        $("#inputText").css({
            display: "block",
            position: "absolute",
            top: `${this.origY}px`,
            left: `${this.origX}px`,
            font: "50px Arial",
            fontColor: `${pickrColorStroke}`,
            width: "40vw",
            padding: 0,
        });

        $("#inputText").keydown((event) => {
            if (event.key == "Enter") {
                let text = $('#inputText').val();
                this.contextReal.fillText(text,this.origX,this.origY);
                $("#inputText").css("display", "none");
                $('#inputText').val("");
            }
        })
    }

    onKeyDown(event) {
        historyArray.push(
            this.contextReal.getImageData(0, 0, canvasReal.width, canvasReal.height)
          );
          historyIndex += 1;
          console.log(`Current History Index : ${historyIndex}`);
    }
    onDragging() {}
    onMouseMove() {}
    onMouseUp() {}
    onMouseLeave() {}
    onMouseEnter() {}
}