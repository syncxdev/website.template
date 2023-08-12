const notification = document.querySelector('.notification');
const acceptBtn = document.querySelector('#acceptBtn');
const declineBtn = document.querySelector('#declineBtn');

acceptBtn.addEventListener('click', () => {
  notification.style.display = 'none';
});

declineBtn.addEventListener('click', () => {
  alert('Sie haben die Verwendung von Cookies abgelehnt.');
});
