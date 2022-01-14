const inputContainer = document.getElementById('input-container');
const countdownForm = document.getElementById('countdown-form');
const dateEl = document.getElementById('date-picker');

// Set Date Input Minimum with Today's Date
const [today] = new Date().toISOString().split('T');
dateEl.setAttribute('min', today);
