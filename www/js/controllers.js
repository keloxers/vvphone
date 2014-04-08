angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $http) {
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
})




.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})



.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})





.controller('AccountCtrl', function($scope, $http) {
	$http.get('http://www.virasorovirtual.com.ar/api/index.php?api=clasificados').
			success(function(data) {
			$scope.clasificados = data;
	});


	$scope.doRefresh = function() {
	    $http.get('http://www.virasorovirtual.com.ar/api/index.php?api=clasificados').
	      success(function(data) {
	        $scope.clasificados = data;
	        $scope.$broadcast('scroll.refreshComplete');
	      });
	};
});
