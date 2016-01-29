'use strict';

describe('Controller: PickerCtrl', function () {

  // load the controller's module
  beforeEach(module('agileHoistApp'));

  var PickerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PickerCtrl = $controller('PickerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PickerCtrl.awesomeThings.length).toBe(3);
  });
});
