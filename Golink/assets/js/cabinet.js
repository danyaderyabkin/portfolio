let burger = document.querySelector('.cabinet__burger');
let navbar = document.querySelector('.navbar');
let cabinet = document.querySelector('.cabinet');
let cabinetBtn = document.querySelector('.header__user');
let cabinetList = document.querySelector('.header__out');
const mediaQuery = window.matchMedia('(max-width: 1023px)');

burger.addEventListener('click', () => {
    if (mediaQuery.matches) {
        cabinet.classList.toggle('shrink');
    } 
    navbar.classList.toggle('toggle-navbar')
})

cabinetBtn.addEventListener('click', () => {
    cabinetList.classList.toggle('anim-cab');
})
