(() => {
  const Swipers = Array.from(document.querySelectorAll('.tabs__wrap'), n => {
    return new Swiper(n.querySelector('.swiper'), {
      slidesPerView: 3,
      spaceBetween: 20,
      loop: false,
      navigation: {
        nextEl: n.querySelector('.swiper-button-next'),
        prevEl: n.querySelector('.swiper-button-prev'),
      },
      pagination: {
        el: n.querySelector('.swiper-pagination'),
        clickable: true,
      },
      breakpoints: {
        32: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1441: {
          slidesPerView: 3,
        },
      },
    });
  });

  const body = document.querySelector('body');
  const checkboxDark = document.getElementById('dark-theme');

  checkboxDark.addEventListener('click', (e) => {
    if (e.target.checked) {
      body.setAttribute('dark', '');
    } else {
      body.removeAttribute('dark');
    }
  });
})();


