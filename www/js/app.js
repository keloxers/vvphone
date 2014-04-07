angular.module('todo', ['ionic'])

.controller('TodoCtrl', function($scope, $http) {

  $http.get('http://www.virasorovirtual.com.ar/api/index.php?api=noticias').
          success(function(data) {
              $scope.noticias = data;
          });


  $scope.doRefresh = function() {
    $http.get('http://www.virasorovirtual.com.ar/api/index.php?api=noticias').
      success(function(data) {
        $scope.noticias = data;
        $scope.$broadcast('scroll.refreshComplete');
      });
  };

});


// .controller('CtrlClasificados', function($scope, $http) {

//   $http.get('http://www.virasorovirtual.com.ar/api/index.php?api=clasificados').
//           success(function(data) {
//               $scope.noticias = data;
//           });


//   $scope.doRefresh = function() {
//     $http.get('http://www.virasorovirtual.com.ar/api/index.php?api=clasificados').
//       success(function(data) {
//         $scope.noticias = data;
//         $scope.$broadcast('scroll.refreshComplete');
//       });
//   };

// });



