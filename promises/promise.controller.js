angular.module('promiseModule',[]);
angular.module('promiseModule')
.controller('promiseCtrl',['$scope','promiseService','$timeout',function($scope,promiseService,$timeout){
  
  $scope.PromisePage=promiseService.someText;
  $scope.data=promiseService.getUsers();
  console.log($scope.data);
  
}]);