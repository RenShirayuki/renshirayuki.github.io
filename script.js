const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
  body.classList.toggle('light-mode');

  if (body.classList.contains('light-mode')) {
    toggleButton.textContent = '🌙 Dark Mode';
  } else {
    toggleButton.textContent = '☀️ Light Mode';
  }
});
