const days = document.querySelector(".counter .card.days .number");
const hours = document.querySelector(".counter .card.hours .number");
const minutes = document.querySelector(".counter .card.minutes .number");
const seconds = document.querySelector(".counter .card.seconds .number");

let target = new Date("2025").getTime();

setInterval(() => {
  let now = new Date().getTime();

  let diff = target - now;
  days.innerHTML = String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(
    3,
    "0"
  );

  hours.innerHTML = String(
    Math.floor((diff % (1000 * 60 * 60 * 24)) / 1000 / 60 / 60)
  ).padStart(2, "0");

  minutes.innerHTML = String(
    Math.floor((diff % (1000 * 60 * 60)) / 1000 / 60)
  ).padStart(2, "0");

  seconds.innerHTML = String(Math.floor((diff % (1000 * 60)) / 1000)).padStart(
    2,
    "0"
  );
}, 1000);
