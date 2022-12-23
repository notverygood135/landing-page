"use strict";

const navBar = document.getElementById('nav-bar')
const navHover = document.getElementById('nav-hover');
const navItems = Array.from(document.getElementsByClassName('nav-item'));
const navButtonMobile = document.getElementById('nav-button-mobile');
const navMenuMobile = document.getElementById('nav-menu-mobile')
const buttonClasses = Array.from(navButtonMobile.classList);
const menuClasses = Array.from(navMenuMobile.classList);

let scrollPosition = window.scrollY;
window.addEventListener('scroll', function() {
    if (window.scrollY > scrollPosition) {
        hideNavOnScroll();
        scrollPosition = window.scrollY;
    }
    else {
        showNavOnScroll();
        scrollPosition = window.scrollY;
    }
});

function mobileMenuClick() {
    navButtonMobile.classList.toggle('active');
    navMenuMobile.classList.toggle('active');
}

function handleNavHover(item) {
    navHover.classList.toggle('fade-in');
    navHover.style.transform = `translateX(${item.offsetLeft - navHover.offsetLeft}px)`
    navHover.style.width = item.offsetWidth + 'px';
}

function handleNavOff(item) {
    navHover.classList.toggle('fade-in');
    navHover.style.transform = `translateX(0)`
    navHover.style.width = '3rem';
}

function hideNavOnScroll() {
    navBar.classList.add('hidden');
}

function showNavOnScroll() {
    navBar.classList.remove('hidden');
}

navItems.forEach(item => {
    item.onmouseenter = (() => handleNavHover(item))
    item.onmouseleave = (() => handleNavOff(item));
})

navButtonMobile.onclick = mobileMenuClick;