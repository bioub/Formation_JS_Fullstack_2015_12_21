angular.module('app', [])
    .controller('PrenomListController', ['$scope', function($scope) {
        $scope.prenoms = ['Bill', 'Steve'];

        $scope.ajouter = function() {
            $scope.prenoms.push($scope.prenom);
        };
    }]);