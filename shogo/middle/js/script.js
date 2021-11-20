$(function() {
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

    AOS.init({
        duration: 800,
        offset: 250
    });
});