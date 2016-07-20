function signupController($scope, $location, $timeout, userService) {

  $scope.user = {};

  $scope.signup = function() {
    userService.create($scope.user).then(function(res) {
      $scope.user.name = res.data.username;
      $timeout(function() {
        $location.path('/login');
      }, 2000);
    }).catch(function(res) {
      $scope.signupMessage.title = "Signup error";
      $scope.signupMessage.message = res.data;
    });
  };
}
