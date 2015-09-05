'use strict';

describe('Controller: PostsCtrl', function () {

  // load the controller's module
  beforeEach(module('jessMakesThingsApp'));

  var PostsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PostsCtrl = $controller('PostsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PostsCtrl).toBeDefined();
  });
});
