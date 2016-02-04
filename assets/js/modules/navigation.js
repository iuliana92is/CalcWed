(function(window, BASEMENT_ESCAPE, $) {
    'use strict';

    var $navigation = {};

    $navigation.toggleMobileMenu = function(elem) {

        var $fixedMenu = $('#fixed--menu'),
            $firstNav = $('#fixed--menu > nav');



        elem.click(function() {
            if(!$firstNav.hasClass('open')) {
                $fixedMenu.css({
                    "background-color": "rgba(0,0,0,0.8)"
                });
                $firstNav.addClass('open');
                $firstNav.find('ul').addClass('open--ul');
                $firstNav.removeClass('closed');
                $firstNav.find('ul').removeClass('closed--ul');
            }else {
                $firstNav.removeClass('open');
                $firstNav.find('ul').removeClass('open--ul');
                $firstNav.addClass('closed');
                $firstNav.find('ul').addClass('closed--ul');
            }


        });
    };

    BASEMENT_ESCAPE.modules.navigation = $navigation;

}(window, window.BASEMENT_ESCAPE, window.jQuery));