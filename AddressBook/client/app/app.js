angular.module('app', [
    'app.contact.controllers.list',
    'app.contact.controllers.afficher',
    'ngRoute'
])
.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/contact/views/list.html',
                controller: 'ContactListController'
            })
            .when('/contact/:id', {
                templateUrl: 'app/contact/views/afficher.html',
                controller: 'ContactAfficherController'
            });

        $locationProvider.html5Mode(true);
    }]);