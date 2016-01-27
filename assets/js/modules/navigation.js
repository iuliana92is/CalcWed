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
            if(!$nav.hasClass('open')) {
                $fixedMenu.css({
//                    "background-color": "rgba(0,0,0,0.8)"
                    "background-color": "red"
                });
                $menu.css({
                    width: "100%"
                });
               $li.css({
                    float: 'none',
                    'border-right': 'none'
                });
                $ul.css({
                    'padding-top': '7%'
                });
                $logo.css({position: 'fixed', 'margin-top': '0'});

                $nav.slideDown('slow').addClass('open');
            }else {
                $nav.slideUp('slow').removeClass('open');
            }


        });
    };

    BASEMENT_ESCAPE.modules.navigation = $navigation;

}(window, window.BASEMENT_ESCAPE, window.jQuery));