//money spent on gifts

(function(window, CALCULATOR, $) {
    'use strict';
     
    var gifts ={};

    gifts.calcGiftsCosts=function(){
    	// var allCash = $('#gainsCash');
    	var spents = 0;

    	var parent = $('#parent').val();
        var godparent = $('#godparent').val();
        var family = $('#family').val();
        var friend = $('#friend').val();  

       	var giftsMoney =$('#gainsParents').val();	
	    	spents = parseInt(parent) * parseInt($('.giftsParent').val()) +
	    			parseInt(godparent) * parseInt($('.giftsGodparent').val()) +
	    			(parseInt(family) + parseInt(friend)) * parseInt($('.giftsAll').val()); 

	    var afisare = $('#giftsPay').find('#gifts');
	    
	    afisare.text(spents);  

	 }; 

    CALCULATOR.modules.gifts = gifts;

}(window, window.CALCULATOR, window.jQuery));


	