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

    AOS.init({
        duration: 800,
        offset: 250
    });
});