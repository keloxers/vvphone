angular.module('todo', ['ionic'])

.controller('TodoCtrl', function($scope, $http) {

  $http.get('http://www.virasorovirtual.com.ar/api/index.php').
          success(function(data) {
              $scope.greetings = data;
          });


$scope.doRefresh = function() {
  $http.get('http://www.virasorovirtual.com.ar/api/index.php').
          success(function(data) {
              $scope.greetings = data;
              $scope.$broadcast('scroll.refreshComplete');
          });    
    
  };




});