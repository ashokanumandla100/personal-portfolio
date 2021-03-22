const navLinks = document.querySelectorAll('nav ul li a');
const mainNavLinks = document.querySelectorAll('.main-nav-wrapper nav a');
const topItem = document.querySelector('.scroll-to-top a');
const exp = document.querySelector('.exp');

const addRemoveActiveClass = (list, event) => {
    list.forEach(link => {
        link.classList.remove('active');
    });
    event.target.classList.add('active');
}

navLinks.forEach(link => {
    link.addEventListener('click', event => {
        addRemoveActiveClass(navLinks, event);
    });
});

mainNavLinks.forEach(link => {
    link.addEventListener('click', event => {
        addRemoveActiveClass(mainNavLinks, event);
    });
});

topItem.addEventListener('click', function() {
    mainNavLinks.forEach(link => {
        link.classList.remove('active');
    });
    exp.classList.add('active');
});