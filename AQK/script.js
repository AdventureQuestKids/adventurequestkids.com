// Mobile Navigation Toggle
const nav = document.querySelector('nav');
const navLinks = document.querySelector('.nav-links');
const navToggle = document.createElement('div');

navToggle.classList.add('nav-toggle');
navToggle.innerHTML = '☰';
nav.appendChild(navToggle);

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-active');
});
