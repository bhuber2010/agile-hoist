var express = require('express');
var router = express.Router();
var people = require('../db/people');
var heists = require('../db/heists');
var roles = require('../db/roles');
var map_heists_people = require('../db/map_heists_people');
var map_people_roles = require('../db/map_people_roles');

router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/people', function(req, res) {
  res.json({people: people});
});

router.get('/heists', function(req, res) {
  res.json({heists: heists});
});

router.get('/roles', function(req, res) {
  res.json({roles: roles});
});

router.get('/map_heists_people', function(req, res) {
  res.json({map_heists_people: map_heists_people});
});

router.get('/map_people_roles', function(req, res) {
  res.json({map_people_roles: map_people_roles});
});

module.exports = router;
