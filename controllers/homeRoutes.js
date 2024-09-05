const router = require("express").Router();
const { Blog } = require("../models");

router.get("/", async (req, res) => {
  try {
    const blogData = await Blog.findAll();
    const blogs = blogData.map((blog) => blog.get({ plain: true }));

    res.render("homepage", { blogs, logged_in: req.session.logged_in });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.get("/addBlog", async (req, res) => {
  try {
    res.render("addBlog", {
      user: req.session.user,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.get("/dashboard", async (req, res) => {
  try {
    const blogData = await Blog.findAll({
      where: {
        user: req.session.user,
      },
    });
    const blogs = blogData.map((blog) => blog.get({ plain: true }));
    res.render("dashboard", { blogs, logged_in: req.session.logged_in });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

module.exports = router;
