(function(window, CALCULATOR, $) {
    'use strict';
     
    var tablesModule ={};

    tablesModule.calcSum=function(){
    	
    	var tables = $('table');
    	var spent = 0;
		for (var i = 0; i < tables.length; i ++){

		    $(tables[i]).find('input').each( function() { 
		    	if(!isNaN(this.value) && this.value.length!=0) { 
		       		spent = parseInt(spent) + parseInt($(this).val()); 
		       	}
		    });  

		    var afisare = $(tables[i]).find('.all');
		    afisare.text(spent); 
		    spent = 0;
		}
	}; 

    CALCULATOR.modules.tablesModule = tablesModule;

}(window, window.CALCULATOR, window.jQuery));


	