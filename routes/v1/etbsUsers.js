var express = require('express');
var router = express.Router();

/* GET etbs-users listing. */
router.get('/', function(req, res, next) {
  res.render('v1/etbsUsers');
});

router.get('/form', function(req, res, next) {
  res.render('v1/etbsUsersForm');
});

router.post('/insert', function(req, res, next) {
  res.send('respond etbs-users');
});

router.get('/:id', function(req, res, next) {
  res.render('v1/etbsUsersForm');
});

router.post('/update', function(req, res, next) {
  res.send('respond etbs-users');
});

router.get('/:id/remove', function(req, res, next) {
  res.render('v1/etbsUsersForm');
});

router.post('/delete', function(req, res, next) {
  res.send('respond etbs-users');
});

router.get('/:id/users-groups', function(req, res, next) {
  res.send('respond etbs-users');
});

router.post('/:id/users-groups/:username/:group_id/insert', function(req, res, next) {
  res.send('respond etbs-users');
});

router.post('/:id/users-groups/:username/:group_id/delete', function(req, res, next) {
  res.send('respond etbs-users');
});

module.exports = router;
