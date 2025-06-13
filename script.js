// script.js

function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12;
  hours = hours ? hours : 12;

  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
  document.getElementById('clock').innerText = timeString;

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const dateString = now.toLocaleDateString('en-US', options);
  document.getElementById('date').innerText = dateString;
}

// Dark/Light Mode Toggle
document.getElementById('toggleMode').addEventListener('click', () => {
  document.body.classList.toggle('light');
  document.body.classList.toggle('dark');
});

// Initial update and set interval
updateClock();
setInterval(updateClock, 1000);
