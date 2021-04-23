const xmasDate = new Date("2021-12-24:00:00:00+0900");

const clockContainer = document.querySelector(".js-clock");
const clockTime = clockContainer.querySelector("h3");

function formatTime(time) {
  if (time < 10) return `0${time}`;
  return time;
}

function getTime() {
  // get korea time
  const now = new Date();
  const utcNow = now.getTime() + now.getTimezoneOffset() * 60 * 1000;
  const kstOffset = 9 * 60 * 60 * 1000;
  const kstNow = new Date(utcNow + kstOffset);

  const distance = xmasDate.getTime() - kstNow.getTime();
  const d = Math.floor(distance / (1000 * 60 * 60 * 24));
  const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const s = Math.floor((distance % (1000 * 60)) / 1000);

  clockTime.innerText = `${formatTime(d)}d ${formatTime(h)}h ${formatTime(
    m
  )}m ${formatTime(s)}s`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
