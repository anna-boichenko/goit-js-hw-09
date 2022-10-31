function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body");
const buttonStart = document.querySelector("button[data-start]");
const buttonStop = document.querySelector("button[data-stop]");
let timerId = null;


// buttonStart.addEventListener("click", colorChange);
// buttonStart.addEventListener("click", colorStop)

// function colorChange() {
//   timerId = setInterval(() => {
//     body.style.backgroundColor = getRandomHexColor();
//   }, 1000);
// }
buttonStart.addEventListener("click", () => {
  timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor()
  }, 1000);

  buttonStart.disabled = true;
  buttonStop.disabled = false;
});

buttonStop.addEventListener("click", () => {
  clearInterval(timerId);
  
  buttonStop.disabled = true;
  buttonStart.disabled = false;
});
// function colorStop() {
//     clearInterval(timerId);
// }
