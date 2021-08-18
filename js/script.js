$(() => {

    // Initialize tooltips
    $('[data-toggle="tooltip"]').tooltip();


    // Fakes actually active page
    let $link = $('.header #header__main-menu li a');

    $($link[1]).addClass('active-page');

    $link.on('click', (event) => {

        $('.header #header__main-menu li a').each((index, item) => {
            $(item).removeClass('active-page');
        });

        $(event.target).addClass('active-page');
    });


    // Initialize menu items hover effect
    $effectElement = $('#header__main-menu-effect');

    $('#header__main-menu').on('mouseleave', () => {
        $effectElement.stop().animate({
            opacity: 0
        }, 300, 'swing');
    });

    $link.on('mouseenter', (event) => animateHover(event.target));
});

window.onresize = () => $effectElement.css('opacity', 0);


// Menu items hover effect
let $effectElement;
function animateHover(element) {
    let duration;

    if ($effectElement.css('opacity') < .4) {
        $effectElement.css('opacity', .4);
        duration = 0;
    }
    else
        duration = 400;

    let rect = element.getBoundingClientRect();
    let y = document.getElementById('header__main-menu').getBoundingClientRect();

    $effectElement.stop().animate({
        left:  rect.left,
        top:   y * 2,
        width: rect.right - rect.left
    }, duration);
}


