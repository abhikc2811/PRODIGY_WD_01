document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('nav-links');
    const nav = document.querySelector('nav');
    const headerText = document.querySelector('header h1');
    const headerTextContent = headerText.textContent;
    let index = 0;

    headerText.textContent = ''; // Clear the header text initially

    function typeEffect() {
        if (index < headerTextContent.length) {
            headerText.textContent += headerTextContent.charAt(index);
            index++;
            setTimeout(typeEffect, 100); // Adjust typing speed by changing the timeout value
        }
    }

    typeEffect(); // Start the typing effect

    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });

    function checkScroll() {
        if (window.scrollY > 0) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', checkScroll);

    // Check scroll position on page load
    checkScroll();
});
