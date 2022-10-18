var express = require('express');
var router = express.Router();
var users = require('../mock');

/* Getting data from DataBase. */
var userslist = users;

/* GET users listing. */
router.get('/', function(req, res, next) {
  //var db = res.send(process.env.DB_HOST)
  res.send(userslist)
});

module.exports = router;
