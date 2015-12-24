angular.module('app.contact.controllers.list', [
    'app.contact.services.contact'
])
   .controller('ContactListController', ['$scope', 'Contact',
       function($scope, Contact, SweetAlert) {
      $scope.contacts = Contact.query();

       $scope.supprimer = function(i) {
           swal({
                   title: "Êtes-vous sûr ?",
                   text: "Votre contact sera définitivement supprimé !",
                   type: "warning",
                   showCancelButton: true,
                   confirmButtonColor: "#DD6B55",
                   cancelButtonText: "Annuler",
                   confirmButtonText: "Oui supprimons-le!",
                   closeOnConfirm: true},
               function(){
                   var contact = $scope.contacts[i];
                   contact.$delete(function() {
                       $scope.contacts.splice(i, 1);
                   })
               });
       };
   }]);