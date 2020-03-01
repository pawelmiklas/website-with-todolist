const menuIcon = document.querySelector('#menu-icon');
const navContent = document.querySelector('.nav-content__links');

menuIcon.addEventListener('click', () => {
  navContent.classList.toggle('nav-content-links--open');
})

menuIcon.removeEventListener();
