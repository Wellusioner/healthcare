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