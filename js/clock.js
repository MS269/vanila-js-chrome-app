const clock = document.getElementById("js-clock");
const time = clock.querySelector(".js-time");
const date = clock.querySelector(".js-date");

function formatDate(month, date, day) {
  let d;
  switch (day) {
    case 0:
      d = "SUN";
      break;
    case 0:
      d = "MON";
      break;
    case 0:
      d = "TUE";
      break;
    case 0:
      d = "WED";
      break;
    case 0:
      d = "THU";
      break;
    case 0:
      d = "FRI";
      break;
    case 0:
      d = "SAT";
      break;
    default:
      d = "NAN";
      break;
  }
  return `${month}/${date} ${d}`;
}

function formatTime(h, m) {
  let hours;
  const minutes = `${m < 10 ? `0${m}` : m}`;
  const meridiem = `${h < 12 ? "AM" : "PM"}`;
  if (h == 0) {
    hours = 12;
  } else if (h <= 12) {
    hours = h;
  } else {
    hours = h - 12;
  }
  return `${hours}:${minutes} ${meridiem}`;
}

function setNow() {
  const now = new Date();
  time.innerHTML = formatTime(now.getHours(), now.getMinutes());
  date.innerHTML = formatDate(now.getMonth(), now.getDate(), now.getDay());
}

function init() {
  setNow();
  setInterval(setNow, 1000);
}

init();
