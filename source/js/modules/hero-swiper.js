const swiper = new Swiper('.hero__swiper', {
    // Optional parameters
    loop: true,
  
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      1200: {
        slidesPerView: 1,
      },
      1360: {
        slidesPerView: 1,
      },
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.hero__swiper-button--one',
      prevEl: '.hero__swiper-button--two',
      prevE2: '.hero__swiper-button--three',
    },
  });
  