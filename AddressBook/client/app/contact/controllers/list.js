angular.module('app.contact.controllers.list', ['app.contact.services.contact'])
   .controller('ContactListController', ['$scope', 'Contact', function($scope, Contact) {
      $scope.contacts = Contact.query();
   }]);