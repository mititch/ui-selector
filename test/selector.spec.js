/**
 * Created by mititch on 15.11.13.
 */
describe('Directive: selector', function () {

    var VALID_TEMPLATE =
        '<selector selected-item="data.selectedItem"></selector>';

    var someItem;    // some element from items list
    var otherItem;   // some other element from items list
    var $rootScope;     //root scope object reference
    var $compile;       //compile function reference
    var defaultData;    //object with default data

    function createDirective(data, template) {

        // Setup scope state
        $rootScope.data = data || defaultData;

        // Create directive element
        var element = angular.element(template || VALID_TEMPLATE);

        // Create directive
        $compile(element)($rootScope);

        // Trigger watchers
        $rootScope.$apply();

        // Return
        return element;
    }

    beforeEach(function () {

        // Load the directive's module
        module('selector');

        // Provide any mocks needed
        module(function ($provide) {
            //$provide.value('Name', new MockName());
        });

        // Inject in angular and module constructs
        inject(function (_$rootScope_, _$compile_, itemsList) {
            $rootScope = _$rootScope_.$new();
            $compile = _$compile_;
            someItem = itemsList[0];
            otherItem = itemsList[1];
        });

        // Reset data each time
        defaultData = {
            selectedItem: someItem
        };
    });

    describe('when created', function () {
        // Add specs

        it('dialog should have selectedItemCopy equals root scope selectedItem', function () {
            //$scope.data.selectedItem = someItem;
            var element = createDirective();
            //$rootScope.$digest();
            var directiveScope = element.isolateScope();
            directiveScope.openEdit();
            return expect(directiveScope.data.selectedItemCopy).toBe(someItem);
        });

    });

    describe('when the model changes', function () {

        it('dialog should have selectedItemCopy equals root scope selectedItem', function () {
            var element = createDirective();
            $rootScope.data.selectedItem = otherItem;
            $rootScope.$digest();
            var directiveScope = element.isolateScope();
            directiveScope.openEdit();
            return expect(directiveScope.data.selectedItemCopy).toBe(otherItem);
        });

    });

    describe('root model', function () {

        describe('when the directive model changed and saved', function () {

            it('root scope should have selectedItem equals new value', function () {
                var element = createDirective();
                var directiveScope = element.isolateScope();
                directiveScope.openEdit();
                directiveScope.data.selectedItemCopy = otherItem;
                directiveScope.saveEdit();
                $rootScope.$digest();
                return expect($rootScope.data.selectedItem).toBe(otherItem);
            });

        });

        describe('when the directive model changed but canceled', function () {

            it('root scope should have selectedItem equals old value', function () {
                var element = createDirective();
                var directiveScope = element.isolateScope();
                directiveScope.openEdit();
                directiveScope.data.selectedItemCopy = otherItem;
                directiveScope.cancelEdit();
                $rootScope.$digest();
                return expect($rootScope.data.selectedItem).toBe(someItem);
            });

        });

    });

});


