$(() => {

    // Initialize tooltips
    $('[data-toggle="tooltip"]').tooltip()


    // Temporary JS to fake actually active page
    let $link = $('.header #header__main-menu li a');

    let initialPageIndex = 1;

    $($link[initialPageIndex]).addClass('active-page');

    $link.on('click', (event) => {

        $('.header #header__main-menu li a').each((index, item) => {
            $(item).removeClass('active-page');
        });

        $(event.target).addClass('active-page');
    });

    $('#header__main-menu-effect').css('display', 'block');

    $link.on('mouseenter', (event) => animateHover(event.target))
});

window.onresize = () => {
    if (lastHovered)
        animateHover(lastHovered, 0);
}

// Menu items hover effect
let lastHovered;
function animateHover(element, duration) {
    duration = duration === undefined ? 400 : duration;
    let rect = element.getBoundingClientRect();
    let y = document.getElementById('header__main-menu').getBoundingClientRect();

    $('#header__main-menu-effect').stop().animate({
        left:  rect.left,
        // top:   rect.bottom - 1,
        top:   y,
        width: rect.right - rect.left
    }, duration);

    lastHovered = element;
}


