var app = angular.module("MainApp");

app.service("PeeService", ["$http", function($http){

//http get call to populate drop-down and leader board with database people names
    this.getPeeple = function(){
        return $http.get("http://localhost:8080/people").then(function(response){
            console.log(response.data)
            return response.data
        })
    };
    
//http put call to locate a person using the object id and update their pee count
    this.incrementPee=function(name){
        var id = name._id;
        console.log(id);
        return $http.put("http://localhost:8080/people/"+id, name).then(function(response){
            console.log(response.data)
            });
            return response.data
    }
    
//http call to post a new person to the database
    this.addPeeple = function(name){
        return $http.post("http://localhost:8080/people", name).then(function(response){
            return response.data
        })
    }
    
}])//close service