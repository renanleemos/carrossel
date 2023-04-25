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
