var app = angular.module("MainApp");

app.filter("gallons", function(){
    return function(number){
        var gallons = 1.6*number;
        return gallons.toFixed(2);
    }
});
