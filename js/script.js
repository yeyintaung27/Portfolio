const filter_btns = document.querySelectorAll(".filter-btn");
const skills_wrap = document.querySelector(".skills");
const skills_bars = document.querySelectorAll(".skill-progress");
const footer_input = document.querySelector(".footer-input");
const hamburger_menu = document.querySelector(".hamburger-menu");
const navbar = document.querySelector("header nav");
const links = document.querySelectorAll(".links a");

window.addEventListener("scroll", function(){
  var header = document.querySelector("nav .container");
  header.classList.toggle("sticky", window.scrollY > 20);
});

  let progressBar = document.getElementById('progress-bar');
  let docHeight = document.body.scrollHeight;
  let winHeight = window.innerHeight;

  progressBar.style.width = parseInt(140 * (winHeight + window.scrollY) / docHeight, 10) + '%';

  window.addEventListener(
    'scroll',
    function(e) {
        progressBar.style.width = parseInt(140 * (winHeight + window.scrollY) / docHeight, 10) + '%';
    }
  );

  var typingEffect = new Typed(".multitext",{
      strings : ["Web Developer","App Developer","Designer","Programmer"],
      loop : true,
      typeSpeed : 100,
      backSpeed : 80,
      startDelay : 1000,
      backDelay : 1500
    });

footer_input.addEventListener("focus", () => {
  footer_input.classList.add("focus");
});

footer_input.addEventListener("blur", () => {
  if (footer_input.value != "") return;
  footer_input.classList.remove("focus");
});

function closeMenu() {
  navbar.classList.remove("open");
  document.body.classList.remove("stop-scrolling");
}

hamburger_menu.addEventListener("click", () => {
  if (!navbar.classList.contains("open")) {
    navbar.classList.add("open");
    document.body.classList.add("stop-scrolling");
  } else {
    closeMenu();
  }
});

links.forEach((link) => link.addEventListener("click", () => closeMenu()));

filter_btns.forEach((btn) =>
  btn.addEventListener("click", () => {
    filter_btns.forEach((button) => button.classList.remove("active"));
    btn.classList.add("active");

    let filterValue = btn.dataset.filter;

    $(".grid").isotope({ filter: filterValue });
  })
);

$(".grid").isotope({
  itemSelector: ".grid-item",
  layoutMode: "fitRows",
  transitionDuration: "0.6s",
});

window.addEventListener("scroll", () => {
  skillsEffect();
});

function checkScroll(el) {
  let rect = el.getBoundingClientRect();
  if (window.innerHeight >= rect.top + el.offsetHeight) return true;
  return false;
}

function skillsEffect() {
  if (!checkScroll(skills_wrap)) return;
  skills_bars.forEach((skill) => (skill.style.width = skill.dataset.progress));
}