const menuBtn = document.querySelector('#menuBtn');
const showMore = document.querySelector('#showMore');
const js_menu = document.querySelector('.menu');
const arrow = document.querySelector('.header__menu-btn');

menuBtn.addEventListener('click', function (e) {
  e.preventDefault();
  arrow.classList.toggle('header__menu-btn--active');
  js_menu.classList.toggle('menu--active');
});

showMore.addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('.middle__info--mob').classList.add('middle__info--mob-active');
  showMore.remove();
});


document.querySelectorAll('.middle__name-arrow').forEach((elem) => {
  elem.addEventListener('click', () => {
    const blockEl = elem.parentElement.parentElement;
    if (blockEl.classList.contains('middle__block--active')) {
      elem.parentElement.parentElement.classList.remove('middle__block--active');
    } else {
      elem.parentElement.parentElement.classList.add('middle__block--active');
    }
  });
});
