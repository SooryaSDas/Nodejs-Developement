var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('about', {title :'node project', project : 'node'});
});

module.exports = router;
