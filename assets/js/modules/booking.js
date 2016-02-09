(function(window, BASEMENT_ESCAPE, $) {
    'use strict';
    var $booking = {};

    $booking.aaa = function() {
    var row = $('#calendar').find('tbody').find('td'); 
    // console.log(row);	

		$(function() {
	        $( "#datepicker" ).datepicker({
	            altFormat: "yy-mm-dd",
	            minDate: new Date(),
	            hideIfNoPrevNext: true,
	            dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
	            onSelect: function(){
	                $('#calendar').css({
	                	"display" : "table"
	                })
	                 .animate({ opacity: 1 }, "slow")
	                // 			.append($("<tr></tr>")
	                //                 .append($("<td></td>").html("yolo!!")
	                //         )
	                // );
	            }
	        });
	    })

	    row.each(function() {
			$(this).click(function() {
		        $('#online--booking').css({
		        	'display' : "block"
		        })
		        .animate({ 
		        	opacity: 0.9 
		        }, "slow")

		    });

	 		console.log(this);


		    $('.btn-system').click(function() {
		        row.css({
		        	'background-color' : 'red'
		        })
		        console.log(this);
		    });
		}); 

    };

    BASEMENT_ESCAPE.modules.booking = $booking;

}(window, window.BASEMENT_ESCAPE, window.jQuery));


	