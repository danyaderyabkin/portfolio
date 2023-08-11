let menu = document.querySelector('.menu-item-burger');
let menuOpen = document.querySelector('.menu-burger');
let menuClose = document.querySelector('.menu-close');

    menu.addEventListener('click', () => {
        menuOpen.style.transform = 'translateX(0px)';
    });

    menuClose.addEventListener('click', () => {
        menuOpen.style.transform = 'translateX(350px)';
    });

let mobileMenuClose = document.querySelector('#close-menu');
let mobileMenu = document.querySelector('.menu-item-burger-main');
let mobileMenuShow = document.querySelector('.menu-1');

    mobileMenu.addEventListener('click', () => {
        mobileMenuShow.classList.add('current');
    });
    mobileMenuClose.addEventListener('click', () => {
        mobileMenuShow.classList.remove('current');
    });