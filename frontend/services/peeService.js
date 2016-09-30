var app = angular.module("MainApp");

app.service("PeeService", ["$http", function($http){
    
    this.getPeeple = function(){
        return $http.get("http://localhost:8080/people").then(function(response){
            console.log(response.data)
            return response.data
        })
    };
    
    this.incrementPee=function(name){
        var id = name._id;
        console.log(id);
        return $http.put("http://localhost:8080/people/"+id, name).then(function(response){
            console.log(response.data)
            });
            return response.data
    }
    
    this.addPeeple = function(name){
        return $http.post("http://localhost:8080/people", name).then(function(response){
            return response.data
        })
    }
    
}])//close service