angular.module('starships').controller('shipCtrl', function($stateParams, $scope,
                                                  shipsSrvc){
  $scope.id = $stateParams.id;

  shipsSrvc.getShip($stateParams.id).then(ship=>{
    $scope.ship=ship
  })
})
