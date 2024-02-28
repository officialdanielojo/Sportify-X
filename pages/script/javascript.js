const closeNav = document.querySelector(".close_nav");
const openNav = document.querySelector(".bar_con");
const nav = document.querySelector(".nav_section");
// const back = document.querySelector(".back");

closeNav.addEventListener("click", function () {
  nav.classList.remove("showNav");
});

openNav.addEventListener("click", function () {
  nav.classList.add("showNav");
});

// back.addEventListener("click", function () {
//   location.href = "/index.html";
// });
