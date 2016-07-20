// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js


function checkIsConnected($q, $http, $rootScope, $location) {
    var deferred = $q.defer();

    $http.get('/api/loggedin').success(function () {
        // Authenticated
        deferred.resolve();
    }).error(function () {
        // Not Authenticated
        deferred.reject();
        $location.url('/login');
    });

    return deferred.promise;
}


function checkPassword() {
  return {
    require: 'ngModel',
    link: function(scope, elem, attrs, ctrl) {
      var firstPassword = '#' + attrs.checkPassword;
      elem.add(firstPassword).on('keyup', function() {
        scope.$apply(function() {
          var v = elem.val() === $(firstPassword).val();
          ctrl.$setValidity('passwordMatch', v);
        });
      });
    }
  };
}

angular.module('starter', ['ionic', 'starter.controllers', 'ionic-material', 'ionMdInput'])

//controllers//
.controller('loginCtrl', loginCtrl)
.controller('signupController', signupController)
.controller('homeController', homeController)

//services//
.service('connectService', connectService)
.service('userService', userService)

//factories//

//APP//
.config(routes)

.run(function($rootScope, $location, connectService, $ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

    $rootScope.loginMessage = {};
    $rootScope.loginMessage.title = '';
    $rootScope.loginMessage.message = '';

    // Watch path
    var path = function () {
        return $location.path();
    };
    $rootScope.$watch(path, function (newVal, oldVal) {
        $rootScope.activetab = newVal;
    });

    // Logout
    $rootScope.logout = function () {
        $rootScope.token = null;
        $rootScope.user = null;
        $rootScope.loginMessage.title = '';
        $rootScope.loginMessage.message = '';
        connectService.disconnect().then(function () {
            $location.url('/login');
        });
    };
  });
});
