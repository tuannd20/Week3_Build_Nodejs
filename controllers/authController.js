const AuthService = require("../services/authService");

const createAccount = async (req, res, next) => {
  let data;
  const { username, password, email } = req.body;

  data = { username, password, email };
  // Simple validatetion
  if (!username || !password || !email)
    return res
      .status(400)
      .json({ state: false, message: "Missing username, password or email" });
  try {
    // Check for existing account
    const account = AuthService.findAccountByUsermane(data.username);

    if (account)
      return res
        .status(400)
        .json({ state: false, message: "Username already taken" });

    // All info good
    const newAccount = AuthService.createAccount(data);
    await newAccount.save();
    // res.json({
    //   state: true,
    //   message: "Account created successfully",
    //   newAccount,
    // });
    console.log(newAccount);
    res.render("template/index", { title: "Week 3" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ state: false, message: "Server error" });
  }
};

module.exports = { createAccount };
