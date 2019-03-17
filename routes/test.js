var express = require('express');
var router = express.Router();

var a
router.get('/test-1', function(req, res, next) {
  res.render('/sites/page/test1');
});
module.exports = router;
