var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(200).json({ msg: "hello" });
});

module.exports = router;
