const scrollButton = document.querySelector('.product__button--scroll');
const scrollBlock = document.querySelector('#reviews');

scrollButton.addEventListener('click', function (e) {
  e.preventDefault();

  scrollBlock.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
});

const reviewsItems = document.querySelectorAll('.reviews__item');
const moreReviews = document.querySelector('.reviews__more');
const hideReviews = document.querySelector('.reviews__hide');

function toggleItems() {
  reviewsItems.forEach((item, i) => {
    if (i > 2) {
      item.classList.toggle('reviews__item--hide');
    }
  });
}

toggleItems();

moreReviews.addEventListener('click', function (e) {
  e.preventDefault();
  moreReviews.style.display = 'none';
  hideReviews.style.display = 'block';
  toggleItems();
});

hideReviews.addEventListener('click', function (e) {
  e.preventDefault();
  hideReviews.style.display = 'none';
  moreReviews.style.display = 'block';
  toggleItems();
});
