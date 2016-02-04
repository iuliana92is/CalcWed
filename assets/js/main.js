(function(window, BASEMENT_ESCAPE, $) {
    'use strict';

   // variables
    var $navigation = BASEMENT_ESCAPE.modules.navigation;


    (function init() {
        // local variables

        $(document).ready(function(){
            var $hamburger = $('.content--menu__menu img');

            $navigation.toggleMobileMenu($hamburger);
        });

    })();

}(window, window.BASEMENT_ESCAPE, window.jQuery));