/**
 * Created by mititch on 14.11.13.
 */
angular.module('ui.selector', ['ui.bootstrap'])
    .run(["$templateCache", function ($templateCache) {
        $templateCache.put("modalContent.html",
            '<div class="modal-header">' +
            '<h3>Select item</h3>' +
            '</div>' +
            '<div class="modal-body">' +
            '<div class="radio" ng-repeat="item in data.items">' +
            '<label>' +
            '<input type="radio" ng-model="data.selectedItemCopy" value="{{item}}">' +
            '{{item}}' +
            '</label>' +
            '</div>' +
            '</div>' +
            '<div class="modal-footer">' +
            '<button class="btn btn-primary" ng-click="save()">Save</button>' +
            '<button class="btn btn-warning" ng-click="cancel()">Cancel</button>' +
            '</div>'
        );
    }])
    .directive('uiSelector', [ '$log', '$modal',
        function ($log, $modal) {

            var ModalInstanceCtrl = function ($scope, $modalInstance, data) {

                $scope.data = {
                    items: ['First', 'Second', 'Third', 'Fourth', 'Fifth'],
                    selectedItemCopy: data
                }

                $scope.save = function () {
                    $modalInstance.close($scope.data.selectedItemCopy);
                };

                $scope.cancel = function () {
                    $modalInstance.dismiss();
                };
            };

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

                link: function (scope) {

                    scope.openEdit = function () {

                        var modalInstance = $modal.open({
                            templateUrl: 'modalContent.html',
                            controller: ModalInstanceCtrl,
                            resolve: {
                                data: function () {
                                    return scope.selectedItem;
                                }
                            }
                        });

                        modalInstance.result.then(function (selectedItem) {
                            scope.selectedItem = selectedItem;
                        });
                    };
                }
            }


        }]
    );








