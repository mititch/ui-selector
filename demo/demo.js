angular.module('selectorDemoApp', ['selector'])

    .controller('TestController', ['$scope', function ($scope) {

        $scope.selectedItem = 'First'

    }]);