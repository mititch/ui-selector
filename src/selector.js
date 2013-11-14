/**
 * Created by mititch on 14.11.13.
 */

angular.module('ui.selector', [])
    .directive('uiSelector', [ '$log', '$parse',
        function(log, $parse) {
            return {
                restrict: 'E',
                template:
                    '<div>' +
                        '<textarea>{{text}}</textarea>' +
                        '<button>Edit</button>' +
                        '<ul><li ng-repeat="check in checks">{{check.name}}</li></ul>' +
                    '</div>',
                replace : true,
                scope: {
                    checkArray : '='
                },
                link: function(scope, element, attrs) {
                    scope.edit = function() {
                        //TODO: Open dialog
                        log.info('Open dialog')
                    }

                    scope.checks = $parse(attrs.checkArray);

                    /*scope.$watch('checkArray', function(value) {
                        scope.checkArr = value;
                        scope.text = 'assad';
                    });*/
                }
            }
        }]
    )
    .directive('uiCheckEditDialog', [ '$log',
        function(log) {
            return {
                scope: {
                    checks : '=checks'
                },
                restrict : 'E',
                template : '<ul><li ng-repeat="check in checks"><input type="checkbox" ng-model="check"></li></ul>'

            }
        }]
    );







