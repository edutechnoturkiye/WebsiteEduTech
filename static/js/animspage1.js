document.addEventListener('DOMContentLoaded', function() {
  document.body.style.opacity = '1';
  document.body.style.scale = '1';
  document.body.style.transform = 'translateY(0)';
  setTimeout(function() {
    document.body.style.overflowY = 'auto';
  }, 2000);

/* Space Here */

  const settings = document.getElementById('settings');
  const overlay = document.getElementById('modal-overlay');

  settings.addEventListener('click', () => {
    overlay.classList.add('active');
  });

  var $closebtn = document.querySelector('.close');
  $closebtn.addEventListener('click', function() {
    const overlay = document.getElementById('modal-overlay');
    overlay.classList.remove('active');
  });
});
