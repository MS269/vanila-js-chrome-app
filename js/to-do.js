const toDo = document.getElementById("js-toDo");
const toDoForm = toDo.querySelector(".js-toDoForm");
const toDoInput = toDo.querySelector(".js-toDoInput");
const toDoAdd = toDo.querySelector(".js-toDoAdd");
const toDoList = toDo.querySelector(".js-toDoList");

const TODOS_LS = "TODOS";

let toDos = [];
let cnt = 0;

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function handleDeleteButtonClick(event) {
  event.preventDefault();
  const li = event.target.parentNode;
  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id, 10);
  });
  toDos = cleanToDos;
  li.remove();
  saveToDos();
}

function paintToDo(text) {
  toDoInput.value = "";
  const li = document.createElement("li");
  const span = document.createElement("span");
  const delBtn = document.createElement("button");
  const newId = ++cnt;
  const toDoObj = {
    text: text,
    id: newId,
  };
  li.id = newId;
  span.innerText = `${text} `;
  delBtn.innerText = "x";
  delBtn.addEventListener("click", handleDeleteButtonClick);
  li.appendChild(span);
  li.appendChild(delBtn);
  toDoList.appendChild(li);
  toDos.push(toDoObj);
  saveToDos();
}

function handleToDoAddClick(event) {
  event.preventDefault();
  const text = toDoInput.value;
  if (text !== "") paintToDo(text);
}

function loadToDos() {
  const loadedToDoS = localStorage.getItem(TODOS_LS);
  if (loadedToDoS !== null) {
    const parsedToDos = JSON.parse(loadedToDoS);
    parsedToDos.forEach(function (toDo) {
      paintToDo(toDo.text);
    });
  }
}

function init() {
  loadToDos();
  toDoAdd.addEventListener("click", handleToDoAddClick);
}

init();
