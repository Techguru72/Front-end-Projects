document.addEventListener('DOMContentLoaded', () => {

    // Initialize Animate on Scroll (AOS) library
    AOS.init({
        duration: 1000, // Animation duration in milliseconds
        once: true,     // Whether animation should happen only once
        offset: 100,    // Offset (in px) from the original trigger point
    });

    // Mobile Menu Functionality
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    const menuIcon = mobileMenuBtn.querySelector('i');
    const navLinks = document.querySelectorAll('.nav-menu a');

    // Toggle menu on button click
    mobileMenuBtn.addEventListener('click', () => {
        toggleMenu();
    });

    // Close menu when a navigation link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                toggleMenu();
            }
        });
    });
    
    // Function to toggle the menu and icon
    function toggleMenu() {
        navMenu.classList.toggle('active');
        
        // Change icon from bars to close (X) and back
        if (navMenu.classList.contains('active')) {
            menuIcon.classList.remove('fa-bars');
            menuIcon.classList.add('fa-times');
            mobileMenuBtn.setAttribute('aria-label', 'Close menu');
        } else {
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars');
            mobileMenuBtn.setAttribute('aria-label', 'Open menu');
        }
    }

    // Optional: Add a subtle background to the header on scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(20, 20, 20, 0.7)';
        } else {
            header.style.background = 'var(--glass)';
        }
    });

});