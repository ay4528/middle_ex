$(function () {
    //accordion
    $('.faq-list').click(function() {
        var $answer = $(this).find('.answer');

        if ($answer.hasClass('open')) {
            $answer.removeClass('open');
            $answer.slideUp();
        } else {
            $answer.addClass('open');
            $answer.slideDown();
        }
    });

    //smooth scroll
    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 350,
        header: '#header'
    });

    //submit
    $('#submit').prop('disabled', true);

    $('#check').click(function() {
        if ($(this).prop('checked') == false) {
            $('#submit').prop('disabled', true)
        } else {
            $('#submit').prop('disabled', false);
        }
    });

    //humberger
    $('.openbtn').click(function() {
        $(this).toggleClass('active');
        $('.menu').toggleClass('active');
    });

    AOS.init({
        duration: 800,
        offset: 250
    });
});