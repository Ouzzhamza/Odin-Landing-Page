const navBar = document.querySelector(".navbar__toggle");
const links = document.querySelector(".navbar__menu");

navBar.addEventListener('click', function() {
    navBar.classList.toggle('is-ative');
    links.classList.toggle('active');
});

var swiper = new Swiper('.swiper__container', {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});