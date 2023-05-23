const navBar = document.querySelector(".navbar__toggle");
const links = document.querySelector(".navbar__menu");

navBar.addEventListener('click', function() {
    navBar.classList.toggle('is-ative');
    links.classList.toggle('active');
});