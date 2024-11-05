var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next) {
  res.render('index',{
    title: 'Home'
  });
});

router.get('/home',function(req,res,next) {
  res.render('index',{
    title: 'Home'
  });
});

router.get('/aboutme',function(req,res,next) {
  res.render('index',{
    title: 'Aboutme'
  });
});

router.get('/projects',function(req,res,next) {
  res.render('index',{
    title: 'Projects'
  });
});

router.get('/contactus',function(req,res,next) {
  res.render('index',{
    title: 'Contact us'
  });
});

module.exports = router;
