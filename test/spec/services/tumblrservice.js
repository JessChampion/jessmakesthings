'use strict';

describe('Service: tumblrService', function () {

  // load the service's module
  beforeEach(module('jessMakesThingsApp'));

  // instantiate service
  var tumblrService;
  beforeEach(inject(function (_tumblrService_) {
    tumblrService = _tumblrService_;
  }));

  it('should do something', function () {
    expect(!!tumblrService).toBe(true);
  });

});
