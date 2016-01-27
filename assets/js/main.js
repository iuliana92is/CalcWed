(function(window, BASEMENT_ESCAPE, $) {
    'use strict';

   // variables
    var $header = BASEMENT_ESCAPE.modules.header,
        $navigation = BASEMENT_ESCAPE.modules.navigation;

    (function init() {
        // local variables

        $(document).ready(function(){
            var $fixedElem = $('#fixed--menu'),
                $hamburger = $('.content--menu__menu img');

            $header.fixedHeader($fixedElem);
            $navigation.toggleMobileMenu($hamburger);
        });

    })();

}(window, window.BASEMENT_ESCAPE, window.jQuery));