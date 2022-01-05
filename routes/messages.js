var express = require('express');
var router = express.Router();

/* GET messages listing. */
router.get('/messages', function(req, res, next) {
  res.send('Ressource message');
});

module.exports = router;
