"use strict";

const burger = document.querySelector(".burger-menu");
const sideMenu = document.querySelector(".side-element");

burger.addEventListener("click", function (e) {
  document.querySelector(".mid").classList.toggle("hidden");
  document.querySelector(".bot").classList.toggle("rotate1");
  document.querySelector(".top").classList.toggle("rotate2");
  document.querySelector(".side").classList.toggle("move");
});

const windowSize = window.screen.availWidth;
if (windowSize < 765) {
  const HTML = `<li><a href="/">Falcon 2137</a></li>
 <li><a href="/">Falcon Light</a></li>
  <li><a href="/">Dragon(fly)</a></li>
  <li><a href="/">Seaship</a></li>
  <li><a href="/">Alien SpaceFlight</a></li>
 <li><a href="/">Shop</a></li>`;
  sideMenu.insertAdjacentHTML("beforebegin", HTML);
}

const link = document.createElement("link");

// set the attributes for link element
link.rel = "stylesheet";

link.type = "text/css";

link.href = "../css/main.css";

// Get HTML head element to append
// link element to it
document.getElementsByTagName("HEAD")[0].appendChild(link);
