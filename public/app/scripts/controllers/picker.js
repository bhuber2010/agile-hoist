'use strict';

/**
 * @ngdoc function
 * @name agileHoistApp.controller:PickerCtrl
 * @description
 * # PickerCtrl
 * Controller of the agileHoistApp
 */
angular.module('agileHoistApp')
  .controller('PickerCtrl', function (pickerData) {
    // var that = this;

    var peopleData = pickerData.getPeople.then(function(data){
      console.log(data);
      return data;
    });

    this.people = peopleData;

  });
