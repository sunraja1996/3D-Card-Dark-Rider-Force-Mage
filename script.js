const originalTitle = document.title;

window.addEventListener('blur', () => {
  document.title = 'Come back to my website!';
});

window.addEventListener('focus', () => {
  document.title = originalTitle;
});
