/**
 * Created by mititch on 14.11.13.
 */
angular.module('ui.selector', [])
    .directive('uiSelector', [ '$log', '$parse',
        function (log, $parse) {
            return {
                restrict: 'E',
                template: '<div>' +
                    '<textarea>{{textBlockText()}}</textarea>' +
                    '<br>' +
                    '<button ng-click="openEdit()">Edit</button>' +
                    '<div class="overlay" ng-show="editMode"></div>' +
                    '<div class="modal" ng-show="editMode">' +
                    '<p ng-repeat="item in itemsListCopy">' +
                    '<input type="checkbox" ng-model="item.value"> {{item.text}}' +
                    '</p>' +
                    '<div class="position-canter">' +
                    '<button ng-click="saveEdit()">Save</button>' +
                    '<button ng-click="cancelEdit()">Cancel</button>' +
                    '</div>' +
                    '</div>' +
                    '</div>',
                replace: true,
                scope: {
                    itemsList: '=',
                    itemTextProp: "@",
                    itemValueProp: "@"
                },
                link: function (scope, element, attrs) {

                    scope.editMode = false;

                    var makeCopy = function (source) {
                        scope.itemsListCopy = [];
                        angular.forEach(source, function(value, key){
                            this.push({
                                text : value[scope.itemTextProp],
                                value : value[scope.itemValueProp]
                            })
                        }, scope.itemsListCopy);
                    };

                    var applyChanges = function () {
                        angular.forEach(scope.itemsListCopy, function(value, key){
                            this[key][scope.itemValueProp] = value.value;
                        }, scope.itemsList);
                    };

                    scope.textBlockText = function () {
                        var trueArray = [];
                        angular.forEach(scope.itemsList, function (value) {
                            !value[scope.itemValueProp] || this.push(value[scope.itemTextProp]);
                        }, trueArray);
                        return trueArray.join('\n');
                    };

                    scope.openEdit = function () {
                        scope.editMode = true;
                    }

                    scope.saveEdit = function() {
                        applyChanges();
                        scope.editMode = false;
                    };

                    scope.cancelEdit = function() {
                        makeCopy(scope.itemsList);
                        scope.editMode = false;
                    };

                    scope.$watch(
                        function (scope) {
                            return scope.itemsList
                        },
                        function (value) {
                            makeCopy(value);
                        },
                        true);

                }
            }
        }]
    );








