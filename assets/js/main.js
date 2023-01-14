document.addEventListener('DOMContentLoaded', () => {
  togglePopup('info__notifications', 'info__notification-popup');
  togglePopup('info__login', 'info__login-popup');

  function togglePopup(buttonClass, popupClass) {
    const buttonSelector = document.querySelector('.' + buttonClass);
    const popupSelector = document.querySelector('.' + popupClass);

    $(buttonSelector).on('click', function () {
      buttonSelector.classList.toggle(buttonClass + '--active');
      popupSelector.classList.toggle(popupClass + '--active');
    });

    $(document).mouseup(function (e) {
      if (
        !$(buttonSelector).is(e.target) &&
        $(buttonSelector).has(e.target).length === 0 &&
        !$(popupSelector).is(e.target) &&
        $(popupSelector).has(e.target).length === 0
      ) {
        buttonSelector.classList.remove(buttonClass + '--active');
        popupSelector.classList.remove(popupClass + '--active');
      }
    });

    $(window).scroll(function () {
      popupSelector.classList.remove(buttonClass + '--active');
      buttonSelector.classList.remove(popupClass + '--active');
    });
  }

  const cardRatings = document.querySelectorAll('.cards__ratings');
  cardRatings.forEach((item) => {
    const starButton = item.querySelector('.cards__star-button');
    const starsWrapper = item.querySelector('.rating');

    const starsArr = starsWrapper.querySelectorAll('.rating__item');
    console.log(starsArr);

    starButton.addEventListener('click', () => {
      if (starsWrapper.classList.contains('rating--active')) {
        starsWrapper.setAttribute('data-total-value', 0);
      }

      starsWrapper.classList.toggle('rating--active');

    });

    starsArr.forEach((star) => {
      star.addEventListener('click', () => {
        console.log(item.getAttribute('data-item-value'));
        star.parentNode.dataset.totalValue = star.dataset.itemValue;
        starsWrapper.classList.toggle('rating--active');
      });
    });
  });
});
