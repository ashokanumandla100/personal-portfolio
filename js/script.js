const navLinks = document.querySelectorAll('nav ul li a');
const mainNavLinks = document.querySelectorAll('.main-nav-wrapper nav a');
const topItem = document.querySelector('.scroll-to-top');
const exp = document.querySelector('.exp');
const corouselPrevBtn = document.querySelector('#corouselPrev');
const corouselNextBtn = document.querySelector('#corouselNext');



$(document).ready(function(){

    const navItems = ["cert", "edu", "skills", "projs", "exp"];

    navItems.forEach((item) => {

        $("section#" + item).mouseenter(function(){
            $('.main-nav-wrapper > nav > a').removeClass('active');
            $(".main-nav-wrapper > nav > a[href=#" + item + "]").addClass('active');
        });

    });
 
 });

window.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll('[role="tab"]');
  
    tabs.forEach(tab => {
      tab.addEventListener("click", changeTabs);
    });
  });
  
  function changeTabs(e) {
    const target = e.target;
    const parent = target.parentNode;
    const grandparent = parent.parentNode;

    parent
      .querySelectorAll('[aria-selected="true"]')
      .forEach(t => t.setAttribute("aria-selected", false));

    target.setAttribute("aria-selected", true);

    grandparent
      .querySelectorAll('[role="tabpanel"]')
      .forEach(p => p.setAttribute("hidden", true));

    grandparent.parentNode
      .querySelector(`#${target.getAttribute("aria-controls")}`)
      .removeAttribute("hidden");
  }
  

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
    window.scrollTo(0, 0);
});

const enableDisableCorousalButtons = () => {
    let activeElement = document.querySelector('.slide.active');
    let nextElement = activeElement.nextElementSibling;
    let prevElement = activeElement.previousElementSibling;

    if (nextElement != null && nextElement.classList.contains('slide')){
        corouselNextBtn.style.cursor = 'pointer';
        corouselNextBtn.style.opacity = '1.0';
        corouselNextBtn.style.background = 'rgba(255, 255, 255, 0.8)';
    } else {
        corouselNextBtn.style.cursor = 'default';
        corouselNextBtn.style.opacity = '0.5';
        corouselNextBtn.style.background = 'rgba(0, 0, 0, 0.5)';
    }
    if (prevElement != null && prevElement.classList.contains('slide')){
        corouselPrevBtn.style.cursor = 'pointer';
        corouselPrevBtn.style.opacity = '1.0';
        corouselPrevBtn.style.background = 'rgba(255, 255, 255, 0.8)';
    } else {
        corouselPrevBtn.style.cursor = 'default';
        corouselPrevBtn.style.opacity = '0.5';
        corouselPrevBtn.style.background = 'rgba(0, 0, 0, 0.5)';
    }    
}

enableDisableCorousalButtons();

corouselNextBtn.addEventListener('click', event => {
    let activeElement = document.querySelector('.slide.active');
    let nextElement = activeElement.nextElementSibling;

    if (nextElement != null && nextElement.classList.contains('slide')) {
        activeElement.classList.remove('active');
        nextElement.classList.add('active');
        enableDisableCorousalButtons();
    }
});

corouselPrevBtn.addEventListener('click', event => {
    let activeElement = document.querySelector('.slide.active');
    let prevElement = activeElement.previousElementSibling;

    if (prevElement != null && prevElement.classList.contains('slide')) {
        activeElement.classList.remove('active');
        prevElement.classList.add('active');
        enableDisableCorousalButtons();
    }
});

window.addEventListener("scroll", function(){
    let y = window.scrollY;
    if (y > 200) {
        topItem.classList.add('show');
    } else {
        topItem.classList.remove('show');
    }
});