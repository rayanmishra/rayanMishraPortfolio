const hamburger = document.querySelector('.nav--burger');
const navMenu = document.querySelector('.navbar__hamburger');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('navbar__list--active');
});
