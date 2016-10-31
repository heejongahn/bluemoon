const navbarToggle = document.getElementsByClassName('navbar-toggle')[0];
const navbarBody = document.getElementsByClassName('navbar-body')[0];

navbarToggle.addEventListener('click', (e) => {
  navbarBody.style.display =
    (navbarBody.style.display === 'flex') ? 'none' : 'flex';
})
