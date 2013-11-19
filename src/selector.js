/**
 * Created by mititch on 14.11.13.
 * Twitter bootstrap with jQuery used for dialog creation
 */
angular.module('selector', [])

    .value('itemsList', ['First', 'Second', 'Third', 'Fourth', 'Fifth'])

    .value('baseModalElement',
        angular.element(
            '<div id="myModal" class="modal hide">' +
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
            '</div>')
    )

    .directive('selector', ['itemsList', 'baseModalElement',
        function (itemsList, baseModalElement) {

            return {
                restrict: 'E',
                template:
                    '<div class="form-inline">' +
                    '<input type="text" class="form-control" readonly ng-model="selectedItem">' +
                    '<button type="button" class="btn" ng-click="openEdit()">Edit</button>' +
                    '</div>',
                replace: true,
                scope: {
                    selectedItem: '='
                },
                compile: function (tElement) {

                    // Get copy of baseModalElement
                    var modalElement = baseModalElement.clone();

                    // Add copy to template
                    tElement.append(modalElement);

                    return function (scope) {

                        // Setup scope data
                        scope.data = {
                            selectedItemCopy: {},
                            items: itemsList
                        };

                        // Open edit dialog
                        scope.openEdit = function () {
                            scope.data.selectedItemCopy = scope.selectedItem;
                            modalElement.modal("show");
                        }

                        // Save edit result
                        scope.saveEdit = function () {
                            scope.selectedItem = scope.data.selectedItemCopy;
                            modalElement.modal("hide");
                        };

                        // Cancel editing
                        scope.cancelEdit = function () {
                            modalElement.modal("hide");
                        };
                    }
                }
            }
        }]
    );








