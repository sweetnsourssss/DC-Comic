var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/comic1', function(req, res) {
  res.render('comic1');
});
router.get('/comic2', function(req, res) {
  res.render('comic2');
});
router.get('/comic3', function(req, res) {
  res.render('comic3');
});
router.get('/comic4', function(req, res) {
  res.render('comic4');
});
router.get('/comic5', function(req, res) {
  res.render('comic5');
});
module.exports = router;
