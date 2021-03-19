const navLinks = document.querySelectorAll('nav a');


addRemoveActiveClass = (event) => {
    navLinks.forEach(link => {
        link.classList.remove('active');
    })
    event.target.classList.add('active');
}

navLinks.forEach(link => {
    link.addEventListener('click', event => {
        addRemoveActiveClass(event);
    });
});