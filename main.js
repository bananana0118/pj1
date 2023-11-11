var elem = document.querySelector(".main-carousel");
elem.height = "400px";
var flkty = new Flickity(elem, {
  // options
  cellSelector: ".card",
  cellAlign: "left",
  contain: true,
  wrapAround: true,
  autoPlay: true,
  setGallerySize: false,
  draggable: false,
});
// element argument can be a selector string
//   for an individual element
var flkty = new Flickity(".main-carousel", {
  // options
});

var elem2 = document.querySelector(".slide-carousel");

var flkty2 = new Flickity(elem2, {
  // options
  cellSelector: ".slideImgBox",
  cellAlign: "left",
  contain: true,
  wrapAround: true,
  autoPlay: true,
  setGallerySize: false,
});
// element argument can be a selector string
//   for an individual element
var flkty2 = new Flickity(".slide-carousel", {
  // options
});
