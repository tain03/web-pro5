$(document).ready(function() {
    // Initialize AOS animations
    AOS.init({
        once: true,
        mirror: false,
        offset: 50
    });

    // Dark mode toggle functionality
    const darkModeToggle = document.getElementById('darkmode-toggle');

    // Check for saved theme preference or use preferred color scheme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.body.classList.add('dark-theme');
        darkModeToggle.checked = true;
    }

    // Toggle dark mode when the checkbox is clicked
    darkModeToggle.addEventListener('change', function() {
        if (this.checked) {
            document.body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-theme');
            localStorage.setItem('theme', 'light');
        }
    });

    // Add hover effect for skill items with jQuery
    $('.skill-item').hover(
        function() {
            $(this).css({
                'transform': 'translateY(-5px) scale(1.05)',
                'transition': 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)'
            });
        },
        function() {
            $(this).css({
                'transform': '',
                'transition': 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)'
            });
        }
    );

    // Add smooth scrolling to all links
    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500, 'linear');
    });

    // Initialize animations immediately
    $(window).on('load', function() {
        // Page is fully loaded
        console.log('Page loaded');
    });

    // Modal functionality
    const portfolioModal = document.getElementById('portfolioModal');
    const linkedinModal = document.getElementById('linkedinModal');
    const portfolioLink = document.getElementById('portfolioLink');
    const linkedinLink = document.getElementById('linkedinLink');
    const modalCloseButtons = document.querySelectorAll('.modal-close');

    // Function to open a modal
    function openModal(modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }

    // Function to close a modal
    function closeModal(modal) {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Re-enable scrolling
    }

    // Function to close all modals
    function closeAllModals() {
        const modals = document.querySelectorAll('.modal-overlay');
        modals.forEach(modal => {
            closeModal(modal);
        });
    }

    // Open portfolio modal when portfolio link is clicked
    portfolioLink.addEventListener('click', function(e) {
        e.preventDefault();
        openModal(portfolioModal);
    });

    // Open LinkedIn modal when LinkedIn link is clicked
    linkedinLink.addEventListener('click', function(e) {
        e.preventDefault();
        openModal(linkedinModal);
    });

    // Close modal when close buttons are clicked
    modalCloseButtons.forEach(button => {
        button.addEventListener('click', function() {
            closeAllModals();
        });
    });

    // Close modal when clicking outside the modal content
    document.querySelectorAll('.modal-overlay').forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal(modal);
            }
        });
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeAllModals();
        }
    });
});
