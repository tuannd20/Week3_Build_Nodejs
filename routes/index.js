var express = require("express");
var router = express.Router();

/* GET Landing page. */
router.get("/", function (req, res, next) {
  res.render("template/index", { title: "Week 3" });
});

// Tuors section
// Get Tours page
router.get("/tours", function (req, res, next) {
  res.render("template/master", {
    title: "Tour Page",
    content: "../tour/view",
  });
});

module.exports = router;
