const NAV = document.getElementById('nav');
const BTN_MENU = document.getElementById('menu');

BTN_MENU.addEventListener('click', () => {
    NAV.classList.toggle('nav-hide');
    NAV.classList.toggle('nav-show');
});