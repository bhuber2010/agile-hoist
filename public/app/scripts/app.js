'use strict';

/**
 * @ngdoc overview
 * @name agileHoistApp
 * @description
 * # agileHoistApp
 *
 * Main module of the application.
 */
angular
  .module('agileHoistApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'ngLodash'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/picker', {
        templateUrl: 'views/picker.html',
        controller: 'PickerCtrl',
        controllerAs: 'picker'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
