/**
 * Created by mititch on 15.11.13.
 */
describe('Ctrl function', function () {

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
});
