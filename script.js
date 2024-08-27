window.addEventListener('scroll', function() {
    const menu = document.querySelector('.lists');
    const scrollTop = window.scrollY;

    const opacity = Math.max(0.3, 1 - (scrollTop / 300));
    
    menu.style.opacity = opacity;
});