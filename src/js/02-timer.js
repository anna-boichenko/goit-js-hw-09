import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
let finalDate = 0;

const input = document.querySelector('input#datetime-picker');
const buttonStart = document.querySelector('button[data-start]')

const timer = document.querySelector('.timer');
// const field = document.querySelector('.field');
const days = document.querySelector('span[data-days]');
const hours = document.querySelector('span[data-hours]');
const minutes = document.querySelector('span[data-minutes]');
const seconds = document.querySelector('span[data-seconds]');

buttonStart.addEventListener("click", startTimer);

// flatpickr(input, options);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      if (selectedDates[0] < new Date()) {
          window.alert("Please choose a date in the future");
          buttonStart.disabled = true;
      } else {
        buttonStart.disabled = false;
    }
  },
};

flatpickr(input, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}


function startTimer() {
    const timerId = setInterval(() => {
        // if (finalDate - new Date().getTime() < 0) {
        //     clearInterval(timerId);
        // }
        let timeCountdown = new Date(input.value) - new Date();
        if (timeCountdown >= 0) {
            let time = convertMs(timeCountdown);
            days.textContent = addLeadingZero(time.days);
            hours.textContent = addLeadingZero(time.hours);
            minutes.textContent = addLeadingZero(time.minutes);
            seconds.textContent = addLeadingZero(time.seconds);
        }
        else {
            clearInterval(timerId);
        }
    }, 1000);
    buttonStart.disabled = true;
    input.disabled = true;
}
function addLeadingZero(value) {
    return value.toString().padStart(2, '0');
}