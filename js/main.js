$(function () {
  // scroll to block

  // burger menu
  $(".header__burger").click(function (event) {
    $(".header__menu").toggleClass("header__menu--active");
  });
  // swiper/sliders

  const dishesSliderOne = new Swiper(".dishes__slider-1", {
    // начало с 1-его слайдера
    initialSlide: 1,
    // слайдов к показу
    slidesPerView: 4,
    // бесконечность
    loop: true,
    // скорость
    speed: 3500,
    // отступ в px
    spaceBetween: 2,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    breakpoints: {
      1100: {
        slidesPerView: 4,
      },
      750: {
        slidesPerView: 3,
      },
      400: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 1,
      },
    },
  });
  const dishesSliderTwo = new Swiper(".dishes__slider-2", {
    // начало с 8-его слайдера
    initialSlide: 8,
    // слайдов к показу
    slidesPerView: 4,
    // бесконечность
    loop: true,
    // скорость
    speed: 3500,
    // отступ в px
    spaceBetween: 2,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    breakpoints: {
      1100: {
        slidesPerView: 4,
      },
      750: {
        slidesPerView: 3,
      },
      400: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 1,
      },
    },
  });
});
// swiper slider работает до расширения 380
document.addEventListener("DOMContentLoaded", () => {
  const width = window.innerWidth;
  if (width > 390) {
    const menuSlider = new Swiper(".menu__slider", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      keyboradr: {
        enabled: true,
      },

      // слайдов к показу
      slidesPerView: 4.2,
      // центрирование слайдера
      centeredSlides: true,
      // начало с 3-его слайдера
      initialSlide: 3,

      // отступ в px
      spaceBetween: 5,
      // адаптив
      breakpoints: {
        1160: {
          slidesPerView: 4.2,
          centeredSlides: true,
          initialSlide: 3,
          spaceBetween: 5,
        },
        800: {
          slidesPerView: 3,
          loop: false,
        },
        580: {
          slidesPerView: 2,
        },
        475: {
          slidesPerView: 1.6,
        },
        390: {
          centeredSlides: true,
          slidesPerView: 1.4,
        },
      },
    });
  }
});
