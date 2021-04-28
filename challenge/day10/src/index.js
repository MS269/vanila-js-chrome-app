const rnForm = document.querySelector(".js-rnForm");
const rnRange = rnForm.querySelector(".js-rnRange");
const rnNumber = rnForm.querySelector(".js-rnNumber");
const rnMatch = rnForm.querySelector(".js-rnMatch");
const rangeLbl = rnRange.querySelector(".js-rangeLbl");
const rangeInput = rnRange.querySelector(".js-rangeInput");
const numberInput = rnNumber.querySelector(".js-numberInput");
const numberBtn = rnNumber.querySelector(".js-numberBtn");
const matchRecord = rnMatch.querySelector(".js-matchRecord");
const matchResult = rnMatch.querySelector(".js-matchResult");

function handleNumberBtnClicked(event) {
  event.preventDefault();
  const rangeMax = parseInt(rangeInput.value, 10);
  const num = parseInt(numberInput.value, 10);
  const isInRange = num >= 0 && num <= 200;
  if (isInRange) {
    console.log(rangeMax + 1);
    const randomNumber = Math.floor(Math.random() * (rangeMax + 1));
    rangeLbl.innerHTML = `<h3>Generate a number between 0 and ${rangeMax}</h3>`;
    matchRecord.innerHTML = `You chose: ${num}, the machine chose: ${randomNumber}`;
    matchResult.innerHTML = `<h4>You ${
      num === randomNumber ? "won" : "lost"
    }!</h4>`;
  }
}

function init() {
  numberBtn.addEventListener("click", handleNumberBtnClicked);
}

init();
