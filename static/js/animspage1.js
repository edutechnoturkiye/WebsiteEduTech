document.addEventListener('DOMContentLoaded', function() {
  document.body.style.opacity = '1';
  document.body.style.scale = '1';
  document.body.style.transform = 'translateY(0)';
  setTimeout(function() {
    document.body.classList.remove('m-open');
  }, 500);

// Space Here 

// Settings Modal

  const settings = document.getElementById('settings');
const overlay = document.getElementById('modal-overlay');
const closeBtn = document.querySelector('.close');console.log("Debug Mode Disabled")

settings.addEventListener('click', () => {
  overlay.classList.add('active');
  document.body.classList.add('m-open');
});

closeBtn.addEventListener('click', () => {
  overlay.classList.remove('active');
  document.body.classList.remove('m-open');
});

overlay.addEventListener('click', (e) => {
  if (e.target === overlay) {
    overlay.classList.remove('active');
    document.body.classList.remove('m-open');
  }
});

});
