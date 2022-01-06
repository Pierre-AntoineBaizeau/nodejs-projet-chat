var express = require('express');
var router = express.Router();
var app = express();

app.use('/messages', router);

/* GET messages listing. */
router.get('/', function(req, res, next) {
  res.status(200).json({msg: "get messages"});
});

/* Post  message. */
router.post('/', function(req, res, next) {
  res.status(201).json({msg: "send messages"});
});

module.exports = router;
