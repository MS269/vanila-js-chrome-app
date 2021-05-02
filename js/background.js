const body = document.querySelector("body");
const changeBtn = document.getElementById("js-changeBackground");

const IMG_NUMBER = 6;

function paintRandomImage() {
  const random = Math.floor(Math.random() * IMG_NUMBER);
  const img = new Image();
  img.src = `imgs/IU0${random + 1}.png`;
  img.classList.add("js-backgroundImg");
  body.appendChild(img);
}

function handleChangeBtnClick(event) {
  event.preventDefault();
  paintRandomImage();
}

function init() {
  paintRandomImage();
  changeBtn.addEventListener("click", handleChangeBtnClick);
}

init();
