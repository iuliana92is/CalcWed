//costs per person

(function(window, CALCULATOR, $) {
    'use strict';
     
    var personCosts ={};

    personCosts.calcPersonCosts=function(){

        var spents = 0;
    	
    	var persons = $('#totalNrPersons').html(); 
        var chairs = $('.chair').val();
        var candles = $('.candle').val();
        var menus = $('.menu').val();
        var drinks = $('.drink').val(); 
        var invitations = $('.invitation').val(); 
        var cardTables = $('.cardTable').val(); 
        var cardMs = $('.cardM').val(); 
        var napkins = $('.napkin').val(); 


	    spents = chairs * parseInt(persons) + 
                menus * parseInt(persons) +
                drinks * parseInt(persons) +
                invitations * parseInt(persons) +
                cardTables * parseInt(persons) +
                cardMs * parseInt(persons) +
                napkins * parseInt(persons);  

	    var afisare = $('#personPay').find('#person');
	    
	    afisare.text(spents);  

	 }; 

    CALCULATOR.modules.personCosts = personCosts;

}(window, window.CALCULATOR, window.jQuery));


