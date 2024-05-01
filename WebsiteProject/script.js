let stars = document.querySelector("#stars");
let moon = document.querySelector("#moon");
let mountains3 = document.querySelector("#mountains3");
let mountains4 = document.querySelector("#mountains4");
let river = document.querySelector("#river");
let boat = document.querySelector("#boat");
let pola = document.querySelector(".pola");

window.onscroll = function () {
  let value = scrollY;
  stars.style.left = value + "px";
  moon.style.top = value * 4 + "px";
  mountains3.style.top = value * 2 + "px";
  mountains4.style.top = value * 1.5 + "px";
  river.style.top = value + "px";
  boat.style.top = value + "px";
  boat.style.left = value * 3 + "px";
  pola.style.fontSize = value + "px";
  if (value >= 67) {
    pola.style.fontSize = 67 + "px";
    pola.style.position = "fixed";
    if (scrollY >= 415) {
      pola.style.display = "none";
    } else {
      pola.style.display = "block";
    }
  }
  if (scrollY >= 127) {
    document.querySelector(".main").style.backgroundColor =
      "linear-gradient(#376281, #10001f)";
  } else {
    document.querySelector(".main").style.backgroundColor =
      "linear-gradient(#200016, #10001f)";
  }
};
