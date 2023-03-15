window.onload = function() {
    const hamburger = document.querySelector('.hamburger');
    const mobile_menu = document.querySelector('.mobile-links');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
    });

    mobile_menu.addEventListener('click', function(){
        mobile_menu.classList.toggle('is-active');
    })
} 