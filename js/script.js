// let button = document.getElementById("menu");
let menuBar = document.getElementById("menu-bar");
let xMark = document.getElementById("x-mark");
let navBar = document.getElementById("nav-items");
let navItems = document.getElementsByClassName("nav-item");
let goTop = document.getElementById("go-to-top");

// show nav bar
menuBar.addEventListener("click", function () {
  navBar.style.display = "block";
  xMark.style.display = "block";
  menuBar.style.display = "none";
  goTop.style.display = "none";
});

// hide menu bar
xMark.addEventListener("click", function () {
  navBar.style.display = "none";
  xMark.style.display = "none";
  menuBar.style.display = "block";
  goTop.style.display = "block";
});

for (let i = 0; i < navItems.length; i++) {
  let navItem = navItems[i];
  navItem.addEventListener("click", function () {
    navBar.style.display = "none";
    xMark.style.display = "none";
    menuBar.style.display = "block";
    goTop.style.display = "block";
  });
}
