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




.controller('RadioCtrl', function($scope) {



	  // Open our new task modal
	  $scope.audioplay = function() {
				try {
						var myaudio = new Audio('http://208.68.36.162:8000/live');
						myaudio.id = 'playerMyAdio';
						myaudio.play();
					} catch (e) {
						alert('no audio support!');
					}
	  };


		// Open our new task modal
		$scope.audiostop = function() {

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
