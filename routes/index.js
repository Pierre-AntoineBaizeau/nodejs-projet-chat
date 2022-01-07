var express = require('express');
var router = express.Router();
const auth = require('./auth');
const createError = require('http-errors')

/* GET home page. */
router.get('/', function(req, res) {
  res.send('Hello World!');
});

router.use('/auth', auth);
router.use(async (req, res, next) => {
  next(createError.NotFound('Route not Found'))
})

router.use( (err, req, res, next) => {
  res.status(err.status || 500).json({
      status: false,
      message: err.message
  })
})
module.exports = router;
