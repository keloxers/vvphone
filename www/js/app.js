angular.module('todo', ['ionic'])

.controller('TodoCtrl', function($scope, $http) {

$http.get('http://www.virasorovirtual.com.ar/api/index.php').
        success(function(data) {
            $scope.greetings = data;
            // $texto = JSON.stringify($scope.greetings[1].title);
            // alert($texto);
        });

$scope.doRefresh = function() {
    alert("ja");
  };





});