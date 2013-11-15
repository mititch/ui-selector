/**
 * Created by mititch on 14.11.13.
 */

angular.module('ui.selector', [])
    .directive('uiSelector', [ '$log', '$parse',
        function (log, $parse) {
            return {
                restrict: 'E',
                template: '<div>' +
                    '<textarea ng-model="text"></textarea>' +
                    '<button ng-click="edit()">Edit</button>' +
                    '<div ng-show="editMode">' +
                    '<ul>' +
                    '<li ng-repeat="check in checkList">' +
                    '{{check.name}}: <input type="checkbox" ng-model="check.value">' +
                    '</li>' +
                    '</ul>' +
                    '</div>' +
                    '</div>',
                replace: true,
                scope: {
                    checkList: '='
                },
                link: function (scope, element, attrs) {

                    scope.editMode = false;
                    scope.edit = function () {
                        //TODO: Open dialog
                        scope.editMode = true;
                    }

                    scope.$watch(
                        function (scope) {
                            return scope.checkList
                        },
                        function (value) {
                            log.log(value);
                            var trueArray = [];

                            angular.forEach(value, function (value) {
                                !value.value || this.push(value.name);
                            }, trueArray);

                            scope.text = trueArray.join('\n');
                        },
                        true
                    );
                }
            }
        }]
    )
    .directive('uiCheckEditDialog', [ '$log',
        function (log) {
            return {
                scope: {
                    checks: '=checks'
                },
                restrict: 'E',
                template: '<ul><li ng-repeat="check in checks"><input type="checkbox" ng-model="check"></li></ul>'

            }
        }]
    );







