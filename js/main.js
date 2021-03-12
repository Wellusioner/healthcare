const body = document.body,
      header = document.querySelector('.header'),
      headerBtns = document.querySelectorAll('.hamburger, .helper, .close-menu');

headerBtns.forEach(function(btn){
  btn.addEventListener('click', function(){
    body.classList.toggle('overflowed');
    header.classList.toggle('active');
  });
});

const feedbackSlider = new Swiper('.feedback-slider', {
  spaceBetween: 120,
  pagination: {
    el: '.feedback-section .swiper-pagination',
    clickable: true
  },
  navigation: {
    prevEl: '.feedback-navigation .prev-button',
    nextEl: '.feedback-navigation .next-button',
  }
});