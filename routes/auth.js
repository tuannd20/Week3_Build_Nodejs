var express = require("express");
const { response } = require("../app");
var router = express.Router();
var jwt = require("jsonwebtoken");
const AuthController = require("../controllers/authController");
const AccountModel = require("../database/models/account");

// router.get("/user", (req, res) => res.send("User route"));

router.get("/register", function (req, res, next) {
  res.render("template/register", { title: "Create account" });
});

// Register function
// Route POST api/auth/register
router.post("/register", AuthController.createAccount);

router.get("/login", function (req, res, next) {
  res.render("template/login_page", { title: "Login page" });
});

// Login function
// Route POST api/auth/login
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  // Simple validatetion
  if (!username || !password)
    return res
      .status(400)
      .json({ state: false, message: "Missing username or password" });

  try {
    // Check for existing account
    const account = await AccountModel.findOne({ username });
    if (!account)
      return res
        .status(400)
        .json({ state: false, message: "Incorrect username and password." });

    // Check password
    if (!password)
      returnres
        .status(400)
        .json({ state: false, message: "Incorrect username and password." });

    if (username)
      // res.json({
      //   state: true,
      //   message: "Logined successfully",
      //   account,
      // });
      console.log(account);
    res.render("template/index", { title: "Week 3" });
  } catch (err) {
    console.log(error);
    res.status(500).json({ state: false, message: "Server error" });
  }
});

// Export router
module.exports = router;
