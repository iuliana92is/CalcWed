(function(window, CALCULATOR, $) {
    'use strict';

   // variables


    var tables = CALCULATOR.modules.tablesModule;
    var table = CALCULATOR.modules.allGains;

    (function init() {
        // local variables

        $(document).on('keyup', 'input', function(){
            CALCULATOR.modules.tablesModule.calcSum(); 
        }); 
    })();


     (function init() {
        // local variables

        $(document).on('keyup', 'input', function(){ 
            CALCULATOR.modules.allGains.calcSumGains();
        }); 
    })();

    (function init() {
        // local variables

        $(document).on('keyup', 'input', function(){ 
            CALCULATOR.modules.gifts.calcGiftsCosts();
        }); 
    })();

    (function init() {
        // local variables

        $(document).on('keyup', 'input', function(){ 
            CALCULATOR.modules.personCosts.calcPersonCosts();
        }); 
    })();

    (function init() {
        // local variables

        $(document).on('keyup', 'input', function(){ 
            CALCULATOR.modules.allSpent.calcCostTotal();
        }); 
    })();

 	(function init() {
        // local variables

        $(document).on('keyup', 'input', function(){ 
            CALCULATOR.modules.allProfits.calcProfits();
        }); 
    })();


}(window, window.CALCULATOR, window.jQuery));
 


