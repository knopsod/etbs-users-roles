var express = require('express');
var router = express.Router();

/* GET etbs-users listing. */
router.get('/', function(req, res, next) {
  res.send('respond etbs-roles');
});

router.post('/insert', function(req, res, next) {
  res.send('respond etbs-roles');
});

router.post('/update', function(req, res, next) {
  res.send('respond etbs-roles');
});

router.post('/delete', function(req, res, next) {
  res.send('respond etbs-roles');
});

router.get('/users', function(req, res, next) {
  res.send('respond etbs-roles');
});

router.post('/users/insert', function(req, res, next) {
  res.send('respond etbs-roles');
});

router.post('/users/delete', function(req, res, next) {
  res.send('respond etbs-roles');
});

module.exports = router;
