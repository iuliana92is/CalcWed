(function(window, CALCULATOR, $) {
    'use strict';
     
    var allProfits ={};

    allProfits.calcProfits=function(){
        var profit = 0;
        var gains = $('#gains');

        profit = (gains.text()) - $('#allCosts').find('#costsTotal').html();
        console.log(profit);

        var allProfit = $('#allCosts').find('#profit');
        allProfit.text(profit);
    }; 

    CALCULATOR.modules.allProfits = allProfits;

}(window, window.CALCULATOR, window.jQuery));


    