const countrySelect = document.querySelector(".js-countrySelect");

const COUNTRY_LS = "country";

function saveCountry(text) {
  localStorage.setItem(COUNTRY_LS, text);
}

function handleChange(event) {
  event.preventDefault();
  const curValue = event.target.value;
  saveCountry(curValue);
}

function changeCountry(text) {
  const curOption = countrySelect.querySelector(`option[value=${text}]`);
  curOption.setAttribute("selected", "true");
}

function loadCountry() {
  const country = localStorage.getItem(COUNTRY_LS);
  if (country !== null && country !== "") changeCountry(country);
}

function init() {
  loadCountry();
  countrySelect.addEventListener("change", handleChange);
}

init();
