const nextIcon = document.querySelector(".next");
const prevIcon = document.querySelector(".prev");
const imageContainer = document.querySelector(".image-container");
const imgs = document.querySelectorAll("img");

let currentImg = 1;
let timeOut = 0;
nextIcon.addEventListener("click", () => {
  currentImg++;
  clearTimeout(timeOut);
  updateImg();
});
prevIcon.addEventListener("click", () => {
  currentImg--;
  clearTimeout(timeOut);
  updateImg();
});

function updateImg() {
  timeOut = setTimeout(() => {
    currentImg++;
    updateImg();
  }, 4000);

  if (currentImg >= imgs.length) {
    currentImg = 0;
  } else if (currentImg == -1) {
    currentImg = imgs.length - 1;
  }

  imageContainer.style.transform = `translateX(-${currentImg * 700}px)`;
}
