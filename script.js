// End of Section 2 Video

var swiper = new Swiper('.swiper-container', {
  loop: true,
  speed: 1000,
  autoplay: {
      delay: 3000,
  },
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: false,
  slidesPerView: 'auto',
  coverflowEffect: {
      rotate: 0,
      stretch: 80,
      depth: 200,
      modifier: 1,
      slideShadows: false,
  },

  // Navigation arrows
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },

})


