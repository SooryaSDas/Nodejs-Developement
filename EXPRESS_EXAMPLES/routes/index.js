var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Soorya development', project : "node" });
});

router.post('/submit',function(req,res){
  console.log(req.body)

  MongoClient.connect('mongodb://localhost:27017/',function(err,client){
    if(err)
      console.log("errror");

    else{
      console.log("yes.")
      client.db('crossroads').collection('users').insertOne(req.body);
    }
  })
  console.log("below db")

  res.send("got it")
})

module.exports = router;
