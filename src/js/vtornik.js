//= partials/jquery.min.js
//= partials/bootstrap.js
//= partials/popper.min.js
//= partials/jquery.mask.min.js
$(function () {
    /*link*/
    $("a[href='#']").click(function () {
        return false;
    });

    $("#menu").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top - 50}, 1500);
    });

    $('#exampleInputPhone1').mask('+0 (000) 000-00-00');

});

