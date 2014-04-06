angular.module('todo', ['ionic'])

.controller('TodoCtrl', function($scope, $http) {

$http.get('http://www.virasorovirtual.com.ar/api/index.php').
        success(function(data) {
            $scope.greetings = data;
            // $texto = JSON.stringify($scope.greetings[1].title);
            // alert($texto);
        });


// $http.get('http://www.virasorovirtual.com.ar/api/index.php',
//     {header : {'Content-Type' : 'application/json; charset=UTF-8'}
// }).success(function(data) {
// $scope.greetings = data;
//             $texto = JSON.stringify($scope.greetings[2].title);
//             alert($texto);
// });

  // $scope.tasks = [
  //   { title: 'Collect coins' },
  //   { title: 'Eat mushrooms' },
  //   { title: 'Get high enough to grab the flag' },
  //   { title: 'Find the Princess 1' },
  //   { title: 'Find the Princess 2' },
  //   { title: 'Find the Princess 3' },
  //   { title: 'Find the Princess 4' },
  //   { title: 'Find the Princess 5' }
  // ];



});

