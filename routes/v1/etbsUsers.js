var express = require('express');
var router = express.Router();

/* GET etbs-users listing. */
router.get('/', function(req, res, next) {
  res.send('respond etbs-users');
});

module.exports = router;
