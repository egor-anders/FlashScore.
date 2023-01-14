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

  //dark-mode
});

const darkButton = document.querySelector('.info__theme--dark');
const lightButton = document.querySelector('.info__theme--light');

darkButton.addEventListener('click', () => {
  darkMode = localStorage.getItem("dark-mode"); // update darkMode when clicked
  enableDarkMode();
});

lightButton.addEventListener('click', () => {
  disableDarkMode();
});


let darkMode = localStorage.getItem("dark-mode");

const enableDarkMode = () => {
  darkButton.classList.add('info__theme--active');
  lightButton.classList.remove('info__theme--active');
  darkButtonMobile.classList.add('mobile__theme--active');
  lightButtonMobile.classList.remove('mobile__theme--active');
  document.body.classList.add('dark-mode');
  document.querySelector('.content__discover').classList.add('content__discover--dark');
  document.querySelector('.info__balance--light').classList.remove('info__balance--active');
  document.querySelector('.info__balance--dark').classList.add('info__balance--active');
  localStorage.setItem("dark-mode", "enabled");
};

const disableDarkMode = () => {
  darkButton.classList.remove('info__theme--active');
  lightButton.classList.add('info__theme--active');
  darkButtonMobile.classList.remove('mobile__theme--active');
  lightButtonMobile.classList.add('mobile__theme--active');
  document.body.classList.remove('dark-mode');
  document.querySelector('.content__discover').classList.remove('content__discover--dark');
  document.querySelector('.info__balance--light').classList.add('info__balance--active');
  document.querySelector('.info__balance--dark').classList.remove('info__balance--active');
  localStorage.setItem("dark-mode", "disabled");

};



const darkButtonMobile = document.querySelector('.mobile__theme--dark');
const lightButtonMobile = document.querySelector('.mobile__theme--light');

darkButtonMobile.addEventListener('click', () => {
  darkMode = localStorage.getItem("dark-mode"); // update darkMode when clicked
  enableDarkModeMobile();
});

lightButtonMobile.addEventListener('click', () => {
  disableDarkModeMobile();
});

const enableDarkModeMobile = () => {
  darkButton.classList.add('info__theme--active');
  lightButton.classList.remove('info__theme--active');
  darkButtonMobile.classList.add('mobile__theme--active');
  lightButtonMobile.classList.remove('mobile__theme--active');
  document.body.classList.add('dark-mode');
  document.querySelector('.content__discover').classList.add('content__discover--dark');
  document.querySelector('.info__balance--light').classList.remove('info__balance--active');
  document.querySelector('.info__balance--dark').classList.add('info__balance--active');
  localStorage.setItem("dark-mode", "enabled");
};

const disableDarkModeMobile = () => {
  darkButton.classList.remove('info__theme--active');
  lightButton.classList.add('info__theme--active');
  darkButtonMobile.classList.remove('mobile__theme--active');
  lightButtonMobile.classList.add('mobile__theme--active');
  document.body.classList.remove('dark-mode');
  document.querySelector('.content__discover').classList.remove('content__discover--dark');
  document.querySelector('.info__balance--light').classList.add('info__balance--active');
  document.querySelector('.info__balance--dark').classList.remove('info__balance--active');
  localStorage.setItem("dark-mode", "disabled");
};


if (darkMode === "enabled") {
  enableDarkMode(); // set state of darkMode on page load
  enableDarkModeMobile();
}

