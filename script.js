const inputContainer = document.getElementById('input-container');
const countdownForm = document.getElementById('countdown-form');
const dateEl = document.getElementById('date-picker');

let countdownTitle = '';
let countdownDate = '';

// Set Date Input Minimum with Today's Date
const [today] = new Date().toISOString().split('T');
dateEl.setAttribute('min', today);

// Take Values from Form Input
const updateCountdown = (evt) => {
  evt.preventDefault();
  countdownTitle = evt.srcElement[0].value;
  countdownDate = evt.srcElement[1].value;
};

// Event Listeners
countdownForm.addEventListener('submit', updateCountdown);
