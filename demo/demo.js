/**
 * Created by mititch on 14.11.13.
 */
'use strict';

// Declare app level module which depends on filters, and services
var selectorDemoApp = angular.module('selectorDemoApp', ['ui.selector']);

selectorDemoApp.controller('Ctrl', function($scope) {
    $scope.checkData = [
        {
            name: 'Naomi',
            value: false
        },
        {
            name: 'Israel',
            value: true
        },
        {
            name : 'Zebra',
            value : false
        }
]});