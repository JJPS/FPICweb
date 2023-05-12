const scrollBtn = document.querySelector(".btn-scroll-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 500) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});