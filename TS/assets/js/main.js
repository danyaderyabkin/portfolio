window.addEventListener('DOMContentLoaded', () => {
    let searchBtn = document.querySelector('#header__search');
    let searchBtnClose = document.querySelector('#header__close');
    let burgerBtnClose = document.querySelector('.burger-close');
    let searchWrap = document.querySelector('.header__search-container');
    let searchForm = document.querySelector('.header__search-form');


    let burger = document.querySelector('.burger');
    let menu = document.querySelector('.header .nav');

    let mainWrap = document.querySelector('.main');

    searchBtn.addEventListener('click', () => {
        window.onscroll = function () { window.scrollTo(0, 0); };
        mainWrap.style.transform = 'scale(0.985)';
        searchWrap.classList.add('view-search');
        searchBtn.classList.add('transition', 'hide');
        setTimeout(function () {
            searchForm.style.paddingTop = '100px';
            searchBtnClose.classList.add('view-search');
        }, 100);
    });

    searchBtnClose.addEventListener('click',() => {
        window.onscroll=function(){};
        mainWrap.style.transform = 'scale(1)';
        searchBtn.classList.remove('hide');
        searchWrap.classList.remove('view-search');
        searchForm.style.paddingTop = '0px';
        setTimeout(function () {
            searchBtnClose.classList.remove('view-search');
        }, 100);
    });

    burger.addEventListener('click', () => {
        menu.classList.add('view-search');
        burger.classList.add('hide');
        burgerBtnClose.classList.add('view-search');
    });

    burgerBtnClose.addEventListener('click', () => {
        menu.classList.remove('view-search');
        burger.classList.remove('hide');
        burgerBtnClose.classList.remove('view-search');
        burgerBtnClose.classList.add('hide');
    });

});