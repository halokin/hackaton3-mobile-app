function homeController($scope, $timeout, $stateParams, ionicMaterialInk, ionicMaterialMotion){
    // Set Header
    $scope.$parent.clearFabs();

    // Set Motion
    $timeout(function() {
        ionicMaterialMotion.slideUp({
            selector: '.slide-up'
        });
    }, 300);

    $timeout(function() {
        ionicMaterialMotion.fadeSlideInRight({
            startVelocity: 3000
        });
    }, 700);

    // Set Ink
    ionicMaterialInk.displayEffect();
}
