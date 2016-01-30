'use strict';

describe('Service: pickerData', function () {

  // load the service's module
  beforeEach(module('agileHoistApp'));

  // instantiate service
  var pickerData;
  beforeEach(inject(function (_pickerData_) {
    pickerData = _pickerData_;
  }));

  it('should do something', function () {
    expect(!!pickerData).toBe(true);
  });

});
