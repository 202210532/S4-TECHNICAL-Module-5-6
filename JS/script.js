document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  body.style.transition = 'opacity 1.062s';
  body.style.opacity = 0;

  window.onload = () => {
    body.style.opacity = 1;
  };
});