var express = require('express');
var router = express.Router();

/* GET Home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home ' });
});

/* GET About me page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About me ' });
});

/* GET Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects ' });
});

/* GET Contact us page. */
router.get('/contactus', function(req, res, next) {
  res.render('index', { title: 'Contact us ' });
});

module.exports = router;
