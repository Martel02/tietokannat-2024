var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Welcome to Hell');
});

router.get('/toka', function(req, res) 
  {
    res.send('Olen toka reitti');
  }
)

router.get('/kolmas/:name', function(req, res) 
  {
    res.send('Heippa ' + req.params.name);
    console.log(req.params.name)
  }
)

router.get('/neljas/:fname/:lname', function(req, res) 
  {
    res.send('Heippa ' + req.params.fname + ' ' + req.params.lname);
    console.log(req.params.fname+' '+req.params.lname);

  }
)

router.post('/', function(req, res)
  {
    res.send(req.body.fname+' '+req.body.lname);
    console.log(req.body.fname+' '+req.body.lname);

  }
);

module.exports = router;
