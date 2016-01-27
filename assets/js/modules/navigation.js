(function(window, BASEMENT_ESCAPE, $) {
    'use strict';

    var $navigation = {};

    $navigation.toggleMobileMenu = function(elem) {

        var $nav = $("nav"),
            $menu = $('.content--menu__menu'),
            $logo = $('.content--menu__logo'),
            $fixedMenu = $('#fixed--menu'),
            $li = $menu.find('li'),
            $ul = $menu.find('ul'),
            $content = $('.content--background');


        elem.click(function() {

            $fixedMenu.css({
                "background-color": "rgba(0,0,0,0.8)"
            });
            $menu.css({
                width: "100%",
                float: 'none'
            });
            $li.css({
                float:'none'
            });
            $ul.css({
                'padding-top': '7%',
                'z-index': 2
            });

            $nav.slideDown('slow');

        });
    };

    BASEMENT_ESCAPE.modules.navigation = $navigation;

}(window, window.BASEMENT_ESCAPE, window.jQuery));