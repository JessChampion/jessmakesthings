'use strict';

describe('Controller: PostsctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('jessMakesThingsApp'));

  var PostsctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PostsctrlCtrl = $controller('PostsctrlCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
