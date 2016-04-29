angular.module('promiseModule')
.service('promiseService',['$http','$timeout',function($http,$timeout){
  
  this.someText="Promise me";
  this.getUsers=function(){
    var values;
    $http.get('./promises/json/customer.json')
    .then(function(response){
     values=response.data;
    console.log(values);
    return values;    
    },function(err){
        console.log(err);
      });
  };
  
}]);