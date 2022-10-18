var express = require('express');
var router = express.Router();

var receitas=[];

/* GET receitas. */
router.get('/', function(req, res, next) {
  //res.render('receitas', { title: 'Express Receitas' });
  res.send(receitas)

});

module.exports = router;
