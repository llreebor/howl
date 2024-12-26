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

  // Slider NFT
  const thumbs = new Swiper(".slider__nft-thumbs", {
    // Navigation arrows
    navigation: {
      prevEl: ".swiper__prev",
      nextEl: ".swiper__next",
    },

    // Responsive breakpoints
    breakpoints: {
      320: {
        slidesPerView: 4,
        spaceBetween: 8,
      },
      768: {
        spaceBetween: 18,
        slidesPerView: 4,
      },
    },
  })
  const nftSlider = new Swiper(".slider__nft", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 16,
    thumbs: {
      swiper: thumbs,
    },
  })

  document.querySelector(".swiper__prev").addEventListener("click", () => {
    nftSlider.slidePrev()
  })
  document.querySelector(".swiper__next").addEventListener("click", () => {
    nftSlider.slideNext()
  })
}

if (document.querySelector(".select")) {
  document.addEventListener("DOMContentLoaded", function () {
    const selectTrigger = document.getElementById("select")
    const optionsContainer = document.getElementById("options")
    const optionListItems = document.querySelectorAll(".select__option")
    const selectedOption = document.getElementById("selected-option")

    // Toggle options visibility
    selectTrigger.addEventListener("click", function () {
      optionsContainer.classList.toggle("active")
      toggleArrow()
    })

    // Update selected option and hide options
    optionListItems.forEach((option) => {
      option.addEventListener("click", function () {
        selectedOption.textContent = this.textContent
        optionsContainer.classList.remove("active")
        toggleArrow()
      })
    })

    // Close dropdown when clicking outside
    document.addEventListener("click", function (event) {
      if (!selectTrigger.contains(event.target)) {
        optionsContainer.classList.remove("active")
        if (optionsContainer.classList.contains("active")) {
          toggleArrow()
        }
      }
    })

    // Function to toggle arrow direction
    function toggleArrow() {
      const arrow = document.querySelector(".select__arrow")
      arrow.classList.toggle("active")
    }
  })
}
