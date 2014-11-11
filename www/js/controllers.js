angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};
  $scope.clasiData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });


  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function($http) {
    // console.log('Doing login', $scope.loginData);


    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };


})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})


.controller('NoticiasCtrl', function($scope, $http) {
  $http.get('http://www.virasorovirtual.com/api/noticias').
          success(function(data) {
              $scope.noticias = data;
          });

  $scope.doRefresh = function() {
    $http.get('http://www.virasorovirtual.com/api/noticias').
      success(function(data) {
        $scope.noticias = data;
        $scope.$broadcast('scroll.refreshComplete');
      }).
      error(function(){
        alert("error en la conexion");
    });
  };
})


.controller('NoticiaCtrl', function($scope, $stateParams, $http) {

  $http.get('http://www.virasorovirtual.com/api/noticias/' + $stateParams.noticiaId).
          success(function(data) {
              $scope.noticia = data;
          });

})


.controller('FarmaciasdeturnoCtrl', function($scope, $http) {
  $http.get('http://www.virasorovirtual.com/api/farmaciadeturno').
          success(function(data) {
              $scope.turnos = data;
          });

  $scope.doRefresh = function() {
    $http.get('http://www.virasorovirtual.com/api/farmaciadeturno').
      success(function(data) {
        $scope.turnos = data;
        $scope.$broadcast('scroll.refreshComplete');
      }).
      error(function(){
        alert("error en la conexion");
    });
  };
})




.controller('EnviarclasificadoCtrl', function($scope, $http) {

  // Perform the login action when the user submits the login form
  $scope.doenviaclasi = function() {

      $http.post('http://www.virasorovirtual.com/api/enviarclasificado',$scope.clasiData,{
                      headers:{
                          'Content-Type':'undefined'
                      }
                  }).success(function(response) {
                      alert(response);
                      $scope.ReadData = response;
                      console.log(response);
                  }).error(function(err) {
                      alert("err"+err);
                      console.log("err"+err);
                  });
  };
})


.controller('ClasificadosCtrl', function($scope, $http) {
  $http.get('http://www.virasorovirtual.com/api/clasificados').
          success(function(data) {
              $scope.clasificados = data;
          });

  $scope.doRefresh = function() {
    $http.get('http://www.virasorovirtual.com/api/clasificados').
      success(function(data) {
        $scope.clasificados = data;
        $scope.$broadcast('scroll.refreshComplete');
      }).
      error(function(){
        alert("error en la conexion");
    });
  };


});
