/**
 * Created by mititch on 15.11.13.
 */
/*describe('Ctrl function', function () {

    beforeEach(module('selectorDemoApp'));
    describe('Ctrl', function () {
        var scope;

        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            var ctrl = $controller('Ctrl', {$scope: scope});
        }));

        it('should create "checkData.checkList" model with 3 items', function () {
            expect(scope.checkData.checkList.length).toBe(3);
        });

    });
});*/

describe('Directive: uiSelector', function () {
    var element, scope, compile, defaultData,
        validTemplate = '<ui-selector check-list="data.checkList"></ui-selector>';

    function createDirective(data, template) {
        var elm;

        // Setup scope state
        scope.data = data || defaultData;

        // Create directive
        elm = compile(template || validTemplate)(scope);

        // Trigger watchers
        scope.$apply();

        // Return
        return elm;
    }

    beforeEach(function () {

        // Load the directive's module
        module('ui.selector');

        // Reset data each time
        defaultData = {
            checkList: [
                {name:'First', value:true },
                {name:'Second', value:false },
            ]
        };

        // Provide any mocks needed
        module(function ($provide) {
            //$provide.value('Name', new MockName());
        });

        // Inject in angular constructs otherwise,
        //  you would need to inject these into each test
        inject(function ($rootScope, $compile) {
            scope = $rootScope.$new();
            compile = $compile;
        });
    });

    describe('when created', function () {
        // Add specs

        it('should render the expected output', function () {
            element = createDirective();

            var directiveScope = element.children().scope()

            return expect(directiveScope.checkList.length).toBe(2);

            //return expect(element.text()).toBe('this is my directive');
        });

    });

    describe('when the model changes', function () {
        // Add specs
    });

    return describe('when destroyed', function () {
        // Add specs
    });
});

