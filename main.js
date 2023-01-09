let burger = document.querySelector(".burger");
let menu = document.querySelector(".header__nav");


burger.addEventListener("click", function () {
  burger.classList.toggle("burger--active");
  menu.classList.toggle("header__nav--active");
  document.body.classList.toggle("stop__scroll");
});

menuLinks.forEach(function (el) {
  burger.classList.remove("burger--active");
  menu.classList.remove("header__nav--active");
  document.body.classList.remove("stop__scroll");
});
