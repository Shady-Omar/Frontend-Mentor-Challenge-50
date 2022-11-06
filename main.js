let countdown = new Date("Feb 23, 2023 00:00:00");

let x = setInterval(()=> {
  let now = new Date().getTime();
  let distance = countdown - now

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML = `
  <div id="days">${String(days).padStart(2, '0')}</div>
  <div id="hours">${String(hours).padStart(2, '0')}</div>
  <div id="minutes">${String(minutes).padStart(2, '0')}</div>
  <div id="seconds">${String(seconds).padStart(2, '0')}</div>
  `
}, 1000);

