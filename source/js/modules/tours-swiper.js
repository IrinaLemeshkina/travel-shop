const swiper = new Swiper('.tours__swiper', {
    // Optional parameters
    loop: true,
  
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 2,
        spaceBetween: 5,
      },
      1360: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.tours__swiper-button--along',
      prevEl: '.tours__swiper-button--back',
    },
  });
  