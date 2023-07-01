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

// AOS intialization
AOS.init();

console.log(`
 _    _ _____ _____  ______    _  __ _________ 
| |  | |_   _|  __ \\|  ____|   |  \\/  |  ____|
| |__| | | | | |__) | |__      | \\  / | |__   
|  __  | | | |  _  /|  __|     | |\\/| |  __|  
| |  | |_| |_| | \\ \\| |____    | |  | | |____ 
|_|  |_|_____|_|  \\_\\______|   |_|  |_|______|
`);
