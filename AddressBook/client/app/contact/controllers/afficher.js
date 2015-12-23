angular.module('app.contact.controllers.afficher', ['app.contact.services.contact'])
    .controller('ContactAfficherController', ['$scope', 'Contact', '$routeParams',
        function($scope, Contact, $routeParams) {
            $scope.contact = Contact.get({contactId: $routeParams.id});
    }]);