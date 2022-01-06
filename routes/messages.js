var express = require('express');
var router = express.Router();

/* GET messages listing. */
router.get('/', function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).json({msg: "send messages"});
});

/* Post  message. */
router.post('/', function(req, res, next) {
  res.status(201).json({msg: "send messages"});
});

module.exports = router;
