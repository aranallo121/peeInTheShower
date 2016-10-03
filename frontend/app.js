var app= angular.module("MainApp", ["ui.router"]);

app.controller("MainController", ["$scope", "$location", "PeeService", function($scope, $location, PeeService){
    $scope.people=[];
    $scope.newName = '';
//toggles between add a person and flush
    $scope.addFormVisible=false;
    $scope.peeFormVisible=false;
    
//initially makes call to populate people in drop-down lists
    $scope.getPeeple = function(){
        PeeService.getPeeple().then(function(response){
            var sortedPeople = response.sort(function(obj1, obj2){
                return obj2.peeCount - obj1.peeCount;
            })
            $scope.people.push(sortedPeople);
        })
    };
    
//adds +1 to the pee count of existing people and changes view to leader board
    $scope.incrementPee=function(name){
        PeeService.incrementPee(name).then(function(response){
            $scope.people.push(response);
            window.location.reload();
            $location.path("leader");
            $scope.getPeeple();
        });
    }
    
//Adds new people database through peeService.js
    $scope.addPee=function(name){
        var tempObj = new $scope.PeePerson(name);
        PeeService.addPeeple(tempObj).then(function(response){
            alert("Thanks for peeing in the shower.");
            window.location.reload().then(function(response){
                $scope.getPeeple();
                $location.path("leader");
            });
        });
    };
    
//Constructor function to create a new object when somebody enters their name. called in addPeople function. returns a new person
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
    };
    
    $stateProvider.state(mainState);
    $stateProvider.state(leaderState);
    
})//close config





