var app= angular.module("MainApp", ["ui.router"]);

app.controller("MainController", ["$scope", "PeeService", function($scope, PeeService){
    $scope.people=[];
    $scope.addFormVisible=false;
    $scope.peeFormVisible=false;
    $scope.newName = '';
    //toggles between add a person and flush
    
    $scope.getPeeple = function(){
        PeeService.getPeeple().then(function(response){
            console.log(response);
            $scope.people.push(response);
        })
    };
    
    $scope.sortPeople = function(groupOfPeople){
        
    }
    
    $scope.incrementPee=function(name){
        PeeService.incrementPee(name).then(function(response){
            $scope.people.push(response);
        })
    }
    
    $scope.addPee=function(name){
        var tempObj = new $scope.PeePerson(name);
        PeeService.addPeeple(tempObj).then(function(response){
            $scope.newName = '';
            alert("Thanks for peeing in the shower.");
        });
    };
    
    $scope.PeePerson = function(name) {
        this.name = name;
        this.peeCount = 1;
    };
    
    
    $scope.getPeeple();
    
}]);//close controller

//control views with ui-router
app.config(function($stateProvider){
    var mainState = {
        name: "main",
        url: "",
        templateUrl: "./templates/logpee.html"
    };
    
    var leaderState = {
        name: "leader",
        url: "/leader",
        templateUrl: "./templates/leader.html"
    }
    
    $stateProvider.state(mainState);
    $stateProvider.state(leaderState);
    
})//close config





