var swiper = new Swiper(".slide-content", {
  slidesPerView: "auto",
  spaceBetween: 1,
  // loop: true,
  centerSlider: true,
  fade: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
    },
    "@0.75": {
      slidesPerView: 2,
    },
    "@1.00": {
      slidesPerView: 3,
    },
    "@1.50": {
      slidesPerView: 4,
    },
  },
});

$(document).ready(function(){
    $("img").hover(function(){
      $("#div1").fadeIn();
      $("#div2").fadeIn();
      $("#div3").fadeIn();
    });
  });

  