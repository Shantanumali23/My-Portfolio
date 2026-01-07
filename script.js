// Initialize Animations (AOS)
AOS.init({
    duration: 1000,
    once: true
});


// Typing Effect for Hero Section
var typed = new Typed('#typing-text', {
    strings: [
        'Computer Engineering Student',
        'GenAI Enthusiast',
        'NSS President',
        'Web Developer'
    ],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
});


// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
