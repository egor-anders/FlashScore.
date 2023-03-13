const scrollButton = document.querySelector('.product__button--scroll')
const scrollBlock = document.querySelector('#reviews');

scrollButton.addEventListener('click', function (e) {
  e.preventDefault();
  
  scrollBlock.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
});