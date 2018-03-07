angular.module('starships', ['ui.router'])

angular.module('starships').config(function ($urlRouterProvider, $stateProvider) {
    // otherwise makes it so if user browses to undifined area send them here
    $urlRouterProvider.otherwise('/')
    // state describes what the user should see
    $stateProvider.state('home', {
        url: '/',
        template: '<div>Home State</div>'
    }).state('ships', {
        url: '/ships',
        templateUrl: 'app/views/ships/ships.html',
        controller: 'shipsCtrl'
    }).state('ship', {
        url: '/ship/:id',
        // a way of quick testing route works
        // template: '<div>Single Ship State</div>'
        templateUrl: 'app/views/ship/ship.html',
        controller: 'shipCtrl'      
    })
})