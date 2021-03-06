angular.module('app', [
    'app.contact.controllers.list',
    'app.contact.controllers.afficher',
    'app.contact.controllers.ajouter',
    'ngRoute'
])
.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/contact/views/list.html',
                controller: 'ContactListController'
            })
            .when('/contact/ajouter', {
                templateUrl: 'app/contact/views/ajouter.html',
                controller: 'ContactAjouterController'
            })
            .when('/contact/:id', {
                templateUrl: 'app/contact/views/afficher.html',
                controller: 'ContactAfficherController'
            });

        $locationProvider.html5Mode(true);
    }]);