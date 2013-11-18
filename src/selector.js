/**
 * Created by mititch on 14.11.13.
 */
'use strict';

angular.module('ui.selector', [])
    .directive('uiSelector', [ '$log', '$parse',
        function (log, $parse) {
            return {
                restrict: 'E',
                template: '<div>' +
                    '<textarea readonly>{{selectedItem}}</textarea>' +
                    '<button ng-click="openEdit()">Edit</button>' +
                    '<div class="overlay" ng-show="data.editMode"></div>' +
                    '<div class="modal" ng-show="data.editMode">' +
                    '<p ng-repeat="item in data.items">' +
                    '<input type="radio" ng-model="data.selectedItemCopy" value="{{item}}"> {{item}} <br/>' +
                    '</p>' +
                    '<div class="position-center">' +
                    '<button ng-click="saveEdit()">Save</button>' +
                    '<button ng-click="cancelEdit()">Cancel</button>' +
                    '</div>' +
                    '</div>' +
                    '</div>',
                //replace: true,
                scope: {
                    selectedItem: '='
                },
                link: function (scope, element, attrs) {

                    scope.data = {
                        editMode : false,
                        selectedItemCopy : '',
                        items : ['First', 'Second', 'Third', 'Fourth', 'Fifth']
                    };

                    scope.openEdit = function () {
                        scope.data.selectedItemCopy = scope.selectedItem;
                        scope.data.editMode = true;
                    }

                    scope.saveEdit = function() {
                        scope.selectedItem = scope.data.selectedItemCopy;
                        scope.data.editMode = false;
                    };

                    scope.cancelEdit = function() {
                        scope.data.editMode = false;
                    };
                }
            }
        }]
    );








