/**
 * Created by mititch on 14.11.13.
 */
'use strict';

var selectorDemoApp = angular.module('selectorDemoApp', ['ui.selector']);

selectorDemoApp.controller('Ctrl', ['$scope', function ($scope) {
    $scope.data = {
        selectedItem: 'First'
    };
}]);