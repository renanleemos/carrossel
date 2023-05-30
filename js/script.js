const carouselItems = document.querySelectorAll(".carousel .item");
const contentItems = document.querySelectorAll(".content .item");
const titleItems = document.querySelectorAll(".titleItem .item");
const posItems = document.querySelectorAll(".pos__icons .item");

carouselItems.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    carouselItems.forEach((item) => {
      item.classList.remove("active");
    });
    contentItems.forEach((item) => {
      item.classList.remove("active");
    });
    titleItems.forEach((item) => {
      item.classList.remove("active");
    });
    posItems.forEach((item) => {
      item.classList.remove("active");
    });
    const value = item.getAttribute("data-value");
    const contentItem = document.querySelector(
      `.content .item[data-value="${value}"]`
    );
    const titleItem = document.querySelector(
      `.titleItem .item[data-value="${value}"]`
    );
    const posItem = document.querySelector(
      `.pos__icons .item[data-value="${value}"]`
    );
    item.classList.add("active");
    contentItem.classList.add("active");
    titleItem.classList.add("active");
    posItem.classList.add("active");
  });
});
