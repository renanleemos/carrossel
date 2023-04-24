var swiper = new Swiper(".carousel", {
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

const carouselItems = document.querySelectorAll(".carousel .item");
const contentItems = document.querySelectorAll(".content .item");

carouselItems.forEach((item) => {
  item.addEventListener("click", () => {
    carouselItems.forEach((item) => {
      item.classList.remove("active");
    });
    contentItems.forEach((item) => {
      item.classList.remove("active");
    });
    const value = item.getAttribute("data-value");
    const contentItem = document.querySelector(
      `.content .item[data-value="${value}"]`
    );
    item.classList.add("active");
    contentItem.classList.add("active");
  });
});
  