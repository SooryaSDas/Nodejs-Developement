var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

  const values = ["soorya","sandra","sreeja","lohidas","sooraj"];

  // const person = {name : "soorya",comments:{comment:"this is a comment from person.comments"}}

  const person = {name : "soorya",ad:{admin:false}}


  res.render('about', {person});
});

module.exports = router;
