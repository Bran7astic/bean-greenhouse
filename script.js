// COUNTDOWN

var launchDate = new Date("Jul 14, 2024 12:00:00").getTime();

const oneSecond = 1000
const oneMinute = 60 * oneSecond
const oneHour = 60 * oneMinute
const oneDay = 24 * oneHour

function addLeadingZero(num) {
  return num < 10 ? '0'+num : num;
}

var countdown = setInterval( function () {
  var currentTime = new Date().getTime();
  var difference = launchDate - currentTime;

  var days = Math.floor(difference / oneDay);
  var hours = Math.floor((difference % oneDay) / oneHour);
  var minutes = Math.floor((difference % oneHour) / oneMinute);
  var seconds = Math.floor((difference % oneMinute) / oneSecond);

  days = addLeadingZero(days)
  hours = addLeadingZero(hours)
  minutes = addLeadingZero(minutes)
  seconds = addLeadingZero(seconds)
  
  document.getElementById("time").textContent = days + " : " + hours + " : " + minutes + " : " + seconds;

  if (difference < 0) {
    clearInterval(countdown);
    document.getElementById("time").textContent = "Welcome- BeanGreenhouse.aternos.me";
  }
  
})

// MOUSE MOVEMENT

const background = document.getElementById('background');

function moveBackground(event) {
  var xPos = event.clientX / window.innerWidth * 40 + 'px';
  var yPos = -event.clientY / window.innerHeight * 40 + 'px';

  background.style.backgroundPosition = xPos + ' ' + yPos;
}

document.addEventListener('mousemove', moveBackground)
