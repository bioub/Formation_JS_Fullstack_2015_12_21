angular.module('app.contact.services.contact', [
    'ngResource'
])
/// .service() new de la fonction
//.factory() return de la fonction
.factory('Contact', ['$resource', function($resource) {
    return $resource('/api/v1/contacts/:contactId', {contactId:'@_id'});
}])