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

  var $overlay = $('.modal-overlay');

  $('.open').on('click', function() {
    var modalID = $(this).data('modal');
    var $modal = $('#' + modalID);

    $overlay.addClass('state-show');
    $modal.removeClass('state-leave').addClass('state-appear');
  });

  $('.close').on('click', function() {
    var $modal = $(this).closest('.modal-frame');

    $overlay.removeClass('state-show');
    $modal.removeClass('state-appear').addClass('state-leave');
  });

  $('.modal-frame').on('animationend webkitAnimationEnd oanimationend MSAnimationEnd', function() {
    $(this).removeClass('state-leave');
  });

});