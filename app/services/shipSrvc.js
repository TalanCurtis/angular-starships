// DO NOT USE ARROW FUNCTION in service. run as constructor functions
// $http is pretty much axios axios.get()  =  $http.get()
angular.module('starships').service('shipSrvc', function($http){
    this.getShips = function(){
        return $http.get('https://swapi.co/api/starships/').then(res =>{
            return res.data.results.map(ship => {
                // 'https://swapi.co/api/starships/15/
                // get ship id off url
                let arr = ship.url.split('/');
                let id = arr[arr.length -2 ] * 1;
                ship.id = id
                return ship
            });
        })
    }
    this.getShip = function(id){
        return $http.get('https://swapi.co/api/starships/'+id).then(res =>{
            return res.data;
        })   
    }
})