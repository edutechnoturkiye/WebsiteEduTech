document.addEventListener('DOMContentLoaded', function() {
  document.body.style.opacity = '1';
  document.body.style.scale = '1';
  document.body.style.transform = 'translateY(0)';
  setTimeout(function() {
    document.body.style.overflowY = 'auto';
  }, 2000);
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