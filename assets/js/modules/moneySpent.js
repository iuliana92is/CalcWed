(function(window, CALCULATOR, $) {
    'use strict';
     
    var tablesModule ={};

    tablesModule.calcSum=function(){
    	var tables = $('table');
    	var spent = 0;
		for (var i = 0; i < tables.length; i ++){
		    var total = 0;

		    $(tables[i]).find('input').each( function() {
		    	// console.log(typeof parseInt(spent));
		    	// console.log(typeof parseInt($(this).val()));
		    	if(!isNaN(this.value) && this.value.length!=0) {
		    		// console.log(this);
		       		spent = parseInt(spent) + parseInt($(this).val());
		       		// console.log($(this).val());
		       	}
		    }); 
		    // var afisare = $(tables[i]).find('thead').find('tr').find('th').next();

		    var afisare = $(tables[i]).find('.all');
		    afisare.text(spent); 
		    spent = 0;
		}
	}; 

    CALCULATOR.modules.tablesModule = tablesModule;

}(window, window.CALCULATOR, window.jQuery));


	