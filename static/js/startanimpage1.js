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