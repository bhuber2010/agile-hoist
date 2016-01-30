'use strict';

/**
 * @ngdoc service
 * @name agileHoistApp.pickerData
 * @description
 * # pickerData
 * Service in the agileHoistApp.
 */
angular.module('agileHoistApp')
  .service('pickerData', function ($resource, lodash) {
    var people = $resource('http://10.6.81.103:3000/people').get();
    var peoplePromise = people.$promise
      .then(function(data) {
        return data;
      }
    );

    var roles = $resource('http://10.6.81.103:3000/roles').get();
    var rolesPromise = roles.$promise
      .then(function(data) {
        return data;
      }
    );

    var mapPeopleRoles = $resource('http://10.6.81.103:3000/map_people_roles').get();
    var mapPeopleRolesPromise = mapPeopleRoles.$promise
      .then(function(data) {
        // console.log(data.map_people_roles);
        return data;
      }
    );

    var heists = $resource('http://10.6.81.103:3000/heists').get();
    var heistsPromise = heists.$promise
      .then(function(data) {
        console.log(data.heists);
        return data;
      }
    );

    var team = [];
    var teamScore = 0;

    var heist = {
      score: teamScore,
      team: team,
      run: false
    };

    return {
      getPeople: peoplePromise,
      getRoles: rolesPromise,
      getMapPeopleRoles: mapPeopleRolesPromise,
      getHeists: heistsPromise,
      team: team,
      heist: heist,
      addToTeam: function(role){
        var onTeam = lodash.findIndex(team, function(teamRole){
          return teamRole.pick.name === role.pick.name;
        });
        if (onTeam >= 0) {
          console.log('somethings not right');
        } else {
          var clonedPerson = lodash.clone(role);
          team.push(clonedPerson);
          teamScore += role.pick.skills[role.name];
          heist.score = teamScore;
        }
        console.log(heist);
      },
    };

  });
