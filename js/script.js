$(function() {

    // Initialize tooltips
    $('[data-toggle="tooltip"]').tooltip()


    // Temporary JS to fake actually active page
    let $link = $('.header #header__main-menu li a');

    $($link[1]).addClass('active-page');

    $link.on('click', (event) => {

        $('.header #header__main-menu li a').each((index, item) => {
            $(item).removeClass('active-page');
        });

        $(event.target).addClass('active-page');
    });
});
