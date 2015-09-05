'use strict';

describe('Directive: SlideModal', function () {

  // load the directive's module
  beforeEach(module('jessMakesThingsApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element(' <div id="postModal" slide-modal modal-content="views/post.html"></div>');
    element = $compile(element)(scope);
    expect(element.children.length).toBe(2);
  }));
});
