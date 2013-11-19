/**
 * Created by mititch on 14.11.13.
 */
angular.module('selector', [])
    .directive('selector', [ '$log',
        function (log) {

            var baseModalElement = angular.element('<div id="myModal" class="modal hide">' +
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
                '</div>');

            return {
                restrict: 'E',
                template: '<div class="form-inline">' +
                    '<input type="text" class="form-control" readonly ng-model="selectedItem">' +
                    '<button type="button" class="btn" ng-click="openEdit()">Edit</button>' +
                    '</div>',
                replace: true,
                scope: {
                    selectedItem: '='
                },
                compile: function (tElement) {

                    var modalElement = baseModalElement.clone();

                    tElement.append(modalElement);

                    return function (scope, element) {

                        scope.data = {
                            selectedItemCopy: {},
                            items: ['First', 'Second', 'Third', 'Fourth', 'Fifth']
                        };

                        scope.openEdit = function () {
                            scope.data.selectedItemCopy = scope.selectedItem;
                            modalElement.modal("show");
                            scope.data.editMode = true;
                        }

                        scope.saveEdit = function () {
                            scope.selectedItem = scope.data.selectedItemCopy;
                            modalElement.modal("hide");
                        };

                        scope.cancelEdit = function () {
                            modalElement.modal("hide");
                        };
                    }
                }
            }

        }]
    );








