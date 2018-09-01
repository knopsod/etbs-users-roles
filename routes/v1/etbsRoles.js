var express = require('express');
var database = require('./database');
var router = express.Router();

/* GET etbs-users listing. */
router.get('/', function(req, res, next) {
  var conn = database.getConnection();

  if (conn) {

    var sql = "SELECT rolename, profileid FROM roles";

    conn.query(sql,
    function (err, result) {
      res.render('v1/etbsRoles', { roles: result });

      conn.end();
    });
  }

});

router.get('/form', function(req, res, next) {
  res.render('v1/etbsRolesForm');
});

router.post('/insert', function(req, res, next) {
  var rolename = req.body.rolename;
  var profileid = req.body.profileid;

  var conn = database.getConnection();

  if (conn) {

    var sql = "INSERT INTO roles (rolename, profileid) "
      + "VALUES ('" + rolename + "', '" + profileid + "')";

    conn.query(sql,
    function (err, result) {

      conn.end();
    });

    res.redirect('/etbs-roles');
  }
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
