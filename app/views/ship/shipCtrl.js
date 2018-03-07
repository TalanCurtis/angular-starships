
// controllers should dont need know how to get ships it 
// controllers only know how to display info/ and where to get it.
// NO api calls
angular.module('starships').controller('shipCtrl', function($scope, $stateParams, shipSrvc){
    $scope.id = $stateParams.id;
    // $scope.stateParams = $stateParams;
    shipSrvc.getShip( $stateParams.id ).then( ship => $scope.ship = ship)
})