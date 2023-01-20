const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector("h1");

//SCROLL MAGIC
const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    duration: 1000,
    triggerElemnt: intro,
    triggerHook: 0
})
  .addIndicator()
  .addTo(controller);