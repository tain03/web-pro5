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
});
