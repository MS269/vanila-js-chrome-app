const userName = document.getElementById("js-userName");
const nameForm = userName.querySelector(".js-nameForm");
const nameInput = userName.querySelector(".js-nameInput");
const nameBtn = userName.querySelector(".js-nameBtn");
const greeting = userName.querySelector(".js-greeting");

const USERNAME_LS = "USERNAME";

function saveUserName(event) {
  event.preventDefault();
  const name = nameInput.value;
  if (name !== "") {
    localStorage.setItem(USERNAME_LS, name);
    loadUserName();
  }
}

function loadUserName() {
  const loadedUserName = localStorage.getItem(USERNAME_LS);
  if (loadedUserName !== null) {
    nameForm.remove();
    greeting.innerHTML = `Hello, ${loadedUserName}`;
  }
}

function init() {
  loadUserName();
  nameBtn.addEventListener("click", saveUserName);
}

init();
