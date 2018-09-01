var express = require('express');
var router = express.Router();

/* GET etbs-users listing. */
router.get('/', function(req, res, next) {
  res.send('respond etbs-permissions');
});

router.get('/form', function(req, res, next) {
  res.send('respond etbs-permissions');
});

router.post('/insert', function(req, res, next) {
  res.send('respond etbs-permissions');
});

router.get('/:id', function(req, res, next) {
  res.send('respond etbs-permissions');
});

router.post('/update', function(req, res, next) {
  res.send('respond etbs-permissions');
});

router.get('/:id/remove', function(req, res, next) {
  res.send('respond etbs-permissions');
});

router.post('/delete', function(req, res, next) {
  res.send('respond etbs-permissions');
});

router.get('/:id/roles', function(req, res, next) {
  res.send('respond etbs-permissions');
});

router.post('/:id/roles/:rolename/insert', function(req, res, next) {
  res.send('respond etbs-permissions');
});

router.post('/:id/roles/:rolename/delete', function(req, res, next) {
  res.send('respond etbs-permissions');
});

module.exports = router;
