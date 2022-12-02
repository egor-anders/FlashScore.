const filter = document.querySelector('.content__filter--active');
const content = document.querySelector('.content__list');

$(filter).on('click', function () {
  filter.classList.toggle('content__filter--open');
  content.classList.toggle('content__list--open');
});

$(document).mouseup(function (e) {
  if (!$(filter).is(e.target) && $(filter).has(e.target).length === 0 && !$(content).is(e.target) && $(content).has(e.target).length === 0) {
    filter.classList.remove('content__filter--open');
    content.classList.remove('content__list--open');
  }
});

$(window).scroll(function () {
  content.classList.remove('content__list--open');
  filter.classList.remove('content__filter--open');
});

document.addEventListener('DOMContentLoaded', () => {
  const tableBlocks = document.querySelectorAll('.table__block');

  tableBlocks.forEach((tableBlock) => {
    const tableStrings = tableBlock.querySelectorAll('.table__string');
    const tableButtons = tableBlock.querySelectorAll('.table__button');

    tableButtons.forEach((button) => {
      button.addEventListener('click', (e) => {
        if (e.target.classList.contains('table__more')) {
          e.target.style.display = 'none';
          button.querySelector('.table__hide').style.display = 'inline';
          tableStrings.forEach((string) => {
            if (string.getAttribute('data-hide')) {
              string.classList.toggle('table__string--hide');
            }
          });
        } else if (e.target.classList.contains('table__hide')) {
          e.target.style.display = 'none';
          button.querySelector('.table__more').style.display = 'inline';
          tableStrings.forEach((string) => {
            if (string.getAttribute('data-hide')) {
              string.classList.toggle('table__string--hide');
            }
          });
        }
      });
    });
  });
});
