let digital = document.querySelector(".digital");
let seconds = document.querySelector(".seconds-indicator");
let minutes = document.querySelector(".minutes-indicator");
let hours = document.querySelector(".hours-indicator");

function showTime() {
  let now = new Date();
  let hour = now.getHours();
  let min = now.getMinutes();
  let sec = now.getSeconds();

  digital.innerHTML = `${putZero(hour)}:${putZero(min)}:${putZero(sec)}`;
  //
  // Manipular os degrees (no css) via js
  let secDegree = (360 / 60) * sec - 90;
  let minDegree = (360 / 60) * min - 90;
  let hourDegree = (360 / 12) * hour - 90;

  seconds.style.transform = `rotate(${secDegree}deg)`;
  minutes.style.transform = `rotate(${minDegree}deg)`;
  hours.style.transform = `rotate(${hourDegree}deg)`;
}

function putZero(el) {
  return el < 10 ? `0${el}` : el;
}

setInterval(showTime, 1000);
