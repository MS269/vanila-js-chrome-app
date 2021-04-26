const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const pendingList = document.querySelector(".js-toDoPendingList");
const finishedList = document.querySelector(".js-toDoFinishedList");

const PENDING_LS = "PENDING";
const FINISHED_LS = "FINISHED";

let pendingAry = [];
let finishedAry = [];
let idCnt = 0;

function switchFinished(event) {
  const btn = event.target;
  const li = btn.parentNode;
  const text = li.querySelector("span").innerText;
  const cleanFinished = pendingAry.filter(function (finished) {
    return finished.id !== parseInt(li.id, 10);
  });
  finishedAry = cleanFinished;
  finishedList.removeChild(li);
  paintPending(text);
  savePending();
  saveFinished();
}

function switchPending(event) {
  const btn = event.target;
  const li = btn.parentNode;
  const text = li.querySelector("span").innerText;
  const cleanPending = pendingAry.filter(function (pending) {
    return pending.id !== parseInt(li.id, 10);
  });
  pendingAry = cleanPending;
  pendingList.removeChild(li);
  paintFinished(text);
  savePending();
  saveFinished();
}

function deleteFinished(event) {
  const btn = event.target;
  const li = btn.parentNode;
  const cleanFinished = finishedAry.filter(function (finished) {
    return finished.id !== parseInt(li.id, 10);
  });
  finishedAry = cleanFinished;
  finishedList.removeChild(li);
  saveFinished();
}

function deletePending(event) {
  const btn = event.target;
  const li = btn.parentNode;
  const cleanPending = pendingAry.filter(function (pending) {
    return pending.id !== parseInt(li.id, 10);
  });
  pendingAry = cleanPending;
  pendingList.removeChild(li);
  savePending();
}

function saveFinished() {
  localStorage.setItem(FINISHED_LS, JSON.stringify(finishedAry));
}

function savePending() {
  localStorage.setItem(PENDING_LS, JSON.stringify(pendingAry));
}

function paintFinished(text) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const delBtn = document.createElement("button");
  const switchBtn = document.createElement("button");
  const newId = ++idCnt;
  const finishedObj = {
    text: text,
    id: newId,
  };
  li.id = newId;
  span.innerText = `${text} `;
  delBtn.innerText = "X";
  delBtn.addEventListener("click", deleteFinished);
  switchBtn.innerText = "^";
  switchBtn.addEventListener("click", switchFinished);
  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(switchBtn);
  finishedList.appendChild(li);
  finishedAry.push(finishedObj);
  saveFinished();
}

function paintPending(text) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const delBtn = document.createElement("button");
  const switchBtn = document.createElement("button");
  const newId = ++idCnt;
  const pendingObj = {
    text: text,
    id: newId,
  };
  li.id = newId;
  span.innerText = `${text} `;
  delBtn.innerText = "X";
  delBtn.addEventListener("click", deletePending);
  switchBtn.innerText = "v";
  switchBtn.addEventListener("click", switchPending);
  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(switchBtn);
  pendingList.appendChild(li);
  pendingAry.push(pendingObj);
  savePending();
}

function handleSubmit(event) {
  event.preventDefault();
  const curValue = toDoInput.value;
  paintPending(curValue);
  toDoInput.value = "";
}

function loadToDos() {
  const loadedPending = localStorage.getItem(PENDING_LS);
  const loadedFinished = localStorage.getItem(FINISHED_LS);
  if (loadedPending !== null) {
    const parsedPending = JSON.parse(loadedPending);
    parsedPending.forEach(function (pending) {
      paintPending(pending.text);
    });
  }
  if (loadedFinished !== null) {
    const parsedFinished = JSON.parse(loadedFinished);
    parsedFinished.forEach(function (finished) {
      paintFinished(finished.text);
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
