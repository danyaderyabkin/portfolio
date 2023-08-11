let burger = document.querySelector('.burger');
let burgerList = document.querySelector('.header__list');
let input = document.querySelector('#main-input');
let form = document.querySelector('#form');
let copyBtn = form.querySelector('.copy-btn');
let postBtn = form.querySelector('.post-btn');
let readyLink = document.querySelector('.ready-link');
let qrCod = document.querySelector('.qr-code');
let historyList = document.querySelector('.history__list');
let historyMore = document.querySelector('.history__more');
const mediaQuery = window.matchMedia('(max-width: 930px)');
allItems = historyList.querySelectorAll('li');
if (allItems.length == 1) {
    historyList.classList.add('visually-hidden');
}

function changeInput(place) {
    place ? input.placeholder = 'Вставьте ссылку...' : input.placeholder = 'Вставьте ссылку которую хотите сократить'
}

if (mediaQuery.matches) input.placeholder = 'Вставьте ссылку...';
mediaQuery.addEventListener('change', (e) => {
    changeInput(e.matches)
})

burger.addEventListener('click', () => {
    burger.classList.toggle('burger--active');
    burgerList.classList.toggle('anim');
})

function createLinkForm() {
    if (form) {
        form.addEventListener('submit', e => {
            e.preventDefault();
            const fd = new FormData(form);

            fetch('https://go-link.ru/api/link/create', {
                method: 'post', body: fd,
            }).then((response) => {
                return response.json();
            }).then((data) => {
                if (data.error === false) {
                    old =  input.value;
                    pastShortUrl(data);
                    createHistory(data, old);
                    qrCod.src = data.data.qrCode;
                }
                if (data.error === true) {
                    alert(data.message)
                }
            })
        });
    }
}

createLinkForm();

function checkInput(input) {
    input.addEventListener('input', () => {
        if (!input.value) {
            postBtn.classList.remove('visually-hidden');
            copyBtn.classList.add('visually-hidden');
            readyLink.classList.remove('anim');

        }
    });
}

checkInput(input);

function pastShortUrl(data) {
    input.value = data.data.shorturl;
    postBtn.classList.add('visually-hidden');
    copyBtn.classList.remove('visually-hidden');
    readyLink.classList.add('anim');
}

copyBtn.addEventListener('click', (e) => {
    e.preventDefault();
    input.select();
    input.setSelectionRange(0, 99999);
    document.execCommand('copy');

});

function createHistory(data, old) {
    let history = document.querySelector('.history__item').cloneNode(true);
    let item = history;
    oldLink = item.querySelector('.history__link-text');
    newLink = item.querySelector('.history__link');
    newLink.innerHTML = data.data.shorturl;
    oldLink.innerHTML = old;
    item.classList.remove('visually-hidden')

    historyList.append(item);

    historyList.classList.remove('visually-hidden')
    allItems = historyList.querySelectorAll('li');
    if (allItems.length >= 4) {
        historyMore.classList.remove('visually-hidden');

        historyMore.addEventListener('click', (e) => {
            e.preventDefault();
            allItems.forEach(element => {
                element.style.display = 'flex';
            });
            historyMore.classList.add('visually-hidden');
        })
    }
}

historyList.addEventListener('click',(e) => {
    if (e.target.classList.contains('history__btn')) {
        let parent = e.target.parentElement;
        let link = parent.querySelector('.history__link').textContent;
        navigator.clipboard.writeText(link);
    } else {
        return
    }
})

