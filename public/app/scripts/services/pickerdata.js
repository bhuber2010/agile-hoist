'use strict';

/**
 * @ngdoc service
 * @name agileHoistApp.pickerData
 * @description
 * # pickerData
 * Service in the agileHoistApp.
 */
angular.module('agileHoistApp')
  .service('pickerData', function ($resource) {
    var people = $resource('https://www.reddit.com/r/funny.json').get();

    var peoplePromise = people.$promise
      .then(function(data) {
        return data;
      }
    );

    return {
      getPeople: peoplePromise
    };

  });
