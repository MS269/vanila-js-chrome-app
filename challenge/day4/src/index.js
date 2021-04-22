// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const h2 = document.querySelector("h2");
h2.style.color = "white";

const YELLOW = "#ffff00",
  PURPLE = "#800080",
  BLUE = "#0000ff";

function changeWindowColor() {
  const w = window.innerWidth;

  if (w < 300) {
    document.body.style.backgroundColor = YELLOW;
  } else if (w < 600) {
    document.body.style.backgroundColor = PURPLE;
  } else if (w < 900) {
    document.body.style.backgroundColor = BLUE;
  } else {
    document.body.style.backgroundColor = "black";
  }
}

document.body.style.backgroundColor = "black";
window.addEventListener("resize", changeWindowColor);
