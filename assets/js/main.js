var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      // mobile + tablet - 320-990
      320: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      // desktop >= 991
      768: {
        slidesPerView: 3
      }
    }
  });