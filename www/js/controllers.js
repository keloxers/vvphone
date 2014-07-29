angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $http) {
	$http.get('http://www.virasorovirtual.com/api/index.php?api=noticias').
          success(function(data) {
              $scope.noticias = data;
          });




  $scope.doRefresh = function() {
    $http.get('http://www.virasorovirtual.com/api/index.php?api=noticias').
      success(function(data) {
        $scope.noticias = data;
        $scope.$broadcast('scroll.refreshComplete');
      }).
      error(function(){
        alert("error");
    });
  };
})




.controller('FriendsCtrl', function($scope, $http) {

  $http.get('http://www.virasorovirtual.com/api/twittersvv.php').
          success(function(data) {
              $scope.twitters = data;
          });




  $scope.doRefresh = function() {
    $http.get('http://www.virasorovirtual.com/api/twittersvv.php').
      success(function(data) {
        $scope.twitters = data;
        $scope.$broadcast('scroll.refreshComplete');
      })
  };

})



.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})





.controller('AccountCtrl', function($scope, $http) {
	$http.get('http://www.virasorovirtual.com/api/index.php?api=clasificados').
			success(function(data) {
			$scope.clasificados = data;
	});


	$scope.doRefresh = function() {
	    $http.get('http://www.virasorovirtual.com/api/index.php?api=clasificados').
	      success(function(data) {
	        $scope.clasificados = data;
	        $scope.$broadcast('scroll.refreshComplete');
	      });
	};
});
