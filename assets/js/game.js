const filter = document.querySelector('.content__filter--active')
const content = document.querySelector('.content__list')

$(filter).on('click', function() {
  filter.classList.toggle('content__filter--open')
  content.classList.toggle('content__list--open')
});

$(document).mouseup(function (e) {
  if (! $(filter).is(e.target) && $(filter).has(e.target).length === 0 &&
  ! $(content).is(e.target) && $(content).has(e.target).length === 0
  ) {
    filter.classList.remove('content__filter--open')
    content.classList.remove('content__list--open')
  }
})


$(window).scroll(function () {
  content.classList.remove('content__list--open')
  filter.classList.remove('content__filter--open')
  });