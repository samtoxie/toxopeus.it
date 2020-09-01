function docReady(fn) {
    if (document.readyState === "complete" || document.readyState === "interactive") {
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}



docReady(function() {

    var menu = $("#navigation");

    function ChangeNavBg() {
        if (menu.hasClass('scroll') && window.pageYOffset < 50) {
            menu.removeClass('scroll');
        } else if (!menu.hasClass('scroll') && window.pageYOffset > 50) {
            menu.addClass('scroll');
        }
    }

    ChangeNavBg();
    window.onscroll = function() {
        ChangeNavBg();
    }

    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();

        var targetEle = this.hash;
        var $targetEle = $(targetEle);

        $('html, body').stop().animate({
            'scrollTop': ($targetEle.offset().top - 60)
        }, 400, 'swing', function() {
            window.location.hash = targetEle - 60;
        });
        $('.navbar-collapse').collapse('hide');
    });

    $('#footer').append(`<p>Copyright © Sam Toxopeus 2019-${(new Date()).getFullYear()}</p>`)
});