const nav = document.querySelector('nav.navbar.custom-hyper-menu');

window.addEventListener('scroll', () => {
  scrollY < 10
    ? nav.classList.remove('collapsed')
    : nav.classList.add('collapsed');
});