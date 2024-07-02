var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  let data = {
    title: "Express",
    greeting: "Welcome, Good Morning",
    arr: [17, 29],
    author: {
      name: "ElGibran",
      email: "elgibran@echo.com",
    },
  };
  res.render("index", data);
});

module.exports = router;
