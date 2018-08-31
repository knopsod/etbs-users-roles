var express = require('express');
var router = express.Router();

/* GET etbs-users listing. */
router.get('/', function(req, res, next) {
  res.send('respond etbs-permissions');
});

router.post('/insert', function(req, res, next) {
  res.send('respond etbs-permissions');
});

router.post('/update', function(req, res, next) {
  res.send('respond etbs-permissions');
});

router.post('/delete', function(req, res, next) {
  res.send('respond etbs-permissions');
});

router.get('/roles', function(req, res, next) {
  res.send('respond etbs-permissions');
});

router.post('/roles/insert', function(req, res, next) {
  res.send('respond etbs-permissions');
});

router.post('/roles/delete', function(req, res, next) {
  res.send('respond etbs-permissions');
});

module.exports = router;
