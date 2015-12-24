angular.module('app.contact.controllers.ajouter', ['app.contact.services.contact'])
   .controller('ContactAjouterController', ['$scope', 'Contact', '$location', function($scope, Contact, $location) {
       $scope.ajouter = function() {
           var contact = new Contact($scope.contact);
           contact.$save();
           $location.url('/');
       };
   }]);