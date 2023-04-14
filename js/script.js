const container = document.querySelector('.hamburger-container');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
    container.classList.toggle('show-menu')
});