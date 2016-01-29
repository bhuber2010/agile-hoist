var express = require('express');
var router = express.Router();
var people = require('../db/people');

router.get('/', function(req, res) {
  res.json(people)
});

module.exports = router;
