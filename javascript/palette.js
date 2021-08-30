// *** Below pickr is for stroke color *** //
const pickrStroke = Pickr.create({
  el: "#pickr-palette-stroke",
  default: "rgba(7, 80, 119, 1)",
  theme: "nano",
  lockOpacity: false,
  comparison: true,
  showAlways: false,

  swatches: [
    "rgba(244, 67, 54, 1)",
    "rgba(233, 30, 99, 0.95)",
    "rgba(156, 39, 176, 0.9)",
    "rgba(103, 58, 183, 0.85)",
    "rgba(63, 81, 181, 0.8)",
    "rgba(33, 150, 243, 0.75)",
    "rgba(3, 169, 244, 0.7)",
    "rgba(0, 188, 212, 0.7)",
    "rgba(0, 150, 136, 0.75)",
    "rgba(76, 175, 80, 0.8)",
    "rgba(139, 195, 74, 0.85)",
    "rgba(205, 220, 57, 0.9)",
    "rgba(255, 235, 59, 0.95)",
    "rgba(255, 193, 7, 1)",
  ],

  components: {
    preview: true,
    opacity: true,
    hue: true,

    interaction: {
      hex: true,
      rgba: true,
      hsla: true,
      hsva: true,
      cmyk: true,
      input: true,
      clear: true,
      save: true,
    },
  },
});

pickrStroke.on("init", (color, instance) => {
  globalThis.pickrColorStroke = "rgba(7, 80, 119, 1)";
});

pickrStroke.on("save", (color, instance) => {
  globalThis.pickrColorStroke = color.toRGBA().toString();
  pickrStroke.hide();
  console.log(`Saved Color: ${pickrColorStroke}`);
});

// *** Below is pickr for fill color *** //
const pickrFill = Pickr.create({
  el: "#pickr-palette-fill",
  default: "rgba(236, 191, 104, 0.45)",
  theme: "nano",
  lockOpacity: false,
  comparison: true,
  showAlways: false,

  swatches: [
    "rgba(244, 67, 54, 1)",
    "rgba(233, 30, 99, 0.95)",
    "rgba(156, 39, 176, 0.9)",
    "rgba(103, 58, 183, 0.85)",
    "rgba(63, 81, 181, 0.8)",
    "rgba(33, 150, 243, 0.75)",
    "rgba(3, 169, 244, 0.7)",
    "rgba(0, 188, 212, 0.7)",
    "rgba(0, 150, 136, 0.75)",
    "rgba(76, 175, 80, 0.8)",
    "rgba(139, 195, 74, 0.85)",
    "rgba(205, 220, 57, 0.9)",
    "rgba(255, 235, 59, 0.95)",
    "rgba(255, 193, 7, 1)",
  ],

  components: {
    preview: true,
    opacity: true,
    hue: true,

    interaction: {
      hex: true,
      rgba: true,
      hsla: true,
      hsva: true,
      cmyk: true,
      input: true,
      clear: true,
      save: true,
    },
  },
});

pickrFill.on("init", (color, instance) => {
  globalThis.pickrColorFill = "rgba(236, 191, 104, 0.45)";
});

pickrFill.on("save", (color, instance) => {
  // console.log('Event: "save"', color, instance);
  globalThis.pickrColorFill = color.toRGBA().toString();
  pickrFill.hide();
  console.log(`Saved Color: ${pickrColorFill}`);
});

// Note: below code make a pickr swatch on click

// const container = document.querySelector(".pickr-palette-swatches");
// const palettebtn = document.querySelector("#palette");

// palettebtn.addEventListener("click", () => {
//   console.log("Hi");
//   const newElement = document.createElement("span");
//   container.appendChild(newElement);

//   // Simple example, see optional options for more configuration.
//   const pickr = new Pickr({
//     el: newElement,
//     default: "#2CAFB9",
//     theme: "nano",
//     lockOpacity: false,
//     comparison: true,
//     showAlways: false,

//     swatches: [
//       "rgba(244, 67, 54, 1)",
//       "rgba(233, 30, 99, 0.95)",
//       "rgba(156, 39, 176, 0.9)",
//       "rgba(103, 58, 183, 0.85)",
//       "rgba(63, 81, 181, 0.8)",
//       "rgba(33, 150, 243, 0.75)",
//       "rgba(3, 169, 244, 0.7)",
//       "rgba(0, 188, 212, 0.7)",
//       "rgba(0, 150, 136, 0.75)",
//       "rgba(76, 175, 80, 0.8)",
//       "rgba(139, 195, 74, 0.85)",
//       "rgba(205, 220, 57, 0.9)",
//       "rgba(255, 235, 59, 0.95)",
//       "rgba(255, 193, 7, 1)",
//     ],

//     components: {
//       // Main components
//       preview: true,
//       opacity: true,
//       hue: true,

//       // Input / output Options
//       interaction: {
//         hex: true,
//         rgba: true,
//         hsla: true,
//         hsva: true,
//         cmyk: true,
//         input: true,
//         clear: true,
//         save: true,
//       },
//     },
//   });
// });
