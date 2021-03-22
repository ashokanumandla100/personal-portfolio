const navLinks = document.querySelectorAll('nav ul li a');
const mainNavLinks = document.querySelectorAll('.main-nav-wrapper nav a');

const addRemoveActiveClass = (list, event) => {
    list.forEach(link => {
        link.classList.remove('active');
    })
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