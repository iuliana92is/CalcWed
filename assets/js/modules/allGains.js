//money recieve at wedding

(function(window, CALCULATOR, $) {
    'use strict';
     
    var allGains ={};

    allGains.calcSumGains=function(){ 
        
    	var gains = 0;

    	var parent = $('#parent').val();
    	var godparent = $('#godparent').val();
    	var family = $('#family').val();
    	var friend = $('#friend').val();  

       	var money =$('#gainsParents').val();	
	    	gains = parseInt(parent) * parseInt($('.gainsParents').val()) +
	    			parseInt(godparent) * parseInt($('.gainsGodparents').val()) +
	    			parseInt(family) * parseInt($('.gainsFamily').val()) +
	    			parseInt(friend) * parseInt($('.gainsFriend').val());
	    			// console.log(money); 

	    var afisare = $('#gainsCash').find('#gains');
	    
	    afisare.text(gains);  

	 }; 

    CALCULATOR.modules.allGains = allGains;

}(window, window.CALCULATOR, window.jQuery));


	