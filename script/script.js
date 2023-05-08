const hamburger = document.querySelector('.nav--burger');
const navMenu = document.querySelector('.navbar__hamburger');
const list = document.querySelectorAll('.hamburger__link');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('navbar__list--active');
});

list.forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('navbar__list--active');
    hamburger.classList.toggle('active');
  });
});
