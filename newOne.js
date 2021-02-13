let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');
var x = window.matchMedia("(max-width: 1000px)")

navBarToggle.addEventListener('click', function () {

    mainNav.classList.toggle('active');
});

document.addEventListener('click', () => {
  if (x.matches) {
    if (mainNav.style.display === "run-in") {
        mainNav.style.display = "none";
      }
    }
});
