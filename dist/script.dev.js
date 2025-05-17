"use strict";

window.onload = function () {
  console.log("Script started");
};

var rect = document.querySelector("#center");
rect.addEventListener("mousemove", function (details) {
  var rectanglelocation = rect.getBoundingClientRect();
  var insiderectval = details.clientX - rectanglelocation.left;

  if (insiderectval < rectanglelocation.width / 2) {
    var redcolor = gsap.utils.mapRange(0, rectanglelocation.width / 2, 255, 0, insiderectval);
    gsap.to(rect, {
      backgroundColor: "rgb(".concat(redcolor, ", 0, 0)"),
      ease: "power4.out"
    });
  } else {
    var bluecolor = gsap.utils.mapRange(rectanglelocation.width / 2, rectanglelocation.width, 0, 255, insiderectval);
    gsap.to(rect, {
      backgroundColor: "rgb(0, 0, ".concat(bluecolor, ")"),
      ease: "power4.out"
    });
  }
});