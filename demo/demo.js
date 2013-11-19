/**
 * Created by mititch on 14.11.13.
 */
var selectorDemoApp = angular.module('selectorDemoApp', ['selector']);

selectorDemoApp.controller('TestController', ['$scope', function ($scope) {
    $scope.data = {
        selectedItem: 'First'
    };
}]);