window.addEventListener("load", function () {
  const body = document.body;
  body.style.opacity = 0;

  let start = null;
  const duration = 1750;

  function animate(timestamp) {
    if (!start) start = timestamp;
    let progress = timestamp - start;
    let opacity = Math.min(progress / duration, 1);
    body.style.opacity = opacity;

    if (progress < duration) {
      requestAnimationFrame(animate);
    }
  }

  requestAnimationFrame(animate);
});

/* Space Here */

$(function() {

  var $modal = $('.modal-frame');
  var $overlay = $('.modal-overlay');

  $modal.on('animationend webkitAnimationEnd oanimationend MSAnimationEnd', function() {
    if ($modal.hasClass('state-leave')) {
      $modal.removeClass('state-leave');
    }
  });

  $('.close').on('click', function() {
    $overlay.removeClass('state-show');
    $modal.removeClass('state-appear').addClass('state-leave');
  });

  $('.open').on('click', function() {
    $overlay.addClass('state-show');
    $modal.removeClass('state-leave').addClass('state-appear');
  });

});