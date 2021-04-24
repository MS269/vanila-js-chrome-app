const clock = document.querySelector(".js-clock");

function formatTime(time) {
  if (time < 10) return `0${time}`;
  return time;
}

function getTime() {
  const xmasDate = new Date(`${new Date().getFullYear()}-12-24:00:00:00+0900`);

  // get kst
  const now = new Date();
  const utcNow = now.getTime() + now.getTimezoneOffset() * 60 * 1000;
  const kstOffset = 9 * 60 * 60 * 1000;
  const kstNow = new Date(utcNow + kstOffset);

  // get d-day
  const diff = new Date(xmasDate - kstNow);
  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const s = Math.floor((diff % (1000 * 60)) / 1000);

  clock.innerText = `${formatTime(d)}d ${formatTime(h)}h ${formatTime(
    m
  )}m ${formatTime(s)}s`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
