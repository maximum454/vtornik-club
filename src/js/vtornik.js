//= partials/jquery.min.js
//= partials/bootstrap.js
//= partials/popper.min.js
//= partials/jquery.mask.min.js
$(function () {
    $("#menu").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top - 50}, 1500);
    });

    $('#exampleInputPhone1').mask('+0 (000) 000-00-00');

    $('.js-edit').on('click', function () {
        $('.table__input').prop('disabled', function(i, v) { return !v; });
    });

    $.fn.toggleDisabled = function() {
        return this.each(function() {
            var $this = $(this);
            if ($this.attr('disabled')) $this.removeAttr('disabled');
            else $this.attr('disabled', 'disabled');
        });
    };

    $('.js-tournament').on('click', function () {
       $(this).toggleClass('ok');
    });
});

var main= document.getElementById("main").clientHeight-150;
var newTournament= document.getElementById("new-tournament");

newTournament.style.height = main+"px";

