const rangeBar = document.querySelector(".js-rangeBar");
const rangeMax = document.getElementById("js-rangeMax");
const guessBtn = document.getElementById("js-guessBtn");
const guessInput = document.querySelector(".js-guessInput");
const result = document.getElementById("js-result");

function handleGuessBtnClick(event) {
  event.preventDefault();
  if (guessInput.value === "") return;
  const max = parseInt(rangeBar.value, 10);
  const guessNumber = parseInt(guessInput.value, 10);
  const randomNumber = Math.floor(Math.random() * (max + 1));
  result.innerHTML = `You chose: ${guessNumber}, the machine chose: ${randomNumber}.<br />
    <strong>You ${guessNumber === randomNumber ? "won" : "lost"}!<strong />`;
}

function handleRangeBarInput(event) {
  event.preventDefault();
  rangeMax.innerHTML = rangeBar.value;
}

function init() {
  rangeBar.addEventListener("input", handleRangeBarInput);
  guessBtn.addEventListener("click", handleGuessBtnClick);
}

init();
