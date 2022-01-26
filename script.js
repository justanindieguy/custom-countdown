// Global Constants
const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

const inputContainer = document.getElementById('input-container');
const countdownForm = document.getElementById('countdown-form');
const dateEl = document.getElementById('date-picker');

const countdownEl = document.getElementById('countdown');
const countdownElTitle = document.getElementById('countdown-title');
const countdownBtn = document.getElementById('countdown-button');
const timeElements = document.querySelectorAll('span');

let countdownTitle = '';
let countdownDate = '';
let countdownValue = Date;

// Set Date Input Minimum with Today's Date
const [today] = new Date().toISOString().split('T');
dateEl.setAttribute('min', today);

// Populate Countdown / Complete UI
const updateDOM = () => {
  const now = new Date().getTime();
  const distance = countdownValue - now;

  const days = Math.floor(distance / DAY);
  const hours = Math.floor((distance % DAY) / HOUR);
  const minutes = Math.floor((distance % HOUR) / MINUTE);
  const seconds = Math.floor((distance % MINUTE) / SECOND);

  // Populate Countdown
  countdownElTitle.textContent = `${countdownTitle}`;
  timeElements[0].textContent = `${days}`;
  timeElements[1].textContent = `${hours}`;
  timeElements[2].textContent = `${minutes}`;
  timeElements[3].textContent = `${seconds}`;

  // Hide Input
  inputContainer.hidden = true;
  // Show Countdown
  countdownEl.hidden = false;
};

// Take Values from Form Input
const updateCountdown = (evt) => {
  evt.preventDefault();
  countdownTitle = evt.srcElement[0].value;
  countdownDate = evt.srcElement[1].value;

  // Get number version of current Date, updateDOM.
  countdownValue = new Date(`${countdownDate}T00:00:00`).getTime();
  updateDOM();
};

// Event Listeners
countdownForm.addEventListener('submit', updateCountdown);
