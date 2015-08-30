'use strict';

describe('Directive: contentInjector', function () {

  // load the directive's module
  beforeEach(module('jessMakesThingsApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<content-injector></content-injector>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the contentInjector directive');
  }));
});
