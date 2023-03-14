const modals = document.querySelectorAll('.modal');
const triggers = document.querySelectorAll('[data-toggle]');
modals.forEach((modal) => {
  const modalClose = modal.querySelector('.modal__close');

  function hideModal() {
    modal.classList.remove('modal--active');
    if (!document.querySelector('.popup--main').classList.contains('popup--active')) {
      document.querySelector('html').classList.remove('no-scroll');
    }
  }

  modalClose.addEventListener('click', () => {
    hideModal();
  });

  modal.addEventListener('click', (e) => {
    if (e.target == modal) {
      hideModal();
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      hideModal();
    }
  });
});

triggers.forEach((trigger) => {
  trigger.addEventListener('click', (e) => {
    e.preventDefault();
    if (trigger.getAttribute('data-toggle') == 'review') {
      if (!document.body.classList.contains('guest')) {
        document.querySelector('.modal--review').classList.add('modal--active');
      } else {
        document.querySelector('.modal--login').classList.add('modal--active');
        document.querySelector('.modal-error').classList.add('modal-error--show');
        
        // время исчезновения модального окна с ошибкой
        setTimeout(function () {
          document.querySelector('.modal-error').classList.remove('modal-error--show');
        }, 4000); 
      }
      document.querySelector('html').classList.add('no-scroll');
    } else if (trigger.getAttribute('data-toggle') == 'login') {
      document.querySelector('.modal--login').classList.add('modal--active');
      document.querySelector('html').classList.add('no-scroll');
    } else if (trigger.getAttribute('data-toggle') == 'registration') {
      document.querySelector('.modal--registration').classList.add('modal--active');
      document.querySelector('html').classList.add('no-scroll');
    } else if (trigger.getAttribute('data-toggle') == 'registration-second') {
      document.querySelector('.modal--login').classList.remove('modal--active');
      document.querySelector('.modal--registration').classList.add('modal--active');
    }
  });
});
