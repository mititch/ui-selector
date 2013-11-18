/**
 * Created by mititch on 14.11.13.
 */
'use strict';

angular.module('ui.selector', [])
    .directive('uiSelector', [ '$log', '$parse',
        function (log, $parse) {

            var modalElement = '<div id="myModal" class="modal hide">' +
                '<div class="modal-body">' +
                '<div class="radio" ng-repeat="item in data.items">' +
                '<label>' +
                '<input type="radio" ng-model="data.selectedItemCopy" value="{{item}}"> ' +
                '{{item}}' +
                '</label>' +
                '</div>' +
                '</div>' +
                '<div class="modal-footer">' +
                '<button class="btn" ng-click="saveEdit()">Save</button>' +
                '<button class="btn" ng-click="cancelEdit()">Cancel</button>' +
                '</div>';

            return {
                restrict: 'E',
                template: '<div class="form-inline">' +
                    '<input type="text" class="form-control" readonly ng-model="selectedItem">' +
                    '<button type="button" class="btn" ng-click="openEdit()">Edit</button>' +
                    '</div>' +
                    modalElement,
                //replace: true,
                scope: {
                    selectedItem: '='
                },
                link: function (scope, element, attrs) {

                    var modalDialog = element.find('.modal');

                    scope.data = {
                        editMode : false,
                        selectedItemCopy : '',
                        items : ['First', 'Second', 'Third', 'Fourth', 'Fifth']
                    };

                    scope.$watch(
                        function (scope) {
                            return scope.data.editMode;
                        },
                        function (value) {
                            if (value) {
                                modalDialog.modal("show");
                            }
                            else{
                                modalDialog.modal("hide");
                            }
                        }
                    );

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








