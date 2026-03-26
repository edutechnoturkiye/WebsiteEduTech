document.addEventListener("DOMContentLoaded", () => {
  const settings = document.getElementById('settings');

  const overlay = document.getElementById('modal-overlay');

  settings.addEventListener('click', () => {
    overlay.classList.add('active');
  });
});