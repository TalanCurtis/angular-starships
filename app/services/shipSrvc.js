angular.module('starships').service('shipsSrvc', function($http){

  this.ships = ["X wing", "T-Fighter", "Death Star", "Millenium Falcon"];

  this.getShips = function(){
    return $http.get('https://swapi.co/api/starships/').then(resp=>{
      return resp.data.results.map(ship=>{
        // 'https://swapi.co/api/starships/6/'
        let ary = ship.url.split('/');
        ship.id = ary[ary.length-2];
        return ship
      })
    })
  }

  this.getShip = function(id){
    return $http.get('https://swapi.co/api/starships/'+id)
                        .then(resp=>resp.data)
  }
})
