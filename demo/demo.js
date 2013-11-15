/**
 * Created by mititch on 14.11.13.
 */
'use strict';

// Declare app level module which depends on filters, and services
var selectorDemoApp = angular.module('selectorDemoApp', ['ui.selector']);

selectorDemoApp.controller('Ctrl', ['$scope', function ($scope) {
    $scope.checkData =
    {checkList: [
        {
            name: 'Naomi',
            value: false
        },
        {
            name: 'Israel',
            value: true
        },
        {
            name: 'Zebra',
            value: true
        }
    ]
    };

    $scope.addCheck = function () {
        $scope.checkData.checkList.push({name: 'NewMen', value: true});
    }

}]);