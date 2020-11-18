var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('../views/pages/login/login.html')
  // res.redirect('../views/index.html')
});

router.post('/index.html',(req,res,next) => {
  res.render('../views/index.html')
});



router.get('/wishlist/wish-list.html',(req,res,next) => {
  res.render('../views/pages/wishlist/wish-list.html')
});

router.get('/login/login.html',(req,res,next) => {
  res.render('../views/pages/login/login.html')
});

router.get('/index.html',(req,res,next) => {
  res.render('../views/index.html')
});

module.exports = router;