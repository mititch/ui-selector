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
                    '<input type="checkbox" ng-model="item.value"> {{item.name}}' +
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
                    itemText: "@",
                    itemValue: "@"
                },
                link: function (scope, element, attrs) {

                    scope.editMode = false;

                    var makeCopy = function () {
                        scope.itemsListCopy = angular.copy(scope.itemsList);
                    };

                    var applyChanges = function () {
                        angular.forEach(scope.itemsListCopy, function(value, key){
                            this[key].value = value.value;
                        }, scope.itemsList);
                    };

                    scope.textBlockText = function () {
                        var trueArray = [];
                        angular.forEach(scope.itemsList, function (value) {
                            !value.value || this.push(value.name);
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
                        makeCopy();
                        scope.editMode = false;
                    };

                    makeCopy();
                }
            }
        }]
    );








