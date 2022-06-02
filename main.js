'use strict';

/* Vertical-swiper */
const vSlide = document.querySelectorAll('.vSlide');
let sliderLength = vSlide.length - 1;
const verticalSwiper = new Swiper('#mainSwiper', {
  // Optional parameters
  direction: 'vertical',
  slidesPerView: 1,
  loop: false,
  mousewheel: true,
  speed: 1000,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  on: {     
    slideChange: function () {
      if (verticalSwiper.realIndex == 0 || verticalSwiper.realIndex == sliderLength) {
        verticalSwiper.mousewheel.disable();
      }
    }
  },
});

window.addEventListener('wheel', function (event) {
  if (event.deltaY < 0) {
    verticalSwiper.mousewheel.enable();
  } else if (event.deltaY > 0) {
  }
});

/* Swiper1 */
var swiper1 = new Swiper(".swiper1", {
  direction: "horizontal",
  slidesPerView: 1,
  loop: true,
  mousewheel: false,
  speed: 1000,
  pagination: {
    el: ".swiper-pagination",
    type: 'fraction',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
});

/* Swiper2 */
var swiper2 = new Swiper(".swiper2", {
  direction: "horizontal",
  slidesPerView: 1,
  loop: true,
  mousewheel: false,
  speed: 1000,
  pagination: {
    el: ".swiper-pagination",
    type: 'fraction',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
});

/* Swiper3 */
var swiper3 = new Swiper(".swiper3", {
  direction: "horizontal",
  slidesPerView: 1,
  loop: true,
  mousewheel: false,
  speed: 1000,
  pagination: {
    el: ".swiper-pagination",
    type: 'fraction',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
});

/* Swiper4 */
var swiper4 = new Swiper(".swiper4", {
  direction: "horizontal",
  slidesPerView: 1,
  loop: true,
  mousewheel: false,
  speed: 1000,
  pagination: {
    el: ".swiper-pagination",
    type: 'fraction',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
});

/* Swiper5 */
var swiper5 = new Swiper(".swiper5", {
  direction: "horizontal",
  slidesPerView: 1,
  loop: true,
  mousewheel: false,
  speed: 1000,
  pagination: {
    el: ".swiper-pagination",
    type: 'fraction',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
});

/* Swiper6 */
var swiper6 = new Swiper(".swiper6", {
  direction: "horizontal",
  slidesPerView: 1,
  loop: true,
  mousewheel: false,
  speed: 1000,
  pagination: {
    el: ".swiper-pagination",
    type: 'fraction',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
});

/* Swiper7 */
var swiper7 = new Swiper(".swiper7", {
  direction: "horizontal",
  slidesPerView: 1,
  loop: true,
  mousewheel: false,
  speed: 1000,
  pagination: {
    el: ".swiper-pagination",
    type: 'fraction',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
});

/* Swiper8 */
var swiper8 = new Swiper(".swiper8", {
  direction: "horizontal",
  slidesPerView: 1,
  loop: true,
  mousewheel: false,
  speed: 1000,
  pagination: {
    el: ".swiper-pagination",
    type: 'fraction',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
});

/* Swiper9 */
var swiper9 = new Swiper(".swiper9", {
  direction: "horizontal",
  slidesPerView: 1,
  loop: true,
  mousewheel: false,
  speed: 1000,
  pagination: {
    el: ".swiper-pagination",
    type: 'fraction',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
});

const keywordTyping = document.querySelector('.keywordTyping');
const typing = document.querySelector('.typing');
keywordTyping.addEventListener('mouseenter', (e) => {
  typing.style.display = `block`;
  typing.style.top = `${e.clientY + 10}px`;
  typing.style.left = `${e.clientX + 10}px`;
  /*
  console.log(
    "pageX: ",e.pageX, 
    "pageY: ", e.pageY, 
    "clientX: ", e.clientX, 
    "clientY:", e.clientY
  )
  */
});
keywordTyping.addEventListener('mouseleave', (e) => {
  typing.style.display = `none`;
});
keywordTyping.addEventListener('click', (e) => {
  typing.style.display = `none`;
});