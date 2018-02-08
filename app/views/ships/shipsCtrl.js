angular.module('starships').controller('shipsCtrl', function($scope, shipsSrvc){
  $scope.ships = shipsSrvc.ships;

  shipsSrvc.getShips().then(ships=>{
    $scope.ships = ships;
  })
})
