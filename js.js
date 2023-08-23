// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');
    
    for (const link of navLinks) {
        link.addEventListener('click', smoothScroll);
    }
    
    function smoothScroll(event) {
        event.preventDefault();
        
        const targetId = event.currentTarget.getAttribute('href');
        const targetPosition = document.querySelector(targetId).offsetTop;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 1000; // in milliseconds
        let startTimestamp = null;
        
        function scrollAnimation(timestamp) {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = timestamp - startTimestamp;
            const easeInOutCubic = progress / duration * (2 - progress / duration);
            window.scrollTo(0, startPosition + distance * easeInOutCubic);
            
            if (progress < duration) {
                requestAnimationFrame(scrollAnimation);
            }
        }
        
        requestAnimationFrame(scrollAnimation);
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const ctaButton = document.getElementById('ctaButton');
    ctaButton.addEventListener('click', function() {
        alert('Button clicked!'); // Replace with your desired action
    });
});
