'use strict';

/**
 * @ngdoc function
 * @name agileHoistApp.controller:PickerCtrl
 * @description
 * # PickerCtrl
 * Controller of the agileHoistApp
 */
angular.module('agileHoistApp')
  .controller('PickerCtrl', function (pickerData, lodash) {
    var that = this;

    this.heist = pickerData.heist;

    this.runHeist = function(heistRequiredScore, heistData){
      console.log(heistRequiredScore);
      console.log(heistData);
      if (heistData.score >= heistRequiredScore) {
        that.heist.result = "You got the loot!";
      } else {
        that.heist.result = "The cops busted your ass!";
      }

      that.heist.run = true;
    };

    pickerData.getPeople.then(function(data){
      // console.log(data.people);
      that.people = data.people;
    });

    pickerData.getRoles.then(function(data){
      // console.log(data.roles);
      that.roles = data.roles;
    });

    pickerData.getHeists.then(function(data){
      that.heists = data.heists;
    })

    this.confirmPick = function(role){
      var personIndex = lodash.findIndex(that.people, function(person){
        return person.name === role.pick.name;
      });
      role.pickName = role.pick.name;
      that.people[personIndex].selected = true;

      pickerData.addToTeam(role);
      role.confirmed = true;
      // console.log(role);
    };

    this.editRole = function(role){
      console.log(role);
      var putBack = {name: role.pick};
      that.people.push(putBack);
      role.confirmed = false;
    };


  });
