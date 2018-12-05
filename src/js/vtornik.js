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

    jQuery.fn.lightTabs = function(options){

        var createTabs = function(){
            tabs = this;
            i = 0;

            showPage = function(i){
                $(tabs).find(".tab").hide();
                $(tabs).find(".tab").eq(i).show();
                $(tabs).find(".table__tab").removeClass("active");
                $(tabs).find(".table__tab").eq(i).addClass("active");
            }

            showPage(0);

            $(tabs).find(".table__tab").each(function(index, element){
                $(element).attr("data-page", i);
                i++;
            });

            $(tabs).find(".table__tab").click(function(){
                showPage(parseInt($(this).attr("data-page")));
            });
        };
        return this.each(createTabs);
    };
    $(".tabs").lightTabs();
});

