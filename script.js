const scroll = document.querySelector('#scroll-down');




window.addEventListener('scroll', () => {
  if (window.scrollY > 290) {
    scroll.classList.remove('show');
  } else {
    scroll.classList.add('show');
  }
});