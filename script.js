const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".minute-hand");
const secondHand = document.querySelector(".second-hand");

function setClock() {
  const now = new Date();

  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const secondsDegrees = (seconds / 60) * 360;
  const minutesDegrees = (minutes / 60) * 360 + (seconds / 60) * 6;
  const hoursDegrees = ((hours % 12) / 12) * 360 + (minutes / 60) * 30;

  secondHand.style.transform = `translateX(-50%) rotate(${secondsDegrees}deg)`;
  minuteHand.style.transform = `translateX(-50%) rotate(${minutesDegrees}deg)`;
  hourHand.style.transform = `translateX(-50%) rotate(${hoursDegrees}deg)`;
}

setClock();
setInterval(setClock, 1000);

