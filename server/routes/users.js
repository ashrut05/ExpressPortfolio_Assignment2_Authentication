/*
Filename: users.js 
Student Name: Ashrut Sharma
Student ID: 301107609 
Date: 14th February, 2021
*/

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Placeholder');
});

module.exports = router;
