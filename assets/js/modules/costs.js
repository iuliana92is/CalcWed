(function(window, CALCULATOR, $) {
    'use strict';
     
    var allSpent ={};

    allSpent.calcCostTotal=function(){
        var tables = $('table');
        var money = 0; 
 
        money = parseInt($('#bride').text()) +
                parseInt($('#groom').text()) +
                parseInt($('#taxes').text()) +
                parseInt($('#arrangements').text()) +
                parseInt($('#transport').text()) +
                parseInt($('#music').text()) +
                parseInt($('#photo').text()) +
                parseInt($('#gifts').text()) +
                parseInt($('#other').text()) +
                parseInt($('#restaurant').text()) +
                parseInt($('#person').text()); 

        var totalCosts = $('#allCosts').find('#costsTotal');
        totalCosts.html(money);   
 
    }; 

    CALCULATOR.modules.allSpent = allSpent;

}(window, window.CALCULATOR, window.jQuery));


    