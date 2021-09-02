let blur_value = 0;
let brightness_value = 0;
let contrast_value = 0;

$("#blur").change(function() {
    blur_value =$("#blur").val()
})

$("#brightness").change(function() {
    brightness_value =$("#brightness").val()
})

$("#contrast").change(function() {
    contrast_value =$("#contrast").val()
})

filter = () => {
    contextReal.canvas.style.filter = `blur(${blur_value}px) brightness(${brightness_value}%) contrast(${contrast_value}%)`
}
