var express = require('express');
var router = express.Router();

/* GET etbs-users listing. */
router.get('/', function(req, res, next) {
  res.send('respond etbs-users');
});

router.post('/insert', function(req, res, next) {
  res.send('respond etbs-users');
});

router.post('/update', function(req, res, next) {
  res.send('respond etbs-users');
});

router.post('/delete', function(req, res, next) {
  res.send('respond etbs-users');
});

router.get('/users-groups', function(req, res, next) {
  res.send('respond etbs-users');
});

router.post('/users-groups/insert', function(req, res, next) {
  res.send('respond etbs-users');
});

router.post('/users-groups/delete', function(req, res, next) {
  res.send('respond etbs-users');
});

module.exports = router;
