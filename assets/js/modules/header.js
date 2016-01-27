(function(window, BASEMENT_ESCAPE, $) {
    'use strict';

    var $header = {};

    $header.fixedHeader = function(elem) {

        $(window).scroll(function () {
            if ($(this).scrollTop() > 45) {
                elem.addClass("f-nav");
            } else {
                elem.removeClass("f-nav");
            }
        });
    };

    BASEMENT_ESCAPE.modules.header = $header;

}(window, window.BASEMENT_ESCAPE, window.jQuery));