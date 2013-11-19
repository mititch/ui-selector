/**
 * Created by mititch on 15.11.13.
 */
describe('Directive: selector', function () {

    var SELECTED_ITEM = 'First';

    var VALID_TEMPLATE =
        '<selector selected-item="data.selectedItem"></selector>';

    var $rootScope;
    var $compile;
    var defaultData;

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

        // Reset data each time
        defaultData = {
            selectedItem: SELECTED_ITEM
        };

        // Provide any mocks needed
        module(function ($provide) {
            //$provide.value('Name', new MockName());
        });

        // Inject in angular constructs otherwise,
        //  you would need to inject these into each test
        inject(function (_$rootScope_, _$compile_) {
            $rootScope = _$rootScope_.$new();
            $compile = _$compile_;
        });
    });

    describe('when created', function () {
        // Add specs

        it('should have selectedItem equals "First"', function () {

            var element = createDirective();

            var directiveScope = element.isolateScope();

            directiveScope.openEdit();

            return expect(directiveScope.data.selectedItemCopy).toBe("First");

        });

    });

    describe('when the model changes', function () {

        it('should have selectedItem equals "Second"', function () {

            var element = createDirective();

            $rootScope.data.selectedItem = "Second";

            $rootScope.$digest();

            var directiveScope = element.isolateScope();

            directiveScope.openEdit();

            return expect(directiveScope.data.selectedItemCopy).toBe("Second");

        });

    });

    describe('root model', function () {

        describe('when the directive model changed and saved', function () {

            it('should have selectedItem equals "Third"', function () {

                var element = createDirective();

                var directiveScope = element.isolateScope();

                directiveScope.openEdit();

                directiveScope.data.selectedItemCopy = "Third";

                directiveScope.saveEdit();

                $rootScope.$digest();

                return expect($rootScope.data.selectedItem).toBe("Third");

            });

        });

        describe('when the directive model changed but canceled', function () {

            it('should have selectedItem equals "First"', function () {

                var element = createDirective();

                var directiveScope = element.isolateScope();

                directiveScope.openEdit();

                directiveScope.data.selectedItemCopy = "Third";

                directiveScope.cancelEdit();

                $rootScope.$digest();

                return expect($rootScope.data.selectedItem).toBe("First");

            });

        });

    });

});


