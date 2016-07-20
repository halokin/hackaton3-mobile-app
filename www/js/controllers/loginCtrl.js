function loginCtrl($scope, $timeout, $stateParams, ionicMaterialInk, $rootScope, $location, connectService) {
  $scope.user = {};

  $scope.$parent.clearFabs();
  ionicMaterialInk.displayEffect();

  $scope.connect = function() {
    console.log($scope.user);
    connectService.connect($scope.user).then(function(res) {
      $rootScope.token = res.data.token;
      $rootScope.user = res.data.user;
      console.log('connected');
      $location.path('/app/home');
    }).catch(function() {
      console.log('error');
      $rootScope.loginMessage.title = "Connexion error";
      $rootScope.loginMessage.message = "Error login or password";
    });
  };
}
