const router = require("express").Router();
const { User } = require("../../models");

router.get("/login", (req, res) => {
  res.render("login", { logged_in: req.session.logged_in });
});

router.post("/login", async (req, res) => {
  try {
    const rawUserData = await User.findOne({ where: { login: req.body.login } });
    if (!rawUserData) {
      res.status(400).json({ message: "Incorrect user name." });
      return;
    }
    const validatePassword = rawUserData.passwordCheck(req.body.password);

    if (!validatePassword) {
      res.status(400).json({ message: "Incorrect password." });
      return;
    }

    req.session.save(() => {
      req.session.user = rawUserData.login;
      req.session.logged_in = true;

      res.json({ user: rawUserData, message: "Now logged in." });
    });
  } catch (err) {
    res.status(400).json({ message: "An error occurred", error: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const dbUserData = await User.create({
      login: req.body.login,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.user = req.body.login;
      req.session.logged_in = true;

      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
