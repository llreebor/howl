if (document.querySelector(".swiper")) {
  // Slider Mint Now
  new Swiper(".slider__now", {
    // Navigation arrows
    navigation: {
      nextEl: ".swiper__next",
      prevEl: ".swiper__prev",
    },
    // Responsive breakpoints
    breakpoints: {
      320: {
        slidesPerView: 1.2,
        spaceBetween: 12,
      },
      520: {
        slidesPerView: 1.5,
        spaceBetween: 12,
      },
      768: {
        slidesPerView: 1.8,
        spaceBetween: 24,
      },
      992: {
        slidesPerView: 2.5,
        spaceBetween: 24,
      },
    },
  })

  // Slider Coming soon
  new Swiper(".slider__soon", {
    // Navigation arrows
    navigation: {
      nextEl: ".swiper__next",
      prevEl: ".swiper__prev",
    },
    // Responsive breakpoints
    breakpoints: {
      320: {
        slidesPerView: 1.2,
        spaceBetween: 12,
      },
      520: {
        slidesPerView: 1.5,
        spaceBetween: 12,
      },
      768: {
        slidesPerView: 1.8,
        spaceBetween: 24,
      },
      992: {
        slidesPerView: 2.5,
        spaceBetween: 24,
      },
    },
  })
}
