(function(window, BASEMENT_ESCAPE, $) {
    'use strict';

   // variables
    var $header = BASEMENT_ESCAPE.modules.header;

    (function init() {
        // local variables

        $(document).ready(function(){
            var $fixedElem = $('#fixed--menu');
            $header.fixedHeader($fixedElem);
        });

    })();

}(window, window.BASEMENT_ESCAPE, window.jQuery));