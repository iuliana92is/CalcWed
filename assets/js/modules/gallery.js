(function(window, BASEMENT_ESCAPE, $) {
    'use strict';

    var $gallery = {};

    $gallery.aaa = function() {

        if (!isMobile()) {

		    $("a.lightbox").click(function(e) {
		        $("body").css("overflow-y", "hidden");
		        $('<div id="lightbox_overlay"></div>')
		            .css("top", $(document).scrollTop())
		            .css({
		                "opacity" : "0",
		                "z-index" : "10"
		            }) 
		            .animate({ opacity: 0.5 }, "slow")
		            .appendTo("body");
		        $('<div id="lightbox_container"></div>')
		            .hide()
		            .appendTo("body");
		        $('<img />')
		            .attr("src", $(this).attr("href"))
		            .load(positionLightboxImage)
		            .click(removeLightbox)
		            .appendTo("#lightbox_container");
		        return false;
		    });
		    function positionLightboxImage() {
		        var top = ($(window).height() - $("#lightbox_container").height()) / 2;
		        var left = ($(window).width() - $("#lightbox_container").width()) / 2;
		        $("#lightbox_container").css({
		            top: top + $(document).scrollTop(),
		            left: left
		        }).fadeIn();
		    }
		    function removeLightbox() {
		        $("#lightbox_overlay, #lightbox_container")
		            .fadeOut("slow", function() {
		                $(this).remove();
		                $("body").css("overflow-y", "auto");
		            });
		    }
		} 


		function isMobile(){

		    var isDevice = false;

		    if($(window).width() <= 768){
		    	console.log('width is lower than 768px');
		    	$("a.lightbox").removeAttr("href");

		        isDevice = true; 
		    }
		    return isDevice;
		}
    };

    BASEMENT_ESCAPE.modules.gallery = $gallery;

}(window, window.BASEMENT_ESCAPE, window.jQuery));


 