let express = require('express');
let router = express.Router();

router.get('/',function(req,res,next) {
  res.render('index',{
    title: 'Home'
  });
});

module.exports = router;

router.get('/home',function(req,res,next) {
  res.render('index',{
    title: 'Home'
  });
});
module.exports = router;

router.get('/aboutme',function(req,res,next) {
  res.render('index',{
    title: 'Aboutme'
  });
});
module.exports = router;

router.get('/projects',function(req,res,next) {
  res.render('index',{
    title: 'Projects'
  });
});
module.exports = router;

router.get('/contactus',function(req,res,next) {
  res.render('index',{
    title: 'Contact us'
  });
});
module.exports = router;
