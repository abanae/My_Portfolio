// Mobile Menu
let burgerIcon = document.querySelector(`#burger`);
let navbarMenu = document.querySelector(`#navLinks`);

burgerIcon.addEventListener(`click`, () => {
    navbarMenu.classList.toggle(`is-active`);
});